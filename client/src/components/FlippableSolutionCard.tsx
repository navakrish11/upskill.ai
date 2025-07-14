import { useState, useEffect } from "react";
import { Play, ArrowLeft, ExternalLink, Clock } from "lucide-react";

// LaunchButton component for handling gamification coming soon state
function LaunchButton({ id }: { id: string }) {
  const [showComingSoon, setShowComingSoon] = useState(false);

  const handleClick = (e: React.MouseEvent) => {
    e.stopPropagation();
    
    if (id === "ai-trainer") {
      window.open("https://agenticairi-app6.exlservice.com/", "_blank");
    } else if (id === "miai-simulator") {
      window.open("https://miaisimulatorapp.exlservice.com/", "_blank");
    } else if (id === "gamification") {
      setShowComingSoon(true);
    }
  };

  if (showComingSoon) {
    return (
      <div className="flex items-center justify-center bg-gray-100 text-gray-600 px-4 py-2 rounded-lg font-medium w-full text-sm">
        <Clock className="h-5 w-5 mr-2" />
        Coming Soon
      </div>
    );
  }

  return (
    <button
      onClick={handleClick}
      className="flex items-center justify-center bg-[#335a6b] text-white px-4 py-2 rounded-lg font-medium hover:bg-[#2a4d5c] transition-colors duration-200 w-full text-sm"
    >
      <ExternalLink className="h-5 w-5 mr-2" />
      Launch Application
    </button>
  );
}

interface FlippableSolutionCardProps {
  id: string;
  title: string;
  description: string;
  bgGradient: string;
  iconPath: string;
  demoLink: string;
  videoSrc: string;
  techLink: string;
  productLink: string;
  functionalLink: string;
  onVideoOpen: (videoSrc: string, title: string) => void;
  techDetails: {
    technologies: string[];
    architecture: string;
    deployment: string;
  };
  productTeam: {
    lead: string;
    members: string[];
    contact: string;
  };
  functionalTeam: {
    lead: string;
    members: string[];
    contact: string;
  };
}

