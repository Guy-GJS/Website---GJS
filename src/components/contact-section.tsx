import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { MessageCircle, ArrowRight, CheckCircle, Clock, Shield, TrendingUp, Sparkles, Star } from "lucide-react";

export const ContactSection = () => {

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

        {/* Contact CTA Card */}
        <div className="max-w-4xl mx-auto">
          <Card className="border-0 shadow-2xl bg-white/95 backdrop-blur-md overflow-hidden">
            <CardContent className="p-8 sm:p-12 text-center space-y-8">
              {/* Icon and Title */}
              <div className="space-y-6">
                <div className="relative inline-flex items-center justify-center">
                  <div className="absolute inset-0 bg-gradient-to-br from-primary/30 to-accent/30 blur-xl"></div>
                  <div className="relative w-20 h-20 bg-gradient-to-br from-primary to-accent rounded-full flex items-center justify-center shadow-lg">
                    <Sparkles className="w-10 h-10 text-white" />
                  </div>
                </div>
                
                <div className="space-y-4">
                  <h3 className="text-3xl sm:text-4xl font-bold text-gray-900">
                    Ready to Get Started?
                  </h3>
                  <p className="text-lg sm:text-xl text-muted-foreground max-w-2xl mx-auto leading-relaxed">
                    Get your fair cash offer in 24 hours. No obligation, no hassle, no fees.
                  </p>
                </div>
              </div>

              {/* Benefits Grid */}
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 max-w-2xl mx-auto">
                <div className="flex items-center gap-3 justify-center sm:justify-start">
                  <div className="w-10 h-10 bg-gradient-to-br from-success to-success/80 rounded-xl flex items-center justify-center shadow-lg">
                    <CheckCircle className="w-5 h-5 text-white" />
                  </div>
                  <div className="text-left">
                    <p className="font-semibold text-gray-900">No Fees</p>
                    <p className="text-sm text-muted-foreground">Save 6%+</p>
                  </div>
                </div>
                
                <div className="flex items-center gap-3 justify-center sm:justify-start">
                  <div className="w-10 h-10 bg-gradient-to-br from-trust to-trust/80 rounded-xl flex items-center justify-center shadow-lg">
                    <Clock className="w-5 h-5 text-white" />
                  </div>
                  <div className="text-left">
                    <p className="font-semibold text-gray-900">Fast Close</p>
                    <p className="text-sm text-muted-foreground">7-30 days</p>
                  </div>
                </div>
                
                <div className="flex items-center gap-3 justify-center sm:justify-start">
                  <div className="w-10 h-10 bg-gradient-to-br from-primary to-primary/80 rounded-xl flex items-center justify-center shadow-lg">
                    <Shield className="w-5 h-5 text-white" />
                  </div>
                  <div className="text-left">
                    <p className="font-semibold text-gray-900">As-Is Sale</p>
                    <p className="text-sm text-muted-foreground">No repairs</p>
                  </div>
                </div>
              </div>

              {/* CTA Button */}
              <div className="pt-4">
                <Button
                  size="lg"
                  className="h-16 px-12 text-xl font-semibold bg-gradient-to-r from-primary to-accent hover:from-primary hover:to-accent text-white shadow-lg hover:shadow-glow transition-all duration-300 rounded-full group"
                  onClick={() => {
                    document.getElementById('hero-form')?.scrollIntoView({ behavior: 'smooth' });
                  }}
                >
                  <span className="flex items-center gap-3">
                    Get Your Cash Offer Now
                    <ArrowRight className="w-6 h-6 group-hover:translate-x-1 transition-transform duration-300" />
                  </span>
                </Button>
                
                <p className="text-sm text-muted-foreground mt-4">
                  Free • No obligation • 24-hour response
                </p>
              </div>

              {/* Trust Indicators */}
              <div className="flex items-center justify-center gap-6 pt-6 border-t border-gray-100">
                <div className="flex items-center gap-2">
                  <div className="flex">
                    {[...Array(5)].map((_, i) => (
                      <Star key={i} className="w-4 h-4 fill-yellow-400 text-yellow-400" />
                    ))}
                  </div>
                  <span className="text-sm font-medium text-gray-700">Trusted by 1000+ sellers</span>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
};