import { X, Clock } from "lucide-react";
import { Button } from "@/components/ui/button";

interface VideoModalProps {
  isOpen: boolean;
  onClose: () => void;
  videoSrc: string;
  title: string;
}

export default function VideoModal({ isOpen, onClose, videoSrc, title }: VideoModalProps) {
  if (!isOpen) return null;

  // Check if this is a coming soon demo
  const isComingSoon = videoSrc.includes("miai-call-demo") || videoSrc.includes("gamification-demo");

  return (
    <div className="fixed inset-0 bg-black bg-opacity-75 flex items-center justify-center z-50 p-4">
      <div className="bg-white rounded-lg shadow-2xl max-w-4xl w-full max-h-[90vh] overflow-hidden">
        {/* Modal Header */}
        <div className="flex items-center justify-between p-4 border-b border-gray-200">
          <h3 className="text-xl font-semibold text-exl-midnight">{title} - Demo Video</h3>
          <Button
            onClick={onClose}
            variant="ghost"
            size="sm"
            className="text-gray-500 hover:text-gray-700"
          >
            <X className="h-5 w-5" />
          </Button>
        </div>
        
        {/* Video Content */}
        <div className="aspect-video bg-gradient-to-br from-gray-900 to-gray-800 flex items-center justify-center">
          {isComingSoon ? (
            <div className="text-center text-white p-8">
              <div className="w-16 h-16 bg-exl-orange rounded-full flex items-center justify-center mx-auto mb-4">
                <Clock className="h-8 w-8 text-white" />
              </div>
              <h2 className="text-3xl font-bold mb-4">Coming Soon</h2>
              <p className="text-lg text-gray-300 mb-6">
                We're working hard to bring you an amazing demo experience.
              </p>
              <p className="text-sm text-gray-400">
                Stay tuned for updates on this exciting feature!
              </p>
            </div>
          ) : (
            <video
              src={videoSrc}
              controls
              className="w-full h-full"
              autoPlay
              playsInline
            >
              Your browser does not support the video tag.
            </video>
          )}
        </div>
        
        {/* Modal Footer */}
        <div className="p-4 bg-gray-50 flex justify-end">
          <Button onClick={onClose} className="bg-exl-orange text-white hover:bg-orange-600">
            Close
          </Button>
        </div>
      </div>
    </div>
  );
}