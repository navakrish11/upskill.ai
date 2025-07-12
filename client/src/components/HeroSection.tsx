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
    <section className="bg-gradient-to-br from-exl-light to-white py-8 lg:py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-4xl mx-auto">
          <h1 className="text-3xl lg:text-4xl font-bold text-exl-midnight leading-tight mb-4">
            Reimagine Learning & Readiness with{" "}
            <span className="text-exl-orange">EXL's AI Training Suite</span>
          </h1>
          <p className="text-lg text-exl-slate leading-relaxed mb-6 max-w-3xl mx-auto">
            Upskill.AI is EXL's flagship initiative transforming new hire and lateral training through cutting-edge AI, gamification, and simulation technologies. A unified platform accelerating time-to-proficiency through intelligent avatars, real-life simulations, and competitive learning journeys.
          </p>
          
          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-3 justify-center">
            <Button 
              onClick={handleGetStarted}
              className="bg-exl-orange text-white px-6 py-3 rounded-lg font-semibold hover:bg-orange-600 transition-all duration-200 transform hover:scale-105"
            >
              Get Started
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
}
