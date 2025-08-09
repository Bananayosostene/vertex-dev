import { requireAdminAuth } from "@/app/actions/auth"; // Import the auth function
import LogoutButton from "./_components/logout-button";
import RegistrationsTable from "./_components/registrations-table";
import CreateUserForm from "./_components/create-user-form";
import { getRegistrations } from "../actions/register";

const allServices = [
  "Management Consultancy",
  "Business Strategy Development",
  "Chemical Manufacturing",
  "Fertilizers & Nitrogen Compounds",
  "Pesticides & Agrochemicals",
  "Paints & Coatings",
  "Soap & Detergents",
  "Global Trading Services",
  "Wholesale Trade",
  "Airtime Service Retail",
  "Cargo Handling",
  "Technical Testing & Analysis",
];

export default async function DashboardPage() {
  await requireAdminAuth();

  const { data: registrations, success, message } = await getRegistrations();

  if (!success) {
    return (
      <main className="min-h-screen flex flex-col">
        <div className="flex-grow container mx-auto px-4 py-12 mt-24">
          <h1 className="text-3xl font-bold text-gray-800 mb-8">
            Registrations Dashboard
          </h1>
          <div className="text-red-500">
            {message || "An error occurred while loading registrations."}
          </div>
        </div>
      </main>
    );
  }

  return (
    <main className="min-h-screen flex flex-col">
      <div className="flex-grow container mx-auto px-4 py-12 mt-24">
        <div className="flex justify-between items-center mb-8">
          {" "}
          <h1 className="text-3xl font-bold text-gray-800">
            Registrations Dashboard
          </h1>
          <LogoutButton />
        </div>
        <RegistrationsTable
          initialRegistrations={registrations || []}
          allServices={allServices}
        />
      </div>
    </main>
  );
}
