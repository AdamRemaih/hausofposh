import { motion } from "framer-motion";

const About = () => {
  return (
    <div className="min-h-screen pt-20">
      {/* Hero */}
      <section className="py-20 bg-secondary">
        <div className="container mx-auto px-4 text-center">
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-4xl md:text-6xl font-serif font-bold mb-4"
          >
            About Us
          </motion.h1>
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.3, duration: 0.6 }}
            className="text-muted-foreground max-w-2xl mx-auto text-lg"
          >
            The story behind Haus of Posh
          </motion.p>
        </div>
      </section>

      {/* About Content */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row items-center gap-12 max-w-5xl mx-auto">
            {/* Photo placeholder */}
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="w-64 h-80 bg-secondary rounded-lg flex items-center justify-center shrink-0 shadow-sm"
            >
              <span className="text-muted-foreground text-sm italic">Co-founder photo</span>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.2 }}
            >
              <h2 className="text-3xl md:text-4xl font-serif font-bold mb-6">Haus of Posh</h2>
              <p className="text-muted-foreground leading-relaxed text-lg">
                Haus of Posh was founded with a passion for creating unforgettable experiences through elegant event decoration. 
                We believe every celebration deserves to be extraordinary — from the grandest wedding to the most intimate gathering. 
                Our team brings creativity, attention to detail, and a touch of luxury to every event we design. 
                With a curated collection of premium decor and a commitment to excellence, we transform spaces into breathtaking settings 
                that leave lasting impressions.
              </p>
            </motion.div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default About;
