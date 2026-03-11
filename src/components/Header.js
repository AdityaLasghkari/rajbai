"use client";
import Link from "next/link";
import { useState } from "react";

export default function Header() {
    const [mobileOpen, setMobileOpen] = useState(false);

    return (
        <header className="fixed top-0 z-50 w-full border-b border-slate-200/20 bg-white/80 dark:bg-bg-dark/80 backdrop-blur-md">
            <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-1">
                <Link href="/" className="flex items-center gap-3">
                    <img
                        src="/images/logo.png"
                        alt="Rajbai International & Co."
                        className="h-20 w-auto"
                    />
                </Link>
                <nav className="hidden md:flex items-center gap-8">
                    <Link
                        className="text-sm font-semibold text-slate-600 hover:text-primary transition-colors"
                        href="/products"
                    >
                        Products
                    </Link>
                    <Link
                        className="text-sm font-semibold text-slate-600 hover:text-primary transition-colors"
                        href="/quality"
                    >
                        Quality
                    </Link>
                    <Link
                        className="text-sm font-semibold text-slate-600 hover:text-primary transition-colors"
                        href="/contact"
                    >
                        Contact
                    </Link>
                    <Link
                        href="/contact"
                        className="rounded-full bg-primary px-6 py-2.5 text-sm font-bold text-white shadow-lg shadow-primary/20 transition-all hover:bg-secondary hover:shadow-xl active:scale-95"
                    >
                        Get a Quote
                    </Link>
                </nav>
                <button
                    className="md:hidden text-slate-900 dark:text-white"
                    onClick={() => setMobileOpen(!mobileOpen)}
                >
                    <span className="material-symbols-outlined text-3xl">
                        {mobileOpen ? "close" : "menu"}
                    </span>
                </button>
            </div>

            {/* Mobile menu */}
            {mobileOpen && (
                <div className="md:hidden border-t border-slate-200/20 bg-white/95 dark:bg-bg-dark/95 backdrop-blur-xl animate-slide-up">
                    <nav className="flex flex-col gap-1 p-6">
                        <Link
                            href="/products"
                            className="px-4 py-3 rounded-xl text-sm font-semibold text-slate-700 hover:bg-primary/5 hover:text-primary transition-colors"
                            onClick={() => setMobileOpen(false)}
                        >
                            Products
                        </Link>
                        <Link
                            href="/quality"
                            className="px-4 py-3 rounded-xl text-sm font-semibold text-slate-700 hover:bg-primary/5 hover:text-primary transition-colors"
                            onClick={() => setMobileOpen(false)}
                        >
                            Quality
                        </Link>
                        <Link
                            href="/contact"
                            className="px-4 py-3 rounded-xl text-sm font-semibold text-slate-700 hover:bg-primary/5 hover:text-primary transition-colors"
                            onClick={() => setMobileOpen(false)}
                        >
                            Contact
                        </Link>
                        <Link
                            href="/contact"
                            className="mt-2 rounded-full bg-primary px-6 py-3 text-center text-sm font-bold text-white shadow-lg"
                            onClick={() => setMobileOpen(false)}
                        >
                            Get a Quote
                        </Link>
                    </nav>
                </div>
            )}
        </header>
    );
}
