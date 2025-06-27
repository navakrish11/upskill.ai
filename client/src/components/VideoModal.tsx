import { X } from "lucide-react";
import { Button } from "@/components/ui/button";

interface VideoModalProps {
  isOpen: boolean;
  onClose: () => void;
  videoSrc: string;
  title: string;
}

export default function VideoModal({ isOpen, onClose, videoSrc, title }: VideoModalProps) {
  if (!isOpen) return null;

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
        <div className="aspect-video bg-black">
          <video
            src={videoSrc}
            controls
            className="w-full h-full"
            autoPlay
            playsInline
          >
            Your browser does not support the video tag.
          </video>
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