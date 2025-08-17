import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { Menu, Home } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";

const Navigation = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navigationItems = [
    { name: "About us", href: "#about" },
    { name: "How it works", href: "#how-it-works" },
    { name: "Why us", href: "#why-us" },
    { name: "FAQ", href: "#faq" },
    { name: "Contact us", href: "#contact" },
  ];

  const handleLinkClick = () => {
    setIsOpen(false);
  };

  const scrollToSection = (href: string) => {
    if (href.startsWith("#")) {
      const element = document.querySelector(href);
      if (element) {
        element.scrollIntoView({ behavior: "smooth" });
      }
    }
    handleLinkClick();
  };

  return (
    <nav className={`sticky top-0 z-50 w-full transition-all duration-300 ${
      isScrolled 
        ? "bg-background/95 backdrop-blur-md shadow-lg border-b" 
        : "bg-background/80 backdrop-blur-sm border-b border-transparent"
    }`}>
      <div className="px-4 sm:px-6 lg:px-8">
        <div className="flex h-14 sm:h-16 items-center justify-between max-w-7xl mx-auto">
          {/* Enhanced Logo */}
          <Link to="/" className="flex items-center space-x-3 group">
            <div className="relative">
              {/* Main logo container with improved design */}
              <div className="w-10 h-10 sm:w-12 sm:h-12 bg-gradient-to-br from-cyan-500 via-cyan-600 to-cyan-700 rounded-xl flex items-center justify-center transition-all duration-300 group-hover:from-cyan-600 group-hover:via-cyan-700 group-hover:to-cyan-800 shadow-lg group-hover:shadow-xl group-hover:shadow-cyan-500/25 group-hover:scale-105">
                <div className="relative">
                  {/* House icon with improved styling */}
                  <Home className="w-5 h-5 sm:w-6 sm:h-6 text-white drop-shadow-sm" />
                  {/* Subtle accent dot */}
                  <div className="absolute -top-1 -right-1 w-2 h-2 bg-white/30 rounded-full animate-pulse"></div>
                </div>
              </div>
              {/* Background glow effect */}
              <div className="absolute inset-0 bg-gradient-to-br from-cyan-400 to-cyan-600 rounded-xl opacity-0 group-hover:opacity-20 transition-opacity duration-300 -z-10 blur-lg"></div>
            </div>
            <div className="flex flex-col">
              <span className="text-base sm:text-lg md:text-xl font-bold text-gray-900 group-hover:text-cyan-700 transition-colors duration-300">
                <span className="hidden sm:inline">Fair Property Group</span>
                <span className="sm:hidden">Fair Property</span>
              </span>
              <span className="text-xs text-gray-500 font-medium hidden sm:block group-hover:text-cyan-600 transition-colors duration-300">Quick. Fair. Transparent.</span>
            </div>
          </Link>

          {/* Enhanced Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-6 lg:space-x-8">
            {navigationItems.map((item) => (
              <button
                key={item.name}
                onClick={() => scrollToSection(item.href)}
                className="relative text-sm font-medium text-gray-600 hover:text-cyan-700 transition-all duration-300 group"
              >
                {item.name}
                <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-cyan-600 transition-all duration-300 group-hover:w-full"></span>
              </button>
            ))}
            
            {/* CTA Buttons */}
            <div className="flex items-center space-x-3">
              <Button 
                onClick={() => scrollToSection("#cta")}
                className="bg-gradient-to-r from-cyan-600 to-cyan-700 hover:from-cyan-700 hover:to-cyan-800 text-white shadow-sm hover:shadow-md transition-all duration-300 text-sm"
              >
                Get an offer
              </Button>
            </div>
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden">
            <Sheet open={isOpen} onOpenChange={setIsOpen}>
              <SheetTrigger asChild>
                <Button variant="ghost" size="icon" className="h-8 w-8 sm:h-9 sm:w-9">
                  <Menu className="h-5 w-5 sm:h-6 sm:w-6" />
                  <span className="sr-only">Toggle menu</span>
                </Button>
              </SheetTrigger>
              <SheetContent side="right" className="w-[300px] sm:w-[400px] bg-white">
                <div className="flex flex-col space-y-6 mt-6">
                  {/* Mobile Logo */}
                  <Link
                    to="/"
                    onClick={handleLinkClick}
                    className="flex items-center space-x-3 pb-6 border-b border-border/50"
                  >
                    <div className="w-10 h-10 bg-gradient-to-br from-cyan-600 to-cyan-700 rounded-lg flex items-center justify-center shadow-sm">
                      <Home className="w-5 h-5 text-white" />
                    </div>
                    <div className="flex flex-col">
                      <span className="text-lg font-bold text-gray-900">
                        Fair Property Group
                      </span>
                      <span className="text-xs text-gray-500">Cash Home Buyers</span>
                    </div>
                  </Link>
                  
                  {/* Mobile Navigation Links */}
                  <div className="flex flex-col space-y-4">
                    {navigationItems.map((item) => (
                      <button
                        key={item.name}
                        onClick={() => scrollToSection(item.href)}
                        className="flex items-center py-3 px-4 text-left font-medium text-gray-700 transition-all duration-300 hover:bg-gray-50 hover:text-gray-900 rounded-lg"
                      >
                        {item.name}
                      </button>
                    ))}
                  </div>
                  
                  {/* Mobile CTA Buttons */}
                  <div className="flex flex-col space-y-3 pt-6 border-t border-border/50">
                    <Button 
                      onClick={() => scrollToSection("#cta")} 
                      className="w-full bg-gradient-to-r from-cyan-600 to-cyan-700 hover:from-cyan-700 hover:to-cyan-800 text-white shadow-sm"
                      size="lg"
                    >
                      Get an offer
                    </Button>
                  </div>
                </div>
              </SheetContent>
            </Sheet>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navigation;