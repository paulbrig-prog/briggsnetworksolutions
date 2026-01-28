import { MapPin, Mail, Target, Eye } from "lucide-react";

const About = () => {
  return (
    <section id="about" className="py-24 bg-muted">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Left Column - Content */}
          <div>
            <span className="inline-block text-accent font-semibold text-sm uppercase tracking-wider mb-4">
              About Us
            </span>
            <h2 className="font-display font-bold text-3xl sm:text-4xl md:text-5xl text-foreground mb-6">
              Making AI Accessible for Everyone
            </h2>
            <p className="text-lg text-muted-foreground mb-8 leading-relaxed">
              BRIGGS NETWORK SOLUTIONS is a UK-based consultancy that helps small businesses 
              and charities adopt artificial intelligence to make daily work faster, easier, 
              and more efficient.
            </p>
            <p className="text-lg text-muted-foreground mb-8 leading-relaxed">
              By designing custom GPTs and workflow automations, we enable organisations to 
              save time, reduce admin, and improve productivity — without needing technical expertise.
            </p>

            {/* Founder Info */}
            <div className="bg-card rounded-xl p-6 border border-border shadow-soft">
              <div className="flex items-center gap-4 mb-4">
                <div className="w-14 h-14 rounded-full accent-gradient flex items-center justify-center">
                  <span className="text-accent-foreground font-display font-bold text-xl">PB</span>
                </div>
                <div>
                  <h3 className="font-display font-bold text-lg text-foreground">Paul Briggs</h3>
                  <p className="text-sm text-muted-foreground">Founder</p>
                </div>
              </div>
              <div className="flex flex-col sm:flex-row gap-4 text-sm text-muted-foreground">
                <div className="flex items-center gap-2">
                  <MapPin className="w-4 h-4 text-accent" />
                  <span>England, UK</span>
                </div>
                <div className="flex items-center gap-2">
                  <Mail className="w-4 h-4 text-accent" />
                  <a href="mailto:paulbrig@gmail.com" className="hover:text-accent transition-colors">
                    paulbrig@gmail.com
                  </a>
                </div>
              </div>
            </div>
          </div>

          {/* Right Column - Mission & Vision */}
          <div className="space-y-8">
            <div className="bg-card rounded-2xl p-8 border border-border shadow-soft">
              <div className="w-12 h-12 rounded-xl bg-accent/10 flex items-center justify-center mb-6">
                <Target className="w-6 h-6 text-accent" />
              </div>
              <h3 className="font-display font-bold text-xl text-foreground mb-4">
                Our Mission
              </h3>
              <p className="text-muted-foreground leading-relaxed">
                To make AI accessible, practical, and results-driven for everyday organisations — 
                helping them save time, reduce costs, and work smarter.
              </p>
            </div>

            <div className="bg-card rounded-2xl p-8 border border-border shadow-soft">
              <div className="w-12 h-12 rounded-xl bg-accent/10 flex items-center justify-center mb-6">
                <Eye className="w-6 h-6 text-accent" />
              </div>
              <h3 className="font-display font-bold text-xl text-foreground mb-4">
                Our Vision
              </h3>
              <p className="text-muted-foreground leading-relaxed">
                To become a trusted AI partner for businesses across the UK, known for 
                friendly support, efficiency, and real-world results.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
