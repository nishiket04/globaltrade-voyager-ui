
import { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Menu, X, Ship } from "lucide-react";


const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const location = useLocation();

  const isActive = (path: string) => location.pathname === path;

  const navItems = [
    { name: "Home", path: "/" },
    { name: "About", path: "/about" },
    
    { name: "Product", path: "/product" },
    { name: "Contact", path: "/contact" },

  ];

  return (
    <nav className="sticky top-0 z-50 bg-white shadow-sm border-b border-gray-100">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <Link to="/" className="flex items-center space-x-2 hover:opacity-80 transition-opacity">
            <Ship className="h-8 w-8 text-cyan" />
            {/* <img
                src="src/images/logo.jpg"
                alt="International Trade Technology"
                className="h-32 w-32 object-contain"
              /> */}
            <span className="text-xl font-bold text-navy">ARGOIMEX </span>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            {navItems.map((item) => (
              <Link
                key={item.name}
                to={item.path}
                className={`text-sm font-medium transition-colors hover:text-cyan ${
                  isActive(item.path) ? "text-cyan" : "text-navy"
                }`}
              >
                {item.name}
              </Link>
            ))}
            {/* <Button asChild className="bg-cyan hover:bg-cyan/90 text-white rounded-lg px-6">
              <Link to="/contact">Get Quote</Link>
            </Button> */}
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden">
            <Button
              variant="ghost"
              size="sm"
              onClick={() => setIsOpen(!isOpen)}
              className="text-navy"
            >
              {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </Button>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isOpen && (
          <div className="md:hidden py-4 border-t border-gray-100">
            <div className="flex flex-col space-y-4">
              {navItems.map((item) => (
                <Link
                  key={item.name}
                  to={item.path}
                  onClick={() => setIsOpen(false)}
                  className={`text-sm font-medium transition-colors hover:text-cyan ${
                    isActive(item.path) ? "text-cyan" : "text-navy"
                  }`}
                >
                  {item.name}
                </Link>
              ))}
              <Button asChild className="bg-cyan hover:bg-cyan/90 text-white rounded-lg w-fit">
                <Link to="/contact" onClick={() => setIsOpen(false)}>
                  Get Quote
                </Link>
              </Button>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
