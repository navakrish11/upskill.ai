import { useState } from "react";
import { Link, useLocation } from "wouter";
import { Menu, X } from "lucide-react";
import { Button } from "@/components/ui/button";

interface HeaderProps {
  onBookDemo: () => void;
}

export default function Header({ onBookDemo }: HeaderProps) {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [, setLocation] = useLocation();



  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: "smooth", block: "start" });
    }
    setMobileMenuOpen(false);
  };

  const scrollToCardAndFlip = (cardId: string) => {
    // First scroll to the card
    scrollToSection(cardId);
    
    // Then trigger the flip event after a short delay to ensure scrolling has started
    setTimeout(() => {
      const flipEvent = new CustomEvent('flipCard', {
        detail: { cardId }
      });
      window.dispatchEvent(flipEvent);
    }, 500);
    setMobileMenuOpen(false);
  };

  return (
    <header className="bg-white shadow-sm border-b border-gray-100 sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between py-2">
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
          
          {/* Book Demo Button */}
          <button
            onClick={onBookDemo}
            className="relative group cursor-pointer"
          >
            <div className="text-3xl font-bold bg-gradient-to-r from-exl-orange to-orange-600 bg-clip-text text-transparent">
              Book Your Demo
            </div>
            <div className="absolute -bottom-1 left-0 w-0 h-0.5 bg-gradient-to-r from-exl-orange to-orange-600 group-hover:w-full transition-all duration-300"></div>
          </button>
        </div>


      </div>
    </header>
  );
}
