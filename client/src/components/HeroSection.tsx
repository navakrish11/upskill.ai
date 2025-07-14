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
      <div className="w-full px-6 sm:px-8 lg:px-12 xl:px-16">
        <div className="max-w-7xl mx-auto">
          <div className="text-center max-w-4xl mx-auto">
            <div className="mb-2">
              <h1 className="text-xl sm:text-2xl lg:text-3xl xl:text-4xl font-bold text-exl-midnight mb-1 leading-tight">
                <span className="block">Reimagine Learning & Readiness with</span>
                <span className="text-exl-orange block">EXL's AI Training Suite</span>
              </h1>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
