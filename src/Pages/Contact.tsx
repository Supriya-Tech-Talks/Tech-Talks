import React, { useState } from "react";
import "../App.css";

type SubmitStatus = "idle" | "success" | "error";

interface FormData {
  firstName: string;
  lastName: string;
  email: string;
  role: string;
  companyName: string;
  website: string;
  phoneCode: string;
  phoneNumber: string;
  companySize: string;
  annualRevenue: string;
  projectBudget: string;
  projectDescription: string;
  agreeToTerms: boolean;
}

export default function Contact() {
  const [formData, setFormData] = useState<FormData>({
    firstName: "",
    lastName: "",
    email: "",
    role: "",
    companyName: "",
    website: "",
    phoneCode: "+91",
    phoneNumber: "",
    companySize: "",
    annualRevenue: "",
    projectBudget: "",
    projectDescription: "",
    agreeToTerms: false,
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<SubmitStatus>("idle");

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>
  ) => {
    const target = e.target as HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement;
    const { name, value, type } = target;
    if (type === "checkbox") {
      setFormData((prev) => ({ ...prev, [name]: (target as HTMLInputElement).checked }));
    } else {
      setFormData((prev) => ({ ...prev, [name]: value }));
    }
  };

  const validate = (data: FormData) => {
    if (!data.firstName.trim() || !data.lastName.trim()) return false;
    if (!data.email.trim()) return false;
    if (!data.role.trim()) return false;
    if (!data.companyName.trim()) return false;
    if (!data.phoneNumber.trim()) return false;
    if (!data.agreeToTerms) return false;
    return true;
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!validate(formData)) {
      setSubmitStatus("error");
      return;
    }

    setIsSubmitting(true);
    setSubmitStatus("idle");

    try {
      // Replace this with your real API - this simulates a network call
      await new Promise((resolve) => setTimeout(resolve, 1200));

      setSubmitStatus("success");

      // keep success message visible briefly then reset
      setTimeout(() => {
        setFormData({
          firstName: "",
          lastName: "",
          email: "",
          role: "",
          companyName: "",
          website: "",
          phoneCode: "+91",
          phoneNumber: "",
          companySize: "",
          annualRevenue: "",
          projectBudget: "",
          projectDescription: "",
          agreeToTerms: false,
        });
        setSubmitStatus("idle");
      }, 2200);
    } catch {
      setSubmitStatus("error");
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="">
      {/* Dark black background with subtle white gradient */}
      <div className="" />
      {/* <div className="absolute inset-0 bg-gradient-to-br from-white/5 via-transparent to-white/3" /> */}
      <div className="absolute top-0 left-0 w-full h-full overflow-hidden pointer-events-none z-0">
        <div className="absolute top-20 left-10 w-72 h-72 rounded-full blur-3xl bg-blue-500/20 animate-float" />
        <div className="absolute bottom-20 right-10 w-96 h-96 rounded-full blur-3xl bg-purple-500/20 animate-float orb-delay-2" />
      </div>

      <div className="relative z-10 w-full max-w-[1440px] mx-auto px-6 py-12">
        <div className="text-center mb-16">
          <h1 className="text-5xl md:text-6xl font-bold mb-4">
            <span className="text-white">Let's</span>{" "}
            <span className="bg-gradient-to-r from-blue-400 via-purple-500 to-teal-400 bg-clip-text text-transparent">
            Talk
            </span>
          </h1>
          <p className="text-xl text-white/70 max-w-3xl mx-auto">
            Reach out to discuss how we can help transform your business with AI automation
          </p>
        </div>

        {/* Contact Information Section - Top Row */}
        <div className="mb-12">
          <div className="bg-white/10 backdrop-blur-md rounded-2xl p-8 border border-white/20 shadow-xl max-w-6xl mx-auto">
            <h2 className="text-2xl font-bold text-white mb-6 text-center">Contact Information</h2>
            <p className="text-white/70 mb-8 text-center max-w-2xl mx-auto">
              Reach out through any of these channels. We typically respond within 24 hours.
            </p>

            <div className="grid md:grid-cols-3 gap-6 max-w-5xl mx-auto">
              <div className="flex flex-col items-center text-center p-6 bg-white/5 rounded-xl border border-white/10 hover:border-white/20 transition-all duration-300 hover:scale-105">
                <div className="w-16 h-16 rounded-xl bg-gradient-to-br from-blue-500 to-blue-600 flex items-center justify-center mb-4">
                  <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                  </svg>
                </div>
                <h3 className="text-white font-semibold mb-2 text-lg">Phone</h3>
                <a href="tel:+918187889752" className="text-blue-400 hover:text-blue-300 transition text-base">+91 8187889752</a>
              </div>

              <div className="flex flex-col items-center text-center p-6 bg-white/5 rounded-xl border border-white/10 hover:border-white/20 transition-all duration-300 hover:scale-105">
                <div className="w-16 h-16 rounded-xl bg-gradient-to-br from-purple-500 to-purple-600 flex items-center justify-center mb-4">
                  <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                  </svg>
                </div>
                <h3 className="text-white font-semibold mb-2 text-lg">Email</h3>
                <a href="mailto:contact@sakethaiautomation.com" className="text-blue-400 hover:text-blue-300 transition text-sm break-all">contact@sakethaiautomation.com</a>
              </div>

              <div className="flex flex-col items-center text-center p-6 bg-white/5 rounded-xl border border-white/10 hover:border-white/20 transition-all duration-300 hover:scale-105">
                <div className="w-16 h-16 rounded-xl bg-gradient-to-br from-green-500 to-green-600 flex items-center justify-center mb-4">
                  <svg className="w-8 h-8 text-white" viewBox="0 0 24 24" fill="currentColor" aria-hidden>
                    <path d="M20.52 3.48A11.92 11.92 0 0012 0a11.92 11.92 0 00-8.52 3.48A11.92 11.92 0 000 12c0 2.09.53 4.15 1.54 6L0 24l6-1.54A11.92 11.92 0 0012 24c3.21 0 6.22-1.25 8.52-3.48A11.92 11.92 0 0024 12 11.92 11.92 0 0020.52 3.48zM12 21.5a9.5 9.5 0 01-4.88-1.34L6 19l.95-1.1A9.5 9.5 0 0112 3.5c5.24 0 9.5 4.26 9.5 9.5S17.24 21.5 12 21.5z" />
                  </svg>
                </div>
                <h3 className="text-white font-semibold mb-2 text-lg">WhatsApp</h3>
                <a href="https://wa.me/918187889752" target="_blank" rel="noopener noreferrer" className="text-green-400 hover:text-green-300 transition text-base">Chat with us instantly</a>
              </div>
            </div>

            <div className="mt-8 flex flex-col items-center">
              <div className="flex items-center gap-3 p-4 bg-gradient-to-br from-blue-500/20 to-purple-500/20 backdrop-blur-md rounded-xl border border-white/20 max-w-2xl">
                <div className="w-10 h-10 rounded-lg bg-gradient-to-br from-yellow-400 to-orange-500 flex items-center justify-center flex-shrink-0">
                  <svg className="w-5 h-5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                </div>
                <div className="text-center md:text-left">
                  <h3 className="text-white font-bold text-base mb-1">Quick Response Guarantee</h3>
                  <p className="text-white/80 text-sm leading-relaxed">We respond to all inquiries within 24 hours on business days. For urgent matters, call or WhatsApp us directly.</p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Form Section - Bottom */}
        <div className="grid lg:grid-cols-2 gap-8">
          <div className="lg:order-2">
            <div className="bg-white/10 backdrop-blur-md rounded-2xl p-8 border border-white/20 shadow-xl lg:sticky lg:top-24 max-w-full">
            <h2 className="text-2xl font-bold text-white mb-6">
              <span className="text-white">Let's get to know</span>{" "}
              <span className="bg-gradient-to-r from-blue-400 to-purple-500 bg-clip-text text-transparent">you</span>
            </h2>

            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid md:grid-cols-2 gap-4">
                <div>
                  <label htmlFor="firstName" className="block text-white/90 text-sm font-medium mb-2  text-left">
                    First Name <span className="text-red-400">*</span>
                  </label>
                  <input
                    type="text"
                    id="firstName"
                    name="firstName"
                    value={formData.firstName}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 bg-white/5 border border-white/20 rounded-lg text-white placeholder-white/40 focus:outline-none focus:ring-2 focus:ring-blue-500 transition"
                    placeholder="Jane"
                  />
                </div>

                <div>
                  <label htmlFor="lastName" className="block text-white/90 text-sm font-medium mb-2 text-left">
                    Last Name <span className="text-red-400">*</span>
                  </label>
                  <input
                    type="text"
                    id="lastName"
                    name="lastName"
                    value={formData.lastName}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 bg-white/5 border border-white/20 rounded-lg text-white placeholder-white/40 focus:outline-none focus:ring-2 focus:ring-blue-500 transition"
                    placeholder="Doe"
                  />
                </div>
              </div>

              <div>
                <label htmlFor="email" className="block text-white/90 text-sm font-medium mb-2 text-left">
                  Email <span className="text-red-400">*</span>
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 bg-white/5 border border-white/20 rounded-lg text-white placeholder-white/40 focus:outline-none focus:ring-2 focus:ring-blue-500 transition"
                  placeholder="example@gmail.com"
                />
              </div>

              <div>
                <label htmlFor="role" className="block text-white/90 text-sm font-medium mb-2 text-left">
                  Your Role within Organization <span className="text-red-400">*</span>
                </label>
                <input
                  type="text"
                  id="role"
                  name="role"
                  value={formData.role}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 bg-white/5 border border-white/20 rounded-lg text-white placeholder-white/40 focus:outline-none focus:ring-2 focus:ring-blue-500 transition"
                  placeholder="e.g., CTO, Product Manager"
                />
              </div>

              <div>
                <label htmlFor="companyName" className="block text-white/90 text-sm font-medium mb-2 text-left">
                  Company Name <span className="text-red-400">*</span>
                </label>
                <input
                  type="text"
                  id="companyName"
                  name="companyName"
                  value={formData.companyName}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 bg-white/5 border border-white/20 rounded-lg text-white placeholder-white/40 focus:outline-none focus:ring-2 focus:ring-blue-500 transition"
                  placeholder="Your company name"
                />
              </div>

              <div className="flex gap-3">
                <select
                  name="phoneCode"
                  value={formData.phoneCode}
                  onChange={handleChange}
                  aria-label="Country code"
                  className="w-28 rounded-lg p-3 bg-white/5 text-white border border-white/20"
                >
                  <option value="+91">+91</option>
                  <option value="+1">+1</option>
                  <option value="+44">+44</option>
                </select>

                <input
                  name="phoneNumber"
                  id="phoneNumber"
                  value={formData.phoneNumber}
                  onChange={handleChange}
                  placeholder="Phone number"
                  inputMode="tel"
                  required
                  className="flex-1 rounded-lg p-3 bg-white/5 text-white placeholder-white/40 border border-white/20 focus:outline-none focus:ring-2 focus:ring-blue-500 transition"
                />
              </div>

              <div className="grid md:grid-cols-2 gap-4">
                <select
                  name="companySize"
                  value={formData.companySize}
                  onChange={handleChange}
                  aria-label="Company size"
                  className="w-full rounded-lg p-3 bg-white/5 text-white border border-white/20"
                >
                  <option value="">Company size (optional)</option>
                  <option value="1-10">1-10</option>
                  <option value="11-50">11-50</option>
                  <option value="51-200">51-200</option>
                  <option value="200+">200+</option>
                </select>

                <input
                  name="annualRevenue"
                  value={formData.annualRevenue}
                  onChange={handleChange}
                  placeholder="Annual revenue (optional)"
                  className="w-full rounded-lg p-3 bg-white/5 text-white placeholder-white/40 border border-white/20 focus:outline-none transition"
                />
              </div>

              <input
                name="projectBudget"
                value={formData.projectBudget}
                onChange={handleChange}
                placeholder="Estimated project budget (optional)"
                className="w-full rounded-lg p-3 bg-white/5 text-white placeholder-white/40 border border-white/20 focus:outline-none transition"
              />

              <input
                name="website"
                value={formData.website}
                onChange={handleChange}
                placeholder="Website (optional)"
                className="w-full rounded-lg p-3 bg-white/5 text-white placeholder-white/40 border border-white/20 focus:outline-none transition"
              />

              <textarea
                name="projectDescription"
                value={formData.projectDescription}
                onChange={handleChange}
                placeholder="Tell us about your project (goals, timeline, tech)..."
                rows={6}
                className="w-full rounded-lg p-3 bg-white/5 text-white placeholder-white/40 border border-white/20 focus:outline-none transition"
              />

              <label className="flex items-start gap-3 text-white/80">
                <input
                  type="checkbox"
                  name="agreeToTerms"
                  checked={formData.agreeToTerms}
                  onChange={handleChange}
                  className="w-4 h-4 rounded mt-1"
                />
                <div className="text-sm">
                  I agree to be contacted regarding this inquiry. <span className="text-white/60 block"></span>
                </div>
              </label>

              {submitStatus === "success" && (
                <div className="p-3 rounded bg-green-600/80 text-white">Thanks — we'll get back to you soon.</div>
              )}
              {submitStatus === "error" && (
                <div className="p-3 rounded bg-red-600/80 text-white">Please complete required fields and agree to be contacted.</div>
              )}

              <div className="flex items-center gap-4">
                <button
                  type="submit"
                  disabled={isSubmitting || !formData.agreeToTerms}
                  className="px-5 py-3 rounded-lg bg-gradient-to-r from-blue-500 to-purple-500 text-white font-semibold disabled:opacity-60"
                >
                  {isSubmitting ? "Sending..." : "Send Message"}
                </button>

                <span className="text-white/60 text-sm">{isSubmitting ? "Working..." : "We reply within 24 hours"}</span>
              </div>
            </form>
            </div>
          </div>

          {/* Additional Info Section - Left Side */}
          <div className="lg:order-1 space-y-6">
            <div className="bg-gradient-to-br from-blue-500/10 to-purple-500/10 backdrop-blur-md rounded-2xl p-8 border border-white/20 shadow-xl max-w-full">
              <h3 className="text-xl font-bold text-white mb-4">Why Reach Out?</h3>
              <ul className="space-y-3 text-white/80">
                <li className="flex items-start gap-3">
                  <div className="w-6 h-6 rounded-full bg-gradient-to-br from-blue-500 to-purple-500 flex items-center justify-center flex-shrink-0 mt-0.5">
                    <svg className="w-4 h-4 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                  </div>
                  <span>Get personalized AI automation solutions for your business</span>
                </li>
                <li className="flex items-start gap-3">
                  <div className="w-6 h-6 rounded-full bg-gradient-to-br from-blue-500 to-purple-500 flex items-center justify-center flex-shrink-0 mt-0.5">
                    <svg className="w-4 h-4 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                  </div>
                  <span>Discuss your project requirements and timeline</span>
                </li>
                <li className="flex items-start gap-3">
                  <div className="w-6 h-6 rounded-full bg-gradient-to-br from-blue-500 to-purple-500 flex items-center justify-center flex-shrink-0 mt-0.5">
                    <svg className="w-4 h-4 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                  </div>
                  <span>Receive a customized quote tailored to your needs</span>
                </li>
                <li className="flex items-start gap-3">
                  <div className="w-6 h-6 rounded-full bg-gradient-to-br from-blue-500 to-purple-500 flex items-center justify-center flex-shrink-0 mt-0.5">
                    <svg className="w-4 h-4 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                  </div>
                  <span>Learn about our proven automation strategies</span>
                </li>
              </ul>
            </div>

            <div className="bg-white/5 backdrop-blur-md rounded-2xl p-6 border border-white/10 max-w-full">
              <div className="flex items-center gap-3 mb-3">
                <div className="w-10 h-10 rounded-lg bg-gradient-to-br from-teal-500 to-blue-500 flex items-center justify-center">
                  <svg className="w-5 h-5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                  </svg>
                </div>
                <h3 className="text-white font-semibold">Location</h3>
              </div>
              <p className="text-white/70 text-sm">Serving clients worldwide</p>
            </div>
          </div>
        </div>

       
      </div>
    </div>
  );
}
