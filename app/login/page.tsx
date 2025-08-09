import { getAdminSession } from "@/app/actions/auth";
import Footer from "@/components/Footer";
import LoginForm from "@/components/login-form";
import { redirect } from "next/navigation";

export default async function LoginPage() {
  const admin = await getAdminSession();
  if (admin && admin.role === "admin") {
    redirect("/dashboard"); 
  }

  return (
      <main>
          <LoginForm />
            <Footer />
    </main>
  );
}
