import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { Phone, Mail, MapPin, Clock, MessageCircle, Send } from "lucide-react";

export const ContactSection = () => {
  const contactInfo = [
    {
      icon: Phone,
      title: "Phone",
      content: "(555) 123-FAIR",
      description: "Call us anytime for immediate assistance",
      color: "from-emerald-600 to-emerald-700",
      action: "tel:(555)123-FAIR"
    },
    {
      icon: Mail,
      title: "Email",
      content: "offers@fairpropertygroup.com",
      description: "Send us your questions and we'll respond quickly",
      color: "from-blue-600 to-blue-700",
      action: "mailto:offers@fairpropertygroup.com"
    },
    {
      icon: MapPin,
      title: "Service Area",
      content: "Nationwide Coverage",
      description: "We buy houses in all major metropolitan areas",
      color: "from-violet-600 to-violet-700"
    },
    {
      icon: Clock,
      title: "Hours",
      content: "24/7 Available",
      description: "We're here when you need us most",
      color: "from-violet-600 to-violet-700"
    }
  ];

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
            Ready to sell your house? Have questions? We're here to help every step of the way.
            <span className="block mt-2 text-cyan-700 font-semibold">Get your free consultation today!</span>
          </p>
        </div>

        <div className="grid gap-8 lg:grid-cols-2 lg:gap-16">
          {/* Enhanced Contact Information */}
          <div className="space-y-8">
            <div>
              <h3 className="text-2xl font-semibold mb-6 text-center lg:text-left">Get in Touch</h3>
              <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-1">
                {contactInfo.map((item, index) => (
                  <Card key={index} className="group hover:shadow-lg transition-all duration-300 border border-gray-200 hover:border-gray-300 bg-white">
                    <CardContent className="p-6">
                      <div className="flex items-start space-x-4">
                        <div className={`flex items-center justify-center w-12 h-12 bg-gradient-to-br ${item.color} rounded-xl text-white shadow-lg group-hover:scale-110 transition-transform duration-300`}>
                          <item.icon className="w-6 h-6" />
                        </div>
                        <div className="flex-1">
                          <h4 className="font-semibold text-sm text-muted-foreground uppercase tracking-wider mb-1">
                            {item.title}
                          </h4>
                          <p className="font-bold text-lg text-gray-900 mb-1">
                            {item.content}
                          </p>
                          <p className="text-sm text-muted-foreground">{item.description}</p>
                          {item.action && (
                            <Button 
                              variant="ghost" 
                              size="sm" 
                              className="mt-2 p-0 h-auto text-cyan-700 hover:text-cyan-900"
                              onClick={() => window.open(item.action, "_self")}
                            >
                              Contact Now →
                            </Button>
                          )}
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </div>


          </div>

          {/* Enhanced Contact Form */}
          <Card className="bg-white border border-gray-200 shadow-lg">
            <div className="bg-gradient-to-r from-cyan-600 to-cyan-700 p-6 rounded-t-xl">
              <h3 className="text-2xl font-bold text-white text-center">Send us a Message</h3>
              <p className="text-cyan-100 text-center mt-2">Get a response within 2 hours</p>
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
                  Send Message & Get Free Consultation
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