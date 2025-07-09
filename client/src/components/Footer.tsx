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

  return (
    <footer id="contact" className="bg-gray-900 text-white py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid md:grid-cols-3 gap-12 mb-12">
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
            <p className="text-gray-300 mb-8 max-w-md">
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
          </div>
          
          {/* Products */}
          <div>
            <h4 className="font-semibold text-white mb-6">Products</h4>
            <ul className="space-y-4">
              <li>
                <button 
                  onClick={() => scrollToSection("ai-trainer")}
                  className="text-gray-300 hover:text-exl-orange transition-colors duration-200"
                >
                  AI Trainer
                </button>
              </li>
              <li>
                <button 
                  onClick={() => scrollToSection("miai-simulator")}
                  className="text-gray-300 hover:text-exl-orange transition-colors duration-200"
                >
                  MiAI Call Simulator
                </button>
              </li>
              <li>
                <button 
                  onClick={() => scrollToSection("gamification")}
                  className="text-gray-300 hover:text-exl-orange transition-colors duration-200"
                >
                  Gamification
                </button>
              </li>
            </ul>
          </div>
          
          {/* Company */}
          <div>
            <h4 className="font-semibold text-white mb-6">Company</h4>
            <ul className="space-y-4">
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
    </footer>
  );
}
