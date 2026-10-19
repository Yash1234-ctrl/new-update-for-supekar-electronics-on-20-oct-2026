import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import { products } from "../../../data/products";

export function generateStaticParams() {
  return products.map(({ slug }) => ({ slug }));
}

export default async function ProductDetailPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const product = products.find((item) => item.slug === slug);
  if (!product) notFound();

  return (
    <main className="product-detail-page section">
      <div className="section-inner">
        <Link className="back-link" href="/products">← Back to Products</Link>
        <article className="product-detail">
          <div className="product-detail-image">
            <Image
              src={product.image}
              alt={`${product.name} product`}
              fill
              sizes="(max-width: 800px) 100vw, 50vw"
              priority
            />
          </div>
          <div>
            <p className="eyebrow">Supekar Electronics product</p>
            <h1>{product.name}</h1>
            <p className="section-copy">{product.shortDescription}</p>
            <h2>Key specs</h2>
            <ul>{product.keySpecs.map((spec) => <li key={spec}>{spec}</li>)}</ul>
            <h2>Use cases</h2>
            <ul>{product.useCases.map((useCase) => <li key={useCase}>{useCase}</li>)}</ul>
            <Link
              className="button button-primary"
              href={`/?product=${encodeURIComponent(product.name)}#contact`}
            >
              Request Quote
            </Link>
          </div>
        </article>
      </div>
    </main>
  );
}
