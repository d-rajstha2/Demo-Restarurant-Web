import { FadeIn, FloatingLeaf } from "@/src/components/MotionElements";
import { Phone, Mail, MapPin, Instagram, Facebook, Clock } from "lucide-react";
import { cn } from "@/src/lib/utils";

const Contact = () => {
  // Simple check for if we are currently open (11 AM to 10 PM)
  const isCurrentlyOpen = () => {
    const hours = new Date().getHours();
    return hours >= 11 && hours < 22;
  };

  return (
    <div className="pt-32 min-h-screen bg-bg overflow-hidden pb-32">
      <div className="max-w-7xl mx-auto px-6 lg:px-12">
        {/* Banner */}
        <FadeIn className="text-center mb-24 space-y-4">
          <div className="text-[11px] font-medium uppercase tracking-[0.4em] text-accent">Visit our sanctuary</div>
          <h1 className="text-5xl lg:text-7xl font-display italic">Find Us & Get in Touch</h1>
        </FadeIn>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 lg:gap-24 items-start">
          {/* Left Column: Info */}
          <div className="lg:col-span-7 space-y-16">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
              <FadeIn className="space-y-6">
                 <div className="inline-flex items-center space-x-2 bg-surface px-4 py-2 rounded-full border border-border-warm">
                    <span className="text-[10px] font-medium uppercase tracking-[0.2em] text-accent">Get In Touch</span>
                 </div>
                 <h3 className="text-3xl font-display italic">Reach Us Directly</h3>
                 <div className="space-y-4">
                    <a href="tel:+97714700000" className="flex items-center space-x-4 text-ink-muted hover:text-accent transition-colors">
                      <div className="w-10 h-10 rounded-full bg-surface flex items-center justify-center text-accent">
                        <Phone size={18} />
                      </div>
                      <div className="flex flex-col">
                        <span className="text-sm font-medium">+977-1-4700000</span>
                        <span className="text-[10px] uppercase opacity-40">Call for reservations</span>
                      </div>
                    </a>
                    <a href="mailto:hello@nepalshome.com" className="flex items-center space-x-4 text-ink-muted hover:text-accent transition-colors">
                      <div className="w-10 h-10 rounded-full bg-surface flex items-center justify-center text-accent">
                        <Mail size={18} />
                      </div>
                      <div className="flex flex-col">
                        <span className="text-sm font-medium">hello@nepalshome.com</span>
                        <span className="text-[10px] uppercase opacity-40">Direct inquiries</span>
                      </div>
                    </a>
                 </div>
                 <div className="flex space-x-4 pt-4">
                    <a href="#" className="p-3 bg-surface rounded-full text-accent hover:bg-accent hover:text-white transition-all"><Instagram size={20} /></a>
                    <a href="#" className="p-3 bg-surface rounded-full text-accent hover:bg-accent hover:text-white transition-all"><Facebook size={20} /></a>
                 </div>
              </FadeIn>

              <FadeIn delay={0.2} className="space-y-6">
                 <div className="inline-flex items-center space-x-2 bg-surface px-4 py-2 rounded-full border border-border-warm">
                    <span className="text-[10px] font-medium uppercase tracking-[0.2em] text-accent">We're Open</span>
                 </div>
                 <h3 className="text-3xl font-display italic">Opening Hours</h3>
                 <div className="space-y-4 border-t border-b border-border-warm py-6">
                    {[
                      { day: "Mon – Fri", time: "11:00 AM – 10:00 PM" },
                      { day: "Sat – Sun", time: "10:00 AM – 11:00 PM" },
                      { day: "Holidays", time: "11:00 AM – 09:00 PM" },
                    ].map((item) => (
                      <div key={item.day} className="flex justify-between items-center text-sm">
                        <span className="font-medium">{item.day}</span>
                        <span className="text-ink-muted">{item.time}</span>
                      </div>
                    ))}
                 </div>
                 <div className="flex items-center space-x-3">
                    <span className={cn(
                      "w-2.5 h-2.5 rounded-full",
                      isCurrentlyOpen() ? "bg-accent2 animate-pulse" : "bg-red-400"
                    )} />
                    <span className="text-xs font-bold uppercase tracking-widest">
                      {isCurrentlyOpen() ? "Currently Open" : "Currently Closed"}
                    </span>
                 </div>
              </FadeIn>
            </div>

            <FadeIn delay={0.4} className="bg-surface p-10 rounded-3xl space-y-6">
              <h3 className="text-2xl font-display italic">Find Our Sanctuary</h3>
              <div className="flex items-start space-x-4">
                 <MapPin className="text-accent mt-1 shrink-0" size={24} />
                 <div className="space-y-2">
                    <p className="text-lg text-ink font-medium">Thamel Marg, Kathmandu 44600</p>
                    <p className="text-ink-muted text-sm leading-relaxed">
                      Near Thamel Chowk. Only 5 minutes walk from Kathmandu Guest House. We are located in a quiet courtyard away from the main road noise.
                    </p>
                    <button className="text-accent text-[11px] font-bold uppercase tracking-[0.2em] pt-4 border-b border-accent pb-1">Get Directions →</button>
                 </div>
              </div>
            </FadeIn>
          </div>

          {/* Right Column: Visual / Placeholder for Map */}
          <div className="lg:col-span-5 space-y-12 h-full">
            <FadeIn direction="right" className="relative h-full min-h-[400px]">
              <div className="blob-radius overflow-hidden shadow-2xl h-full border-8 border-surface bg-gray-200">
                {/* Visual placeholder for map */}
                 <div className="w-full h-full bg-cover bg-center flex items-center justify-center relative overflow-hidden" 
                      style={{ backgroundImage: "url('https://picsum.photos/seed/ktm-map/800/1000')" }}>
                    <div className="absolute inset-0 bg-accent/20 backdrop-blur-[2px]" />
                    <div className="relative z-10 bg-white p-6 rounded-2xl shadow-2xl border border-border-warm text-center space-y-3">
                       <MapPin className="mx-auto text-accent" size={32} />
                       <div>
                          <h4 className="font-display italic text-xl">Nepal&apos;s Home</h4>
                          <p className="text-[10px] uppercase opacity-40">Thamel, Kathmandu</p>
                       </div>
                    </div>
                 </div>
              </div>
            </FadeIn>
          </div>
        </div>
      </div>
      
      <FloatingLeaf className="fixed bottom-0 right-0 -z-10 opacity-5 w-[40vw] h-[40vw]" />
    </div>
  );
};

export default Contact;
