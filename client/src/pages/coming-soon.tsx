import { Clock, ArrowLeft } from "lucide-react";
import { useLocation } from "wouter";

export default function ComingSoon() {
  const [, setLocation] = useLocation();

  return (
    <div className="min-h-screen bg-gradient-to-br from-green-50 via-white to-emerald-50 flex items-center justify-center px-4">
      <div className="max-w-md w-full text-center">
        <div className="bg-white rounded-2xl shadow-xl p-8 border border-gray-100">
          {/* Icon */}
          <div className="w-16 h-16 bg-gradient-to-br from-green-500 to-emerald-600 rounded-full flex items-center justify-center mx-auto mb-6">
            <Clock className="h-8 w-8 text-white" />
          </div>
          
          {/* Title */}
          <h1 className="text-3xl font-bold text-exl-midnight mb-4">
            Coming Soon
          </h1>
          
          {/* Description */}
          <p className="text-exl-slate mb-6 leading-relaxed">
            Our Gamification Experience is currently under development. 
            We're working hard to bring you an exciting learning adventure with leaderboards, badges, and interactive challenges.
          </p>
          
          {/* Feature highlights */}
          <div className="bg-gray-50 rounded-lg p-4 mb-6">
            <h3 className="font-semibold text-exl-midnight mb-3">What's Coming:</h3>
            <ul className="text-sm text-exl-slate space-y-2">
              <li>• Interactive learning games</li>
              <li>• Real-time leaderboards</li>
              <li>• Achievement badges</li>
              <li>• Mastery zones</li>
            </ul>
          </div>
          
          {/* Back button */}
          <button
            onClick={() => setLocation("/")}
            className="inline-flex items-center px-6 py-3 bg-exl-orange text-white rounded-lg font-medium hover:bg-orange-600 transition-colors duration-200"
          >
            <ArrowLeft className="h-4 w-4 mr-2" />
            Back to Home
          </button>
        </div>
      </div>
    </div>
  );
}