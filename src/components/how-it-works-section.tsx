import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { 
  Home, 
  FileText, 
  DollarSign, 
  CheckCircle, 
  ArrowRight,
  Clock,
  Shield,
  Sparkles,
  TrendingUp,
  Users,
  Zap
} from "lucide-react";
import { cn } from "@/lib/utils";

export const HowItWorksSection = () => {
  const steps = [
    {
      icon: Home,
      title: "Tell us about your property",
      description: "Share basic details about your house through our simple form or give us a call.",
      highlight: "No obligation",
      highlightIcon: Shield,
      color: "from-cyan-600 to-cyan-700",
      bgColor: "from-cyan-50 to-cyan-100",
      delay: "0ms"
    },
    {
      icon: FileText,
      title: "Get your cash offer",
      description: "Using advanced models and market data, we calculate the best offer we can provide and deliver it to your email within 24 hours.",
      highlight: "24 hours",
      highlightIcon: Clock,
      color: "from-cyan-600 to-cyan-700",
      bgColor: "from-cyan-50 to-cyan-100",
      delay: "100ms"
    },

    {
      icon: CheckCircle,
      title: "Get paid",
      description: "We handle all the paperwork and close on your timeline. Save 6% in realtor fees - no marketing, staging, showings, or open houses needed.",
      highlight: "Save 6%",
      highlightIcon: Sparkles,
      color: "from-cyan-600 to-cyan-700",
      bgColor: "from-cyan-50 to-cyan-100",
      delay: "300ms"
    }
  ];

  return (
    <section id="how-it-works" className="relative py-20 sm:py-24 lg:py-32 overflow-hidden bg-white">
      {/* Background Pattern */}
      <div className="absolute inset-0 bg-gray-50/50">
        <div className="absolute inset-0" style={{
          backgroundImage: `radial-gradient(circle at 1px 1px, rgb(156 163 175 / 0.03) 1px, transparent 1px)`,
          backgroundSize: '40px 40px'
        }} />
      </div>
      
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header Section */}
        <div className="text-center mb-16 sm:mb-20">
          <div className="inline-flex items-center justify-center mb-6 relative">
            <div className="relative bg-gradient-to-br from-cyan-50 to-cyan-100 p-4 rounded-2xl border border-cyan-200">
              <TrendingUp className="h-8 w-8 text-cyan-700" />
            </div>
          </div>
          
          <h2 className="text-4xl sm:text-5xl lg:text-6xl font-bold tracking-tight mb-6">
            <span className="bg-gradient-to-r from-gray-900 to-cyan-700 bg-clip-text text-transparent">
              How It Works
            </span>
          </h2>
          
          <p className="text-lg sm:text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
            Our streamlined 4-step process makes selling your house fast, simple, and completely stress-free
          </p>
          
          <div className="flex items-center justify-center gap-4 mt-6">
            <Badge variant="secondary" className="px-4 py-2 text-sm font-medium bg-cyan-50 text-cyan-700 border-cyan-200">
              <Zap className="w-4 h-4 mr-2" />
              Fast Process
            </Badge>
            <Badge variant="secondary" className="px-4 py-2 text-sm font-medium bg-cyan-50 text-cyan-700 border-cyan-200">
              <Shield className="w-4 h-4 mr-2" />
              100% Secure
            </Badge>
            <Badge variant="secondary" className="px-4 py-2 text-sm font-medium bg-cyan-50 text-cyan-700 border-cyan-200">
              <Users className="w-4 h-4 mr-2" />
              Expert Support
            </Badge>
          </div>
        </div>

        {/* Steps Grid */}
        <div className="relative">
          {/* Connection Line for Large Screens */}
          <div className="hidden lg:block absolute top-32 left-[12.5%] right-[12.5%] h-0.5">
            <div className="relative h-full">
              <div className="absolute inset-0 bg-cyan-300 rounded-full" />
            </div>
          </div>
          
          <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-4 lg:items-stretch">
            {steps.map((step, index) => (
              <div 
                key={index} 
                className="relative group flex"
                style={{
                  animationDelay: step.delay
                }}
              >
                {/* Mobile Connection Line */}
                {index < steps.length - 1 && (
                  <div className="block md:hidden absolute -bottom-4 left-1/2 w-0.5 h-8 bg-cyan-300 transform -translate-x-1/2" />
                )}
                
                <Card className={cn(
                  "relative w-full h-full overflow-hidden flex-1",
                  "border border-gray-200 hover:border-gray-300",
                  "bg-white",
                  "shadow-sm hover:shadow-lg",
                  "transition-all duration-300",
                  "group-hover:-translate-y-1"
                )}>
                  {/* Gradient Background Effect */}
                  <div className={cn(
                    "absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500",
                    "bg-gradient-to-br",
                    step.bgColor
                  )} />
                  
                  <CardContent className="relative p-8 text-center h-full flex flex-col justify-between">
                    {/* Step Number */}
                    <div className="absolute -top-3 -right-3">
                      <div className={cn(
                        "w-12 h-12 rounded-xl flex items-center justify-center",
                        "bg-gradient-to-br text-white font-bold text-lg",
                        "shadow-lg transform rotate-3 group-hover:rotate-0 transition-transform duration-300",
                        step.color
                      )}>
                        {index + 1}
                      </div>
                    </div>
                    
                    {/* Icon */}
                    <div className="mb-6">
                      <div className={cn(
                        "relative inline-flex items-center justify-center",
                        "w-20 h-20 rounded-2xl",
                        "bg-gradient-to-br",
                        step.bgColor,
                        "group-hover:scale-110 transition-transform duration-300"
                      )}>
                        <div className={cn(
                          "absolute inset-0 rounded-2xl bg-gradient-to-br opacity-0 group-hover:opacity-100 transition-opacity duration-300",
                          step.color
                        )} />
                        <step.icon className="relative w-10 h-10 text-white transition-colors duration-300" />
                      </div>
                    </div>
                    
                    {/* Content - Main content area */}
                    <div className="flex-1 flex flex-col space-y-4">
                      <h3 className="text-xl font-bold text-gray-900">
                        {step.title}
                      </h3>
                      
                      <p className="text-muted-foreground leading-relaxed text-sm lg:text-base flex-1">
                        {step.description}
                      </p>
                      
                      {/* Highlight Badge */}
                      <div className="mt-auto pt-2">
                        <div className={cn(
                          "inline-flex items-center gap-2 px-4 py-2 rounded-full",
                          "bg-gradient-to-r",
                          step.bgColor,
                          "border border-cyan-200",
                          "group-hover:scale-105 transition-transform duration-300"
                        )}>
                          <step.highlightIcon className="w-4 h-4 text-cyan-600" />
                          <span className="text-sm font-bold text-cyan-700">
                            {step.highlight}
                          </span>
                        </div>
                      </div>
                    </div>
                  </CardContent>
                </Card>
                
                {/* Desktop Arrow */}
                {index < steps.length - 1 && (
                  <div className="hidden lg:flex absolute top-1/2 -right-6 transform -translate-y-1/2 z-20">
                    <div className="relative">
                      <div className="relative w-12 h-12 bg-white rounded-full border border-cyan-300 flex items-center justify-center shadow-sm">
                        <ArrowRight className="w-5 h-5 text-cyan-600" />
                      </div>
                    </div>
                  </div>
                )}
              </div>
            ))}
          </div>
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