import "../App.css";

export default function Services() {
  return (
    <>
      <style>{`
        @keyframes slideInUp {
          from {
            opacity: 0;
            transform: translateY(30px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
        
        @keyframes slideInLeft {
          from {
            opacity: 0;
            transform: translateX(-50px);
          }
          to {
            opacity: 1;
            transform: translateX(0);
          }
        }
        
        @keyframes slideInRight {
          from {
            opacity: 0;
            transform: translateX(50px);
          }
          to {
            opacity: 1;
            transform: translateX(0);
          }
        }
        
        @keyframes scaleIn {
          from {
            opacity: 0;
            transform: scale(0.9);
          }
          to {
            opacity: 1;
            transform: scale(1);
          }
        }
        
        @keyframes rotateIn {
          from {
            opacity: 0;
            transform: rotate(-10deg) scale(0.9);
          }
          to {
            opacity: 1;
            transform: rotate(0deg) scale(1);
          }
        }
        
        @keyframes glowPulse {
          0%, 100% {
            box-shadow: 0 0 20px rgba(59, 130, 246, 0.5);
          }
          50% {
            box-shadow: 0 0 40px rgba(59, 130, 246, 0.8), 0 0 60px rgba(147, 51, 234, 0.6);
          }
        }
        
        @keyframes textShimmer {
          0% {
            background-position: -200% center;
          }
          100% {
            background-position: 200% center;
          }
        }
        
        @keyframes floatRotate {
          0%, 100% {
            transform: translateY(0) rotate(0deg);
          }
          50% {
            transform: translateY(-20px) rotate(5deg);
          }
        }
        
        .animate-slide-up {
          animation: slideInUp 0.8s ease-out forwards;
        }
        
        .animate-slide-left {
          animation: slideInLeft 0.8s ease-out forwards;
        }
        
        .animate-slide-right {
          animation: slideInRight 0.8s ease-out forwards;
        }
        
        .animate-scale-in {
          animation: scaleIn 0.6s ease-out forwards;
        }
        
        .animate-rotate-in {
          animation: rotateIn 0.7s ease-out forwards;
        }
        
        .animate-glow-pulse {
          animation: glowPulse 3s ease-in-out infinite;
        }
        
        .animate-text-shimmer {
          background: linear-gradient(90deg, #60a5fa, #a78bfa, #34d399, #60a5fa);
          background-size: 200% auto;
          -webkit-background-clip: text;
          background-clip: text;
          -webkit-text-fill-color: transparent;
          animation: textShimmer 3s linear infinite;
        }
        
        .animate-float-rotate {
          animation: floatRotate 6s ease-in-out infinite;
        }
        
        .delay-100 { animation-delay: 0.1s; opacity: 0; }
        .delay-200 { animation-delay: 0.2s; opacity: 0; }
        .delay-300 { animation-delay: 0.3s; opacity: 0; }
        .delay-400 { animation-delay: 0.4s; opacity: 0; }
        .delay-500 { animation-delay: 0.5s; opacity: 0; }
        .delay-600 { animation-delay: 0.6s; opacity: 0; }
      `}</style>
      
      <div className="">
        {/* Dark black background with subtle white gradient */}
        {/* <div className="absolute inset-0 bg-gradient-to-b from-black via-gray-900/95 to-black" /> */}
        {/* <div className="absolute inset-0 bg-gradient-to-br from-white/5 via-transparent to-white/3" /> */}
        <div className="absolute top-0 left-0 w-full h-full overflow-hidden pointer-events-none">
          <div className="absolute top-20 left-10 w-72 h-72 rounded-full blur-3xl bg-blue-500/20 animate-float" />
          <div className="absolute bottom-20 right-10 w-96 h-96 rounded-full blur-3xl bg-purple-500/20 animate-float orb-delay-2" />
          <div className="absolute top-1/2 left-1/2 w-64 h-64 rounded-full blur-3xl bg-teal-500/20 animate-float-rotate" />
        </div>

        <div className="relative z-10 w-full max-w-[1440px] mx-auto  px-6 py-1">
          {/* Header */}
          <div className="text-center mb-16 animate-slide-up">
            <h1 className="text-5xl md:text-6xl font-bold mb-9">
              <span className="text-white  ">Our</span>{" "}
              <span className="bg-gradient-to-r from-blue-400 via-purple-500 to-teal-400 bg-clip-text text-transparent">
                Services
              </span>
            </h1>
            <div className="relative inline-block">
              <p className="text-2xl md:text-3xl font-semibold max-w-4xl mx-auto animate-text-shimmer leading-relaxed">
                Discover how AI automation can transform your business operations
              </p>
              <div className="absolute  "></div>
            </div>
          </div>

          {/* Main Content - Two Column Layout */}
          <div className="grid lg:grid-cols-2 gap-8 mb-12">
            {/* Left Column - Main Service Card */}
            <div className="bg-white/10 backdrop-blur-md rounded-2xl p-8 border border-white/20 shadow-xl animate-slide-left delay-200 hover:border-blue-400/50 transition-all duration-500 hover:scale-105">
              <div className="flex items-center gap-4 mb-6">
                <div className="w-16 h-16 rounded-xl bg-gradient-to-br from-blue-500 to-purple-600 flex items-center justify-center flex-shrink-0 animate-float-rotate">
                  <svg className="w-10 h-10 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.75 17L9 20l-1 1h8l-1-1-.75-3M3 13h18M5 17h14a2 2 0 002-2V5a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                  </svg>
                </div>
                <div>
                  <h2 className="text-3xl font-bold text-white">AI Agents & Automation</h2>
                  <p className="text-white/70 mt-1">Intelligent automation systems that work 24/7 to scale your business.</p>
                </div>
              </div>

              <div className="mb-8">
                <h3 className="text-xl font-bold text-white mb-4 flex items-center gap-2">
                  <svg className="w-5 h-5 text-green-400" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                  </svg>
                  What's Included
                </h3>
                <div className="grid md:grid-cols-2 gap-3">
                  {[
                    "Lead capture & qualification bots",
                    "CRM & tool integrations",
                    "Data processing & reporting",
                    "Custom workflow automation",
                    "Email & SMS automation",
                    "Customer support chatbots"
                  ].map((item, index) => (
                    <div key={index} className={`flex items-start gap-2 animate-scale-in delay-${(index + 1) * 100}`}>
                      <svg className="w-5 h-5 text-green-400 flex-shrink-0 mt-0.5" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                      </svg>
                      <span className="text-white/80 text-sm">{item}</span>
                    </div>
                  ))}
                </div>
              </div>

              <button className="w-full px-6 py-4 bg-gradient-to-r from-blue-500 to-purple-600 text-white font-semibold rounded-xl hover:from-blue-600 hover:to-purple-700  shadow-lg hover:shadow-xl flex items-center justify-center gap-2 mt-60">
                <span>Get Started</span>
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
                </svg>
              </button>
            </div>

            {/* Right Column - Details Cards */}
            <div className="space-y-6">
              {/* Deliverables Card */}
              <div className="bg-gradient-to-br from-blue-500/20 to-purple-500/20 backdrop-blur-md rounded-2xl p-6 border border-white/20 shadow-xl animate-slide-right delay-300 hover:border-blue-400/50 transition-all duration-500 hover:scale-105">
                <h3 className="text-xl font-bold text-white mb-4 flex items-center gap-2">
                  <svg className="w-5 h-5 text-green-400" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                  </svg>
                  Deliverables
                </h3>
                <ul className="space-y-3">
                  {[
                    "Custom AI agent system",
                    "Integration with existing tools",
                    "Analytics dashboard",
                    "Training & documentation"
                  ].map((item, index) => (
                    <li key={index} className={`flex items-start gap-2 animate-scale-in delay-${(index + 4) * 100}`}>
                      <svg className="w-5 h-5 text-blue-400 flex-shrink-0 mt-0.5" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                      </svg>
                      <span className="text-white/80 text-sm">{item}</span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Timeline Card */}
              <div className="bg-white/10 backdrop-blur-md rounded-2xl p-6 border border-white/20 shadow-xl animate-rotate-in delay-400 hover:border-purple-400/50 transition-all duration-500 hover:scale-105">
                <h3 className="text-xl font-bold text-white mb-4">Timeline</h3>
                <div className="text-4xl font-bold bg-gradient-to-r from-blue-400 to-purple-500 bg-clip-text text-transparent mb-2 animate-text-shimmer">
                  2-6 weeks
                </div>
                <p className="text-white/70 text-sm">From consultation to deployment</p>
              </div>

              {/* Expected Outcomes Card */}
              <div className="bg-gradient-to-br from-green-500/20 to-teal-500/20 backdrop-blur-md rounded-2xl p-6 border border-white/20 shadow-xl animate-slide-right delay-500 hover:border-green-400/50 transition-all duration-500 hover:scale-105">
                <h3 className="text-xl font-bold text-white mb-4 flex items-center gap-2">
                  <svg className="w-5 h-5 text-green-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6" />
                  </svg>
                  Expected Outcomes
                </h3>
                <ul className="space-y-3">
                  {[
                    "Reduce manual work by 80%+",
                    "Qualify leads automatically",
                    "Save 20+ hours per week"
                  ].map((item, index) => (
                    <li key={index} className={`flex items-start gap-2 animate-scale-in delay-${(index + 8) * 100}`}>
                      <svg className="w-5 h-5 text-green-400 flex-shrink-0 mt-0.5" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                      </svg>
                      <span className="text-white/80 text-sm">{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>

          {/* Website Development Service */}
          <div className="grid lg:grid-cols-2 gap-8 mb-12 mt-52">
            {/* Left Column - Main Service Card */}
            <div className="bg-white/10 backdrop-blur-md rounded-2xl p-8 border border-white/20 shadow-xl animate-slide-left delay-200 hover:border-blue-400/50 transition-all duration-500 hover:scale-105">
              <div className="flex items-center gap-4 mb-6">
                <div className="w-16 h-16 rounded-xl bg-gradient-to-br from-blue-500 to-purple-600 flex items-center justify-center flex-shrink-0 animate-float-rotate">
                  <svg className="w-10 h-10 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                  </svg>
                </div>
                <div>
                  <h2 className="text-3xl font-bold text-white">Web Application Development</h2>
                  <p className="text-white/70 mt-1">Fast, responsive, and conversion-optimized websites that drive results</p>
                </div>
              </div>

              <div className="mb-8">
                <h3 className="text-xl font-bold text-white mb-4 flex items-center gap-2">
                  <svg className="w-5 h-5 text-green-400" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                  </svg>
                  What's Included
                </h3>
                <div className="grid md:grid-cols-2 gap-3">
                  {[
                    "Custom design tailored to your brand",
                    "SEO optimization & analytics",
                    "E-commerce functionality",
                    "Mobile-first responsive development",
                    "CMS integration (WordPress, custom)",
                    "Performance optimization"
                  ].map((item, index) => (
                    <div key={index} className={`flex items-start gap-2 animate-scale-in delay-${(index + 1) * 100}`}>
                      <svg className="w-5 h-5 text-green-400 flex-shrink-0 mt-0.5" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                      </svg>
                      <span className="text-white/80 text-sm">{item}</span>
                    </div>
                  ))}
                </div>
              </div>

              <button className=" mt-60 w-full px-6 py-4 bg-gradient-to-r from-blue-500 to-purple-600 text-white font-semibold rounded-xl hover:from-blue-600 hover:to-purple-700 shadow-lg hover:shadow-xl flex items-center justify-center gap-2">
                <span>Get Started</span>
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
                </svg>
              </button>
            </div>

            {/* Right Column - Details Cards */}
            <div className="space-y-6">
              {/* Deliverables Card */}
              <div className="bg-gradient-to-br from-blue-500/20 to-purple-500/20 backdrop-blur-md rounded-2xl p-6 border border-white/20 shadow-xl animate-slide-right delay-300 hover:border-blue-400/50 transition-all duration-500 hover:scale-105">
                <h3 className="text-xl font-bold text-white mb-4 flex items-center gap-2">
                  <svg className="w-5 h-5 text-green-400" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                  </svg>
                  Deliverables
                </h3>
                <ul className="space-y-3">
                  {[
                    "Fully functional website",
                    "Admin dashboard",
                    "SEO setup & Google Analytics",
                    "Documentation & training"
                  ].map((item, index) => (
                    <li key={index} className={`flex items-start gap-2 animate-scale-in delay-${(index + 4) * 100}`}>
                      <svg className="w-5 h-5 text-blue-400 flex-shrink-0 mt-0.5" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                      </svg>
                      <span className="text-white/80 text-sm">{item}</span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Timeline Card */}
              <div className="bg-white/10 backdrop-blur-md rounded-2xl p-6 border border-white/20 shadow-xl animate-rotate-in delay-400 hover:border-purple-400/50 transition-all duration-500 hover:scale-105">
                <h3 className="text-xl font-bold text-white mb-4">Timeline</h3>
                <div className="text-4xl font-bold bg-gradient-to-r from-blue-400 to-purple-500 bg-clip-text text-transparent mb-2 animate-text-shimmer">
                  4-8 weeks
                </div>
                <p className="text-white/70 text-sm">From consultation to deployment</p>
              </div>

              {/* Expected Outcomes Card */}
              <div className="bg-gradient-to-br from-green-500/20 to-teal-500/20 backdrop-blur-md rounded-2xl p-6 border border-white/20 shadow-xl animate-slide-right delay-500 hover:border-green-400/50 transition-all duration-500 hover:scale-105">
                <h3 className="text-xl font-bold text-white mb-4 flex items-center gap-2">
                  <svg className="w-5 h-5 text-green-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6" />
                  </svg>
                  Expected Outcomes
                </h3>
                <ul className="space-y-3">
                  {[
                    "Increase organic traffic by 150% +",
                    "Improve conversion rates by 40%+",
                    "Reduce page load time by 60% +"
                  ].map((item, index) => (
                    <li key={index} className={`flex items-start gap-2 animate-scale-in delay-${(index + 8) * 100}`}>
                      <svg className="w-5 h-5 text-green-400 flex-shrink-0 mt-0.5" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                      </svg>
                      <span className="text-white/80 text-sm">{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>

          {/* Mobile App Development Service */}
          <div className="grid lg:grid-cols-2 gap-8 mb-12 mt-52">
            {/* Left Column - Main Service Card */}
            <div className="bg-white/10 backdrop-blur-md rounded-2xl p-8 border border-white/20 shadow-xl animate-slide-left delay-200 hover:border-blue-400/50 transition-all duration-500 hover:scale-105">
              <div className="flex items-center gap-4 mb-6">
                <div className="w-16 h-16 rounded-xl bg-gradient-to-br from-blue-500 to-purple-600 flex items-center justify-center flex-shrink-0 animate-float-rotate">
                  <svg className="w-10 h-10 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 18h.01M8 21h8a2 2 0 002-2V5a2 2 0 00-2-2H8a2 2 0 00-2 2v14a2 2 0 002 2z" />
                  </svg>
                </div>
                <div>
                  <h2 className="text-3xl font-bold text-white">Mobile App Development</h2>
                  <p className="text-white/70 mt-1">Native and cross-platform applications that engage your users</p>
                </div>
              </div>

              <div className="mb-8">
                <h3 className="text-xl font-bold text-white mb-4 flex items-center gap-2">
                  <svg className="w-5 h-5 text-green-400" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                  </svg>
                  What's Included
                </h3>
                <div className="grid md:grid-cols-2 gap-3">
                  {[
                    "iOS & Android native development",
                    "Cloud backend integration",
                    "In-app analytics",
                    "Cross-platform (React Native, Flutter)",
                    "Push notifications",
                    "App Store deployment"
                  ].map((item, index) => (
                    <div key={index} className={`flex items-start gap-2 animate-scale-in delay-${(index + 1) * 100}`}>
                      <svg className="w-5 h-5 text-green-400 flex-shrink-0 mt-0.5" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                      </svg>
                      <span className="text-white/80 text-sm">{item}</span>
                    </div>
                  ))}
                </div>
              </div>

              <button className=" mt-60 w-full px-6 py-4 bg-gradient-to-r from-blue-500 to-purple-600 text-white font-semibold rounded-xl hover:from-blue-600 hover:to-purple-700 shadow-lg hover:shadow-xl flex items-center justify-center gap-2">
                <span>Get Started</span>
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
                </svg>
              </button>
            </div>

            {/* Right Column - Details Cards */}
            <div className="space-y-6">
              {/* Deliverables Card */}
              <div className="bg-gradient-to-br from-blue-500/20 to-purple-500/20 backdrop-blur-md rounded-2xl p-6 border border-white/20 shadow-xl animate-slide-right delay-300 hover:border-blue-400/50 transition-all duration-500 hover:scale-105">
                <h3 className="text-xl font-bold text-white mb-4 flex items-center gap-2">
                  <svg className="w-5 h-5 text-green-400" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                  </svg>
                  Deliverables
                </h3>
                <ul className="space-y-3">
                  {[
                    "Production-ready mobile app",
                    "Backend API & database",
                    "Admin panel",
                    "App Store listings"
                  ].map((item, index) => (
                    <li key={index} className={`flex items-start gap-2 animate-scale-in delay-${(index + 4) * 100}`}>
                      <svg className="w-5 h-5 text-blue-400 flex-shrink-0 mt-0.5" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                      </svg>
                      <span className="text-white/80 text-sm">{item}</span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Timeline Card */}
              <div className="bg-white/10 backdrop-blur-md rounded-2xl p-6 border border-white/20 shadow-xl animate-rotate-in delay-400 hover:border-purple-400/50 transition-all duration-500 hover:scale-105">
                <h3 className="text-xl font-bold text-white mb-4">Timeline</h3>
                <div className="text-4xl font-bold bg-gradient-to-r from-blue-400 to-purple-500 bg-clip-text text-transparent mb-2 animate-text-shimmer">
                  8-16 weeks
                </div>
                <p className="text-white/70 text-sm">From consultation to deployment</p>
              </div>

              {/* Expected Outcomes Card */}
              <div className="bg-gradient-to-br from-green-500/20 to-teal-500/20 backdrop-blur-md rounded-2xl p-6 border border-white/20 shadow-xl animate-slide-right delay-500 hover:border-green-400/50 transition-all duration-500 hover:scale-105">
                <h3 className="text-xl font-bold text-white mb-4 flex items-center gap-2">
                  <svg className="w-5 h-5 text-green-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6" />
                  </svg>
                  Expected Outcomes
                </h3>
                <ul className="space-y-3">
                  {[
                    "Reach mobile-first customers",
                    "Increase user engagement by 3x",
                    "Generate new revenue streams"
                  ].map((item, index) => (
                    <li key={index} className={`flex items-start gap-2 animate-scale-in delay-${(index + 8) * 100}`}>
                      <svg className="w-5 h-5 text-green-400 flex-shrink-0 mt-0.5" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                      </svg>
                      <span className="text-white/80 text-sm">{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>

          {/* AWS Cloud Service */}
          <div className="grid lg:grid-cols-2 gap-8 mb-12 mt-52">
            {/* Left Column - Main Service Card */}
            <div className="bg-white/10 backdrop-blur-md rounded-2xl p-8 border border-white/20 shadow-xl animate-slide-left delay-200 hover:border-blue-400/50 transition-all duration-500 hover:scale-105">
              <div className="flex items-center gap-4 mb-6">
                <div className="w-16 h-16 rounded-xl bg-gradient-to-br from-blue-500 to-purple-600 flex items-center justify-center flex-shrink-0 animate-float-rotate">
                  <svg className="w-10 h-10 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 15a4 4 0 004 4h9a5 5 0 10-.1-9.999 5.002 5.002 0 10-9.78 2.096A4.001 4.001 0 003 15z" />
                  </svg>
                </div>
                <div>
                  <h2 className="text-3xl font-bold text-white">AWS Cloud</h2>
                  <p className="text-white/70 mt-1">Scalable cloud infrastructure and services to power your business</p>
                </div>
              </div>

              <div className="mb-8">
                <h3 className="text-xl font-bold text-white mb-4 flex items-center gap-2">
                  <svg className="w-5 h-5 text-green-400" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                  </svg>
                  What's Included
                </h3>
                <div className="grid md:grid-cols-2 gap-3">
                  {[
                    "Cloud infrastructure setup & migration",
                    "EC2, S3, RDS configuration",
                    "Auto-scaling & load balancing",
                    "Cloud security & compliance",
                    "CI/CD pipeline setup",
                    "24/7 monitoring & support"
                  ].map((item, index) => (
                    <div key={index} className={`flex items-start gap-2 animate-scale-in delay-${(index + 1) * 100}`}>
                      <svg className="w-5 h-5 text-green-400 flex-shrink-0 mt-0.5" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                      </svg>
                      <span className="text-white/80 text-sm">{item}</span>
                    </div>
                  ))}
                </div>
              </div>

              <button className=" mt-60 w-full px-6 py-4 bg-gradient-to-r from-blue-500 to-purple-600 text-white font-semibold rounded-xl hover:from-blue-600 hover:to-purple-700 shadow-lg hover:shadow-xl flex items-center justify-center gap-2">
                <span>Get Started</span>
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
                </svg>
              </button>
            </div>

            {/* Right Column - Details Cards */}
            <div className="space-y-6">
              {/* Deliverables Card */}
              <div className="bg-gradient-to-br from-blue-500/20 to-purple-500/20 backdrop-blur-md rounded-2xl p-6 border border-white/20 shadow-xl animate-slide-right delay-300 hover:border-blue-400/50 transition-all duration-500 hover:scale-105">
                <h3 className="text-xl font-bold text-white mb-4 flex items-center gap-2">
                  <svg className="w-5 h-5 text-green-400" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                  </svg>
                  Deliverables
                </h3>
                <ul className="space-y-3">
                  {[
                    "Fully configured AWS infrastructure",
                    "Cloud architecture documentation",
                    "Security & compliance setup",
                    "Monitoring & alerting system"
                  ].map((item, index) => (
                    <li key={index} className={`flex items-start gap-2 animate-scale-in delay-${(index + 4) * 100}`}>
                      <svg className="w-5 h-5 text-blue-400 flex-shrink-0 mt-0.5" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                      </svg>
                      <span className="text-white/80 text-sm">{item}</span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Timeline Card */}
              <div className="bg-white/10 backdrop-blur-md rounded-2xl p-6 border border-white/20 shadow-xl animate-rotate-in delay-400 hover:border-purple-400/50 transition-all duration-500 hover:scale-105">
                <h3 className="text-xl font-bold text-white mb-4">Timeline</h3>
                <div className="text-4xl font-bold bg-gradient-to-r from-blue-400 to-purple-500 bg-clip-text text-transparent mb-2 animate-text-shimmer">
                  3-8 weeks
                </div>
                <p className="text-white/70 text-sm">From consultation to deployment</p>
              </div>

              {/* Expected Outcomes Card */}
              <div className="bg-gradient-to-br from-green-500/20 to-teal-500/20 backdrop-blur-md rounded-2xl p-6 border border-white/20 shadow-xl animate-slide-right delay-500 hover:border-green-400/50 transition-all duration-500 hover:scale-105">
                <h3 className="text-xl font-bold text-white mb-4 flex items-center gap-2">
                  <svg className="w-5 h-5 text-green-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6" />
                  </svg>
                  Expected Outcomes
                </h3>
                <ul className="space-y-3">
                  {[
                    "Reduce infrastructure costs by 40%+",
                    "Improve system uptime to 99.9%+",
                    "Scale resources automatically"
                  ].map((item, index) => (
                    <li key={index} className={`flex items-start gap-2 animate-scale-in delay-${(index + 8) * 100}`}>
                      <svg className="w-5 h-5 text-green-400 flex-shrink-0 mt-0.5" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                      </svg>
                      <span className="text-white/80 text-sm">{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>

          {/* Native Development Service */}
          <div className="grid lg:grid-cols-2 gap-8 mb-12 mt-52">
            {/* Left Column - Main Service Card */}
            <div className="bg-white/10 backdrop-blur-md rounded-2xl p-8 border border-white/20 shadow-xl animate-slide-left delay-200 hover:border-blue-400/50 transition-all duration-500 hover:scale-105">
              <div className="flex items-center gap-4 mb-6">
                <div className="w-16 h-16 rounded-xl bg-gradient-to-br from-blue-500 to-purple-600 flex items-center justify-center flex-shrink-0 animate-float-rotate">
                  <svg className="w-10 h-10 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4" />
                  </svg>
                </div>
                <div>
                  <h2 className="text-3xl font-bold text-white">Native Development</h2>
                  <p className="text-white/70 mt-1">High-performance native applications for iOS, Android, and desktop platforms</p>
                </div>
              </div>

              <div className="mb-8">
                <h3 className="text-xl font-bold text-white mb-4 flex items-center gap-2">
                  <svg className="w-5 h-5 text-green-400" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                  </svg>
                  What's Included
                </h3>
                <div className="grid md:grid-cols-2 gap-3">
                  {[
                    "iOS & Android native app development",
                    "Desktop applications (Windows, macOS, Linux)",
                    "Native UI/UX design & implementation",
                    "Platform-specific optimizations",
                    "App store submission & deployment",
                    "Performance tuning & optimization"
                  ].map((item, index) => (
                    <div key={index} className={`flex items-start gap-2 animate-scale-in delay-${(index + 1) * 100}`}>
                      <svg className="w-5 h-5 text-green-400 flex-shrink-0 mt-0.5" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                      </svg>
                      <span className="text-white/80 text-sm">{item}</span>
                    </div>
                  ))}
                </div>
              </div>

              <button className="mt-60 w-full px-6 py-4 bg-gradient-to-r from-blue-500 to-purple-600 text-white font-semibold rounded-xl hover:from-blue-600 hover:to-purple-700 shadow-lg hover:shadow-xl flex items-center justify-center gap-2">
                <span>Get Started</span>
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
                </svg>
              </button>
            </div>

            {/* Right Column - Details Cards */}
            <div className="space-y-6">
              {/* Deliverables Card */}
              <div className="bg-gradient-to-br from-blue-500/20 to-purple-500/20 backdrop-blur-md rounded-2xl p-6 border border-white/20 shadow-xl animate-slide-right delay-300 hover:border-blue-400/50 transition-all duration-500 hover:scale-105">
                <h3 className="text-xl font-bold text-white mb-4 flex items-center gap-2">
                  <svg className="w-5 h-5 text-green-400" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                  </svg>
                  Deliverables
                </h3>
                <ul className="space-y-3">
                  {[
                    "Fully functional native applications",
                    "Source code & documentation",
                    "App store ready packages",
                    "Testing & QA reports"
                  ].map((item, index) => (
                    <li key={index} className={`flex items-start gap-2 animate-scale-in delay-${(index + 4) * 100}`}>
                      <svg className="w-5 h-5 text-blue-400 flex-shrink-0 mt-0.5" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                      </svg>
                      <span className="text-white/80 text-sm">{item}</span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Timeline Card */}
              <div className="bg-white/10 backdrop-blur-md rounded-2xl p-6 border border-white/20 shadow-xl animate-rotate-in delay-400 hover:border-purple-400/50 transition-all duration-500 hover:scale-105">
                <h3 className="text-xl font-bold text-white mb-4">Timeline</h3>
                <div className="text-4xl font-bold bg-gradient-to-r from-blue-400 to-purple-500 bg-clip-text text-transparent mb-2 animate-text-shimmer">
                  6-12 weeks
                </div>
                <p className="text-white/70 text-sm">From design to app store launch</p>
              </div>

              {/* Expected Outcomes Card */}
              <div className="bg-gradient-to-br from-green-500/20 to-teal-500/20 backdrop-blur-md rounded-2xl p-6 border border-white/20 shadow-xl animate-slide-right delay-500 hover:border-green-400/50 transition-all duration-500 hover:scale-105">
                <h3 className="text-xl font-bold text-white mb-4 flex items-center gap-2">
                  <svg className="w-5 h-5 text-green-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6" />
                  </svg>
                  Expected Outcomes
                </h3>
                <ul className="space-y-3">
                  {[
                    "High-performance native applications",
                    "Seamless user experience across platforms",
                    "Optimized for app store rankings"
                  ].map((item, index) => (
                    <li key={index} className={`flex items-start gap-2 animate-scale-in delay-${(index + 8) * 100}`}>
                      <svg className="w-5 h-5 text-green-400 flex-shrink-0 mt-0.5" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                      </svg>
                      <span className="text-white/80 text-sm">{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>

          {/* Azure Cloud Service */}
          <div className="grid lg:grid-cols-2 gap-8 mb-12 mt-52">
            {/* Left Column - Main Service Card */}
            <div className="bg-white/10 backdrop-blur-md rounded-2xl p-8 border border-white/20 shadow-xl animate-slide-left delay-200 hover:border-blue-400/50 transition-all duration-500 hover:scale-105">
              <div className="flex items-center gap-4 mb-6">
                <div className="w-16 h-16 rounded-xl bg-gradient-to-br from-blue-500 to-purple-600 flex items-center justify-center flex-shrink-0 animate-float-rotate">
                  <svg className="w-10 h-10 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 15a4 4 0 004 4h9a5 5 0 10-.1-9.999 5.002 5.002 0 10-9.78 2.096A4.001 4.001 0 003 15z" />
                  </svg>
                </div>
                <div>
                  <h2 className="text-3xl font-bold text-white">Azure Cloud</h2>
                  <p className="text-white/70 mt-1">Enterprise-grade cloud solutions with Microsoft Azure</p>
                </div>
              </div>

              <div className="mb-8">
                <h3 className="text-xl font-bold text-white mb-4 flex items-center gap-2">
                  <svg className="w-5 h-5 text-green-400" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                  </svg>
                  What's Included
                </h3>
                <div className="grid md:grid-cols-2 gap-3">
                  {[
                    "Azure infrastructure setup & migration",
                    "Virtual machines & app services",
                    "Azure SQL & Cosmos DB",
                    "Azure Active Directory",
                    "DevOps & CI/CD pipelines",
                    "24/7 monitoring & support"
                  ].map((item, index) => (
                    <div key={index} className={`flex items-start gap-2 animate-scale-in delay-${(index + 1) * 100}`}>
                      <svg className="w-5 h-5 text-green-400 flex-shrink-0 mt-0.5" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                      </svg>
                      <span className="text-white/80 text-sm">{item}</span>
                    </div>
                  ))}
                </div>
              </div>

              <button className=" mt-60 w-full px-6 py-4 bg-gradient-to-r from-blue-500 to-purple-600 text-white font-semibold rounded-xl hover:from-blue-600 hover:to-purple-700 shadow-lg hover:shadow-xl flex items-center justify-center gap-2">
                <span>Get Started</span>
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
                </svg>
              </button>
            </div>

            {/* Right Column - Details Cards */}
            <div className="space-y-6">
              <div className="bg-gradient-to-br from-blue-500/20 to-purple-500/20 backdrop-blur-md rounded-2xl p-6 border border-white/20 shadow-xl animate-slide-right delay-300 hover:border-blue-400/50 transition-all duration-500 hover:scale-105">
                <h3 className="text-xl font-bold text-white mb-4 flex items-center gap-2">
                  <svg className="w-5 h-5 text-green-400" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                  </svg>
                  Deliverables
                </h3>
                <ul className="space-y-3">
                  {[
                    "Fully configured Azure infrastructure",
                    "Cloud architecture documentation",
                    "Security & compliance setup",
                    "Monitoring & alerting system"
                  ].map((item, index) => (
                    <li key={index} className={`flex items-start gap-2 animate-scale-in delay-${(index + 4) * 100}`}>
                      <svg className="w-5 h-5 text-blue-400 flex-shrink-0 mt-0.5" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                      </svg>
                      <span className="text-white/80 text-sm">{item}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <div className="bg-white/10 backdrop-blur-md rounded-2xl p-6 border border-white/20 shadow-xl animate-rotate-in delay-400 hover:border-purple-400/50 transition-all duration-500 hover:scale-105">
                <h3 className="text-xl font-bold text-white mb-4">Timeline</h3>
                <div className="text-4xl font-bold bg-gradient-to-r from-blue-400 to-purple-500 bg-clip-text text-transparent mb-2 animate-text-shimmer">
                  3-8 weeks
                </div>
                <p className="text-white/70 text-sm">From consultation to deployment</p>
              </div>

              <div className="bg-gradient-to-br from-green-500/20 to-teal-500/20 backdrop-blur-md rounded-2xl p-6 border border-white/20 shadow-xl animate-slide-right delay-500 hover:border-green-400/50 transition-all duration-500 hover:scale-105">
                <h3 className="text-xl font-bold text-white mb-4 flex items-center gap-2">
                  <svg className="w-5 h-5 text-green-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6" />
                  </svg>
                  Expected Outcomes
                </h3>
                <ul className="space-y-3">
                  {[
                    "Reduce infrastructure costs by 40%+",
                    "Improve system uptime to 99.9%+",
                    "Scale resources automatically"
                  ].map((item, index) => (
                    <li key={index} className={`flex items-start gap-2 animate-scale-in delay-${(index + 8) * 100}`}>
                      <svg className="w-5 h-5 text-green-400 flex-shrink-0 mt-0.5" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                      </svg>
                      <span className="text-white/80 text-sm">{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>

          {/* GCP Cloud Service */}
          <div className="grid lg:grid-cols-2 gap-8 mb-12 mt-52">
            <div className="bg-white/10 backdrop-blur-md rounded-2xl p-8 border border-white/20 shadow-xl animate-slide-left delay-200 hover:border-blue-400/50 transition-all duration-500 hover:scale-105">
              <div className="flex items-center gap-4 mb-6">
                <div className="w-16 h-16 rounded-xl bg-gradient-to-br from-blue-500 to-purple-600 flex items-center justify-center flex-shrink-0 animate-float-rotate">
                  <svg className="w-10 h-10 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 15a4 4 0 004 4h9a5 5 0 10-.1-9.999 5.002 5.002 0 10-9.78 2.096A4.001 4.001 0 003 15z" />
                  </svg>
                </div>
                <div>
                  <h2 className="text-3xl font-bold text-white">GCP Cloud</h2>
                  <p className="text-white/70 mt-1">Google Cloud Platform solutions for scalable applications</p>
                </div>
              </div>

              <div className="mb-8">
                <h3 className="text-xl font-bold text-white mb-4 flex items-center gap-2">
                  <svg className="w-5 h-5 text-green-400" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                  </svg>
                  What's Included
                </h3>
                <div className="grid md:grid-cols-2 gap-3">
                  {[
                    "GCP infrastructure setup & migration",
                    "Compute Engine & App Engine",
                    "Cloud SQL & BigQuery",
                    "Cloud Storage & CDN",
                    "Kubernetes & container services",
                    "24/7 monitoring & support"
                  ].map((item, index) => (
                    <div key={index} className={`flex items-start gap-2 animate-scale-in delay-${(index + 1) * 100}`}>
                      <svg className="w-5 h-5 text-green-400 flex-shrink-0 mt-0.5" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                      </svg>
                      <span className="text-white/80 text-sm">{item}</span>
                    </div>
                  ))}
                </div>
              </div>

              <button className=" mt-60 w-full px-6 py-4 bg-gradient-to-r from-blue-500 to-purple-600 text-white font-semibold rounded-xl hover:from-blue-600 hover:to-purple-700 shadow-lg hover:shadow-xl flex items-center justify-center gap-2">
                <span>Get Started</span>
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
                </svg>
              </button>
            </div>

            <div className="space-y-6">
              <div className="bg-gradient-to-br from-blue-500/20 to-purple-500/20 backdrop-blur-md rounded-2xl p-6 border border-white/20 shadow-xl animate-slide-right delay-300 hover:border-blue-400/50 transition-all duration-500 hover:scale-105">
                <h3 className="text-xl font-bold text-white mb-4 flex items-center gap-2">
                  <svg className="w-5 h-5 text-green-400" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                  </svg>
                  Deliverables
                </h3>
                <ul className="space-y-3">
                  {[
                    "Fully configured GCP infrastructure",
                    "Cloud architecture documentation",
                    "Security & compliance setup",
                    "Monitoring & alerting system"
                  ].map((item, index) => (
                    <li key={index} className={`flex items-start gap-2 animate-scale-in delay-${(index + 4) * 100}`}>
                      <svg className="w-5 h-5 text-blue-400 flex-shrink-0 mt-0.5" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                      </svg>
                      <span className="text-white/80 text-sm">{item}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <div className="bg-white/10 backdrop-blur-md rounded-2xl p-6 border border-white/20 shadow-xl animate-rotate-in delay-400 hover:border-purple-400/50 transition-all duration-500 hover:scale-105">
                <h3 className="text-xl font-bold text-white mb-4">Timeline</h3>
                <div className="text-4xl font-bold bg-gradient-to-r from-blue-400 to-purple-500 bg-clip-text text-transparent mb-2 animate-text-shimmer">
                  3-8 weeks
                </div>
                <p className="text-white/70 text-sm">From consultation to deployment</p>
              </div>

              <div className="bg-gradient-to-br from-green-500/20 to-teal-500/20 backdrop-blur-md rounded-2xl p-6 border border-white/20 shadow-xl animate-slide-right delay-500 hover:border-green-400/50 transition-all duration-500 hover:scale-105">
                <h3 className="text-xl font-bold text-white mb-4 flex items-center gap-2">
                  <svg className="w-5 h-5 text-green-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6" />
                  </svg>
                  Expected Outcomes
                </h3>
                <ul className="space-y-3">
                  {[
                    "Reduce infrastructure costs by 40%+",
                    "Improve system uptime to 99.9%+",
                    "Scale resources automatically"
                  ].map((item, index) => (
                    <li key={index} className={`flex items-start gap-2 animate-scale-in delay-${(index + 8) * 100}`}>
                      <svg className="w-5 h-5 text-green-400 flex-shrink-0 mt-0.5" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                      </svg>
                      <span className="text-white/80 text-sm">{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>

          {/* Custom Software Solutions Service */}
          <div className="grid lg:grid-cols-2 gap-8 mb-12 mt-52">
            <div className="bg-white/10 backdrop-blur-md rounded-2xl p-8 border border-white/20 shadow-xl animate-slide-left delay-200 hover:border-blue-400/50 transition-all duration-500 hover:scale-105">
              <div className="flex items-center gap-4 mb-6">
                <div className="w-16 h-16 rounded-xl bg-gradient-to-br from-blue-500 to-purple-600 flex items-center justify-center flex-shrink-0 animate-float-rotate">
                  <svg className="w-10 h-10 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                  </svg>
                </div>
                <div>
                  <h2 className="text-3xl font-bold text-white">Custom Software Solutions</h2>
                  <p className="text-white/70 mt-1">Tailored CRM, HRM modules and business applications</p>
                </div>
              </div>

              <div className="mb-8">
                <h3 className="text-xl font-bold text-white mb-4 flex items-center gap-2">
                  <svg className="w-5 h-5 text-green-400" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                  </svg>
                  What's Included
                </h3>
                <div className="grid md:grid-cols-2 gap-3">
                  {[
                    "CRM system development",
                    "HRM modules & payroll",
                    "Custom business applications",
                    "Database design & integration",
                    "API development & integration",
                    "User training & documentation"
                  ].map((item, index) => (
                    <div key={index} className={`flex items-start gap-2 animate-scale-in delay-${(index + 1) * 100}`}>
                      <svg className="w-5 h-5 text-green-400 flex-shrink-0 mt-0.5" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                      </svg>
                      <span className="text-white/80 text-sm">{item}</span>
                    </div>
                  ))}
                </div>
              </div>

              <button className="w-full px-6 py-4 bg-gradient-to-r from-blue-500 to-purple-600 text-white font-semibold rounded-xl hover:from-blue-600 hover:to-purple-700 shadow-lg hover:shadow-xl flex items-center justify-center gap-2">
                <span>Get Started</span>
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
                </svg>
              </button>
            </div>

            <div className="space-y-6">
              <div className="bg-gradient-to-br from-blue-500/20 to-purple-500/20 backdrop-blur-md rounded-2xl p-6 border border-white/20 shadow-xl animate-slide-right delay-300 hover:border-blue-400/50 transition-all duration-500 hover:scale-105">
                <h3 className="text-xl font-bold text-white mb-4 flex items-center gap-2">
                  <svg className="w-5 h-5 text-green-400" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                  </svg>
                  Deliverables
                </h3>
                <ul className="space-y-3">
                  {[
                    "Fully functional software system",
                    "CRM/HRM modules",
                    "Admin dashboard & reports",
                    "Documentation & training"
                  ].map((item, index) => (
                    <li key={index} className={`flex items-start gap-2 animate-scale-in delay-${(index + 4) * 100}`}>
                      <svg className="w-5 h-5 text-blue-400 flex-shrink-0 mt-0.5" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                      </svg>
                      <span className="text-white/80 text-sm">{item}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <div className="bg-white/10 backdrop-blur-md rounded-2xl p-6 border border-white/20 shadow-xl animate-rotate-in delay-400 hover:border-purple-400/50 transition-all duration-500 hover:scale-105">
                <h3 className="text-xl font-bold text-white mb-4">Timeline</h3>
                <div className="text-4xl font-bold bg-gradient-to-r from-blue-400 to-purple-500 bg-clip-text text-transparent mb-2 animate-text-shimmer">
                  6-12 weeks
                </div>
                <p className="text-white/70 text-sm">From consultation to deployment</p>
              </div>

              <div className="bg-gradient-to-br from-green-500/20 to-teal-500/20 backdrop-blur-md rounded-2xl p-6 border border-white/20 shadow-xl animate-slide-right delay-500 hover:border-green-400/50 transition-all duration-500 hover:scale-105">
                <h3 className="text-xl font-bold text-white mb-4 flex items-center gap-2">
                  <svg className="w-5 h-5 text-green-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6" />
                  </svg>
                  Expected Outcomes
                </h3>
                <ul className="space-y-3">
                  {[
                    "Streamline business processes by 60%+",
                    "Improve data accuracy & reporting",
                    "Increase operational efficiency"
                  ].map((item, index) => (
                    <li key={index} className={`flex items-start gap-2 animate-scale-in delay-${(index + 8) * 100}`}>
                      <svg className="w-5 h-5 text-green-400 flex-shrink-0 mt-0.5" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                      </svg>
                      <span className="text-white/80 text-sm">{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>

          {/* Digital Marketing Service */}
          <div className="grid lg:grid-cols-2 gap-8 mb-12 mt-52">
            <div className="bg-white/10 backdrop-blur-md rounded-2xl p-8 border border-white/20 shadow-xl animate-slide-left delay-200 hover:border-blue-400/50 transition-all duration-500 hover:scale-105">
              <div className="flex items-center gap-4 mb-6">
                <div className="w-16 h-16 rounded-xl bg-gradient-to-br from-blue-500 to-purple-600 flex items-center justify-center flex-shrink-0 animate-float-rotate">
                  <svg className="w-10 h-10 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
                  </svg>
                </div>
                <div>
                  <h2 className="text-3xl font-bold text-white">Digital Marketing</h2>
                  <p className="text-white/70 mt-1">Search engine optimization and comprehensive digital strategies</p>
                </div>
              </div>

              <div className="mb-8">
                <h3 className="text-xl font-bold text-white mb-4 flex items-center gap-2">
                  <svg className="w-5 h-5 text-green-400" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                  </svg>
                  What's Included
                </h3>
                <div className="grid md:grid-cols-2 gap-3">
                  {[
                    "SEO optimization & keyword research",
                    "Content marketing & strategy",
                    "Social media management",
                    "Email marketing campaigns",
                    "Analytics & performance tracking",
                    "Monthly reporting & insights"
                  ].map((item, index) => (
                    <div key={index} className={`flex items-start gap-2 animate-scale-in delay-${(index + 1) * 100}`}>
                      <svg className="w-5 h-5 text-green-400 flex-shrink-0 mt-0.5" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                      </svg>
                      <span className="text-white/80 text-sm">{item}</span>
                    </div>
                  ))}
                </div>
              </div>

              <button className=" mt-60 w-full px-6 py-4 bg-gradient-to-r from-blue-500 to-purple-600 text-white font-semibold rounded-xl hover:from-blue-600 hover:to-purple-700 shadow-lg hover:shadow-xl flex items-center justify-center gap-2">
                <span>Get Started</span>
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
                </svg>
              </button>
            </div>

            <div className="space-y-6">
              <div className="bg-gradient-to-br from-blue-500/20 to-purple-500/20 backdrop-blur-md rounded-2xl p-6 border border-white/20 shadow-xl animate-slide-right delay-300 hover:border-blue-400/50 transition-all duration-500 hover:scale-105">
                <h3 className="text-xl font-bold text-white mb-4 flex items-center gap-2">
                  <svg className="w-5 h-5 text-green-400" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                  </svg>
                  Deliverables
                </h3>
                <ul className="space-y-3">
                  {[
                    "SEO-optimized website",
                    "Content strategy & calendar",
                    "Social media presence",
                    "Monthly performance reports"
                  ].map((item, index) => (
                    <li key={index} className={`flex items-start gap-2 animate-scale-in delay-${(index + 4) * 100}`}>
                      <svg className="w-5 h-5 text-blue-400 flex-shrink-0 mt-0.5" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                      </svg>
                      <span className="text-white/80 text-sm">{item}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <div className="bg-white/10 backdrop-blur-md rounded-2xl p-6 border border-white/20 shadow-xl animate-rotate-in delay-400 hover:border-purple-400/50 transition-all duration-500 hover:scale-105">
                <h3 className="text-xl font-bold text-white mb-4">Timeline</h3>
                <div className="text-4xl font-bold bg-gradient-to-r from-blue-400 to-purple-500 bg-clip-text text-transparent mb-2 animate-text-shimmer">
                  Ongoing
                </div>
                <p className="text-white/70 text-sm">Monthly campaigns & optimization</p>
              </div>

              <div className="bg-gradient-to-br from-green-500/20 to-teal-500/20 backdrop-blur-md rounded-2xl p-6 border border-white/20 shadow-xl animate-slide-right delay-500 hover:border-green-400/50 transition-all duration-500 hover:scale-105">
                <h3 className="text-xl font-bold text-white mb-4 flex items-center gap-2">
                  <svg className="w-5 h-5 text-green-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6" />
                  </svg>
                  Expected Outcomes
                </h3>
                <ul className="space-y-3">
                  {[
                    "Increase organic traffic by 200%+",
                    "Improve search rankings",
                    "Generate quality leads"
                  ].map((item, index) => (
                    <li key={index} className={`flex items-start gap-2 animate-scale-in delay-${(index + 8) * 100}`}>
                      <svg className="w-5 h-5 text-green-400 flex-shrink-0 mt-0.5" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                      </svg>
                      <span className="text-white/80 text-sm">{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>

          {/* Performance Marketing Service */}
          <div className="grid lg:grid-cols-2 gap-8 mb-12 mt-52">
            <div className="bg-white/10 backdrop-blur-md rounded-2xl p-8 border border-white/20 shadow-xl animate-slide-left delay-200 hover:border-blue-400/50 transition-all duration-500 hover:scale-105">
              <div className="flex items-center gap-4 mb-6">
                <div className="w-16 h-16 rounded-xl bg-gradient-to-br from-blue-500 to-purple-600 flex items-center justify-center flex-shrink-0 animate-float-rotate">
                  <svg className="w-10 h-10 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6" />
                  </svg>
                </div>
                <div>
                  <h2 className="text-3xl font-bold text-white">Performance Marketing</h2>
                  <p className="text-white/70 mt-1">Data-driven campaigns that deliver measurable results</p>
                </div>
              </div>

              <div className="mb-8">
                <h3 className="text-xl font-bold text-white mb-4 flex items-center gap-2">
                  <svg className="w-5 h-5 text-green-400" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                  </svg>
                  What's Included
                </h3>
                <div className="grid md:grid-cols-2 gap-3">
                  {[
                    "PPC & paid advertising campaigns",
                    "Google Ads & Facebook Ads",
                    "Conversion rate optimization",
                    "Landing page optimization",
                    "A/B testing & analytics",
                    "ROI tracking & reporting"
                  ].map((item, index) => (
                    <div key={index} className={`flex items-start gap-2 animate-scale-in delay-${(index + 1) * 100}`}>
                      <svg className="w-5 h-5 text-green-400 flex-shrink-0 mt-0.5" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                      </svg>
                      <span className="text-white/80 text-sm">{item}</span>
                    </div>
                  ))}
                </div>
              </div>

              <button className="mt-60 w-full px-6 py-4 bg-gradient-to-r from-blue-500 to-purple-600 text-white font-semibold rounded-xl hover:from-blue-600 hover:to-purple-700 shadow-lg hover:shadow-xl flex items-center justify-center gap-2">
                <span>Get Started</span>
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
                </svg>
              </button>
            </div>

            <div className="space-y-6">
              <div className="bg-gradient-to-br from-blue-500/20 to-purple-500/20 backdrop-blur-md rounded-2xl p-6 border border-white/20 shadow-xl animate-slide-right delay-300 hover:border-blue-400/50 transition-all duration-500 hover:scale-105">
                <h3 className="text-xl font-bold text-white mb-4 flex items-center gap-2">
                  <svg className="w-5 h-5 text-green-400" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                  </svg>
                  Deliverables
                </h3>
                <ul className="space-y-3">
                  {[
                    "Optimized ad campaigns",
                    "Landing pages & funnels",
                    "Conversion tracking setup",
                    "Monthly performance reports"
                  ].map((item, index) => (
                    <li key={index} className={`flex items-start gap-2 animate-scale-in delay-${(index + 4) * 100}`}>
                      <svg className="w-5 h-5 text-blue-400 flex-shrink-0 mt-0.5" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                      </svg>
                      <span className="text-white/80 text-sm">{item}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <div className="bg-white/10 backdrop-blur-md rounded-2xl p-6 border border-white/20 shadow-xl animate-rotate-in delay-400 hover:border-purple-400/50 transition-all duration-500 hover:scale-105">
                <h3 className="text-xl font-bold text-white mb-4">Timeline</h3>
                <div className="text-4xl font-bold bg-gradient-to-r from-blue-400 to-purple-500 bg-clip-text text-transparent mb-2 animate-text-shimmer">
                  Ongoing
                </div>
                <p className="text-white/70 text-sm">Continuous optimization & campaigns</p>
              </div>

              <div className="bg-gradient-to-br from-green-500/20 to-teal-500/20 backdrop-blur-md rounded-2xl p-6 border border-white/20 shadow-xl animate-slide-right delay-500 hover:border-green-400/50 transition-all duration-500 hover:scale-105">
                <h3 className="text-xl font-bold text-white mb-4 flex items-center gap-2">
                  <svg className="w-5 h-5 text-green-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6" />
                  </svg>
                  Expected Outcomes
                </h3>
                <ul className="space-y-3">
                  {[
                    "Increase conversion rates by 50%+",
                    "Reduce cost per acquisition",
                    "Maximize ROI on ad spend"
                  ].map((item, index) => (
                    <li key={index} className={`flex items-start gap-2 animate-scale-in delay-${(index + 8) * 100}`}>
                      <svg className="w-5 h-5 text-green-400 flex-shrink-0 mt-0.5" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                      </svg>
                      <span className="text-white/80 text-sm">{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>

          {/* IT Support Service */}
          <div className="grid lg:grid-cols-2 gap-8 mb-12 mt-52">
            <div className="bg-white/10 backdrop-blur-md rounded-2xl p-8 border border-white/20 shadow-xl animate-slide-left delay-200 hover:border-blue-400/50 transition-all duration-500 hover:scale-105">
              <div className="flex items-center gap-4 mb-6">
                <div className="w-16 h-16 rounded-xl bg-gradient-to-br from-blue-500 to-purple-600 flex items-center justify-center flex-shrink-0 animate-float-rotate">
                  <svg className="w-10 h-10 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M18.364 5.636l-3.536 3.536m0 5.656l3.536 3.536M9.172 9.172L5.636 5.636m3.536 9.192l-3.536 3.536M21 12a9 9 0 11-18 0 9 9 0 0118 0zm-5 0a4 4 0 11-8 0 4 4 0 018 0z" />
                  </svg>
                </div>
                <div>
                  <h2 className="text-3xl font-bold text-white">IT Support</h2>
                  <p className="text-white/70 mt-1">24/7 technical support and IT infrastructure management</p>
                </div>
              </div>

              <div className="mb-8">
                <h3 className="text-xl font-bold text-white mb-4 flex items-center gap-2">
                  <svg className="w-5 h-5 text-green-400" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                  </svg>
                  What's Included
                </h3>
                <div className="grid md:grid-cols-2 gap-3">
                  {[
                    "24/7 helpdesk support",
                    "Network & server management",
                    "Security monitoring & updates",
                    "Backup & disaster recovery",
                    "Software installation & updates",
                    "Remote troubleshooting"
                  ].map((item, index) => (
                    <div key={index} className={`flex items-start gap-2 animate-scale-in delay-${(index + 1) * 100}`}>
                      <svg className="w-5 h-5 text-green-400 flex-shrink-0 mt-0.5" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                      </svg>
                      <span className="text-white/80 text-sm">{item}</span>
                    </div>
                  ))}
                </div>
              </div>

              <button className="mt-60 w-full px-6 py-4 bg-gradient-to-r from-blue-500 to-purple-600 text-white font-semibold rounded-xl hover:from-blue-600 hover:to-purple-700 shadow-lg hover:shadow-xl flex items-center justify-center gap-2">
                <span>Get Started</span>
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
                </svg>
              </button>
            </div>

            <div className="space-y-6">
              <div className="bg-gradient-to-br from-blue-500/20 to-purple-500/20 backdrop-blur-md rounded-2xl p-6 border border-white/20 shadow-xl animate-slide-right delay-300 hover:border-blue-400/50 transition-all duration-500 hover:scale-105">
                <h3 className="text-xl font-bold text-white mb-4 flex items-center gap-2">
                  <svg className="w-5 h-5 text-green-400" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                  </svg>
                  Deliverables
                </h3>
                <ul className="space-y-3">
                  {[
                    "Dedicated support team",
                    "IT infrastructure monitoring",
                    "Security & compliance reports",
                    "Knowledge base & documentation"
                  ].map((item, index) => (
                    <li key={index} className={`flex items-start gap-2 animate-scale-in delay-${(index + 4) * 100}`}>
                      <svg className="w-5 h-5 text-blue-400 flex-shrink-0 mt-0.5" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                      </svg>
                      <span className="text-white/80 text-sm">{item}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <div className="bg-white/10 backdrop-blur-md rounded-2xl p-6 border border-white/20 shadow-xl animate-rotate-in delay-400 hover:border-purple-400/50 transition-all duration-500 hover:scale-105">
                <h3 className="text-xl font-bold text-white mb-4">Timeline</h3>
                <div className="text-4xl font-bold bg-gradient-to-r from-blue-400 to-purple-500 bg-clip-text text-transparent mb-2 animate-text-shimmer">
                  24/7
                </div>
                <p className="text-white/70 text-sm">Round-the-clock support available</p>
              </div>

              <div className="bg-gradient-to-br from-green-500/20 to-teal-500/20 backdrop-blur-md rounded-2xl p-6 border border-white/20 shadow-xl animate-slide-right delay-500 hover:border-green-400/50 transition-all duration-500 hover:scale-105">
                <h3 className="text-xl font-bold text-white mb-4 flex items-center gap-2">
                  <svg className="w-5 h-5 text-green-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6" />
                  </svg>
                  Expected Outcomes
                </h3>
                <ul className="space-y-3">
                  {[
                    "Reduce downtime by 90%+",
                    "Improve system reliability",
                    "Faster issue resolution"
                  ].map((item, index) => (
                    <li key={index} className={`flex items-start gap-2 animate-scale-in delay-${(index + 8) * 100}`}>
                      <svg className="w-5 h-5 text-green-400 flex-shrink-0 mt-0.5" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                      </svg>
                      <span className="text-white/80 text-sm">{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
