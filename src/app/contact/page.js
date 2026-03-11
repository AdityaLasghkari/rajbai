"use client";
import { useState } from "react";

export default function ContactPage() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    company: "",
    country: "",
    phone: "",
    inquiryType: "general",
    message: "",
  });
  const [sending, setSending] = useState(false);
  const [sent, setSent] = useState(false);
  const [error, setError] = useState("");

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setSending(true);
    setError("");
    try {
      const res = await fetch("/api/inquiries", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      });
      const data = await res.json();
      if (data.success) {
        setSent(true);
        setFormData({
          name: "",
          email: "",
          company: "",
          country: "",
          phone: "",
          inquiryType: "general",
          message: "",
        });
      } else {
        setError(data.error || "Something went wrong. Please try again.");
      }
    } catch (e) {
      setError("Network error. Please try again later.");
    } finally {
      setSending(false);
    }
  };

  return (
    <>
      {/* Hero */}
      <section className="relative bg-gradient-to-br from-primary to-secondary py-24 overflow-hidden">
        <div className="absolute -right-20 -top-20 h-96 w-96 rounded-full bg-white/5 blur-3xl"></div>
        <div className="absolute -left-20 -bottom-20 h-96 w-96 rounded-full bg-white/5 blur-3xl"></div>
        <div className="mx-auto max-w-7xl px-6 text-center relative z-10">
          <span className="inline-block px-4 py-1.5 bg-white/10 text-white text-xs font-bold tracking-widest uppercase rounded-full mb-6">
            Get In Touch
          </span>
          <h1 className="text-5xl md:text-7xl font-black text-white mb-6 tracking-tight">
            Contact <span className="italic text-accent">Us</span>
          </h1>
          <p className="text-lg text-white/80 max-w-2xl mx-auto">
            Whether you need a custom quote, product samples, or have questions
            about our capabilities — our global team is ready to assist you.
          </p>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-6 py-16">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
          {/* Contact Info */}
          <div className="lg:col-span-1 space-y-6">
            <div>
              <h2 className="text-2xl font-black text-slate-900 dark:text-white mb-6">
                Reach Our Team
              </h2>
              <p className="text-slate-600 dark:text-slate-400 leading-relaxed">
                Our dedicated export team responds within 24 hours. For urgent
                inquiries, please call our direct line.
              </p>
            </div>

            {/* Contact cards */}
            <div className="space-y-4">
              {[
                {
                  icon: "location_on",
                  title: "Head Office",
                  lines: [
                    "Rajbai International And Company",
                    "opp nayara petrol pump, jetpur road,",
                    "gondal, rajkot, gujarat, india-360311",
                  ],
                },
                {
                  icon: "mail",
                  title: "Email",
                  lines: [
                    "rajbaiinternational@gmail.com",
                  ],
                },
                {
                  icon: "phone",
                  title: "Phone",
                  lines: [
                    "+91 9664771429",
                    "+91 7046041027 (WhatsApp)",
                  ],
                },
                {
                  icon: "schedule",
                  title: "Business Hours",
                  lines: [
                    "24/7",
                  ],
                },
              ].map((item, idx) => (
                <div
                  key={idx}
                  className="flex items-start gap-4 p-5 bg-white dark:bg-bg-dark/40 rounded-2xl border border-slate-200 dark:border-slate-800 hover:border-primary/30 hover:shadow-lg transition-all"
                >
                  <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-primary/10 text-primary">
                    <span className="material-symbols-outlined">
                      {item.icon}
                    </span>
                  </div>
                  <div>
                    <h4 className="font-bold dark:text-white mb-1">
                      {item.title}
                    </h4>
                    {item.lines.map((line, i) => (
                      <p
                        key={i}
                        className="text-sm text-slate-500 leading-relaxed"
                      >
                        {line}
                      </p>
                    ))}
                  </div>
                </div>
              ))}
            </div>

            {/* Quick links */}
            <div className="bg-gradient-to-br from-primary to-secondary rounded-2xl p-6 text-white">
              <h4 className="font-bold mb-4">Quick Actions</h4>
              <div className="space-y-3">
                {[
                  {
                    icon: "description",
                    text: "Download Product Brochure",
                  },
                  {
                    icon: "science",
                    text: "Request Product Samples",
                  },
                  {
                    icon: "verified",
                    text: "View Certifications",
                  },
                ].map((action, idx) => (
                  <div
                    key={idx}
                    className="flex items-center gap-3 p-3 rounded-xl bg-white/10 hover:bg-white/20 cursor-pointer transition-colors"
                  >
                    <span className="material-symbols-outlined text-lg">
                      {action.icon}
                    </span>
                    <span className="text-sm font-semibold">{action.text}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Contact Form */}
          <div className="lg:col-span-2">
            <div className="bg-white dark:bg-bg-dark/40 rounded-3xl border border-slate-200 dark:border-slate-800 p-8 md:p-10 shadow-sm">
              <h3 className="text-2xl font-black text-slate-900 dark:text-white mb-2">
                Send an Inquiry
              </h3>
              <p className="text-slate-500 mb-8">
                Fill out the form below and our team will get back to you within
                24 business hours.
              </p>

              {sent && (
                <div className="mb-8 p-6 bg-emerald-50 dark:bg-emerald-900/20 border border-emerald-200 dark:border-emerald-800 rounded-2xl">
                  <div className="flex items-center gap-3">
                    <span className="material-symbols-outlined text-emerald-600 text-2xl">
                      check_circle
                    </span>
                    <div>
                      <h4 className="font-bold text-emerald-800 dark:text-emerald-400">
                        Inquiry Sent Successfully!
                      </h4>
                      <p className="text-sm text-emerald-700 dark:text-emerald-500">
                        We&apos;ll respond within 24 business hours.
                      </p>
                    </div>
                  </div>
                </div>
              )}

              {error && (
                <div className="mb-8 p-6 bg-red-50 dark:bg-red-900/20 border border-red-200 dark:border-red-800 rounded-2xl">
                  <div className="flex items-center gap-3">
                    <span className="material-symbols-outlined text-red-600 text-2xl">
                      error
                    </span>
                    <p className="text-sm text-red-700 dark:text-red-400">
                      {error}
                    </p>
                  </div>
                </div>
              )}

              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-sm font-bold text-slate-700 dark:text-slate-300 mb-2">
                      Full Name *
                    </label>
                    <input
                      type="text"
                      name="name"
                      required
                      value={formData.name}
                      onChange={handleChange}
                      className="w-full px-4 py-3 rounded-xl border border-slate-300 dark:border-slate-700 bg-slate-50 dark:bg-slate-800 text-slate-900 dark:text-white focus:ring-2 focus:ring-primary focus:border-transparent outline-none transition-all"
                      placeholder="John Doe"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-bold text-slate-700 dark:text-slate-300 mb-2">
                      Email Address *
                    </label>
                    <input
                      type="email"
                      name="email"
                      required
                      value={formData.email}
                      onChange={handleChange}
                      className="w-full px-4 py-3 rounded-xl border border-slate-300 dark:border-slate-700 bg-slate-50 dark:bg-slate-800 text-slate-900 dark:text-white focus:ring-2 focus:ring-primary focus:border-transparent outline-none transition-all"
                      placeholder="john@company.com"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-bold text-slate-700 dark:text-slate-300 mb-2">
                      Company
                    </label>
                    <input
                      type="text"
                      name="company"
                      value={formData.company}
                      onChange={handleChange}
                      className="w-full px-4 py-3 rounded-xl border border-slate-300 dark:border-slate-700 bg-slate-50 dark:bg-slate-800 text-slate-900 dark:text-white focus:ring-2 focus:ring-primary focus:border-transparent outline-none transition-all"
                      placeholder="Company Name"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-bold text-slate-700 dark:text-slate-300 mb-2">
                      Country
                    </label>
                    <input
                      type="text"
                      name="country"
                      value={formData.country}
                      onChange={handleChange}
                      className="w-full px-4 py-3 rounded-xl border border-slate-300 dark:border-slate-700 bg-slate-50 dark:bg-slate-800 text-slate-900 dark:text-white focus:ring-2 focus:ring-primary focus:border-transparent outline-none transition-all"
                      placeholder="United States"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-bold text-slate-700 dark:text-slate-300 mb-2">
                      Phone
                    </label>
                    <input
                      type="tel"
                      name="phone"
                      value={formData.phone}
                      onChange={handleChange}
                      className="w-full px-4 py-3 rounded-xl border border-slate-300 dark:border-slate-700 bg-slate-50 dark:bg-slate-800 text-slate-900 dark:text-white focus:ring-2 focus:ring-primary focus:border-transparent outline-none transition-all"
                      placeholder="+1 (555) 000-0000"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-bold text-slate-700 dark:text-slate-300 mb-2">
                      Inquiry Type
                    </label>
                    <select
                      name="inquiryType"
                      value={formData.inquiryType}
                      onChange={handleChange}
                      className="w-full px-4 py-3 rounded-xl border border-slate-300 dark:border-slate-700 bg-slate-50 dark:bg-slate-800 text-slate-900 dark:text-white focus:ring-2 focus:ring-primary focus:border-transparent outline-none transition-all"
                    >
                      <option value="general">General Inquiry</option>
                      <option value="quote">Request a Quote</option>
                      <option value="sample">Request Samples</option>
                      <option value="partnership">Partnership</option>
                    </select>
                  </div>
                </div>
                <div>
                  <label className="block text-sm font-bold text-slate-700 dark:text-slate-300 mb-2">
                    Message *
                  </label>
                  <textarea
                    name="message"
                    required
                    rows={5}
                    value={formData.message}
                    onChange={handleChange}
                    className="w-full px-4 py-3 rounded-xl border border-slate-300 dark:border-slate-700 bg-slate-50 dark:bg-slate-800 text-slate-900 dark:text-white focus:ring-2 focus:ring-primary focus:border-transparent outline-none transition-all resize-none"
                    placeholder="Please describe your requirements, including product type, quantity, and any special specifications..."
                  ></textarea>
                </div>
                <button
                  type="submit"
                  disabled={sending}
                  className="flex items-center justify-center gap-2 w-full md:w-auto bg-primary text-white px-10 py-4 rounded-full font-bold shadow-xl shadow-primary/20 hover:bg-secondary transition-all active:scale-95 disabled:opacity-50 disabled:cursor-not-allowed"
                >
                  {sending ? (
                    <>
                      <div className="animate-spin h-5 w-5 border-2 border-white border-t-transparent rounded-full"></div>
                      Sending...
                    </>
                  ) : (
                    <>
                      <span className="material-symbols-outlined">send</span>
                      Send Inquiry
                    </>
                  )}
                </button>
              </form>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
