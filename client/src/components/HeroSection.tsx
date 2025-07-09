import { Button } from "@/components/ui/button";

interface HeroSectionProps {
  onVideoOpen: (videoSrc: string, title: string) => void;
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
    <section className="bg-gradient-to-br from-exl-light to-white py-16 lg:py-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-4xl mx-auto">
          <h1 className="text-4xl lg:text-6xl font-bold text-exl-midnight leading-tight mb-6">
            Reimagine Learning & Readiness with{" "}
            <span className="text-exl-orange">EXL's AI Training Suite</span>
          </h1>
          <p className="text-xl text-exl-slate leading-relaxed mb-8 max-w-3xl mx-auto">
            Upskill.AI is EXL's flagship initiative transforming new hire and lateral training through cutting-edge AI, gamification, and simulation technologies. A unified platform accelerating time-to-proficiency through intelligent avatars, real-life simulations, and competitive learning journeys.
          </p>
          
          {/* Key benefits badges */}
          <div className="flex flex-wrap justify-center gap-4 mb-10">
            <span className="bg-white px-4 py-2 rounded-full text-sm font-medium text-exl-midnight border border-gray-200">
              Reduced Training Time
            </span>
            <span className="bg-white px-4 py-2 rounded-full text-sm font-medium text-exl-midnight border border-gray-200">
              Interactive AI Avatars
            </span>
            <span className="bg-white px-4 py-2 rounded-full text-sm font-medium text-exl-midnight border border-gray-200">
              Real-World Simulations
            </span>
            <span className="bg-white px-4 py-2 rounded-full text-sm font-medium text-exl-midnight border border-gray-200">
              Gamified Learning
            </span>
          </div>
          
          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button 
              onClick={handleGetStarted}
              className="bg-exl-orange text-white px-8 py-4 rounded-lg font-semibold text-lg hover:bg-orange-600 transition-all duration-200 transform hover:scale-105"
            >
              Get Started
            </Button>
            <Button 
              onClick={handleWatchDemo}
              variant="outline"
              className="bg-white text-exl-midnight px-8 py-4 rounded-lg font-semibold text-lg border-2 border-exl-midnight hover:bg-exl-midnight hover:text-white transition-all duration-200"
            >
              Watch Demo
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
}
