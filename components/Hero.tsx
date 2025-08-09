export default function Hero() {
  return (
    <section
      className="relative min-h-screen bg-cover bg-center bg-no-repeat flex items-center justify-center"
      style={{ backgroundImage: "url(/images/vertex-conslting.jpg)" }}
    >
      {/* Enhanced overlay with gradient */}
      <div className="absolute inset-0 bg-gradient-to-br from-black/60 via-black/40 to-black/60"></div>
      <div className="absolute inset-0 bg-[#F17105]/10"></div>
      <div className="relative z-10 text-center text-white px-4 max-w-4xl mx-auto mt-[5rem]">
        <h1 className="text-3xl md:text-5xl lg:text-7xl text-[#F17105] font-bold mb-6 leading-tight animate-fadeInUp animation-delay-800">
          VERTEX CONSULTING
        </h1>
        <p className="text-[12px] md:text-[16px] mb-8 max-w-2xl mx-auto animate-fadeInUp animation-delay-1000">
          Your trusted business partner providing comprehensive management
          consultancy and professional services to drive your organization
          forward.
        </p>
      </div>
    </section>
  );
}
