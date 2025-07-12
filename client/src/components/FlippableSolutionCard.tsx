import { useState, useEffect } from "react";
import { Play, ArrowLeft } from "lucide-react";

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
    <div id={id} className="relative h-[350px] w-full perspective-1000">
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
            <div className={`h-32 bg-gradient-to-br ${bgGradient} rounded-t-2xl relative overflow-hidden flex-shrink-0`}>
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
              <div className="h-16 overflow-hidden mb-4">
                <p className="text-sm text-exl-slate leading-relaxed">
                  {description}
                </p>
              </div>
              
              {/* Action Links */}
              <div className="space-y-2 mt-auto">
                <button 
                  onClick={(e) => {
                    e.stopPropagation();
                    handleDemoClick();
                  }}
                  className="flex items-center justify-center bg-exl-orange text-white px-4 py-2 rounded-lg font-medium hover:bg-orange-600 transition-colors duration-200 w-full text-sm"
                >
                  <Play className="h-4 w-4 mr-2 fill-current" />
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

            

            {/* Tech Details Content */}
            <div className="p-4 flex-grow overflow-hidden">
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
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}