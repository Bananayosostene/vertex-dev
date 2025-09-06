"use client";

import { useActionState, useEffect, useRef } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Loader2, CheckCircle, AlertCircle } from "lucide-react";
import { login } from "@/app/actions/auth";

export default function LoginForm() {
  const initialState = {
    success: false,
    message: "",
  };
  const [state, formAction, isPending] = useActionState(login, initialState);
  const formRef = useRef<HTMLFormElement>(null);

  useEffect(() => {
    if (state.success) {
      formRef.current?.reset();
    }
  }, [state.success]);

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100">
      <div className="bg-white p-8 rounded-lg shadow-md w-full max-w-md border border-gray-200">
        <h1 className="text-2xl font-bold mb-6 text-center text-gray-800">
          Admin Login
        </h1>
        <form ref={formRef} action={formAction} className="space-y-5">
          <div>
            <Label htmlFor="email">Email</Label>
            <Input
              id="email"
              name="email"
              type="email"
              placeholder="admin@vertexconsulting.com"
              required
              disabled={isPending}
              className="w-full h-11 px-4 border text-base border-gray-300 rounded-lg focus:ring-2 focus:ring-[#F17105] focus:border-transparent transition-all duration-100"
            />
          </div>
          <div>
            <Label htmlFor="password">Password</Label>
            <Input
              id="password"
              name="password"
              type="password"
              placeholder="Enter password"
              required
              disabled={isPending}
              className="w-full h-11 px-4 border text-base border-gray-300 rounded-lg focus:ring-2 focus:ring-[#F17105] focus:border-transparent transition-all duration-100"
            />
          </div>

          {state.message && (
            <div
              className={`flex items-center space-x-2 p-3 rounded-lg text-sm ${
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

          <Button
            type="submit"
            disabled={isPending}
            className="w-full bg-[#F17105] hover:bg-[#F17105]/90 text-white font-semibold rounded-lg py-3 text-lg hover:scale-[1.01] transition-all duration-100 shadow-md disabled:opacity-50 disabled:cursor-not-allowed disabled:hover:scale-100"
          >
            {isPending ? (
              <div className="flex items-center space-x-2">
                <Loader2 className="w-4 h-4 animate-spin" />
                <span>Logging in...</span>
              </div>
            ) : (
              "Login"
            )}
          </Button>
        </form>
      </div>
    </div>
  );
}
