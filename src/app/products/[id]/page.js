"use client";
import { useState, useEffect } from "react";
import Link from "next/link";
import { useParams } from "next/navigation";

const FALLBACK_PRODUCT = {
    name: "White Onion Flakes",
    slug: "white-onion-flakes",
    category: "onion",
    type: "Flakes",
    description:
        "Premium dehydrated white onion flakes processed using ultra-low temperature dehydration technology. Our proprietary multi-stage sorting process removes 99.9% of defects, delivering a consistent product ideal for snack seasonings, soups, ready-to-eat meals, and industrial food processing.",
    shortDescription:
        "Premium dehydrated white onion flakes with consistent particle size.",
    image:
        "https://lh3.googleusercontent.com/aida-public/AB6AXuBA3zn6AiPdNxVYfAS2ecbN65MopfMLjhTluf9u5s1QBChyUx7KFX_mT0Tn8-spYDCs2sNQnPQkVLQSZyi_D9OZu7HJq-DMQEXHEOWKHnn7XAieiNkoPwGIXFl5-xHEgA1DjaWbDuYmBfaz0tEvufAd4jyOVsF-Wk9F0E8TLN2ii7J6QIHEQM-v52-cFd03Utw56mbrDFw2GxC-zccehjluqEXE_koWunEl1I3t9v6-4-abLC_zk1i_iiZ_1JHhViRzYbV6J0r4wDm_",
    specifications: {
        meshSize: "3-5mm flakes (standard)",
        moisture: "≤ 6%",
        color: "White to creamy white",
        flavor: "Strong, pungent onion flavor",
        shelfLife: "24 months",
        packaging: "10/20/25 kg cartons or as per requirement",
    },
    applications: [
        "Snack seasonings",
        "Instant soups",
        "Ready-to-eat meals",
        "Sauces & dressings",
        "Spice blends",
    ],
    certifications: [
        "FSSC 22000",
        "BRCGS Grade A",
        "HALAL",
        "KOSHER",
        "FDA Registered",
    ],
    isBestSeller: true,
    minOrderQuantity: "1 MT",
    availableForms: ["Flakes", "Kibbled", "Chopped"],
};

