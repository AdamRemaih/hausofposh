import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <footer className="bg-foreground text-background py-12">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row items-center justify-between gap-6">
          <Link to="/" className="font-serif text-xl font-bold tracking-wide">
            HAUS <span className="text-primary">of</span> POSH
          </Link>
          <nav className="flex flex-wrap justify-center gap-6">
            {["Home", "Services", "Gallery", "Rentals", "About & Contact"].map((label) => (
              <Link
                key={label}
                to={label === "Home" ? "/" : label === "About & Contact" ? "/about-contact" : `/${label.toLowerCase()}`}
                className="text-sm text-background/70 hover:text-primary transition-colors tracking-wide uppercase"
              >
                {label}
              </Link>
            ))}
          </nav>
        </div>
        <div className="border-t border-background/20 mt-8 pt-8 text-center">
          <p className="text-sm text-background/60">
            © 2026 Haus of Posh. All rights reserved. Designed & developed by Adam Remaih
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
