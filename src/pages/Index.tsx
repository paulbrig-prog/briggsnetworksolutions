import Header from "@/components/Header";
import Hero from "@/components/Hero";
import Audience from "@/components/Audience";
import Services from "@/components/Services";
import About from "@/components/About";
import Benefits from "@/components/Benefits";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen">
      <Header />
      <main>
        <Hero />
        <Audience />
        <Services />
        <About />
        <Benefits />
        <Contact />
      </main>
      <Footer />
    </div>
  );
};

export default Index;
