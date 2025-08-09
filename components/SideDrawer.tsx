"use client";
import { useEffect } from "react";
import {
  X,
  Facebook,
  Twitter,
  Instagram,
  Youtube,
  MessageCircle,
} from "lucide-react";

interface SideDrawerProps {
  isOpen: boolean;
  onClose: () => void;
}

export default function SideDrawer({ isOpen, onClose }: SideDrawerProps) {
  // Handle escape key
  useEffect(() => {
    const handleEscape = (e: KeyboardEvent) => {
      if (e.key === "Escape" && isOpen) {
        onClose();
      }
    };
    document.addEventListener("keydown", handleEscape);
    return () => document.removeEventListener("keydown", handleEscape);
  }, [isOpen, onClose]);

  return (
    <>
      <div
        className={`fixed top-0 right-0 h-full w-96 bg-[#F17105]/90 backdrop-blur-sm text-white z-50 transform transition-all duration-300 ease-in-out overflow-y-auto shadow-2xl ${
          isOpen ? "translate-x-0" : "translate-x-full"
        }`}
      >
        {/* Header */}
        <div
          className={`sticky top-0 z-10 bg-[#F17105]/90 backdrop-blur-sm flex justify-between items-center p-6 border-b border-orange-200/30 transform transition-all duration-500 delay-100 ${
            isOpen ? "translate-y-0 opacity-100" : "-translate-y-4 opacity-0"
          }`}
        >
          <div className="flex items-center space-x-2">
            <span className="text-xl font-bold">VERTEX CONSULTING</span>
          </div>
          <button
            onClick={onClose}
            className="text-white hover:text-orange-200 transition-colors hover:rotate-90 transform duration-200"
          >
            <X className="w-6 h-6" />
          </button>
        </div>
        {/* Content */}
        <div className="p-6 space-y-8">
          {/* Company Info */}
          <div
            className={`transform transition-all duration-500 delay-200 ${
              isOpen ? "translate-y-0 opacity-100" : "translate-y-4 opacity-0"
            }`}
          >
            <h3 className="text-lg font-semibold mb-4 text-orange-200">
              About VERTEX CONSULTING
            </h3>
            <p className="text-orange-100/90 mb-4 leading-relaxed text-sm">
              Ready to transform your business with our professional consulting
              services? Contact us today for a free consultation and discover
              how we can help you achieve your business goals through strategic
              planning and operational excellence.
            </p>
            <div className="flex space-x-3">
              <Facebook className="w-4 h-4 hover:text-orange-200 cursor-pointer transition-all duration-200 hover:scale-125 hover:-translate-y-1" />
              <Twitter className="w-4 h-4 hover:text-orange-200 cursor-pointer hover:scale-110 transition-transform" />
              <Instagram className="w-4 h-4 hover:text-orange-200 cursor-pointer transition-all duration-200 hover:scale-125 hover:-translate-y-1" />
              <Youtube className="w-4 h-4 hover:text-orange-200 cursor-pointer transition-all duration-200 hover:scale-125 hover:-translate-y-1" />
              <a
                href="https://wa.me/250784761274"
                target="_blank"
                rel="noopener noreferrer"
              >
                <MessageCircle className="w-4 h-4 hover:text-orange-200 cursor-pointer transition-all duration-200 hover:scale-125 hover:-translate-y-1" />
              </a>
            </div>
          </div>
          {/* Animated Divider */}
          <div
            className={`border-t border-orange-200/30 transform transition-all duration-500 delay-300 ${
              isOpen ? "scale-x-100 opacity-100" : "scale-x-0 opacity-0"
            }`}
          />
          {/* Our Services */}
          <div
            className={`transform transition-all duration-500 delay-400 ${
              isOpen ? "translate-y-0 opacity-100" : "translate-y-4 opacity-0"
            }`}
          >
            <h3 className="text-lg font-semibold mb-4 text-orange-200">
              Our Services
            </h3>
            <div className="space-y-3">
              {[
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
              ].map((service, index) => (
                <div
                  key={service}
                  className={`group transform transition-all duration-300 ${
                    isOpen
                      ? "translate-x-0 opacity-100"
                      : "-translate-x-4 opacity-0"
                  }`}
                  style={{ transitionDelay: `${500 + index * 50}ms` }}
                >
                  <span className="text-orange-100/90 hover:text-orange-200 transition-all duration-200 cursor-pointer block text-sm hover:translate-x-2 hover:font-medium relative">
                    <span className="absolute left-0 w-0 h-0.5 bg-orange-200 bottom-0 transition-all duration-200 group-hover:w-full"></span>
                    {service}
                  </span>
                </div>
              ))}
            </div>
          </div>
          {/* Animated Divider */}
          <div
            className={`border-t border-orange-200/30 transform transition-all duration-500 delay-700 ${
              isOpen ? "scale-x-100 opacity-100" : "scale-x-0 opacity-0"
            }`}
          />
          {/* Contact Us */}
          <div
            className={`transform transition-all duration-500 delay-800 ${
              isOpen ? "translate-y-0 opacity-100" : "translate-y-4 opacity-0"
            }`}
          >
            <h3 className="text-lg font-semibold mb-4 text-orange-200">
              Contact Us
            </h3>
            <div className="space-y-4">
              <div className="group hover:bg-orange-800/20 p-2 rounded transition-all duration-200">
                <h4 className="text-sm font-semibold mb-1 text-orange-200">
                  We're Open
                </h4>
                <p className="text-orange-100/90 text-sm">24/7</p>
              </div>
              <div className="group hover:bg-orange-800/20 p-2 rounded transition-all duration-200">
                <h4 className="text-sm font-semibold mb-1 text-orange-200">
                  Office Location
                </h4>
                <p className="text-orange-100/90 text-sm">Nyarugenge, Kigali</p>
              </div>
              <div className="group hover:bg-orange-800/20 p-2 rounded transition-all duration-200">
                <h4 className="text-sm font-semibold mb-1 text-orange-200">
                  Send a Message
                </h4>
                <p className="text-orange-100/90 hover:text-orange-200 transition-colors cursor-pointer text-sm hover:underline">
                  vertexconsultancy84@gmail.com
                </p>
              </div>
            </div>
          </div>
          {/* Bottom spacing */}
          <div className="h-8"></div>
        </div>
      </div>
    </>
  );
}
