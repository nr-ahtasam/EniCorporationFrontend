import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import { PRODUCTS } from "../data"; 
import ProductTabs from "../ProductTabs";

export default async function ProductPage({ params }) {
  // params can be a Promise in some Next.js setups — await it
  const resolved = await params;
  const { id } = resolved ?? {};

  // match id safely (numbers vs strings)
  const product = PRODUCTS.find((p) => String(p.id) === String(id));

  if (!product) {
    console.error("Product not found:", id, "available ids:", PRODUCTS.map((p) => p.id).join(", "));
    return notFound();
  }

  return (
    <main className="bg-gray-50">
      <section className="max-w-7xl mx-auto px-6 py-16 grid grid-cols-12 gap-8 items-start">
        <div className="col-span-12 lg:col-span-5">
          <div className="">
            <div className="relative w-full h-[420px]">
              <Image src={product.image} alt={product.title} fill className="object-contain" />
            </div>
          </div>
        </div>

        <div className="col-span-12 lg:col-span-7">
          <h1 className="text-3xl lg:text-4xl font-extrabold text-gray-900 mb-4">{product.title}</h1>
          {product.subtitle && <p className="text-lg text-gray-500 mb-6">{product.subtitle}</p>}

          <div className="h-[1px] bg-red-600 w-full mb-6" />

          <p className="text-gray-700 mb-8">{product.description}</p>

          <div className="flex items-center gap-4">
            <Link href="/products" className="inline-flex items-center px-6 py-2 bg-blue-600 text-white rounded-full text-sm font-medium hover:bg-green-500 transform:scale(1) hover:scale-105 transition-all">
              Buy Now
            </Link>

            {(() => {
              const pdsHref = product.pdsUrl
                ? product.pdsUrl
                : product.pdsFilename
                ? `/images/pds/${product.pdsFilename}`
                : `/images/pds/${product.id}.pdf`;
              const isExternal = Boolean(product.pdsUrl);

              return (
                <a
                  href={pdsHref}
                  className="inline-flex items-center px-6 py-2 bg-black text-white rounded-full text-sm font-medium hover:opacity-95 hover:bg-red-500 transform:scale(1) hover:scale-105 transition-all"
                  target={isExternal ? "_blank" : undefined}
                  rel={isExternal ? "noopener noreferrer" : undefined}
                  download={isExternal ? undefined : true}
                >
                  Download PDS
                </a>
              );
            })()}
          </div>
        </div>
      </section>

      <ProductTabs product={product} />
    </main>
  );
}