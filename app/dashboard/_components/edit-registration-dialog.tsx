"use client";

import { useEffect, useState } from "react";
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
import { Checkbox } from "@/components/ui/checkbox";
import { Loader2, CheckCircle, AlertCircle } from "lucide-react";
import { useActionState } from "react";
import { updateRegistration } from "@/app/actions/register";

interface EditRegistrationDialogProps {
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
  } | null;
  allServices: string[];
}

export default function EditRegistrationDialog({
  isOpen,
  onClose,
  registration,
  allServices,
}: EditRegistrationDialogProps) {
  const initialState = {
    success: false,
    message: "",
    errors: {},
  };
  const [state, formAction, isPending] = useActionState(
    updateRegistration,
    initialState
  );
  const [selectedServicesState, setSelectedServicesState] = useState<string[]>(
    []
  );

  useEffect(() => {
    if (registration) {
      setSelectedServicesState(registration.selectedServices);
    }
  }, [registration]);

  useEffect(() => {
    if (state.success) {
      // Optionally clear form or close dialog on success
      // For uncontrolled inputs, we don't clear them here.
      // The dialog will close, effectively resetting the form.
      onClose();
    }
  }, [state.success, onClose]);

  const handleServiceToggle = (service: string) => {
    setSelectedServicesState((prev) =>
      prev.includes(service)
        ? prev.filter((s) => s !== service)
        : [...prev, service]
    );
  };

  if (!registration) return null;

  return (
    <Dialog open={isOpen} onOpenChange={onClose}>
      <DialogContent className="sm:max-w-[425px] md:max-w-[600px] lg:max-w-[700px]">
        <DialogHeader>
          <DialogTitle>Edit Registration</DialogTitle>
          <DialogDescription>
            Make changes to the registration details here. Click save when
            you're done.
          </DialogDescription>
        </DialogHeader>
        <form action={formAction} className="grid gap-4 py-4">
          <input type="hidden" name="id" value={registration.id} />
          <div className="grid grid-cols-4 items-center gap-4">
            <Label htmlFor="companyName" className="text-right">
              Company/User Name
            </Label>
            <Input
              id="companyName"
              name="companyName"
              defaultValue={registration.companyName}
              className="col-span-3"
              disabled={isPending}
            />
            {state.errors?.companyName && (
              <p className="col-span-4 text-red-500 text-sm text-right">
                {state.errors.companyName[0]}
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
              defaultValue={registration.email}
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
            <Label htmlFor="tinNumber" className="text-right">
              TIN Number
            </Label>
            <Input
              id="tinNumber"
              name="tinNumber"
              defaultValue={registration.tinNumber}
              className="col-span-3"
              disabled={isPending}
            />
            {state.errors?.tinNumber && (
              <p className="col-span-4 text-red-500 text-sm text-right">
                {state.errors.tinNumber[0]}
              </p>
            )}
          </div>
          <div className="grid grid-cols-4 items-center gap-4">
            <Label htmlFor="phoneNumber" className="text-right">
              Phone Number
            </Label>
            <Input
              id="phoneNumber"
              name="phoneNumber"
              defaultValue={registration.phoneNumber}
              className="col-span-3"
              disabled={isPending}
            />
            {state.errors?.phoneNumber && (
              <p className="col-span-4 text-red-500 text-sm text-right">
                {state.errors.phoneNumber[0]}
              </p>
            )}
          </div>
          <div className="grid grid-cols-4 items-center gap-4">
            <Label htmlFor="location" className="text-right">
              Location
            </Label>
            <Input
              id="location"
              name="location"
              defaultValue={registration.location}
              className="col-span-3"
              disabled={isPending}
            />
            {state.errors?.location && (
              <p className="col-span-4 text-red-500 text-sm text-right">
                {state.errors.location[0]}
              </p>
            )}
          </div>
          <div className="grid grid-cols-4 items-start gap-4">
            <Label className="text-right mt-2">Selected Services</Label>
            <div className="col-span-3 grid grid-cols-1 gap-2 max-h-40 overflow-y-auto border p-2 rounded-md">
              {allServices.map((service) => (
                <div key={service} className="flex items-center space-x-2">
                  <Checkbox
                    id={`service-${service}`}
                    name="selectedServices"
                    value={service}
                    checked={selectedServicesState.includes(service)}
                    onCheckedChange={(checked) => {
                      if (checked) {
                        handleServiceToggle(service);
                      } else {
                        handleServiceToggle(service);
                      }
                    }}
                    disabled={isPending}
                  />
                  <Label htmlFor={`service-${service}`}>{service}</Label>
                </div>
              ))}
            </div>
            {state.errors?.selectedServices && (
              <p className="col-span-4 text-red-500 text-sm text-right">
                {state.errors.selectedServices[0]}
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
