import { useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import "../App.css";

export default function Footer({ children }: { children: React.ReactNode }) {
  const location = useLocation();

  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }, [location.pathname]);

  return (
    <div className="min-h-screen relative overflow-hidden bg-black transition-colors">
      <div className="fixed inset-0 z-0 pointer-events-none">
        <div className="absolute inset-0 transition-opacity duration-700 bg-gradient-to-b from-black via-gray-900/95 to-black" />
        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-white/8" />
        <div className="absolute inset-0">
          <div className="absolute top-20 left-10 w-72 h-72 rounded-full blur-3xl bg-blue-500/20 dark:bg-blue-600/20 animate-float" />
          <div className="absolute top-40 right-20 w-96 h-96 rounded-full blur-3xl bg-purple-500/20 dark:bg-purple-600/20 animate-float orb-delay-2" />
          <div className="absolute bottom-20 left-1/3 w-80 h-80 rounded-full blur-3xl bg-orange-500/18 dark:bg-orange-600/18 animate-float orb-delay-4" />
          <div className="absolute bottom-40 right-1/4 w-64 h-64 rounded-full blur-3xl bg-pink-500/18 dark:bg-pink-600/18 animate-float orb-delay-1" />
        </div>
        <div className="absolute inset-0 opacity-10 dark:opacity-15 grain-overlay" />
      </div>

      <div className="relative z-10 min-h-screen flex flex-col">
        <header className="w-full max-w-[1440px] mx-auto px-6 py-4 flex items-center justify-between fixed top-0 left-0 right-0 z-50 bg-slate-1300/5 backdrop-blur-xl border-b border-white/0 shadow-lg">
          <Link to="/" className="flex items-center gap-3">
            <div className="w-9 h-9 rounded-lg bg-gradient-to-br from-blue-600 to-purple-600 flex items-center justify-center flex-shrink-0">
              <span className="text-white font-bold text-lg">TT</span>
            </div>
            <span className="text-white dark:text-white text-xl font-semibold select-none tracking-tight">Tech Talks</span>
          </Link>

          <nav className="hidden md:flex items-center gap-16 ml-0">
            <Link to="/" className={`text-white opacity-90 hover:opacity-100 transition ${location.pathname === "/" ? "opacity-100" : ""}`}>
              Home
            </Link>
            <Link to="/about" className={`text-white opacity-90 hover:opacity-100 transition ${location.pathname === "/about" ? "opacity-100" : ""}`}>
              About
            </Link>
            <Link to="/services" className={`text-white opacity-90 hover:opacity-100 transition ${location.pathname === "/services" ? "opacity-100" : ""}`}>
              Services
            </Link>
            <Link to="/contact" className={`text-white opacity-90 hover:opacity-100 transition ${location.pathname === "/contact" ? "opacity-100" : ""}`}>
              Contact
            </Link>
          </nav>

          <div className="flex items-center gap-3">
            <button className="px-4 py-2 rounded-lg bg-gradient-to-r from-blue-500 to-purple-600 font-medium hover:from-blue-600 hover:to-purple-700 transition shadow-lg hover:shadow-xl">
              <span className="text-white">Get started</span>
            </button>
          </div>
        </header>

        <main className="flex-1 flex flex-col px-6 pb-12 text-center relative pt-20">
          {children}
        </main>

        <footer className="mt-20 w-screen relative left-1/2 -translate-x-1/2 mt-40">
          <div className="bg-gradient-to-br from-slate-00 via-purple-1300 to-slate-900 px-20 py-16 w-full">
            <div className="w-full max-w-[1440px] mx-auto px-6">
              <div className="grid md:grid-cols-3 gap-8 text-center">
                <div>
                  <div className="text-5xl md:text-6xl font-bold mb-3">
                    <span className="bg-gradient-to-r from-blue-400 to-cyan-400 bg-clip-text text-transparent">
                      &lt; 24hrs
                    </span>
                  </div>
                  <p className="text-white/80 text-lg">Average Response Time</p>
                </div>
                <div>
                  <div className="text-5xl md:text-6xl font-bold mb-3">
                    <span className="bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">
                      100%
                    </span>
                  </div>
                  <p className="text-white/80 text-lg">Free Consultations</p>
                </div>
                <div>
                  <div className="text-5xl md:text-6xl font-bold mb-3">
                    <span className="bg-gradient-to-r from-blue-400 via-teal-400 to-cyan-400 bg-clip-text text-transparent">
                      No Obligation
                    </span>
                  </div>
                  <p className="text-white/80 text-lg">Just Honest Advice</p>
                </div>
              </div>
            </div>
          </div>

          <div className="bg-gradient-to-b from-blue-600 via-blue-500 to-teal-400 py-20 w-full">
            <div className="w-full max-w-[1440px] mx-auto px-6 text-center">
              <div className="inline-flex items-center gap-2 px-4 py-2 bg-blue-300/30 rounded-full mb-6">
                <svg className="w-4 h-4 text-blue-100" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5"/>
                </svg>
                <span className="text-blue-100 font-semibold text-sm">Ready to Get Started?</span>
              </div>
              <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6">
                Let's Build Something{" "}
                <span className="bg-gradient-to-r from-blue-200 to-cyan-200 bg-clip-text text-transparent">
                  Amazing
                </span>{" "}
                Together
              </h2>
              <p className="text-white/90 text-lg md:text-xl mb-8 max-w-2xl mx-auto">
                Schedule a free consultation and discover how AI automation can transform your business
              </p>
              <button className="px-8 py-4 bg-gradient-to-r from-blue-500 to-purple-600 text-white font-bold rounded-xl text-lg hover:from-blue-600 hover:to-purple-700 transition-all duration-300 shadow-lg hover:shadow-xl flex items-center gap-2 mx-auto">
                <span className="text-white">Book a Free Call</span>
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5"/>
                </svg>
              </button>
            </div>
          </div>

          <div className="mt-10">
            <div className="w-full max-w-[1440px] mx-auto px-6">
              <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-10 xl:gap-12 mb-12">
                <div className="lg:max-w-xs">
                  <div className="flex items-center gap-2.5 mb-4">
                    <div className="w-10 h-10 rounded-lg bg-gradient-to-br from-blue-600 to-purple-600 flex items-center justify-center flex-shrink-0">
                      <span className="text-white font-bold text-xl">TT</span>
                    </div>
                    <span className="text-white font-bold text-xl">Tech Talks</span>
                  </div>
                  <p className="text-white/70 text-sm leading-relaxed mb-6">
                    Empowering businesses with AI automation solutions that scale operations and drive growth.
                  </p>
                  <div className="space-y-3">
                    <div className="flex items-start gap-3">
                      <svg className="w-4 h-4 text-white/60 flex-shrink-0 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                      </svg>
                      <a href="mailto:contact@sakethaiautomation.com" className="text-white/70 hover:text-white transition text-sm break-words">
                        contact@sakethaiautomation.com
                      </a>
                    </div>
                    <div className="flex items-center gap-3">
                      <svg className="w-4 h-4 text-white/60 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                      </svg>
                      <a href="tel:+918187889752" className="text-white/70 hover:text-white transition text-sm">
                        +91 81878 89752
                      </a>
                    </div>
                  </div>
                </div>

                <div>
                  <h3 className="text-white font-bold text-lg mb-5 text-left px-1 pl-18">Quick Links</h3>
                  <ul className="space-y-3 text-left px-1 pl-18">
                    <li><Link to="/" className="text-white/70 hover:text-white transition text-sm inline-block">Home</Link></li>
                    <li><Link to="/about" className="text-white/70 hover:text-white transition text-sm inline-block">About</Link></li>
                    <li><Link to="/services" className="text-white/70 hover:text-white transition text-sm inline-block">Services</Link></li>
                    <li><a href="#" className="text-white/70 hover:text-white transition text-sm inline-block">Training</a></li>
                  </ul>
                </div>

                <div>
                  <h3 className="text-white font-bold text-lg mb-4 md:mb-8 lg:mb-8 text-left pl-6">Services</h3>
                  <ul className="space-y-3 pl-4 md:pl-6">
                    <li className="flex items-start gap-2.5">
                      <a href="#" className="text-white/70 hover:text-white transition text-sm">Web Development</a>
                    </li>
                    <li className="flex items-start gap-2.5">
                      <a href="#" className="text-white/70 hover:text-white transition text-sm">Mobile Apps</a>
                    </li>
                    <li className="flex items-start gap-2.5">
                      <a href="#" className="text-white/70 hover:text-white transition text-sm">AI Automation</a>
                    </li>
                    <li className="flex items-start gap-2.5">
                      <a href="#" className="text-white/70 hover:text-white transition text-sm">Consulting</a>
                    </li>
                  </ul>
                </div>

                <div>
                  <h3 className="text-white font-bold text-lg mb-6 text-left px-1 pl-18">Connect</h3>
                  <div className="flex items-center gap-3 mb-8 text-left px-1 pl-18">
                    <a href="#" aria-label="Instagram" className="w-10 h-10 rounded-lg bg-white/10 backdrop-blur-sm flex items-center justify-center hover:bg-white/20 hover:scale-105 transition-all duration-300 border border-white/10">
                      <svg className="w-5 h-5 text-white" viewBox="0 0 24 24" fill="currentColor">
                        <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/>
                      </svg>
                    </a>
                    <a href="#" aria-label="LinkedIn" className="w-10 h-10 rounded-lg bg-white/10 backdrop-blur-sm flex items-center justify-center hover:bg-white/20 hover:scale-105 transition-all duration-300 border border-white/10">
                      <svg className="w-5 h-5 text-white" viewBox="0 0 24 24" fill="currentColor">
                        <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
                      </svg>
                    </a>
                    <a href="#" aria-label="Twitter" className="w-10 h-10 rounded-lg bg-white/10 backdrop-blur-sm flex items-center justify-center hover:bg-white/20 hover:scale-105 transition-all duration-300 border border-white/10">
                      <svg className="w-5 h-5 text-white" viewBox="0 0 24 24" fill="currentColor">
                        <path d="M22 5.92c-.66.29-1.36.48-2.1.57a3.7 3.7 0 001.62-2.04 7.3 7.3 0 01-2.34.9 3.65 3.65 0 00-6.21 3.33A10.36 10.36 0 013 4.9a3.65 3.65 0 001.13 4.87c-.53-.02-1.03-.16-1.47-.4v.04a3.65 3.65 0 002.93 3.58c-.39.11-.8.14-1.22.05a3.66 3.66 0 003.41 2.54A7.32 7.32 0 012 19.54a10.33 10.33 0 005.6 1.64c6.72 0 10.4-5.57 10.4-10.4v-.47A7.34 7.34 0 0022 5.92z"/>
                      </svg>
                    </a>
                  </div>
                  <h3 className="text-white font-medium text-lg mb-6 text-left px-1 pl-18">LEGAL</h3>
                  <ul className="space-y-3 text-left px-1 pl-18">
                    <li><a href="#" className="text-white/70 hover:text-white transition text-sm inline-block">Privacy Policy</a></li>
                    <li><a href="#" className="text-white/70 hover:text-white transition text-sm inline-block">Terms & Conditions</a></li>
                    <li><a href="#" className="text-white/70 hover:text-white transition text-sm inline-block">Disclaimer</a></li>
                  </ul>
                </div>
              </div>

              <div className="border-t border-white/10 pt-6 text-center">
                <p className="text-white/70 text-sm mt-17 mb-5">
                  © 2025 Tech Talks. All rights reserved.
                </p>
              </div>
            </div>
          </div>
        </footer>
      </div>
    </div>
  );
}

