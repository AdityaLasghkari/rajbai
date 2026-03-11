import Link from "next/link";

export default function Home() {
    return (
        <>
            {/* Hero Section */}
            <section className="relative flex min-h-[90vh] w-full items-center justify-center overflow-hidden">
                <div className="absolute inset-0 z-0">
                    <div className="absolute inset-0 hero-gradient z-10"></div>
                    <img
                        alt="Onion Fields"
                        className="h-full w-full object-cover"
                        src="https://lh3.googleusercontent.com/aida-public/AB6AXuDI0sUtjUPq4v1jNo5U0ilalpw72-My53KucCRg5UNBYLz8dtSLvIH8IEk3Q-9HDgdlJlrWjQ3h2nG3rJqFwJ2616DcFvc3I8oYwgQijal8cap8YNNJFHLuw6zgvhaYWHyc4pwJAILTYhr4bJZbw3dOytOdiswYXpFgT2kVgeFVUOw3VwjDmSFO_C4GMgIaHoOeJHcHwLEbttIYk-nbBBD4huIHZZnfepAr8cxq_3TXN-ekHxv6XcYBsHwM8-Dkh2oAbEnculVZlfQV"
                    />
                </div>
                <div className="relative z-10 mx-auto max-w-5xl px-6 text-center">
                    <h1 className="text-5xl font-black leading-tight tracking-tight text-white md:text-7xl animate-fade-in">
                        Premium Quality Food{" "}
                        <span className="italic text-accent">Exports</span>
                    </h1>
                    <p className="mx-auto mt-6 max-w-2xl text-lg text-slate-200/90 leading-relaxed md:text-xl animate-slide-up">
                        From the heart of the fields to the world&apos;s most demanding
                        markets, we deliver premium basmati rice and onion powders with
                        unmatched precision and purity.
                    </p>
                    <div className="mt-10 flex flex-col items-center justify-center gap-4 sm:flex-row animate-slide-up delay-200">
                        <Link
                            href="/products"
                            className="group flex items-center gap-2 rounded-full bg-primary px-8 py-4 text-base font-bold text-white transition-all active:scale-95 hover:bg-secondary hover:shadow-xl"
                        >
                            Explore Products
                            <span className="material-symbols-outlined group-hover:translate-x-1 transition-transform">
                                arrow_forward
                            </span>
                        </Link>
                        <Link
                            href="/quality"
                            className="glass-overlay rounded-full px-8 py-4 text-base font-bold text-white hover:bg-white/10 transition-all"
                        >
                            Our Heritage
                        </Link>
                    </div>
                </div>
            </section>

            {/* Stats Section */}
            <div className="relative z-20 -mt-16 mx-auto max-w-6xl px-6">
                <div className="grid grid-cols-2 gap-4 md:grid-cols-4">
                    {[
                        { value: "50+", label: "Countries Exported" },
                        { value: "25k", label: "Metric Tons Yearly" },
                        { value: "100%", label: "Traceability" },
                        { value: "12", label: "Certifications" },
                    ].map((stat, idx) => (
                        <div
                            key={idx}
                            className="rounded-xl p-6 text-center shadow-2xl bg-white dark:bg-bg-dark/40 backdrop-blur-xl border border-slate-200/50 dark:border-slate-700/50 hover:shadow-primary/10 hover:-translate-y-1 transition-all duration-300"
                        >
                            <div className="text-3xl font-black text-primary">
                                {stat.value}
                            </div>
                            <div className="text-xs font-bold uppercase tracking-widest text-slate-500 dark:text-slate-400 mt-1">
                                {stat.label}
                            </div>
                        </div>
                    ))}
                </div>
            </div>

            {/* Farm to Port Journey */}
            <section className="mx-auto max-w-7xl px-6 py-24">
                <div className="flex flex-col items-start gap-4 mb-16">
                    <h2 className="text-primary font-bold uppercase tracking-widest text-sm">
                        Our Operations
                    </h2>
                    <h3 className="text-4xl font-black text-slate-900 dark:text-white md:text-5xl">
                        The Farm to Port Journey
                    </h3>
                    <p className="max-w-2xl text-lg text-slate-600 dark:text-slate-400">
                        Our vertically integrated supply chain ensures every batch meets the
                        highest international standards of safety, flavor, and texture.
                    </p>
                </div>
                <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-4">
                    {[
                        {
                            icon: "agriculture",
                            title: "Sustainable Farming",
                            desc: "Partnering with local cultivators to ensure optimal crop rotation and nutrient-rich harvests.",
                        },
                        {
                            icon: "factory",
                            title: "Advanced Processing",
                            desc: "Utilizing ultra-low temperature dehydration technology to preserve essential oils and enzymes.",
                        },
                        {
                            icon: "biotech",
                            title: "Rigorous QA",
                            desc: "In-house laboratory validation for microbial safety and chemical residue compliance.",
                        },
                        {
                            icon: "public",
                            title: "Global Logistics",
                            desc: "Strategic proximity to Mundra Port for rapid deployment to North America, Europe, and Asia.",
                        },
                    ].map((step, idx) => (
                        <div
                            key={idx}
                            className="group relative rounded-2xl border border-slate-200 dark:border-slate-800 bg-white dark:bg-bg-dark/40 p-8 transition-all hover:border-primary/50 hover:shadow-xl hover:-translate-y-1 duration-300"
                        >
                            <div className="mb-6 flex h-14 w-14 items-center justify-center rounded-xl bg-primary/10 text-primary group-hover:bg-primary group-hover:text-white transition-colors duration-300">
                                <span className="material-symbols-outlined text-3xl">
                                    {step.icon}
                                </span>
                            </div>
                            <h4 className="mb-3 text-xl font-bold dark:text-white">
                                {step.title}
                            </h4>
                            <p className="text-sm leading-relaxed text-slate-600 dark:text-slate-400">
                                {step.desc}
                            </p>
                        </div>
                    ))}
                </div>
            </section>

            {/* Trust Section */}
            <section className="bg-slate-100 dark:bg-slate-900/50 py-24">
                <div className="mx-auto max-w-7xl px-6">
                    <div className="mb-12 text-center">
                        <h3 className="text-2xl font-bold text-slate-900 dark:text-white">
                            Trusted by Global Food Leaders
                        </h3>
                        <p className="mt-2 text-slate-500 dark:text-slate-400 uppercase tracking-widest text-xs font-bold">
                            Compliant with World Standards
                        </p>
                    </div>
                    <div className="flex flex-wrap items-center justify-center gap-12 opacity-80 hover:opacity-100 transition-all duration-500">
                        {[
                            { icon: "verified_user", label: "FSSC 22000" },
                            { icon: "workspace_premium", label: "BRCGS Grade A" },
                            { icon: "shield_moon", label: "HALAL Certified" },
                            { icon: "history_edu", label: "KOSHER" },
                            { icon: "assignment_turned_in", label: "FDA Registered" },
                        ].map((cert, idx) => (
                            <div
                                key={idx}
                                className="flex flex-col items-center gap-2 group cursor-pointer"
                            >
                                <span className="material-symbols-outlined text-5xl text-slate-400 group-hover:text-primary transition-colors">
                                    {cert.icon}
                                </span>
                                <span className="text-[10px] font-black tracking-tighter uppercase">
                                    {cert.label}
                                </span>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Featured Products */}
            <section className="py-24 px-6 mx-auto max-w-7xl">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
                    <div className="relative rounded-3xl overflow-hidden aspect-square group bg-slate-100 dark:bg-slate-900 flex items-center justify-center p-8">
                        <img
                            alt="Dehydrated Onion Flakes"
                            className="w-full h-full object-contain group-hover:scale-105 transition-transform duration-700"
                            src="https://lh3.googleusercontent.com/aida-public/AB6AXuBA3zn6AiPdNxVYfAS2ecbN65MopfMLjhTluf9u5s1QBChyUx7KFX_mT0Tn8-spYDCs2sNQnPQkVLQSZyi_D9OZu7HJq-DMQEXHEOWKHnn7XAieiNkoPwGIXFl5-xHEgA1DjaWbDuYmBfaz0tEvufAd4jyOVsF-Wk9F0E8TLN2ii7J6QIHEQM-v52-cFd03Utw56mbrDFw2GxC-zccehjluqEXE_koWunEl1I3t9v6-4-abLC_zk1i_iiZ_1JHhViRzYbV6J0r4wDm_"
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-bg-dark/80 to-transparent"></div>
                        <div className="absolute bottom-8 left-8">
                            <div className="text-white text-xs font-bold px-3 py-1 rounded-full mb-2 inline-block bg-secondary">
                                Best Seller
                            </div>
                            <h4 className="text-3xl font-black text-white">
                                White Onion Flakes
                            </h4>
                        </div>
                    </div>
                    <div className="flex flex-col gap-8">
                        <div>
                            <h2 className="text-4xl font-black text-slate-900 dark:text-white mb-4">
                                Precision Quality Control
                            </h2>
                            <p className="text-slate-600 dark:text-slate-400 text-lg">
                                Our proprietary multi-stage sorting process removes 99.9% of
                                defects, delivering a consistent product for global catering
                                and ready-to-eat meals.
                            </p>
                        </div>
                        <div className="space-y-4">
                            {[
                                {
                                    title: "1121 & 1509 Basmati Rice",
                                    desc: "Exceptionally long grains with superior elongation.",
                                },
                                {
                                    title: "White & Red Onion Powder",
                                    desc: "Available in multiple mesh sizes (80-100 mesh standard).",
                                },
                                {
                                    title: "Pink Onion Powders",
                                    desc: "Balanced pungency and subtle sweetness.",
                                },
                            ].map((item, idx) => (
                                <div
                                    key={idx}
                                    className="flex items-start gap-4 p-4 rounded-xl bg-white dark:bg-bg-dark/20 border border-slate-200 dark:border-slate-800 hover:border-primary/30 transition-colors"
                                >
                                    <span className="material-symbols-outlined text-primary">
                                        check_circle
                                    </span>
                                    <div>
                                        <h5 className="font-bold dark:text-white text-base">
                                            {item.title}
                                        </h5>
                                        <p className="text-sm text-slate-500">{item.desc}</p>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </section>

            {/* CTA Section */}
            <section className="py-24">
                <div className="mx-auto max-w-7xl px-6">
                    <div className="relative overflow-hidden rounded-[2.5rem] px-8 py-20 text-center text-white shadow-2xl bg-gradient-to-br from-primary to-secondary">
                        <div className="absolute -right-20 -top-20 h-64 w-64 rounded-full bg-white/10 blur-3xl"></div>
                        <div className="absolute -left-20 -bottom-20 h-64 w-64 rounded-full bg-white/10 blur-3xl"></div>
                        <h2 className="relative z-10 text-4xl font-black md:text-5xl">
                            Ready to Source Premium Quality?
                        </h2>
                        <p className="relative z-10 mx-auto mt-6 max-w-xl text-lg text-white/80">
                            Join 200+ global brands who trust Rajbai International for their
                            dehydration needs. Custom specifications and bulk orders available.
                        </p>
                        <div className="relative z-10 mt-10 flex flex-col items-center justify-center gap-4 sm:flex-row">
                            <Link
                                href="/products"
                                className="rounded-full bg-white px-10 py-4 text-lg font-bold text-primary hover:bg-slate-100 transition-all active:scale-95"
                            >
                                Request Wholesale Catalog
                            </Link>
                            <Link
                                href="/contact"
                                className="rounded-full border-2 border-white px-10 py-4 text-lg font-bold text-white hover:bg-white/10 transition-all"
                            >
                                Talk to an Expert
                            </Link>
                        </div>
                    </div>
                </div>
            </section>
        </>
    );
}
