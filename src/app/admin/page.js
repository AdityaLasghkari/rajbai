"use client";
import { useState, useEffect } from "react";
import Link from "next/link";

function AdminLogin({ onLogin }) {
  const [pwd, setPwd] = useState("");
  const [error, setError] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    if (pwd === "admin123") {
      onLogin();
    } else {
      setError("Incorrect password");
    }
  };

  return (
    <div className="flex justify-center items-center min-h-screen bg-slate-50 dark:bg-bg-dark">
      <div className="bg-white dark:bg-slate-800 p-8 rounded-2xl shadow-xl border border-slate-200 dark:border-slate-700 w-full max-w-sm">
        <h1 className="text-2xl font-black mb-6 text-center dark:text-white">Admin Login</h1>
        <form onSubmit={handleSubmit} className="space-y-4">
          <div>
            <label className="block text-sm font-bold text-slate-700 dark:text-slate-300 mb-2">Password</label>
            <input
              type="password"
              value={pwd}
              onChange={(e) => setPwd(e.target.value)}
              className="w-full px-4 py-3 rounded-xl border border-slate-300 dark:border-slate-700 bg-slate-50 dark:bg-slate-900 text-slate-900 dark:text-white focus:ring-2 focus:ring-primary outline-none"
              placeholder="Enter master password"
            />
          </div>
          {error && <p className="text-red-500 text-sm">{error}</p>}
          <button type="submit" className="w-full bg-primary text-white py-3 rounded-xl font-bold hover:bg-secondary transition-all">
            Login
          </button>
        </form>
        <div className="mt-4 text-center">
            <Link href="/" className="text-sm text-primary hover:underline">Back to Website</Link>
        </div>
      </div>
    </div>
  );
}

