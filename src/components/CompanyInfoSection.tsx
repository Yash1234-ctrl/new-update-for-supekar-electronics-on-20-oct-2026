"use client";

import { motion } from "framer-motion";

const companyInfo = [
    ["Company Name", "Supekar Electronics"],
    ["Udyam Registration Number", "UDYAM-MH-30-0182149"],
    ["Enterprise Type", "Micro Enterprise"],
    ["Major Activity", "Manufacturing"],
    ["Date of Udyam Registration", "22 January 2026"],
    ["Date of Incorporation", "01 January 2026"],
    ["Head Office", "Satara, Maharashtra, India"],
];

const coreDomains = [
    "Electronics Design",
    "IoT Solutions",
    "Embedded Systems",
    "Automation & Control",
    "PCB Design & Manufacturing",
    "Product Development",
];

export default function CompanyInfoSection() {
    return (
        <section
            id="company-info"
            style={{
                position: "relative",
                minHeight: "100vh",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                overflow: "hidden",
                backgroundImage: "linear-gradient(rgba(2,6,23,0.78), rgba(2,6,23,0.82)), url('/images/product-bg.jpg')",
                backgroundSize: "cover",
                backgroundPosition: "center",
            }}
        >
            <div
                style={{
                    position: "absolute",
                    inset: 0,
                    background: "linear-gradient(145deg, rgba(2,6,23,0.35), rgba(15,23,42,0.72))",
                    zIndex: 0,
                }}
            />

            <motion.div
                initial={{ opacity: 0, y: 80 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 1 }}
                style={{
                    position: "relative",
                    zIndex: 1,
                    width: "100%",
                    maxWidth: "1100px",
                    borderRadius: 24,
                    padding: "28px 24px",
                    backdropFilter: "blur(12px)",
                    background: "rgba(15,23,42,0.72)",
                    border: "1px solid rgba(148,163,184,0.18)",
                    boxShadow: "0 24px 45px rgba(15,23,42,0.45)",
                }}
            >
                <p style={{ textTransform: "uppercase", letterSpacing: "0.22em", color: "#7dd3fc", fontSize: 12, marginBottom: 8 }}>
                    Company Information
                </p>
                <h2 style={{ fontSize: "clamp(2rem, 5vw, 2.6rem)", marginBottom: 12 }}>
                    Supekar Electronics at a Glance
                </h2>
                <p style={{ color: "#dbeafe", lineHeight: 1.7, marginBottom: 18, maxWidth: 820 }}>
                    A registered Indian electronics manufacturing company focused on reliable, repairable, and affordable automation and IoT products for residential, industrial, and agricultural applications.
                </p>

                <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(280px, 1fr))", gap: 14, marginBottom: 18 }}>
                    {companyInfo.map(([label, value], index) => (
                        <motion.article
                            key={label}
                            initial={{ opacity: 0, y: 40 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.6, delay: 0.1 + index * 0.05 }}
                            style={{
                                borderRadius: 18,
                                padding: 16,
                                background: "rgba(15,23,42,0.88)",
                                border: "1px solid rgba(148,163,184,0.14)",
                                boxShadow: "0 14px 26px rgba(15,23,42,0.35)",
                            }}
                        >
                            <p style={{ color: "#93c5fd", textTransform: "uppercase", letterSpacing: "0.18em", fontSize: 11, marginBottom: 6 }}>{label}</p>
                            <h3 style={{ color: "#fff", fontSize: 17, lineHeight: 1.4 }}>{value}</h3>
                        </motion.article>
                    ))}
                </div>

                <motion.div
                    initial={{ opacity: 0, y: 40 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.7, delay: 0.2 }}
                    style={{
                        borderRadius: 18,
                        padding: 16,
                        background: "rgba(15,23,42,0.88)",
                        border: "1px solid rgba(148,163,184,0.14)",
                        boxShadow: "0 14px 26px rgba(15,23,42,0.35)",
                    }}
                >
                    <h3 style={{ fontSize: 20, marginBottom: 10 }}>Our Core Domains</h3>
                    <div style={{ display: "flex", flexWrap: "wrap", gap: 10 }}>
                        {coreDomains.map((item) => (
                            <span
                                key={item}
                                style={{
                                    borderRadius: 999,
                                    padding: "10px 12px",
                                    background: "linear-gradient(135deg, rgba(56,189,248,0.12), rgba(37,99,235,0.12))",
                                    border: "1px solid rgba(125,211,252,0.25)",
                                    color: "#eff6ff",
                                    fontSize: 14,
                                }}
                            >
                                {item}
                            </span>
                        ))}
                    </div>
                </motion.div>
            </motion.div>
        </section>
    );
}
