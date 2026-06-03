"use client";

import { useEffect, useState } from "react";

export default function CookieConsent() {
    const [visible, setVisible] = useState(false);

    useEffect(() => {
        const hasSeenPopup = localStorage.getItem("cookie-popup-seen");
        if (!hasSeenPopup) {
            setVisible(true);
        }
    }, []);

    const closePopup = () => {
        localStorage.setItem("cookie-popup-seen", "true");
        setVisible(false);
    };

    if (!visible) return null;

    return (
        <div
            style={{
                position: "fixed",
                left: 0,
                right: 0,
                bottom: 0,
                zIndex: 1200,
                padding: "16px 18px",
                background: "rgba(5, 10, 20, 0.97)",
                borderTop: "1px solid rgba(0,255,136,0.25)",
                boxShadow: "0 -12px 30px rgba(0, 0, 0, 0.35)",
            }}
        >
            <div
                style={{
                    maxWidth: "1200px",
                    margin: "0 auto",
                    display: "flex",
                    flexWrap: "wrap",
                    alignItems: "center",
                    justifyContent: "space-between",
                    gap: "14px",
                    color: "#eff6ff",
                }}
            >
                <div style={{ flex: "1 1 420px", minWidth: 0 }}>
                    <div style={{ fontSize: "1rem", fontWeight: 700, marginBottom: 6 }}>
                        We use cookies to improve your experience.
                    </div>
                    <div style={{ color: "#d1d5db", lineHeight: 1.5, fontSize: "0.95rem" }}>
                        We use essential cookies for the site to work and optional analytics cookies to understand how visitors use our website.
                    </div>
                </div>

                <div style={{ display: "flex", gap: "10px", flexWrap: "wrap" }}>
                    <button
                        type="button"
                        onClick={closePopup}
                        style={{
                            border: "1px solid rgba(255,255,255,0.15)",
                            background: "rgba(255,255,255,0.06)",
                            color: "#fff",
                            borderRadius: 10,
                            padding: "10px 14px",
                            cursor: "pointer",
                            fontWeight: 600,
                        }}
                    >
                        Reject all
                    </button>
                    <button
                        type="button"
                        onClick={closePopup}
                        style={{
                            border: "none",
                            background: "linear-gradient(135deg, #00ff88, #00d084)",
                            color: "#012",
                            borderRadius: 10,
                            padding: "10px 14px",
                            cursor: "pointer",
                            fontWeight: 700,
                            boxShadow: "0 10px 22px rgba(0,255,136,0.25)",
                        }}
                    >
                        Accept cookies
                    </button>
                </div>
            </div>
        </div>
    );
}
