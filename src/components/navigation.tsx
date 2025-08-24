import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { Menu, Home, ArrowRight, Sparkles } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";

const Navigation = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navigationItems = [
    { name: "How it works", href: "#how-it-works" },
    { name: "Why us", href: "#why-us" },
    { name: "FAQ", href: "#faq" },
    { name: "Contact", href: "#contact" },
    { name: "About", href: "#about" },
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
    <nav className={`fixed top-0 z-50 w-full transition-all duration-500 ${
      isScrolled 
        ? "glass shadow-glass py-3" 
        : "bg-transparent py-4"
    }`}>
      <div className="px-4 sm:px-6 lg:px-8">
        <div className="flex h-14 sm:h-16 items-center justify-between max-w-7xl mx-auto">
          {/* Modern Logo */}
          <Link to="/" className="flex items-center space-x-3 group relative">
            <div className="relative">
              {/* Sleek logo container */}
              <div className="relative w-10 h-10 sm:w-11 sm:h-11">
                <div className="absolute inset-0 bg-gradient-to-br from-primary to-accent rounded-2xl opacity-90 group-hover:opacity-100 transition-all duration-500 group-hover:scale-110 group-hover:rotate-3"></div>
                <div className="relative w-full h-full bg-gradient-to-br from-primary to-accent rounded-2xl flex items-center justify-center shadow-lg group-hover:shadow-glow transition-all duration-300">
                  <Home className="w-5 h-5 sm:w-5 sm:h-5 text-white" strokeWidth={2.5} />
                  <Sparkles className="absolute -top-1 -right-1 w-3 h-3 text-yellow-300 animate-pulse" />
                </div>
              </div>
            </div>
            <div className="flex flex-col">
              <span className="text-base sm:text-lg font-bold bg-gradient-to-r from-gray-900 to-gray-700 bg-clip-text text-transparent group-hover:from-primary group-hover:to-accent transition-all duration-300">
                <span className="hidden sm:inline">Fair Property Group</span>
                <span className="sm:hidden">Fair Property</span>
              </span>

            </div>
          </Link>

          {/* Sleek Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-1 lg:space-x-2">
            {navigationItems.map((item, index) => (
              <button
                key={item.name}
                onClick={() => scrollToSection(item.href)}
                className="relative px-4 py-2 text-sm font-medium text-gray-700 hover:text-primary transition-all duration-300 group"
                style={{ animationDelay: `${index * 50}ms` }}
              >
                <span className="relative z-10">{item.name}</span>
                <div className="absolute inset-0 bg-gradient-to-r from-primary/0 via-primary/5 to-primary/0 opacity-0 group-hover:opacity-100 rounded-lg transition-all duration-300 transform scale-x-0 group-hover:scale-x-100"></div>
              </button>
            ))}
            
            {/* Modern CTA Button */}
            <div className="flex items-center ml-4">
              <Button 
                onClick={() => scrollToSection("#hero-form")}
                className="relative overflow-hidden bg-gradient-to-r from-primary to-accent hover:from-primary hover:to-accent text-white shadow-lg hover:shadow-glow transition-all duration-300 text-sm px-6 py-2 rounded-full font-semibold group"
              >
                <span className="relative z-10 flex items-center gap-2">
                  Get Cash Offer
                  <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform duration-300" />
                </span>
                <div className="absolute inset-0 bg-gradient-to-r from-white/0 via-white/20 to-white/0 translate-x-[-100%] group-hover:translate-x-[100%] transition-transform duration-700"></div>
              </Button>
            </div>
          </div>

          {/* Sleek Mobile Menu Button */}
          <div className="md:hidden">
            <Sheet open={isOpen} onOpenChange={setIsOpen}>
              <SheetTrigger asChild>
                <Button 
                  variant="ghost" 
                  size="icon" 
                  className="h-10 w-10 rounded-xl glass hover:bg-white/20 transition-all duration-300"
                >
                  <Menu className="h-5 w-5" strokeWidth={2} />
                  <span className="sr-only">Toggle menu</span>
                </Button>
              </SheetTrigger>
              <SheetContent side="right" className="w-[300px] sm:w-[400px] glass border-l border-white/10">
                <div className="flex flex-col space-y-6 mt-6">
                  {/* Mobile Logo */}
                  <Link
                    to="/"
                    onClick={handleLinkClick}
                    className="flex items-center space-x-3 pb-6 border-b border-border/20"
                  >
                    <div className="w-10 h-10 bg-gradient-to-br from-primary to-accent rounded-2xl flex items-center justify-center shadow-lg">
                      <Home className="w-5 h-5 text-white" strokeWidth={2.5} />
                    </div>
                    <div className="flex flex-col">
                      <span className="text-lg font-bold text-gradient">
                        Fair Property Group
                      </span>

                    </div>
                  </Link>
                  
                  {/* Mobile Navigation Links */}
                  <div className="flex flex-col space-y-2">
                    {navigationItems.map((item, index) => (
                      <button
                        key={item.name}
                        onClick={() => scrollToSection(item.href)}
                        className="flex items-center py-3 px-4 text-left font-medium text-gray-700 transition-all duration-300 hover:bg-gradient-to-r hover:from-primary/5 hover:to-accent/5 hover:text-primary rounded-xl relative overflow-hidden group"
                        style={{ animationDelay: `${index * 50}ms` }}
                      >
                        <span className="relative z-10">{item.name}</span>
                        <ArrowRight className="ml-auto w-4 h-4 opacity-0 group-hover:opacity-100 group-hover:translate-x-1 transition-all duration-300" />
                      </button>
                    ))}
                  </div>
                  
                  {/* Mobile CTA Button */}
                  <div className="flex flex-col space-y-3 pt-6 border-t border-border/20">
                    <Button 
                      onClick={() => {
                        scrollToSection("#hero-form");
                        setIsOpen(false);
                      }} 
                      className="w-full bg-gradient-to-r from-primary to-accent hover:from-primary hover:to-accent text-white shadow-lg hover:shadow-glow transition-all duration-300 rounded-full font-semibold group"
                      size="lg"
                    >
                      <span className="flex items-center justify-center gap-2">
                        Get Cash Offer
                        <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform duration-300" />
                      </span>
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