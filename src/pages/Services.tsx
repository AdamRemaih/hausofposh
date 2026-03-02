import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";

const services = [
  {
    name: "Weddings",
    description: "From intimate ceremonies to grand receptions, we craft breathtaking wedding decor that reflects your unique love story. Our designs feature luxurious floral arrangements, elegant drapery, and stunning tablescapes.",
    icon: "💍",
    filter: "weddings",
  },
  {
    name: "Catering Presentations",
    description: "Elevate your dining experience with our sophisticated catering display designs. We create beautiful buffet setups, charger plate arrangements, and table styling that complement your culinary offerings.",
    icon: "🍽️",
    filter: "catering",
  },
  {
    name: "Christmas Events",
    description: "Transform your holiday gatherings into winter wonderlands. Our Christmas decor features festive centerpieces, twinkling lights, and elegant seasonal touches that capture the magic of the season.",
    icon: "🎄",
    filter: "christmas",
  },
  {
    name: "Baby Showers & Gender Reveal",
    description: "Celebrate new beginnings with our charming and creative party setups. From sweet pastel themes to dramatic reveal moments, we make every baby celebration memorable.",
    icon: "🍼",
    filter: "baby-showers",
  },
  {
    name: "Graduations",
    description: "Honor academic achievements with sophisticated graduation party decor. We create elegant backdrops, themed tablescapes, and celebration setups that mark this milestone in style.",
    icon: "🎓",
    filter: "graduations",
  },
  {
    name: "Birthdays",
    description: "From milestone celebrations to themed extravaganzas, we design birthday party decor that wows. Balloon installations, custom backdrops, and curated details for every age.",
    icon: "🎂",
    filter: "birthdays",
  },
];

const fadeUp = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: [0.25, 0.46, 0.45, 0.94] as const } },
};

const Services = () => {
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
            Our Services
          </motion.h1>
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.3, duration: 0.6 }}
            className="text-muted-foreground max-w-2xl mx-auto text-lg"
          >
            We offer a complete range of event decoration services, tailored to make your special moments truly unforgettable.
          </motion.p>
        </div>
      </section>

      {/* Packages Placeholder */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="bg-muted rounded-lg p-12 text-center"
          >
            <h2 className="text-2xl md:text-4xl font-serif font-bold mb-4">Our Packages</h2>
            <p className="text-muted-foreground italic">Packages coming soon — stay tuned for our curated event decoration packages.</p>
          </motion.div>
        </div>
      </section>

      {/* Service Sections */}
      <section className="pb-24">
        <div className="container mx-auto px-4 space-y-20">
          {services.map((service, i) => (
            <motion.div
              key={service.name}
              id={service.filter}
              variants={fadeUp}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              className={`flex flex-col md:flex-row items-center gap-12 ${i % 2 === 1 ? "md:flex-row-reverse" : ""}`}
            >
              {/* Image placeholder */}
              <div className="w-full md:w-1/2 aspect-[4/3] bg-secondary rounded-lg overflow-hidden flex items-center justify-center">
                <div className="text-center">
                  <span className="text-6xl block mb-3">{service.icon}</span>
                  <span className="text-muted-foreground text-sm italic">Service photo</span>
                </div>
              </div>

              {/* Content */}
              <div className="w-full md:w-1/2">
                <h3 className="text-2xl md:text-3xl font-serif font-bold mb-4">{service.name}</h3>
                <p className="text-muted-foreground mb-8 leading-relaxed">{service.description}</p>
                <div className="flex flex-col sm:flex-row gap-4">
                  <Link to={`/gallery?filter=${service.filter}`}>
                    <Button variant="outline" className="rounded-full px-6 font-sans tracking-wide">
                      View Gallery
                    </Button>
                  </Link>
                  <Link to="/contact">
                    <Button className="rounded-full px-6 font-sans tracking-wide">
                      Book a Consultation
                    </Button>
                  </Link>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </section>
    </div>
  );
};

export default Services;
