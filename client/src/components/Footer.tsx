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
    <footer id="contact" className="bg-exl-slate text-white py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid md:grid-cols-4 gap-8 mb-12">
          {/* Company Info */}
          <div className="md:col-span-2">
            <div className="flex items-center space-x-3 mb-4">
              <img 
                src="https://upload.wikimedia.org/wikipedia/commons/thumb/2/27/EXL_Service_logo.svg/1200px-EXL_Service_logo.svg.png" 
                alt="EXL Service Logo" 
                className="h-8 w-auto filter brightness-0 invert" 
              />
              <span className="text-xl font-semibold">Upskill.AI</span>
            </div>
            <p className="text-gray-300 mb-6 max-w-md">
              Revolutionizing training and development through AI-powered learning experiences. Part of EXL's commitment to innovation and excellence.
            </p>
            
            {/* Contact Teams */}
            <div className="space-y-2">
              <h4 className="font-semibold text-white mb-3">Contact Teams</h4>
              <button 
                onClick={() => openLink("https://example.com/product-team")}
                className="block text-gray-300 hover:text-exl-orange transition-colors duration-200"
              >
                Product Team
              </button>
              <button 
                onClick={() => openLink("https://example.com/functional-team")}
                className="block text-gray-300 hover:text-exl-orange transition-colors duration-200"
              >
                Functional Team
              </button>
              <button 
                onClick={() => openLink("mailto:devlead@example.com")}
                className="block text-gray-300 hover:text-exl-orange transition-colors duration-200"
              >
                Development Lead
              </button>
            </div>
          </div>
          
          {/* Solutions */}
          <div>
            <h4 className="font-semibold text-white mb-4">Solutions</h4>
            <ul className="space-y-2">
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
                  Gamification Experience
                </button>
              </li>
            </ul>
          </div>
          
          {/* Quick Links */}
          <div>
            <h4 className="font-semibold text-white mb-4">Quick Links</h4>
            <ul className="space-y-2">
              <li>
                <button 
                  onClick={() => openLink("https://example.com/ai-trainer-demo")}
                  className="text-gray-300 hover:text-exl-orange transition-colors duration-200"
                >
                  AI Trainer Demo
                </button>
              </li>
              <li>
                <button 
                  onClick={() => openLink("https://example.com/miai-call-demo")}
                  className="text-gray-300 hover:text-exl-orange transition-colors duration-200"
                >
                  MiAI Call Demo
                </button>
              </li>
              <li>
                <button 
                  onClick={() => openLink("https://example.com/gamification-demo")}
                  className="text-gray-300 hover:text-exl-orange transition-colors duration-200"
                >
                  Gamification Demo
                </button>
              </li>

            </ul>
          </div>
        </div>
        
        {/* Bottom Bar */}
        <div className="border-t border-gray-600 pt-8 flex flex-col md:flex-row justify-between items-center">
          <p className="text-gray-400 text-sm">
            © 2024 EXL Service Holdings, Inc. All rights reserved.
          </p>
          <div className="flex space-x-6 mt-4 md:mt-0">
            <button 
              onClick={() => openLink("#")}
              className="text-gray-400 hover:text-exl-orange transition-colors duration-200 text-sm"
            >
              Privacy Policy
            </button>
            <button 
              onClick={() => openLink("#")}
              className="text-gray-400 hover:text-exl-orange transition-colors duration-200 text-sm"
            >
              Terms of Service
            </button>
            <button 
              onClick={() => openLink("#")}
              className="text-gray-400 hover:text-exl-orange transition-colors duration-200 text-sm"
            >
              Support
            </button>
          </div>
        </div>
      </div>
    </footer>
  );
}
