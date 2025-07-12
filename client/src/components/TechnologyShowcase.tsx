import { useState } from "react";
import { Clock, TrendingUp, Users, DollarSign, Cloud, Mic, Database, Gamepad2 } from "lucide-react";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";

const businessValueItems = [
  {
    icon: Clock,
    title: "30-50%",
    subtitle: "Faster training cycles",
    bgColor: "bg-blue-100",
    iconColor: "text-blue-600"
  },
  {
    icon: TrendingUp,
    title: "Up to 40%",
    subtitle: "Engagement lift through gamification",
    bgColor: "bg-orange-100",
    iconColor: "text-orange-600"
  },
  {
    icon: Users,
    title: "25%",
    subtitle: "Reduction in ramp-up attrition",
    bgColor: "bg-blue-100",
    iconColor: "text-blue-600"
  },
  {
    icon: DollarSign,
    title: "Up to 35%",
    subtitle: "Reduction in Training Costs",
    bgColor: "bg-green-100",
    iconColor: "text-green-600"
  }
];

const techInfrastructureItems = [
  {
    icon: Cloud,
    title: "Cloud Infrastructure",
    items: ["Microservices on AWS", "Auto-scaling containers", "Multi-region deployment"],
    bgColor: "bg-blue-100",
    iconColor: "text-blue-600"
  },
  {
    icon: Mic,
    title: "Interactive Avatar and Digital Twin",
    items: ["WebRTC + Azure AI", "Real-time voice processing", "Interactive avatar and digital twin"],
    bgColor: "bg-orange-100",
    iconColor: "text-orange-600"
  },
  {
    icon: Database,
    title: "Data Management",
    items: ["Secure blob-based content sync", "MongoDB Atlas clusters", "Redis caching layer"],
    bgColor: "bg-blue-100",
    iconColor: "text-blue-600"
  },
  {
    icon: Gamepad2,
    title: "Gamification Engine",
    items: ["Real-time leaderboards", "Socket.IO for live updates", "Achievement tracking system"],
    bgColor: "bg-orange-100",
    iconColor: "text-orange-600"
  }
];

export default function TechnologyShowcase() {
  return (
    <section className="py-16 lg:py-24 bg-[#f5f5f4]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl lg:text-4xl font-bold text-exl-midnight mb-4">
            Technology Backbone - What Powers Us
          </h2>
          <p className="text-lg text-exl-slate max-w-3xl mx-auto">
            Our platform is built on robust infrastructure delivering measurable business value through cutting-edge technology.
          </p>
        </div>
        
        <Tabs defaultValue="business" className="w-full">
          <TabsList className="grid w-full grid-cols-2 mb-12">
            <TabsTrigger value="business" className="text-lg py-3">Business Value (For Leaders)</TabsTrigger>
            <TabsTrigger value="tech" className="text-lg py-3">Tech Infrastructure (For Developers)</TabsTrigger>
          </TabsList>
          
          <TabsContent value="business" className="space-y-8">
            <div className="grid md:grid-cols-4 gap-8">
              {businessValueItems.map((item, index) => {
                const IconComponent = item.icon;
                return (
                  <div key={index} className="text-center bg-white p-8 rounded-xl shadow-sm hover:shadow-md transition-shadow duration-200">
                    <div className={`w-16 h-16 ${item.bgColor} rounded-lg flex items-center justify-center mx-auto mb-4`}>
                      <IconComponent className={`h-8 w-8 ${item.iconColor}`} />
                    </div>
                    <h3 className="text-2xl font-bold text-exl-midnight mb-2">{item.title}</h3>
                    <p className="text-sm text-exl-slate">{item.subtitle}</p>
                  </div>
                );
              })}
            </div>
          </TabsContent>
          
          <TabsContent value="tech" className="space-y-8">
            <div className="grid md:grid-cols-2 gap-8">
              {techInfrastructureItems.map((item, index) => {
                const IconComponent = item.icon;
                return (
                  <div key={index} className="bg-white p-8 rounded-xl shadow-sm hover:shadow-md transition-shadow duration-200">
                    <div className="flex items-center mb-6">
                      <div className={`w-12 h-12 ${item.bgColor} rounded-lg flex items-center justify-center mr-4`}>
                        <IconComponent className={`h-6 w-6 ${item.iconColor}`} />
                      </div>
                      <h3 className="text-xl font-semibold text-exl-midnight">{item.title}</h3>
                    </div>
                    <ul className="space-y-2">
                      {item.items.map((listItem, itemIndex) => (
                        <li key={itemIndex} className="flex items-center text-sm text-exl-slate">
                          <span className="w-2 h-2 bg-exl-orange rounded-full mr-3"></span>
                          {listItem}
                        </li>
                      ))}
                    </ul>
                  </div>
                );
              })}
            </div>
          </TabsContent>
        </Tabs>
      </div>
    </section>
  );
}