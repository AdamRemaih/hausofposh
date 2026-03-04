import { useState } from "react";
import { useSearchParams } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";
import { X } from "lucide-react";
import { cn } from "@/lib/utils";

const filters = [
  "All",
  "Weddings & Engagements",
  "Catering",
  "Christmas",
  "Baby Showers",
  "Graduations",
  "Birthdays",
];

// Placeholder gallery items — will be replaced with real photos
const generatePlaceholders = () => {
  const categories = filters.slice(1);
  return Array.from({ length: 24 }, (_, i) => ({
    id: i + 1,
    category: categories[i % categories.length],
    label: `Event Photo ${i + 1}`,
  }));
};

const galleryItems = generatePlaceholders();

const Gallery = () => {
  const [searchParams] = useSearchParams();
  const initialFilter = searchParams.get("filter") || "All";
  const [activeFilter, setActiveFilter] = useState(
    filters.find((f) => f.toLowerCase().replace(/\s/g, "-") === initialFilter) || "All"
  );
  const [lightboxIndex, setLightboxIndex] = useState<number | null>(null);

  const filtered = activeFilter === "All"
    ? galleryItems
    : galleryItems.filter((item) => item.category === activeFilter);

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
            Our Gallery
          </motion.h1>
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.3, duration: 0.6 }}
            className="text-muted-foreground max-w-2xl mx-auto text-lg"
          >
            Browse our portfolio of stunning event decorations.
          </motion.p>
        </div>
      </section>

      {/* Filters */}
      <section className="py-8 border-b border-border sticky top-20 bg-background z-40">
        <div className="container mx-auto px-4">
          <div className="flex flex-wrap justify-center gap-3">
            {filters.map((filter) => (
              <button
                key={filter}
                onClick={() => setActiveFilter(filter)}
                className={cn(
                  "px-5 py-2 rounded-full text-sm font-medium tracking-wide transition-all",
                  activeFilter === filter
                    ? "bg-primary text-primary-foreground"
                    : "bg-muted text-muted-foreground hover:bg-primary/10 hover:text-primary"
                )}
              >
                {filter}
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* Grid */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <motion.div layout className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
            <AnimatePresence mode="popLayout">
              {filtered.map((item, i) => (
                <motion.div
                  key={item.id}
                  layout
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.9 }}
                  transition={{ duration: 0.3, delay: i * 0.03 }}
                  className="aspect-square bg-secondary rounded-lg overflow-hidden cursor-pointer group relative"
                  onClick={() => setLightboxIndex(i)}
                >
                  <div className="w-full h-full bg-gradient-to-br from-primary/10 to-secondary flex items-center justify-center">
                    <span className="text-muted-foreground text-xs italic">{item.label}</span>
                  </div>
                  <div className="absolute inset-0 bg-foreground/0 group-hover:bg-foreground/20 transition-colors flex items-center justify-center">
                    <span className="text-background opacity-0 group-hover:opacity-100 transition-opacity text-sm font-medium">
                      {item.category}
                    </span>
                  </div>
                </motion.div>
              ))}
            </AnimatePresence>
          </motion.div>
          {filtered.length === 0 && (
            <p className="text-center text-muted-foreground py-20 italic">
              No photos in this category yet. Check back soon!
            </p>
          )}
        </div>
      </section>

      {/* Lightbox */}
      <AnimatePresence>
        {lightboxIndex !== null && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 bg-foreground/90 flex items-center justify-center p-4"
            onClick={() => setLightboxIndex(null)}
          >
            <button
              className="absolute top-6 right-6 text-background hover:text-primary transition-colors"
              onClick={() => setLightboxIndex(null)}
              aria-label="Close lightbox"
            >
              <X size={32} />
            </button>
            <motion.div
              initial={{ scale: 0.8 }}
              animate={{ scale: 1 }}
              exit={{ scale: 0.8 }}
              className="max-w-4xl w-full aspect-square bg-secondary rounded-lg flex items-center justify-center"
              onClick={(e) => e.stopPropagation()}
            >
              <span className="text-muted-foreground italic">
                {filtered[lightboxIndex]?.label}
              </span>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

export default Gallery;
