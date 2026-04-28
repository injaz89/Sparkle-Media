import { InstagramIcon, FacebookIcon, LinkedinIcon, TikTokIcon } from "@/components/SocialIcons";

export function Footer() {
  return (
    <footer className="bg-white pt-24 pb-12 overflow-hidden relative border-t border-gray-100">
      {/* Decorative Orbs */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-cyan-100/30 blur-3xl pointer-events-none" />
      
      <div className="max-w-7xl mx-auto px-6 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-16 mb-20">
          <div>
            <h2 className="text-5xl md:text-7xl font-bold text-navy mb-6">
              Let&apos;s talk.
            </h2>
            <p className="text-xl text-gray-500 font-light max-w-sm mb-8">
              Ready to make your brand sparkle? Reach out, and let&apos;s begin the journey.
            </p>
            <a 
              href="/contact"
              className="inline-block bg-cyan-500 text-white px-8 py-4 font-bold hover:bg-navy transition-all shadow-lg shadow-cyan-500/20"
            >
              Start Your Journey
            </a>
          </div>
          
          <div className="flex flex-col justify-center space-y-8 md:pl-16">
            <div>
              <p className="text-gray-400 text-sm font-bold tracking-widest uppercase mb-2">Phone</p>
              <a href="tel:+94776540689" className="text-3xl font-light text-navy hover:text-cyan-500 transition-colors">
                (+94) 77 654 0689
              </a>
            </div>
            <div>
              <p className="text-gray-400 text-sm font-bold tracking-widest uppercase mb-2">Email</p>
              <a href="mailto:hello@sparklemedia.lk" className="text-3xl font-light text-navy hover:text-cyan-500 transition-colors">
                hello@sparklemedia.lk
              </a>
            </div>
            <div className="pt-4">
              <p className="text-gray-400 text-sm font-bold tracking-widest uppercase mb-4">Follow Us</p>
              <div className="flex space-x-4">
                <a href="#" className="w-12 h-12 bg-gray-50 border border-gray-100 flex items-center justify-center hover:bg-cyan-500 transition-all text-gray-400 hover:text-white">
                  <InstagramIcon className="w-5 h-5" />
                </a>
                <a href="#" className="w-12 h-12 bg-gray-50 border border-gray-100 flex items-center justify-center hover:bg-cyan-500 transition-all text-gray-400 hover:text-white">
                  <FacebookIcon className="w-5 h-5" />
                </a>
                <a href="#" className="w-12 h-12 bg-gray-50 border border-gray-100 flex items-center justify-center hover:bg-cyan-500 transition-all text-gray-400 hover:text-white">
                  <LinkedinIcon className="w-5 h-5" />
                </a>
                <a href="#" className="w-12 h-12 bg-gray-50 border border-gray-100 flex items-center justify-center hover:bg-cyan-500 transition-all text-gray-400 hover:text-white">
                  <TikTokIcon className="w-5 h-5" />
                </a>
              </div>
            </div>
          </div>
        </div>

        <div className="pt-8 border-t border-gray-100 flex flex-col md:flex-row justify-between items-center text-sm text-gray-400 font-light">
          <p>© {new Date().getFullYear()} Sparkle Media. All rights reserved.</p>
          <div className="flex space-x-6 mt-4 md:mt-0">
            <a href="#" className="hover:text-cyan-500 transition-colors">Privacy Policy</a>
            <a href="#" className="hover:text-cyan-500 transition-colors">Terms of Service</a>
          </div>
        </div>
      </div>
    </footer>
  );
}
