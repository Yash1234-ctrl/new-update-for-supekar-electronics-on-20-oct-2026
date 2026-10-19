import Image from "next/image";
import Link from "next/link";
import { products } from "../../data/products";

const caseStudies = [
  {
    title: "Case Study Placeholder 1",
    summary: "Placeholder project summary. Replace with an approved project description.",
  },
  {
    title: "Case Study Placeholder 2",
    summary: "Placeholder project summary. Replace with an approved project description.",
  },
];

export default function ProductsPage() {
  return (
    <main className="products-page">
      <section className="products-intro section">
        <div className="section-inner">
          <Link className="back-link" href="/">← Back to Home</Link>
          <p className="eyebrow">Designed for practical applications</p>
          <h1>Products</h1>
          <p className="section-copy">
            Explore our electronics, automation, and safety products. Contact us to discuss a product or project requirement.
          </p>
        </div>
      </section>
      <section className="section products-section">
        <div className="section-inner">
          <div className="card-grid three-column">
            {products.map((product) => (
              <article className="product-card" key={product.slug}>
                <Link className="product-image" href={`/products/${product.slug}`} aria-label={`View ${product.name}`}>
                  <Image
                    src={product.image}
                    alt={`${product.name} product`}
                    fill
                    sizes="(max-width: 700px) 100vw, (max-width: 1050px) 50vw, 33vw"
                  />
                </Link>
                <div className="product-card-content">
                  <h2><Link href={`/products/${product.slug}`}>{product.name}</Link></h2>
                  <p>{product.shortDescription}</p>
                  <h3>Key specs</h3>
                  <ul>{product.keySpecs.map((spec) => <li key={spec}>{spec}</li>)}</ul>
                  <h3>Use cases</h3>
                  <ul>{product.useCases.map((useCase) => <li key={useCase}>{useCase}</li>)}</ul>
                  <Link
                    className="button button-primary"
                    href={`/?product=${encodeURIComponent(product.name)}#contact`}
                  >
                    Request Quote
                  </Link>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>
      <section className="section section-alt">
        <div className="section-inner">
          <p className="eyebrow">Selected work</p>
          <h2>Projects / Case Studies</h2>
          <div className="card-grid two-column">
            {caseStudies.map((study) => (
              <article className="info-card" key={study.title}>
                <p className="placeholder-label">Placeholder — replace before publishing</p>
                <h3>{study.title}</h3>
                <p>{study.summary}</p>
              </article>
            ))}
          </div>
        </div>
      </section>
    </main>
  );
}
