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
import nutcrackerMan from "@/assets/rentals/christmas/nutcracker-man.jpg";
import christmasOrnament from "@/assets/rentals/christmas/christmas-ornament.jpg";
import redGoldThrone from "@/assets/rentals/christmas/red-gold-throne.jpg";
import santaLetterBox from "@/assets/rentals/christmas/santa-letter-box.jpg";
import santaBakerProp from "@/assets/rentals/christmas/santa-baker-prop.jpg";
import smallRedSled from "@/assets/rentals/christmas/small-red-sled.jpg";
import welcomeSantaSign from "@/assets/rentals/christmas/welcome-santa-sign.jpg";
import whiteNutcracker from "@/assets/rentals/christmas/white-nutcracker.jpg";

// Wedding rental images
import goldCenterpiece from "@/assets/rentals/weddings/gold-centerpiece.jpg";
import silverCenterpiece from "@/assets/rentals/weddings/silver-centerpiece.jpg";
import tallBlackCenterpiece from "@/assets/rentals/weddings/tall-black-centerpiece.jpg";
import tallAcrylicCenterpiece from "@/assets/rentals/weddings/tall-acrylic-centerpiece.jpg";
import tallGoldCenterpiece from "@/assets/rentals/weddings/tall-gold-centerpiece.jpg";
import candelabraCenterpiece from "@/assets/rentals/weddings/candelabra-centerpiece.jpg";
import roundGoldCenterpiece from "@/assets/rentals/weddings/round-gold-centerpiece.jpg";
import floatingCandleTrio from "@/assets/rentals/weddings/floating-candle-trio.jpg";
import candleWreathCenterpiece from "@/assets/rentals/weddings/candle-wreath-centerpiece.jpg";
import tableChandelierCenterpiece from "@/assets/rentals/weddings/table-chandelier-centerpiece.jpg";
import cakeTables3Sizes from "@/assets/rentals/weddings/cake-tables-3-sizes.jpg";
import vorageCakeTable from "@/assets/rentals/weddings/vorage-cake-table.jpg";
import chairCoverBlack from "@/assets/rentals/weddings/chair-cover-black.jpg";
import chairCoverWhite from "@/assets/rentals/weddings/chair-cover-white.jpg";
import chairSash from "@/assets/rentals/weddings/chair-sash.jpg";
import angledGoldWhiteChairs from "@/assets/rentals/weddings/angled-gold-white-chairs.jpg";
import blackSilverChairs from "@/assets/rentals/weddings/black-silver-chairs.jpg";
import blackSilverSet from "@/assets/rentals/weddings/black-silver-set.jpg";
import greenLoveseat from "@/assets/rentals/weddings/green-loveseat.jpg";
import pinkKidsLoveseat from "@/assets/rentals/weddings/pink-kids-loveseat.jpg";
import redGoldLoveseat from "@/assets/rentals/weddings/red-gold-loveseat.jpg";
import roundGoldWhiteChairs from "@/assets/rentals/weddings/round-gold-white-chairs.jpg";
import scallopWhiteSet from "@/assets/rentals/weddings/scallop-white-set.jpg";
import whiteVelvetLoveseat from "@/assets/rentals/weddings/white-velvet-loveseat.jpg";

// Ramadan rental images
import ramadanLanterns from "@/assets/rentals/ramadan/ramadan-lanterns.jpg";
import whiteLanterns from "@/assets/rentals/ramadan/white-lanterns.jpg";

