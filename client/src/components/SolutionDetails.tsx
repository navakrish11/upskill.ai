import { Users, Code, Settings, ChevronDown, ChevronUp } from "lucide-react";
import { useState } from "react";

interface SolutionDetailsProps {
  id: string;
  title: string;
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

export default function SolutionDetails({
  id,
  title,
  techDetails,
  productTeam,
  functionalTeam
}: SolutionDetailsProps) {
  const [activeTab, setActiveTab] = useState("tech");
  const [isExpanded, setIsExpanded] = useState(true);

  return (
    <div className="bg-white rounded-lg shadow-sm border border-gray-200 mt-4 flex-grow">
      <button
        onClick={() => setIsExpanded(!isExpanded)}
        className="w-full flex items-center justify-between p-3 hover:bg-gray-50 transition-colors duration-200"
      >
        <span className="font-medium text-exl-midnight text-sm">Detailed Information</span>
        {isExpanded ? (
          <ChevronUp className="h-4 w-4 text-exl-slate" />
        ) : (
          <ChevronDown className="h-4 w-4 text-exl-slate" />
        )}
      </button>
      
      {isExpanded && (
        <div className="border-t border-gray-200">
          {/* Tab Navigation */}
          <div className="flex border-b border-gray-200">
            <button
              onClick={() => setActiveTab("tech")}
              className={`flex items-center px-2 py-2 font-medium text-xs transition-colors duration-200 flex-1 justify-center ${
                activeTab === "tech"
                  ? "text-exl-orange border-b-2 border-exl-orange bg-orange-50"
                  : "text-exl-slate hover:text-exl-midnight"
              }`}
            >
              <Code className="h-3 w-3 mr-1" />
              Tech
            </button>
            <button
              onClick={() => setActiveTab("product")}
              className={`flex items-center px-2 py-2 font-medium text-xs transition-colors duration-200 flex-1 justify-center ${
                activeTab === "product"
                  ? "text-exl-orange border-b-2 border-exl-orange bg-orange-50"
                  : "text-exl-slate hover:text-exl-midnight"
              }`}
            >
              <Users className="h-3 w-3 mr-1" />
              Product
            </button>
            <button
              onClick={() => setActiveTab("functional")}
              className={`flex items-center px-2 py-2 font-medium text-xs transition-colors duration-200 flex-1 justify-center ${
                activeTab === "functional"
                  ? "text-exl-orange border-b-2 border-exl-orange bg-orange-50"
                  : "text-exl-slate hover:text-exl-midnight"
              }`}
            >
              <Settings className="h-3 w-3 mr-1" />
              Functional
            </button>
          </div>

          {/* Tab Content */}
          <div className="p-4">
            {activeTab === "tech" && (
              <div className="space-y-3">
                <div>
                  <h5 className="font-medium text-exl-midnight mb-2 text-sm">Technologies</h5>
                  <ul className="space-y-1">
                    {techDetails.technologies.slice(0, 4).map((tech, index) => (
                      <li key={index} className="text-xs text-exl-slate">• {tech}</li>
                    ))}
                    {techDetails.technologies.length > 4 && (
                      <li className="text-xs text-exl-slate">• +{techDetails.technologies.length - 4} more</li>
                    )}
                  </ul>
                </div>
                <div>
                  <h5 className="font-medium text-exl-midnight mb-2 text-sm">Architecture</h5>
                  <p className="text-xs text-exl-slate leading-relaxed">{techDetails.architecture}</p>
                </div>
                <div>
                  <h5 className="font-medium text-exl-midnight mb-2 text-sm">Deployment</h5>
                  <p className="text-xs text-exl-slate leading-relaxed">{techDetails.deployment}</p>
                </div>
              </div>
            )}

            {activeTab === "product" && (
              <div className="space-y-3">
                <div>
                  <h5 className="font-medium text-exl-midnight mb-2 text-sm">Team Lead</h5>
                  <p className="text-xs text-exl-slate mb-3">{productTeam.lead}</p>
                  
                  <h5 className="font-medium text-exl-midnight mb-2 text-sm">Team Members</h5>
                  <ul className="space-y-1">
                    {productTeam.members.slice(0, 3).map((member, index) => (
                      <li key={index} className="text-xs text-exl-slate">• {member}</li>
                    ))}
                    {productTeam.members.length > 3 && (
                      <li className="text-xs text-exl-slate">• +{productTeam.members.length - 3} more</li>
                    )}
                  </ul>
                </div>
                <div>
                  <h5 className="font-medium text-exl-midnight mb-2 text-sm">Contact</h5>
                  <p className="text-xs text-exl-slate">{productTeam.contact}</p>
                </div>
              </div>
            )}

            {activeTab === "functional" && (
              <div className="space-y-3">
                <div>
                  <h5 className="font-medium text-exl-midnight mb-2 text-sm">Team Lead</h5>
                  <p className="text-xs text-exl-slate mb-3">{functionalTeam.lead}</p>
                  
                  <h5 className="font-medium text-exl-midnight mb-2 text-sm">Team Members</h5>
                  <ul className="space-y-1">
                    {functionalTeam.members.slice(0, 3).map((member, index) => (
                      <li key={index} className="text-xs text-exl-slate">• {member}</li>
                    ))}
                    {functionalTeam.members.length > 3 && (
                      <li className="text-xs text-exl-slate">• +{functionalTeam.members.length - 3} more</li>
                    )}
                  </ul>
                </div>
                <div>
                  <h5 className="font-medium text-exl-midnight mb-2 text-sm">Contact</h5>
                  <p className="text-xs text-exl-slate">{functionalTeam.contact}</p>
                </div>
              </div>
            )}
          </div>
        </div>
      )}
    </div>
  );
}