import Link from "next/link";
import { products } from "../../lib/products";

export default function ProductsPage() {
    return (
        <main
            style={{
                minHeight: "100vh",
                background: "linear-gradient(135deg, #020617, #111827 45%, #172554)",
                color: "#fff",
                padding: "90px 5% 40px",
            }}
        >
            <div style={{ maxWidth: 1200, margin: "0 auto" }}>
                <Link href="/" style={{ color: "#7dd3fc", textDecoration: "none", fontWeight: 600, display: "inline-block", marginBottom: 16 }}>
                    ← Back to Home
                </Link>
                <h1 style={{ fontSize: "clamp(2rem, 5vw, 3rem)", marginBottom: 8 }}>Our Product Range</h1>
                <p style={{ color: "#dbeafe", maxWidth: 860, lineHeight: 1.7, marginBottom: 24 }}>
                    Explore Supekar Electronics products built for automation, safety, and smart control across homes, industries, farms, and commercial spaces.
                </p>

                <div style={{ display: "grid", gap: 20, gridTemplateColumns: "repeat(auto-fit, minmax(280px, 1fr))" }}>
                    {products.map((item, index) => (
                        <article
                            key={item.slug}
                            style={{
                                borderRadius: 24,
                                overflow: "hidden",
                                background: "rgba(15, 23, 42, 0.9)",
                                border: "1px solid rgba(148,163,184,0.18)",
                                boxShadow: "0 18px 35px rgba(15, 23, 42, 0.45)",
                            }}
                        >
                            <div style={{ padding: 14 }}>
                                <img
                                    src={item.image}
                                    alt={item.title}
                                    style={{
                                        width: "100%",
                                        height: 220,
                                        objectFit: "cover",
                                        borderRadius: 18,
                                        border: "1px solid rgba(148,163,184,0.18)",
                                        boxShadow: "0 18px 30px rgba(15, 23, 42, 0.35)",
                                    }}
                                />
                            </div>
                            <div style={{ padding: "0 16px 18px" }}>
                                <p style={{ color: "#7dd3fc", textTransform: "uppercase", letterSpacing: "0.18em", fontSize: 12, marginBottom: 6 }}>
                                    Product {index + 1}
                                </p>
                                <h2 style={{ fontSize: 20, marginBottom: 8 }}>{item.title}</h2>
                                <p style={{ color: "#e2e8f0", lineHeight: 1.6, fontSize: 14, marginBottom: 12 }}>{item.shortDescription}</p>
                                <Link
                                    href={`/products/${item.slug}`}
                                    style={{
                                        display: "inline-flex",
                                        alignItems: "center",
                                        justifyContent: "center",
                                        padding: "10px 14px",
                                        borderRadius: 10,
                                        background: "linear-gradient(135deg, #22d3ee, #2563eb)",
                                        color: "#fff",
                                        textDecoration: "none",
                                        fontWeight: 700,
                                        boxShadow: "0 10px 16px rgba(56, 189, 248, 0.28)",
                                    }}
                                >
                                    See Full Details
                                </Link>
                            </div>
                        </article>
                    ))}
                </div>
            </div>
        </main>
    );
}
