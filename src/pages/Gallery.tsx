import { useState, useRef } from "react";
import { useSearchParams } from "react-router-dom";
import { useEffect } from "react";
import { cn } from "@/lib/utils";



// Weddings & Engagements
import weddingsImg1 from "@/assets/gallery/weddings_engagements/img1.jpg";
import weddingsImg2 from "@/assets/gallery/weddings_engagements/img2.jpg";
import weddingsImg3 from "@/assets/gallery/weddings_engagements/img3.jpg";
import weddingsImg4 from "@/assets/gallery/weddings_engagements/img4.jpg";
import weddingsImg5 from "@/assets/gallery/weddings_engagements/img5.jpg";
import weddingsImg6 from "@/assets/gallery/weddings_engagements/img6.jpg";
import weddingsImg7 from "@/assets/gallery/weddings_engagements/img7.jpg";
import weddingsImg8 from "@/assets/gallery/weddings_engagements/img8.jpg";
import weddingsImg9 from "@/assets/gallery/weddings_engagements/img9.jpg";
import weddingsImg10 from "@/assets/gallery/weddings_engagements/img10.jpg";
import weddingsImg11 from "@/assets/gallery/weddings_engagements/img11.jpg";
import weddingsImg12 from "@/assets/gallery/weddings_engagements/img12.jpg";
import weddingsImg13 from "@/assets/gallery/weddings_engagements/img13.jpg";
import weddingsImg14 from "@/assets/gallery/weddings_engagements/img14.jpg";
import weddingsImg15 from "@/assets/gallery/weddings_engagements/img15.jpg";
import weddingsImg16 from "@/assets/gallery/weddings_engagements/img16.jpg";
import weddingsImg17 from "@/assets/gallery/weddings_engagements/img17.jpg";
import weddingsImg18 from "@/assets/gallery/weddings_engagements/img18.jpg";
import weddingsImg19 from "@/assets/gallery/weddings_engagements/img19.jpg";
import weddingsImg20 from "@/assets/gallery/weddings_engagements/img20.jpg";
import weddingsImg21 from "@/assets/gallery/weddings_engagements/img21.jpg";
import weddingsImg22 from "@/assets/gallery/weddings_engagements/img22.jpg";
import weddingsImg23 from "@/assets/gallery/weddings_engagements/img23.jpg";
import weddingsImg24 from "@/assets/gallery/weddings_engagements/img24.jpg";
import weddingsImg25 from "@/assets/gallery/weddings_engagements/img25.jpg";
import weddingsImg26 from "@/assets/gallery/weddings_engagements/img26.jpg";
import weddingsImg27 from "@/assets/gallery/weddings_engagements/img27.jpg";
import weddingsImg28 from "@/assets/gallery/weddings_engagements/img28.jpg";
import weddingsImg29 from "@/assets/gallery/weddings_engagements/img29.jpg";
import weddingsImg30 from "@/assets/gallery/weddings_engagements/img30.jpg";
import weddingsImg31 from "@/assets/gallery/weddings_engagements/img31.jpg";
import weddingsImg32 from "@/assets/gallery/weddings_engagements/img32.jpg";
import weddingsImg33 from "@/assets/gallery/weddings_engagements/img33.jpg";
import weddingsImg34 from "@/assets/gallery/weddings_engagements/img34.jpg";
import weddingsImg35 from "@/assets/gallery/weddings_engagements/img35.jpg";
import weddingsImg36 from "@/assets/gallery/weddings_engagements/img36.jpg";
import weddingsImg37 from "@/assets/gallery/weddings_engagements/img37.jpg";
import weddingsImg38 from "@/assets/gallery/weddings_engagements/img38.jpg";
import weddingsImg39 from "@/assets/gallery/weddings_engagements/img39.jpg";
import weddingsImg40 from "@/assets/gallery/weddings_engagements/img40.jpg";

// Catering
import cateringImg1 from "@/assets/gallery/catering/img1.jpg";
import cateringImg2 from "@/assets/gallery/catering/img2.jpg";
import cateringImg3 from "@/assets/gallery/catering/img3.jpg";
import cateringImg4 from "@/assets/gallery/catering/img4.jpg";
import cateringImg5 from "@/assets/gallery/catering/img5.jpg";
import cateringImg6 from "@/assets/gallery/catering/img6.jpg";
import cateringImg7 from "@/assets/gallery/catering/img7.jpg";
import cateringImg8 from "@/assets/gallery/catering/img8.jpg";
import cateringImg9 from "@/assets/gallery/catering/img9.jpg";
import cateringImg10 from "@/assets/gallery/catering/img10.jpg";
import cateringImg11 from "@/assets/gallery/catering/img11.jpg";
import cateringImg12 from "@/assets/gallery/catering/img12.jpg";
import cateringImg13 from "@/assets/gallery/catering/img13.jpg";
import cateringImg14 from "@/assets/gallery/catering/img14.jpg";
import cateringImg15 from "@/assets/gallery/catering/img15.jpg";
import cateringImg16 from "@/assets/gallery/catering/img16.jpg";
import cateringImg17 from "@/assets/gallery/catering/img17.jpg";
import cateringImg18 from "@/assets/gallery/catering/img18.jpg";
import cateringImg19 from "@/assets/gallery/catering/img19.jpg";
import cateringImg20 from "@/assets/gallery/catering/img20.jpg";
import cateringImg21 from "@/assets/gallery/catering/img21.jpg";
import cateringImg22 from "@/assets/gallery/catering/img22.jpg";
import cateringImg23 from "@/assets/gallery/catering/img23.jpg";
import cateringImg24 from "@/assets/gallery/catering/img24.jpg";

