
import { Link } from "react-router-dom";
import { Ship, Mail, Phone, MapPin } from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-navy text-white">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Company Info */}
          <div className="space-y-4">
            <div className="flex items-center space-x-2">
<img
    src="src/images/argoi.svg"
    alt="International Trade Technology"
    className="h-10 w-10 object-contain"
  />              <span className="text-xl font-bold">Argoimex </span>
            </div>
            <p className="text-gray-300 text-sm">
              Professional export services for international trade. Building bridges across global markets with trust and expertise.
            </p>
          </div>

          {/* Quick Links */}
          <div className="space-y-4">
            <h3 className="text-lg font-semibold">Quick Links</h3>
            <ul className="space-y-2">
<<<<<<< HEAD

              {["Home", "About","Contact"].map((item) => (
=======
              {["Home", "About", "Product","Service", "Contact"].map((item) => (
>>>>>>> 7295be1edc49e3e37eaf9fe47329734f0c41a1c8
                <li key={item}>
                  <Link
                    to={item === "Home" ? "/" : `/${item.toLowerCase()}`}
                    className="text-gray-300 hover:text-cyan transition-colors text-sm"
                  >
                    {item}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Services */}
          <div className="space-y-4">
            <h3 className="text-lg font-semibold">Our Services</h3>
            <ul className="space-y-2 text-sm text-gray-300">
              <li>International Logistics</li>
              <li>Customs Handling</li>
              <li>Global Sourcing</li>
              <li>Trade Documentation</li>
            </ul>
          </div>

          {/* Contact Info */}
          <div className="space-y-4">
            <h3 className="text-lg font-semibold">Contact Info</h3>
            <div className="space-y-2 text-sm text-gray-300">
              <div className="flex items-center space-x-2">
                <Phone className="h-4 w-4 text-cyan" />
                <span>+91 6359196943</span>
                <span>+91 9662414204</span>
              </div>
              <div className="flex items-center space-x-2">
                <Mail className="h-4 w-4 text-cyan" />
                <span>argoimex@gmail.com</span>
              </div>
              <div className="flex items-center space-x-2">
                <MapPin className="h-4 w-4 text-cyan" />
                <span>95, Hariramnagar-2, Subhashnagar, Bhavnagar, 364001.</span>
              </div>
            </div>
          </div>
        </div>

        <div className="border-t border-gray-700 mt-8 pt-8 text-center">
          <p className="text-gray-400 text-sm">
            © 2025 Argoimex Exports. All rights reserved. | Professional Export Services
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
