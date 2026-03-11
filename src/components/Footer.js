import Link from "next/link";

export default function Footer() {
    return (
        <footer className="border-t border-slate-200 dark:border-slate-800 bg-white dark:bg-bg-dark py-16">
            <div className="mx-auto max-w-7xl px-6">
                <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-12">
                    <div className="col-span-1">
                        <Link href="/admin" className="flex items-center gap-3 mb-6">
                            <img
                                src="/images/logo-icon.png"
                                alt="Rajbai International"
                                className="h-16 w-auto"
                            />
                        </Link>
                        <p className="text-sm text-slate-500 leading-relaxed">
                            Global leaders in high-performance dehydrated food products,
                            setting the benchmark for purity and supply chain reliability
                            since 1995.
                        </p>
                    </div>
                    <div>
                        <h4 className="font-bold mb-4 dark:text-white">Company</h4>
                        <ul className="space-y-2 text-sm text-slate-500">
                            <li>
                                <Link className="hover:text-primary transition-colors" href="/">
                                    Our Story
                                </Link>
                            </li>

                            <li>
                                <Link
                                    className="hover:text-primary transition-colors"
                                    href="/quality"
                                >
                                    Sustainability
                                </Link>
                            </li>
                            <li>
                                <Link
                                    className="hover:text-primary transition-colors"
                                    href="/quality"
                                >
                                    Certifications
                                </Link>
                            </li>
                        </ul>
                    </div>
                    <div>
                        <h4 className="font-bold mb-4 dark:text-white">Products</h4>
                        <ul className="space-y-2 text-sm text-slate-500">
                            <li>
                                <Link
                                    className="hover:text-primary transition-colors"
                                    href="/products?category=onion"
                                >
                                    Onion Powders
                                </Link>
                            </li>
                            <li>
                                <Link
                                    className="hover:text-primary transition-colors"
                                    href="/products?category=rice"
                                >
                                    Basmati Rice
                                </Link>
                            </li>
                            <li>
                                <Link
                                    className="hover:text-primary transition-colors"
                                    href="/products?category=frozen"
                                >
                                    Frozen Food Products
                                </Link>
                            </li>
                        </ul>
                    </div>
                    <div>
                        <h4 className="font-bold mb-4 dark:text-white">Global Reach</h4>
                        <div className="flex flex-col gap-3">
                            <div className="flex items-start gap-2 text-sm text-slate-500">
                                <span className="material-symbols-outlined text-primary text-lg">
                                    location_on
                                </span>
                                <div className="flex flex-col">
                                    <span>opp nayara petrol pump, jetpur road,</span>
                                    <span>gondal, rajkot, gujarat, india-360311</span>
                                </div>
                            </div>
                            <div className="flex items-center gap-2 text-sm text-slate-500">
                                <span className="material-symbols-outlined text-primary text-lg">
                                    mail
                                </span>
                                <span>rajbaiinternational@gmail.com</span>
                            </div>
                            <div className="flex items-start gap-2 text-sm text-slate-500">
                                <span className="material-symbols-outlined text-primary text-lg">
                                    phone
                                </span>
                                <div className="flex flex-col">
                                    <span>+91 9664771429</span>
                                    <span>+91 7046041027 (WA)</span>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="border-t border-slate-200 dark:border-slate-800 pt-8 flex flex-col md:flex-row justify-between items-center gap-4">
                    <p className="text-xs text-slate-400">
                        © {new Date().getFullYear()} Rajbai International & Co. All rights
                        reserved.
                    </p>
                    <div className="flex gap-6 text-xs text-slate-400">
                        <Link className="hover:text-primary transition-colors" href="#">
                            Privacy Policy
                        </Link>
                        <Link className="hover:text-primary transition-colors" href="#">
                            Terms of Trade
                        </Link>
                        <Link className="hover:text-primary transition-colors" href="#">
                            Sitemap
                        </Link>
                    </div>
                </div>
            </div>
        </footer>
    );
}
