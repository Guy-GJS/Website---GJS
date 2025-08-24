import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Card, CardContent } from "@/components/ui/card";
import { ArrowRight, CheckCircle, Clock, DollarSign, Sparkles, TrendingUp, Shield, Zap } from "lucide-react";

export const HeroSection = () => {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<'idle' | 'success' | 'error'>('idle');
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
    console.log('Hero form submission started with data:', formData);
    
    // Validate required fields before submission
    if (!formData.firstName || !formData.lastName || !formData.email || !formData.address) {
      console.error('Hero form - Missing required fields:', {
        firstName: !formData.firstName,
        lastName: !formData.lastName,
        email: !formData.email,
        address: !formData.address
      });
      setSubmitStatus('error');
      setTimeout(() => setSubmitStatus('idle'), 5000);
      return;
    }
    
    setIsSubmitting(true);

    try {
      // Use environment variable or fallback to production backend
      const apiBase = import.meta.env.VITE_API_BASE_URL || 'https://platform-lovat-ten.vercel.app';
      const url = `${apiBase}/api/leads`;
      
      console.log('Hero form - Environment check:', {
        VITE_API_BASE_URL: import.meta.env.VITE_API_BASE_URL,
        apiBase,
        url
      });
      console.log('Hero form - Submitting lead to:', url);
      console.log('Hero form - Form data:', formData);
      
      const res = await fetch(url, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(formData),
        mode: 'cors',
      });

      console.log('Hero form - Response status:', res.status, res.statusText);
      console.log('Hero form - Response headers:', Object.fromEntries(res.headers.entries()));

      if (!res.ok) {
        const errorData = await res.json().catch(() => ({}));
        console.error('Hero form - API error response:', errorData);
        throw new Error(errorData.message || `Failed to submit (HTTP ${res.status})`);
      }

      const result = await res.json();
      console.log('Hero form - Lead submitted successfully:', result);

      // Reset form on success
      setFormData({ firstName: '', lastName: '', email: '', address: '', propertyType: '', timeline: '' });
      setSubmitStatus('success');
      setTimeout(() => setSubmitStatus('idle'), 3000);
      console.log("Hero form - Form submitted successfully to API");
    } catch (err) {
      console.error('Hero form - Submission failed with error:', err);
      console.error('Hero form - Error details:', err instanceof Error ? err.message : String(err));
      setSubmitStatus('error');
      setTimeout(() => setSubmitStatus('idle'), 5000);
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFormData({
      ...formData,
      [e.target.id]: e.target.value
    });
  };

  return (
    <section id="cta" className="relative min-h-screen flex items-center overflow-hidden bg-gradient-to-br from-slate-50 via-white to-primary/5">
      {/* Modern mesh gradient background */}
      <div className="absolute inset-0">
        <div className="absolute inset-0 bg-[radial-gradient(at_40%_20%,hsla(201,96%,32%,0.1)_0px,transparent_50%),radial-gradient(at_80%_0%,hsla(186,100%,42%,0.1)_0px,transparent_50%),radial-gradient(at_0%_50%,hsla(199,89%,48%,0.1)_0px,transparent_50%)]"></div>
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#8080800a_1px,transparent_1px),linear-gradient(to_bottom,#8080800a_1px,transparent_1px)] bg-[size:14px_24px]"></div>
      </div>

      {/* Floating elements */}
      <div className="absolute top-20 left-10 w-72 h-72 bg-primary/10 rounded-full blur-3xl animate-pulse"></div>
      <div className="absolute bottom-20 right-10 w-96 h-96 bg-accent/10 rounded-full blur-3xl animate-pulse animation-delay-2000"></div>
      
      {/* Content */}
      <div className="relative z-10 px-4 py-20 sm:px-6 md:py-24 lg:py-28 w-full">
        <div className="max-w-7xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
            
            {/* Left Column - Content */}
            <div className="space-y-8 animate-fade-in">
              {/* Main Headline */}
              <div className="space-y-4">
                <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold tracking-tight">
                  <span className="text-gradient">Sell Your Home</span>
                  <br />
                  <span className="text-gray-900">For Cash, Fast</span>
                </h1>
                
                <p className="text-lg sm:text-xl text-muted-foreground max-w-xl leading-relaxed">
                  Get a fair cash offer within 24 hours. No fees, no repairs, no hassle. We make selling your home simple and stress-free.
                </p>
              </div>

              {/* Benefits Grid */}
              <div className="grid grid-cols-2 gap-4 max-w-lg animate-fade-in animation-delay-400">
                <div className="group relative overflow-hidden bg-white/80 backdrop-blur-sm p-5 rounded-2xl border border-gray-100 hover:border-primary/20 transition-all duration-300 hover:shadow-lg hover:-translate-y-1">
                  <div className="absolute inset-0 bg-gradient-to-br from-primary/0 to-primary/5 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                  <div className="relative space-y-2">
                    <div className="w-10 h-10 bg-gradient-to-br from-primary to-primary/80 rounded-xl flex items-center justify-center shadow-lg group-hover:scale-110 transition-transform duration-300">
                      <DollarSign className="w-5 h-5 text-white" />
                    </div>
                    <div>
                      <p className="font-bold text-gray-900">Fair Cash Offer</p>
                      <p className="text-sm text-muted-foreground">Market-based pricing</p>
                    </div>
                  </div>
                </div>

                <div className="group relative overflow-hidden bg-white/80 backdrop-blur-sm p-5 rounded-2xl border border-gray-100 hover:border-accent/20 transition-all duration-300 hover:shadow-lg hover:-translate-y-1">
                  <div className="absolute inset-0 bg-gradient-to-br from-accent/0 to-accent/5 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                  <div className="relative space-y-2">
                    <div className="w-10 h-10 bg-gradient-to-br from-accent to-accent/80 rounded-xl flex items-center justify-center shadow-lg group-hover:scale-110 transition-transform duration-300">
                      <Zap className="w-5 h-5 text-white" />
                    </div>
                    <div>
                      <p className="font-bold text-gray-900">Quick Close</p>
                      <p className="text-sm text-muted-foreground">7-30 days timeline</p>
                    </div>
                  </div>
                </div>

                <div className="group relative overflow-hidden bg-white/80 backdrop-blur-sm p-5 rounded-2xl border border-gray-100 hover:border-success/20 transition-all duration-300 hover:shadow-lg hover:-translate-y-1">
                  <div className="absolute inset-0 bg-gradient-to-br from-success/0 to-success/5 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                  <div className="relative space-y-2">
                    <div className="w-10 h-10 bg-gradient-to-br from-success to-success/80 rounded-xl flex items-center justify-center shadow-lg group-hover:scale-110 transition-transform duration-300">
                      <Shield className="w-5 h-5 text-white" />
                    </div>
                    <div>
                      <p className="font-bold text-gray-900">No Fees</p>
                      <p className="text-sm text-muted-foreground">Save on commissions</p>
                    </div>
                  </div>
                </div>

                <div className="group relative overflow-hidden bg-white/80 backdrop-blur-sm p-5 rounded-2xl border border-gray-100 hover:border-trust/20 transition-all duration-300 hover:shadow-lg hover:-translate-y-1">
                  <div className="absolute inset-0 bg-gradient-to-br from-trust/0 to-trust/5 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                  <div className="relative space-y-2">
                    <div className="w-10 h-10 bg-gradient-to-br from-trust to-trust/80 rounded-xl flex items-center justify-center shadow-lg group-hover:scale-110 transition-transform duration-300">
                      <CheckCircle className="w-5 h-5 text-white" />
                    </div>
                    <div>
                      <p className="font-bold text-gray-900">As-Is Sale</p>
                      <p className="text-sm text-muted-foreground">No repairs needed</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            
            {/* Right Column - Form */}
            <div className="w-full max-w-md mx-auto lg:ml-auto animate-fade-in animation-delay-200">
              <Card className="border-0 shadow-2xl bg-white/95 backdrop-blur-md overflow-hidden">
                {/* Form Header */}
                <div className="bg-gradient-to-r from-primary via-primary to-accent p-6 sm:p-8 relative overflow-hidden">
                  <div className="absolute inset-0 bg-[linear-gradient(45deg,transparent_30%,rgba(255,255,255,0.1)_50%,transparent_70%)] animate-shimmer"></div>
                  <div className="relative">
                    <h2 className="text-2xl sm:text-3xl font-bold text-white">
                      Get Your Cash Offer
                    </h2>
                    <p className="text-white/90 mt-2 whitespace-nowrap">
                      Free • No Obligation • 24hr Response
                    </p>
                    <div className="flex items-center gap-2 mt-4">
                      <TrendingUp className="w-5 h-5 text-white/80" />
                      <span className="text-sm text-white/80">Instant property valuation</span>
                    </div>
                  </div>
                </div>
                
                <CardContent className="p-6 sm:p-8">
                  <form onSubmit={handleSubmit} className="space-y-4">
                    {/* Name Fields */}
                    <div className="grid grid-cols-2 gap-3">
                      <div className="space-y-1">
                        <Label htmlFor="firstName" className="sr-only">First Name</Label>
                        <Input 
                          id="firstName" 
                          placeholder="First Name" 
                          required 
                          className="h-11 border-gray-200 focus:border-primary focus:ring-primary/20 transition-all duration-300 rounded-xl placeholder-consistent"
                          value={formData.firstName}
                          onChange={handleInputChange}
                        />
                      </div>
                      <div className="space-y-1">
                        <Label htmlFor="lastName" className="sr-only">Last Name</Label>
                        <Input 
                          id="lastName" 
                          placeholder="Last Name" 
                          required 
                          className="h-11 border-gray-200 focus:border-primary focus:ring-primary/20 transition-all duration-300 rounded-xl placeholder-consistent"
                          value={formData.lastName}
                          onChange={handleInputChange}
                        />
                      </div>
                    </div>
                    
                    {/* Email */}
                    <div className="space-y-1">
                      <Label htmlFor="email" className="sr-only">Email</Label>
                      <Input 
                        id="email" 
                        type="email" 
                        placeholder="Email Address" 
                        required 
                        className="h-11 border-gray-200 focus:border-primary focus:ring-primary/20 transition-all duration-300 rounded-xl placeholder-consistent"
                        value={formData.email}
                        onChange={handleInputChange}
                      />
                    </div>
                    
                    {/* Property Address */}
                    <div className="space-y-1">
                      <Label htmlFor="address" className="sr-only">Property Address</Label>
                      <Input 
                        id="address" 
                        placeholder="Property Address" 
                        required 
                        className="h-11 border-gray-200 focus:border-primary focus:ring-primary/20 transition-all duration-300 rounded-xl placeholder-consistent"
                        value={formData.address}
                        onChange={handleInputChange}
                      />
                    </div>
                    
                    {/* Property Type */}
                    <div className="space-y-1">
                      <Label htmlFor="propertyType" className="sr-only">Property Type</Label>
                      <Select onValueChange={(value) => setFormData({...formData, propertyType: value})}>
                        <SelectTrigger className="h-11 border-gray-200 focus:border-primary focus:ring-primary/20 transition-all duration-300 rounded-xl">
                          <SelectValue placeholder="Property Type" className="placeholder-consistent" />
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
                    <div className="space-y-1">
                      <Label htmlFor="timeline" className="sr-only">Selling Timeline</Label>
                      <Select onValueChange={(value) => setFormData({...formData, timeline: value})}>
                        <SelectTrigger className="h-11 border-gray-200 focus:border-primary focus:ring-primary/20 transition-all duration-300 rounded-xl">
                          <SelectValue placeholder="How soon do you need to sell?" className="placeholder-consistent" />
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
                    
                    {/* Submit Button */}
                    <Button 
                      type="submit" 
                      size="lg" 
                      className="w-full h-12 text-base font-semibold bg-gradient-to-r from-primary to-accent hover:from-primary hover:to-accent text-white shadow-lg hover:shadow-glow transition-all duration-300 rounded-xl group"
                      disabled={isSubmitting}
                    >
                      {isSubmitting ? (
                        <span className="flex items-center justify-center gap-2">
                          <span className="w-4 h-4 border-2 border-white/30 border-t-white rounded-full animate-spin"></span>
                          Processing...
                        </span>
                      ) : submitStatus === 'success' ? (
                        <span className="flex items-center justify-center gap-2">
                          <CheckCircle className="w-4 h-4" />
                          Submitted Successfully!
                        </span>
                      ) : submitStatus === 'error' ? (
                        <span className="flex items-center justify-center gap-2">
                          Please Fill All Fields
                          <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform duration-300" />
                        </span>
                      ) : (
                        <span className="flex items-center justify-center gap-2">
                          Get My Cash Offer
                          <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform duration-300" />
                        </span>
                      )}
                    </Button>

                    {/* Trust Badges */}
                    <div className="flex items-center justify-center gap-4 pt-4 border-t border-gray-100">
                      <div className="flex items-center gap-1.5 text-sm text-muted-foreground">
                        <CheckCircle className="w-4 h-4 text-success" />
                        <span>No fees</span>
                      </div>
                      <div className="flex items-center gap-1.5 text-sm text-muted-foreground">
                        <Clock className="w-4 h-4 text-trust" />
                        <span>24hr reply</span>
                      </div>
                      <div className="flex items-center gap-1.5 text-sm text-muted-foreground">
                        <Shield className="w-4 h-4 text-primary" />
                        <span>Secure</span>
                      </div>
                    </div>
                    
                    {/* Privacy Notice */}
                    <p className="text-xs text-center text-muted-foreground px-2">
                      Your information is secure and will never be shared.
                      By submitting, you agree to our{' '}
                      <a href="/privacy" className="text-primary hover:underline">
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

        @keyframes shimmer {
          0% {
            transform: translateX(-100%);
          }
          100% {
            transform: translateX(100%);
          }
        }

        .animate-fade-in {
          animation: fade-in 0.8s ease-out forwards;
        }

        .animation-delay-200 {
          animation-delay: 200ms;
        }

        .animation-delay-400 {
          animation-delay: 400ms;
        }

        .animation-delay-600 {
          animation-delay: 600ms;
        }

        .animation-delay-2000 {
          animation-delay: 2s;
        }

        .animate-shimmer {
          animation: shimmer 3s ease-out infinite;
        }
      `}</style>
    </section>
  );
};