"use client";

import { Button } from "@/components/ui/button";
import { logout } from "@/app/actions/auth";
import { LogOut } from "lucide-react";
import { useFormStatus } from "react-dom"; // For pending state

function SubmitButton() {
  const { pending } = useFormStatus();

  return (
    <Button
      type="submit"
      disabled={pending}
      className="text-white text-[16px] bg-[#F17105] hover:bg-[#F17105]/50 w-fit animate-fadeInLeft animation-delay-500"
    >
      {pending ? (
        <div className="flex items-center space-x-2">
          <LogOut className="w-4 h-4 animate-spin" />
          <span>Logging out...</span>
        </div>
      ) : (
        <>
          <LogOut className="w-4 h-4 mr-2" /> Logout
        </>
      )}
    </Button>
  );
}

export default function LogoutButton() {
  return (
    <form action={logout}>
      <SubmitButton />
    </form>
  );
}
