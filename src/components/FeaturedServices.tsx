
import { Card, CardContent } from "@/components/ui/card";
import { Truck, FileCheck, Search, Globe } from "lucide-react";

const services = [
  {
    icon: Truck,
    title: "International Logistics",
    description: "End-to-end logistics solutions for seamless global shipping and delivery.",
    features: ["Air & Sea Freight", "Warehousing", "Door-to-Door Delivery"]
  },
  {
    icon: FileCheck,
    title: "Customs Handling",
    description: "Expert customs clearance and documentation for smooth border crossings.",
    features: ["Documentation", "Clearance", "Compliance"]
  },
  {
    icon: Search,
    title: "Global Sourcing",
    description: "Find the best suppliers worldwide with our extensive network and expertise.",
    features: ["Supplier Verification", "Quality Control", "Negotiation"]
  },
  {
    icon: Globe,
    title: "Trade Consultation",
    description: "Strategic guidance for entering new markets and optimizing trade operations.",
    features: ["Market Analysis", "Risk Assessment", "Strategy Planning"]
  }
];

const FeaturedServices = () => {
  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl lg:text-4xl font-bold text-navy mb-4">
            Comprehensive Export Services
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            From logistics to documentation, we provide everything you need for successful international trade.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {services.map((service, index) => (
            <Card key={index} className="group hover:shadow-custom-lg transition-all duration-300 border border-gray-100 rounded-xl">
              <CardContent className="p-6 text-center">
                <div className="w-16 h-16 bg-light-cyan rounded-xl flex items-center justify-center mx-auto mb-4 group-hover:bg-cyan transition-colors">
                  <service.icon className="h-8 w-8 text-cyan group-hover:text-white transition-colors" />
                </div>
                <h3 className="text-xl font-semibold text-navy mb-3">{service.title}</h3>
                <p className="text-gray-600 mb-4">{service.description}</p>
                <ul className="space-y-1">
                  {service.features.map((feature, idx) => (
                    <li key={idx} className="text-sm text-gray-500">• {feature}</li>
                  ))}
                </ul>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FeaturedServices;
