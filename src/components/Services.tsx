import { Button } from "@/components/ui/button";
import { Check, Zap, Rocket, Users, GraduationCap, ArrowRight } from "lucide-react";

const Services = () => {
  const tiers = [
    {
      name: "AI Kickstart",
      description: "For businesses new to AI",
      price: "£500–650",
      icon: Zap,
      features: [
        "1-hour discovery session",
        "1 workflow setup",
        "Mini training session",
        "Getting started guide",
      ],
      popular: false,
    },
    {
      name: "AI Workflow System",
      description: "For teams ready to automate daily operations",
      price: "£795–995",
      icon: Rocket,
      features: [
        "Complete AI audit",
        "2–3 GPT or workflow builds",
        "Full staff training",
        "10 days support included",
      ],
      popular: true,
    },
    {
      name: "AI Partner Plan",
      description: "For long-term support and improvement",
      price: "£350–750",
      priceLabel: "/ month",
      icon: Users,
      features: [
        "Monthly advisory sessions",
        "Continuous AI updates",
        "Performance monitoring",
        "Priority support",
      ],
      popular: false,
    },
  ];

  return (
    <section id="services" className="py-24 bg-background">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="inline-block text-accent font-semibold text-sm uppercase tracking-wider mb-4">
            Our Services
          </span>
          <h2 className="font-display font-bold text-3xl sm:text-4xl md:text-5xl text-foreground mb-6">
            Choose Your AI Journey
          </h2>
          <p className="text-lg text-muted-foreground">
            From getting started to ongoing partnership, we have a solution tailored to your needs and budget.
          </p>
        </div>

        {/* Free Discovery Call Banner */}
        <div className="bg-muted rounded-2xl p-6 sm:p-8 mb-12 flex flex-col sm:flex-row items-center justify-between gap-6">
          <div className="text-center sm:text-left">
            <h3 className="font-display font-bold text-xl text-foreground mb-2">
              Start with a Free 15-Minute Discovery Call
            </h3>
            <p className="text-muted-foreground">
              No obligation. Let's explore how AI can help your business.
            </p>
          </div>
          <Button variant="hero" size="lg" asChild>
            <a href="#contact">
              Book Now — It's Free
              <ArrowRight className="w-4 h-4" />
            </a>
          </Button>
        </div>

        {/* Pricing Cards */}
        <div className="grid md:grid-cols-3 gap-8">
          {tiers.map((tier, index) => (
            <div
              key={tier.name}
              className={`relative rounded-2xl p-8 transition-all duration-300 hover:scale-[1.02] ${
                tier.popular
                  ? "bg-primary text-primary-foreground shadow-elevated"
                  : "bg-card border border-border shadow-soft hover:shadow-medium"
              }`}
            >
              {tier.popular && (
                <div className="absolute -top-4 left-1/2 -translate-x-1/2">
                  <span className="accent-gradient text-accent-foreground text-xs font-bold uppercase tracking-wider px-4 py-1.5 rounded-full">
                    Most Popular
                  </span>
                </div>
              )}

              <div className={`w-14 h-14 rounded-xl flex items-center justify-center mb-6 ${
                tier.popular ? "bg-primary-foreground/10" : "bg-accent/10"
              }`}>
                <tier.icon className={`w-7 h-7 ${tier.popular ? "text-accent" : "text-accent"}`} />
              </div>

              <h3 className={`font-display font-bold text-2xl mb-2 ${
                tier.popular ? "text-primary-foreground" : "text-foreground"
              }`}>
                {tier.name}
              </h3>
              <p className={`text-sm mb-6 ${
                tier.popular ? "text-primary-foreground/70" : "text-muted-foreground"
              }`}>
                {tier.description}
              </p>

              <div className="mb-8">
                <span className={`font-display font-bold text-4xl ${
                  tier.popular ? "text-primary-foreground" : "text-foreground"
                }`}>
                  {tier.price}
                </span>
                {tier.priceLabel && (
                  <span className={`text-sm ${
                    tier.popular ? "text-primary-foreground/70" : "text-muted-foreground"
                  }`}>
                    {tier.priceLabel}
                  </span>
                )}
              </div>

              <ul className="space-y-4 mb-8">
                {tier.features.map((feature) => (
                  <li key={feature} className="flex items-start gap-3">
                    <div className={`w-5 h-5 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5 ${
                      tier.popular ? "bg-accent" : "bg-accent/20"
                    }`}>
                      <Check className={`w-3 h-3 ${
                        tier.popular ? "text-accent-foreground" : "text-accent"
                      }`} />
                    </div>
                    <span className={`text-sm ${
                      tier.popular ? "text-primary-foreground/90" : "text-foreground"
                    }`}>
                      {feature}
                    </span>
                  </li>
                ))}
              </ul>

              <Button
                variant={tier.popular ? "hero" : "outline"}
                className="w-full"
                size="lg"
                asChild
              >
                <a href="#contact">Get Started</a>
              </Button>
            </div>
          ))}
        </div>

        {/* Workshops Add-on */}
        <div className="mt-12 bg-card border border-border rounded-2xl p-8 shadow-soft">
          <div className="flex flex-col md:flex-row items-center gap-8">
            <div className="w-16 h-16 rounded-xl bg-accent/10 flex items-center justify-center flex-shrink-0">
              <GraduationCap className="w-8 h-8 text-accent" />
            </div>
            <div className="flex-1 text-center md:text-left">
              <h3 className="font-display font-bold text-xl text-foreground mb-2">
                Team Workshops
              </h3>
              <p className="text-muted-foreground">
                "AI for Small Business" or custom team training. Hands-on learning sessions for small groups.
              </p>
            </div>
            <div className="text-center md:text-right flex-shrink-0">
              <p className="font-display font-bold text-2xl text-foreground">£195<span className="text-base font-normal text-muted-foreground"> / attendee</span></p>
              <p className="text-muted-foreground text-sm">or £795 / team</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Services;
