import { Building2, Heart, Rocket } from "lucide-react";

const audiences = [
  {
    icon: Building2,
    title: "Small Businesses",
    description: "1–50 employees",
  },
  {
    icon: Heart,
    title: "Charities & Nonprofits",
    description: "Making a difference",
  },
  {
    icon: Rocket,
    title: "Entrepreneurs",
    description: "Ready to scale",
  },
];

const Audience = () => {
  return (
    <section className="py-20 bg-background">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <span className="inline-block text-accent font-semibold text-sm uppercase tracking-wider mb-4">
            Our Clients
          </span>
          <h2 className="font-display font-bold text-3xl sm:text-4xl md:text-5xl text-foreground">
            Who We Work With
          </h2>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-3 gap-8 max-w-4xl mx-auto">
          {audiences.map((item) => (
            <div
              key={item.title}
              className="flex flex-col items-center text-center bg-card rounded-2xl p-8 border border-border shadow-soft hover:shadow-md transition-shadow"
            >
              <div className="w-14 h-14 rounded-xl bg-accent/10 flex items-center justify-center mb-5">
                <item.icon className="w-7 h-7 text-accent" />
              </div>
              <h3 className="font-display font-bold text-xl text-foreground mb-2">
                {item.title}
              </h3>
              <p className="text-muted-foreground text-sm">{item.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Audience;
