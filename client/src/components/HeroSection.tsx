import { Button } from "@/components/ui/button";

interface HeroSectionProps {
  onVideoOpen: (videoSrc: string, title: string, isComingSoon?: boolean) => void;
}

export default function HeroSection({ onVideoOpen }: HeroSectionProps) {
  const handleGetStarted = () => {
    const element = document.getElementById("ai-trainer");
    if (element) {
      element.scrollIntoView({ behavior: "smooth", block: "start" });
    }
  };

  const handleWatchDemo = () => {
    onVideoOpen("/videos/ai-trainer-demo.mp4", "AI Trainer");
  };

  return (
    <section className="bg-gradient-to-br from-exl-light to-white pt-4 pb-2 lg:pt-6 lg:pb-4">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-4xl mx-auto">
          <div className="mb-2">
            <svg 
              viewBox="0 0 800 120" 
              className="w-full max-w-4xl mx-auto h-auto cursor-pointer"
              style={{ filter: 'drop-shadow(2px 4px 8px rgba(0,0,0,0.1))' }}
              title="Upskill.AI is EXL's flagship initiative transforming new hire and lateral training through cutting-edge AI, gamification, and simulation technologies. A unified platform accelerating time-to-proficiency through intelligent avatars, real-life simulations, and competitive learning journeys."
            >
              <defs>
                <linearGradient id="orangeGradient" x1="0%" y1="0%" x2="100%" y2="0%">
                  <stop offset="0%" style={{ stopColor: '#ea580c', stopOpacity: 1 }} />
                  <stop offset="100%" style={{ stopColor: '#f97316', stopOpacity: 1 }} />
                </linearGradient>
                <linearGradient id="textGradient" x1="0%" y1="0%" x2="0%" y2="100%">
                  <stop offset="0%" style={{ stopColor: '#1e293b', stopOpacity: 1 }} />
                  <stop offset="100%" style={{ stopColor: '#334155', stopOpacity: 1 }} />
                </linearGradient>
              </defs>
              
              {/* Main text */}
              <text 
                x="400" 
                y="35" 
                textAnchor="middle" 
                className="text-2xl lg:text-3xl font-bold"
                fill="url(#textGradient)"
                style={{ fontSize: '28px', fontWeight: 'bold', fontFamily: 'system-ui, -apple-system, sans-serif' }}
              >
                Reimagine Learning & Readiness with
              </text>
              
              {/* EXL's AI Training Suite - highlighted */}
              <text 
                x="400" 
                y="75" 
                textAnchor="middle" 
                className="text-2xl lg:text-3xl font-bold"
                fill="url(#orangeGradient)"
                style={{ fontSize: '32px', fontWeight: 'bold', fontFamily: 'system-ui, -apple-system, sans-serif' }}
              >
                EXL's AI Training Suite
              </text>
              
              {/* Decorative elements */}
              <circle cx="50" cy="60" r="3" fill="url(#orangeGradient)" opacity="0.6" />
              <circle cx="750" cy="60" r="3" fill="url(#orangeGradient)" opacity="0.6" />
              <rect x="70" y="58" width="20" height="4" fill="url(#orangeGradient)" opacity="0.4" rx="2" />
              <rect x="710" y="58" width="20" height="4" fill="url(#orangeGradient)" opacity="0.4" rx="2" />
            </svg>
          </div>


        </div>
      </div>
    </section>
  );
}
