import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import { Button } from "@/components/ui/button";
import { Clock, Home, DollarSign, FileText, Building, Shield, CheckCircle, ArrowRight } from "lucide-react";

export const FAQSection = () => {
  const faqData = [
    {
      id: "process",
      icon: <FileText className="h-5 w-5 text-cyan-700" />,
      question: "How does the process work?",
      answer: "We keep it simple: tell us about your property through our form, our advanced models analyze your property and market data to calculate the best offer, and you receive a fair, no-obligation cash offer via email within 24 hours. If you accept, we handle the paperwork and close on your timeline."
    },
    {
      id: "timeline",
      icon: <Clock className="h-5 w-5 text-blue-700" />,
      question: "How fast can you close?",
      answer: "Most deals close in as little as 7–30 days. If you need more time, we can accommodate your schedule."
    },
    {
      id: "repairs",
      icon: <Home className="h-5 w-5 text-emerald-700" />,
      question: "Do I need to make repairs or clean?",
      answer: "No. We buy houses as-is. You don't need to make repairs, clean, or prep. Take what you want and leave the rest."
    },
    {
      id: "offer",
      icon: <DollarSign className="h-5 w-5 text-violet-700" />,
      question: "How do you determine your offer?",
      answer: "Our advanced models analyze your home's condition, location, recent comparable sales, and current market trends to calculate the best offer we can provide. We use sophisticated algorithms and market data to ensure fair, competitive offers that work for both sides."
    },
    {
      id: "fees",
      icon: <Shield className="h-5 w-5 text-cyan-700" />,
      question: "Are there any fees or commissions?",
      answer: "No! You save the typical 6% realtor commission fees. Plus, no costs for marketing, staging, showings, or open houses. We usually cover standard closing costs too. The price we offer is the amount you can expect to receive at closing, minus any existing liens or obligations on the property."
    },
    {
      id: "types",
      icon: <Building className="h-5 w-5 text-blue-700" />,
      question: "What types of properties do you buy?",
      answer: "Single-family homes, townhomes, condos, multi-family properties, and occasionally land—whether vacant, rented, inherited, outdated, or in need of repairs."
    },
    {
      id: "obligation",
      icon: <CheckCircle className="h-5 w-5 text-emerald-700" />,
      question: "Is there any obligation when I request an offer?",
      answer: "None at all. Our offers are free and come with zero obligation. If it's not the right fit, no problem."
    }
  ];

  return (
    <section id="faq" className="py-16 sm:py-20 lg:py-24 bg-gradient-to-br from-gray-50 to-white">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12 sm:mb-16">
          <div className="inline-flex items-center justify-center w-16 h-16 bg-gradient-to-br from-cyan-50 to-cyan-100 rounded-full mb-6 border border-cyan-200">
            <FileText className="h-8 w-8 text-cyan-700" />
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight mb-4">
            <span className="bg-gradient-to-r from-gray-900 to-cyan-700 bg-clip-text text-transparent">
              Frequently Asked Questions
            </span>
          </h2>
          <p className="text-lg sm:text-xl text-muted-foreground max-w-2xl mx-auto">
            Get answers to the most common questions about our cash home buying process. 
            Still have questions? We're here to help.
          </p>
        </div>

        <div className="bg-white rounded-2xl border border-gray-200 shadow-sm p-6 sm:p-8">
          <Accordion type="single" collapsible className="w-full space-y-4">
            {faqData.map((faq, index) => (
              <AccordionItem 
                key={faq.id} 
                value={faq.id} 
                className="border border-gray-200 rounded-xl bg-white px-6 py-2 shadow-sm hover:shadow-md transition-all duration-200"
              >
                <AccordionTrigger className="hover:no-underline py-6 text-left">
                  <div className="flex items-center gap-4">
                    <div className="flex-shrink-0 w-10 h-10 bg-gradient-to-br from-cyan-50 to-cyan-100 rounded-full flex items-center justify-center border border-cyan-100">
                      {faq.icon}
                    </div>
                    <span className="font-semibold text-base sm:text-lg">{faq.question}</span>
                  </div>
                </AccordionTrigger>
                <AccordionContent className="pb-6 pt-2">
                  <div className="ml-14 text-muted-foreground leading-relaxed">
                    {faq.answer}
                  </div>
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>

        <div className="text-center mt-12">
          <div className="inline-flex items-center gap-2 text-sm text-cyan-700 bg-cyan-50 px-4 py-2 rounded-full border border-cyan-200 mb-8">
            <CheckCircle className="h-4 w-4 text-green-600" />
            <span>All offers are completely free with no obligation</span>
          </div>
          
          {/* CTA Button */}
          <div>
            <Button
              size="lg"
              className="h-14 px-8 text-lg font-semibold bg-gradient-to-r from-cyan-600 to-cyan-700 hover:from-cyan-700 hover:to-cyan-800 text-white shadow-lg hover:shadow-xl transition-all duration-300"
              onClick={() => {
                document.getElementById('hero-form')?.scrollIntoView({ behavior: 'smooth' });
              }}
            >
              Get Your Cash Offer Now
              <ArrowRight className="w-5 h-5 ml-2" />
            </Button>
            <p className="text-sm text-muted-foreground mt-3">
              Free • No obligation • 24-hour response
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};