// Christmas
import christmasImg1 from "@/assets/gallery/christmas/img1.jpg";
import christmasImg2 from "@/assets/gallery/christmas/img2.jpg";
import christmasImg3 from "@/assets/gallery/christmas/img3.jpg";
import christmasImg4 from "@/assets/gallery/christmas/img4.jpg";
import christmasImg5 from "@/assets/gallery/christmas/img5.jpg";
import christmasImg6 from "@/assets/gallery/christmas/img6.jpg";
import christmasImg7 from "@/assets/gallery/christmas/img7.jpg";
import christmasImg8 from "@/assets/gallery/christmas/img8.jpg";
import christmasImg9 from "@/assets/gallery/christmas/img9.jpg";
import christmasImg10 from "@/assets/gallery/christmas/img10.jpg";
import christmasImg11 from "@/assets/gallery/christmas/img11.jpg";
import christmasImg12 from "@/assets/gallery/christmas/img12.jpg";

// Baby Showers
import babyShowersImg1 from "@/assets/gallery/babyshowers/img1.jpg";
import babyShowersImg2 from "@/assets/gallery/babyshowers/img2.jpg";
import babyShowersImg3 from "@/assets/gallery/babyshowers/img3.jpg";
import babyShowersImg4 from "@/assets/gallery/babyshowers/img4.jpg";
import babyShowersImg5 from "@/assets/gallery/babyshowers/img5.jpg";
import babyShowersImg6 from "@/assets/gallery/babyshowers/img6.jpg";
import babyShowersImg7 from "@/assets/gallery/babyshowers/img7.jpg";

// Graduations
import graduationsImg1 from "@/assets/gallery/graduations/img1.jpg";
import graduationsImg2 from "@/assets/gallery/graduations/img2.jpg";
import graduationsImg3 from "@/assets/gallery/graduations/img3.jpg";
import graduationsImg4 from "@/assets/gallery/graduations/img4.jpg";
import graduationsImg5 from "@/assets/gallery/graduations/img5.jpg";
import graduationsImg6 from "@/assets/gallery/graduations/img6.jpg";

// Birthdays
import birthdaysImg1 from "@/assets/gallery/birthdays/img1.jpg";
import birthdaysImg2 from "@/assets/gallery/birthdays/img2.jpg";
import birthdaysImg3 from "@/assets/gallery/birthdays/img3.jpg";
import birthdaysImg4 from "@/assets/gallery/birthdays/img4.jpg";
import birthdaysImg5 from "@/assets/gallery/birthdays/img5.jpg";
import birthdaysImg6 from "@/assets/gallery/birthdays/img6.jpg";
import birthdaysImg7 from "@/assets/gallery/birthdays/img7.jpg";
import birthdaysImg8 from "@/assets/gallery/birthdays/img8.jpg";
import birthdaysImg9 from "@/assets/gallery/birthdays/img9.jpg";
import birthdaysImg10 from "@/assets/gallery/birthdays/img10.jpg";
import birthdaysImg11 from "@/assets/gallery/birthdays/img11.jpg";
import birthdaysImg12 from "@/assets/gallery/birthdays/img12.jpg";
import birthdaysImg13 from "@/assets/gallery/birthdays/img13.jpg";
import birthdaysImg14 from "@/assets/gallery/birthdays/img14.jpg";
import birthdaysImg15 from "@/assets/gallery/birthdays/img15.jpg";
import birthdaysImg16 from "@/assets/gallery/birthdays/img16.jpg";
import birthdaysImg17 from "@/assets/gallery/birthdays/img17.jpg";
import birthdaysImg18 from "@/assets/gallery/birthdays/img18.jpg";


const weddingsImages = [//35 images
  weddingsImg1, weddingsImg2, weddingsImg3, weddingsImg4, weddingsImg35, 
  weddingsImg5, weddingsImg6, weddingsImg7, weddingsImg8, weddingsImg9, 
  weddingsImg10, weddingsImg11, weddingsImg12, weddingsImg13, weddingsImg14, 
  weddingsImg15, weddingsImg16, weddingsImg17, weddingsImg18, weddingsImg19, 
  weddingsImg20,weddingsImg21, weddingsImg22, weddingsImg23, weddingsImg24,
  weddingsImg25,weddingsImg26, weddingsImg27, weddingsImg28, weddingsImg29,
  weddingsImg30, weddingsImg31, weddingsImg32,weddingsImg33,weddingsImg34,
  weddingsImg36, weddingsImg37, weddingsImg38, weddingsImg39, weddingsImg40,
];

