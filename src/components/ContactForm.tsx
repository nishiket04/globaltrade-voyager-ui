import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { Card, CardContent } from "@/components/ui/card";
import { useToast } from "@/hooks/use-toast";
import { Send } from "lucide-react";
const ContactForm = () => {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const {
    toast
  } = useToast();
  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsSubmitting(true);

    // Simulate form submission
    await new Promise(resolve => setTimeout(resolve, 1000));
    toast({
      title: "Message Sent Successfully!",
      description: "Thank you for contacting us. We'll get back to you within 24 hours."
    });
    setIsSubmitting(false);
    (e.target as HTMLFormElement).reset();
  };
  return <Card className="border border-gray-100 rounded-xl shadow-custom">
      <CardContent className="p-8 bg-white">
        <form onSubmit={handleSubmit} className="space-y-6">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="space-y-2">
              <Label htmlFor="fullName" className="text-navy font-medium">
                Full Name *
              </Label>
              <Input id="fullName" name="fullName" type="text" required placeholder="Enter your full name" className="border-gray-200 focus:border-cyan focus:ring-cyan rounded-lg bg-transparent placeholder:text-gray-400" />
            </div>

            <div className="space-y-2">
              <Label htmlFor="email" className="text-navy font-medium">
                Email Address *
              </Label>
              <Input id="email" name="email" type="email" required placeholder="Enter your email address" className="border-gray-200 focus:border-cyan focus:ring-cyan rounded-lg bg-transparent placeholder:text-gray-400" />
            </div>
          </div>

          <div className="space-y-2">
            <Label htmlFor="company" className="text-navy font-medium">
              Company Name
            </Label>
            <Input id="company" name="company" type="text" placeholder="Enter your company name" className="border-gray-200 focus:border-cyan focus:ring-cyan rounded-lg bg-transparent placeholder:text-gray-400" />
          </div>

          <div className="space-y-2">
            <Label htmlFor="message" className="text-navy font-medium">
              Message *
            </Label>
            <Textarea id="message" name="message" required rows={6} placeholder="Tell us about your export needs, target markets, or any questions you have..." className="border-gray-200 focus:border-cyan focus:ring-cyan rounded-lg resize-none bg-transparent placeholder:text-gray-400" />
          </div>

          <Button type="submit" disabled={isSubmitting} className="w-full bg-cyan hover:bg-cyan/90 text-white rounded-lg h-12 text-lg font-medium">
            {isSubmitting ? <div className="flex items-center space-x-2">
                <div className="animate-spin rounded-full h-4 w-4 border-2 border-white border-t-transparent"></div>
                <span>Sending...</span>
              </div> : <div className="flex items-center space-x-2">
                <Send className="h-5 w-5" />
                <span>Send Message</span>
              </div>}
          </Button>

          <p className="text-sm text-gray-500 text-center">
            * Required fields. We respect your privacy and will never share your information.
          </p>
        </form>
      </CardContent>
    </Card>;
};
export default ContactForm;