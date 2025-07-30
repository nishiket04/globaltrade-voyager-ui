
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { ArrowRight, Globe, TrendingUp, Shield } from "lucide-react";
import heroImage from "@/images/index.jpg";

const HeroSection = () => {
  return (
    <section className="relative bg-gradient-to-br from-light-cyan to-white py-20 lg:py-32">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Content */}
          <div className="space-y-8 animate-fade-in">
            <div className="space-y-4">
              <h1 className="text-4xl lg:text-6xl font-bold text-navy leading-tight">
                Your Gateway to 
                <span className="text-cyan"> Argoimex</span>
              </h1>
              <p className="text-lg lg:text-xl text-gray-600 leading-relaxed">
                Professional export services that connect your business to international markets. 
                We handle the complexity so you can focus on growth.
              </p>
            </div>

            <div className="flex flex-col sm:flex-row gap-4">
              <Button asChild size="lg" className="bg-cyan hover:bg-cyan/90 text-white rounded-lg px-8">
                <Link to="/contact">
                  Get Started Today
                  <ArrowRight className="ml-2 h-5 w-5" />
                </Link>
              </Button>
              <Button asChild variant="outline" size="lg" className="border-navy text-navy bg-white hover:bg-navy hover:text-white rounded-lg px-8">
                <Link to="/product">
                  Our Products
                </Link>
              </Button>
            </div>

            {/* Trust indicators */}
            <div className="grid grid-cols-3 gap-6 pt-8">
              <div className="text-center">
                {/* <Globe className="h-8 w-8 text-cyan mx-auto mb-2" /> */}
                {/* <div className="text-2xl font-bold text-navy">50+</div>
                <div className="text-sm text-gray-600">Countries</div> */}
              </div>
              <div className="text-center">
                {/* <TrendingUp className="h-8 w-8 text-cyan mx-auto mb-2" /> */}
                {/* <div className="text-2xl font-bold text-navy">98%</div>
                <div className="text-sm text-gray-600">Success Rate</div> */}
              </div>
              <div className="text-center">
                {/* <Shield className="h-8 w-8 text-cyan mx-auto mb-2" /> */}
                {/* <div className="text-2xl font-bold text-navy">24/7</div>
                <div className="text-sm text-gray-600">Support</div> */}
              </div>
            </div>
          </div>

          {/* Hero Image */}
          <div className="relative animate-slide-in">
            <div className="relative">
               <img
                src={heroImage}
                alt="Global Trade Team"
                className="w-full h-96 object-cover rounded-2xl shadow-custom-lg"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-navy/20 to-transparent rounded-2xl"></div>
            </div>
            
            {/* Floating card */}
            {/* <div className="absolute -bottom-6 -left-6 bg-white p-6 rounded-xl shadow-custom-lg border border-gray-100">
              <div className="flex items-center space-x-3">
                <div className="w-12 h-12 bg-cyan rounded-lg flex items-center justify-center">
                  <Shield className="h-6 w-6 text-white" />
                </div>
                <div>
                  <div className="font-semibold text-navy">Trusted Partner</div>
                  <div className="text-sm text-gray-600">ISO Certified</div>
                </div>
              </div>
            </div> */}
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
