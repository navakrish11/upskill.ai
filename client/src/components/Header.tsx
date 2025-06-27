import { useState } from "react";
import { Link } from "wouter";
import { Menu, X } from "lucide-react";
import { Button } from "@/components/ui/button";

export default function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const handleLogin = () => {
    window.open("https://example.com/login", "_blank");
  };

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: "smooth", block: "start" });
    }
    setMobileMenuOpen(false);
  };

  return (
    <header className="bg-white shadow-sm border-b border-gray-100 sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center py-4">
          {/* EXL Logo */}
          <div className="flex items-center space-x-3">
            <img 
              src="https://upload.wikimedia.org/wikipedia/commons/thumb/2/27/EXL_Service_logo.svg/1200px-EXL_Service_logo.svg.png" 
              alt="EXL Service Logo" 
              className="h-8 w-auto" 
            />
            <div className="h-6 w-px bg-gray-300"></div>
            <span className="text-xl font-semibold text-exl-midnight">Upskill.AI</span>
          </div>
          
          {/* Navigation */}
          <nav className="hidden md:flex items-center space-x-8">
            <button 
              onClick={() => scrollToSection("ai-trainer")}
              className="text-exl-slate hover:text-exl-orange transition-colors duration-200"
            >
              AI Trainer
            </button>
            <button 
              onClick={() => scrollToSection("miai-simulator")}
              className="text-exl-slate hover:text-exl-orange transition-colors duration-200"
            >
              MiAI Simulator
            </button>
            <button 
              onClick={() => scrollToSection("gamification")}
              className="text-exl-slate hover:text-exl-orange transition-colors duration-200"
            >
              Gamification
            </button>
            <button 
              onClick={() => scrollToSection("contact")}
              className="text-exl-slate hover:text-exl-orange transition-colors duration-200"
            >
              Contact
            </button>
          </nav>
          
          {/* Login CTA */}
          <div className="flex items-center space-x-4">
            <Button 
              onClick={handleLogin}
              className="bg-exl-orange text-white px-6 py-2 rounded-lg font-medium hover:bg-orange-600 transition-colors duration-200"
            >
              Login
            </Button>
            
            {/* Mobile menu button */}
            <button 
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="md:hidden p-2 rounded-md text-exl-slate hover:text-exl-orange"
            >
              {mobileMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        {mobileMenuOpen && (
          <div className="md:hidden bg-white border-t border-gray-100 px-4 py-4 space-y-4">
            <button 
              onClick={() => scrollToSection("ai-trainer")}
              className="block text-exl-slate hover:text-exl-orange transition-colors duration-200"
            >
              AI Trainer
            </button>
            <button 
              onClick={() => scrollToSection("miai-simulator")}
              className="block text-exl-slate hover:text-exl-orange transition-colors duration-200"
            >
              MiAI Simulator
            </button>
            <button 
              onClick={() => scrollToSection("gamification")}
              className="block text-exl-slate hover:text-exl-orange transition-colors duration-200"
            >
              Gamification
            </button>
            <button 
              onClick={() => scrollToSection("contact")}
              className="block text-exl-slate hover:text-exl-orange transition-colors duration-200"
            >
              Contact
            </button>
          </div>
        )}
      </div>
    </header>
  );
}
