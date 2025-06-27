import { Play } from "lucide-react";

interface SolutionCardProps {
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
}

export default function SolutionCard({
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
  onVideoOpen
}: SolutionCardProps) {
  const openLink = (url: string) => {
    window.open(url, "_blank");
  };

  const handleDemoClick = () => {
    onVideoOpen(videoSrc, title);
  };

  return (
    <div id={id} className="bg-white rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2 border border-gray-100 h-full flex flex-col">
      {/* Solution visual representation */}
      <div className={`h-48 bg-gradient-to-br ${bgGradient} rounded-t-2xl relative overflow-hidden flex-shrink-0`}>
        <div className="absolute inset-0 bg-black bg-opacity-20"></div>
        <div className="absolute bottom-4 left-4 text-white">
          <svg className="h-12 w-12" fill="currentColor" viewBox="0 0 24 24">
            <path d={iconPath} />
          </svg>
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
            onClick={handleDemoClick}
            className="flex items-center justify-center bg-exl-orange text-white px-6 py-3 rounded-lg font-medium hover:bg-orange-600 transition-colors duration-200 w-full"
          >
            <Play className="h-5 w-5 mr-2 fill-current" />
            View Demo
          </button>
        </div>
      </div>
    </div>
  );
}
