import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { CheckCircle, Clock, Shield, DollarSign, Star, TrendingUp } from "lucide-react";

export const ValuesSection = () => {
  const values = [
    {
      icon: <DollarSign className="h-8 w-8" />,
      title: "Fair Value",
      description: "We provide competitive cash offers based on current market conditions and your property's true value.",
      badge: "Guaranteed",
      color: "from-gray-700 to-gray-800",
      bgColor: "from-gray-50 to-gray-100",
      stats: "Average 95% of market value"
    },
    {
      icon: <Clock className="h-8 w-8" />,
      title: "Quick Closing",
      description: "Close in as little as 7 days. No waiting for buyer financing or lengthy approval processes.",
      badge: "Fast Track",
      color: "from-gray-700 to-gray-800",
      bgColor: "from-gray-50 to-gray-100",
      stats: "Average 14 days to close"
    },
    {
      icon: <CheckCircle className="h-8 w-8" />,
      title: "Hassle-Free",
      description: "No repairs, no showings, no staging. We buy houses in any condition, saving you time and money.",
      badge: "Easy",
      color: "from-gray-700 to-gray-800",
      bgColor: "from-gray-50 to-gray-100",
      stats: "Zero preparation needed"
    },
    {
      icon: <Shield className="h-8 w-8" />,
      title: "Transparency",
      description: "Clear pricing, honest communication, and no hidden fees. You'll know exactly what to expect.",
      badge: "Trusted",
      color: "from-gray-700 to-gray-800",
      bgColor: "from-gray-50 to-gray-100",
      stats: "100% transparent process"
    }
  ];

  return (
    <section className="py-16 sm:py-20 lg:py-24 bg-white relative overflow-hidden">
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
        <div className="text-center mb-12 sm:mb-16">
          <div className="inline-flex items-center justify-center w-16 h-16 bg-gray-100 rounded-full mb-6 border border-gray-200">
            <Star className="h-8 w-8 text-gray-700" />
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight mb-4 text-gray-900">
            Why Choose Fair Property Group?
          </h2>
          <p className="text-lg sm:text-xl text-muted-foreground max-w-3xl mx-auto">
            We've helped thousands of homeowners sell their properties quickly and fairly. 
            <span className="block mt-2 text-gray-700 font-semibold">Here's what sets us apart from traditional real estate.</span>
          </p>
        </div>
        
        <div className="grid gap-6 sm:gap-8 sm:grid-cols-2 lg:grid-cols-4 mb-12">
          {values.map((value, index) => (
            <Card key={index} className="relative overflow-hidden border border-gray-200 hover:border-gray-300 bg-white shadow-sm hover:shadow-lg transition-all duration-300 group">
              <CardContent className="p-6 sm:p-8 text-center space-y-4 relative">
                {/* Background Gradient */}
                <div className={`absolute inset-0 bg-gradient-to-br ${value.bgColor} opacity-0 group-hover:opacity-100 transition-opacity duration-500`}></div>
                
                <div className="relative z-10">
                  <div className="relative mb-6">
                    <div className={`inline-flex items-center justify-center w-16 h-16 rounded-2xl bg-gradient-to-br ${value.color} text-white shadow-lg group-hover:scale-110 transition-transform duration-300`}>
                      {value.icon}
                    </div>
                    <Badge 
                      variant="secondary" 
                      className="absolute -top-2 -right-2 text-xs bg-gray-900 text-white border-0 shadow-sm"
                    >
                      {value.badge}
                    </Badge>
                  </div>
                  
                  <h3 className="text-xl font-semibold text-gray-900 mb-3">
                    {value.title}
                  </h3>
                  
                  <p className="text-sm text-muted-foreground leading-relaxed mb-4">
                    {value.description}
                  </p>
                  
                  {/* Stats */}
                  <div className="flex items-center justify-center gap-1 text-xs font-semibold text-gray-700 bg-gray-100 px-3 py-1 rounded-full">
                    <TrendingUp className="w-3 h-3" />
                    <span>{value.stats}</span>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Trust Indicators */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 text-center">
          <div className="space-y-2">
            <div className="text-2xl sm:text-3xl font-bold text-gray-900">10,000+</div>
            <div className="text-sm text-muted-foreground">Homes Purchased</div>
          </div>
          <div className="space-y-2">
            <div className="text-2xl sm:text-3xl font-bold text-gray-900">4.9★</div>
            <div className="text-sm text-muted-foreground">Customer Rating</div>
          </div>
          <div className="space-y-2">
            <div className="text-2xl sm:text-3xl font-bold text-gray-900">14 Days</div>
            <div className="text-sm text-muted-foreground">Average Close</div>
          </div>
          <div className="space-y-2">
            <div className="text-2xl sm:text-3xl font-bold text-gray-900">$0</div>
            <div className="text-sm text-muted-foreground">Hidden Fees</div>
          </div>
        </div>
      </div>
    </section>
  );
};