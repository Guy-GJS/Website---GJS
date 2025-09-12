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

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    console.log('Form submission started with data:', formData);
    setIsSubmitting(true);
    setSubmitStatus('idle'); // Reset any previous status

    try {
      // Determine API base URL based on environment
      let apiBase = '';
      
      // Check if we have an environment variable set
      if (import.meta.env.VITE_API_BASE_URL) {
        apiBase = import.meta.env.VITE_API_BASE_URL;
      } else if (import.meta.env.PROD) {
        // In production, use the production API
        apiBase = 'https://platform-lovat-ten.vercel.app';
      } else {
        // In development, use localhost:3000
        apiBase = 'http://localhost:3000';
      }
      
      const url = `${apiBase}/api/leads`;
      
      console.log('Environment check:', {
        VITE_API_BASE_URL: import.meta.env.VITE_API_BASE_URL,
        isProd: import.meta.env.PROD,
        apiBase,
        url
      });
      console.log('Submitting lead to:', url);
      console.log('Form data:', formData);
      
      const res = await fetch(url, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'Accept': 'application/json'
        },
        body: JSON.stringify(formData),
        mode: 'cors',
        credentials: 'omit' // Don't send cookies for CORS requests
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

      // Check if the submission was truly successful
      console.log('Checking submission result:', result);
      if (result.success) {
        console.log('✅ Form submission successful! Setting success state...');
        // Reset form on success
        setFormData({ firstName: '', lastName: '', email: '', address: '', propertyType: '', timeline: '' });
        setSubmitStatus('success');
        console.log('✅ Success state set, confirmation message should now be visible');
        // Reset success status after 5 seconds
        setTimeout(() => {
          console.log('⏰ Resetting success status back to idle');
          setSubmitStatus('idle');
        }, 5000);
      } else {
        console.error('❌ Submission result indicates failure:', result);
        throw new Error(result.message || 'Submission failed');
      }
    } catch (err) {
      console.error('Submission failed with error:', err);
      console.error('Error details:', err instanceof Error ? err.message : String(err));
      
      // Show user-friendly error message
      if (err instanceof TypeError && err.message.includes('Failed to fetch')) {
        console.error('Network error: Unable to reach the server. Please check if the backend is running.');
        alert('Unable to submit form. Please check your connection and try again.');
      } else {
        console.error('Error submitting form:', err);
      }
      
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
                      placeholder="First Name" 
                      required 
                      className="h-11 border-gray-200 focus:border-primary focus:ring-primary/20 transition-all duration-300 rounded-xl"
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
                    type="email" 
                    placeholder="Email Address" 
                    required 
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
                    placeholder="Property Address" 
                    required 
                    className="h-11 border-gray-200 focus:border-primary focus:ring-primary/20 transition-all duration-300 rounded-xl"
                    value={formData.address}
                    onChange={handleInputChange}
                  />
                </div>
                
                {/* Property Type */}
                <div className="space-y-1">
                  <Label htmlFor="propertyType" className="sr-only">Property Type</Label>
                  <Select onValueChange={(value) => handleSelectChange('propertyType', value)} value={formData.propertyType} required>
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
                  <Select onValueChange={(value) => handleSelectChange('timeline', value)} value={formData.timeline} required>
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
                      Try Again
                      <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform duration-300" />
                    </span>
                  ) : (
                    <span className="flex items-center justify-center gap-2">
                      Get My Cash Offer
                      <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform duration-300" />
                    </span>
                  )}
                </Button>

                {/* Success/Error Message */}
                {submitStatus === 'success' && (
                  <div className="mt-4 p-4 bg-green-50 border border-green-200 rounded-xl animate-in fade-in slide-in-from-top-2 duration-300">
                    <div className="flex items-center gap-3">
                      <div className="flex-shrink-0">
                        <CheckCircle className="w-6 h-6 text-green-600" />
                      </div>
                      <div className="flex-1">
                        <h3 className="text-sm font-semibold text-green-800">
                          Thank you for your submission!
                        </h3>
                        <p className="text-sm text-green-700 mt-1">
                          We've received your information and will get back to you within 24 hours with a fair cash offer for your property.
                        </p>
                      </div>
                    </div>
                  </div>
                )}
                
                {/* Debug info - remove this after testing */}
                {process.env.NODE_ENV === 'development' && (
                  <div className="mt-2 p-2 bg-gray-100 text-xs text-gray-600 rounded">
                    Debug: submitStatus = "{submitStatus}", isSubmitting = {isSubmitting ? 'true' : 'false'}
                  </div>
                )}

                {submitStatus === 'error' && (
                  <div className="mt-4 p-4 bg-red-50 border border-red-200 rounded-xl">
                    <div className="flex items-center gap-3">
                      <div className="flex-shrink-0">
                        <svg className="w-6 h-6 text-red-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4m0 4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                        </svg>
                      </div>
                      <div className="flex-1">
                        <h3 className="text-sm font-semibold text-red-800">
                          Submission Failed
                        </h3>
                        <p className="text-sm text-red-700 mt-1">
                          There was an error submitting your information. Please try again or contact us directly.
                        </p>
                      </div>
                    </div>
                  </div>
                )}

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