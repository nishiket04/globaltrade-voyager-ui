
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { ArrowRight, Phone } from "lucide-react";

const CTASection = () => {
  return (
    <section className="py-20 bg-navy">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <div className="max-w-3xl mx-auto space-y-8">
          <h2 className="text-3xl lg:text-4xl font-bold text-white">
            Ready to Expand Your Global Reach?
          </h2>
          <p className="text-xl text-gray-300 leading-relaxed">
            Let's discuss how our export services can help your business thrive in international markets. 
            Get a free consultation today.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button asChild size="lg" className="bg-cyan hover:bg-cyan/90 text-white rounded-lg px-8">
              <Link to="/contact">
                Get Free Consultation
                <ArrowRight className="ml-2 h-5 w-5" />
              </Link>
            </Button>
            <Button asChild variant="outline" size="lg" className="border-white text-black bg-white hover:text-navy rounded-lg px-8">
              <a href="tel:+91 9662414204">
                <Phone className="mr-2 h-5 w-5" />
                Call Now
              </a>
            </Button>
          </div>

          {/* <div className="grid grid-cols-1 md:grid-cols-3 gap-8 pt-12 border-t border-gray-700">
            <div>
              <div className="text-3xl font-bold text-cyan mb-2">24/7</div>
              <div className="text-gray-300">Expert Support</div>
            </div>
            <div>
              <div className="text-3xl font-bold text-cyan mb-2">50+</div>
              <div className="text-gray-300">Global Partners</div>
            </div>
            <div>
              <div className="text-3xl font-bold text-cyan mb-2">15+</div>
              <div className="text-gray-300">Years Experience</div>
            </div>
          </div> */}
        </div>
      </div>
    </section>
  );
};

export default CTASection;