export default function FlippableSolutionCard({
  id,
  title,
  description,
  bgGradient,
  iconPath,
  demoLink,
  videoSrc,
  techLink,
  productLink,
  functionalLink,
  onVideoOpen,
  techDetails,
  productTeam,
  functionalTeam
}: FlippableSolutionCardProps) {
  const [isFlipped, setIsFlipped] = useState(false);

  useEffect(() => {
    const handleFlipCard = (event: CustomEvent) => {
      if (event.detail.cardId === id) {
        setIsFlipped(true);
      }
    };

    window.addEventListener('flipCard', handleFlipCard as EventListener);
    
    return () => {
      window.removeEventListener('flipCard', handleFlipCard as EventListener);
    };
  }, [id]);

  const handleDemoClick = () => {
    onVideoOpen(videoSrc, title);
  };

  const handleCardClick = () => {
    if (!isFlipped) {
      // Flip this card to show details
      const flipEvent = new CustomEvent('flipCard', {
        detail: { cardId: id }
      });
      window.dispatchEvent(flipEvent);
    } else {
      // If flipping back to front, just set this card to front
      setIsFlipped(false);
    }
  };

  const handleBackClick = (e: React.MouseEvent) => {
    e.stopPropagation();
    setIsFlipped(false);
  };

  return (
    <div id={id} className="relative h-[450px] w-full perspective-1000">
      <div
        className={`absolute inset-0 w-full h-full transition-transform duration-700 transform-style-preserve-3d cursor-pointer ${
          isFlipped ? 'rotate-y-180' : ''
        }`}
        onClick={(e) => {
          e.stopPropagation();
          handleCardClick();
        }}
      >
        {/* Front of Card */}
        <div className="absolute inset-0 w-full h-full backface-hidden">
          <div className="bg-white rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2 border border-gray-100 h-full flex flex-col">
            {/* Solution visual representation */}
            <div className={`h-24 bg-gradient-to-br ${bgGradient} rounded-t-2xl relative overflow-hidden flex-shrink-0`}>
              <div className="absolute inset-0 bg-black bg-opacity-20"></div>
              <div className="absolute bottom-4 left-4 text-white">
                <svg className="h-12 w-12" fill="currentColor" viewBox="0 0 24 24">
                  <path d={iconPath} />
                </svg>
              </div>
              <div className="absolute top-4 right-4 text-white text-sm font-medium bg-black bg-opacity-30 px-3 py-1 rounded-full">
                Click for details
              </div>
            </div>
            
            <div className="p-4 flex flex-col flex-grow">
              <h3 className="text-lg font-bold text-exl-midnight mb-3">{title}</h3>
              <div className="h-24 overflow-hidden mb-2">
                <p className="text-sm text-exl-slate leading-snug">
                  {description}
                </p>
              </div>
              
              {/* Action Links */}
              <div className="space-y-3 mt-auto">
                <button 
                  onClick={(e) => {
                    e.stopPropagation();
                    handleDemoClick();
                  }}
                  className="flex items-center justify-center bg-exl-orange text-white px-4 py-2 rounded-lg font-medium hover:bg-orange-600 transition-colors duration-200 w-full text-sm"
                >
                  <Play className="h-5 w-5 mr-2 fill-current" />
                  View Demo
                </button>
                
                {/* Launch Application Button */}
                <LaunchButton id={id} />
              </div>
            </div>
          </div>
        </div>

        {/* Back of Card */}
        <div className="absolute inset-0 w-full h-full backface-hidden rotate-y-180">
          <div className="bg-white rounded-2xl shadow-lg border border-gray-100 h-full flex flex-col">
            {/* Header */}
            <div className={`h-20 bg-gradient-to-br ${bgGradient} rounded-t-2xl relative overflow-hidden flex-shrink-0`}>
              <div className="absolute inset-0 bg-black bg-opacity-20"></div>
              <div className="absolute inset-0 flex items-center justify-between px-6">
                <h3 className="text-xl font-bold text-white">{title} - Highlights</h3>
                <button
                  onClick={handleBackClick}
                  className="text-white hover:text-gray-200 transition-colors duration-200"
                >
                  <ArrowLeft className="h-6 w-6" />
                </button>
              </div>
            </div>

            

            {/* Content based on card type */}
            <div className="p-6 flex-grow overflow-hidden bg-gradient-to-br from-gray-50 to-white relative">
              {/* Decorative background elements */}
              <div className="absolute top-0 right-0 w-32 h-32 bg-exl-orange/5 rounded-full -translate-y-16 translate-x-16"></div>
              <div className="absolute bottom-0 left-0 w-24 h-24 bg-blue-100/30 rounded-full translate-y-12 -translate-x-12"></div>
              
              <div className="relative z-10">
                {id === "ai-trainer" ? (
                  <div className="space-y-4">
                    {[
                      "AI driven personalization for smarter learning",
                      "Seamless experience across web & mobile",
                      "Real-time avatar-based interactions",
                      "Scalable, cloud-native performance"
                    ].map((highlight, index) => (
                      <div key={index} className="flex items-start group">
                        <div className="w-2 h-2 bg-exl-midnight rounded-full mt-2 mr-3 flex-shrink-0"></div>
                        <p className="text-sm text-exl-slate leading-relaxed font-medium group-hover:text-exl-midnight transition-colors">
                          {highlight}
                        </p>
                      </div>
                    ))}
                  </div>
                ) : id === "miai-simulator" ? (
                  <div className="space-y-4">
                    {[
                      "Real-time simulation of customer conversations",
                      "AI-powered sentiment and speech analysis",
                      "Instant feedback and adaptive learning",
                      "Secure, scalable cloud-based deployment"
                    ].map((highlight, index) => (
                      <div key={index} className="flex items-start group">
                        <div className="w-2 h-2 bg-exl-midnight rounded-full mt-2 mr-3 flex-shrink-0"></div>
                        <p className="text-sm text-exl-slate leading-relaxed font-medium group-hover:text-exl-midnight transition-colors">
                          {highlight}
                        </p>
                      </div>
                    ))}
                  </div>
                ) : (
                  <div className="space-y-4">
                    {[
                      "Real-time scoring and interactive achievements",
                      "Blockchain-backed digital certifications",
                      "Multiplayer-ready for global engagement",
                      "Scalable cloud infrastructure for live performance"
                    ].map((highlight, index) => (
                      <div key={index} className="flex items-start group">
                        <div className="w-2 h-2 bg-exl-midnight rounded-full mt-2 mr-3 flex-shrink-0"></div>
                        <p className="text-sm text-exl-slate leading-relaxed font-medium group-hover:text-exl-midnight transition-colors">
                          {highlight}
                        </p>
                      </div>
                    ))}
                  </div>
                )}
              </div>
            </div>
            
            {/* Bottom colored section matching header */}
            <div className={`h-8 bg-gradient-to-br ${bgGradient} rounded-b-2xl relative overflow-hidden`}>
              <div className="absolute inset-0 bg-black bg-opacity-20"></div>
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="w-6 h-0.5 bg-white/30 rounded-full"></div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}