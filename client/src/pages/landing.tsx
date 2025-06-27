import { useState } from "react";
import Header from "@/components/Header";
import HeroSection from "@/components/HeroSection";
import SolutionCard from "@/components/SolutionCard";
import SolutionDetails from "@/components/SolutionDetails";
import TechnologyShowcase from "@/components/TechnologyShowcase";
import CallToAction from "@/components/CallToAction";
import Footer from "@/components/Footer";
import VideoModal from "@/components/VideoModal";

const solutions = [
  {
    id: "ai-trainer",
    title: "AI Trainer",
    description: "Rapidly converts existing documents into interactive training content delivered via intelligent avatars. Transform static materials into engaging, avatar-based interactions.",
    bgGradient: "from-[hsl(14,96%,51%)] to-orange-400",
    iconPath: "M12 2C13.1 2 14 2.9 14 4C14 5.1 13.1 6 12 6C10.9 6 10 5.1 10 4C10 2.9 10.9 2 12 2ZM21 9V7L15 1H9V3H15.5L21 8.5V21C21 22.1 20.1 23 19 23H5C3.9 23 3 22.1 3 21V3C3 1.9 3.9 1 5 1H7V3H5V21H19V9H21ZM12 8C14.2 8 16 9.8 16 12S14.2 16 12 16S8 14.2 8 12S9.8 8 12 8Z",
    demoLink: "https://example.com/ai-trainer-demo",
    videoSrc: "/videos/ai-trainer-demo.mp4",
    techLink: "https://example.com/ai-trainer-tech",
    productLink: "https://example.com/ai-trainer-product",
    functionalLink: "https://example.com/ai-trainer-functional",
    techDetails: {
      technologies: ["React Native", "TensorFlow", "OpenAI GPT-4", "Azure Speech Services", "Unity 3D", "Node.js"],
      architecture: "Microservices architecture with AI model orchestration, real-time avatar rendering, and cloud-based document processing",
      deployment: "Azure Container Instances with auto-scaling, CDN for avatar assets, and global AI model distribution"
    },
    productTeam: {
      lead: "Sarah Johnson - Senior Product Manager",
      members: ["Mike Chen - Product Designer", "Lisa Rodriguez - User Research Lead", "James Park - Product Analyst"],
      contact: "ai-trainer-product@exl.com"
    },
    functionalTeam: {
      lead: "David Kumar - Functional Lead",
      members: ["Rachel Smith - Training Specialist", "Tom Wilson - Content Strategist", "Maria Garcia - Learning Experience Designer"],
      contact: "ai-trainer-functional@exl.com"
    }
  },
  {
    id: "miai-simulator",
    title: "MiAI Call Simulator",
    description: "Brings real-world customer interactions to life with sentiment scoring, feedback, and reinforcement. Enables agents to practice, fail safely, and improve through realistic simulations.",
    bgGradient: "from-[hsl(207,100%,22%)] to-blue-600",
    iconPath: "M6.62 10.79C8.06 13.62 10.38 15.94 13.21 17.38L15.41 15.18C15.69 14.9 16.08 14.82 16.43 14.93C17.55 15.3 18.75 15.5 20 15.5A1 1 0 0 1 21 16.5V20A1 1 0 0 1 20 21A17 17 0 0 1 3 4A1 1 0 0 1 4 3H7.5A1 1 0 0 1 8.5 4C8.5 5.25 8.7 6.45 9.07 7.57C9.18 7.92 9.1 8.31 8.82 8.59L6.62 10.79Z",
    demoLink: "https://example.com/miai-call-demo",
    videoSrc: "/videos/miai-call-demo.mp4",
    techLink: "https://example.com/miai-call-tech",
    productLink: "https://example.com/miai-call-product",
    functionalLink: "https://example.com/miai-call-functional",
    techDetails: {
      technologies: ["WebRTC", "Python ML Pipeline", "Azure Cognitive Services", "Redis", "PostgreSQL", "React.js"],
      architecture: "Real-time communication platform with AI-powered sentiment analysis, voice recognition, and adaptive response generation",
      deployment: "Kubernetes cluster with load balancing, real-time analytics dashboard, and secure call recording infrastructure"
    },
    productTeam: {
      lead: "Alex Thompson - Product Manager",
      members: ["Jennifer Lee - UX Designer", "Carlos Rodriguez - Product Owner", "Emily Zhang - Business Analyst"],
      contact: "miai-simulator-product@exl.com"
    },
    functionalTeam: {
      lead: "Robert Chen - Operations Lead",
      members: ["Ashley Brown - Call Center Expert", "Michael Davis - Quality Assurance", "Sandra Martinez - Training Coordinator"],
      contact: "miai-simulator-functional@exl.com"
    }
  },
  {
    id: "gamification",
    title: "Gamification Experience",
    description: "Enhances learning through immersive, visual, game-like business scenarios. Features leaderboards, live scores, and unlockable content for skill mastery.",
    bgGradient: "from-green-500 to-emerald-600",
    iconPath: "M5 16L3 5H1V3H4L6 14H18L20 7H8V5H21C21.6 5 22 5.4 22 6C22 6.2 21.9 6.3 21.9 6.4L19.5 15.2C19.3 15.7 18.8 16 18.3 16H5ZM7 18C6.4 18 6 18.4 6 19S6.4 20 7 20 8 19.6 8 19 7.6 18 7 18ZM17 18C16.4 18 16 18.4 16 19S16.4 20 17 20 18 19.6 18 19 17.6 18 17 18Z",
    demoLink: "https://example.com/gamification-demo",
    videoSrc: "/videos/gamification-demo.mp4",
    techLink: "https://example.com/gamification-tech",
    productLink: "https://example.com/gamification-product",
    functionalLink: "https://example.com/gamification-functional",
    techDetails: {
      technologies: ["Unity Engine", "C# .NET Core", "MongoDB", "Socket.IO", "AWS GameLift", "Blockchain (NFTs)"],
      architecture: "Multi-player game engine with real-time scoring, achievement systems, and blockchain-based certification",
      deployment: "AWS cloud gaming infrastructure with global multiplayer support and scalable leaderboard systems"
    },
    productTeam: {
      lead: "Kevin Walsh - Game Product Manager",
      members: ["Sophie Turner - Game Designer", "Ryan O'Connor - Product Strategist", "Nina Patel - Monetization Analyst"],
      contact: "gamification-product@exl.com"
    },
    functionalTeam: {
      lead: "Michelle Rodriguez - Learning Games Lead",
      members: ["Jason Kim - Educational Psychologist", "Amanda Foster - Content Developer", "Daniel Liu - Assessment Specialist"],
      contact: "gamification-functional@exl.com"
    }
  }
];

