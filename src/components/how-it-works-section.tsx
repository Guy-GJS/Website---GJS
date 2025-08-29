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
  Zap,
  MousePointerClick,
  Mail,
  Calendar
} from "lucide-react";
import { cn } from "@/lib/utils";

export const HowItWorksSection = () => {
  const steps = [
    {
      number: "01",
      icon: MousePointerClick,
      title: "Submit Your Property",
      description: "Fill out our simple online form with basic details about your property. It only takes 2 minutes.",
      highlight: "2 min process",
      highlightIcon: Zap,
      color: "from-primary to-primary/80",
      bgColor: "from-primary/5 to-primary/10",
      delay: "0ms"
    },
    {
      number: "02",
      icon: TrendingUp,
      title: "Get Your Cash Offer",
      description: "Our advanced valuation models analyze your property and market data to provide the best possible offer within 24 hours.",
      highlight: "24 hour response",
      highlightIcon: Clock,
      color: "from-accent to-accent/80",
      bgColor: "from-accent/5 to-accent/10",
      delay: "100ms"
    },
    {
      number: "03",
      icon: Calendar,
      title: "Choose Your Timeline",
      description: "Accept our offer and pick your closing date. We work around your schedule, whether it's 7 days or 60 days.",
      highlight: "Flexible closing",
      highlightIcon: Shield,
      color: "from-success to-success/80",
      bgColor: "from-success/5 to-success/10",
      delay: "200ms"
    },
    {
      number: "04",
      icon: DollarSign,
      title: "Get Paid",
      description: "We handle all paperwork and closing costs. You get your cash with no hidden fees and no realtor commissions.",
      highlight: "Save up to 10% in fees and commissions",
      highlightIcon: Sparkles,
      color: "from-trust to-trust/80",
      bgColor: "from-trust/5 to-trust/10",
      delay: "300ms"
    }
  ];

  return (
    <section id="how-it-works" className="relative py-24 sm:py-32 overflow-hidden bg-gradient-to-b from-white via-gray-50/50 to-white">
      {/* Modern Background Pattern */}
      <div className="absolute inset-0">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,rgba(0,118,189,0.05)_0%,transparent_70%)]"></div>
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#8080800a_1px,transparent_1px),linear-gradient(to_bottom,#8080800a_1px,transparent_1px)] bg-[size:20px_30px]"></div>
      </div>
      
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-20">
          <h2 className="text-4xl sm:text-5xl lg:text-6xl font-bold tracking-tight mb-6">
            <span className="text-gradient">How It Works</span>
          </h2>
          
          <p className="text-lg sm:text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
            From submission to cash in hand, our streamlined process makes selling your home faster and easier than ever before
          </p>
        </div>

        {/* Steps Timeline */}
        <div className="relative">
          {/* Modern Connection Line */}
          <div className="hidden lg:block absolute top-1/2 left-0 right-0 h-0.5 -translate-y-1/2">
            <div className="relative h-full">
              <div className="absolute inset-0 bg-gradient-to-r from-transparent via-primary/20 to-transparent"></div>
              <div className="absolute inset-0 bg-gradient-to-r from-transparent via-primary/40 to-transparent animate-pulse"></div>
            </div>
          </div>
          
          <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-4">
            {steps.map((step, index) => (
              <div 
                key={index}
                className="relative group"
                style={{
                  animationDelay: step.delay
                }}
              >
                {/* Mobile Connection Line */}
                {index < steps.length - 1 && (
                  <div className="block lg:hidden absolute -bottom-4 left-1/2 w-0.5 h-8 bg-gradient-to-b from-primary/20 to-transparent transform -translate-x-1/2" />
                )}
                
                <Card className={cn(
                  "relative h-full overflow-hidden min-h-[400px]",
                  "border-0 shadow-lg hover:shadow-2xl",
                  "bg-white/90 backdrop-blur-sm",
                  "transition-all duration-500",
                  "group-hover:-translate-y-2 group-hover:scale-[1.02]",
                  "animate-fade-in"
                )}>
                  {/* Gradient Overlay */}
                  <div className={cn(
                    "absolute inset-0 opacity-0 group-hover:opacity-100 transition-all duration-500",
                    "bg-gradient-to-br",
                    step.bgColor
                  )} />
                  
                  {/* Shimmer Effect */}
                  <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-700">
                    <div className="absolute inset-0 bg-[linear-gradient(105deg,transparent_40%,rgba(255,255,255,0.7)_50%,transparent_60%)] animate-shimmer"></div>
                  </div>
                  
                  <CardContent className="relative p-8 h-full flex flex-col">
                    {/* Step Number */}
                    <div className="absolute -top-2 -right-2">
                      <div className={cn(
                        "relative w-16 h-16 rounded-2xl flex items-center justify-center",
                        "bg-gradient-to-br shadow-lg",
                        "transform rotate-3 group-hover:rotate-0 transition-all duration-500",
                        "group-hover:scale-110",
                        step.color
                      )}>
                        <span className="text-white font-bold text-lg">{step.number}</span>
                        <div className="absolute inset-0 rounded-2xl bg-white/20 animate-pulse"></div>
                      </div>
                    </div>
                    
                    {/* Icon Container */}
                    <div className="mb-6">
                      <div className={cn(
                        "relative inline-flex items-center justify-center",
                        "w-20 h-20 rounded-3xl",
                        "bg-gradient-to-br shadow-lg",
                        "group-hover:scale-110 group-hover:rotate-3 transition-all duration-500",
                        step.bgColor
                      )}>
                        <div className={cn(
                          "absolute inset-0 rounded-3xl bg-gradient-to-br opacity-0 group-hover:opacity-100 transition-all duration-500",
                          step.color
                        )} />
                        <step.icon className="relative w-10 h-10 text-primary group-hover:text-white transition-colors duration-500 z-10" strokeWidth={1.5} />
                      </div>
                    </div>
                    
                    {/* Content */}
                    <div className="flex-1 space-y-4 flex flex-col">
                      <div className="flex-1">
                        <h3 className="text-xl font-bold text-gray-900 group-hover:text-primary transition-colors duration-300">
                          {step.title}
                        </h3>
                        
                        <p className="text-muted-foreground leading-relaxed text-sm lg:text-base">
                          {step.description}
                        </p>
                      </div>
                      
                      {/* Highlight Badge - Fixed position at bottom */}
                      <div className="pt-4">
                        <div className={cn(
                          "inline-flex items-center gap-2 px-4 py-2 rounded-full",
                          "bg-gradient-to-r border",
                          "group-hover:scale-105 transition-all duration-300",
                          "shadow-sm group-hover:shadow-md",
                          step.bgColor,
                          index === 0 ? "border-primary/20" : 
                          index === 1 ? "border-accent/20" : 
                          index === 2 ? "border-success/20" : 
                          "border-trust/20"
                        )}>
                          <step.highlightIcon className={cn(
                            "w-4 h-4",
                            index === 0 ? "text-primary" : 
                            index === 1 ? "text-accent" : 
                            index === 2 ? "text-success" : 
                            "text-trust"
                          )} />
                          <span className={cn(
                            "text-sm font-semibold",
                            index === 0 ? "text-primary" : 
                            index === 1 ? "text-accent" : 
                            index === 2 ? "text-success" : 
                            "text-trust"
                          )}>
                            {step.highlight}
                          </span>
                        </div>
                      </div>
                    </div>
                  </CardContent>
                </Card>
                
                {/* Desktop Connection Arrow */}
                {index < steps.length - 1 && (
                  <div className="hidden lg:flex absolute top-1/2 -right-6 transform -translate-y-1/2 z-20">
                    <div className="relative">
                      <div className="w-12 h-12 glass rounded-full flex items-center justify-center shadow-lg group-hover:scale-110 transition-transform duration-300">
                        <ArrowRight className="w-5 h-5 text-primary" />
                      </div>
                    </div>
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>

        {/* CTA Section */}
        <div className="text-center mt-20">
          <div className="inline-flex flex-col items-center gap-6">
            <div className="flex items-center gap-3">
              <Badge className="px-4 py-2 text-sm font-medium glass border-success/20 text-success">
                <Shield className="w-4 h-4 mr-2" />
                100% Secure Process
              </Badge>
            </div>
            
            <Button
              size="lg"
              className="h-14 px-10 text-lg font-semibold bg-gradient-to-r from-primary to-accent hover:from-primary hover:to-accent text-white shadow-lg hover:shadow-glow transition-all duration-300 rounded-full group"
              onClick={() => {
                document.getElementById('hero-form')?.scrollIntoView({ behavior: 'smooth' });
              }}
            >
              <span className="flex items-center gap-2">
                Get Your Cash Offer Now
                <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform duration-300" />
              </span>
            </Button>
            
            <p className="text-sm text-muted-foreground">
              Free • No obligation • Get your offer in 24 hours
            </p>
          </div>
        </div>
      </div>

      {/* Custom Animation Styles */}
      <style jsx>{`
        @keyframes fade-in {
          from {
            opacity: 0;
            transform: translateY(30px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
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