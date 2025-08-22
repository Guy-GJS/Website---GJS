import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { CheckCircle, Clock, Shield, DollarSign, Star, TrendingUp, Users, Award, ArrowRight, Sparkles, Heart, Zap } from "lucide-react";
import { cn } from "@/lib/utils";

export const WhyUsSection = () => {
  const reasons = [
    {
      icon: Heart,
      title: "Fair & Transparent",
      description: "Honest market-based offers with complete transparency. No hidden fees, no surprises.",
      badge: "100% Fair",
      gradient: "from-rose-500 to-pink-500",
      lightGradient: "from-rose-50 to-pink-50",
      stats: "10,000+ happy sellers",
      delay: "0ms"
    },
    {
      icon: Zap,
      title: "Lightning Fast",
      description: "Get your cash offer in 24 hours and close in as little as 7 days when you need to.",
      badge: "24hr Offer",
      gradient: "from-amber-500 to-orange-500",
      lightGradient: "from-amber-50 to-orange-50",
      stats: "7-30 day closing",
      delay: "100ms"
    },
    {
      icon: Shield,
      title: "Zero Hassle",
      description: "We buy as-is. No repairs, no staging, no showings. We handle all the paperwork.",
      badge: "As-Is",
      gradient: "from-emerald-500 to-teal-500",
      lightGradient: "from-emerald-50 to-teal-50",
      stats: "No repairs needed",
      delay: "200ms"
    },
    {
      icon: DollarSign,
      title: "Save Money",
      description: "No realtor commissions, no closing costs, no hidden fees. Keep more money in your pocket.",
      badge: "Save 6%",
      gradient: "from-blue-500 to-indigo-500",
      lightGradient: "from-blue-50 to-indigo-50",
      stats: "Zero commissions",
      delay: "300ms"
    }
  ];



  return (
    <section id="why-us" className="relative py-24 sm:py-32 overflow-hidden">
      {/* Modern gradient background */}
      <div className="absolute inset-0 bg-gradient-to-br from-gray-50 via-white to-primary/5">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_right,rgba(0,118,189,0.1)_0%,transparent_50%)]"></div>
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_bottom_left,rgba(0,182,191,0.1)_0%,transparent_50%)]"></div>
      </div>
      
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16 sm:mb-20">
          <div className="inline-flex items-center justify-center mb-6">
            <div className="relative">
              <div className="absolute inset-0 bg-gradient-to-br from-primary/30 to-accent/30 blur-xl"></div>
              <div className="relative glass px-6 py-3 rounded-full border border-primary/20">
                <div className="flex items-center gap-2">
                  <Star className="h-5 w-5 text-primary animate-pulse" />
                  <span className="text-sm font-bold text-primary uppercase tracking-wider">Why Choose Us</span>
                  <Star className="h-5 w-5 text-primary animate-pulse" />
                </div>
              </div>
            </div>
          </div>
          
          <h2 className="text-4xl sm:text-5xl lg:text-6xl font-bold tracking-tight mb-6">
            <span className="block text-gray-900">The Smart Way to</span>
            <span className="text-gradient">Sell Your Home</span>
          </h2>
          
          <p className="text-lg sm:text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed whitespace-nowrap">
            Experience the difference with our transparent, fast, and hassle-free home buying process
          </p>
        </div>


        
        {/* Reasons Grid */}
        <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-4 mb-16">
          {reasons.map((reason, index) => (
            <div
              key={index}
              className="group animate-fade-in"
              style={{ animationDelay: reason.delay }}
            >
              <Card className="relative h-full overflow-hidden border-0 shadow-lg hover:shadow-2xl bg-white/90 backdrop-blur-sm transition-all duration-500 group-hover:-translate-y-2">
                {/* Gradient Background */}
                <div className={cn(
                  "absolute inset-0 opacity-0 group-hover:opacity-100 transition-all duration-500",
                  "bg-gradient-to-br",
                  reason.lightGradient
                )} />
                
                {/* Shimmer Effect */}
                <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-700">
                  <div className="absolute inset-0 bg-[linear-gradient(105deg,transparent_40%,rgba(255,255,255,0.7)_50%,transparent_60%)] animate-shimmer"></div>
                </div>
                
                <CardContent className="relative p-8 text-center space-y-6 h-full flex flex-col">
                  {/* Icon Container */}
                  <div className="relative">
                    <div className={cn(
                      "mx-auto w-20 h-20 rounded-3xl flex items-center justify-center",
                      "bg-gradient-to-br shadow-lg",
                      "group-hover:scale-110 group-hover:rotate-3 transition-all duration-500",
                      reason.gradient
                    )}>
                      <reason.icon className="w-10 h-10 text-white" strokeWidth={1.5} />
                    </div>
                    <Badge 
                      className={cn(
                        "absolute -top-2 -right-2 px-3 py-1",
                        "bg-gradient-to-r text-white border-0 shadow-md",
                        "group-hover:scale-110 transition-transform duration-300",
                        reason.gradient
                      )}
                    >
                      {reason.badge}
                    </Badge>
                  </div>
                  
                  {/* Content */}
                  <div className="flex-1 space-y-3">
                    <h3 className="text-xl font-bold text-gray-900 group-hover:text-primary transition-colors duration-300">
                      {reason.title}
                    </h3>
                    
                    <p className="text-muted-foreground leading-relaxed text-sm">
                      {reason.description}
                    </p>
                  </div>
                  
                  {/* Stats Badge */}
                  <div className="mt-auto">
                    <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full glass border border-primary/10">
                      <TrendingUp className="w-4 h-4 text-primary" />
                      <span className="text-xs font-semibold text-primary">
                        {reason.stats}
                      </span>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>
          ))}
        </div>

        {/* Testimonial Card */}
        <div className="glass rounded-3xl p-8 mb-16 shadow-xl max-w-4xl mx-auto">
          <div className="flex flex-col sm:flex-row items-center gap-6">
            <div className="flex-shrink-0">
              <div className="w-20 h-20 rounded-full bg-gradient-to-br from-primary to-accent flex items-center justify-center shadow-lg">
                <Sparkles className="w-10 h-10 text-white" />
              </div>
            </div>
            <div className="flex-1 text-center sm:text-left">
              <div className="flex items-center gap-1 justify-center sm:justify-start mb-2">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="w-5 h-5 fill-yellow-400 text-yellow-400" />
                ))}
              </div>
              <p className="text-lg text-gray-700 italic mb-2">
                "The process was incredibly smooth and fast. Got my offer in less than a day and closed within 2 weeks. Highly recommend!"
              </p>
              <p className="text-sm font-semibold text-primary">
                Maya Rodriguez • Sold March 2024
              </p>
            </div>
          </div>
        </div>

        {/* CTA Section */}
        <div className="text-center">
          <Button
            size="lg"
            className="h-14 px-10 text-lg font-semibold bg-gradient-to-r from-primary to-accent hover:from-primary hover:to-accent text-white shadow-lg hover:shadow-glow transition-all duration-300 rounded-full group"
            onClick={() => {
              document.getElementById('cta')?.scrollIntoView({ behavior: 'smooth' });
            }}
          >
            <span className="flex items-center gap-2">
              Get Your Cash Offer Today
              <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform duration-300" />
            </span>
          </Button>

        </div>
      </div>

      {/* Custom Animation Styles */}
      <style jsx>{`
        @keyframes fade-in {
          from {
            opacity: 0;
            transform: translateY(30px) scale(0.95);
          }
          to {
            opacity: 1;
            transform: translateY(0) scale(1);
          }
        }

        @keyframes shimmer {
          0% {
            transform: translateX(-100%) translateY(-100%);
          }
          100% {
            transform: translateX(100%) translateY(100%);
          }
        }

        .animate-fade-in {
          animation: fade-in 0.8s ease-out forwards;
        }

        .animate-shimmer {
          animation: shimmer 3s ease-out infinite;
        }
      `}</style>
    </section>
  );
};