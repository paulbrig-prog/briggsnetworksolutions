import Header from "@/components/Header";
import Hero from "@/components/Hero";
import Services from "@/components/Services";
import GptStore from "@/components/GptStore";
import About from "@/components/About";
import Ecosystem from "@/components/Ecosystem";
import Benefits from "@/components/Benefits";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen">
      <Header />
      <main>
        <Hero />
        <Services />
        <GptStore />
        <About />
        <Ecosystem />
        <Benefits />
        <Contact />
      </main>
      <Footer />
    </div>
  );
};

export default Index;
