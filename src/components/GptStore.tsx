import { Button } from "@/components/ui/button";
import { ArrowRight, Sparkles, Bot, Zap, ShoppingBag } from "lucide-react";

const GptStore = () => {
  const highlights = [
    { icon: Bot, label: "Pre-Built & Ready to Use" },
    { icon: Zap, label: "Instant Productivity Boost" },
    { icon: ShoppingBag, label: "Browse & Buy in Seconds" },
  ];

  return (
    <section id="gpt-store" className="py-24 bg-muted">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto">
          <div className="w-16 h-16 rounded-2xl bg-accent/10 flex items-center justify-center mx-auto mb-6">
            <Sparkles className="w-8 h-8 text-accent" />
          </div>
          <span className="inline-block text-accent font-semibold text-sm uppercase tracking-wider mb-4">
            GPT Store
          </span>
          <h2 className="font-display font-bold text-3xl sm:text-4xl md:text-5xl text-foreground mb-6">
            Ready-Made GPTs to Improve Your Life
          </h2>
          <p className="text-lg text-muted-foreground mb-10">
            Explore our collection of pre-built GPT tools designed to boost productivity, 
            streamline your workflows, and make everyday tasks easier — no technical setup required.
          </p>

          <div className="grid sm:grid-cols-3 gap-6 mb-10">
            {highlights.map((item) => (
              <div
                key={item.label}
                className="bg-card border border-border rounded-xl p-6 shadow-soft"
              >
                <div className="w-12 h-12 rounded-lg bg-accent/10 flex items-center justify-center mx-auto mb-4">
                  <item.icon className="w-6 h-6 text-accent" />
                </div>
                <p className="font-display font-bold text-foreground">{item.label}</p>
              </div>
            ))}
          </div>

          <Button variant="hero" size="lg" asChild>
            <a href="#" target="_blank" rel="noopener noreferrer">
              Browse & Buy GPTs
              <ArrowRight className="w-4 h-4" />
            </a>
          </Button>
        </div>
      </div>
    </section>
  );
};

export default GptStore;
