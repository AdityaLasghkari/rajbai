import Link from "next/link";

export const metadata = {
  title: "Quality Standards | Rajbai International",
  description:
    "World-class quality certifications including FSSC 22000, BRCGS Grade A, HALAL, KOSHER. In-house laboratory and rigorous QA processes.",
};

export default function QualityPage() {
  const certifications = [
    {
      icon: "verified_user",
      name: "FSSC 22000",
      description:
        "Global food safety management system certification, demonstrating our commitment to producing safe food products through rigorous management systems.",
      color: "from-blue-500 to-blue-700",
    },
    {
      icon: "workspace_premium",
      name: "BRCGS Grade A",
      description:
        "British Retail Consortium Global Standards Grade A certification, the highest level achievable, signifying exceptional operational and quality standards.",
      color: "from-amber-500 to-amber-700",
    },
    {
      icon: "shield_moon",
      name: "HALAL Certified",
      description:
        "Products processed in compliance with Islamic dietary laws, certified by recognized international HALAL certification bodies.",
      color: "from-emerald-500 to-emerald-700",
    },
    {
      icon: "history_edu",
      name: "KOSHER Certified",
      description:
        "Full compliance with Jewish dietary laws, with regular rabbinical supervision and certification from an internationally recognized authority.",
      color: "from-violet-500 to-violet-700",
    },
    {
      icon: "assignment_turned_in",
      name: "FDA Registered",
      description:
        "Facility registered with the U.S. Food and Drug Administration, meeting all regulatory requirements for food safety and traceability.",
      color: "from-rose-500 to-rose-700",
    },
    {
      icon: "eco",
      name: "Organic Certified",
      description:
        "Select product lines are certified organic, meeting stringent standards for organic agricultural practices and processing.",
      color: "from-green-500 to-green-700",
    },
  ];

  const qaProcesses = [
    {
      step: "01",
      icon: "agriculture",
      title: "Raw Material Inspection",
      desc: "Every incoming batch is tested for moisture, size, color, and foreign matter before acceptance into the processing line.",
    },
    {
      step: "02",
      icon: "biotech",
      title: "In-Process Quality Checks",
      desc: "Continuous monitoring at every stage — washing, peeling, slicing, drying, and sorting — with automated rejection systems.",
    },
    {
      step: "03",
      icon: "science",
      title: "Laboratory Analysis",
      desc: "Our in-house NABL-accredited lab performs microbiological, chemical residue, and heavy metal analyses on every lot.",
    },
    {
      step: "04",
      icon: "package_2",
      title: "Final Product Testing",
      desc: "Pre-shipment testing for particle size, moisture content, color values (ASTA), and organoleptic properties.",
    },
    {
      step: "05",
      icon: "qr_code_scanner",
      title: "Traceability",
      desc: "Full farm-to-fork traceability with batch-level data covering origin, processing date, test results, and shipment details.",
    },
    {
      step: "06",
      icon: "local_shipping",
      title: "Export Compliance",
      desc: "All shipments include COA, phytosanitary certificates, and comply with EU, US, and destination-country import regulations.",
    },
  ];

  return (
    <>
      {/* Hero */}
      <section className="relative bg-gradient-to-br from-primary to-secondary py-24 overflow-hidden">
        <div className="absolute -right-20 -top-20 h-96 w-96 rounded-full bg-white/5 blur-3xl"></div>
        <div className="absolute -left-20 -bottom-20 h-96 w-96 rounded-full bg-white/5 blur-3xl"></div>
        <div className="mx-auto max-w-7xl px-6 text-center relative z-10">
          <span className="inline-block px-4 py-1.5 bg-white/10 text-white text-xs font-bold tracking-widest uppercase rounded-full mb-6">
            World-Class Standards
          </span>
          <h1 className="text-5xl md:text-7xl font-black text-white mb-6 tracking-tight">
            Quality <span className="italic text-accent">Excellence</span>
          </h1>
          <p className="text-lg text-white/80 max-w-2xl mx-auto">
            Our relentless pursuit of perfection is backed by international
            certifications, state-of-the-art laboratory testing, and a culture
            of continuous improvement.
          </p>
        </div>
      </section>

      {/* Stats Bar */}
      <div className="relative z-20 -mt-12 mx-auto max-w-5xl px-6">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          {[
            { val: "99.9%", label: "Defect-Free Rate" },
            { val: "500+", label: "QA Tests / Month" },
            { val: "100%", label: "Batch Traceability" },
            { val: "12", label: "Active Certifications" },
          ].map((s, i) => (
            <div
              key={i}
              className="bg-white dark:bg-bg-dark rounded-xl p-6 text-center shadow-2xl border border-slate-200/50 dark:border-slate-700/50"
            >
              <div className="text-2xl font-black text-primary">{s.val}</div>
              <div className="text-xs font-bold text-slate-500 uppercase tracking-widest mt-1">
                {s.label}
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* QA Process */}
      <section className="mx-auto max-w-7xl px-6 py-24">
        <div className="text-center mb-16">
          <h2 className="text-primary font-bold uppercase tracking-widest text-sm mb-4">
            Our Process
          </h2>
          <h3 className="text-4xl font-black text-slate-900 dark:text-white md:text-5xl">
            6-Stage Quality Assurance
          </h3>
          <p className="max-w-2xl mx-auto mt-4 text-lg text-slate-600 dark:text-slate-400">
            Every product goes through our comprehensive 6-stage QA pipeline
            before it reaches your facility.
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {qaProcesses.map((proc, idx) => (
            <div
              key={idx}
              className="group relative bg-white dark:bg-bg-dark/40 rounded-2xl border border-slate-200 dark:border-slate-800 p-8 hover:border-primary/50 hover:shadow-xl hover:-translate-y-1 transition-all duration-300"
            >
              <div className="absolute top-6 right-6 text-6xl font-black text-slate-100 dark:text-slate-800 select-none">
                {proc.step}
              </div>
              <div className="mb-6 flex h-14 w-14 items-center justify-center rounded-xl bg-primary/10 text-primary group-hover:bg-primary group-hover:text-white transition-colors duration-300">
                <span className="material-symbols-outlined text-3xl">
                  {proc.icon}
                </span>
              </div>
              <h4 className="text-xl font-bold dark:text-white mb-3">
                {proc.title}
              </h4>
              <p className="text-sm text-slate-600 dark:text-slate-400 leading-relaxed">
                {proc.desc}
              </p>
            </div>
          ))}
        </div>
      </section>

      {/* Certifications */}
      <section className="bg-slate-50 dark:bg-slate-900/50 py-24">
        <div className="mx-auto max-w-7xl px-6">
          <div className="text-center mb-16">
            <h2 className="text-primary font-bold uppercase tracking-widest text-sm mb-4">
              Certifications
            </h2>
            <h3 className="text-4xl font-black text-slate-900 dark:text-white md:text-5xl">
              Globally Recognized Standards
            </h3>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {certifications.map((cert, idx) => (
              <div
                key={idx}
                className="bg-white dark:bg-slate-800 rounded-2xl p-8 border border-slate-200 dark:border-slate-700 hover:shadow-xl transition-shadow group"
              >
                <div
                  className={`mb-6 flex h-16 w-16 items-center justify-center rounded-2xl bg-gradient-to-br ${cert.color} text-white shadow-lg`}
                >
                  <span className="material-symbols-outlined text-3xl">
                    {cert.icon}
                  </span>
                </div>
                <h4 className="text-xl font-bold dark:text-white mb-3">
                  {cert.name}
                </h4>
                <p className="text-sm text-slate-600 dark:text-slate-400 leading-relaxed">
                  {cert.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Lab CTA */}
      <section className="py-24 px-6">
        <div className="mx-auto max-w-7xl">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="relative rounded-3xl overflow-hidden aspect-video bg-slate-200 dark:bg-slate-800">
              <img
                src="https://lh3.googleusercontent.com/aida-public/AB6AXuDI0sUtjUPq4v1jNo5U0ilalpw72-My53KucCRg5UNBYLz8dtSLvIH8IEk3Q-9HDgdlJlrWjQ3h2nG3rJqFwJ2616DcFvc3I8oYwgQijal8cap8YNNJFHLuw6zgvhaYWHyc4pwJAILTYhr4bJZbw3dOytOdiswYXpFgT2kVgeFVUOw3VwjDmSFO_C4GMgIaHoOeJHcHwLEbttIYk-nbBBD4huIHZZnfepAr8cxq_3TXN-ekHxv6XcYBsHwM8-Dkh2oAbEnculVZlfQV"
                alt="Quality Control Lab"
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-primary/50 to-transparent"></div>
              <div className="absolute bottom-6 left-6 text-white">
                <div className="text-xs font-bold uppercase tracking-widest opacity-80 mb-1">
                  Our Facility
                </div>
                <div className="text-2xl font-black">
                  NABL Accredited Laboratory
                </div>
              </div>
            </div>
            <div>
              <h2 className="text-4xl font-black text-slate-900 dark:text-white mb-6">
                In-House Testing Capabilities
              </h2>
              <p className="text-lg text-slate-600 dark:text-slate-400 mb-8">
                Our NABL-accredited laboratory provides comprehensive testing
                for every batch, ensuring compliance with international food
                safety regulations and client specifications.
              </p>
              <div className="space-y-4 mb-8">
                {[
                  "Microbiological analysis (TPC, E.coli, Salmonella, Listeria)",
                  "Pesticide residue screening (MRL compliance)",
                  "Heavy metal analysis (Pb, Cd, As, Hg)",
                  "Aflatoxin and mycotoxin testing",
                  "Color measurement (ASTA, L*a*b*)",
                ].map((test, idx) => (
                  <div key={idx} className="flex items-center gap-3">
                    <span className="material-symbols-outlined text-primary">
                      check_circle
                    </span>
                    <span className="text-sm text-slate-700 dark:text-slate-300">
                      {test}
                    </span>
                  </div>
                ))}
              </div>
              <Link
                href="/contact"
                className="inline-flex items-center gap-2 bg-primary text-white px-8 py-4 rounded-full font-bold shadow-xl shadow-primary/20 hover:bg-secondary transition-all active:scale-95"
              >
                Request COA Sample
                <span className="material-symbols-outlined">
                  arrow_forward
                </span>
              </Link>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
