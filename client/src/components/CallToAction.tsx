import { Button } from "@/components/ui/button";

export default function CallToAction() {
  const handleScheduleDemo = () => {
    window.open("mailto:devlead@example.com?subject=Demo Request&body=I would like to schedule a demo of Upskill.AI", "_blank");
  };

  const handleLearnMore = () => {
    const element = document.getElementById("ai-trainer");
    if (element) {
      element.scrollIntoView({ behavior: "smooth", block: "start" });
    }
  };

  return (
    <section className="py-16 lg:py-24 bg-gradient-to-br from-exl-midnight to-blue-800">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <h2 className="text-3xl lg:text-4xl font-bold text-white mb-6">
          Ready to Transform Your Training?
        </h2>
        <p className="text-xl text-blue-100 mb-8 max-w-2xl mx-auto">
          Join organizations already using Upskill.AI to reduce training time, increase engagement, and improve learning outcomes.
        </p>
        
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Button 
            onClick={handleLearnMore}
            className="bg-exl-orange text-white px-8 py-4 rounded-lg font-semibold text-lg hover:bg-orange-600 transition-all duration-200 transform hover:scale-105"
          >
            Learn More
          </Button>
          <Button 
            onClick={handleScheduleDemo}
            variant="outline"
            className="bg-transparent text-white border-2 border-white px-8 py-4 rounded-lg font-semibold text-lg hover:bg-white hover:text-exl-midnight transition-all duration-200"
          >
            Schedule Demo
          </Button>
        </div>
      </div>
    </section>
  );
}
