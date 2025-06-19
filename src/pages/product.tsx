import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import {
  Truck,
  FileCheck,
  Search,
  Globe,
  Ship,
  Package,
  Shield,
  Clock,
  ArrowRight,
  Gem,
} from "lucide-react";

const Product = () => {
  const mainServices = [
    {
      icon: Gem,
      title: "Industrial Salt ",
      description:
        "We offer high-purity Industrial Salt suitable for a wide range of industrial applications, including chemical manufacturing, de-icing, water treatment, textiles, detergents, drilling, and food processing (non-edible use). Sourced from trusted producers and processed under stringent quality control, our salt meets international standards. Available in bulk or customized packaging, our Industrial Salt ensures consistent grain size, low moisture content, and reliable supply logistics to meet the needs of global buyers.",
      
      image: "src/images/img2.jpg",
    },
    {
      icon: FileCheck,
      title: "Jute Bags",
      description:
        "Our premium jute bags are crafted from 100% natural, biodegradable fibers, making them an ideal eco-conscious alternative to plastic. Designed for durability and style, these bags are perfect for shopping, packaging, gifting, and promotional use.We offer a wide range of customizable jute bags in various sizes, colors, and prints to suit diverse international markets. Whether you're a retailer, wholesaler, or brand, our jute bags ensure high strength, elegant appeal, and a strong sustainability statement.",
      
      image: "src/images/service_3.webp",
    },
    {
      icon: Search,
      title: "Sewing weaving thread ",
      description:
        "We offer a premium range of sewing and weaving threads crafted from high-quality polyester, cotton, and blended fibers. Our threads are engineered for high tensile strength, color fastness, and smooth performance across a wide range of industrial and domestic applications. Suitable for garment manufacturing, home textiles, upholstery, footwear, and traditional weaving, our threads are available in various counts, colors, and spool sizes to meet international standards and client requirements.",
      
      image: "src/images/img4.jpg",
    },
    {
      icon: Globe,
      title: "Cocopeat ",
      description:
        "Cocopeat, also known as coir pith or coir dust, is a natural, lightweight, and eco-friendly growing medium made from coconut husk fibers. Highly porous and excellent in water retention, it is ideal for seed starting, potting mixes, hydroponic systems, and soil conditioning.Our export-grade cocopeat is carefully processed, washed, and dried to maintain low EC and pH levels, ensuring optimal plant growth. Available in 5kg blocks, grow bags, or loose form, it is suitable for a wide range of crops and climates.",
     
      image: "src/images/img3.jpg",
    },
  ];

  const additionalServices = [
    {
      icon: Ship,
      title: "Freight Forwarding",
      description: "Reliable freight forwarding services",
    },
    {
      icon: Package,
      title: "Packaging Solutions",
      description: "Professional packaging and crating",
    },
    {
      icon: Shield,
      title: "Insurance Services",
      description: "Comprehensive cargo insurance",
    },
    {
      icon: Clock,
      title: "Express Delivery",
      description: "Expedited shipping options",
    },
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
              From logistics to documentation, we provide end-to-end export
              services that simplify international trade and help your business
              thrive globally.
            </p>
          </div>
        </div>
      </section>

      {/* Main Services */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="space-y-20">
            {mainServices.map((service, index) => (
              <div
                key={index}
                className={`grid grid-cols-1 lg:grid-cols-2 gap-12 items-center ${
                  index % 2 === 1 ? "lg:grid-flow-col-dense" : ""
                }`}
              >
                <div
                  className={`space-y-6 ${
                    index % 2 === 1 ? "lg:col-start-2" : ""
                  }`}
                >
                  <div className="flex items-center space-x-3">
                    <div className="w-12 h-12 bg-light-cyan rounded-lg flex items-center justify-center">
                      <service.icon className="h-6 w-6 text-cyan" />
                    </div>
                    <h3 className="text-2xl lg:text-3xl font-bold text-navy">
                      {service.title}
                    </h3>
                  </div>
                  <p className="text-lg text-gray-600 leading-relaxed">
                    {service.description}
                  </p>

                  {/* <ul className="space-y-3">
                    {service.features.map((feature, idx) => (
                      <li key={idx} className="flex items-center space-x-3">
                        <CheckCircle className="h-5 w-5 text-cyan flex-shrink-0" />
                        <span className="text-gray-600">{feature}</span>
                      </li>
                    ))}
                  </ul> */}

                  <Button
                    asChild
                    className="bg-cyan hover:bg-cyan/90 text-white rounded-lg"
                  >
                    <Link to="/contact">
                      Contact us
                      <ArrowRight className="ml-2 h-4 w-4" />
                    </Link>
                  </Button>
                </div>

                <div className={index % 2 === 1 ? "lg:col-start-1" : ""}>
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
              Supporting services to ensure your export operations run smoothly
              and efficiently.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {additionalServices.map((service, index) => (
              <Card
                key={index}
                className="bg-white border-0 shadow-custom rounded-xl text-center group hover:shadow-custom-lg transition-all"
              >
                <CardContent className="p-8">
                  <service.icon className="h-12 w-12 text-cyan mx-auto mb-4 group-hover:scale-110 transition-transform" />
                  <h3 className="text-lg font-semibold text-navy mb-3">
                    {service.title}
                  </h3>
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
              Contact our experts today to discuss your export needs and get a
              customized solution.
            </p>
            <Button
              asChild
              size="lg"
              className="bg-cyan hover:bg-cyan/90 text-white rounded-lg px-8"
            >
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

export default Product;