// Birthday rental images
import blueRabbitProp from "@/assets/rentals/birthdays/blue-rabbit-prop.jpg";
import chestProp from "@/assets/rentals/birthdays/chest-prop.jpg";
import donutProp from "@/assets/rentals/birthdays/donut-prop.jpg";
import gingerbreadProp from "@/assets/rentals/birthdays/gingerbread-prop.jpg";
import icecreamProp from "@/assets/rentals/birthdays/icecream-prop.jpg";
import icecreamStool from "@/assets/rentals/birthdays/icecream-stool.jpg";
import macaroonProp from "@/assets/rentals/birthdays/macaroon-prop.jpg";
import mushroomProps from "@/assets/rentals/birthdays/mushroom-props.jpg";
import pinkRabbitProp from "@/assets/rentals/birthdays/pink-rabbit-prop.jpg";
import sheepProps from "@/assets/rentals/birthdays/sheep-props.jpg";

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
      { name: "Centre Pieces", items: [
        { name: "Gold Floral Centre Piece", price: "From $50", image: goldCenterpiece },
        { name: "Silver Floral Centre Piece", price: "From $50", image: silverCenterpiece },
        { name: "Tall Black Stand Centre Piece", price: "From $65", image: tallBlackCenterpiece },
        { name: "Tall Acrylic Centre Piece", price: "From $70", image: tallAcrylicCenterpiece },
        { name: "Tall Gold Stand Centre Piece", price: "From $75", image: tallGoldCenterpiece },
        { name: "Gold Candelabra Centre Piece", price: "From $60", image: candelabraCenterpiece },
        { name: "Round Gold Hoop Centre Piece", price: "From $55", image: roundGoldCenterpiece },
        { name: "Floating Candle Trio with Greenery", price: "From $45", image: floatingCandleTrio },
        { name: "Candle Wreath Centre Piece", price: "From $55", image: candleWreathCenterpiece },
        { name: "Gold Table Chandelier Centre Piece", price: "From $65", image: tableChandelierCenterpiece },
      ] },
      { name: "Table Cloths", items: [{ name: "Satin Table Cloth", price: "From $25" }, { name: "Lace Table Cloth", price: "From $35" }] },
      { name: "Cake Tables", items: [
        { name: "Gold Twist Cake Table (3 Sizes)", price: "From $60", image: cakeTables3Sizes },
        { name: "Vorage Gold Cake Table", price: "From $100", image: vorageCakeTable },
      ] },
      { name: "Chair Covers", items: [{ name: "Black Spandex Chair Cover", price: "From $3", image: chairCoverBlack }, { name: "White Spandex Chair Cover", price: "From $3", image: chairCoverWhite }, { name: "Chair Sash", price: "From $2", image: chairSash }] },
      { name: "Couches and Chairs", items: [
        { name: "Angled Gold & White Chairs", price: "From $25", image: angledGoldWhiteChairs },
        { name: "Black & Silver Chairs", price: "From $25", image: blackSilverChairs },
        { name: "Black & Silver Set", price: "From $120", image: blackSilverSet },
        { name: "Teal Velvet Loveseat", price: "From $85", image: greenLoveseat },
        { name: "Pink Kids Loveseat", price: "From $65", image: pinkKidsLoveseat },
        { name: "Red & Gold Chaise Lounge", price: "From $95", image: redGoldLoveseat },
        { name: "Round Gold & White Chairs", price: "From $25", image: roundGoldWhiteChairs },
        { name: "White Scallop Set", price: "From $130", image: scallopWhiteSet },
        { name: "White Velvet Loveseat", price: "From $90", image: whiteVelvetLoveseat },
      ] },
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
      { name: "Nutcracker King Prop", price: "From $85", image: nutcrackerMan },
      { name: "Giant Christmas Ornament", price: "From $45", image: christmasOrnament },
      { name: "Red & Gold Throne Chair", price: "From $150", image: redGoldThrone },
      { name: "Santa Letter Box", price: "From $40", image: santaLetterBox },
      { name: "Santa Baker Prop", price: "From $95", image: santaBakerProp },
      { name: "Small Red Sled", price: "From $45", image: smallRedSled },
      { name: "Welcome Santa Sign", price: "From $35", image: welcomeSantaSign },
      { name: "White Nutcracker Set", price: "From $120", image: whiteNutcracker },
    ],
  },
  {
    name: "Birthdays",
    subcategories: [
      { name: "Balloons", items: [{ name: "Balloon Arch", price: "From $80" }, { name: "Balloon Bouquet", price: "From $25" }] },
      { name: "Backdrops", items: [{ name: "Birthday Backdrop", price: "From $100" }] },
      { name: "Props", items: [
        { name: "Blue Rabbit Prop", price: "From $55", image: blueRabbitProp },
        { name: "Treasure Chest Prop", price: "From $70", image: chestProp },
        { name: "Donut Stack Prop", price: "From $65", image: donutProp },
        { name: "Gingerbread Girl Prop", price: "From $60", image: gingerbreadProp },
        { name: "Ice Cream Sandwich Prop", price: "From $75", image: icecreamProp },
        { name: "Ice Cream Popsicle Stool", price: "From $50", image: icecreamStool },
        { name: "Macaroon Tower Prop", price: "From $65", image: macaroonProp },
        { name: "Mushroom Props Set", price: "From $90", image: mushroomProps },
        { name: "Pink Rabbit Prop", price: "From $55", image: pinkRabbitProp },
        { name: "Sheep Props Set", price: "From $80", image: sheepProps },
      ] },
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
    items: [
      { name: "Ramadan Table Setup", price: "From $80" },
      { name: "Crescent Moon Display", price: "From $60" },
      { name: "Gold Ramadan Lanterns Set", price: "From $75", image: ramadanLanterns },
      { name: "White Floral Lanterns Set", price: "From $85", image: whiteLanterns },
    ],
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
