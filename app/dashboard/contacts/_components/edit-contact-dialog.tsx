"use client";

import { useEffect } from "react";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogDescription,
  DialogFooter,
} from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Loader2, CheckCircle, AlertCircle } from "lucide-react";
import { useActionState } from "react"
import { ContactStatus } from "@prisma/client";
import { updateContact } from "@/app/actions/contactActions";

interface EditContactDialogProps {
  isOpen: boolean;
  onClose: () => void;
  contact: {
    id: string;
    name: string;
    email: string;
    phone: string | null;
    message: string;
    status: ContactStatus;
  } | null;
}

export default function EditContactDialog({
  isOpen,
  onClose,
  contact,
}: EditContactDialogProps) {
  const initialState = {
    success: false,
    message: "",
    errors: {},
  };
  const [state, formAction, isPending] = useActionState(
    updateContact,
    initialState
  );

  useEffect(() => {
    if (state.success) {
      onClose(); // Close dialog on successful update
    }
  }, [state.success, onClose]);

  if (!contact) return null;

  return (
    <Dialog open={isOpen} onOpenChange={onClose}>
      <DialogContent className="sm:max-w-[425px] md:max-w-[600px] lg:max-w-[700px]">
        <DialogHeader>
          <DialogTitle>Edit Contact Message</DialogTitle>
          <DialogDescription>
            Make changes to the contact message details here. Click save when
            you're done.
          </DialogDescription>
        </DialogHeader>
        <form action={formAction} className="grid gap-4 py-4">
          <input type="hidden" name="id" value={contact.id} />
          <div className="grid grid-cols-4 items-center gap-4">
            <Label htmlFor="name" className="text-right">
              Name
            </Label>
            <Input
              id="name"
              name="name"
              defaultValue={contact.name}
              className="col-span-3"
              disabled={isPending}
            />
            {state.errors?.name && (
              <p className="col-span-4 text-red-500 text-sm text-right">
                {state.errors.name[0]}
              </p>
            )}
          </div>
          <div className="grid grid-cols-4 items-center gap-4">
            <Label htmlFor="email" className="text-right">
              Email
            </Label>
            <Input
              id="email"
              name="email"
              defaultValue={contact.email}
              className="col-span-3"
              disabled={isPending}
            />
            {state.errors?.email && (
              <p className="col-span-4 text-red-500 text-sm text-right">
                {state.errors.email[0]}
              </p>
            )}
          </div>
          <div className="grid grid-cols-4 items-center gap-4">
            <Label htmlFor="phone" className="text-right">
              Phone
            </Label>
            <Input
              id="phone"
              name="phone"
              defaultValue={contact.phone || ""}
              className="col-span-3"
              disabled={isPending}
            />
            {state.errors?.phone && (
              <p className="col-span-4 text-red-500 text-sm text-right">
                {state.errors.phone[0]}
              </p>
            )}
          </div>
          <div className="grid grid-cols-4 items-start gap-4">
            <Label htmlFor="message" className="text-right mt-2">
              Message
            </Label>
            <Textarea
              id="message"
              name="message"
              defaultValue={contact.message}
              className="col-span-3"
              rows={5}
              disabled={isPending}
            />
            {state.errors?.message && (
              <p className="col-span-4 text-red-500 text-sm text-right">
                {state.errors.message[0]}
              </p>
            )}
          </div>
          <div className="grid grid-cols-4 items-center gap-4">
            <Label htmlFor="status" className="text-right">
              Status
            </Label>
            <Select
              name="status"
              defaultValue={contact.status}
              disabled={isPending}
            >
              <SelectTrigger className="col-span-3">
                <SelectValue placeholder="Select status" />
              </SelectTrigger>
              <SelectContent>
                {Object.values(ContactStatus).map((status) => (
                  <SelectItem key={status} value={status}>
                    {status}
                  </SelectItem>
                ))}
              </SelectContent>
            </Select>
            {state.errors?.status && (
              <p className="col-span-4 text-red-500 text-sm text-right">
                {state.errors.status[0]}
              </p>
            )}
          </div>

          {state.message && (
            <div
              className={`col-span-4 flex items-center space-x-2 p-3 rounded-lg text-sm ${
                state.success
                  ? "bg-green-50 text-green-700 border border-green-200"
                  : "bg-red-50 text-red-700 border border-red-200"
              }`}
            >
              {state.success ? (
                <CheckCircle className="w-4 h-4" />
              ) : (
                <AlertCircle className="w-4 h-4" />
              )}
              <span>{state.message}</span>
            </div>
          )}

          <DialogFooter className="col-span-4">
            <Button type="submit" disabled={isPending}>
              {isPending ? (
                <div className="flex items-center space-x-2">
                  <Loader2 className="w-4 h-4 animate-spin" />
                  <span>Saving...</span>
                </div>
              ) : (
                "Save changes"
              )}
            </Button>
          </DialogFooter>
        </form>
      </DialogContent>
    </Dialog>
  );
}
