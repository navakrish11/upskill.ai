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
      <div className="w-full px-6 sm:px-8 lg:px-12 xl:px-16">
        <div className="flex items-center justify-between py-2 w-full">
          {/* EXL Logo - Extreme Left */}
          <div className="flex items-center space-x-3 flex-shrink-0">
            <img 
              src="https://upload.wikimedia.org/wikipedia/commons/thumb/2/27/EXL_Service_logo.svg/1200px-EXL_Service_logo.svg.png" 
              alt="EXL Service Logo" 
              className="h-8 w-auto" 
            />
            <div className="h-6 w-px bg-gray-300"></div>
            <span className="text-xl font-semibold text-exl-midnight">Upskill.AI</span>
          </div>
          
          {/* Book Demo Button - Extreme Right */}
          <div className="flex-shrink-0 ml-auto">
            <button
              onClick={onBookDemo}
              className="bg-exl-orange hover:bg-orange-600 text-white font-semibold px-6 py-3 rounded-lg shadow-lg hover:shadow-xl transition-all duration-200"
            >
              Book Demo
            </button>
          </div>
        </div>


      </div>
    </header>
  );
}
