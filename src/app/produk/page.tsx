import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { ProductCard } from "@/components/ProductCard";
import { products } from "@/lib/products";
import { Metadata } from "next";

export const metadata: Metadata = {
    title: "Produk Kami - U2CleanPro",
    description: "Jelajahi berbagai produk kebersihan berkualitas tinggi yang kami tawarkan, mulai dari cairan pembersih hingga peralatan modern.",
};

export default function ProductsPage() {
    return (
        <>
            <Navbar />
            <main className="container mx-auto px-4 py-12">
                <h1 className="text-4xl font-bold mb-8 text-center">Produk Kami</h1>
                <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
                    {products.map((product) => (
                        <ProductCard key={product.id} product={product} />
                    ))}
                </div>
            </main>
            <Footer />
        </>
    );
}
