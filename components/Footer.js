export default function Footer() {
  return (
    <footer className="bg-secondary text-primary py-16">
      <div className="container mx-auto px-6 max-w-6xl">
        {/* Logo and Description */}
        <div className="mb-11">
          <img src="/logop.png" alt="In Home Cleaning" className="h-12 mb-8" />
          
        </div>

        {/* Grid Section */}
         <div className="grid grid-cols-2 md:grid-cols-4 gap-6 md:gap-8 mb-12">
          <div className="col-span-2 md:col-span-1">
            <p className="text-base md:text-lg max-w-md leading-relaxed opacity-90">
              Professional home cleaning services that care for your space as much as you do.
            </p>
          </div>
          
          {/* Services */}
          <div>
            <h3 className="text-xs font-bold uppercase tracking-[0.2em] mb-6 opacity-75">Services</h3>
            <ul className="space-y-3 text-base">
              <li><a href="#services" className="hover:opacity-75 transition">Standard Cleaning</a></li>
              <li><a href="#services" className="hover:opacity-75 transition">Deep Cleaning</a></li>
              <li><a href="#services" className="hover:opacity-75 transition">Move In / Out</a></li>
            </ul>
          </div>

          {/* Company */}
          <div>
            <h3 className="text-xs font-bold uppercase tracking-[0.2em] mb-6 opacity-75">Company</h3>
            <ul className="space-y-3 text-base">
              <li><a href="#" className="hover:opacity-75 transition">About Us</a></li>
              <li><a href="#" className="hover:opacity-75 transition">Careers</a></li>
              <li><a href="#" className="hover:opacity-75 transition">Blog</a></li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3 className="text-xs font-bold uppercase tracking-[0.2em] mb-6 opacity-75">Contact</h3>
            <ul className="space-y-3 text-base">
              <li><a href="tel:+5615621319" className="hover:opacity-75 transition">(561) 562-1319</a></li>
              <li><a href="mailto:in.homecleaning5@gmail.com" className="hover:opacity-75 transition">in.homecleaning5@gmail.com</a></li>
            </ul>
          </div>
        </div>

        {/* Divider */}
        <div className="border-t border-secondary/20 py-8">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4 text-sm opacity-75">
            <p>© {new Date().getFullYear()} In Home Cleaning. All rights reserved.</p>
            <div className="flex gap-6">
              <a href="#" className="hover:opacity-100 transition">Privacy Policy</a>
              <a href="#" className="hover:opacity-100 transition">Terms of Service</a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}
