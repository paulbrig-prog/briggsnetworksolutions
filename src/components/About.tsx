import { MapPin, Mail, Target, Eye } from "lucide-react";
import paulHeadshot from "@/assets/paul-headshot.png";

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
            <p className="text-lg text-muted-foreground mb-6 leading-relaxed">
              Paul is an AI systems architect and technology leader with 25+ years of experience 
              building the digital infrastructure that keeps organisations running efficiently.
            </p>
            <p className="text-lg text-muted-foreground mb-6 leading-relaxed">
              After a long career designing secure network and cloud environments for major companies, 
              he shifted into AI workflow design and automation — crafting practical systems that 
              remove repetitive admin and bring clarity to complex operations.
            </p>
            <p className="text-lg text-muted-foreground mb-6 leading-relaxed">
              Through Briggs Network Solutions, Paul specialises in transforming messy, time-consuming 
              processes into simple, reliable, AI-powered workflows that free teams to focus on 
              impact rather than manual tasks.
            </p>
            <p className="text-lg text-muted-foreground mb-6 leading-relaxed">
              Paul believes AI should feel supportive, accessible, and genuinely useful. His mission 
              is to give small businesses and charities tools that save time, reduce costs, and help 
              overstretched teams work with confidence. For charity-specific funding intelligence 
              and grant research, Paul works in partnership with{" "}
              <a href="https://gofundraise.ai" target="_blank" rel="noopener noreferrer" className="text-accent hover:underline font-semibold">
                GoFundraise.ai
              </a>.
            </p>

            {/* Boundary Statement */}
            <div className="bg-muted rounded-xl p-5 border border-border mb-8">
              <p className="text-sm text-muted-foreground leading-relaxed">
                Paul Briggs is a co-founder of GoFundraise.ai. All funding intelligence and grant research 
                services for the charity sector are delivered through GoFundraise.ai to ensure platform alignment, 
                shared IP development, and strategic consistency.
              </p>
            </div>

            {/* Founder Info */}
            <div className="bg-card rounded-xl p-6 border border-border shadow-soft">
              <div className="flex items-center gap-4 mb-4">
                <img 
                  src={paulHeadshot} 
                  alt="Paul Briggs" 
                  className="w-14 h-14 rounded-full object-cover"
                />
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
