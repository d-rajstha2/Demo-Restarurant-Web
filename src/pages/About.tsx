import { FadeIn, StaggerContainer, FloatingLeaf } from "@/src/components/MotionElements";
import { Link } from "react-router-dom";
import { motion } from "motion/react";

const About = () => {
  return (
    <div className="pt-24 min-h-screen bg-bg overflow-hidden">
      {/* Banner */}
      <section className="py-20 lg:py-32">
        <div className="max-w-7xl mx-auto px-6 lg:px-12 grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-24 items-center">
          <div className="lg:col-span-7 space-y-6">
            <FadeIn>
              <div className="text-[11px] font-medium uppercase tracking-[0.3em] text-accent mb-4">Our History</div>
              <h1 className="text-5xl lg:text-7xl font-display italic leading-tight">
                Where Every Dish <br />
                <span className="text-accent underline decoration-accent/20 underline-offset-8">Tells a Story</span>
              </h1>
            </FadeIn>
          </div>
          <div className="lg:col-span-5 relative">
            <FadeIn delay={0.2} direction="none">
              <div className="blob-radius overflow-hidden shadow-2xl aspect-square lg:aspect-[4/5] bg-surface-dark">
                <img
                  src="https://picsum.photos/seed/about-banner/800/1000"
                  alt="Traditional Cooking"
                  className="w-full h-full object-cover opacity-80"
                  referrerPolicy="no-referrer"
                />
              </div>
            </FadeIn>
            <FloatingLeaf className="absolute -top-10 -right-10 text-accent2/20" delay={1} />
          </div>
        </div>
      </section>

      {/* Origin Story: Reversed Overlap */}
      <section className="py-32 bg-surface">
        <div className="max-w-7xl mx-auto px-6 lg:px-12 grid grid-cols-1 lg:grid-cols-12 gap-16 lg:gap-24 items-center">
          <div className="lg:col-span-5 lg:order-2">
             <div className="relative aspect-[4/5] max-w-[600px] mx-auto lg:mx-0">
               <FadeIn direction="up" className="absolute top-0 right-0 w-3/4 z-10 shadow-2xl overflow-hidden rounded-2xl">
                 <img
                   src="https://picsum.photos/seed/old-kathmandu/800/1000"
                   alt="Old Thamel"
                   className="w-full h-full object-cover"
                   referrerPolicy="no-referrer"
                 />
               </FadeIn>
               <FadeIn direction="up" delay={0.2} className="absolute bottom-0 left-0 w-[55%] z-20 shadow-2xl overflow-hidden rounded-2xl p-1.5 bg-surface">
                 <img
                   src="https://picsum.photos/seed/family-rec/600/800"
                   alt="Family Recipe"
                   className="w-full h-full object-cover rounded-xl"
                   referrerPolicy="no-referrer"
                 />
               </FadeIn>
             </div>
          </div>

          <div className="lg:col-span-7 space-y-8 lg:order-1">
            <FadeIn className="space-y-6">
              <h2 className="text-4xl lg:text-5xl">Preserving the <span className="italic">Heritage</span></h2>
              <div className="space-y-6 text-ink-muted leading-relaxed max-w-2xl">
                <p>
                  Nepal&apos;s Home was established in 1974 amidst the vibrant, narrow streets of Thamel. What started as a small, four-table eatery serving trekking guides has grown into a landmark of authentic Nepali culinary tradition.
                </p>
                <p>
                  Our founder, Aama Kanchi, believed that food is the most direct bridge to one's culture. She insisted on sourcing lentils from the high hills, spices from the local markets, and slow-cooking everything over a low flame to preserve moisture and flavour.
                </p>
                <p>
                  Fifty years later, we still use her wooden mortars and pestles. We still hand-fold every momo with the same precision. Because in a world that&apos;s moving too fast, we believe some things must stay slow.
                </p>
              </div>
            </FadeIn>
          </div>
        </div>
      </section>

      {/* Stats Strip */}
      <section className="bg-surface-dark py-20 grain-overlay">
        <div className="max-w-7xl mx-auto px-12 grid grid-cols-2 lg:grid-cols-4 gap-12 lg:gap-0">
          {[
            { label: "Locations", value: "2" },
            { label: "Awards Won", value: "12" },
            { label: "Family Run Since", value: "1974" },
            { label: "Total Years", value: "50" },
          ].map((stat, idx) => (
            <FadeIn key={stat.label} delay={idx * 0.1} className="flex flex-col items-center border-white/5 last:border-0 lg:border-r">
                <span className="text-accent font-display text-5xl mb-2">{stat.value}</span>
                <span className="text-white/40 text-[10px] uppercase tracking-widest">{stat.label}</span>
            </FadeIn>
          ))}
        </div>
      </section>

      {/* Team Cards */}
      <section className="py-32 bg-bg">
        <div className="max-w-7xl mx-auto px-6 lg:px-12">
          <FadeIn className="text-center mb-24">
            <h2 className="text-4xl lg:text-5xl mb-4">The Heart of our Kitchen</h2>
            <p className="text-ink-muted max-w-xl mx-auto">The hands and hearts that bring the flavours of the Himalayas to your plate every single day.</p>
          </FadeIn>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-12 lg:gap-24">
            {[
              { name: "Aama Kanchi", role: "Founding Mother", img: "https://i.pravatar.cc/300?u=aama" },
              { name: "Rabin Shrestha", role: "Head Chef", img: "https://i.pravatar.cc/300?u=chefrabin" },
              { name: "Sita Gurung", role: "Sous Chef", img: "https://i.pravatar.cc/300?u=sous" },
            ].map((member, i) => (
              <FadeIn key={member.name} delay={i * 0.2} className="group text-center space-y-6">
                <div className="relative aspect-square rounded-full overflow-hidden border-8 border-surface shadow-2xl transition-transform duration-500 group-hover:scale-105">
                  <img src={member.img} alt={member.name} className="w-full h-full object-cover" referrerPolicy="no-referrer" />
                </div>
                <div className="space-y-1">
                  <h3 className="text-2xl font-display italic">{member.name}</h3>
                  <p className="text-accent text-xs uppercase tracking-widest font-medium">{member.role}</p>
                </div>
              </FadeIn>
            ))}
          </div>
        </div>
      </section>
      
      {/* Values */}
      <section className="py-32 bg-surface-dark text-center relative overflow-hidden">
        <div className="max-w-4xl mx-auto px-6 space-y-12 relative z-10">
          <FadeIn className="space-y-4">
            <div className="text-accent uppercase tracking-widest text-xs font-bold">Our Commitment</div>
            <h2 className="text-4xl lg:text-6xl text-ink-inv leading-tight">Authenticity. Community. <br /> <span className="italic">Slow Food.</span></h2>
          </FadeIn>
          <FadeIn delay={0.2}>
            <p className="text-ink-inv/60 text-lg font-light leading-relaxed">
              We don&apos;t believe in fusion. We believe in preservation. Our kitchen is a living museum of Nepali flavour, serving our community with the same dedication we have for fifty years.
            </p>
          </FadeIn>
        </div>
        <FloatingLeaf className="absolute -bottom-20 -left-20 text-white/5 w-96 h-96" />
      </section>

      {/* Final CTA */}
       <section className="bg-accent py-20">
        <div className="max-w-7xl mx-auto px-6 flex flex-col md:flex-row justify-between items-center gap-8">
          <h3 className="text-3xl lg:text-4xl text-ink-inv font-display italic">Ready to experience the tradition?</h3>
          <Link to="/menu" className="bg-ink-inv text-accent px-12 py-5 rounded-full text-xs font-bold tracking-[0.2em] shadow-2xl hover:bg-surface transition-all">
            EXPLORE OUR MENU →
          </Link>
        </div>
      </section>
    </div>
  );
};

export default About;
