import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import heroBg from "@/assets/hero-bg.jpg";

const services = [
  { name: "Weddings", description: "Breathtaking wedding decor that tells your love story.", icon: "💍" },
  { name: "Catering", description: "Elegant table settings and catering presentations.", icon: "🍽️" },
  { name: "Christmas", description: "Festive holiday decor that sparkles and delights.", icon: "🎄" },
  { name: "Baby Showers & Gender Reveal", description: "Sweet and memorable celebration setups.", icon: "🍼" },
  { name: "Graduations", description: "Celebrate achievements with stunning decor.", icon: "🎓" },
  { name: "Birthdays", description: "Unforgettable birthday party transformations.", icon: "🎂" },
];

const fadeUp = {
  hidden: { opacity: 0, y: 30 },
  visible: (i: number) => ({
    opacity: 1, y: 0,
    transition: { delay: i * 0.1, duration: 0.6, ease: [0.25, 0.46, 0.45, 0.94] as const },
  }),
};

const Index = () => {
  return (
    <div className="min-h-screen">
      {/* Hero */}
      <section className="relative h-screen flex items-center justify-center overflow-hidden">
        <img
          src={heroBg}
          alt="Elegant event decoration"
          className="absolute inset-0 w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-foreground/50" />
        <div className="relative z-10 text-center text-background px-4 max-w-3xl">
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-4xl md:text-6xl lg:text-7xl font-serif font-bold leading-tight mb-6"
          >
            Elegant Event Decor for Every Occasion
          </motion.h1>
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.4, duration: 0.6 }}
            className="text-lg md:text-xl mb-8 text-background/90 font-light"
          >
            Transforming your vision into unforgettable experiences
          </motion.p>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.6, duration: 0.6 }}
            className="flex flex-col sm:flex-row gap-4 justify-center"
          >
            <Link to="/gallery">
              <Button size="lg" className="rounded-full px-8 text-base font-sans tracking-wide">
                View Gallery
              </Button>
            </Link>
            <Link to="/services">
              <Button size="lg" variant="outline" className="rounded-full px-8 text-base font-sans tracking-wide border-background text-background hover:bg-background hover:text-foreground">
                View Services
              </Button>
            </Link>
          </motion.div>
        </div>
      </section>

      {/* Services Grid */}
      <section className="py-24 bg-secondary">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl md:text-5xl font-serif font-bold mb-4">Our Services</h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              From intimate gatherings to grand celebrations, we bring elegance and sophistication to every event.
            </p>
          </motion.div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((service, i) => (
              <motion.div
                key={service.name}
                custom={i}
                variants={fadeUp}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                className="bg-background rounded-lg p-8 text-center shadow-sm hover:shadow-md transition-shadow border border-border group cursor-pointer"
              >
                <div className="text-5xl mb-4">{service.icon}</div>
                <h3 className="text-xl font-serif font-semibold mb-3">{service.name}</h3>
                <p className="text-muted-foreground text-sm mb-6">{service.description}</p>
                <Link to="/services" className="text-primary text-sm font-medium hover:underline tracking-wide uppercase">
                  Learn More →
                </Link>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Our Work */}
      <section className="py-24">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl md:text-5xl font-serif font-bold mb-4">Our Work</h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              A glimpse into the magic we create for our clients.
            </p>
          </motion.div>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {[1, 2, 3, 4].map((n) => (
              <motion.div
                key={n}
                initial={{ opacity: 0, scale: 0.95 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: n * 0.1, duration: 0.5 }}
                className="aspect-[3/4] bg-secondary rounded-lg overflow-hidden group"
              >
                <div className="w-full h-full bg-gradient-to-br from-primary/20 to-secondary flex items-center justify-center">
                  <span className="text-muted-foreground text-sm italic">Photo {n}</span>
                </div>
              </motion.div>
            ))}
          </div>
          <div className="text-center mt-10">
            <Link to="/gallery">
              <Button variant="outline" className="rounded-full px-8 font-sans tracking-wide">
                View Full Gallery
              </Button>
            </Link>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-24 bg-primary text-primary-foreground">
        <div className="container mx-auto px-4 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-3xl md:text-5xl font-serif font-bold mb-6">
              Let's Start Planning Your Perfect Event
            </h2>
            <p className="text-primary-foreground/80 max-w-xl mx-auto mb-8 text-lg">
              Every detail matters. Let us bring your vision to life with elegance and style.
            </p>
            <Link to="/contact">
              <Button
                size="lg"
                variant="outline"
                className="rounded-full px-10 text-base font-sans tracking-wide border-primary-foreground text-primary-foreground hover:bg-primary-foreground hover:text-primary"
              >
                Book a Consultation
              </Button>
            </Link>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default Index;