export default function ProductDetailPage() {
    const params = useParams();
    const [product, setProduct] = useState(null);
    const [loading, setLoading] = useState(true);
    const [activeTab, setActiveTab] = useState("specs");

    useEffect(() => {
        async function fetchProduct() {
            try {
                const res = await fetch(`/api/products/${params.id}`);
                const data = await res.json();
                if (data.success) {
                    setProduct(data.data);
                } else {
                    setProduct(FALLBACK_PRODUCT);
                }
            } catch (e) {
                setProduct(FALLBACK_PRODUCT);
            } finally {
                setLoading(false);
            }
        }
        fetchProduct();
    }, [params.id]);

    if (loading) {
        return (
            <div className="flex justify-center items-center min-h-[60vh]">
                <div className="animate-spin h-12 w-12 border-4 border-primary border-t-transparent rounded-full"></div>
            </div>
        );
    }

    if (!product) return null;

    const specEntries = product.specifications
        ? Object.entries(product.specifications)
        : [];

    const specIcons = {
        meshSize: "straighten",
        moisture: "water_drop",
        color: "palette",
        flavor: "restaurant",
        shelfLife: "schedule",
        packaging: "inventory_2",
        purity: "verified",
        naturalAdmixture: "nature",
        averageGrainLength: "straighten",
        elongationUpto: "open_in_full",
        brokenGrain: "broken_image",
        damageDisColorGrain: "healing",
        immatureGrain: "eco",
        whiteness: "brightness_high",
        whitenessLight: "light_mode",
        whitenessDark: "dark_mode",
        foreignMatter: "block",
        aroma: "air",
        taste: "restaurant_menu",
        solubility: "water",
        shape: "category",
        fryingMedium: "local_dining",
        oilContent: "opacity",
        saltContent: "grain",
        transFat: "health_and_safety",
        saturatedFat: "science",
        energy: "bolt",
        protein: "fitness_center",
        carbohydrates: "bakery_dining",
        sugars: "icecream",
        fat: "cookie",
        sodium: "scatter_plot",
        fiber: "grass",
    };

    const specLabels = {
        meshSize: "Mesh / Particle Size",
        moisture: "Moisture Content",
        color: "Color",
        flavor: "Flavor Profile",
        shelfLife: "Shelf Life",
        packaging: "Packaging",
        purity: "Purity",
        naturalAdmixture: "Natural Admixture",
        averageGrainLength: "Average Grain Length",
        elongationUpto: "Elongation (Up to)",
        brokenGrain: "Broken Grain",
        damageDisColorGrain: "Damaged / Discolored Grain",
        immatureGrain: "Immature Grain",
        whiteness: "Whiteness",
        whitenessLight: "Whiteness (Light)",
        whitenessDark: "Whiteness (Dark)",
        foreignMatter: "Foreign Matter",
        aroma: "Aroma",
        taste: "Taste",
        solubility: "Solubility",
        shape: "Shape",
        fryingMedium: "Frying Medium",
        oilContent: "Oil Content",
        saltContent: "Salt Content",
        transFat: "Trans Fat",
        saturatedFat: "Saturated Fat",
        energy: "Energy",
        protein: "Protein",
        carbohydrates: "Carbohydrates",
        sugars: "Sugars",
        fat: "Fat",
        sodium: "Sodium",
        fiber: "Fiber",
    };

    return (
        <>
            {/* Breadcrumb */}
            <div className="mx-auto max-w-7xl px-6 py-6">
                <div className="flex items-center gap-2 text-sm text-slate-500">
                    <Link href="/" className="hover:text-primary transition-colors">
                        Home
                    </Link>
                    <span className="material-symbols-outlined text-xs">
                        chevron_right
                    </span>
                    <Link
                        href="/products"
                        className="hover:text-primary transition-colors"
                    >
                        Products
                    </Link>
                    <span className="material-symbols-outlined text-xs">
                        chevron_right
                    </span>
                    <span className="text-slate-900 dark:text-white font-semibold">
                        {product.name}
                    </span>
                </div>
            </div>

            {/* Product Hero */}
            <section className="mx-auto max-w-7xl px-6 pb-16">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
                    {/* Image */}
                    <div className="relative rounded-3xl overflow-hidden aspect-square bg-slate-100 dark:bg-slate-900 flex items-center justify-center p-8 group">
                        <img
                            src={product.image}
                            alt={product.name}
                            className="w-full h-full object-contain group-hover:scale-105 transition-transform duration-700"
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-black/30 to-transparent"></div>
                        {product.isBestSeller && (
                            <div className="absolute top-6 left-6 bg-secondary text-white text-sm font-bold px-4 py-2 rounded-full shadow-lg">
                                ⭐ Best Seller
                            </div>
                        )}
                    </div>

                    {/* Details */}
                    <div className="flex flex-col gap-6">
                        <div>
                            <div className="flex items-center gap-3 mb-4">
                                <span className="px-3 py-1 bg-primary/10 text-primary text-xs font-bold uppercase tracking-widest rounded-full">
                                    {product.category}
                                </span>
                                <span className="px-3 py-1 bg-slate-100 dark:bg-slate-800 text-slate-600 dark:text-slate-300 text-xs font-bold uppercase tracking-widest rounded-full">
                                    {product.type}
                                </span>
                            </div>
                            <h1 className="text-4xl md:text-5xl font-black text-slate-900 dark:text-white mb-4 tracking-tight">
                                {product.name}
                            </h1>
                            <p className="text-lg text-slate-600 dark:text-slate-400 leading-relaxed">
                                {product.description}
                            </p>
                        </div>

                        {/* Quick specs */}
                        <div className="grid grid-cols-2 gap-4">
                            {specEntries.slice(0, 4).map(([key, value]) => (
                                <div
                                    key={key}
                                    className="bg-slate-50 dark:bg-slate-800/50 rounded-xl p-4 border border-slate-200 dark:border-slate-700"
                                >
                                    <div className="flex items-center gap-2 text-slate-500 text-xs font-bold uppercase tracking-wider mb-1">
                                        <span className="material-symbols-outlined text-primary text-sm">
                                            {specIcons[key] || "info"}
                                        </span>
                                        {specLabels[key] || key}
                                    </div>
                                    <div className="font-bold text-slate-900 dark:text-white">
                                        {value}
                                    </div>
                                </div>
                            ))}
                        </div>

                        {/* MOQ & Forms */}
                        <div className="flex flex-wrap gap-4">
                            {product.minOrderQuantity && (
                                <div className="flex items-center gap-2 px-4 py-3 bg-primary/5 rounded-xl border border-primary/20">
                                    <span className="material-symbols-outlined text-primary">
                                        shopping_cart
                                    </span>
                                    <div>
                                        <span className="text-xs text-slate-500 block">
                                            Min. Order
                                        </span>
                                        <span className="font-bold text-primary">
                                            {product.minOrderQuantity}
                                        </span>
                                    </div>
                                </div>
                            )}
                            {product.availableForms && (
                                <div className="flex items-center gap-2 px-4 py-3 bg-slate-50 dark:bg-slate-800/50 rounded-xl border border-slate-200 dark:border-slate-700">
                                    <span className="material-symbols-outlined text-slate-500">
                                        category
                                    </span>
                                    <div>
                                        <span className="text-xs text-slate-500 block">
                                            Available Forms
                                        </span>
                                        <span className="font-bold text-slate-900 dark:text-white">
                                            {product.availableForms.join(", ")}
                                        </span>
                                    </div>
                                </div>
                            )}
                        </div>

                        {/* Actions */}
                        <div className="flex flex-wrap gap-4 mt-4">
                            <Link
                                href="/contact"
                                className="flex items-center gap-2 bg-primary text-white px-8 py-4 rounded-full font-bold shadow-xl shadow-primary/20 hover:bg-secondary transition-all active:scale-95"
                            >
                                <span className="material-symbols-outlined">mail</span>
                                Request Quote
                            </Link>
                            <Link
                                href="/contact"
                                className="flex items-center gap-2 bg-slate-100 dark:bg-slate-800 text-slate-900 dark:text-white px-8 py-4 rounded-full font-bold hover:bg-slate-200 dark:hover:bg-slate-700 transition-all"
                            >
                                <span className="material-symbols-outlined">science</span>
                                Request Sample
                            </Link>
                        </div>
                    </div>
                </div>
            </section>

            {/* Tabs Section */}
            <section className="bg-slate-50 dark:bg-slate-900/50 py-16">
                <div className="mx-auto max-w-7xl px-6">
                    <div className="flex gap-2 mb-8 overflow-x-auto">
                        {[
                            { key: "specs", label: "Specifications", icon: "science" },
                            { key: "apps", label: "Applications", icon: "restaurant" },
                            { key: "certs", label: "Certifications", icon: "verified" },
                        ].map((tab) => (
                            <button
                                key={tab.key}
                                onClick={() => setActiveTab(tab.key)}
                                className={`flex items-center gap-2 px-6 py-3 rounded-xl text-sm font-bold transition-all whitespace-nowrap ${activeTab === tab.key
                                    ? "bg-primary text-white shadow-lg"
                                    : "bg-white dark:bg-slate-800 text-slate-600 hover:bg-slate-100"
                                    }`}
                            >
                                <span className="material-symbols-outlined text-lg">
                                    {tab.icon}
                                </span>
                                {tab.label}
                            </button>
                        ))}
                    </div>

                    {activeTab === "specs" && (
                        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 animate-fade-in">
                            {specEntries.map(([key, value]) => (
                                <div
                                    key={key}
                                    className="bg-white dark:bg-slate-800 rounded-2xl p-6 border border-slate-200 dark:border-slate-700 hover:shadow-lg transition-shadow"
                                >
                                    <div className="flex items-center gap-3">
                                        <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-primary/10 text-primary">
                                            <span className="material-symbols-outlined">
                                                {specIcons[key] || "info"}
                                            </span>
                                        </div>
                                        <div>
                                            <div className="text-xs text-slate-500 font-bold uppercase tracking-wider">
                                                {specLabels[key] || key}
                                            </div>
                                            <div className="font-bold text-slate-900 dark:text-white">
                                                {value}
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            ))}
                        </div>
                    )}

                    {activeTab === "apps" && (
                        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 animate-fade-in">
                            {(product.applications || []).map((app, idx) => (
                                <div
                                    key={idx}
                                    className="flex items-center gap-4 bg-white dark:bg-slate-800 rounded-2xl p-6 border border-slate-200 dark:border-slate-700 hover:shadow-lg hover:border-primary/30 transition-all"
                                >
                                    <span className="material-symbols-outlined text-primary text-2xl">
                                        check_circle
                                    </span>
                                    <span className="font-bold text-slate-900 dark:text-white">
                                        {app}
                                    </span>
                                </div>
                            ))}
                        </div>
                    )}

                    {activeTab === "certs" && (
                        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 animate-fade-in">
                            {(product.certifications || []).map((cert, idx) => {
                                const certIcons = {
                                    "FSSC 22000": "verified_user",
                                    "BRCGS Grade A": "workspace_premium",
                                    HALAL: "shield_moon",
                                    KOSHER: "history_edu",
                                    "FDA Registered": "assignment_turned_in",
                                };
                                return (
                                    <div
                                        key={idx}
                                        className="flex items-center gap-4 bg-white dark:bg-slate-800 rounded-2xl p-6 border border-slate-200 dark:border-slate-700 hover:shadow-lg transition-shadow"
                                    >
                                        <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-primary/10 text-primary">
                                            <span className="material-symbols-outlined text-2xl">
                                                {certIcons[cert] || "verified"}
                                            </span>
                                        </div>
                                        <span className="font-bold text-slate-900 dark:text-white">
                                            {cert}
                                        </span>
                                    </div>
                                );
                            })}
                        </div>
                    )}
                </div>
            </section>
        </>
    );
}
