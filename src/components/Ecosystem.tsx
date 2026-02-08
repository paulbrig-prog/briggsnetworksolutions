import { ArrowRight, Cog, Search, Layers } from "lucide-react";
import { Button } from "@/components/ui/button";

const Ecosystem = () => {
  return (
    <section id="ecosystem" className="py-24 bg-muted">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto">
          {/* Section Header */}
          <div className="text-center mb-16">
            <span className="inline-block text-accent font-semibold text-sm uppercase tracking-wider mb-4">
              Our Approach
            </span>
            <h2 className="font-display font-bold text-3xl sm:text-4xl md:text-5xl text-foreground mb-6">
              An Integrated Approach to AI & Funding Growth
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Many charities face two challenges: operational efficiency and sustainable funding growth.
            </p>
          </div>

          {/* Two Pillars */}
          <div className="grid md:grid-cols-2 gap-8 mb-12">
            {/* BNS Pillar */}
            <div className="bg-card border border-border rounded-2xl p-8 shadow-soft">
              <div className="w-14 h-14 rounded-xl bg-accent/10 flex items-center justify-center mb-6">
                <Cog className="w-7 h-7 text-accent" />
              </div>
              <h3 className="font-display font-bold text-xl text-foreground mb-3">
                Operational Systems
              </h3>
              <p className="text-muted-foreground leading-relaxed mb-4">
                Built through Briggs Network Solutions. AI workflow design, process automation, systems integration, and reporting.
              </p>
              <Button variant="outline" size="default" asChild>
                <a href="#services" className="group">
                  View Services
                  <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                </a>
              </Button>
            </div>

            {/* GoFundraise Pillar */}
            <div className="bg-card border border-border rounded-2xl p-8 shadow-soft">
              <div className="w-14 h-14 rounded-xl bg-accent/10 flex items-center justify-center mb-6">
                <Search className="w-7 h-7 text-accent" />
              </div>
              <h3 className="font-display font-bold text-xl text-foreground mb-3">
                Funding Intelligence
              </h3>
              <p className="text-muted-foreground leading-relaxed mb-4">
                Delivered via GoFundraise.ai. Grant research, funder targeting, and specialist funding intelligence for charities.
              </p>
              <Button variant="outline" size="default" asChild>
                <a href="https://gofundraise.ai" target="_blank" rel="noopener noreferrer" className="group">
                  Visit GoFundraise.ai
                  <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                </a>
              </Button>
            </div>
          </div>

          {/* Connected Statement */}
          <div className="bg-card border border-border rounded-2xl p-8 text-center shadow-soft">
            <div className="w-14 h-14 rounded-xl bg-accent/10 flex items-center justify-center mx-auto mb-6">
              <Layers className="w-7 h-7 text-accent" />
            </div>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto leading-relaxed">
              Through Briggs Network Solutions and GoFundraise.ai, organisations can access both 
              AI implementation and specialist funding intelligence within a connected ecosystem. 
              This ensures clarity, focus, and long-term scalability.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Ecosystem;
