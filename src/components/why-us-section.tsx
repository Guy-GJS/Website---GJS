import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { CheckCircle, Clock, Shield, DollarSign, Star, TrendingUp, Users, Award } from "lucide-react";

export const WhyUsSection = () => {
  const reasons = [
    {
      icon: <Users className="h-8 w-8" />,
      title: "Local Expertise",
      description: "We're your neighbors who understand the local market, property values, and community needs.",
      badge: "Local",
      color: "from-cyan-600 to-cyan-700",
      bgColor: "from-cyan-50 to-cyan-100",
      stats: "Serving the community for 15+ years"
    },
    {
      icon: <Award className="h-8 w-8" />,
      title: "Proven Track Record",
      description: "Thousands of satisfied homeowners have trusted us with their biggest asset - their home.",
      badge: "Proven",
      color: "from-emerald-600 to-emerald-700",
      bgColor: "from-emerald-50 to-emerald-100",
      stats: "10,000+ successful transactions"
    },
    {
      icon: <Shield className="h-8 w-8" />,
      title: "Trust & Integrity",
      description: "We believe in honest, transparent dealings. No pressure, no hidden fees, just fair treatment.",
      badge: "Trusted",
      color: "from-violet-600 to-violet-700",
      bgColor: "from-violet-50 to-violet-100",
      stats: "4.9★ customer satisfaction"
    },
    {
      icon: <Clock className="h-8 w-8" />,
      title: "Speed & Convenience",
      description: "Skip the traditional selling process. Get a fair offer and close on your timeline, not the market's.",
      badge: "Fast",
      color: "from-blue-600 to-blue-700",
      bgColor: "from-blue-50 to-blue-100",
      stats: "Close in as little as 7 days"
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
            When you're selling your home, you deserve a partner who puts your interests first. 
            <span className="block mt-2 text-cyan-700 font-semibold">Here's why thousands of homeowners choose Fair Property Group.</span>
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

        {/* Trust Indicators */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 text-center mt-12 pt-12 border-t border-gray-200">
          <div className="space-y-2">
            <div className="text-2xl sm:text-3xl font-bold bg-gradient-to-r from-cyan-600 to-cyan-700 bg-clip-text text-transparent">10,000+</div>
            <div className="text-sm text-gray-600">Homes Purchased</div>
          </div>
          <div className="space-y-2">
            <div className="text-2xl sm:text-3xl font-bold bg-gradient-to-r from-emerald-600 to-emerald-700 bg-clip-text text-transparent">4.9★</div>
            <div className="text-sm text-gray-600">Customer Rating</div>
          </div>
          <div className="space-y-2">
            <div className="text-2xl sm:text-3xl font-bold bg-gradient-to-r from-violet-600 to-violet-700 bg-clip-text text-transparent">14 Days</div>
            <div className="text-sm text-gray-600">Average Close</div>
          </div>
          <div className="space-y-2">
            <div className="text-2xl sm:text-3xl font-bold bg-gradient-to-r from-blue-600 to-blue-700 bg-clip-text text-transparent">$0</div>
            <div className="text-sm text-gray-600">Hidden Fees</div>
          </div>
        </div>

      </div>
    </section>
  );
}; 