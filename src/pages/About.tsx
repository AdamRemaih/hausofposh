import { motion } from "framer-motion";
import cofounderImg from "@/assets/cofounder.jpg";

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
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="shrink-0"
            >
              <img
                src={cofounderImg}
                alt="Rima – Founder & Creative Director of Haus of Posh"
                className="w-64 h-80 object-cover rounded-lg shadow-lg"
              />
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.2 }}
            >
              <h2 className="text-3xl md:text-4xl font-serif font-bold mb-2">Meet Rima</h2>
              <p className="text-primary font-medium text-lg mb-6">Founder & Creative Director of Haus of Posh</p>

              <div className="space-y-4 text-muted-foreground leading-relaxed text-lg">
                <p>
                  Hi, I'm Rima – the creative soul and visionary behind Haus of Posh. What began as a passion for design and meaningful celebration has grown into a full-service décor company built on elegance, intention, and unforgettable details.
                </p>
                <p>
                  I've always believed that every event should feel like a reflection of the people it celebrates. That belief led me to create Haus of Posh—a space where thoughtful design meets timeless beauty. Whether it's an opulent wedding or an intimate gathering, I approach each event with heart, creativity, and an unwavering attention to detail.
                </p>
                <p>
                  At Haus of Posh, I pour my energy into curating event experiences that are not only visually stunning but deeply personal. Every element is chosen with purpose, and every design tells a story—your story.
                </p>
                <p className="italic">
                  Every event is a canvas, and I'm honoured to help you bring your vision to life.
                </p>
                <p className="mt-6 font-medium text-foreground">
                  With love and intention,<br />
                  <span className="font-serif text-xl">Rima</span><br />
                  <span className="text-sm text-muted-foreground">Founder & Creative Director, Haus of Posh</span>
                </p>
              </div>
            </motion.div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default About;
