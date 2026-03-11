"use client";
import { useState, useEffect } from "react";
import Link from "next/link";

const FALLBACK_PRODUCTS = [];

export default function ProductsPage() {
  const [products, setProducts] = useState(FALLBACK_PRODUCTS);
  const [filter, setFilter] = useState("all");
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    async function fetchProducts() {
      try {
        const res = await fetch("/api/products");
        const data = await res.json();
        if (data.success && data.data.length > 0) {
          setProducts(data.data);
        }
      } catch (e) {
        // Use fallback products
      } finally {
        setLoading(false);
      }
    }
    fetchProducts();
  }, []);

  const filteredProducts =
    filter === "all"
      ? products
      : products.filter((p) => p.category === filter);

  const categories = [
    { key: "all", label: "All Products", icon: "grid_view" },
    { key: "onion", label: "Onion Powders", icon: "spa" },
    { key: "rice", label: "Basmati Rice", icon: "grass" },
    { key: "frozen", label: "Frozen Food", icon: "ac_unit" },
  ];

  return (
    <>
      {/* Page Hero */}
      <section className="relative bg-gradient-to-br from-primary to-secondary py-24 overflow-hidden">
        <div className="absolute -right-20 -top-20 h-96 w-96 rounded-full bg-white/5 blur-3xl"></div>
        <div className="absolute -left-20 -bottom-20 h-96 w-96 rounded-full bg-white/5 blur-3xl"></div>
        <div className="mx-auto max-w-7xl px-6 text-center relative z-10">
          <span className="inline-block px-4 py-1.5 bg-white/10 text-white text-xs font-bold tracking-widest uppercase rounded-full mb-6">
            Premium Range
          </span>
          <h1 className="text-5xl md:text-7xl font-black text-white mb-6 tracking-tight">
            Product <span className="italic text-accent">Catalog</span>
          </h1>
          <p className="text-lg text-white/80 max-w-2xl mx-auto">
            Explore our comprehensive range of dehydrated onion, garlic, and
            custom blended products. Each product meets the highest
            international quality standards.
          </p>
        </div>
      </section>

      {/* Filter Tabs */}
      <div className="mx-auto max-w-7xl px-6 -mt-8 relative z-20">
        <div className="flex flex-wrap gap-3 justify-center bg-white dark:bg-bg-dark rounded-2xl shadow-2xl p-4 border border-slate-200/50 dark:border-slate-700/50">
          {categories.map((cat) => (
            <button
              key={cat.key}
              onClick={() => setFilter(cat.key)}
              className={`flex items-center gap-2 px-6 py-3 rounded-xl text-sm font-bold transition-all ${filter === cat.key
                ? "bg-primary text-white shadow-lg shadow-primary/20"
                : "text-slate-600 hover:bg-slate-100 dark:hover:bg-slate-800"
                }`}
            >
              <span className="material-symbols-outlined text-lg">
                {cat.icon}
              </span>
              {cat.label}
            </button>
          ))}
        </div>
      </div>

      {/* Product Grid */}
      <section className="mx-auto max-w-7xl px-6 py-16">
        {loading ? (
          <div className="flex justify-center py-20">
            <div className="animate-spin h-12 w-12 border-4 border-primary border-t-transparent rounded-full"></div>
          </div>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
            {filteredProducts.map((product, idx) => (
              <Link
                key={product._id}
                href={`/products/${product.slug}`}
                className="group relative rounded-2xl border border-slate-200 dark:border-slate-800 bg-white dark:bg-bg-dark/40 overflow-hidden shadow-sm hover:shadow-xl transition-all duration-300 hover:-translate-y-1"
              >
                <div className="relative aspect-square overflow-hidden bg-slate-100 dark:bg-slate-900 flex items-center justify-center p-4">
                  <img
                    src={product.image}
                    alt={product.name}
                    className="w-full h-full object-contain group-hover:scale-105 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity"></div>
                  {product.isBestSeller && (
                    <div className="absolute top-4 left-4 bg-secondary text-white text-xs font-bold px-3 py-1 rounded-full">
                      Best Seller
                    </div>
                  )}
                  <div className="absolute top-4 right-4 bg-white/90 dark:bg-slate-900/90 backdrop-blur text-xs font-bold px-3 py-1 rounded-full text-primary capitalize">
                    {product.category}
                  </div>
                </div>
                <div className="p-6">
                  <div className="flex items-center gap-2 mb-2">
                    <span className="text-xs font-bold text-slate-400 uppercase tracking-wider">
                      {product.type}
                    </span>
                  </div>
                  <h3 className="text-lg font-bold dark:text-white mb-2 group-hover:text-primary transition-colors">
                    {product.name}
                  </h3>
                  <p className="text-sm text-slate-500 leading-relaxed mb-4">
                    {product.shortDescription}
                  </p>
                  <div className="flex items-center gap-2 text-xs text-slate-400">
                    <span className="material-symbols-outlined text-sm">
                      straighten
                    </span>
                    <span>{product.specifications?.meshSize || product.specifications?.averageGrainLength || product.specifications?.shape || 'N/A'}</span>
                    <span className="mx-1">•</span>
                    <span className="material-symbols-outlined text-sm">
                      water_drop
                    </span>
                    <span>{product.specifications?.moisture || 'N/A'}</span>
                  </div>
                </div>
                <div className="px-6 pb-4">
                  <div className="flex items-center gap-1 text-primary text-sm font-bold">
                    View Details
                    <span className="material-symbols-outlined text-sm group-hover:translate-x-1 transition-transform">
                      arrow_forward
                    </span>
                  </div>
                </div>
              </Link>
            ))}
          </div>
        )}
      </section>

      {/* CTA */}
      <section className="py-16 px-6">
        <div className="mx-auto max-w-4xl text-center bg-gradient-to-br from-primary to-secondary rounded-[2.5rem] px-8 py-16 text-white relative overflow-hidden">
          <div className="absolute -right-10 -top-10 h-40 w-40 rounded-full bg-white/10 blur-2xl"></div>
          <div className="absolute -left-10 -bottom-10 h-40 w-40 rounded-full bg-white/10 blur-2xl"></div>
          <h2 className="text-3xl md:text-4xl font-black relative z-10">
            Need Custom Specifications?
          </h2>
          <p className="text-white/80 mt-4 max-w-lg mx-auto relative z-10">
            We offer bespoke mesh sizes, moisture levels, and packaging
            solutions for OEM and private label clients.
          </p>
          <Link
            href="/contact"
            className="inline-block mt-8 rounded-full bg-white px-10 py-4 text-lg font-bold text-primary hover:bg-slate-100 transition-all active:scale-95 relative z-10"
          >
            Request Custom Quote
          </Link>
        </div>
      </section>
    </>
  );
}
