import { MessageSquare, Send } from "lucide-react";
import Link from "next/link";

const services = [
  {
    id: 1,
    title: "Management Consultancy",
    description:
      "Strategic business consulting services to optimize your operations and drive sustainable growth.",
    image: "/images/vertex-conslting.jpg?height=300&width=400",
    date: "24/7",
    comments: "Available",
  },
  {
    id: 2,
    title: "Business Strategy Development",
    description:
      "Comprehensive strategic planning and business development services for long-term success.",
    image: "/images/service2.png?height=300&width=400",
    date: "Strategic",
    comments: "Planning",
  },
  {
    id: 3,
    title: "Chemical Manufacturing",
    description:
      "Professional consulting for basic chemicals manufacturing and production optimization.",
    image: "/images/service3.png?height=300&width=400",
    date: "Quality",
    comments: "Assured",
  },
  {
    id: 4,
    title: "Fertilizers & Nitrogen Compounds",
    description:
      "Specialized consulting for fertilizer production and nitrogen compound manufacturing.",
    image: "/images/service4.png?height=300&width=400",
    date: "Agro",
    comments: "Solutions",
  },
  {
    id: 5,
    title: "Pesticides & Agrochemicals",
    description:
      "Expert guidance in pesticide and agrochemical product development and manufacturing.",
    image: "/images/service5.png?height=300&width=400",
    date: "Safe",
    comments: "Products",
  },
  {
    id: 6,
    title: "Paints & Coatings",
    description:
      "Consulting services for paint, varnish, and coating manufacturing processes.",
    image: "/images/service6.png?height=300&width=400",
    date: "Quality",
    comments: "Coatings",
  },
  {
    id: 7,
    title: "Soap & Detergents",
    description:
      "Professional consulting for soap, detergent, and cleaning product manufacturing.",
    image: "/images/service7.png?height=300&width=400",
    date: "Clean",
    comments: "Solutions",
  },
  {
    id: 8,
    title: "Global Trading Services",
    description:
      "International trade consulting and global market entry strategies for businesses.",
    image: "/images/service8.png?height=300&width=400",
    date: "Global",
    comments: "Reach",
  },
  {
    id: 9,
    title: "Wholesale Trade",
    description:
      "Non-specialized wholesale trade consulting and distribution network optimization.",
    image: "/images/service9.png?height=300&width=400",
    date: "Trade",
    comments: "Networks",
  },
  {
    id: 10,
    title: "Airtime Service Retail",
    description:
      "Retail service consulting for airtime and telecommunications service distribution.",
    image: "/images/service10.png?height=300&width=400",
    date: "Telecom",
    comments: "Services",
  },
  {
    id: 11,
    title: "Cargo Handling",
    description:
      "Professional logistics and cargo handling consulting for efficient operations.",
    image: "/images/service11.png?height=300&width=400",
    date: "Logistics",
    comments: "Solutions",
  },
  {
    id: 12,
    title: "Technical Testing & Analysis",
    description:
      "Comprehensive technical testing and analysis services for quality assurance.",
    image: "/images/service12.png?height=300&width=400",
    date: "Quality",
    comments: "Testing",
  },
];

export default function ServicesSection() {
  return (
    <section className="py-12 bg-gray-50">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-5">
          <h2 className="text-2xl font-bold text-[#0066FF]">Our Services</h2>
        </div>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          {services.map((service) => (
            <div
              key={service.id}
              className="bg-white rounded-lg shadow-lg overflow-hidden hover:shadow-xl transition-shadow duration-300"
            >
              <div className="flex">
                <div className="relative w-2/5 h-48">
                  <img
                    src={service.image || "/images/vertex-conslting.jpg"}
                    alt={service.title}
                    className="w-full h-full object-cover"
                  />
                  <div className="absolute top-3 left-3 bg-[#0066FF]/90 text-white rounded-lg px-2 py-1 backdrop-blur-sm">
                    <div className="text-lg font-bold leading-none">
                      {service.id.toString().padStart(2, "0")}
                    </div>
                    <div className="text-xs opacity-90">{service.date}</div>
                  </div>
                </div>
                <div className="w-3/5 p-4 flex flex-col justify-between bg-[#E1EBE2]">
                  <div>
                    <h3 className="text-[16px] font-bold text-gray-900 mb-2 leading-tight">
                      {service.title}
                    </h3>
                    <p className="text-gray-600 text-[14px] leading-relaxed mb-3">
                      {service.description}
                    </p>
                  </div>
                  <div className="flex justify-between">
                    <div className="flex items-center text-gray-500 text-[14px] cursor-pointer">
                      <MessageSquare className="w-4 h-4 mr-2" />
                      <span>{service.comments}</span>
                    </div>
                    <div>
                      <Link href={"/contact/#contact-form"}>
                        <Send className="w-4 h-4 text-[#F17105] cursor-pointer" />
                      </Link>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
