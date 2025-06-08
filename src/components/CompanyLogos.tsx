
const logos = [
  { name: "TechFlow", src: "https://via.placeholder.com/120x60/E5E7EB/6B7280?text=TechFlow" },
  { name: "Precision Mfg", src: "https://via.placeholder.com/120x60/E5E7EB/6B7280?text=Precision" },
  { name: "Global Textiles", src: "https://via.placeholder.com/120x60/E5E7EB/6B7280?text=GlobalTex" },
  { name: "Innovation Corp", src: "https://via.placeholder.com/120x60/E5E7EB/6B7280?text=Innovation" },
  { name: "Trading Partners", src: "https://via.placeholder.com/120x60/E5E7EB/6B7280?text=TradePart" },
  { name: "Export Solutions", src: "https://via.placeholder.com/120x60/E5E7EB/6B7280?text=ExportSol" }
];

const CompanyLogos = () => {
  return (
    <section className="py-16 bg-white">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h3 className="text-2xl font-semibold text-navy mb-4">
            Trusted by Industry Leaders
          </h3>
          <p className="text-gray-600">
            Join hundreds of companies that trust us with their international trade needs.
          </p>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-8 items-center">
          {logos.map((logo, index) => (
            <div key={index} className="flex justify-center">
              <img
                src={logo.src}
                alt={logo.name}
                className="h-12 object-contain opacity-60 hover:opacity-100 transition-opacity grayscale hover:grayscale-0"
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default CompanyLogos;
