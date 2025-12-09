import "../App.css";

export default function About() {
  return (
    <div className="">
      {/* Background gradient */}
      <div className="" />
      <div className="absolute top-0 left-0 w-full h-full overflow-hidden pointer-events-none z-0">
        <div className="absolute top-20 left-10 w-72 h-72 rounded-full blur-3xl bg-blue-500/20 animate-float" />
        <div className="absolute top-40 right-20 w-96 h-96 rounded-full blur-3xl bg-purple-500/20 animate-float orb-delay-2" />
        <div className="absolute bottom-20 left-1/3 w-80 h-80 rounded-full blur-3xl bg-orange-500/18 animate-float orb-delay-4" />
      </div>

      <div className="relative z-10 w-full max-w-[1440px] mx-auto px-6">
        {/* Hero Section */}
        <div className="pt-24 pb-16 text-center animate-slide-up">
          <div className="inline-block mb-6">
            <div className="w-20 h-20 rounded-2xl bg-gradient-to-br from-blue-500 via-purple-600 to-teal-500 flex items-center justify-center mx-auto shadow-2xl">
              <span className="text-3xl font-bold text-white">TT</span>
            </div>
          </div>
          <h1 className="text-5xl md:text-7xl font-bold mb-6">
            <span className="text-white">About</span>{" "}
            <span className="bg-gradient-to-r from-blue-400 via-purple-500 to-teal-400 bg-clip-text text-transparent">
              Tech Talks
            </span>
          </h1>
          <p className="text-xl md:text-2xl text-white/80 max-w-3xl mx-auto leading-relaxed">
            Empowering businesses with cutting-edge AI automation solutions that drive growth and transform operations
          </p>
        </div>

        {/* Statistics Banner */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-20 animate-slide-up">
          <div className="bg-slate-800/60 backdrop-blur-md rounded-xl p-6 border border-white/10 text-center hover:border-white/20 transition-all duration-300">
            <div className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-blue-400 to-purple-500 bg-clip-text text-transparent mb-2">
              150+
            </div>
            <div className="text-white/70 text-sm font-medium">Projects Delivered</div>
          </div>
          <div className="bg-slate-800/60 backdrop-blur-md rounded-xl p-6 border border-white/10 text-center hover:border-white/20 transition-all duration-300">
            <div className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-purple-400 to-pink-500 bg-clip-text text-transparent mb-2">
              80+
            </div>
            <div className="text-white/70 text-sm font-medium">Happy Clients</div>
          </div>
          <div className="bg-slate-800/60 backdrop-blur-md rounded-xl p-6 border border-white/10 text-center hover:border-white/20 transition-all duration-300">
            <div className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-teal-400 to-blue-500 bg-clip-text text-transparent mb-2">
              50+
            </div>
            <div className="text-white/70 text-sm font-medium">Technologies</div>
          </div>
          <div className="bg-slate-800/60 backdrop-blur-md rounded-xl p-6 border border-white/10 text-center hover:border-white/20 transition-all duration-300">
            <div className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-orange-400 to-red-500 bg-clip-text text-transparent mb-2">
              5+
            </div>
            <div className="text-white/70 text-sm font-medium">Years Experience</div>
          </div>
        </div>

        {/* Main Content - Two Column with Story */}
        <div className="grid lg:grid-cols-2 gap-12 mb-20">
          {/* Left Column - Our Story */}
          <div className="space-y-8 animate-slide-left">
            <div>
              <h2 className="text-4xl md:text-5xl font-bold mb-6">
                <span className="text-white">Our</span>{" "}
                <span className="bg-gradient-to-r from-blue-400 via-purple-500 to-teal-400 bg-clip-text text-transparent">
                  Story
                </span>
              </h2>
              <div className=""></div>
            </div>
            
            <div className="space-y-6 text-white/90 leading-8">
              <p className="text-base md:text-lg">
                Tech Talks was born from a simple observation: too many businesses are held back by manual processes and outdated technology. We saw brilliant founders spending their time on repetitive tasks instead of growing their business.
              </p>
              
              <p className="text-base md:text-lg">
                As developers and entrepreneurs, we knew there was a better way. AI and automation have the power to transform operations, but most businesses don't know where to start or who to trust.
              </p>
              
              <p className="text-base md:text-lg">
                That's why we founded Tech Talks with a different approach: build solutions that work, teach clients how they work, and focus relentlessly on results. No jargon, no vendor lock-in, no hidden complexities.
              </p>
              
              <p className="text-base md:text-lg font-semibold text-white">
                Today, we've helped over 80 businesses automate their operations, generate more leads, and scale their revenue. Every project is a partnership, and every client becomes part of our story.
              </p>
            </div>
          </div>

          {/* Right Column - Mission & Vision Card */}
          <div className="space-y-6 animate-slide-right">
            {/* Mission Card */}
            <div className="bg-gradient-to-br from-slate-800/80 to-slate-900/80 backdrop-blur-md rounded-2xl p-8 border border-white/20 shadow-2xl hover:border-white/30 transition-all duration-300">
              <div className="flex items-center gap-4 mb-6">
                <div className="w-14 h-14 rounded-xl bg-gradient-to-br from-blue-500 to-blue-600 flex items-center justify-center flex-shrink-0">
                  <svg className="w-7 h-7 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                </div>
                <h3 className="text-2xl font-bold text-white">Our Mission</h3>
              </div>
              <p className="text-white/80 leading-7 text-base">
                To democratize AI and automation technology, making it accessible and understandable for businesses of all sizes. We're committed to building solutions that not only work but also empower our clients with the knowledge and tools they need to succeed.
              </p>
            </div>

            {/* Vision Card */}
            <div className="bg-gradient-to-br from-slate-800/80 to-slate-900/80 backdrop-blur-md rounded-2xl p-8 border border-white/20 shadow-2xl hover:border-white/30 transition-all duration-300">
              <div className="flex items-center gap-4 mb-6">
                <div className="w-14 h-14 rounded-xl bg-gradient-to-br from-purple-500 to-purple-600 flex items-center justify-center flex-shrink-0">
                  <svg className="w-7 h-7 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" />
                  </svg>
                </div>
                <h3 className="text-2xl font-bold text-white">Our Vision</h3>
              </div>
              <p className="text-white/80 leading-7 text-base">
                To become the leading partner for businesses seeking intelligent automation solutions. We envision a future where every business, regardless of size, can leverage AI and automation to achieve unprecedented growth and efficiency.
              </p>
            </div>
          </div>
        </div>

        {/* Core Values Section */}
        <div className="mb-20">
          <div className="text-center mb-12 animate-slide-up">
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
              Our <span className="bg-gradient-to-r from-blue-400 via-purple-500 to-pink-500 bg-clip-text text-transparent">Core Values</span>
            </h2>
            <div className="h-1 w-20 bg-gradient-to-r from-blue-500 to-purple-500 rounded-full mx-auto mb-4"></div>
            <p className="text-white/70 text-lg max-w-2xl mx-auto">
              The principles that guide everything we do
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-gradient-to-br from-slate-800/60 to-slate-900/60 backdrop-blur-md rounded-2xl p-8 border border-white/10 hover:border-white/20 transition-all duration-300 hover:scale-105 group animate-slide-up">
              <div className="w-16 h-16 rounded-xl bg-gradient-to-br from-blue-500 to-blue-600 flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
                <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                </svg>
              </div>
              <h3 className="text-2xl font-bold text-white mb-4">Trust & Transparency</h3>
              <p className="text-white/70 leading-7">
                We believe in open communication and honest partnerships. No hidden fees, no vendor lock-in, just clear solutions that you can understand and control.
              </p>
            </div>

            <div className="bg-gradient-to-br from-slate-800/60 to-slate-900/60 backdrop-blur-md rounded-2xl p-8 border border-white/10 hover:border-white/20 transition-all duration-300 hover:scale-105 group animate-slide-up animate-delay-200">
              <div className="w-16 h-16 rounded-xl bg-gradient-to-br from-purple-500 to-purple-600 flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
                <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                </svg>
              </div>
              <h3 className="text-2xl font-bold text-white mb-4">Innovation First</h3>
              <p className="text-white/70 leading-7">
                We stay ahead of the curve, constantly exploring new technologies and methodologies to deliver cutting-edge solutions that give you a competitive advantage.
              </p>
            </div>

            <div className="bg-gradient-to-br from-slate-800/60 to-slate-900/60 backdrop-blur-md rounded-2xl p-8 border border-white/10 hover:border-white/20 transition-all duration-300 hover:scale-105 group animate-slide-up animate-delay-400">
              <div className="w-16 h-16 rounded-xl bg-gradient-to-br from-teal-500 to-teal-600 flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
                <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
                </svg>
              </div>
              <h3 className="text-2xl font-bold text-white mb-4">Client Success</h3>
              <p className="text-white/70 leading-7">
                Your success is our success. We measure our achievements by the growth and satisfaction of our clients, and we're committed to your long-term prosperity.
              </p>
            </div>
          </div>
        </div>

        {/* Quote Section */}
        <div className="mb-20 animate-slide-up">
          <div className="bg-gradient-to-br from-blue-500/20 via-purple-500/20 to-teal-500/20 backdrop-blur-md rounded-2xl p-12 border border-white/20 relative overflow-hidden">
            <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-blue-500 via-purple-500 to-teal-500"></div>
            <div className="relative z-10 text-center">
              <div className="text-6xl text-white/20 mb-6">"</div>
              <p className="text-2xl md:text-3xl font-semibold text-white mb-6 leading-relaxed max-w-4xl mx-auto italic">
                We believe technology should empower people, not confuse them. Every solution we build is designed to be understandable, maintainable, and scalable. Our goal is to help you automate the boring stuff so you can focus on what matters: growing your business and serving your customers.
              </p>
              <div className="flex items-center justify-center gap-4 mt-8">
                <div className="w-12 h-12 rounded-full bg-gradient-to-br from-blue-500 to-purple-600 flex items-center justify-center">
                  <span className="text-lg font-bold text-white">TT</span>
                </div>
                <div className="text-left">
                  <div className="text-white font-bold text-lg">Tech Talks</div>
                  <div className="text-white/70 text-sm">Innovation & Technology Leaders</div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Why Choose Us Section */}
        <div className="mb-30 px-0 pl-16">
          <div className="text-center mb-16 animate-slide-up">
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
              Why <span className="bg-gradient-to-r from-blue-400 via-purple-500 to-pink-500 bg-clip-text text-transparent">Choose Us</span>
            </h2>
            <div className="h-1 w-20 bg-gradient-to-r from-blue-500 to-purple-500 rounded-full mx-auto"></div>
          </div>

          <div className="grid md:grid-cols-2 gap-6">
            <div className="bg-slate-800/40 backdrop-blur-md rounded-xl p-6 border border-white/10 hover:border-white/20 transition-all duration-300 flex items-start gap-4 animate-slide-left">
              <div className="w-10 h-10 rounded-lg bg-gradient-to-br from-blue-500 to-blue-600 flex items-center justify-center flex-shrink-0">
                <svg className="w-5 h-5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                </svg>
              </div>
              <div>
                <h4 className="text-xl font-bold text-white mb-2">Proven Track Record</h4>
                <p className="text-white/70">150+ successful projects delivered across various industries</p>
              </div>
            </div>

            <div className="bg-slate-800/40 backdrop-blur-md rounded-xl p-6 border border-white/10 hover:border-white/20 transition-all duration-300 flex items-start gap-4 animate-slide-right">
              <div className="w-10 h-10 rounded-lg bg-gradient-to-br from-purple-500 to-purple-600 flex items-center justify-center flex-shrink-0">
                <svg className="w-5 h-5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                </svg>
              </div>
              <div>
                <h4 className="text-xl font-bold text-white mb-2">Expert Team</h4>
                <p className="text-white/70">Experienced developers and AI specialists at your service</p>
              </div>
            </div>

            <div className="bg-slate-800/40 backdrop-blur-md rounded-xl p-6 border border-white/10 hover:border-white/20 transition-all duration-300 flex items-start gap-4 animate-slide-left">
              <div className="w-10 h-10 rounded-lg bg-gradient-to-br from-teal-500 to-teal-600 flex items-center justify-center flex-shrink-0">
                <svg className="w-5 h-5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                </svg>
              </div>
              <div>
                <h4 className="text-xl font-bold text-white mb-2">Custom Solutions</h4>
                <p className="text-white/70">Tailored automation solutions that fit your unique business needs</p>
              </div>
            </div>

            <div className="bg-slate-800/40 backdrop-blur-md rounded-xl p-6 border border-white/10 hover:border-white/20 transition-all duration-300 flex items-start gap-4 animate-slide-right">
              <div className="w-10 h-10 rounded-lg bg-gradient-to-br from-orange-500 to-red-500 flex items-center justify-center flex-shrink-0">
                <svg className="w-5 h-5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                </svg>
              </div>
              <div>
                <h4 className="text-xl font-bold text-white mb-2">Ongoing Support</h4>
                <p className="text-white/70">Continuous support and maintenance to ensure your success</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
