import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import { CalendarDays, Heart, Wine, Gift, Sparkles } from "lucide-react";

import serviceWeddings from "@/assets/service-weddings.jpg";
import serviceCatering from "@/assets/service-catering.jpg";
import serviceChristmas from "@/assets/service-christmas.jpg";
import serviceBabyShowers from "@/assets/service-baby-showers.jpg";
import serviceGraduations from "@/assets/service-graduations.jpg";
import serviceBirthdays from "@/assets/service-birthdays.jpg";

const services = [
  {
    name: "Weddings",
    description: "From intimate ceremonies to grand receptions, we craft breathtaking wedding decor that reflects your unique love story. Our designs feature luxurious floral arrangements, elegant drapery, and stunning tablescapes.",
    icon: "💍",
    filter: "weddings",
    image: serviceWeddings,
  },
  {
    name: "Catering Presentations",
    description: "Elevate your dining experience with our sophisticated catering display designs. We create beautiful buffet setups, charger plate arrangements, and table styling that complement your culinary offerings.",
    icon: "🍽️",
    filter: "catering",
    image: serviceCatering,
  },
  {
    name: "Christmas Events",
    description: "Transform your holiday gatherings into winter wonderlands. Our Christmas decor features festive centerpieces, twinkling lights, and elegant seasonal touches that capture the magic of the season.",
    icon: "🎄",
    filter: "christmas",
    image: serviceChristmas,
  },
  {
    name: "Baby Showers & Gender Reveal",
    description: "Celebrate new beginnings with our charming and creative party setups. From sweet pastel themes to dramatic reveal moments, we make every baby celebration memorable.",
    icon: "🍼",
    filter: "baby-showers",
    image: serviceBabyShowers,
  },
  {
    name: "Graduations",
    description: "Honor academic achievements with sophisticated graduation party decor. We create elegant backdrops, themed tablescapes, and celebration setups that mark this milestone in style.",
    icon: "🎓",
    filter: "graduations",
    image: serviceGraduations,
  },
  {
    name: "Birthdays",
    description: "From milestone celebrations to themed extravaganzas, we design birthday party decor that wows. Balloon installations, custom backdrops, and curated details for every age.",
    icon: "🎂",
    filter: "birthdays",
    image: serviceBirthdays,
  },
];

const slideInLeft = {
  hidden: { opacity: 0, x: -80 },
  visible: { opacity: 1, x: 0, transition: { duration: 0.7, ease: [0.25, 0.46, 0.45, 0.94] as const } },
};

