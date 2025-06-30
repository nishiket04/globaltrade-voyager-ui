import { Card, CardContent } from "@/components/ui/card";
import { Users, Target, Eye, Award } from "lucide-react";
import img from "@/images/img5.jpg"
const About = () => {
  const values = [
    {
      icon: Award,
      title: "Excellence",
      description:
        "We strive for the highest standards in every aspect of our service delivery.",
    },
    {
      icon: Users,
      title: "Partnership",
      description:
        "Building long-term relationships based on trust, transparency, and mutual success.",
    },
    {
      icon: Target,
      title: "Innovation",
      description:
        "Continuously improving our processes and adopting new technologies for better results.",
    },
    {
      icon: Eye,
      title: "Integrity",
      description:
        "Conducting business with honesty, ethics, and respect for all stakeholders.",
    },
  ];
  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="py-20 bg-gradient-to-br from-light-cyan to-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-8 animate-fade-in">
              <h1 className="text-4xl lg:text-5xl font-bold text-navy">
                About <span className="text-cyan">Argoimex </span>
              </h1>
              <p className="text-lg text-gray-600 leading-relaxed">
                At Argoimex, we are driven by a mission to take the richness of
                India’s heritage and quality offerings to the world. Based in
                Gujarat, India, we specialize in the export of carefully
                selected goods that reflect our commitment to excellence
              </p>
              <p className="text-lg text-gray-600 leading-relaxed">
                Our commitment is rooted in quality, reliability, and
                transparency. By working directly with trusted producers and
                adhering to international standards, we ensure that every
                shipment meets the expectations of global buyers. Whether you're
                an importer, wholesaler, or private label brand, we deliver
                value with every container.
              </p>
              <p className="text-lg text-gray-600 leading-relaxed">
                With a customer-first approach and growing global presence,
                Argoimex is not just a supplier—but your long-term export
                partner committed to building sustainable trade relationships.
              </p>
            </div>
            <div className="animate-slide-in">
              <img
                src={img}
                alt="Global Trade Team"
                className="w-full h-96 object-cover rounded-2xl shadow-custom-lg"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Mission & Vision */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            <Card className="border-0 shadow-custom rounded-xl">
              <CardContent className="p-8 bg-white">
                <Target className="h-12 w-12 text-cyan mb-6" />
                <h3 className="text-2xl font-bold text-navy mb-4">
                  Our Mission
                </h3>
                <p className="text-gray-600 leading-relaxed">
                  To simplify international trade for businesses of all sizes by
                  providing comprehensive, reliable, and innovative export
                  services that enable our clients to focus on their core
                  business while we handle the complexities of global commerce.
                </p>
              </CardContent>
            </Card>

            <Card className="border-0 shadow-custom rounded-xl">
              <CardContent className="p-8 bg-white">
                <Eye className="h-12 w-12 text-cyan mb-6" />
                <h3 className="text-2xl font-bold text-navy mb-4">
                  Our Vision
                </h3>
                <p className="text-gray-600 leading-relaxed">
                  To be the leading export services provider globally,
                  recognized for our expertise, innovation, and commitment to
                  client success. We envision a world where geographical
                  boundaries don't limit business growth and opportunities.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Core Values */}
      <section className="py-20 bg-light-cyan">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold text-navy mb-4">
              Our Core Values
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              These principles guide everything we do and shape how we serve our
              clients.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {values.map((value, index) => (
              <Card
                key={index}
                className="bg-white border-0 shadow-custom rounded-xl text-center"
              >
                <CardContent className="p-8">
                  <value.icon className="h-12 w-12 text-cyan mx-auto mb-4" />
                  <h3 className="text-xl font-semibold text-navy mb-3">
                    {value.title}
                  </h3>
                  <p className="text-gray-600">{value.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Team Section */}
      {/* <section className="py-20 bg-white">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl lg:text-4xl font-bold text-navy mb-4">
            Meet Our Expert Team
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Our diverse team of trade professionals brings decades of combined experience
            in international commerce, logistics, and business development.
          </p>
        </div>

        <div className="relative">
          <img src="https://images.unsplash.com/photo-1605810230434-7631ac76ec81?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80" alt="GlobalTrade Exports Team" className="w-full h-96 object-cover rounded-2xl shadow-custom-lg" />
          <div className="absolute inset-0 bg-gradient-to-t from-navy/40 to-transparent rounded-2xl"></div>
          <div className="absolute bottom-8 left-8 text-white">
            <h3 className="text-2xl font-bold mb-2">United by Purpose</h3>
            <p className="text-lg opacity-90">Driven by excellence in international trade</p>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-12">
          <div className="text-center">
            <div className="text-3xl font-bold text-cyan mb-2">50+</div>
            <div className="text-gray-600">Team Members</div>
          </div>
          <div className="text-center">
            <div className="text-3xl font-bold text-cyan mb-2">25+</div>
            <div className="text-gray-600">Languages Spoken</div>
          </div>
          <div className="text-center">
            <div className="text-3xl font-bold text-cyan mb-2">15+</div>
            <div className="text-gray-600">Years Average Experience</div>
          </div>
        </div>
      </div>
    </section> */}
    </div>
  );
};
export default About;
