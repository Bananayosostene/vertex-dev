import { requireAdminAuth } from "@/app/actions/auth";
import TopBar from "./_components/topbar";

export default async function DashboardLayout({
    children,
}: {
    children: React.ReactNode;
}) {
    await requireAdminAuth(); 
    return (
        <main className="min-h-screen flex flex-col">
            <TopBar />
            <div className="flex-grow container mx-auto px-4 py-12 mt-24">
                {children}
            </div>
        </main>
    );
}