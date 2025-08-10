"use client";

import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogDescription,
} from "@/components/ui/dialog";
import { ScrollArea } from "@/components/ui/scroll-area";
import type { ContactStatus } from "@prisma/client";

interface ViewContactDialogProps {
  isOpen: boolean;
  onClose: () => void;
  contact: {
    id: string;
    name: string;
    email: string;
    phone: string | null;
    message: string;
    status: ContactStatus;
    createdAt: Date;
    updatedAt: Date;
  } | null;
}

export default function ViewContactDialog({
  isOpen,
  onClose,
  contact,
}: ViewContactDialogProps) {
  if (!contact) return null;

  return (
    <Dialog open={isOpen} onOpenChange={onClose}>
      <DialogContent className="sm:max-w-[425px] md:max-w-[600px] lg:max-w-[700px]">
        <DialogHeader>
          <DialogTitle>Contact Message Details</DialogTitle>
          <DialogDescription>
            Detailed information for the message from {contact.name}.
          </DialogDescription>
        </DialogHeader>
        <ScrollArea className="h-[400px] p-4">
          <div className="grid gap-4 py-4">
            <div className="grid grid-cols-4 items-center gap-4">
              <span className="col-span-1 text-sm font-medium text-gray-600">
                ID:
              </span>
              <span className="col-span-3 text-sm text-gray-800 break-all">
                {contact.id}
              </span>
            </div>
            <div className="grid grid-cols-4 items-center gap-4">
              <span className="col-span-1 text-sm font-medium text-gray-600">
                Name:
              </span>
              <span className="col-span-3 text-sm text-gray-800">
                {contact.name}
              </span>
            </div>
            <div className="grid grid-cols-4 items-center gap-4">
              <span className="col-span-1 text-sm font-medium text-gray-600">
                Email:
              </span>
              <span className="col-span-3 text-sm text-gray-800">
                {contact.email}
              </span>
            </div>
            <div className="grid grid-cols-4 items-center gap-4">
              <span className="col-span-1 text-sm font-medium text-gray-600">
                Phone:
              </span>
              <span className="col-span-3 text-sm text-gray-800">
                {contact.phone || "N/A"}
              </span>
            </div>
            <div className="grid grid-cols-4 items-center gap-4">
              <span className="col-span-1 text-sm font-medium text-gray-600">
                Status:
              </span>
              <span className="col-span-3 text-sm text-gray-800">
                {contact.status}
              </span>
            </div>
            <div className="grid grid-cols-4 items-start gap-4">
              <span className="col-span-1 text-sm font-medium text-gray-600">
                Message:
              </span>
              <p className="col-span-3 text-sm text-gray-800 whitespace-pre-wrap">
                {contact.message}
              </p>
            </div>
            <div className="grid grid-cols-4 items-center gap-4">
              <span className="col-span-1 text-sm font-medium text-gray-600">
                Received On:
              </span>
              <span className="col-span-3 text-sm text-gray-800">
                {new Date(contact.createdAt).toLocaleString()}
              </span>
            </div>
            <div className="grid grid-cols-4 items-center gap-4">
              <span className="col-span-1 text-sm font-medium text-gray-600">
                Last Updated:
              </span>
              <span className="col-span-3 text-sm text-gray-800">
                {new Date(contact.updatedAt).toLocaleString()}
              </span>
            </div>
          </div>
        </ScrollArea>
      </DialogContent>
    </Dialog>
  );
}
