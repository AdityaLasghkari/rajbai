import "./globals.css";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

export const metadata = {
  title: "Rajbai International",
  description:
    "Global leaders in high-performance dehydrated onion and garlic products. FSSC 22000, BRCGS Grade A certified. Exporting to 50+ countries from India.",
  keywords:
    "dehydrated onion, dehydrated garlic, onion powder, garlic powder, onion flakes, export, India",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        <link
          href="https://fonts.googleapis.com/css2?family=Public+Sans:wght@300;400;500;600;700;800;900&display=swap"
          rel="stylesheet"
        />
        <link
          href="https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined:wght,FILL@100..700,0..1&display=swap"
          rel="stylesheet"
        />
      </head>
      <body className="bg-bg-light dark:bg-bg-dark font-display text-slate-900 dark:text-slate-100 antialiased">
        <div className="relative flex min-h-screen w-full flex-col overflow-x-hidden">
          <Header />
          <main className="flex-1 pt-[72px]">{children}</main>
          <Footer />
        </div>
      </body>
    </html>
  );
}
