const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-foreground py-12">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row items-center justify-between gap-6">
          {/* Logo */}
          <div className="flex items-center gap-2">
            <div className="w-10 h-10 rounded-lg accent-gradient flex items-center justify-center">
              <span className="text-accent-foreground font-display font-bold text-lg">B</span>
            </div>
            <div>
              <span className="font-display font-bold text-background">BRIGGS</span>
              <span className="font-display font-medium text-background/60 ml-1">Network Solutions</span>
            </div>
          </div>

          {/* Links */}
          <nav className="flex flex-wrap items-center justify-center gap-6">
            <a href="#services" className="text-sm text-background/70 hover:text-background transition-colors">
              Services
            </a>
            <a href="#about" className="text-sm text-background/70 hover:text-background transition-colors">
              About
            </a>
            <a href="#benefits" className="text-sm text-background/70 hover:text-background transition-colors">
              Why Us
            </a>
            <a href="#contact" className="text-sm text-background/70 hover:text-background transition-colors">
              Contact
            </a>
          </nav>

          {/* Copyright */}
          <p className="text-sm text-background/50">
            © {currentYear} Briggs Network Solutions
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