const cateringImages = [
  cateringImg1, cateringImg2, cateringImg3, cateringImg4, cateringImg5, cateringImg6,
  cateringImg7, cateringImg8, cateringImg9, cateringImg10, cateringImg11, cateringImg12,
  cateringImg13, cateringImg14, cateringImg15, cateringImg16, cateringImg17, cateringImg18,
  cateringImg19, cateringImg20, cateringImg21, cateringImg22, cateringImg23, cateringImg24,
];

const christmasImages = [
  christmasImg1, christmasImg2, christmasImg3, christmasImg4, christmasImg5, christmasImg6,
  christmasImg7, christmasImg8, christmasImg9, christmasImg10, christmasImg11, christmasImg12,
];

const babyShowersImages = [
  babyShowersImg1, babyShowersImg2, babyShowersImg3, babyShowersImg4,
  babyShowersImg5, babyShowersImg6, babyShowersImg7,
];

const graduationsImages = [
  graduationsImg1, graduationsImg2, graduationsImg3,
  graduationsImg4, graduationsImg5, graduationsImg6,
];

const birthdaysImages = [
  birthdaysImg1, birthdaysImg2, birthdaysImg3, birthdaysImg4, birthdaysImg5,
  birthdaysImg6, birthdaysImg7, birthdaysImg8, birthdaysImg9, birthdaysImg10,
  birthdaysImg11, birthdaysImg12, birthdaysImg13, birthdaysImg14, birthdaysImg15,
  birthdaysImg16, birthdaysImg17, birthdaysImg18
];


const filters = [
  "All",
  "Weddings & Engagements",
  "Catering",
  "Christmas",
  "Baby Showers",
  "Graduations",
  "Birthdays",
  "Backdrops",
];

interface GalleryItem {
  id: number;
  category: string;
  image: string;
}

const shuffleArray = <T,>(array: T[]): T[] => {
  const shuffled = [...array];
  for (let i = shuffled.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [shuffled[i], shuffled[j]] = [shuffled[j], shuffled[i]];
  }
  return shuffled;
};

const galleryItems: GalleryItem[] = [
  ...weddingsImages.map((image, i) => ({ id: i + 1, category: "Weddings & Engagements", image })),
  ...cateringImages.map((image, i) => ({ id: 100 + i, category: "Catering", image })),
  ...christmasImages.map((image, i) => ({ id: 200 + i, category: "Christmas", image })),
  ...babyShowersImages.map((image, i) => ({ id: 300 + i, category: "Baby Showers", image })),
  ...graduationsImages.map((image, i) => ({ id: 400 + i, category: "Graduations", image })),
  ...birthdaysImages.map((image, i) => ({ id: 500 + i, category: "Birthdays", image })),
];

const toSlug = (value: string) =>
  value.toLowerCase().replace(/&/g, "and").replace(/\s+/g, "-");

const Gallery = () => {
  const [searchParams, setSearchParams] = useSearchParams();

  const getFilterFromURL = () => {
    const slug = searchParams.get("filter");
      return filters.find((f) => toSlug(f) === slug) || "All";
  };

  const [activeFilter, setActiveFilter] = useState(getFilterFromURL());
  const gridRef = useRef<HTMLDivElement | null>(null);

    // keep UI in sync if URL changes
    useEffect(() => {
      setActiveFilter(getFilterFromURL());
    }, [searchParams]);

  const filtered =
  activeFilter === "All"
    ? shuffleArray(galleryItems)
    : galleryItems.filter((item) => item.category === activeFilter);

  return (
    <div className="min-h-screen pt-20">
      <section className="py-20 bg-secondary text-center">
        <h1 className="text-4xl md:text-6xl font-serif font-bold mb-4">Our Gallery</h1>
        <p className="text-muted-foreground">Browse our portfolio of stunning event decorations.</p>
      </section>

      <section className="py-8 border-b border-border sticky top-20 bg-background z-40">
        <div className="flex flex-wrap justify-center gap-3">
          {filters.map((filter) => (
            <button
              key={filter}
              onClick={() => {
                setActiveFilter(filter);
              
                if (filter === "All") {
                  setSearchParams({});
                } else {
                  setSearchParams({ filter: toSlug(filter) });
                }
              
                window.scrollTo({ top: 0, behavior: "smooth" });
              }}
              className={cn(
                "px-5 py-2 rounded-full text-sm font-medium",
                activeFilter === filter ? "bg-primary text-primary-foreground" : "bg-muted"
              )}
            >
              {filter}
            </button>
          ))}
        </div>
      </section>

      <section className="py-16">
        <div ref={gridRef} className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 px-4">
          {filtered.map((item, i) => (
            <div
            key={item.id}
            className="aspect-square overflow-hidden"
          >
            <img src={item.image} alt="gallery image" className="w-full h-full object-cover" />
          </div>
          ))}
        </div>
      </section>
    </div>
  );
};

export default Gallery;