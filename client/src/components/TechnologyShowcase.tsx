import { Brain, BarChart3, Trophy, Shield } from "lucide-react";

const technologyFeatures = [
  {
    icon: Brain,
    title: "Intelligent AI Avatars",
    description: "Dynamic virtual trainers that adapt to learning styles",
    bgColor: "bg-exl-orange bg-opacity-10",
    iconColor: "text-exl-orange"
  },
  {
    icon: BarChart3,
    title: "Real-time Analytics",
    description: "Performance tracking and sentiment analysis",
    bgColor: "bg-exl-midnight bg-opacity-10",
    iconColor: "text-exl-midnight"
  },
  {
    icon: Trophy,
    title: "Gamified Learning",
    description: "Achievement systems and competitive elements",
    bgColor: "bg-green-500 bg-opacity-10",
    iconColor: "text-green-600"
  },
  {
    icon: Shield,
    title: "Safe Environment",
    description: "Risk-free practice with realistic scenarios",
    bgColor: "bg-blue-500 bg-opacity-10",
    iconColor: "text-blue-600"
  }
];

export default function TechnologyShowcase() {
  return (
    <section className="py-16 lg:py-24 bg-exl-light">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl lg:text-4xl font-bold text-exl-midnight mb-4">
            Powered by Advanced AI Technology
          </h2>
          <p className="text-lg text-exl-slate max-w-3xl mx-auto">
            Our platform leverages cutting-edge artificial intelligence to create immersive, personalized learning experiences that adapt to each user's needs.
          </p>
        </div>
        
        {/* Technology Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {technologyFeatures.map((feature, index) => {
            const IconComponent = feature.icon;
            return (
              <div key={index} className="text-center bg-white p-6 rounded-xl shadow-sm hover:shadow-md transition-shadow duration-200">
                <div className={`w-16 h-16 ${feature.bgColor} rounded-lg flex items-center justify-center mx-auto mb-4`}>
                  <IconComponent className={`h-8 w-8 ${feature.iconColor}`} />
                </div>
                <h3 className="font-semibold text-exl-midnight mb-2">{feature.title}</h3>
                <p className="text-sm text-exl-slate">{feature.description}</p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