export default function Landing() {
  const [videoModal, setVideoModal] = useState<{
    isOpen: boolean;
    videoSrc: string;
    title: string;
  }>({
    isOpen: false,
    videoSrc: "",
    title: ""
  });

  const handleVideoOpen = (videoSrc: string, title: string) => {
    setVideoModal({
      isOpen: true,
      videoSrc,
      title
    });
  };

  const handleVideoClose = () => {
    setVideoModal({
      isOpen: false,
      videoSrc: "",
      title: ""
    });
  };

  return (
    <div className="min-h-screen bg-white">
      <Header />
      <HeroSection onVideoOpen={handleVideoOpen} />
      
      {/* Platform Overview Section */}
      <section className="py-16 lg:py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Section Header */}
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold text-exl-midnight mb-4">
              Three Core AI Solutions
            </h2>
            <p className="text-lg text-exl-slate max-w-3xl mx-auto">
              Our platform is anchored on three innovative solutions designed to transform how organizations approach training and development.
            </p>
          </div>
          
          {/* Solutions Grid */}
          <div className="grid md:grid-cols-3 gap-8 lg:gap-12">
            {solutions.map((solution) => (
              <div key={solution.id} className="flex flex-col">
                <SolutionCard 
                  {...solution} 
                  onVideoOpen={handleVideoOpen}
                />
                <SolutionDetails
                  id={solution.id}
                  title={solution.title}
                  techDetails={solution.techDetails}
                  productTeam={solution.productTeam}
                  functionalTeam={solution.functionalTeam}
                />
              </div>
            ))}
          </div>
        </div>
      </section>

      <TechnologyShowcase />
      <CallToAction />
      <Footer />
      
      {/* Video Modal */}
      <VideoModal
        isOpen={videoModal.isOpen}
        onClose={handleVideoClose}
        videoSrc={videoModal.videoSrc}
        title={videoModal.title}
      />
    </div>
  );
}
