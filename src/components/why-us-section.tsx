import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { CheckCircle, Clock, Shield, DollarSign, Star, TrendingUp, Users, Award, ArrowRight } from "lucide-react";

export const WhyUsSection = () => {
  const reasons = [
    {
      icon: <Users className="h-8 w-8" />,
      title: "Fair & Honest",
      description: "We provide fair cash offers with complete transparency. No games, no gimmicks.",
      badge: "Fair",
      color: "from-cyan-600 to-cyan-700",
      bgColor: "from-cyan-50 to-cyan-100",
      stats: "Fair & Honest"
    },
    {
      icon: <Award className="h-8 w-8" />,
      title: "Straightforward Process",
      description: "Simple, clear process from start to finish. We explain everything upfront.",
      badge: "Simple",
      color: "from-emerald-600 to-emerald-700",
      bgColor: "from-emerald-50 to-emerald-100",
      stats: "No complicated paperwork"
    },
    {
      icon: <Shield className="h-8 w-8" />,
      title: "Quick Closing",
      description: "We move fast when you need us to. Close in days, not months.",
      badge: "Quick",
      color: "from-violet-600 to-violet-700",
      bgColor: "from-violet-50 to-violet-100",
      stats: "Close in 7-30 days"
    },
    {
      icon: <Clock className="h-8 w-8" />,
      title: "No Hassles, Save 6%",
      description: "Skip the realtor fees, marketing, staging, showings, and open houses. Sell as-is with zero stress.",
      badge: "Save 6%",
      color: "from-blue-600 to-blue-700",
      bgColor: "from-blue-50 to-blue-100",
      stats: "Zero agent commissions"
    }
  ];

  return (
    <section id="why-us" className="py-16 sm:py-20 lg:py-24 bg-gradient-to-br from-white to-cyan-50/20 relative overflow-hidden">
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
        <div className="text-center mb-12 sm:mb-16">
          <div className="inline-flex items-center justify-center w-16 h-16 bg-gradient-to-br from-cyan-50 to-cyan-100 rounded-full mb-6 border border-cyan-200">
            <Star className="h-8 w-8 text-cyan-700" />
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight mb-4">
            <span className="bg-gradient-to-r from-gray-900 to-cyan-700 bg-clip-text text-transparent">
              Why Choose Us?
            </span>
          </h2>
          <p className="text-lg sm:text-xl text-muted-foreground max-w-3xl mx-auto">
            Fair. Straightforward. Quick.
            <span className="block mt-2 text-cyan-700 font-semibold">That's our promise to you.</span>
          </p>
        </div>
        
        <div className="grid gap-6 sm:gap-8 sm:grid-cols-2 lg:grid-cols-4 mb-12">
          {reasons.map((reason, index) => (
            <Card key={index} className="relative overflow-hidden border border-gray-200 hover:border-gray-300 bg-white shadow-sm hover:shadow-lg transition-all duration-300 group">
              <CardContent className="p-6 sm:p-8 text-center space-y-4 relative">
                {/* Background Gradient */}
                <div className={`absolute inset-0 bg-gradient-to-br ${reason.bgColor} opacity-0 group-hover:opacity-100 transition-opacity duration-500`}></div>
                
                <div className="relative z-10">
                  <div className="relative mb-6">
                    <div className={`inline-flex items-center justify-center w-16 h-16 rounded-2xl bg-gradient-to-br ${reason.color} text-white shadow-lg group-hover:scale-110 transition-transform duration-300`}>
                      {reason.icon}
                    </div>
                    <Badge 
                      variant="secondary" 
                      className="absolute -top-2 -right-2 text-xs bg-gradient-to-r from-cyan-600 to-cyan-700 text-white border-0 shadow-sm"
                    >
                      {reason.badge}
                    </Badge>
                  </div>
                  
                  <h3 className="text-xl font-semibold text-gray-900 mb-3">
                    {reason.title}
                  </h3>
                  
                  <p className="text-sm text-muted-foreground leading-relaxed mb-4">
                    {reason.description}
                  </p>
                  
                  {/* Stats */}
                  <div className="flex items-center justify-center gap-1 text-xs font-semibold text-cyan-700 bg-cyan-50 px-3 py-1 rounded-full border border-cyan-200">
                    <TrendingUp className="w-3 h-3" />
                    <span>{reason.stats}</span>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* CTA Button */}
        <div className="text-center mt-16">
          <Button
            size="lg"
            className="h-14 px-8 text-lg font-semibold bg-gradient-to-r from-cyan-600 to-cyan-700 hover:from-cyan-700 hover:to-cyan-800 text-white shadow-lg hover:shadow-xl transition-all duration-300"
            onClick={() => {
              document.getElementById('cta')?.scrollIntoView({ behavior: 'smooth' });
            }}
          >
            Get Your Offer
            <ArrowRight className="w-5 h-5 ml-2" />
          </Button>
          <p className="text-sm text-muted-foreground mt-3">
            Free • No obligation • 24-hour response
          </p>
        </div>

      </div>
    </section>
  );
}; 