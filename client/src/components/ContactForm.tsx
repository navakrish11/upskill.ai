import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { useToast } from "@/hooks/use-toast";

interface ContactFormProps {
  isVisible: boolean;
}

export default function ContactForm({ isVisible }: ContactFormProps) {
  const [formData, setFormData] = useState({
    fullName: "",
    workEmail: "",
    company: "",
    role: ""
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const { toast } = useToast();

  const handleInputChange = (field: string, value: string) => {
    setFormData(prev => ({
      ...prev,
      [field]: value
    }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    // Validate required fields
    if (!formData.fullName || !formData.workEmail || !formData.company || !formData.role) {
      toast({
        title: "Please fill in all required fields",
        variant: "destructive",
      });
      setIsSubmitting(false);
      return;
    }

    // Simulate form submission
    try {
      // Here you would typically send the data to your backend
      console.log("Form submitted:", formData);
      
      // Simulate API call delay
      await new Promise(resolve => setTimeout(resolve, 1000));
      
      toast({
        title: "Demo Request Submitted!",
        description: "We'll respond within 24 hours to schedule your personalized demo.",
      });
      
      // Reset form
      setFormData({
        fullName: "",
        workEmail: "",
        company: "",
        role: ""
      });
    } catch (error) {
      toast({
        title: "Error",
        description: "Something went wrong. Please try again.",
        variant: "destructive",
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  if (!isVisible) return null;

  return (
    <div className="bg-white rounded-xl">
          <form onSubmit={handleSubmit} className="space-y-4">
            <div className="grid md:grid-cols-2 gap-4">
              {/* Full Name */}
              <div className="space-y-2">
                <Label htmlFor="fullName" className="text-sm font-medium text-gray-700">
                  Full Name *
                </Label>
                <Input
                  id="fullName"
                  type="text"
                  placeholder="Enter your full name"
                  value={formData.fullName}
                  onChange={(e) => handleInputChange("fullName", e.target.value)}
                  className="h-12"
                  required
                />
              </div>

              {/* Work Email */}
              <div className="space-y-2">
                <Label htmlFor="workEmail" className="text-sm font-medium text-gray-700">
                  Work Email *
                </Label>
                <Input
                  id="workEmail"
                  type="email"
                  placeholder="Enter your work email"
                  value={formData.workEmail}
                  onChange={(e) => handleInputChange("workEmail", e.target.value)}
                  className="h-12"
                  required
                />
              </div>
            </div>

            <div className="grid md:grid-cols-2 gap-4">
              {/* Company */}
              <div className="space-y-2">
                <Label htmlFor="company" className="text-sm font-medium text-gray-700">
                  Company *
                </Label>
                <Input
                  id="company"
                  type="text"
                  placeholder="Enter your company name"
                  value={formData.company}
                  onChange={(e) => handleInputChange("company", e.target.value)}
                  className="h-12"
                  required
                />
              </div>

              {/* Role */}
              <div className="space-y-2">
                <Label htmlFor="role" className="text-sm font-medium text-gray-700">
                  Role *
                </Label>
                <Select value={formData.role} onValueChange={(value) => handleInputChange("role", value)}>
                  <SelectTrigger className="h-12">
                    <SelectValue placeholder="Select your role" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="training-leader">Training Leader</SelectItem>
                    <SelectItem value="ld-head">L&D Head</SelectItem>
                    <SelectItem value="operations-leader">Operations Leader</SelectItem>
                    <SelectItem value="hr-director">HR Director</SelectItem>
                    <SelectItem value="other">Other</SelectItem>
                  </SelectContent>
                </Select>
              </div>
            </div>

            {/* Submit Button */}
            <div className="pt-2">
              <Button 
                type="submit" 
                className="w-full h-11 bg-exl-orange hover:bg-orange-600 text-white font-semibold text-base rounded-lg transition-colors duration-200"
                disabled={isSubmitting}
              >
                {isSubmitting ? "Submitting..." : "Book Your Demo"}
              </Button>
            </div>

            <p className="text-sm text-gray-500 text-center mt-4">
              We'll respond within 24 hours to schedule your personalized demo.
            </p>
          </form>
    </div>
  );
}