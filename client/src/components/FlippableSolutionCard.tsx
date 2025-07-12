import { useState, useEffect } from "react";
import { Play, Users, Code, Settings, ArrowLeft } from "lucide-react";

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
  const [activeTab, setActiveTab] = useState("tech");

  useEffect(() => {
    const handleFlipCard = (event: CustomEvent) => {
      if (event.detail.cardId === id) {
        setIsFlipped(true);
        setActiveTab("tech"); // Reset to tech tab when flipping from external source
      } else {
        // Reset this card to front view if another card is being flipped
        setIsFlipped(false);
      }
    };

    const handleResetAllCards = () => {
      setIsFlipped(false);
    };

    const handleDocumentClick = (event: MouseEvent) => {
      const cardElement = document.getElementById(id);
      if (cardElement && !cardElement.contains(event.target as Node)) {
        // Clicked outside this card, reset it to front view
        setIsFlipped(false);
      }
    };

    window.addEventListener('flipCard', handleFlipCard as EventListener);
    window.addEventListener('resetAllCards', handleResetAllCards as EventListener);
    document.addEventListener('click', handleDocumentClick);
    
    return () => {
      window.removeEventListener('flipCard', handleFlipCard as EventListener);
      window.removeEventListener('resetAllCards', handleResetAllCards as EventListener);
      document.removeEventListener('click', handleDocumentClick);
    };
  }, [id]);

  const handleDemoClick = () => {
    onVideoOpen(videoSrc, title);
  };

  const handleCardClick = () => {
    if (!isFlipped) {
      // If flipping this card to show details, reset all other cards
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
    <div id={id} className="relative h-[500px] w-full perspective-1000">
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
            <div className={`h-48 bg-gradient-to-br ${bgGradient} rounded-t-2xl relative overflow-hidden flex-shrink-0`}>
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
            
            <div className="p-8 flex flex-col flex-grow">
              <h3 className="text-2xl font-bold text-exl-midnight mb-4">{title}</h3>
              <div className="h-24 overflow-hidden mb-6">
                <p className="text-exl-slate leading-relaxed">
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
                  className="flex items-center justify-center bg-exl-orange text-white px-6 py-3 rounded-lg font-medium hover:bg-orange-600 transition-colors duration-200 w-full"
                >
                  <Play className="h-5 w-5 mr-2 fill-current" />
                  View Demo
                </button>
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
                <h3 className="text-xl font-bold text-white">{title} - Details</h3>
                <button
                  onClick={handleBackClick}
                  className="text-white hover:text-gray-200 transition-colors duration-200"
                >
                  <ArrowLeft className="h-6 w-6" />
                </button>
              </div>
            </div>

            {/* Tab Navigation */}
            <div className="flex border-b border-gray-200 flex-shrink-0">
              <button
                onClick={(e) => {
                  e.stopPropagation();
                  setActiveTab("tech");
                }}
                className={`flex items-center px-4 py-3 font-medium text-sm transition-colors duration-200 flex-1 justify-center ${
                  activeTab === "tech"
                    ? "text-exl-orange border-b-2 border-exl-orange bg-orange-50"
                    : "text-exl-slate hover:text-exl-midnight"
                }`}
              >
                <Code className="h-4 w-4 mr-2" />
                Tech Details
              </button>
              <button
                onClick={(e) => {
                  e.stopPropagation();
                  setActiveTab("product");
                }}
                className={`flex items-center px-4 py-3 font-medium text-sm transition-colors duration-200 flex-1 justify-center ${
                  activeTab === "product"
                    ? "text-exl-orange border-b-2 border-exl-orange bg-orange-50"
                    : "text-exl-slate hover:text-exl-midnight"
                }`}
              >
                <Users className="h-4 w-4 mr-2" />
                Product Team
              </button>
              <button
                onClick={(e) => {
                  e.stopPropagation();
                  setActiveTab("functional");
                }}
                className={`flex items-center px-4 py-3 font-medium text-sm transition-colors duration-200 flex-1 justify-center ${
                  activeTab === "functional"
                    ? "text-exl-orange border-b-2 border-exl-orange bg-orange-50"
                    : "text-exl-slate hover:text-exl-midnight"
                }`}
              >
                <Settings className="h-4 w-4 mr-2" />
                Functional Team
              </button>
            </div>

            {/* Tab Content */}
            <div className="p-4 flex-grow overflow-hidden">
              {activeTab === "tech" && (
                <div className="space-y-3">
                  <div>
                    <h5 className="font-semibold text-exl-midnight mb-2">Technologies</h5>
                    <div className="grid grid-cols-2 gap-1">
                      {techDetails.technologies.map((tech, index) => (
                        <div key={index} className="text-xs text-exl-slate bg-gray-50 px-2 py-1 rounded">
                          {tech}
                        </div>
                      ))}
                    </div>
                  </div>
                  <div>
                    <h5 className="font-semibold text-exl-midnight mb-2">Architecture</h5>
                    <p className="text-xs text-exl-slate leading-relaxed">{techDetails.architecture}</p>
                  </div>
                  <div>
                    <h5 className="font-semibold text-exl-midnight mb-2">Deployment</h5>
                    <p className="text-xs text-exl-slate leading-relaxed">{techDetails.deployment}</p>
                  </div>
                </div>
              )}

              {activeTab === "product" && (
                <div className="space-y-3">
                  <div>
                    <h5 className="font-semibold text-exl-midnight mb-2">Team Lead</h5>
                    <p className="text-xs text-exl-slate bg-gray-50 px-2 py-1 rounded">{productTeam.lead}</p>
                  </div>
                  <div>
                    <h5 className="font-semibold text-exl-midnight mb-2">Team Members</h5>
                    <div className="space-y-1">
                      {productTeam.members.map((member, index) => (
                        <div key={index} className="text-xs text-exl-slate bg-gray-50 px-2 py-1 rounded">
                          {member}
                        </div>
                      ))}
                    </div>
                  </div>
                  <div>
                    <h5 className="font-semibold text-exl-midnight mb-2">Contact</h5>
                    <p className="text-xs text-exl-slate bg-gray-50 px-2 py-1 rounded">{productTeam.contact}</p>
                  </div>
                </div>
              )}

              {activeTab === "functional" && (
                <div className="space-y-3">
                  <div>
                    <h5 className="font-semibold text-exl-midnight mb-2">Team Lead</h5>
                    <p className="text-xs text-exl-slate bg-gray-50 px-2 py-1 rounded">{functionalTeam.lead}</p>
                  </div>
                  <div>
                    <h5 className="font-semibold text-exl-midnight mb-2">Team Members</h5>
                    <div className="space-y-1">
                      {functionalTeam.members.map((member, index) => (
                        <div key={index} className="text-xs text-exl-slate bg-gray-50 px-2 py-1 rounded">
                          {member}
                        </div>
                      ))}
                    </div>
                  </div>
                  <div>
                    <h5 className="font-semibold text-exl-midnight mb-2">Contact</h5>
                    <p className="text-xs text-exl-slate bg-gray-50 px-2 py-1 rounded">{functionalTeam.contact}</p>
                  </div>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}