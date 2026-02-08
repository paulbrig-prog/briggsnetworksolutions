import { Button } from "@/components/ui/button";
import { Mail, MapPin, Calendar, ArrowRight } from "lucide-react";

const Contact = () => {
  return (
    <section id="contact" className="py-24 hero-gradient relative overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-20 right-20 w-72 h-72 bg-accent rounded-full blur-[100px]" />
        <div className="absolute bottom-10 left-10 w-96 h-96 bg-accent rounded-full blur-[120px]" />
      </div>

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="max-w-4xl mx-auto">
          {/* Section Header */}
          <div className="text-center mb-12">
            <span className="inline-block text-accent font-semibold text-sm uppercase tracking-wider mb-4">
              Get Started
            </span>
            <h2 className="font-display font-bold text-3xl sm:text-4xl md:text-5xl text-primary-foreground mb-6">
              Ready to Work Smarter?
            </h2>
            <p className="text-lg text-primary-foreground/80 max-w-2xl mx-auto">
              Book your free 15-minute discovery call today. No obligation — let's explore 
              how AI can transform your business.
            </p>
          </div>

          {/* CTA Card */}
          <div className="bg-card rounded-2xl p-8 sm:p-12 shadow-elevated text-center">
            <div className="w-20 h-20 rounded-2xl accent-gradient flex items-center justify-center mx-auto mb-8 shadow-accent">
              <Calendar className="w-10 h-10 text-accent-foreground" />
            </div>

            <h3 className="font-display font-bold text-2xl sm:text-3xl text-foreground mb-4">
              Free 15-Minute Discovery Call
            </h3>
            <p className="text-muted-foreground mb-8 max-w-lg mx-auto">
              Tell us about your business challenges and we'll share how AI can help. 
              No technical knowledge required — just an open mind.
            </p>

            <Button variant="hero" size="xl" className="mb-8" asChild>
              <a href="https://calendar.app.google/C7N8GTXzNGus3MnZ6" target="_blank" rel="noopener noreferrer" className="group">
                Book Your Free Call
                <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </a>
            </Button>

            <div className="flex flex-col sm:flex-row items-center justify-center gap-6 text-sm text-muted-foreground">
              <div className="flex items-center gap-2">
                <Mail className="w-4 h-4 text-accent" />
                <a href="mailto:paulbrig@gmail.com" className="hover:text-foreground transition-colors">
                  paulbrig@gmail.com
                </a>
              </div>
              <div className="flex items-center gap-2">
                <MapPin className="w-4 h-4 text-accent" />
                <span>England, UK</span>
              </div>
            </div>
          </div>

          {/* Trust Message */}
          <p className="text-center text-primary-foreground/60 text-sm mt-8">
            Trusted across technology, property, professional services, and the charity sector · Funding intelligence via GoFundraise.ai
          </p>
        </div>
      </div>
    </section>
  );
};

export default Contact;