const slideInRight = {
  hidden: { opacity: 0, x: 80 },
  visible: { opacity: 1, x: 0, transition: { duration: 0.7, ease: [0.25, 0.46, 0.45, 0.94] as const } },
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

      {/* Packages */}
      <section className="py-20">
        <div className="container mx-auto px-4 max-w-4xl">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-12"
          >
            <h2 className="text-3xl md:text-5xl font-serif font-bold mb-4">Our Packages</h2>
            <p className="text-muted-foreground max-w-xl mx-auto">
              Professional coordination so you can be fully present on your special day.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, delay: 0.15 }}
            className="border border-border rounded-2xl overflow-hidden"
          >
            {/* Package Header */}
            <div className="bg-secondary px-8 py-10 text-center">
              <p className="text-sm uppercase tracking-[0.2em] text-muted-foreground mb-2">Signature Package</p>
              <h3 className="text-2xl md:text-3xl font-serif font-bold mb-3">Day-of Coordination</h3>
              <p className="text-muted-foreground max-w-lg mx-auto text-sm leading-relaxed">
                We step in so you can step back and truly enjoy your celebration. Designed for couples who have planned their event but need a professional team to execute every detail flawlessly.
              </p>
            </div>

            {/* Package Details Accordion */}
            <div className="px-6 md:px-10 py-8">
              <Accordion type="multiple" defaultValue={["pre-event", "wedding-day", "reception", "personal"]} className="space-y-2">
                <AccordionItem value="pre-event" className="border rounded-xl px-5">
                  <AccordionTrigger className="hover:no-underline gap-3">
                    <span className="flex items-center gap-3 text-left">
                      <CalendarDays className="h-5 w-5 text-primary shrink-0" />
                      <span className="font-serif text-lg">Pre-Event Preparation</span>
                    </span>
                  </AccordionTrigger>
                  <AccordionContent>
                    <p className="text-xs uppercase tracking-widest text-muted-foreground mb-3">1–2 Weeks Before</p>
                    <ul className="space-y-2 text-muted-foreground">
                      <li>• Detailed wedding day timeline creation</li>
                      <li>• Vendor confirmation & final logistics review</li>
                      <li>• Timeline distribution to all vendors & bridal party</li>
                      <li>• Final venue walkthrough (if required)</li>
                      <li>• Floor plan & layout confirmation</li>
                    </ul>
                  </AccordionContent>
                </AccordionItem>

                <AccordionItem value="wedding-day" className="border rounded-xl px-5">
                  <AccordionTrigger className="hover:no-underline gap-3">
                    <span className="flex items-center gap-3 text-left">
                      <Heart className="h-5 w-5 text-primary shrink-0" />
                      <span className="font-serif text-lg">Wedding Day Management</span>
                    </span>
                  </AccordionTrigger>
                  <AccordionContent>
                    <ul className="space-y-2 text-muted-foreground">
                      <li>• Primary point of contact for all vendors</li>
                      <li>• Oversee setup of décor, signage & personal items</li>
                      <li>• Ceremony lineup & processional coordination</li>
                      <li>• Cue music, photographer & key moments</li>
                      <li>• Ensure timeline flows seamlessly</li>
                    </ul>
                  </AccordionContent>
                </AccordionItem>

                <AccordionItem value="reception" className="border rounded-xl px-5">
                  <AccordionTrigger className="hover:no-underline gap-3">
                    <span className="flex items-center gap-3 text-left">
                      <Wine className="h-5 w-5 text-primary shrink-0" />
                      <span className="font-serif text-lg">Reception Oversight</span>
                    </span>
                  </AccordionTrigger>
                  <AccordionContent>
                    <ul className="space-y-2 text-muted-foreground">
                      <li>• Coordinate grand entrance & formal dances</li>
                      <li>• Manage speeches & program flow</li>
                      <li>• Assist with cake cutting & special moments</li>
                      <li>• Troubleshoot any unexpected issues discreetly</li>
                      <li>• Support bridal party & immediate family</li>
                    </ul>
                  </AccordionContent>
                </AccordionItem>

                <AccordionItem value="personal" className="border-none rounded-xl border px-5">
                  <AccordionTrigger className="hover:no-underline gap-3">
                    <span className="flex items-center gap-3 text-left">
                      <Gift className="h-5 w-5 text-primary shrink-0" />
                      <span className="font-serif text-lg">Personal Touch & Wrap-Up</span>
                    </span>
                  </AccordionTrigger>
                  <AccordionContent>
                    <ul className="space-y-2 text-muted-foreground">
                      <li>• Set up guest book, card table & memory displays</li>
                      <li>• Handle décor adjustments as needed</li>
                      <li>• Secure gifts & personal items at end of night</li>
                      <li>• Final venue check before departure</li>
                    </ul>
                  </AccordionContent>
                </AccordionItem>
              </Accordion>
            </div>

            {/* Why Choose Us + CTA */}
            <div className="bg-secondary/50 px-8 py-10 text-center space-y-6">
              <div className="flex items-center justify-center gap-2 text-primary">
                <Sparkles className="h-4 w-4" />
                <p className="text-sm uppercase tracking-[0.15em] font-medium">Why Choose Haus of Posh?</p>
                <Sparkles className="h-4 w-4" />
              </div>
              <p className="text-muted-foreground max-w-lg mx-auto text-sm leading-relaxed">
                We specialize in elegant, culturally rich celebrations — including Lebanese and multicultural weddings — and understand the importance of family, tradition, and seamless flow.
              </p>
              <p className="font-serif text-lg italic">You celebrate. We coordinate.</p>
              <Link to="/contact">
                <Button className="rounded-full px-8 mt-2 font-sans tracking-wide">
                  Book a Consultation
                </Button>
              </Link>
            </div>
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
              variants={i % 2 === 0 ? slideInLeft : slideInRight}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: "-50px" }}
              className={`flex flex-col md:flex-row items-center gap-12 ${i % 2 === 1 ? "md:flex-row-reverse" : ""}`}
            >
              <motion.div
                className="w-full md:w-1/2 aspect-[4/3] rounded-lg overflow-hidden group"
                whileHover={{ scale: 1.02 }}
                transition={{ duration: 0.4 }}
              >
                <img
                  src={service.image}
                  alt={service.name}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  loading="lazy"
                />
              </motion.div>

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
