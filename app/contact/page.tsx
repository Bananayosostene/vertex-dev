import Header from "@/components/Header";
import Footer from "@/components/Footer";
import Link from "next/link";
import ContactSection from "@/components/ContactSection";

export default function ContactPage() {
  return (
    <main className="min-h-screen">
      <div
        className="relative min-h-[60vh] bg-cover bg-center bg-no-repeat"
        style={{
          backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.4), rgba(0, 0, 0, 0.4)), url('/images/contact.jpeg/?height=800&width=1200')`,
        }}
      >
        <Header />

        <div className="absolute inset-0 flex items-center justify-start">
          <div className="container mx-auto px-[3rem] sm:px-[3rem] md:px-[3rem] lg:px-[4rem] max-w-7xl">
            <div className="text-white max-w-2xl pt-32">
              <nav className="mb-6">
                <div className="flex items-center space-x-2 text-sm">
                  <Link
                    href="/"
                    className="text-gray-300 hover:text-white transition-colors"
                  >
                    Home
                  </Link>
                  <span className="text-gray-300">{">"}</span>
                  <span className="text-white font-medium">Contact</span>
                </div>
              </nav>

              <h1 className="text-5xl md:text-5xl font-bold mb-6 leading-tight text-[#F17105]">
                CONTACT
              </h1>

              <p className="text-xl md:text-[14px] text-gray-200 font-light">
                Transform Your Business with Vertex Consulting!
              </p>
            </div>
          </div>
        </div>
      </div>

      <div className="container mx-auto px-4 max-w-7xl">
        <ContactSection />
      </div>

      <Footer />
    </main>
  );
}
