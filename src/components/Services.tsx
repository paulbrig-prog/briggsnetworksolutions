import { Button } from "@/components/ui/button";
import { ArrowRight, Brain, Workflow, Link2, BarChart3, HeartHandshake } from "lucide-react";
import servicesImage from "@/assets/services-collaboration.jpg";

const Services = () => {
  const services = [
    {
      icon: Brain,
      title: "AI Strategy & Implementation",
      description: "Practical AI adoption tailored to your organisation. Use cases, workflow mapping, opportunity design.",
    },
    {
      icon: Workflow,
      title: "Workflow Automation",
      description: "Automating repetitive tasks across CRM, finance, reporting, and operations.",
    },
    {
      icon: Link2,
      title: "Systems Integration",
      description: "Connecting tools so data flows cleanly between platforms. No more manual duplication.",
    },
    {
      icon: BarChart3,
      title: "Data & Reporting Design",
      description: "Dashboards, structured reporting, decision support systems.",
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
            How We Can Help
          </h2>
          <p className="text-lg text-muted-foreground">
            Practical AI solutions tailored to your needs—from initial consultation to ongoing support.
          </p>
        </div>

        {/* Free Discovery Call Banner with Image */}
        <div className="bg-muted rounded-2xl overflow-hidden mb-12 flex flex-col lg:flex-row items-stretch">
          <div className="lg:w-1/3 h-48 lg:h-auto">
            <img 
              src={servicesImage} 
              alt="Consultant helping business owner" 
              className="w-full h-full object-cover"
            />
          </div>
          <div className="flex-1 p-6 sm:p-8 flex flex-col sm:flex-row items-center justify-between gap-6">
            <div className="text-center sm:text-left">
              <h3 className="font-display font-bold text-xl text-foreground mb-2">
                Start with a Free Strategy Call
              </h3>
              <p className="text-muted-foreground">
                No obligation. Let's explore how AI can help your organisation.
              </p>
            </div>
            <Button variant="hero" size="lg" asChild>
              <a href="https://calendar.app.google/C7N8GTXzNGus3MnZ6" target="_blank" rel="noopener noreferrer">
                Book Now — It's Free
                <ArrowRight className="w-4 h-4" />
              </a>
            </Button>
          </div>
        </div>

        {/* Services Grid */}
        <div className="grid md:grid-cols-2 gap-8 mb-12">
          {services.map((service) => (
            <div
              key={service.title}
              className="bg-card border border-border rounded-2xl p-8 shadow-soft hover:shadow-medium transition-all duration-300"
            >
              <div className="w-14 h-14 rounded-xl bg-accent/10 flex items-center justify-center mb-6">
                <service.icon className="w-7 h-7 text-accent" />
              </div>
              <h3 className="font-display font-bold text-xl text-foreground mb-3">
                {service.title}
              </h3>
              <p className="text-muted-foreground">
                {service.description}
              </p>
            </div>
          ))}
        </div>

        {/* Charity & Nonprofit Support - GoFundraise Partnership */}
        <div className="bg-muted border border-border rounded-2xl p-8 sm:p-10">
          <div className="flex flex-col md:flex-row items-start gap-8">
            <div className="w-14 h-14 rounded-xl bg-accent/10 flex items-center justify-center flex-shrink-0">
              <HeartHandshake className="w-7 h-7 text-accent" />
            </div>
            <div className="flex-1">
              <h3 className="font-display font-bold text-xl text-foreground mb-3">
                Charity & Nonprofit Support
              </h3>
              <p className="text-muted-foreground mb-4 leading-relaxed">
                I support charities with operational AI, process optimisation, and internal systems design.
              </p>
              <p className="text-muted-foreground mb-6 leading-relaxed">
                For grant research, funder targeting, and funding intelligence services, these are delivered exclusively via{" "}
                <a href="https://gofundraise.ai" target="_blank" rel="noopener noreferrer" className="text-foreground underline hover:opacity-70 font-semibold">
                  GoFundraise.ai
                </a>
                , a specialist platform I co-founded.
              </p>
              <Button variant="outline" size="lg" asChild>
                <a href="https://gofundraise.ai" target="_blank" rel="noopener noreferrer" className="group">
                  Visit GoFundraise.ai
                  <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                </a>
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Services;
