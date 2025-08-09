
import { requireAdminAuth } from "@/app/actions/auth"; // Import the auth function
import CreateUserForm from "../_components/create-user-form";

export default async function DashboardPage() {
  await requireAdminAuth();


  return (
    <main className="min-h-screen flex flex-col">
      <div className="mt-12">
        <CreateUserForm />
          </div>
    </main>

  );
}
