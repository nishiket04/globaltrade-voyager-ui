import ContactForm from "@/components/ContactForm";
import { Card, CardContent } from "@/components/ui/card";
import { MapPin, Phone, Mail, Clock } from "lucide-react";
const Contact = () => {
  const contactInfo = [{
    icon: MapPin,
    title: "Our Office",
    details: ["95, Hariramnagar-2, Subhashnagar", "Bhavnagar, 364001", "India"]
  }, {
    icon: Phone,
    title: "Phone",
    details: ["+91 6359196943"]
  }, {
    icon: Mail,
    title: "Email",
    details: ["argoimex@gmail.com", "support@globaltradeexports.com"]
  }, {
    icon: Clock,
    title: "Business Hours (Indian time line)",
    details: ["Monday - Friday: 8:00 AM - 6:00 PM", "Saturday: 9:00 AM - 2:00 PM", "Sunday: Closed"]
  }];
  return <div className="min-h-screen">
      {/* Hero Section */}
      <section className="py-20 bg-gradient-to-br from-light-cyan to-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="max-w-3xl mx-auto space-y-8 animate-fade-in">
            <h1 className="text-4xl lg:text-5xl font-bold text-navy">
              Get in <span className="text-cyan">Touch</span>
            </h1>
            <p className="text-lg text-gray-600 leading-relaxed">
              Ready to expand your business globally? Contact our export experts today for a 
              free consultation and discover how we can help you succeed in international markets.
            </p>
          </div>
        </div>
      </section>

      {/* Contact Form and Info */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
            {/* Contact Form */}
            <div className="space-y-8">
              <div>
                <h2 className="text-3xl font-bold text-navy mb-4">Send Us a Message</h2>
                <p className="text-gray-600">
                  Fill out the form below and our team will get back to you within 24 hours.
                </p>
              </div>
              <ContactForm />
            </div>

            {/* Contact Information */}
            <div className="space-y-8">
              <div>
                <h2 className="text-3xl font-bold text-navy mb-4">Contact Information</h2>
                <p className="text-gray-600">
                  Reach out to us through any of the following channels. We're here to help!
                </p>
              </div>

              <div className="space-y-6">
                {contactInfo.map((info, index) => <Card key={index} className="border border-gray-100 rounded-xl">
                    <CardContent className="p-6 bg-white">
                      <div className="flex items-start space-x-4">
                        <div className="w-12 h-12 bg-light-cyan rounded-lg flex items-center justify-center flex-shrink-0">
                          <info.icon className="h-6 w-6 text-cyan" />
                        </div>
                        <div>
                          <h3 className="font-semibold text-navy mb-2">{info.title}</h3>
                          {info.details.map((detail, idx) => <p key={idx} className="text-gray-600 text-sm">{detail}</p>)}
                        </div>
                      </div>
                    </CardContent>
                  </Card>)}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Map Section */}
      {/* <section className="py-20 bg-light-cyan">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-navy mb-4">Find Us</h2>
            <p className="text-gray-600">Visit our headquarters in the heart of the trade district.</p>
          </div>
          
          <div className="bg-white rounded-2xl shadow-custom-lg overflow-hidden">
            <div className="h-96 bg-gray-100 flex items-center justify-center">
              <div className="text-center">
                <MapPin className="h-12 w-12 text-cyan mx-auto mb-4" />
                <p className="text-gray-600">Interactive Map</p>
                <p className="text-sm text-gray-500">123 Trade Center Boulevard, Export City</p>
              </div>
            </div>
          </div>
        </div>
      </section> */}

      {/* FAQ or Additional Info */}
      {/* <section className="py-20 bg-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-navy mb-4">Emergency Contact</h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              For urgent matters outside business hours, our emergency response team is available 24/7 
              to assist with time-sensitive shipments and critical issues.
            </p>
          </div>

         <Card className="max-w-md mx-auto border border-gray-100 rounded-xl">
            <CardContent className="p-8 text-center bg-white">
              <Phone className="h-12 w-12 text-cyan mx-auto mb-4" />
              <h3 className="text-xl font-semibold text-navy mb-2">24/7 Emergency Line</h3>
              <p className="text-2xl font-bold text-cyan mb-2">+91 96624 14204</p>
              <p className="text-gray-600 text-sm">For urgent shipment issues only</p>
            </CardContent ontent>
          </Card>
        </div>
      </section> */}
    </div>;
};
export default Contact;