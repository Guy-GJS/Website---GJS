import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { MessageCircle, ArrowRight, CheckCircle, Clock, Shield, TrendingUp } from "lucide-react";

export const ContactSection = () => {
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

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const form = e.currentTarget;
    const fd = new FormData(form);
    const firstName = (fd.get('firstName') as string) || '';
    const lastName = (fd.get('lastName') as string) || '';
    const email = (fd.get('email') as string) || '';
    const address = (fd.get('address') as string) || '';
    
    console.log('Contact form - FormData values:', { firstName, lastName, email, address });
    console.log('Contact form - React state:', formData);
    
    if (!firstName.trim() || !lastName.trim() || !email.trim() || !address.trim()) {
      console.error('Contact form - Validation failed using FormData values');
      setSubmitStatus('error');
      setTimeout(() => setSubmitStatus('idle'), 5000);
      return;
    }
    
    const submissionData = {
      firstName: firstName.trim(),
      lastName: lastName.trim(),
      email: email.trim(),
      address: address.trim(),
      propertyType: formData.propertyType || '',
      timeline: formData.timeline || ''
    };
    
    setIsSubmitting(true);

    try {
      // Prefer same-origin proxy to avoid CORS; allow override via env only in dev
      const url = (!import.meta.env.PROD && import.meta.env.VITE_API_BASE_URL)
        ? `${import.meta.env.VITE_API_BASE_URL}/api/leads`
        : '/api/form-submit';
      
      console.log('Environment check:', {
        VITE_API_BASE_URL: import.meta.env.VITE_API_BASE_URL,
        PROD: import.meta.env.PROD,
        url
      });
      console.log('Submitting lead to:', url);
      console.log('Submission data:', submissionData);
      
      const res = await fetch(url, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(submissionData),
        mode: 'cors',
      });

      console.log('Response status:', res.status, res.statusText);
      console.log('Response headers:', Object.fromEntries(res.headers.entries()));

      if (!res.ok) {
        const errorData = await res.json().catch(() => ({}));
        console.error('API error response:', errorData);
        throw new Error(errorData.message || `Failed to submit (HTTP ${res.status})`);
      }

      const result = await res.json();
      console.log('Lead submitted successfully:', result);

      // Reset form on success
      setFormData({ firstName: '', lastName: '', email: '', address: '', propertyType: '', timeline: '' });
      setSubmitStatus('success');
      // Reset success status after 3 seconds
      setTimeout(() => setSubmitStatus('idle'), 3000);
    } catch (err) {
      console.error('Submission failed with error:', err);
      console.error('Error details:', err instanceof Error ? err.message : String(err));
      setSubmitStatus('error');
      // Reset error status after 5 seconds
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

  const handleSelectChange = (id: string, value: string) => {
    console.log('Select change:', { id, value, currentFormData: formData });
    setFormData({
      ...formData,
      [id]: value
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
                      name="firstName"
                      placeholder="First Name" 
                      className="h-11 border-gray-200 focus:border-primary focus:ring-primary/20 transition-all duration-300 rounded-xl"
                      value={formData.firstName}
                      onChange={handleInputChange}
                    />
                  </div>
                  <div className="space-y-1">
                    <Label htmlFor="lastName" className="sr-only">Last Name</Label>
                    <Input 
                      id="lastName" 
                      name="lastName"
                      placeholder="Last Name" 
                      className="h-11 border-gray-200 focus:border-primary focus:ring-primary/20 transition-all duration-300 rounded-xl"
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
                    name="email"
                    type="email" 
                    placeholder="Email Address" 
                    className="h-11 border-gray-200 focus:border-primary focus:ring-primary/20 transition-all duration-300 rounded-xl"
                    value={formData.email}
                    onChange={handleInputChange}
                  />
                </div>
                
                {/* Property Address */}
                <div className="space-y-1">
                  <Label htmlFor="address" className="sr-only">Property Address</Label>
                  <Input 
                    id="address" 
                    name="address"
                    placeholder="Property Address" 
                    className="h-11 border-gray-200 focus:border-primary focus:ring-primary/20 transition-all duration-300 rounded-xl"
                    value={formData.address}
                    onChange={handleInputChange}
                  />
                </div>
                
                {/* Property Type */}
                <div className="space-y-1">
                  <Label htmlFor="propertyType" className="sr-only">Property Type</Label>
                  <Select onValueChange={(value) => handleSelectChange('propertyType', value)} value={formData.propertyType}>
                    <SelectTrigger className="h-11 border-gray-200 focus:border-primary focus:ring-primary/20 transition-all duration-300 rounded-xl">
                      <SelectValue placeholder="Property Type" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="" disabled>Select Property Type</SelectItem>
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
                  <Select onValueChange={(value) => handleSelectChange('timeline', value)} value={formData.timeline}>
                    <SelectTrigger className="h-11 border-gray-200 focus:border-primary focus:ring-primary/20 transition-all duration-300 rounded-xl">
                      <SelectValue placeholder="How soon do you need to sell?" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="" disabled>Select Timeline</SelectItem>
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
    </section>
  );
};