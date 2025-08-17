import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Card, CardContent } from "@/components/ui/card";
import { ArrowRight, CheckCircle, Clock, DollarSign, Shield, Star } from "lucide-react";

export const HeroSection = () => {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    phone: "",
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
    <section className="relative min-h-screen bg-gradient-to-br from-gray-50 to-cyan-50/30 overflow-hidden">
      {/* Subtle Background Pattern */}
      <div className="absolute inset-0">
        {/* Grid Pattern Overlay */}
        <div className="absolute inset-0 bg-grid-pattern opacity-[0.01]"></div>
      </div>
      
      {/* Mobile-First Content Container */}
      <div className="relative z-10 px-4 py-8 sm:px-6 md:py-12 lg:py-20">
        <div className="max-w-7xl mx-auto">
          {/* Mobile-First Grid - Stacked on mobile, side-by-side on desktop */}
          <div className="flex flex-col lg:grid lg:grid-cols-2 gap-8 lg:gap-12 xl:gap-16 lg:items-center">
            
            {/* Left Column - Content (Shows first on mobile) */}
            <div className="space-y-6 md:space-y-8">


              {/* Main Headline - Mobile First Typography */}
              <div className="space-y-4 text-center lg:text-left">
                <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-bold tracking-tight text-gray-900 animate-fade-in">
                  Sell Your Home
                  <span className="block text-gray-900 mt-1 md:mt-2">In 30 Days or Less</span>
                </h1>
                
                <p className="text-base sm:text-lg md:text-xl lg:text-2xl text-gray-600 max-w-md mx-auto lg:mx-0 lg:max-w-2xl animate-fade-in delay-200">
                  Get a guaranteed cash offer within 24 hours. No repairs, no showings, no hassles.
                </p>
              </div>

              {/* Mobile-First Benefits Grid - 2x2 on mobile, stays 2x2 */}
              <div className="grid grid-cols-2 gap-3 sm:gap-4 max-w-md mx-auto lg:mx-0 lg:max-w-lg animate-fade-in delay-400">
                <div className="bg-white p-3 sm:p-4 rounded-lg sm:rounded-xl shadow-sm border border-gray-200 hover:shadow-md transition-all duration-300">
                  <div className="flex flex-col items-center lg:items-start space-y-2">
                    <div className="w-8 h-8 sm:w-10 sm:h-10 bg-gray-100 rounded-lg flex items-center justify-center">
                      <DollarSign className="w-4 h-4 sm:w-5 sm:h-5 text-gray-700" />
                    </div>
                    <div className="text-center lg:text-left">
                      <p className="text-sm sm:text-base font-semibold text-gray-900">Fair Cash</p>
                      <p className="text-xs sm:text-sm text-gray-500">No hidden fees</p>
                    </div>
                  </div>
                </div>

                <div className="bg-white p-3 sm:p-4 rounded-lg sm:rounded-xl shadow-sm border border-gray-200 hover:shadow-md transition-all duration-300">
                  <div className="flex flex-col items-center lg:items-start space-y-2">
                    <div className="w-8 h-8 sm:w-10 sm:h-10 bg-gray-100 rounded-lg flex items-center justify-center">
                      <Clock className="w-4 h-4 sm:w-5 sm:h-5 text-gray-700" />
                    </div>
                    <div className="text-center lg:text-left">
                      <p className="text-sm sm:text-base font-semibold text-gray-900">Fast Close</p>
                      <p className="text-xs sm:text-sm text-gray-500">30 days max</p>
                    </div>
                  </div>
                </div>

                <div className="bg-white p-3 sm:p-4 rounded-lg sm:rounded-xl shadow-sm border border-gray-200 hover:shadow-md transition-all duration-300">
                  <div className="flex flex-col items-center lg:items-start space-y-2">
                    <div className="w-8 h-8 sm:w-10 sm:h-10 bg-gray-100 rounded-lg flex items-center justify-center">
                      <CheckCircle className="w-4 h-4 sm:w-5 sm:h-5 text-gray-700" />
                    </div>
                    <div className="text-center lg:text-left">
                      <p className="text-sm sm:text-base font-semibold text-gray-900">No Repairs</p>
                      <p className="text-xs sm:text-sm text-gray-500">Sell as-is</p>
                    </div>
                  </div>
                </div>

                <div className="bg-white p-3 sm:p-4 rounded-lg sm:rounded-xl shadow-sm border border-gray-200 hover:shadow-md transition-all duration-300">
                  <div className="flex flex-col items-center lg:items-start space-y-2">
                    <div className="w-8 h-8 sm:w-10 sm:h-10 bg-gray-100 rounded-lg flex items-center justify-center">
                      <Shield className="w-4 h-4 sm:w-5 sm:h-5 text-gray-700" />
                    </div>
                    <div className="text-center lg:text-left">
                      <p className="text-sm sm:text-base font-semibold text-gray-900">Save 6%</p>
                      <p className="text-xs sm:text-sm text-gray-500">No agents</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            
            {/* Right Column - Form (Shows second on mobile) */}
            <div className="w-full max-w-md mx-auto lg:ml-auto animate-fade-in delay-200">
              <Card className="border-0 shadow-xl bg-white">
                {/* Form Header */}
                <div className="bg-gradient-to-r from-cyan-600 to-cyan-700 p-4 sm:p-6 rounded-t-xl">
                  <h2 className="text-xl sm:text-2xl font-bold text-white text-center">
                    Get Your Free Cash Offer
                  </h2>
                  <p className="text-sm sm:text-base text-cyan-100 text-center mt-1 sm:mt-2">
                    No obligation • 24-hour response
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
                    
                    {/* Phone */}
                    <div>
                      <Label htmlFor="phone" className="sr-only">Phone</Label>
                      <Input 
                        id="phone" 
                        type="tel" 
                        placeholder="Phone Number*" 
                        required 
                        className="h-10 sm:h-12 text-sm sm:text-base border-gray-200 focus:border-primary"
                        value={formData.phone}
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
        </div>
      </div>

      {/* Add custom animation styles */}
      <style jsx>{`
        @keyframes fade-in {
          from {
            opacity: 0;
            transform: translateY(20px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }

        @keyframes blob {
          0% {
            transform: translate(0px, 0px) scale(1);
          }
          33% {
            transform: translate(30px, -50px) scale(1.1);
          }
          66% {
            transform: translate(-20px, 20px) scale(0.9);
          }
          100% {
            transform: translate(0px, 0px) scale(1);
          }
        }

        @keyframes pulse-slow {
          0%, 100% {
            opacity: 1;
          }
          50% {
            opacity: 0.9;
          }
        }

        .animate-blob {
          animation: blob 10s infinite;
        }

        .animation-delay-2000 {
          animation-delay: 2s;
        }

        .animation-delay-4000 {
          animation-delay: 4s;
        }

        .animation-delay-6000 {
          animation-delay: 6s;
        }

        .animate-fade-in {
          animation: fade-in 0.8s ease-out forwards;
        }

        .delay-200 {
          animation-delay: 200ms;
        }

        .delay-400 {
          animation-delay: 400ms;
        }

        .delay-600 {
          animation-delay: 600ms;
        }

        .animate-pulse-slow {
          animation: pulse-slow 3s ease-in-out infinite;
        }

        .bg-grid-pattern {
          background-image: 
            linear-gradient(rgba(0, 0, 0, 0.03) 1px, transparent 1px),
            linear-gradient(90deg, rgba(0, 0, 0, 0.03) 1px, transparent 1px);
          background-size: 50px 50px;
        }
      `}</style>
    </section>
  );
};