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
                  <h2 className="text-3xl font-bold text-white">AI Agents & Automations</h2>
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

          {/* Cloud Native Applications Service */}
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
                  <h2 className="text-3xl font-bold text-white">Cloud Native Applications</h2>
                  <p className="text-white/70 mt-1">Scalable, resilient applications built for the cloud</p>
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
                    "Microservices architecture",
                    "Container orchestration (Kubernetes)",
                    "Cloud infrastructure setup",
                    "Auto-scaling & load balancing",
                    "CI/CD pipeline implementation",
                    "Monitoring & observability"
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
                    "Cloud-native application architecture",
                    "Container deployment setup",
                    "Infrastructure as code",
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
                  6-12 weeks
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
                    "Improved scalability & performance",
                    "Reduced infrastructure costs by 30%+",
                    "Faster deployment cycles"
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

          {/* SaaS Applications Service */}
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
                  <h2 className="text-3xl font-bold text-white">SaaS Applications</h2>
                  <p className="text-white/70 mt-1">Scalable software-as-a-service solutions for modern businesses</p>
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
                    "Multi-tenant architecture",
                    "Subscription management",
                    "User authentication & authorization",
                    "Payment gateway integration",
                    "API development & documentation",
                    "Admin dashboard & analytics"
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
                    "Fully functional SaaS platform",
                    "Subscription billing system",
                    "Admin dashboard & analytics",
                    "API documentation & SDK"
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
                    "Recurring revenue model",
                    "Scalable user base management",
                    "Automated billing & subscriptions"
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

          {/* Enterprise Software Solutions Service */}
          <div className="grid lg:grid-cols-2 gap-8 mb-12 mt-52">
            {/* Left Column - Main Service Card */}
            <div className="bg-white/10 backdrop-blur-md rounded-2xl p-8 border border-white/20 shadow-xl animate-slide-left delay-200 hover:border-blue-400/50 transition-all duration-500 hover:scale-105">
              <div className="flex items-center gap-4 mb-6">
                <div className="w-16 h-16 rounded-xl bg-gradient-to-br from-blue-500 to-purple-600 flex items-center justify-center flex-shrink-0 animate-float-rotate">
                  <svg className="w-10 h-10 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
                  </svg>
                </div>
                <div>
                  <h2 className="text-3xl font-bold text-white">Enterprise Software Solutions</h2>
                  <p className="text-white/70 mt-1">Comprehensive enterprise-grade software for large organizations</p>
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
                    "Enterprise architecture design",
                    "Scalable system development",
                    "Integration with existing systems",
                    "Security & compliance features",
                    "High availability & disaster recovery",
                    "Enterprise support & maintenance"
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
                    "Enterprise-grade software system",
                    "Integration documentation",
                    "Security & compliance reports",
                    "Training & support materials"
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
                  12-24 weeks
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
                    "Streamlined business operations",
                    "Improved data management",
                    "Enhanced security & compliance"
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

          {/* CRM & ERP Solutions Service */}
          <div className="grid lg:grid-cols-2 gap-8 mb-12 mt-52">
            {/* Left Column - Main Service Card */}
            <div className="bg-white/10 backdrop-blur-md rounded-2xl p-8 border border-white/20 shadow-xl animate-slide-left delay-200 hover:border-blue-400/50 transition-all duration-500 hover:scale-105">
              <div className="flex items-center gap-4 mb-6">
                <div className="w-16 h-16 rounded-xl bg-gradient-to-br from-blue-500 to-purple-600 flex items-center justify-center flex-shrink-0 animate-float-rotate">
                  <svg className="w-10 h-10 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
                  </svg>
                </div>
                <div>
                  <h2 className="text-3xl font-bold text-white">CRM & ERP Solutions</h2>
                  <p className="text-white/70 mt-1">Comprehensive customer relationship and enterprise resource planning systems</p>
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
                    "Customer relationship management",
                    "Sales pipeline & lead tracking",
                    "Inventory & supply chain management",
                    "Financial management & accounting",
                    "Reporting & analytics dashboard",
                    "Integration with third-party tools"
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
                    "Complete CRM/ERP system",
                    "Custom modules & workflows",
                    "Analytics & reporting tools",
                    "User training & documentation"
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
                    "Improved customer relationships",
                    "Streamlined business processes",
                    "Better data visibility & insights"
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
                  <h2 className="text-3xl font-bold text-white">IT Support and fix it fast</h2>
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
