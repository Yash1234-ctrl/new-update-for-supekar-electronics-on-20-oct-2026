"use client";

import React from "react";
import Link from "next/link";
import { motion } from "framer-motion";
import { notFound } from "next/navigation";
import { products } from "../../../lib/products";

export default function ProductDetailPage({ params }: { params: Promise<{ slug: string }> }) {
    const { slug } = React.use(params);
    const product = products.find((item) => item.slug === slug);

    if (!product) notFound();

    return (
        <motion.main
            initial={{ opacity: 0, y: 18 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.45 }}
            style={{
                minHeight: "100vh",
                background: "linear-gradient(135deg, #020617, #111827 45%, #172554)",
                color: "#fff",
                padding: "90px 5% 40px",
            }}
        >
            <div style={{ maxWidth: 1100, margin: "0 auto" }}>
                <Link href="/products" style={{ color: "#7dd3fc", textDecoration: "none", fontWeight: 600, display: "inline-block", marginBottom: 16 }}>
                    ← Back to Products
                </Link>

                <motion.article
                    initial={{ opacity: 0, y: 24 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: 0.08 }}
                    style={{
                        display: "grid",
                        gap: 26,
                        gridTemplateColumns: "repeat(auto-fit, minmax(320px, 1fr))",
                        alignItems: "center",
                        background: "linear-gradient(145deg, rgba(15,23,42,0.96), rgba(30,41,59,0.95))",
                        border: "1px solid rgba(148,163,184,0.18)",
                        borderRadius: 28,
                        boxShadow: "0 24px 45px rgba(15, 23, 42, 0.45), 0 0 0 1px rgba(125,211,252,0.08)",
                        overflow: "hidden",
                        padding: 18,
                    }}
                >
                    <motion.div
                        initial={{ opacity: 0, x: -18 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.4, delay: 0.12 }}
                        whileHover={{ y: -6, rotate: -1, scale: 1.02 }}
                        style={{ padding: 8 }}
                    >
                        <img
                            src={product.image}
                            alt={product.title}
                            style={{
                                width: "100%",
                                borderRadius: 24,
                                objectFit: "cover",
                                minHeight: 320,
                                border: "1px solid rgba(148,163,184,0.2)",
                                boxShadow: "0 18px 35px rgba(15, 23, 42, 0.45), 0 0 0 1px rgba(125,211,252,0.08), 0 18px 38px rgba(56,189,248,0.18)",
                            }}
                        />
                    </motion.div>
                    <motion.div
                        initial={{ opacity: 0, x: 18 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.45, delay: 0.16 }}
                        style={{ padding: "8px 10px 8px 4px" }}
                    >
                        <p style={{ color: "#7dd3fc", textTransform: "uppercase", letterSpacing: "0.2em", fontSize: 12, marginBottom: 8 }}>
                            Full Product View
                        </p>
                        <h1 style={{ fontSize: "clamp(1.8rem, 4vw, 2.5rem)", marginBottom: 10 }}>{product.title}</h1>
                        <p style={{ color: "#e2e8f0", lineHeight: 1.8, marginBottom: 10 }}>{product.shortDescription}</p>
                        <p style={{ color: "#dbeafe", lineHeight: 1.9, marginBottom: 16 }}>{product.fullDescription}</p>

                        <div style={{ display: "flex", flexWrap: "wrap", gap: 10, marginBottom: 14 }}>
                            {product.applications.map((item) => (
                                <span key={item} style={{ borderRadius: 999, padding: "8px 10px", background: "rgba(56, 189, 248, 0.12)", border: "1px solid rgba(125, 211, 252, 0.22)", color: "#eff6ff", fontSize: 13 }}>
                                    {item}
                                </span>
                            ))}
                        </div>

                        <div style={{ borderTop: "1px solid rgba(148,163,184,0.14)", paddingTop: 12 }}>
                            <h2 style={{ fontSize: 18, marginBottom: 8 }}>Key Features</h2>
                            <ul style={{ paddingLeft: 18, color: "#bfdbfe", lineHeight: 1.7 }}>
                                {product.features.map((item) => <li key={item}>{item}</li>)}
                            </ul>
                        </div>
                    </motion.div>
                </motion.article>
            </div>
        </motion.main>
    );
}
