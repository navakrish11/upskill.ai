import { FaLinkedin, FaTwitter, FaYoutube } from "react-icons/fa";

export default function Footer() {
  const openLink = (url: string) => {
    window.open(url, "_blank");
  };

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: "smooth", block: "start" });
    }
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
  };

  return (
    <footer id="contact" className="bg-gray-900 text-white py-8">
      <div className="w-full px-6 sm:px-8 lg:px-12 xl:px-16">
        <div className="max-w-7xl mx-auto">
          <div className="grid md:grid-cols-3 gap-8 mb-6">
          {/* Company Info */}
          <div>
            <div className="flex items-center space-x-3 mb-6">
              <img 
                src="https://upload.wikimedia.org/wikipedia/commons/thumb/2/27/EXL_Service_logo.svg/1200px-EXL_Service_logo.svg.png" 
                alt="EXL Service Logo" 
                className="h-8 w-auto filter brightness-0 invert" 
              />
              <span className="text-xl font-semibold">Upskill.AI</span>
            </div>
            <p className="text-gray-300 mb-4 max-w-md">
              Transforming training with AI-powered solutions that accelerate learning and improve business outcomes.
            </p>
            
            {/* Social Media Icons */}
            <div className="flex space-x-4">
              <button 
                onClick={() => openLink("https://linkedin.com/company/exl")}
                className="bg-gray-800 hover:bg-gray-700 p-3 rounded-lg transition-colors duration-200"
              >
                <FaLinkedin className="w-5 h-5 text-gray-300" />
              </button>
              <button 
                onClick={() => openLink("https://twitter.com/exlservice")}
                className="bg-gray-800 hover:bg-gray-700 p-3 rounded-lg transition-colors duration-200"
              >
                <FaTwitter className="w-5 h-5 text-gray-300" />
              </button>
              <button 
                onClick={() => openLink("https://youtube.com/exlservice")}
                className="bg-gray-800 hover:bg-gray-700 p-3 rounded-lg transition-colors duration-200"
              >
                <FaYoutube className="w-5 h-5 text-gray-300" />
              </button>
            </div>
            
            {/* Email */}
            <div className="mt-4">
              <p className="text-gray-300">
                Email: <a href="mailto:#EAI-All@exlservice.com" className="text-exl-orange hover:text-orange-400 transition-colors duration-200">#EAI-All@exlservice.com</a>
              </p>
            </div>
          </div>
          
          {/* Products */}
          <div>
            <h4 className="font-semibold text-white mb-4">Products</h4>
            <ul className="space-y-3">
              <li>
                <button 
                  onClick={() => scrollToCardAndFlip("ai-trainer")}
                  className="text-gray-300 hover:text-exl-orange transition-colors duration-200"
                >
                  AI Trainer
                </button>
              </li>
              <li>
                <button 
                  onClick={() => scrollToCardAndFlip("miai-simulator")}
                  className="text-gray-300 hover:text-exl-orange transition-colors duration-200"
                >
                  MiAI Call Simulator
                </button>
              </li>
              <li>
                <button 
                  onClick={() => scrollToCardAndFlip("gamification")}
                  className="text-gray-300 hover:text-exl-orange transition-colors duration-200"
                >
                  Gamification
                </button>
              </li>
            </ul>
          </div>
          
          {/* Company */}
          <div>
            <h4 className="font-semibold text-white mb-4">Company</h4>
            <ul className="space-y-3">
              <li>
                <button 
                  onClick={() => openLink("https://exlservice.com/about")}
                  className="text-gray-300 hover:text-exl-orange transition-colors duration-200"
                >
                  About Us
                </button>
              </li>
              <li>
                <button 
                  onClick={() => openLink("https://exlservice.com/careers")}
                  className="text-gray-300 hover:text-exl-orange transition-colors duration-200"
                >
                  Careers
                </button>
              </li>
              <li>
                <button 
                  onClick={() => openLink("https://exlservice.com/contact")}
                  className="text-gray-300 hover:text-exl-orange transition-colors duration-200"
                >
                  Contact
                </button>
              </li>
              <li>
                <button 
                  onClick={() => openLink("https://exlservice.com/privacy")}
                  className="text-gray-300 hover:text-exl-orange transition-colors duration-200"
                >
                  Privacy Policy
                </button>
              </li>
            </ul>
          </div>
        </div>
        </div>
      </div>
    </footer>
  );
}
