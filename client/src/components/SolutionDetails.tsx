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
  const [isExpanded, setIsExpanded] = useState(false);

  return (
    <div className="bg-white rounded-lg shadow-sm border border-gray-200 mt-6">
      <button
        onClick={() => setIsExpanded(!isExpanded)}
        className="w-full flex items-center justify-between p-4 hover:bg-gray-50 transition-colors duration-200"
      >
        <span className="font-medium text-exl-midnight">View Detailed Information</span>
        {isExpanded ? (
          <ChevronUp className="h-5 w-5 text-exl-slate" />
        ) : (
          <ChevronDown className="h-5 w-5 text-exl-slate" />
        )}
      </button>
      
      {isExpanded && (
        <div className="border-t border-gray-200">
          {/* Tab Navigation */}
          <div className="flex border-b border-gray-200">
            <button
              onClick={() => setActiveTab("tech")}
              className={`flex items-center px-4 py-3 font-medium text-sm transition-colors duration-200 ${
                activeTab === "tech"
                  ? "text-exl-orange border-b-2 border-exl-orange bg-orange-50"
                  : "text-exl-slate hover:text-exl-midnight"
              }`}
            >
              <Code className="h-4 w-4 mr-2" />
              Tech Details
            </button>
            <button
              onClick={() => setActiveTab("product")}
              className={`flex items-center px-4 py-3 font-medium text-sm transition-colors duration-200 ${
                activeTab === "product"
                  ? "text-exl-orange border-b-2 border-exl-orange bg-orange-50"
                  : "text-exl-slate hover:text-exl-midnight"
              }`}
            >
              <Users className="h-4 w-4 mr-2" />
              Product Team
            </button>
            <button
              onClick={() => setActiveTab("functional")}
              className={`flex items-center px-4 py-3 font-medium text-sm transition-colors duration-200 ${
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
          <div className="p-6">
            {activeTab === "tech" && (
              <div className="space-y-4">
                <h4 className="font-semibold text-exl-midnight mb-3">Technical Specifications</h4>
                <div className="grid md:grid-cols-3 gap-4">
                  <div>
                    <h5 className="font-medium text-exl-midnight mb-2">Technologies</h5>
                    <ul className="space-y-1">
                      {techDetails.technologies.map((tech, index) => (
                        <li key={index} className="text-sm text-exl-slate">• {tech}</li>
                      ))}
                    </ul>
                  </div>
                  <div>
                    <h5 className="font-medium text-exl-midnight mb-2">Architecture</h5>
                    <p className="text-sm text-exl-slate">{techDetails.architecture}</p>
                  </div>
                  <div>
                    <h5 className="font-medium text-exl-midnight mb-2">Deployment</h5>
                    <p className="text-sm text-exl-slate">{techDetails.deployment}</p>
                  </div>
                </div>
              </div>
            )}

            {activeTab === "product" && (
              <div className="space-y-4">
                <h4 className="font-semibold text-exl-midnight mb-3">Product Team</h4>
                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <h5 className="font-medium text-exl-midnight mb-2">Team Lead</h5>
                    <p className="text-sm text-exl-slate mb-4">{productTeam.lead}</p>
                    
                    <h5 className="font-medium text-exl-midnight mb-2">Team Members</h5>
                    <ul className="space-y-1">
                      {productTeam.members.map((member, index) => (
                        <li key={index} className="text-sm text-exl-slate">• {member}</li>
                      ))}
                    </ul>
                  </div>
                  <div>
                    <h5 className="font-medium text-exl-midnight mb-2">Contact</h5>
                    <p className="text-sm text-exl-slate">{productTeam.contact}</p>
                  </div>
                </div>
              </div>
            )}

            {activeTab === "functional" && (
              <div className="space-y-4">
                <h4 className="font-semibold text-exl-midnight mb-3">Functional Team</h4>
                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <h5 className="font-medium text-exl-midnight mb-2">Team Lead</h5>
                    <p className="text-sm text-exl-slate mb-4">{functionalTeam.lead}</p>
                    
                    <h5 className="font-medium text-exl-midnight mb-2">Team Members</h5>
                    <ul className="space-y-1">
                      {functionalTeam.members.map((member, index) => (
                        <li key={index} className="text-sm text-exl-slate">• {member}</li>
                      ))}
                    </ul>
                  </div>
                  <div>
                    <h5 className="font-medium text-exl-midnight mb-2">Contact</h5>
                    <p className="text-sm text-exl-slate">{functionalTeam.contact}</p>
                  </div>
                </div>
              </div>
            )}
          </div>
        </div>
      )}
    </div>
  );
}