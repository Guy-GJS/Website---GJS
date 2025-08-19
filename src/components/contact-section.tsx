import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { MessageCircle, ArrowRight, CheckCircle } from "lucide-react";

export const ContactSection = () => {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    address: "",
    propertyType: "",
    timeline: ""
  });

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    // Simulate form submission
    setTimeout(() => {
      setIsSubmitting(false);
      // You can add success notification here
      console.log("Form submitted:", formData);
    }, 2000);
  };

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFormData({
      ...formData,
      [e.target.id]: e.target.value
    });
  };

  return (
    <section id="contact" className="py-16 sm:py-20 lg:py-24 bg-gradient-to-br from-white to-cyan-50/20 relative overflow-hidden">

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
        <div className="text-center mb-12 sm:mb-16">
          <div className="inline-flex items-center justify-center w-16 h-16 bg-gradient-to-br from-cyan-50 to-cyan-100 rounded-full mb-6 border border-cyan-200">
            <MessageCircle className="h-8 w-8 text-cyan-700" />
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight mb-4">
            <span className="bg-gradient-to-r from-gray-900 to-cyan-700 bg-clip-text text-transparent">
              Let's Talk About Your Property
            </span>
          </h2>
          <p className="text-lg sm:text-xl text-muted-foreground max-w-3xl mx-auto">
            Questions? Let's talk.
            <span className="block mt-2 text-cyan-700 font-semibold">Fair. Straightforward. Quick.</span>
          </p>
        </div>

        <div className="max-w-md mx-auto">
          <Card className="border-0 shadow-xl bg-white">
            {/* Form Header */}
            <div className="bg-gradient-to-r from-cyan-600 to-cyan-700 p-4 sm:p-6 rounded-t-xl">
              <h2 className="text-xl sm:text-2xl font-bold text-white text-center">
                Get Your Free Cash Offer
              </h2>
              <p className="text-sm sm:text-base text-cyan-100 text-center mt-1 sm:mt-2">
                No obligation • Advanced models • 24-hour email delivery
              </p>
            </div>
            
            <CardContent className="p-4 sm:p-6">
              <form onSubmit={handleSubmit} className="space-y-3 sm:space-y-4">
                {/* Name Fields - Responsive Grid */}
                <div className="grid grid-cols-2 gap-2 sm:gap-3">
                  <div>
                    <Label htmlFor="firstName" className="sr-only">First Name</Label>
                    <Input 
                      id="firstName" 
                      placeholder="First Name*" 
                      required 
                      className="h-10 sm:h-12 text-sm sm:text-base border-gray-200 focus:border-primary"
                      value={formData.firstName}
                      onChange={handleInputChange}
                    />
                  </div>
                  <div>
                    <Label htmlFor="lastName" className="sr-only">Last Name</Label>
                    <Input 
                      id="lastName" 
                      placeholder="Last Name*" 
                      required 
                      className="h-10 sm:h-12 text-sm sm:text-base border-gray-200 focus:border-primary"
                      value={formData.lastName}
                      onChange={handleInputChange}
                    />
                  </div>
                </div>
                
                {/* Email */}
                <div>
                  <Label htmlFor="email" className="sr-only">Email</Label>
                  <Input 
                    id="email" 
                    type="email" 
                    placeholder="Email Address*" 
                    required 
                    className="h-10 sm:h-12 text-sm sm:text-base border-gray-200 focus:border-primary"
                    value={formData.email}
                    onChange={handleInputChange}
                  />
                </div>
                
                
                
                {/* Property Address */}
                <div>
                  <Label htmlFor="address" className="sr-only">Property Address</Label>
                  <Input 
                    id="address" 
                    placeholder="Property Address*" 
                    required 
                    className="h-10 sm:h-12 text-sm sm:text-base border-gray-200 focus:border-primary"
                    value={formData.address}
                    onChange={handleInputChange}
                  />
                </div>
                
                {/* Property Type */}
                <div>
                  <Label htmlFor="propertyType" className="sr-only">Property Type</Label>
                  <Select onValueChange={(value) => setFormData({...formData, propertyType: value})}>
                    <SelectTrigger className="h-10 sm:h-12 text-sm sm:text-base border-gray-200 focus:border-primary">
                      <SelectValue placeholder="Property Type*" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="single-family">Single Family Home</SelectItem>
                      <SelectItem value="townhouse">Townhouse</SelectItem>
                      <SelectItem value="condo">Condominium</SelectItem>
                      <SelectItem value="multi-family">Multi-Family</SelectItem>
                      <SelectItem value="land">Vacant Land</SelectItem>
                      <SelectItem value="other">Other</SelectItem>
                    </SelectContent>
                  </Select>
                </div>
                
                {/* Timeline */}
                <div>
                  <Label htmlFor="timeline" className="sr-only">Selling Timeline</Label>
                  <Select onValueChange={(value) => setFormData({...formData, timeline: value})}>
                    <SelectTrigger className="h-10 sm:h-12 text-sm sm:text-base border-gray-200 focus:border-primary">
                      <SelectValue placeholder="How soon do you need to sell?*" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="asap">ASAP</SelectItem>
                      <SelectItem value="30-days">Within 30 days</SelectItem>
                      <SelectItem value="60-days">Within 60 days</SelectItem>
                      <SelectItem value="90-days">Within 90 days</SelectItem>
                      <SelectItem value="flexible">I'm flexible</SelectItem>
                    </SelectContent>
                  </Select>
                </div>
                
                {/* Submit Button - Mobile Optimized */}
                <Button 
                  type="submit" 
                  size="lg" 
                  className="w-full h-12 sm:h-14 text-sm sm:text-lg font-semibold bg-gradient-to-r from-cyan-600 to-cyan-700 hover:from-cyan-700 hover:to-cyan-800 transition-all disabled:opacity-50 disabled:cursor-not-allowed shadow-md hover:shadow-lg text-white"
                  disabled={isSubmitting}
                >
                  {isSubmitting ? (
                    <span className="flex items-center justify-center gap-2">
                      <span className="w-4 h-4 sm:w-5 sm:h-5 border-2 border-white/30 border-t-white rounded-full animate-spin"></span>
                      Processing...
                    </span>
                  ) : (
                    <span className="flex items-center justify-center gap-2">
                      Get an Offer 
                      <ArrowRight className="w-4 h-4 sm:w-5 sm:h-5" />
                    </span>
                  )}
                </Button>

                {/* Trust Indicators - Mobile Responsive */}
                <div className="flex items-center justify-center gap-2 sm:gap-4 pt-3 sm:pt-4 border-t border-gray-100">
                  <div className="flex items-center gap-1 text-xs sm:text-sm text-gray-600">
                    <CheckCircle className="w-3 h-3 sm:w-4 sm:h-4 text-green-600" />
                    <span>No fees</span>
                  </div>
                  <div className="flex items-center gap-1 text-xs sm:text-sm text-gray-600">
                    <CheckCircle className="w-3 h-3 sm:w-4 sm:h-4 text-green-600" />
                    <span>No obligation</span>
                  </div>
                  <div className="flex items-center gap-1 text-xs sm:text-sm text-gray-600">
                    <CheckCircle className="w-3 h-3 sm:w-4 sm:h-4 text-green-600" />
                    <span>24hr reply</span>
                  </div>
                </div>
                
                {/* Privacy Notice - Mobile Text Size */}
                <p className="text-xs text-gray-500 text-center px-2">
                  Your information is secure and will never be shared. 
                  By submitting, you agree to our{' '}
                  <a href="/privacy" className="text-cyan-700 hover:underline">
                    Privacy Policy
                  </a>.
                </p>
              </form>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
};