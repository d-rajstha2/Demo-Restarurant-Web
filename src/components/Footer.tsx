import { Link } from "react-router-dom";
import { Instagram, Facebook, MapPin, Phone, Mail } from "lucide-react";

export const Footer = () => {
  return (
    <footer className="bg-surface-dark text-ink-inv pt-24 pb-12 grain-overlay">
      <div className="max-w-7xl mx-auto px-6 lg:px-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 lg:gap-24 mb-24">
          {/* Brand */}
          <div className="space-y-6">
            <div className="flex flex-col">
              <span className="font-display italic text-accent text-3xl leading-none">Nepal&apos;s Home</span>
              <span className="font-sans text-[10px] uppercase tracking-[0.2em] opacity-60 mt-1">Authentic Nepali Cuisine</span>
            </div>
            <p className="text-ink-inv/60 text-sm leading-relaxed max-w-xs">
              Every dish we serve carries a story from the Himalayan foothills, preserved through generations of family tradition.
            </p>
            <div className="flex items-center space-x-4">
              <a href="#" className="w-10 h-10 rounded-full border border-white/10 flex items-center justify-center hover:bg-accent hover:border-accent transition-all">
                <Instagram size={18} />
              </a>
              <a href="#" className="w-10 h-10 rounded-full border border-white/10 flex items-center justify-center hover:bg-accent hover:border-accent transition-all">
                <Facebook size={18} />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div className="space-y-6">
            <h4 className="font-sans text-[11px] font-medium uppercase tracking-[0.2em] text-accent">Navigation</h4>
            <ul className="space-y-4">
              {["Home", "Menu", "Our Story", "Gallery", "Contact"].map((item) => (
                <li key={item}>
                  <Link to={item === "Home" ? "/" : `/${item.toLowerCase().replace(" ", "")}`} className="text-sm text-ink-inv/70 hover:text-white transition-colors">
                    {item}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Opening Hours */}
          <div className="space-y-6">
            <h4 className="font-sans text-[11px] font-medium uppercase tracking-[0.2em] text-accent">Opening Hours</h4>
            <div className="space-y-4 text-sm text-ink-inv/70">
              <div className="flex justify-between">
                <span>Mon – Fri</span>
                <span>11am – 10pm</span>
              </div>
              <div className="flex justify-between">
                <span>Sat – Sun</span>
                <span>10am – 11pm</span>
              </div>
              <p className="text-[10px] italic mt-4 opacity-50">* Kitchen closes 45 mins before closing time</p>
            </div>
          </div>

          {/* Contact */}
          <div className="space-y-6">
            <h4 className="font-sans text-[11px] font-medium uppercase tracking-[0.2em] text-accent">Location</h4>
            <ul className="space-y-4 text-sm text-ink-inv/70">
              <li className="flex items-start space-x-3">
                <MapPin size={16} className="text-accent mt-0.5 shrink-0" />
                <span>Thamel Marg, Kathmandu 44600, Nepal</span>
              </li>
              <li className="flex items-center space-x-3">
                <Phone size={16} className="text-accent shrink-0" />
                <span>+977-1-4700000</span>
              </li>
              <li className="flex items-center space-x-3">
                <Mail size={16} className="text-accent shrink-0" />
                <span>hello@nepalshome.com</span>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="pt-8 border-t border-white/10 flex flex-col md:flex-row justify-between items-center text-[11px] uppercase tracking-widest text-ink-inv/40">
          <p>© 2025 Nepal&apos;s Home. All rights reserved.</p>
          <div className="flex items-center space-x-1 mt-4 md:mt-0">
            <span>Made with</span>
            <span className="text-accent">❤️</span>
            <span>in Kathmandu</span>
          </div>
        </div>
      </div>
    </footer>
  );
};
