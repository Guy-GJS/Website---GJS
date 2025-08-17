import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { MessageCircle, Send } from "lucide-react";

export const ContactSection = () => {
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle form submission here
    console.log("Contact form submitted");
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

        <div className="max-w-2xl mx-auto">
          {/* Enhanced Contact Form */}
          <Card className="bg-white border border-gray-200 shadow-lg">
            <div className="bg-gradient-to-r from-cyan-600 to-cyan-700 p-6 rounded-t-xl">
              <h3 className="text-2xl font-bold text-white text-center">Get Your Offer</h3>
              <p className="text-cyan-100 text-center mt-2">Quick response guaranteed</p>
            </div>
            <CardContent className="p-6 sm:p-8">
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid gap-4 sm:grid-cols-2">
                  <div>
                    <Label htmlFor="firstName" className="text-sm font-semibold text-foreground">First Name *</Label>
                    <Input 
                      id="firstName" 
                      name="firstName" 
                      required 
                      className="mt-1 h-12 border border-gray-300 focus:border-gray-500 transition-colors"
                    />
                  </div>
                  <div>
                    <Label htmlFor="lastName" className="text-sm font-semibold text-foreground">Last Name *</Label>
                    <Input 
                      id="lastName" 
                      name="lastName" 
                      required 
                      className="mt-1 h-12 border border-gray-300 focus:border-gray-500 transition-colors"
                    />
                  </div>
                </div>
                <div>
                  <Label htmlFor="email" className="text-sm font-semibold text-foreground">Email Address *</Label>
                  <Input 
                    id="email" 
                    name="email" 
                    type="email" 
                    required 
                    className="mt-1 h-12 border-2 border-border focus:border-primary transition-colors"
                  />
                </div>
                <div>
                  <Label htmlFor="phone" className="text-sm font-semibold text-foreground">Phone Number</Label>
                  <Input 
                    id="phone" 
                    name="phone" 
                    type="tel" 
                    className="mt-1 h-12 border-2 border-border focus:border-primary transition-colors"
                  />
                </div>
                <div>
                  <Label htmlFor="propertyAddress" className="text-sm font-semibold text-foreground">Property Address</Label>
                  <Input 
                    id="propertyAddress" 
                    name="propertyAddress" 
                    placeholder="123 Main St, City, State 12345"
                    className="mt-1 h-12 border-2 border-border focus:border-primary transition-colors"
                  />
                </div>
                <div>
                  <Label htmlFor="message" className="text-sm font-semibold text-foreground">Tell us about your situation *</Label>
                  <Textarea 
                    id="message" 
                    name="message" 
                    rows={4} 
                    placeholder="Tell us about your property, timeline, or any questions you have..."
                    required 
                    className="mt-1 border border-gray-300 focus:border-gray-500 transition-colors resize-none"
                  />
                </div>
                
                {/* Trust Indicators */}
                <div className="flex items-center justify-center gap-6 py-4 border-t border-border/50">
                  <div className="flex items-center gap-2 text-sm text-gray-600">
                    <div className="w-2 h-2 bg-emerald-500 rounded-full"></div>
                    <span>Secure & Private</span>
                  </div>
                  <div className="flex items-center gap-2 text-sm text-gray-600">
                    <div className="w-2 h-2 bg-blue-500 rounded-full"></div>
                    <span>No Spam</span>
                  </div>
                  <div className="flex items-center gap-2 text-sm text-gray-600">
                    <div className="w-2 h-2 bg-violet-500 rounded-full"></div>
                    <span>Quick Response</span>
                  </div>
                </div>
                
                <Button 
                  type="submit" 
                  className="w-full h-14 text-lg font-semibold bg-gradient-to-r from-cyan-600 to-cyan-700 hover:from-cyan-700 hover:to-cyan-800 text-white shadow-md hover:shadow-lg transition-all duration-300"
                >
                  <Send className="w-5 h-5 mr-2" />
                  Send message & Get an offer
                </Button>
                
                <p className="text-xs text-center text-muted-foreground">
                  By submitting this form, you agree to our{' '}
                  <a href="/privacy" className="text-gray-700 hover:underline">Privacy Policy</a>{' '}
                  and consent to be contacted about your property.
                </p>
              </form>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
};