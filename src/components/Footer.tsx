
export default function Footer() {
  return (
    <footer aria-label="Site footer" className="bg-charcoal text-white pt-24 pb-12 px-6 md:px-16 rounded-t-[4rem] -mt-8 relative z-50">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-12 md:gap-8 mb-24">

          <div className="md:col-span-5 flex flex-col gap-8">
            <a href="#" aria-label="Sparkle Pools & Spas" className="block w-fit -ml-2 bg-navy p-4 rounded-2xl">
              <img
                src="https://cdn-edcdm.nitrocdn.com/ZuiqFSGmEHYhFFwEbQgUnDVSoDwfuehZ/assets/images/optimized/rev-375ff29/wp-content/uploads/2021/09/logo.png"
                alt="Sparkle Pools & Spas Logo"
                className="h-12 md:h-16 w-auto object-contain"
              />
            </a>
            <div className="flex flex-col gap-2 text-cream/70 text-base">
              <a href="tel:0295483133" className="hover:text-aqua transition-colors font-medium text-white">(02) 9548 3133</a>
              <a href="mailto:enquiries@sparklepools.com.au" className="hover:text-aqua transition-colors">enquiries@sparklepools.com.au</a>
              <span className="mt-2 text-sm italic">962 Old Princes Highway Engadine NSW 2233 📍</span>
            </div>
            <div className="flex flex-col gap-1 text-xs text-cream/40 font-mono tracking-widest uppercase mt-4">
              <span>Open 7 Days a Week</span>
            </div>
          </div>

          <nav aria-label="Services" className="md:col-span-2 md:col-start-8 flex flex-col gap-4">
            <h4 className="font-mono text-xs text-cream/40 uppercase tracking-widest mb-4">Services</h4>
            <a href="#" className="hover-lift text-cream/80 hover:text-aqua transition-colors">Weekly Care</a>
            <a href="#" className="hover-lift text-cream/80 hover:text-aqua transition-colors">Green Pool Recovery</a>
            <a href="#" className="hover-lift text-cream/80 hover:text-aqua transition-colors">Equipment Repair</a>
            <a href="#" className="hover-lift text-cream/80 hover:text-aqua transition-colors">Water Testing</a>
          </nav>

          <nav aria-label="Company" className="md:col-span-2 flex flex-col gap-4">
            <h4 className="font-mono text-xs text-cream/40 uppercase tracking-widest mb-4">Company</h4>
            <a href="#story" className="hover-lift text-cream/80 hover:text-aqua transition-colors">Our Story</a>
            <a href="#reviews" className="hover-lift text-cream/80 hover:text-aqua transition-colors">Testimonials</a>
            <a href="#" className="hover-lift text-cream/80 hover:text-aqua transition-colors">Careers</a>
            <a href="#" className="hover-lift text-cream/80 hover:text-aqua transition-colors">Contact</a>
          </nav>

        </div>

        <div className="flex flex-col md:flex-row justify-between items-center pt-8 border-t border-white/10 gap-6 mt-16">
          <p className="text-cream/40 text-sm">
            &copy; {new Date().getFullYear()} SPARKLE POOL & SPAS. All rights reserved.
          </p>

          <div className="flex gap-6 text-sm text-cream/60">
            <a href="#" className="hover:text-aqua transition-colors">Privacy Policy</a>
            <a href="#" className="hover:text-aqua transition-colors">Terms of Service</a>
          </div>
        </div>
      </div>
    </footer>
  );
}
