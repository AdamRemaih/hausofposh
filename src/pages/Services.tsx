import { Link, useLocation } from "react-router-dom";
import { useEffect } from "react";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import { CalendarDays, Heart, Wine, Gift, Sparkles, Palette, Flower2, Lamp, Star, ClipboardCheck } from "lucide-react";

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
    filter: "weddings-and-engagements",
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

const scrollToSection = (id: string) => {
  const el = document.getElementById(id);
  if (el) el.scrollIntoView({ behavior: "smooth" });
};

const Services = () => {
  const location = useLocation();

  useEffect(() => {
    if (location.hash) {
      const el = document.getElementById(location.hash.replace("#", ""));
      if (el) {
        setTimeout(() => {
          el.scrollIntoView({ behavior: "smooth" });
        }, 100);
      }
    }
  }, [location]);
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
            className="text-muted-foreground max-w-2xl mx-auto text-lg mb-8"
          >
            We offer a complete range of event decoration services, tailored to make your special moments truly unforgettable.
          </motion.p>

          {/* Two Package Buttons */}
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5, duration: 0.5 }}
            className="flex flex-col sm:flex-row items-center justify-center gap-4"
          >
            <Button
              onClick={() => scrollToSection("full-event-design")}
              className="rounded-full px-8 font-sans tracking-wide text-base"
              size="lg"
            >
              Full Event Design
            </Button>
            <Button
              onClick={() => scrollToSection("day-of-coordination")}
              variant="outline"
              className="rounded-full px-8 font-sans tracking-wide text-base"
              size="lg"
            >
              Day-of Coordination
            </Button>
          </motion.div>
        </div>
      </section>

      {/* Service Sections */}
      <section className="py-24 pb-24">
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

                  {service.filter === "catering" && (
                    <Link to="/services#catering-menu">
                      <Button variant="outline" className="rounded-full px-6 font-sans tracking-wide">
                        View Menu
                      </Button>
                    </Link>
                  )}

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

      {/* Catering Menu Section */}
      <section id="catering-menu" className="py-24 bg-secondary/20">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-14">
              <div className="w-20 h-px bg-primary/40 mx-auto mb-5"></div>

              <h2 className="text-4xl md:text-6xl font-serif font-bold mb-4">
                Catering Menu
              </h2>

              <p className="text-muted-foreground text-base md:text-lg">
                Pita Basket Catering • 3221 Sunridge Way N.E • Halal
              </p>

              <div className="w-20 h-px bg-primary/40 mx-auto mt-5"></div>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {[
                {
                  title: "Savory Items",
                  icon: "🍽️",
                  items: [
                    "Mini meat, spinach, zaatar & cheese pies",
                    "Zaatar rolls, sambousik cheese, labneh",
                    "Mixed vegetable tray, olives, kubbi balls",
                    "Tabouli / falafel / hummus mini cups",
                    "Samosa, shrimp cocktail, grape leaves",
                    "½ sandwich wraps: beef, chicken & falafel",
                    "Croissant sandwiches with halal cold cut meats",
                    "Falafel platter, bite-size shawarma & donair",
                  ],
                },
                {
                  title: "Main Dishes & Sides",
                  icon: "🍛",
                  items: [
                    "Mansaf rice with beef or chicken",
                    "Butter chicken, roast beef & gravy, brisket",
                    "Chicken breast with mushroom sauce",
                    "Vegetarian lasagna, fettuccine Alfredo",
                    "Mashed potatoes, plain rice, coconut rice",
                    "Full roasted lamb, lamb shanks, fried chicken",
                    "Steamed vegetables",
                  ],
                },
                {
                  title: "Salads & Dips",
                  icon: "🥗",
                  items: [
                    "Fattoush salad, tabouli salad, pasta salad",
                    "Caesar, Greek & summer salad",
                    "Hummus, baba ghanouj",
                    "Spinach dip & baguette",
                    "Garlic sauce tray",
                  ],
                },
                {
                  title: "Desserts",
                  icon: "🍰",
                  items: [
                    "Luxury seasonal fruit tray",
                    "Assorted mini dessert cups",
                    "Cannoli flavors",
                    "Mini fruit tarts, eclair, kunafa",
                    "Mini French pastry, full cakes, cheesecake",
                    "Baklava, cream pies / znoud el sit",
                  ],
                },
                {
                  title: "Stations",
                  icon: "☕",
                  items: [
                    "Coffee station: 100–400 cups",
                    "Tea station",
                    "Juice station with crystal beverage dispensers",
                    "Iced tea, lemonade, fruit punch, pineapple, orange & pink lemonade",
                    "Commercial beverage dispenser",
                  ],
                },
                {
                  title: "Serviceware",
                  icon: "🍴",
                  items: [
                    "High-end disposable service for 50–400 guests",
                    "Dinner plates, forks, knives, spoons",
                    "Dessert plates, napkins, juice cups",
                    "Gold, silver and rose gold rim options",
                    "Utensil holder, beverage pitcher, ice bucket",
                  ],
                },
              ].map((section) => (
                <motion.div
                    key={section.title}
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, margin: "-50px" }}
                    transition={{ duration: 0.5 }}
                    whileHover={{ y: -6, scale: 1.02 }}
                    className="h-full bg-gradient-to-b from-[#FBF8F4] to-[#F2EAE0] border border-[#E6D8C9] rounded-2xl p-7 md:p-8 shadow-sm hover:shadow-lg transition-all duration-300"
                  
                >
                  <div className="flex justify-center mb-5">
                    <div className="w-16 h-16 rounded-full border border-primary/30 flex items-center justify-center text-2xl">
                      {section.icon}
                    </div>
                  </div>

                  <h3 className="text-xl md:text-2xl font-serif font-bold text-center mb-3">
                    {section.title}
                  </h3>

                  <div className="w-14 h-px bg-primary/40 mx-auto mb-6"></div>

                  <ul className="space-y-3 text-sm text-muted-foreground leading-relaxed">
                    {section.items.map((item) => (
                      <li key={item} className="flex gap-2">
                        <span className="text-primary mt-1">•</span>
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                </motion.div>
              ))}
            </div>

            <div className="flex items-center justify-center gap-5 mt-14 text-center">
              <div className="hidden sm:block w-24 h-px bg-primary/30"></div>
              <p className="uppercase tracking-[0.2em] text-sm text-muted-foreground">
                Available for 50 to 400 guests
              </p>
              <div className="hidden sm:block w-24 h-px bg-primary/30"></div>
            </div>
          </div>
        </div>
      </section>

      {/* Packages Section */}
      <section className="py-20 bg-secondary/30">
        <div className="container mx-auto px-4 max-w-4xl">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl md:text-5xl font-serif font-bold mb-4">Our Packages</h2>
            <p className="text-muted-foreground max-w-xl mx-auto">
              Choose the level of service that fits your vision — from complete creative direction to seamless day-of execution.
            </p>
          </motion.div>

          {/* Full Event Design */}
          <motion.div
            id="full-event-design"
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, delay: 0.1 }}
            className="border border-border rounded-2xl overflow-hidden mb-12"
          >
            <div className="bg-secondary px-8 py-10 text-center">
              <p className="text-sm uppercase tracking-[0.2em] text-muted-foreground mb-2">Premium Package</p>
              <h3 className="text-2xl md:text-3xl font-serif font-bold mb-3">Full Event Design</h3>
              <p className="text-muted-foreground max-w-lg mx-auto text-sm leading-relaxed">
                From concept to completion, we handle every design detail so your event is a true reflection of your style. Perfect for clients who want a fully curated, hands-off experience.
              </p>
            </div>

            <div className="px-6 md:px-10 py-8">
              <Accordion type="multiple" defaultValue={["consultation", "design", "styling", "logistics"]} className="space-y-2">
                <AccordionItem value="consultation" className="border rounded-xl px-5">
                  <AccordionTrigger className="hover:no-underline gap-3">
                    <span className="flex items-center gap-3 text-left">
                      <Palette className="h-5 w-5 text-primary shrink-0" />
                      <span className="font-serif text-lg">Creative Consultation & Concept</span>
                    </span>
                  </AccordionTrigger>
                  <AccordionContent>
                    <ul className="space-y-2 text-muted-foreground">
                      <li>• In-depth consultation to understand your vision, style & preferences</li>
                      <li>• Custom color palette creation</li>
                      <li>• Theme development tailored to your event type</li>
                      <li>• Venue assessment & spatial design planning</li>
                      <li>• Curated inspiration presentation with material samples</li>
                    </ul>
                  </AccordionContent>
                </AccordionItem>

                <AccordionItem value="design" className="border rounded-xl px-5">
                  <AccordionTrigger className="hover:no-underline gap-3">
                    <span className="flex items-center gap-3 text-left">
                      <Flower2 className="h-5 w-5 text-primary shrink-0" />
                      <span className="font-serif text-lg">Full Décor Design & Sourcing</span>
                    </span>
                  </AccordionTrigger>
                  <AccordionContent>
                    <ul className="space-y-2 text-muted-foreground">
                      <li>• Complete floral design — ceremony, reception & accents</li>
                      <li>• Tablescapes, linens, charger plates & place settings</li>
                      <li>• Backdrop & stage design</li>
                      <li>• Lighting design & ambiance planning</li>
                      <li>• Sourcing & coordination of all décor rentals</li>
                    </ul>
                  </AccordionContent>
                </AccordionItem>

                <AccordionItem value="styling" className="border rounded-xl px-5">
                  <AccordionTrigger className="hover:no-underline gap-3">
                    <span className="flex items-center gap-3 text-left">
                      <Lamp className="h-5 w-5 text-primary shrink-0" />
                      <span className="font-serif text-lg">Setup & Styling</span>
                    </span>
                  </AccordionTrigger>
                  <AccordionContent>
                    <ul className="space-y-2 text-muted-foreground">
                      <li>• Full on-site setup & styling by our design team</li>
                      <li>• Table arrangement & centerpiece placement</li>
                      <li>• Signage, escort cards & personal touches</li>
                      <li>• Real-time adjustments for a flawless look</li>
                      <li>• Complete teardown & rental returns after the event</li>
                    </ul>
                  </AccordionContent>
                </AccordionItem>

                <AccordionItem value="logistics" className="border rounded-xl px-5">
                  <AccordionTrigger className="hover:no-underline gap-3">
                    <span className="flex items-center gap-3 text-left">
                      <Star className="h-5 w-5 text-primary shrink-0" />
                      <span className="font-serif text-lg">Design Management</span>
                    </span>
                  </AccordionTrigger>
                  <AccordionContent>
                    <ul className="space-y-2 text-muted-foreground">
                      <li>• Dedicated design lead throughout the planning process</li>
                      <li>• Vendor coordination for all décor-related services</li>
                      <li>• Timeline integration with your event planner or coordinator</li>
                      <li>• Final design walkthrough before event day</li>
                    </ul>
                  </AccordionContent>
                </AccordionItem>
              </Accordion>
            </div>

            <div className="bg-secondary/50 px-8 py-10 text-center space-y-6">
              <div className="flex items-center justify-center gap-2 text-primary">
                <Sparkles className="h-4 w-4" />
                <p className="text-sm uppercase tracking-[0.15em] font-medium">The Complete Experience</p>
                <Sparkles className="h-4 w-4" />
              </div>
              <p className="text-muted-foreground max-w-lg mx-auto text-sm leading-relaxed">
                Ideal for weddings, milestone celebrations, and luxury events where every detail matters. We bring the vision — you bring the guest list.
              </p>
              <p className="font-serif text-lg italic">You dream it. We design it.</p>
              <Link to="/contact">
                <Button className="rounded-full px-8 mt-2 font-sans tracking-wide">
                  Book a Consultation
                </Button>
              </Link>
            </div>
          </motion.div>

          {/* Day-of Coordination */}
          <motion.div
            id="day-of-coordination"
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, delay: 0.15 }}
            className="border border-border rounded-2xl overflow-hidden"
          >
            <div className="bg-secondary px-8 py-10 text-center">
              <p className="text-sm uppercase tracking-[0.2em] text-muted-foreground mb-2">Signature Package</p>
              <h3 className="text-2xl md:text-3xl font-serif font-bold mb-3">Day-of Coordination</h3>
              <p className="text-muted-foreground max-w-lg mx-auto text-sm leading-relaxed">
                We step in so you can step back and truly enjoy your celebration. Designed for couples who have planned their event but need a professional team to execute every detail flawlessly.
              </p>
            </div>

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

                <AccordionItem value="personal" className="border rounded-xl px-5">
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
    </div>
  );
};

export default Services;
