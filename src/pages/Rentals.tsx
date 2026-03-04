import { useState } from "react";
import { motion } from "framer-motion";
import { cn } from "@/lib/utils";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

// Christmas rental images
import blackReindeerProps from "@/assets/rentals/christmas/black-reindeer-props.jpg";
import blackSled from "@/assets/rentals/christmas/black-sled.jpg";
import candyCaneProp from "@/assets/rentals/christmas/candy-cane-prop.jpg";
import christmasBench from "@/assets/rentals/christmas/christmas-bench.jpg";
import christmasCartProp from "@/assets/rentals/christmas/christmas-cart-prop.jpg";
import christmasGift from "@/assets/rentals/christmas/christmas-gift.jpg";
import christmasSled from "@/assets/rentals/christmas/christmas-sled.jpg";
import christmasBackdrop from "@/assets/rentals/christmas/christmas-backdrop.jpg";
import christmasSmallGift from "@/assets/rentals/christmas/christmas-small-gift.jpg";
import gingerbreadTree from "@/assets/rentals/christmas/gingerbread-tree.jpg";

interface RentalItem {
  name: string;
  price: string;
  image?: string;
}

interface SubCategory {
  name: string;
  items: RentalItem[];
}

interface Category {
  name: string;
  subcategories?: SubCategory[];
  items?: RentalItem[];
}

const rentalCategories: Category[] = [
  {
    name: "Weddings & Engagements",
    subcategories: [
      { name: "Centre Pieces", items: [{ name: "Crystal Centre Piece", price: "From $50" }, { name: "Floral Centre Piece", price: "From $75" }] },
      { name: "Table Cloths", items: [{ name: "Satin Table Cloth", price: "From $25" }, { name: "Lace Table Cloth", price: "From $35" }] },
      { name: "Cake Tables", items: [{ name: "Elegant Cake Table Setup", price: "From $100" }] },
      { name: "Chair Covers", items: [{ name: "Spandex Chair Cover", price: "From $3" }, { name: "Sash & Cover Set", price: "From $5" }] },
      { name: "Backdrops", items: [{ name: "Floral Backdrop", price: "From $200" }, { name: "Draped Backdrop", price: "From $150" }] },
      { name: "Table Runners", items: [{ name: "Satin Table Runner", price: "From $10" }] },
      { name: "Charger Plates", items: [{ name: "Gold Charger Plate", price: "From $3" }, { name: "Silver Charger Plate", price: "From $3" }] },
      { name: "Napkins", items: [{ name: "Linen Napkin Set", price: "From $2" }] },
    ],
  },
  {
    name: "Desert Tables",
    items: [{ name: "Desert Table Setup", price: "From $120" }, { name: "Candy Cart", price: "From $80" }],
  },
  {
    name: "Christmas",
    items: [
      { name: "Black Reindeer Props", price: "From $45", image: blackReindeerProps },
      { name: "Black Sled", price: "From $65", image: blackSled },
      { name: "Candy Cane Prop", price: "From $35", image: candyCaneProp },
      { name: "Merry Christmas Bench", price: "From $75", image: christmasBench },
      { name: "Christmas Cart Prop", price: "From $90", image: christmasCartProp },
      { name: "Christmas Gift Display", price: "From $55", image: christmasGift },
      { name: "Red Christmas Sled", price: "From $70", image: christmasSled },
      { name: "Christmas Floral Backdrop", price: "From $200", image: christmasBackdrop },
      { name: "Stacked Gift Display", price: "From $60", image: christmasSmallGift },
      { name: "Gingerbread Tree", price: "From $50", image: gingerbreadTree },
    ],
  },
  {
    name: "Birthdays",
    subcategories: [
      { name: "Balloons", items: [{ name: "Balloon Arch", price: "From $80" }, { name: "Balloon Bouquet", price: "From $25" }] },
      { name: "Backdrops", items: [{ name: "Birthday Backdrop", price: "From $100" }] },
    ],
  },
  {
    name: "Graduation",
    items: [{ name: "Graduation Setup", price: "From $100" }, { name: "Cap & Gown Display", price: "From $60" }],
  },
  {
    name: "Gender Reveal / Baby Showers",
    items: [{ name: "Gender Reveal Setup", price: "From $120" }, { name: "Baby Shower Decor", price: "From $100" }],
  },
  {
    name: "Ramadan Decorations",
    items: [{ name: "Ramadan Table Setup", price: "From $80" }, { name: "Crescent Moon Display", price: "From $60" }],
  },
];

const RentalCard = ({ item }: { item: RentalItem }) => (
  <div className="bg-background rounded-lg border border-border overflow-hidden group hover:shadow-md transition-shadow">
    <div className="aspect-square bg-secondary flex items-center justify-center overflow-hidden">
      {item.image ? (
        <img src={item.image} alt={item.name} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300" />
      ) : (
        <span className="text-muted-foreground text-xs italic">Photo</span>
      )}
    </div>
    <div className="p-4">
      <h4 className="font-medium text-sm mb-1">{item.name}</h4>
      <p className="text-primary font-semibold text-sm">{item.price}</p>
    </div>
  </div>
);

const Rentals = () => {
  const [activeCategory, setActiveCategory] = useState(rentalCategories[0].name);
  const category = rentalCategories.find((c) => c.name === activeCategory)!;

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
            Rentals
          </motion.h1>
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.3, duration: 0.6 }}
            className="text-muted-foreground max-w-2xl mx-auto text-lg"
          >
            Browse our collection of premium event decor available for rental.
          </motion.p>
        </div>
      </section>

      {/* Content */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="flex flex-col lg:flex-row gap-12">
            {/* Sidebar */}
            <aside className="lg:w-64 shrink-0">
              <h3 className="font-serif text-lg font-semibold mb-4">Categories</h3>
              <nav className="space-y-1">
                {rentalCategories.map((cat) => (
                  <button
                    key={cat.name}
                    onClick={() => setActiveCategory(cat.name)}
                    className={cn(
                      "w-full text-left px-4 py-3 rounded-lg text-sm font-medium transition-colors",
                      activeCategory === cat.name
                        ? "bg-primary text-primary-foreground"
                        : "text-muted-foreground hover:bg-muted hover:text-foreground"
                    )}
                  >
                    {cat.name}
                  </button>
                ))}
              </nav>
            </aside>

            {/* Items */}
            <div className="flex-1">
              <h2 className="text-2xl md:text-3xl font-serif font-bold mb-8">{category.name}</h2>

              {category.subcategories ? (
                <Accordion type="multiple" defaultValue={[category.subcategories[0]?.name]}>
                  {category.subcategories.map((sub) => (
                    <AccordionItem key={sub.name} value={sub.name}>
                      <AccordionTrigger className="text-lg font-serif">{sub.name}</AccordionTrigger>
                      <AccordionContent>
                        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 pt-4">
                          {sub.items.map((item) => (
                            <RentalCard key={item.name} item={item} />
                          ))}
                        </div>
                      </AccordionContent>
                    </AccordionItem>
                  ))}
                </Accordion>
              ) : (
                <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
                  {category.items?.map((item) => (
                    <RentalCard key={item.name} item={item} />
                  ))}
                </div>
              )}
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Rentals;
