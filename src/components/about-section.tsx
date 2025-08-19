import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Users, Handshake, Heart, ArrowRight } from "lucide-react";

export const AboutSection = () => {
  const highlights = [
    {
      icon: <Users className="h-8 w-8" />,
      title: "Real People",
      description: "Talk directly to the two of us — the actual decision makers.",
      color: "from-cyan-600 to-cyan-700",
      bgColor: "from-cyan-50 to-cyan-100",
      badge: "Human",
    },
    {
      icon: <Handshake className="h-8 w-8" />,
      title: "Simple & Fair",
      description: "Clear numbers and timelines. No pressure, no surprises.",
      color: "from-emerald-600 to-emerald-700",
      bgColor: "from-emerald-50 to-emerald-100",
      badge: "Straightforward",
    },
    {
      icon: <Heart className="h-8 w-8" />,
      title: "Community-Backed",
      description: "We manage a small fund raised from friends and friends-of-friends.",
      color: "from-rose-600 to-rose-700",
      bgColor: "from-rose-50 to-rose-100",
      badge: "Trusted",
    },
  ];

  return (
    <section id="about" className="py-16 sm:py-20 lg:py-24 bg-gradient-to-br from-white to-cyan-50/20 relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
        <div className="text-center mb-12 sm:mb-16">
          <div className="inline-flex items-center justify-center w-16 h-16 bg-gradient-to-br from-cyan-50 to-cyan-100 rounded-full mb-6 border border-cyan-200">
            <Handshake className="h-8 w-8 text-cyan-700" />
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight mb-4">
            <span className="bg-gradient-to-r from-gray-900 to-cyan-700 bg-clip-text text-transparent">
              About Us
            </span>
          </h2>
          <div className="max-w-3xl mx-auto space-y-4 text-lg sm:text-xl text-muted-foreground">
            <p>
              We’re two investors running a small, honest operation. We manage a modest fund raised from friends and friends‑of‑friends — people who know us and trust us.
            </p>
            <p>
              We’re not real estate giants. We’re straightforward, practical, and focused on making fair deals that work for everyone.
            </p>
            <p>
              If you want to sell without fixing, staging, showings, or months of uncertainty, we’ll make a fair cash offer and handle the details. No fees, no pressure, no surprises.
            </p>
          </div>
        </div>

        <div className="grid gap-6 sm:gap-8 sm:grid-cols-2 lg:grid-cols-3">
          {highlights.map((item, index) => (
            <Card
              key={index}
              className="relative overflow-hidden border border-gray-200 hover:border-gray-300 bg-white shadow-sm hover:shadow-lg transition-all duration-300 group"
           >
              <CardContent className="p-6 sm:p-8 text-center space-y-4 relative">
                <div className={`absolute inset-0 bg-gradient-to-br ${item.bgColor} opacity-0 group-hover:opacity-100 transition-opacity duration-500`}></div>
                <div className="relative z-10">
                  <div className="relative mb-6">
                    <div className={`inline-flex items-center justify-center w-16 h-16 rounded-2xl bg-gradient-to-br ${item.color} text-white shadow-lg group-hover:scale-110 transition-transform duration-300`}>
                      {item.icon}
                    </div>
                    <Badge
                      variant="secondary"
                      className="absolute -top-2 -right-2 text-xs bg-gradient-to-r from-cyan-600 to-cyan-700 text-white border-0 shadow-sm"
                    >
                      {item.badge}
                    </Badge>
                  </div>
                  <h3 className="text-xl font-semibold text-gray-900 mb-3">{item.title}</h3>
                  <p className="text-sm text-muted-foreground leading-relaxed">{item.description}</p>
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

