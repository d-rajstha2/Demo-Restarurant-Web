import { useState, useRef, useEffect } from "react";
import { motion, AnimatePresence } from "motion/react";
import { FadeIn, StaggerContainer } from "@/src/components/MotionElements";
import { cn } from "@/src/lib/utils";

const menuData = {
  Starters: [
    { name: "Veg Momo", desc: "Hand-folded dumplings with vegetable filling & spice", price: "280", tags: ["Veg", "Classic"] },
    { name: "Chicken Momo", desc: "Steamed or fried with sesame tomato achar", price: "350", tags: ["Classic"] },
    { name: "Samay Baji", desc: "Traditional platter: beaten rice, black & green beans, ginger", price: "480", tags: ["Chef's Pick"] },
    { name: "Chatamari", desc: "Nepali rice pancake with egg & mixed veg", price: "220", tags: ["Newari"] },
    { name: "Aloo Achaar", desc: "Traditional potato salad with sesame & fenugreek", price: "180", tags: ["Veg"] },
  ],
  Mains: [
    { name: "Thakali Dal Bhat", desc: "Black lentil soup, rice, seasonal greens, mustard greens", price: "550", tags: ["Traditional"] },
    { name: "Chicken Curry", desc: "Farm-fresh chicken in a rich Himalayan spice gravy", price: "680", tags: ["Spicy"] },
    { name: "Mutton Curry", desc: "Slow-cooked goat meat with secret family spices", price: "850", tags: ["Signature"] },
    { name: "Paneer Tarkari", desc: "Cottage cheese with capsicum in a creamy gravy", price: "520", tags: ["Veg"] },
    { name: "Veg Thali", desc: "Comprehensive assortment of seasonal vegetable items", price: "450", tags: ["Veg"] },
  ],
  Soups: [
    { name: "Thukpa", desc: "Traditional Sherpa noodle soup with garden herbs", price: "380", tags: ["Warm"] },
    { name: "Thenthuk", desc: "Hand-pulled noodle soup with mountain radishes", price: "420", tags: ["Winter Special"] },
    { name: "Lentil Soup", desc: "Creamy black lentil delicacy with garlic fry", price: "250", tags: ["Protein"] },
  ],
  Drinks: [
    { name: "Mango Lassi", desc: "Creamy yogurt drink with organic mango pulp", price: "220", tags: ["Refining"] },
    { name: "Masala Chiya", desc: "Traditional spiced tea with milk & honey", price: "120", tags: ["Classic"] },
    { name: "Himalayan Lemonade", desc: "Fresh lemon with Himalayan pink salt & honey", price: "180", tags: ["Cool"] },
  ],
  Desserts: [
    { name: "Juju Dhau", desc: "The 'King of Yogurt' from Bhaktapur", price: "150", tags: ["Sweet"] },
    { name: "Kheer", desc: "Traditional rice pudding with nuts & saffron", price: "240", tags: ["Celebration"] },
    { name: "Sel Roti & Honey", desc: "Ring-shaped rice bread served with mountain honey", price: "200", tags: ["Classic"] },
  ]
};

