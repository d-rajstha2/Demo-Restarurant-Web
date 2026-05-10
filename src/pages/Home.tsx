import { Link } from "react-router-dom";
import { motion } from "motion/react";
import { Star, ChevronDown, Instagram } from "lucide-react";
import { FadeIn, StaggerContainer, FloatingLeaf } from "@/src/components/MotionElements";
import { cn } from "@/src/lib/utils";

const Home = () => {
  return (
    <div className="overflow-hidden">
      {/* S1: HERO */}
      <section className="relative min-height-[92vh] flex items-center bg-bg pt-20">
        <div className="max-w-7xl mx-auto px-6 lg:px-12 grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-24 items-center">
          
          {/* Left Column */}
          <div className="lg:col-span-5 space-y-8 z-10">
            <FadeIn delay={0.2}>
              <div className="inline-flex items-center space-x-2 bg-surface px-4 py-2 rounded-full border border-border-warm">
                <span className="w-2 h-2 rounded-full bg-accent2 animate-pulse" />
                <span className="text-[11px] font-medium uppercase tracking-[0.2em] text-ink/60">Thamel, Kathmandu</span>
              </div>
            </FadeIn>

            <FadeIn delay={0.4} className="space-y-4">
              <h1 className="text-5xl lg:text-7xl font-display italic leading-[1.1]">
                Taste the Heart <br />
                <span className="text-accent">of Nepal</span>
              </h1>
              <p className="text-ink-muted text-lg font-light leading-relaxed max-w-md">
                From steaming bowls of thukpa to hand-folded momos — every dish carries a story from the Himalayan foothills.
              </p>
            </FadeIn>

            <FadeIn delay={0.6} className="flex flex-wrap gap-4">
              <button className="bg-accent text-ink-inv px-8 py-4 rounded-full text-sm font-medium tracking-wide hover:bg-accent/90 transition-all hover:translate-y-[-2px]">
                BOOK YOUR TABLE →
              </button>
              <Link to="/menu" className="border border-border-warm text-ink px-8 py-4 rounded-full text-sm font-medium tracking-wide hover:bg-surface transition-all">
                VIEW MENU
              </Link>
            </FadeIn>

            <FadeIn delay={0.8} className="flex items-center space-x-3 text-ink/40">
              <div className="flex">
                {[1, 2, 3, 4, 5].map((i) => (
                  <Star key={i} size={14} fill="currentColor" />
                ))}
              </div>
              <span className="text-xs font-medium tracking-wide">4.9 · 500+ Google Reviews</span>
            </FadeIn>
          </div>

          {/* Right Column */}
          <div className="lg:col-span-7 relative">
            <FadeIn delay={0.3} direction="none">
              <div className="relative group">
                <div className="blob-radius overflow-hidden shadow-2xl aspect-[4/5] lg:aspect-auto lg:h-[600px]">
                  <img
                    src="/image/interior.jpg"
                    alt="Authentic Nepali Dish"
                    className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-105"
                    referrerPolicy="no-referrer"
                  />
                </div>
                
                {/* Floating Badge */}
                <motion.div
                  initial={{ scale: 0, opacity: 0 }}
                  animate={{ scale: 1, opacity: 1 }}
                  transition={{ delay: 0.9, type: "spring", stiffness: 260, damping: 20 }}
                  className="absolute -bottom-6 -left-6 w-32 h-32 bg-accent rounded-full flex flex-col items-center justify-center text-ink-inv shadow-xl animate-pulse-slow"
                >
                  <span className="font-sans text-[10px] uppercase tracking-widest opacity-60">Est.</span>
                  <span className="font-display text-4xl">1974</span>
                </motion.div>

                {/* Botanical Leaf */}
                <FloatingLeaf className="absolute -top-12 -right-12 text-accent2/20" delay={0.8} />
              </div>
            </FadeIn>
          </div>
        </div>

        {/* Scroll Indicator */}
        <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center space-y-2 opacity-30">
          <span className="text-[9px] uppercase tracking-[0.3em] font-medium">Scroll</span>
          <motion.div
            animate={{ height: [0, 40, 0], opacity: [0, 1, 0] }}
            transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
            className="w-[1px] bg-ink"
          />
        </div>
      </section>

      {/* S2: STATS STRIP */}
      <section className="bg-surface-dark py-24 grain-overlay overflow-hidden">
        <div className="max-w-7xl mx-auto px-6 lg:px-12">
          <StaggerContainer className="grid grid-cols-2 lg:grid-cols-4 gap-12 lg:gap-0">
            {[
              { label: "Year Founded", value: "1974" },
              { label: "Menu Items", value: "80+" },
              { label: "Serving Kathmandu", value: "50 Yrs" },
              { label: "Authentic Recipes", value: "100%" },
            ].map((stat, idx) => (
              <motion.div
                key={stat.label}
                variants={{
                  initial: { opacity: 0, y: 20 },
                  animate: { opacity: 1, y: 0 },
                }}
                className={cn(
                  "flex flex-col items-center lg:items-start space-y-2 px-8",
                  idx !== 3 && "lg:border-r lg:border-white/10"
                )}
              >
                <span className="text-accent font-display text-5xl lg:text-6xl">{stat.value}</span>
                <span className="text-ink-inv/40 text-[10px] uppercase tracking-[0.2em] font-medium">{stat.label}</span>
              </motion.div>
            ))}
          </StaggerContainer>
        </div>
      </section>

      {/* S3: ABOUT PREVIEW */}
      <section className="py-32 bg-bg overflow-hidden">
        <div className="max-w-7xl mx-auto px-6 lg:px-12 grid grid-cols-1 lg:grid-cols-12 gap-16 lg:gap-24 items-center">
          {/* Left Column: Image Stack */}
          <div className="lg:col-span-7 relative">
            <div className="relative aspect-[4/5] max-w-[600px] mx-auto lg:mx-0">
              <FadeIn direction="up" className="absolute top-0 left-0 w-3/4 z-10 shadow-2xl overflow-hidden rounded-2xl">
                <img
                  src="/image/back.png"
                  alt="Traditional Kitchen"
                  className="w-full h-full object-cover"
                  referrerPolicy="no-referrer"
                />
              </FadeIn>
              <FadeIn direction="up" delay={0.2} className="absolute bottom-0 right-0 w-[55%] z-20 shadow-2xl overflow-hidden rounded-2xl p-1.5 bg-bg">
                <img
                  src="https://picsum.photos/seed/cooking-1/600/800"
                  alt="Cooking Tradition"
                  className="w-full h-full object-cover rounded-xl"
                  referrerPolicy="no-referrer"
                />
              </FadeIn>
              <motion.div
                initial={{ scale: 0 }}
                whileInView={{ scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: 0.4, type: "spring" }}
                className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 z-30 bg-accent text-ink-inv px-6 py-2 rounded-full font-serif text-sm shadow-xl"
              >
                Our 50 Year Journey
              </motion.div>
              <FloatingLeaf className="absolute -top-12 right-0 text-accent2/20" />
            </div>
          </div>

          {/* Right Column: Text */}
          <div className="lg:col-span-5 space-y-8">
            <FadeIn>
              <div className="inline-flex items-center space-x-2 bg-surface px-4 py-2 rounded-full border border-border-warm">
                <span className="text-[11px] font-medium uppercase tracking-[0.2em] text-accent">Our Story</span>
              </div>
            </FadeIn>
            <FadeIn delay={0.2} className="space-y-6">
              <h2 className="text-4xl lg:text-5xl leading-tight">A Kitchen Built on <br /><span className="italic underline decoration-accent/30 underline-offset-8">Generations</span></h2>
              <p className="text-ink-muted leading-relaxed">
                Nepal&apos;s Home began as a family dream in Thamel — to serve the dishes our grandmothers made: wholesome, slow-cooked, and full of love. Today, every plate we serve carries that same promise.
              </p>
            </FadeIn>
            <FadeIn delay={0.4} className="grid grid-cols-2 gap-8 pt-4 border-t border-border-warm">
              <div className="space-y-1">
                <span className="block font-display text-2xl text-accent">110+</span>
                <span className="text-[10px] uppercase tracking-wider opacity-60">Seasonal Dishes</span>
              </div>
              <div className="space-y-1">
                <span className="block font-display text-2xl text-accent">50 Yrs</span>
                <span className="text-[10px] uppercase tracking-wider opacity-60">Experience</span>
              </div>
            </FadeIn>
            <FadeIn delay={0.5}>
              <Link to="/about" className="group flex items-center space-x-3 text-sm font-medium tracking-wide hover:text-accent transition-colors">
                <span>READ OUR FULL STORY</span>
                <motion.span 
                  animate={{ x: [0, 5, 0] }} 
                  transition={{ duration: 1.5, repeat: Infinity }}
                  className="text-accent"
                >→</motion.span>
              </Link>
            </FadeIn>
          </div>
        </div>
      </section>

      {/* S4: SIGNATURE DISHES */}
      <section className="py-32 bg-surface">
        <div className="max-w-7xl mx-auto px-6 lg:px-12">
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-8 mb-16">
            <FadeIn className="space-y-4">
              <div className="text-[11px] font-medium uppercase tracking-[0.2em] text-accent">Chef's Selection</div>
              <h2 className="text-4xl lg:text-5xl">Our Specialities</h2>
            </FadeIn>
            <FadeIn delay={0.2}>
              <Link to="/menu" className="text-sm font-medium tracking-wide border-b border-accent pb-1 text-accent hover:border-accent2 hover:text-accent2 transition-colors">
                VIEW FULL MENU →
              </Link>
            </FadeIn>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              { 
                name: "Handmade Momo", 
                category: "Steamed & Fried", 
                eyebrow: "Most Loved", 
                img: "/image/momo.jpg",
                desc: "Juicy dumplings with home-made tomato achar."
              },
              { 
                name: "Thakali Dal Bhat", 
                category: "The Complete Meal", 
                eyebrow: "Traditional", 
                img: "/image/smaya baji.png",
                desc: "Fragrant rice, lentil soup, and mountain-grown greens."
              },
              { 
                name: "Himalayan Thukpa", 
                category: "Noodle Soup", 
                eyebrow: "Seasonal", 
                img: "/image/Thupka 🍜.jpg",
                desc: "Warming noodle broth with garden-fresh herbs."
              },
            ].map((dish, idx) => (
              <FadeIn key={dish.name} delay={idx * 0.1} direction="up" className="group">
                <div className="relative overflow-hidden rounded-3xl aspect-[3/4] bg-surface-dark shadow-xl hover:translate-y-[-8px] transition-all duration-500">
                  <img
                    src={dish.img}
                    alt={dish.name}
                    className="w-full h-full object-cover opacity-80 group-hover:opacity-60 group-hover:scale-105 transition-all duration-700"
                    referrerPolicy="no-referrer"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-surface-dark via-transparent to-transparent opacity-80" />
                  <div className="absolute bottom-0 left-0 w-full p-8 space-y-4">
                    <span className="inline-block px-3 py-1 bg-accent/20 backdrop-blur-md rounded-full text-[10px] font-medium uppercase tracking-[0.1em] text-white/80 border border-white/10">
                      {dish.eyebrow}
                    </span>
                    <div className="space-y-1">
                      <h3 className="text-ink-inv text-2xl tracking-wide font-display">{dish.name}</h3>
                      <p className="text-white/60 text-xs font-light leading-relaxed">{dish.desc}</p>
                    </div>
                  </div>
                </div>
              </FadeIn>
            ))}
          </div>
        </div>
      </section>

      {/* S5: MENU PREVIEW */}
      <section className="py-32 bg-bg overflow-hidden">
        <div className="max-w-7xl mx-auto px-6 lg:px-12">
          <FadeIn className="text-center mb-16 space-y-4">
            <div className="text-[11px] font-medium uppercase tracking-[0.2em] text-accent2">Explore Our Flavours</div>
            <h2 className="text-4xl lg:text-5xl">The Daily Menu</h2>
          </FadeIn>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 items-start">
            {/* Menu List */}
            <div className="lg:col-span-7 space-y-12">
              <StaggerContainer className="space-y-8">
                {[
                  { name: "Veg Momo", desc: "Steamed dumplings with achar sauce", price: "280", tag: "Veg" },
                  { name: "Chicken Momo", desc: "Fried or steamed Himalayan dumplings", price: "350", tag: "Classic" },
                  { name: "Samay Baji", desc: "Traditional Newari ceremonial platter", price: "480", tag: "Chef's Pick" },
                  { name: "Aloo Achaar", desc: "Spiced potato salad with sesame seeds", price: "180", tag: "Veg" },
                ].map((item) => (
                  <motion.div
                    key={item.name}
                    variants={{
                      initial: { opacity: 0, x: -20 },
                      animate: { opacity: 1, x: 0 },
                    }}
                    className="flex justify-between items-end border-b border-border-warm pb-4 group cursor-pointer"
                  >
                    <div className="space-y-1">
                      <div className="flex items-center space-x-3">
                        <h3 className="text-xl font-medium font-sans group-hover:text-accent transition-colors">{item.name}</h3>
                        <span className="text-[9px] uppercase tracking-widest px-2 py-0.5 bg-surface rounded-full text-ink/40">{item.tag}</span>
                      </div>
                      <p className="text-sm text-ink-muted italic font-light">{item.desc}</p>
                    </div>
                    <span className="font-display text-accent text-lg">NPR {item.price}</span>
                  </motion.div>
                ))}
              </StaggerContainer>
              <FadeIn delay={0.4}>
                <Link to="/menu" className="inline-block bg-surface-dark text-ink-inv px-8 py-4 rounded-full text-xs font-medium tracking-widest hover:bg-accent transition-all">
                  VIEW COMPLETE MENU
                </Link>
              </FadeIn>
            </div>

            {/* Featured Panel */}
            <div className="lg:col-span-5">
              <FadeIn direction="right" className="relative group">
                <div className="blob-radius overflow-hidden shadow-2xl aspect-square">
                  <img
                    src="/image/smaya baji.png"
                    alt="Featured Dish"
                    className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-105"
                    referrerPolicy="no-referrer"
                  />
                </div>
                <div className="absolute -bottom-8 -right-8 bg-surface p-8 shadow-xl rounded-2xl border border-border-warm max-w-[240px]">
                  <span className="text-[9px] uppercase tracking-widest text-accent font-bold block mb-2">Today's Special</span>
                  <h4 className="font-display italic text-xl mb-2">Newari Samay Baji</h4>
                  <p className="text-[11px] text-ink-muted leading-relaxed uppercase tracking-tighter">A rich collection of traditional Newari items served on special occasions.</p>
                </div>
              </FadeIn>
            </div>
          </div>
        </div>
      </section>

      {/* S6: WHY CHOOSE US */}
      <section className="py-32 bg-surface-dark grain-overlay relative overflow-hidden">
        <div className="max-w-4xl mx-auto px-6 text-center space-y-16 relative z-10">
          <FadeIn className="space-y-4">
            <div className="text-[11px] font-medium uppercase tracking-[0.2em] text-accent">Our Philosophy</div>
            <h2 className="text-4xl lg:text-5xl text-ink-inv italic leading-tight">More Than a Meal — <br />A Journey</h2>
          </FadeIn>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
            {[
              { icon: "🏔️", title: "Authenticity", desc: "Family recipes preserved for over five decades." },
              { icon: "🌿", title: "Fresh Daily", desc: "Market-sourced ingredients, prepared every morning." },
              { icon: "🤝", title: "Hospitality", desc: "The Nepali tradition of treating every guest as God." },
            ].map((feature, idx) => (
              <FadeIn key={feature.title} delay={idx * 0.15} className="space-y-4">
                <div className="text-4xl">{feature.icon}</div>
                <h3 className="text-xl text-ink-inv font-display">{feature.title}</h3>
                <p className="text-ink-inv/40 text-sm leading-relaxed">{feature.desc}</p>
              </FadeIn>
            ))}
          </div>

          <FloatingLeaf className="absolute top-0 -left-20 text-white/5 w-64 h-64" />
          <FloatingLeaf className="absolute bottom-0 -right-20 text-white/5 w-64 h-64" delay={2} />
        </div>
      </section>

      {/* S7: TESTIMONIALS */}
      <section className="py-32 bg-bg overflow-hidden">
        <div className="max-w-7xl mx-auto px-6 lg:px-12">
          <FadeIn className="text-center mb-24 space-y-4">
            <div className="text-[11px] font-medium uppercase tracking-[0.2em] text-accent">Kind Words</div>
            <h2 className="text-4xl lg:text-5xl">From Our Guests</h2>
          </FadeIn>

          {/* Marquee Strip Layer */}
          <div className="relative w-full overflow-hidden mb-24">
            <motion.div
              animate={{ x: ["0%", "-50%"] }}
              transition={{ duration: 40, repeat: Infinity, ease: "linear" }}
              className="flex whitespace-nowrap space-x-12 px-6"
            >
              {[1, 2, 3, 4, 5, 6].map((i) => (
                <div key={i} className="flex-shrink-0 w-[400px] bg-surface p-10 rounded-3xl border border-border-warm space-y-6">
                  <div className="flex text-accent">
                    {[1, 2, 3, 4, 5].map((s) => <Star key={s} size={14} fill="currentColor" />)}
                  </div>
                  <p className="font-serif italic text-xl text-ink leading-relaxed whitespace-normal lowercase">
                    "The dal bhat took me straight back to Pokhara. genuinely the most authentic Nepali food outside of nepal."
                  </p>
                  <div className="flex items-center space-x-4">
                    <div className="w-10 h-10 rounded-full bg-border-warm overflow-hidden">
                      <img src={`https://i.pravatar.cc/100?u=${i}`} alt="Avatar" referrerPolicy="no-referrer" />
                    </div>
                    <div>
                      <h4 className="text-sm font-medium">Guest User {i}</h4>
                      <p className="text-[10px] uppercase tracking-wider text-ink/40">Google Review</p>
                    </div>
                  </div>
                </div>
              ))}
            </motion.div>
          </div>

          {/* Manual Carousel Logic (Simplified for static display in this context) */}
          <FadeIn delay={0.4} className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="bg-surface-dark p-12 rounded-[40px] text-ink-inv space-y-8 relative overflow-hidden">
              <div className="text-7xl font-display text-accent/20 absolute -top-4 -left-4">“</div>
              <p className="text-2xl font-serif leading-relaxed italic z-10 relative">
                "Momos are handmade and you can taste the difference. The achar is absolutely perfect. A true hidden gem in Thamel."
              </p>
              <div className="flex items-center space-x-4">
                <div className="w-12 h-12 rounded-full border border-white/10 overflow-hidden">
                  <img src="https://i.pravatar.cc/100?u=99" alt="Avatar" referrerPolicy="no-referrer" />
                </div>
                <div>
                  <h4 className="font-sans font-medium">James T.</h4>
                  <p className="text-[10px] uppercase tracking-widest opacity-40">TripAdvisor Elite</p>
                </div>
              </div>
            </div>
            
            <div className="bg-accent p-12 rounded-[40px] text-ink-inv space-y-8 relative overflow-hidden">
              <div className="text-7xl font-display text-white/10 absolute -top-4 -left-4">“</div>
              <p className="text-2xl font-serif leading-relaxed italic z-10 relative">
                "The warmth of the staff matches the warmth of the food. Every visiting friend of mine gets a meal here."
              </p>
              <div className="flex items-center space-x-4">
                <div className="w-12 h-12 rounded-full border border-white/10 overflow-hidden">
                  <img src="https://i.pravatar.cc/100?u=88" alt="Avatar" referrerPolicy="no-referrer" />
                </div>
                <div>
                  <h4 className="font-sans font-medium">Anita R.</h4>
                  <p className="text-[10px] uppercase tracking-widest opacity-40">Kathmandu Resident</p>
                </div>
              </div>
            </div>
          </FadeIn>
        </div>
      </section>

      {/* S8: RESERVATION CTA STRIP */}
      <section className="bg-accent py-20 relative overflow-hidden">
        <div className="absolute inset-0 opacity-5 grayscale pointer-events-none">
          <div className="w-full h-full p-4 grid grid-cols-12 gap-1 items-center justify-center">
            {Array.from({ length: 48 }).map((_, i) => (
              <div key={i} className="text-4xl text-white">⬥</div>
            ))}
          </div>
        </div>
        
        <div className="max-w-7xl mx-auto px-6 lg:px-12 flex flex-col lg:flex-row justify-between items-center gap-8 relative z-10">
          <FadeIn className="text-center lg:text-left space-y-2">
            <h3 className="text-3xl lg:text-4xl text-ink-inv font-display leading-tight">Ready to Experience <br className="hidden lg:block" /> Nepal&apos;s Home?</h3>
            <p className="text-ink-inv/60 text-sm tracking-wide">Walk-ins welcome · Reservations preferred on weekends</p>
          </FadeIn>
          <FadeIn delay={0.2} className="flex flex-wrap justify-center gap-4">
            <button className="bg-ink-inv text-accent px-10 py-5 rounded-full text-xs font-bold tracking-[0.2em] hover:bg-surface transition-all shadow-xl">
              BOOK ONLINE →
            </button>
            <button className="border border-white/30 text-ink-inv px-10 py-5 rounded-full text-xs font-bold tracking-[0.2em] hover:bg-white/10 transition-all">
              CALL NOW
            </button>
          </FadeIn>
        </div>
      </section>

      {/* S9: INSTAGRAM FEED */}
      <section className="bg-bg">
        <div className="flex overflow-x-auto no-scrollbar">
          {[1, 2, 3, 4, 5, 2, 3].map((i, idx) => (
            <div key={idx} className="flex-shrink-0 w-1/2 md:w-1/4 lg:w-1/5 aspect-square relative group cursor-pointer overflow-hidden">
              <img
                src={`https://picsum.photos/seed/insta-nepal-${idx}/600/600`}
                alt="Instagram Feed"
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                referrerPolicy="no-referrer"
              />
              <div className="absolute inset-0 bg-surface-dark/0 group-hover:bg-surface-dark/40 transition-colors flex items-center justify-center">
                <Instagram size={24} className="text-white opacity-0 group-hover:opacity-100 transition-opacity" />
              </div>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
};

export default Home;
