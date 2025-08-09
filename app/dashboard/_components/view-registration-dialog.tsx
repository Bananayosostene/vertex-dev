"use client";

import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogDescription,
} from "@/components/ui/dialog";
import { ScrollArea } from "@/components/ui/scroll-area";

interface ViewRegistrationDialogProps {
  isOpen: boolean;
  onClose: () => void;
  registration: {
    id: string;
    companyName: string;
    email: string;
    tinNumber: string;
    phoneNumber: string;
    location: string;
    selectedServices: string[];
    createdAt: Date;
    updatedAt: Date;
  } | null;
}

export default function ViewRegistrationDialog({
  isOpen,
  onClose,
  registration,
}: ViewRegistrationDialogProps) {
  if (!registration) return null;

  return (
    <Dialog open={isOpen} onOpenChange={onClose}>
      <DialogContent className="sm:max-w-[425px] md:max-w-[600px] lg:max-w-[700px]">
        <DialogHeader>
          <DialogTitle>Registration Details</DialogTitle>
          <DialogDescription>
            Detailed information for {registration.companyName}.
          </DialogDescription>
        </DialogHeader>
        <ScrollArea className="h-[400px] p-4">
          <div className="grid gap-4 py-4">
            <div className="grid grid-cols-4 items-center gap-4">
              <span className="col-span-1 text-sm font-medium text-gray-600">
                ID:
              </span>
              <span className="col-span-3 text-sm text-gray-800 break-all">
                {registration.id}
              </span>
            </div>
            <div className="grid grid-cols-4 items-center gap-4">
              <span className="col-span-1 text-sm font-medium text-gray-600">
                Company/User Name:
              </span>
              <span className="col-span-3 text-sm text-gray-800">
                {registration.companyName}
              </span>
            </div>
            <div className="grid grid-cols-4 items-center gap-4">
              <span className="col-span-1 text-sm font-medium text-gray-600">
                Email:
              </span>
              <span className="col-span-3 text-sm text-gray-800">
                {registration.email}
              </span>
            </div>
            <div className="grid grid-cols-4 items-center gap-4">
              <span className="col-span-1 text-sm font-medium text-gray-600">
                TIN Number:
              </span>
              <span className="col-span-3 text-sm text-gray-800">
                {registration.tinNumber}
              </span>
            </div>
            <div className="grid grid-cols-4 items-center gap-4">
              <span className="col-span-1 text-sm font-medium text-gray-600">
                Phone Number:
              </span>
              <span className="col-span-3 text-sm text-gray-800">
                {registration.phoneNumber}
              </span>
            </div>
            <div className="grid grid-cols-4 items-center gap-4">
              <span className="col-span-1 text-sm font-medium text-gray-600">
                Location:
              </span>
              <span className="col-span-3 text-sm text-gray-800">
                {registration.location}
              </span>
            </div>
            <div className="grid grid-cols-4 items-start gap-4">
              <span className="col-span-1 text-sm font-medium text-gray-600">
                Selected Services:
              </span>
              <ul className="col-span-3 text-sm text-gray-800 list-disc pl-5">
                {registration.selectedServices.map((service, index) => (
                  <li key={index}>{service}</li>
                ))}
              </ul>
            </div>
            <div className="grid grid-cols-4 items-center gap-4">
              <span className="col-span-1 text-sm font-medium text-gray-600">
                Registered On:
              </span>
              <span className="col-span-3 text-sm text-gray-800">
                {new Date(registration.createdAt).toLocaleString()}
              </span>
            </div>
            <div className="grid grid-cols-4 items-center gap-4">
              <span className="col-span-1 text-sm font-medium text-gray-600">
                Last Updated:
              </span>
              <span className="col-span-3 text-sm text-gray-800">
                {new Date(registration.updatedAt).toLocaleString()}
              </span>
            </div>
          </div>
        </ScrollArea>
      </DialogContent>
    </Dialog>
  );
}