export default function AdminPage() {
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [tab, setTab] = useState("products"); // 'products' or 'inquiries'
  const [products, setProducts] = useState([]);
  const [inquiries, setInquiries] = useState([]);
  const [loading, setLoading] = useState(true);

  // Form State
  const [editingProduct, setEditingProduct] = useState(null);
  const [formData, setFormData] = useState({
    name: "",
    slug: "",
    category: "onion",
    type: "",
    description: "",
    shortDescription: "",
    image: "",
  });

  useEffect(() => {
    // Basic local Auth persistence
    const auth = localStorage.getItem("adminAuth");
    if (auth === "true") {
      setIsAuthenticated(true);
    }
  }, []);

  const handleLogin = () => {
    setIsAuthenticated(true);
    localStorage.setItem("adminAuth", "true");
  };

  const handleLogout = () => {
    setIsAuthenticated(false);
    localStorage.removeItem("adminAuth");
  };

  useEffect(() => {
    if (!isAuthenticated) return;
    fetchData();
  }, [isAuthenticated]);

  const fetchData = async () => {
    setLoading(true);
    try {
      const pRes = await fetch("/api/products");
      const pData = await pRes.json();
      if (pData.success) setProducts(pData.data);

      const iRes = await fetch("/api/inquiries");
      const iData = await iRes.json();
      if (iData.success) setInquiries(iData.data);
    } catch (e) {
      console.error(e);
    } finally {
      setLoading(false);
    }
  };

  const handleDeleteProduct = async (slug) => {
    if (!confirm("Are you sure you want to delete this product?")) return;
    try {
      const res = await fetch(`/api/products/${slug}`, { method: "DELETE" });
      const data = await res.json();
      if (data.success) {
        setProducts(products.filter((p) => p.slug !== slug));
      } else {
        alert(data.error);
      }
    } catch (e) {
      alert("Error deleting product.");
    }
  };

  const handleEditProduct = (p) => {
    setEditingProduct(p.slug);
    setFormData({
      name: p.name,
      slug: p.slug,
      category: p.category,
      type: p.type,
      description: p.description,
      shortDescription: p.shortDescription || "",
      image: p.image || "",
    });
    setTab("edit");
  };

  const handleSaveProduct = async (e) => {
    e.preventDefault();
    const isEditing = !!editingProduct;
    const url = isEditing ? `/api/products/${editingProduct}` : `/api/products`;
    const method = isEditing ? "PUT" : "POST";

    try {
      const res = await fetch(url, {
        method,
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      });
      const data = await res.json();
      if (data.success) {
        alert(isEditing ? "Updated!" : "Added!");
        setEditingProduct(null);
        setTab("products");
        fetchData();
        setFormData({ name: "", slug: "", category: "onion", type: "", description: "", shortDescription: "", image: "" });
      } else {
        alert(data.error);
      }
    } catch (e) {
      alert("Error saving product.");
    }
  };

  if (!isAuthenticated) {
    return <AdminLogin onLogin={handleLogin} />;
  }

  return (
    <div className="min-h-screen bg-slate-50 dark:bg-bg-dark text-slate-900 dark:text-slate-100 pb-20">
      {/* Admin Header */}
      <header className="bg-white dark:bg-slate-900 shadow-sm border-b border-slate-200 dark:border-slate-800">
        <div className="max-w-7xl mx-auto px-6 h-16 flex items-center justify-between">
          <div className="flex items-center gap-4">
            <h1 className="text-xl font-black text-primary">Admin Dashboard</h1>
            <div className="hidden md:flex bg-slate-100 dark:bg-slate-800 rounded-lg p-1">
              <button onClick={() => setTab("products")} className={`px-4 py-1.5 text-sm font-bold rounded-md ${tab === "products" ? "bg-white dark:bg-slate-700 shadow" : "text-slate-500"}`}>Products</button>
              <button onClick={() => setTab("inquiries")} className={`px-4 py-1.5 text-sm font-bold rounded-md ${tab === "inquiries" ? "bg-white dark:bg-slate-700 shadow" : "text-slate-500"}`}>Inquiries</button>
            </div>
          </div>
          <div className="flex items-center gap-4">
            <Link href="/" className="text-sm font-bold text-slate-500 hover:text-primary transition">Visit Site</Link>
            <button onClick={handleLogout} className="text-sm font-bold bg-red-100 text-red-600 px-4 py-2 rounded-full hover:bg-red-200 transition">Logout</button>
          </div>
        </div>
      </header>

      {/* Main Content */}
      <main className="max-w-7xl mx-auto px-6 py-8">
        {loading ? (
          <div className="flex justify-center py-20"><div className="animate-spin h-12 w-12 border-4 border-primary border-t-transparent rounded-full"></div></div>
        ) : (
          <>
            {/* Products Tab */}
            {tab === "products" && (
              <div>
                <div className="flex justify-between items-center mb-6">
                  <h2 className="text-2xl font-black">Manage Products</h2>
                  <button onClick={() => { setEditingProduct(null); setFormData({ name: "", slug: "", category: "onion", type: "", description: "", shortDescription: "", image: "" }); setTab("edit"); }} className="bg-primary text-white px-6 py-2 rounded-full font-bold shadow-lg hover:bg-secondary">
                    + Add New Product
                  </button>
                </div>
                <div className="bg-white dark:bg-slate-900 rounded-2xl shadow-sm border border-slate-200 dark:border-slate-800 overflow-x-auto">
                  <table className="w-full text-left border-collapse">
                    <thead>
                      <tr className="bg-slate-50 dark:bg-slate-800 text-slate-500 border-b border-slate-200 dark:border-slate-700">
                        <th className="p-4 font-bold">Product</th>
                        <th className="p-4 font-bold">Category</th>
                        <th className="p-4 font-bold">Type</th>
                        <th className="p-4 font-bold text-right">Actions</th>
                      </tr>
                    </thead>
                    <tbody>
                      {products.map(p => (
                        <tr key={p._id} className="border-b border-slate-200 dark:border-slate-700 hover:bg-slate-50 dark:hover:bg-slate-800/50">
                          <td className="p-4 flex items-center gap-3">
                            <img src={p.image || "/images/logo.png"} alt="" className="w-10 h-10 rounded-lg object-contain bg-slate-100 dark:bg-slate-800" />
                            <div>
                                <div className="font-bold">{p.name}</div>
                                <div className="text-xs text-slate-500">{p.slug}</div>
                            </div>
                          </td>
                          <td className="p-4 capitalize">{p.category}</td>
                          <td className="p-4 text-slate-500">{p.type}</td>
                          <td className="p-4 text-right space-x-2 w-32">
                            <button onClick={() => handleEditProduct(p)} className="text-blue-500 hover:text-blue-700 bg-blue-50 dark:bg-blue-900/20 px-3 py-1 rounded-lg">Edit</button>
                            <button onClick={() => handleDeleteProduct(p.slug)} className="text-red-500 hover:text-red-700 bg-red-50 dark:bg-red-900/20 px-3 py-1 rounded-lg">Del</button>
                          </td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              </div>
            )}

            {/* Inquiries Tab */}
            {tab === "inquiries" && (
              <div>
                <h2 className="text-2xl font-black mb-6">Client Inquiries</h2>
                <div className="grid gap-4">
                  {inquiries.map((inq) => (
                    <div key={inq._id} className="bg-white dark:bg-slate-900 rounded-2xl p-6 shadow-sm border border-slate-200 dark:border-slate-800">
                      <div className="flex justify-between items-start mb-4">
                        <div>
                          <h3 className="font-bold text-lg">{inq.name} <span className="text-sm font-normal text-slate-500 ml-2">{inq.company && `(${inq.company})`}</span></h3>
                          <p className="text-sm text-primary font-semibold">{inq.inquiryType.toUpperCase()}</p>
                        </div>
                        <span className="text-xs text-slate-400">{new Date(inq.createdAt).toLocaleDateString()}</span>
                      </div>
                      <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-4 text-sm text-slate-600 dark:text-slate-400 bg-slate-50 dark:bg-slate-800 p-4 rounded-xl border border-slate-100 dark:border-slate-700">
                        <div><strong className="block text-slate-900 dark:text-slate-200">Email</strong> {inq.email}</div>
                        <div><strong className="block text-slate-900 dark:text-slate-200">Phone</strong> {inq.phone || 'N/A'}</div>
                        <div><strong className="block text-slate-900 dark:text-slate-200">Country</strong> {inq.country || 'N/A'}</div>
                      </div>
                      <div className="bg-primary/5 p-4 rounded-xl border border-primary/10">
                        <strong className="block font-bold text-slate-900 dark:text-white mb-1">Message:</strong>
                        <p className="text-slate-700 dark:text-slate-300 whitespace-pre-wrap text-sm">{inq.message}</p>
                      </div>
                    </div>
                  ))}
                  {inquiries.length === 0 && <p className="text-slate-500">No inquiries yet.</p>}
                </div>
              </div>
            )}

            {/* Form Tab */}
            {tab === "edit" && (
              <div>
                <div className="flex items-center gap-4 mb-6">
                    <button onClick={() => setTab("products")} className="flex items-center gap-1 text-slate-500 hover:text-slate-900 dark:hover:text-white font-bold text-sm">
                        <span className="material-symbols-outlined text-sm">arrow_back</span> Back
                    </button>
                    <h2 className="text-2xl font-black">{editingProduct ? "Edit Product" : "Add Product"}</h2>
                </div>
                
                <form onSubmit={handleSaveProduct} className="bg-white dark:bg-slate-900 p-8 rounded-2xl shadow-sm border border-slate-200 dark:border-slate-800 max-w-2xl space-y-4">
                  <div className="grid grid-cols-2 gap-4">
                    <div>
                        <label className="block text-sm font-bold mb-1">Name *</label>
                        <input required type="text" value={formData.name} onChange={e => {
                          const val = e.target.value;
                          setFormData({...formData, name: val, slug: !editingProduct ? val.toLowerCase().replace(/ /g, '-') : formData.slug})
                        }} className="w-full px-4 py-2 rounded-lg border dark:bg-slate-800 dark:border-slate-700 outline-none focus:border-primary" />
                    </div>
                    <div>
                        <label className="block text-sm font-bold mb-1">Slug *</label>
                        <input required type="text" value={formData.slug} onChange={e => setFormData({...formData, slug: e.target.value})} className="w-full px-4 py-2 rounded-lg border dark:bg-slate-800 dark:border-slate-700 outline-none focus:border-primary" />
                    </div>
                  </div>
                  <div className="grid grid-cols-2 gap-4">
                    <div>
                        <label className="block text-sm font-bold mb-1">Category *</label>
                        <select value={formData.category} onChange={e => setFormData({...formData, category: e.target.value})} className="w-full px-4 py-2 rounded-lg border dark:bg-slate-800 dark:border-slate-700 outline-none focus:border-primary">
                            <option value="onion">Onion Powders</option>
                            <option value="rice">Rice</option>
                            <option value="frozen">Frozen Food</option>
                            <option value="garlic">Garlic</option>
                            <option value="spice">Spice</option>
                            <option value="blend">Blend</option>
                        </select>
                    </div>
                    <div>
                        <label className="block text-sm font-bold mb-1">Type *</label>
                        <input required type="text" value={formData.type} onChange={e => setFormData({...formData, type: e.target.value})} className="w-full px-4 py-2 rounded-lg border dark:bg-slate-800 dark:border-slate-700 outline-none focus:border-primary" placeholder="e.g. Flakes, Powder, Sella" />
                    </div>
                  </div>
                  <div>
                    <label className="block text-sm font-bold mb-1">Image URL</label>
                    <input type="text" value={formData.image} onChange={e => setFormData({...formData, image: e.target.value})} className="w-full px-4 py-2 rounded-lg border dark:bg-slate-800 dark:border-slate-700 outline-none focus:border-primary" placeholder="/products/image.jpeg" />
                  </div>
                  <div>
                    <label className="block text-sm font-bold mb-1">Short Description</label>
                    <textarea value={formData.shortDescription} onChange={e => setFormData({...formData, shortDescription: e.target.value})} className="w-full px-4 py-2 rounded-lg border dark:bg-slate-800 dark:border-slate-700 outline-none focus:border-primary h-20" />
                  </div>
                  <div>
                    <label className="block text-sm font-bold mb-1">Full Description *</label>
                    <textarea required value={formData.description} onChange={e => setFormData({...formData, description: e.target.value})} className="w-full px-4 py-2 rounded-lg border dark:bg-slate-800 dark:border-slate-700 outline-none focus:border-primary h-32" />
                  </div>
                  <button type="submit" className="bg-primary text-white px-8 py-3 rounded-xl font-bold hover:bg-secondary w-full">
                    Save Product
                  </button>
                </form>
              </div>
            )}
          </>
        )}
      </main>
    </div>
  );
}
