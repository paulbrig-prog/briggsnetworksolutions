import { Clock, Wallet, Brain, HeartHandshake, Lightbulb, Shield } from "lucide-react";
import benefitsImage from "@/assets/benefits-automation.jpg";

const Benefits = () => {
  const benefits = [
    {
      icon: Clock,
      title: "Save Precious Time",
      description: "Automate repetitive admin tasks and free up hours every week for what matters most.",
    },
    {
      icon: Wallet,
      title: "Reduce Costs",
      description: "Affordable AI solutions designed for small business budgets with measurable ROI.",
    },
    {
      icon: Brain,
      title: "No Tech Expertise Needed",
      description: "We handle the technical complexity. You get simple, easy-to-use solutions.",
    },
    {
      icon: HeartHandshake,
      title: "Friendly UK Support",
      description: "Personal, approachable service from a UK-based consultant who understands your challenges.",
    },
    {
      icon: Lightbulb,
      title: "Custom Solutions",
      description: "Every GPT and workflow is tailored specifically to your business operations.",
    },
    {
      icon: Shield,
      title: "Trusted & Reliable",
      description: "Proven methods and ongoing support ensure your AI solutions deliver real results.",
    },
  ];

  return (
    <section id="benefits" className="py-24 bg-background">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header with Image */}
        <div className="grid lg:grid-cols-2 gap-12 items-center mb-16">
          <div className="text-center lg:text-left">
            <span className="inline-block text-accent font-semibold text-sm uppercase tracking-wider mb-4">
              Why Choose Us
            </span>
            <h2 className="font-display font-bold text-3xl sm:text-4xl md:text-5xl text-foreground mb-6">
              Built for Businesses Like Yours
            </h2>
            <p className="text-lg text-muted-foreground">
              We understand the challenges small businesses and charities face. Our solutions are designed 
              to deliver real value without the complexity.
            </p>
          </div>
          <div className="relative">
            <img 
              src={benefitsImage} 
              alt="AI automation and workflow technology" 
              className="w-full rounded-2xl shadow-elevated"
            />
            <div className="absolute inset-0 rounded-2xl bg-gradient-to-t from-primary/20 to-transparent" />
          </div>
        </div>

        {/* Benefits Grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {benefits.map((benefit, index) => (
            <div
              key={benefit.title}
              className="group bg-card rounded-2xl p-8 border border-border shadow-soft hover:shadow-medium transition-all duration-300 hover:-translate-y-1"
            >
              <div className="w-14 h-14 rounded-xl bg-accent/10 flex items-center justify-center mb-6 group-hover:bg-accent/20 transition-colors">
                <benefit.icon className="w-7 h-7 text-accent" />
              </div>
              <h3 className="font-display font-bold text-xl text-foreground mb-3">
                {benefit.title}
              </h3>
              <p className="text-muted-foreground leading-relaxed">
                {benefit.description}
              </p>
            </div>
          ))}
        </div>

        {/* Target Market */}
        <div className="mt-20 bg-primary rounded-2xl p-8 sm:p-12 text-center">
          <h3 className="font-display font-bold text-2xl sm:text-3xl text-primary-foreground mb-6">
            Who We Work With
          </h3>
          <div className="grid sm:grid-cols-3 gap-6 max-w-3xl mx-auto">
            {[
              { label: "Small Businesses", sublabel: "1–50 employees" },
              { label: "Charities & Nonprofits", sublabel: "Making a difference" },
              { label: "Entrepreneurs", sublabel: "Ready to scale" },
            ].map((item) => (
              <div key={item.label} className="bg-primary-foreground/10 rounded-xl p-6 backdrop-blur-sm">
                <p className="font-display font-bold text-lg text-primary-foreground mb-1">
                  {item.label}
                </p>
                <p className="text-sm text-primary-foreground/70">{item.sublabel}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Benefits;
