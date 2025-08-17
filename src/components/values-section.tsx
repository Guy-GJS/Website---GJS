import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { CheckCircle, Clock, Shield, DollarSign, Star, TrendingUp } from "lucide-react";

export const ValuesSection = () => {
  const values = [
    {
      icon: <DollarSign className="h-8 w-8" />,
      title: "Fair Offers",
      description: "Honest cash offers based on your property's value. No lowball tactics.",
      badge: "Fair",
      color: "from-gray-700 to-gray-800",
      bgColor: "from-gray-50 to-gray-100",
      stats: "Market-based pricing"
    },
    {
      icon: <Clock className="h-8 w-8" />,
      title: "Quick Process",
      description: "Close fast on your timeline. No waiting for financing or approvals.",
      badge: "Quick",
      color: "from-gray-700 to-gray-800",
      bgColor: "from-gray-50 to-gray-100",
      stats: "7-30 days to close"
    },
    {
      icon: <CheckCircle className="h-8 w-8" />,
      title: "Straightforward",
      description: "Simple process. Clear terms. No complications.",
      badge: "Simple",
      color: "from-gray-700 to-gray-800",
      bgColor: "from-gray-50 to-gray-100",
      stats: "Clear & simple"
    },
    {
      icon: <Shield className="h-8 w-8" />,
      title: "Save 6% in Realtor Fees",
      description: "No commissions, no marketing costs, no staging, no showings, no open houses. Just a straightforward sale.",
      badge: "Save 6%",
      color: "from-gray-700 to-gray-800",
      bgColor: "from-gray-50 to-gray-100",
      stats: "Zero agent fees"
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
            Our Approach
          </h2>
          <p className="text-lg sm:text-xl text-muted-foreground max-w-3xl mx-auto">
            Since 2020, we've been helping homeowners with a simple promise:
            <span className="block mt-2 text-gray-700 font-semibold">Fair. Straightforward. Quick.</span>
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


      </div>
    </section>
  );
};