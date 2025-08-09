"use client";

import { useState } from "react";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { Button } from "@/components/ui/button";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { MoreHorizontal, Eye, Edit, Trash2, Loader2 } from "lucide-react";
import EditRegistrationDialog from "./edit-registration-dialog";
import { useActionState } from "react";
import { deleteRegistration } from "@/app/actions/register";
import ViewRegistrationDialog from "./view-registration-dialog";

interface RegistrationsTableProps {
  initialRegistrations: {
    id: string;
    companyName: string;
    email: string;
    tinNumber: string;
    phoneNumber: string;
    location: string;
    selectedServices: string[];
    createdAt: Date;
    updatedAt: Date;
  }[];
  allServices: string[];
}

export default function RegistrationsTable({
  initialRegistrations,
  allServices,
}: RegistrationsTableProps) {
  const [registrations, setRegistrations] = useState(initialRegistrations);
  const [viewDialogOpen, setViewDialogOpen] = useState(false);
  const [editDialogOpen, setEditDialogOpen] = useState(false);
  const [selectedRegistration, setSelectedRegistration] = useState<any>(null);

  const [deleteState, deleteAction, isDeleting] = useActionState(
    async (state: { success: boolean; message: string }, id: string) => {
      const result = await deleteRegistration(id);
      if (result.success) {
        setRegistrations((prev) => prev.filter((reg) => reg.id !== id));
      }
      return result;
    },
    { success: false, message: "" }
  );

  const handleView = (registration: any) => {
    setSelectedRegistration(registration);
    setViewDialogOpen(true);
  };

  const handleEdit = (registration: any) => {
    setSelectedRegistration(registration);
    setEditDialogOpen(true);
  };

  const handleDelete = async (id: string) => {
    if (window.confirm("Are you sure you want to delete this registration?")) {
      await deleteAction(id);
    }
  };

  return (
    <div className="rounded-md border">
      <Table>
        <TableHeader>
          <TableRow>
            <TableHead>Company/User Name</TableHead>
            <TableHead>Email</TableHead>
            <TableHead>Phone Number</TableHead>
            <TableHead>Location</TableHead>
            <TableHead>Services</TableHead>
            <TableHead className="text-right">Actions</TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          {registrations.length === 0 ? (
            <TableRow>
              <TableCell colSpan={6} className="h-24 text-center text-gray-500">
                No registrations found.
              </TableCell>
            </TableRow>
          ) : (
            registrations.map((registration) => (
              <TableRow key={registration.id}>
                <TableCell className="font-medium">
                  {registration.companyName}
                </TableCell>
                <TableCell>{registration.email}</TableCell>
                <TableCell>{registration.phoneNumber}</TableCell>
                <TableCell>{registration.location}</TableCell>
                <TableCell>
                  {registration.selectedServices.length > 0
                    ? registration.selectedServices.join(", ")
                    : "N/A"}
                </TableCell>
                <TableCell className="text-right">
                  <DropdownMenu>
                    <DropdownMenuTrigger asChild>
                      <Button variant="ghost" className="h-8 w-8 p-0">
                        <span className="sr-only">Open menu</span>
                        <MoreHorizontal className="h-4 w-4" />
                      </Button>
                    </DropdownMenuTrigger>
                    <DropdownMenuContent align="end">
                      <DropdownMenuItem
                        onClick={() => handleView(registration)}
                      >
                        <Eye className="mr-2 h-4 w-4" /> View
                      </DropdownMenuItem>
                      <DropdownMenuItem
                        onClick={() => handleEdit(registration)}
                      >
                        <Edit className="mr-2 h-4 w-4" /> Edit
                      </DropdownMenuItem>
                      <DropdownMenuItem
                        onClick={() => handleDelete(registration.id)}
                        disabled={isDeleting}
                      >
                        {isDeleting && deleteState.message === "Deleting..." ? ( // Simple check for specific deletion
                          <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                        ) : (
                          <Trash2 className="mr-2 h-4 w-4" />
                        )}
                        Delete
                      </DropdownMenuItem>
                    </DropdownMenuContent>
                  </DropdownMenu>
                </TableCell>
              </TableRow>
            ))
          )}
        </TableBody>
      </Table>

      <ViewRegistrationDialog
        isOpen={viewDialogOpen}
        onClose={() => setViewDialogOpen(false)}
        registration={selectedRegistration}
      />
      <EditRegistrationDialog
        isOpen={editDialogOpen}
        onClose={() => setEditDialogOpen(false)}
        registration={selectedRegistration}
        allServices={allServices}
      />
    </div>
  );
}