const Menu = () => {
  const [activeCategory, setActiveCategory] = useState<keyof typeof menuData>("Starters");
  const scrollContainerRef = useRef<HTMLDivElement>(null);

  const categories = Object.keys(menuData) as Array<keyof typeof menuData>;

  return (
    <div className="pt-32 min-h-screen bg-bg overflow-hidden pb-32">
      <div className="max-w-7xl mx-auto px-6 lg:px-12">
        {/* Banner */}
        <FadeIn className="text-center mb-24 space-y-4">
          <div className="text-[11px] font-medium uppercase tracking-[0.4em] text-accent">Flavours of the Himalayas</div>
          <h1 className="text-5xl lg:text-7xl font-display italic">A Culinary Journey</h1>
        </FadeIn>

        {/* Tab Switcher */}
        <div className="sticky top-20 z-40 bg-bg/80 backdrop-blur-sm border-b border-border-warm mb-16 py-4">
          <div 
            ref={scrollContainerRef}
            className="flex items-center space-x-2 md:space-x-4 lg:space-x-8 overflow-x-auto no-scrollbar pb-2"
          >
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => setActiveCategory(cat)}
                className={cn(
                  "relative px-6 py-2 rounded-full text-sm font-medium tracking-widest transition-all whitespace-nowrap",
                  activeCategory === cat ? "text-ink-inv" : "text-ink-muted hover:text-ink"
                )}
              >
                {activeCategory === cat && (
                  <motion.div
                    layoutId="menu-tab-active"
                    className="absolute inset-0 bg-accent rounded-full -z-10"
                    transition={{ type: "spring", stiffness: 300, damping: 30 }}
                  />
                )}
                {cat.toUpperCase()}
              </button>
            ))}
          </div>
        </div>

        {/* Menu Content */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 lg:gap-24 items-start">
          {/* List Section */}
          <div className="lg:col-span-7">
            <AnimatePresence mode="wait">
              <motion.div
                key={activeCategory}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -20 }}
                transition={{ duration: 0.4, ease: "easeOut" }}
                className="space-y-12"
              >
                {menuData[activeCategory].map((item, idx) => (
                  <motion.div
                    key={item.name}
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: idx * 0.05 }}
                    className="flex justify-between items-start group border-b border-border-warm pb-6"
                  >
                    <div className="space-y-2 max-w-md">
                      <div className="flex items-center space-x-3">
                        <h3 className="text-2xl font-display group-hover:text-accent transition-colors">
                          {item.name}
                        </h3>
                        <div className="flex space-x-2">
                          {item.tags.map(tag => (
                            <span key={tag} className="text-[9px] uppercase tracking-tighter bg-surface px-2 py-0.5 rounded-full opacity-50">
                              {tag}
                            </span>
                          ))}
                        </div>
                      </div>
                      <p className="text-sm text-ink-muted font-light leading-relaxed italic">{item.desc}</p>
                    </div>
                    <span className="font-display text-accent text-xl mt-1">NPR {item.price}</span>
                  </motion.div>
                ))}
              </motion.div>
            </AnimatePresence>
          </div>

          {/* Side Panel: Feature Image */}
          <div className="lg:col-span-5 hidden lg:block sticky top-64">
            <AnimatePresence mode="wait">
              <motion.div
                key={activeCategory}
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 1.05 }}
                transition={{ duration: 0.5 }}
                className="relative group"
              >
                <div className="blob-radius overflow-hidden shadow-2xl aspect-square border-8 border-surface p-4">
                  <img
                    src={
                      activeCategory === "Starters" ? "/image/momo.jpg" :
                      activeCategory === "Mains" ? "/image/samay-baji.png" :
                      activeCategory === "Soups" ? "/image/thukpa.jpg" :
                      `/image/interior.jpg`
                    }
                    alt={activeCategory}
                    className="w-full h-full object-cover blob-radius"
                    referrerPolicy="no-referrer"
                  />
                </div>
                <div className="absolute -top-6 -right-6 bg-accent2 text-white p-6 shadow-xl rounded-full w-24 h-24 flex items-center justify-center text-center animate-pulse-slow">
                  <span className="text-[10px] uppercase font-bold tracking-tighter leading-tight">Fresh Daily</span>
                </div>
              </motion.div>
            </AnimatePresence>
            <div className="mt-12 p-8 bg-surface rounded-3xl border border-border-warm">
              <h4 className="font-display italic text-xl mb-4 text-accent">Chef's Tip</h4>
              <p className="text-ink-muted text-sm leading-relaxed">
                "Our {activeCategory} are best paired with traditional Nepali home-brewed tea. Ask our staff for the harvest of the week."
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Menu;
