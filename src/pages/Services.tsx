
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { 
  Truck, FileCheck, Search, Globe, Ship, Package, 
  Shield, Clock, CheckCircle, ArrowRight 
} from "lucide-react";

const Services = () => {
  const mainServices = [
    {
      icon: Truck,
      title: "International Logistics",
      description: "Comprehensive logistics solutions for seamless global shipping and delivery management.",
      features: [
        "Air & Sea Freight Management",
        "Multi-modal Transportation",
        "Warehousing & Distribution",
        "Door-to-Door Delivery",
        "Real-time Tracking & Monitoring"
      ],
      image: "src/images/service_2.jpg"
    },
    {
      icon: FileCheck,
      title: "Customs Handling",
      description: "Expert customs clearance and documentation services for smooth border crossings worldwide.",
      features: [
        "Import/Export Documentation",
        "Customs Clearance",
        "Compliance Management",
        "Tariff Classification",
        "Duty Optimization"
      ],
      image: "src/images/service_1.jpg"
    },
    {
      icon: Search,
      title: "Global Sourcing",
      description: "Find and connect with the best suppliers worldwide through our extensive network.",
      features: [
        "Supplier Identification & Verification",
        "Quality Control & Assurance",
        "Price Negotiation",
        "Vendor Management",
        "Risk Assessment"
      ],
      image: "src/images/service_3.webp"
    },
    {
      icon: Globe,
      title: "Trade Consultation",
      description: "Strategic guidance and expert advice for entering new markets and optimizing operations.",
      features: [
        "Market Entry Strategy",
        "Risk Assessment & Mitigation",
        "Regulatory Compliance",
        "Trade Finance Guidance",
        "Business Development Support"
      ],
      image: "src/images/service_4.webp"
    }
  ];

  const additionalServices = [
    { icon: Ship, title: "Freight Forwarding", description: "Reliable freight forwarding services" },
    { icon: Package, title: "Packaging Solutions", description: "Professional packaging and crating" },
    { icon: Shield, title: "Insurance Services", description: "Comprehensive cargo insurance" },
    { icon: Clock, title: "Express Delivery", description: "Expedited shipping options" }
  ];

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="py-20 bg-gradient-to-br from-light-cyan to-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="max-w-3xl mx-auto space-y-8 animate-fade-in">
            <h1 className="text-4xl lg:text-5xl font-bold text-navy">
              Comprehensive <span className="text-cyan">Export Services</span>
            </h1>
            <p className="text-lg text-gray-600 leading-relaxed">
              From logistics to documentation, we provide end-to-end export services 
              that simplify international trade and help your business thrive globally.
            </p>
          </div>
        </div>
      </section>

      {/* Main Services */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="space-y-20">
            {mainServices.map((service, index) => (
              <div key={index} className={`grid grid-cols-1 lg:grid-cols-2 gap-12 items-center ${
                index % 2 === 1 ? 'lg:grid-flow-col-dense' : ''
              }`}>
                <div className={`space-y-6 ${index % 2 === 1 ? 'lg:col-start-2' : ''}`}>
                  <div className="flex items-center space-x-3">
                    <div className="w-12 h-12 bg-light-cyan rounded-lg flex items-center justify-center">
                      <service.icon className="h-6 w-6 text-cyan" />
                    </div>
                    <h3 className="text-2xl lg:text-3xl font-bold text-navy">{service.title}</h3>
                  </div>
                  <p className="text-lg text-gray-600 leading-relaxed">{service.description}</p>
                  
                  <ul className="space-y-3">
                    {service.features.map((feature, idx) => (
                      <li key={idx} className="flex items-center space-x-3">
                        <CheckCircle className="h-5 w-5 text-cyan flex-shrink-0" />
                        <span className="text-gray-600">{feature}</span>
                      </li>
                    ))}
                  </ul>

                  <Button asChild className="bg-cyan hover:bg-cyan/90 text-white rounded-lg">
                    <Link to="/contact">
                      Learn More
                      <ArrowRight className="ml-2 h-4 w-4" />
                    </Link>
                  </Button>
                </div>

                <div className={index % 2 === 1 ? 'lg:col-start-1' : ''}>
                  <img
                    src={service.image}
                    alt={service.title}
                    className="w-full h-80 object-cover rounded-2xl shadow-custom-lg"
                  />
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Additional Services */}
      <section className="py-20 bg-light-cyan">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold text-navy mb-4">
              Additional Services
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Supporting services to ensure your export operations run smoothly and efficiently.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {additionalServices.map((service, index) => (
              <Card key={index} className="bg-white border-0 shadow-custom rounded-xl text-center group hover:shadow-custom-lg transition-all">
                <CardContent className="p-8">
                  <service.icon className="h-12 w-12 text-cyan mx-auto mb-4 group-hover:scale-110 transition-transform" />
                  <h3 className="text-lg font-semibold text-navy mb-3">{service.title}</h3>
                  <p className="text-gray-600">{service.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-navy">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="max-w-2xl mx-auto space-y-8">
            <h2 className="text-3xl lg:text-4xl font-bold text-white">
              Ready to Get Started?
            </h2>
            <p className="text-xl text-gray-300">
              Contact our experts today to discuss your export needs and get a customized solution.
            </p>
            <Button asChild size="lg" className="bg-cyan hover:bg-cyan/90 text-white rounded-lg px-8">
              <Link to="/contact">
                Get Free Consultation
                <ArrowRight className="ml-2 h-5 w-5" />
              </Link>
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Services;
