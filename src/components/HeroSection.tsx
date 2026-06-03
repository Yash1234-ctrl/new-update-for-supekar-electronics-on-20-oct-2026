"use client";

import { useState, useEffect, useRef } from "react";
import { motion, AnimatePresence, useReducedMotion } from "framer-motion";
import { auth, db } from "@/firebase";
import {
  GoogleAuthProvider,
  signInWithPopup,
  onAuthStateChanged,
  signOut,
} from "firebase/auth";
import { doc, setDoc } from "firebase/firestore";
import Image from "next/image";
import { useRouter } from "next/navigation";
import { linkStyle, primaryStyle } from "../styles";

export default function HeroSection() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [user, setUser] = useState<any>(null);
  const [showProfileMenu, setShowProfileMenu] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const shouldReduce = useReducedMotion();
  const profileRef = useRef<HTMLDivElement>(null);
  const router = useRouter();

  // 🔥 Auth State
  useEffect(() => {
    if (!auth) return;
    const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
      setUser(currentUser);
    });
    return () => unsubscribe();
  }, []);

  // 🔥 Scroll Effect
  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 40);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // 🔥 Close profile menu on outside click
  useEffect(() => {
    const handleClickOutside = (e: MouseEvent) => {
      if (profileRef.current && !profileRef.current.contains(e.target as Node)) {
        setShowProfileMenu(false);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  const scrollTo = (id: string) => {
    const el = document.getElementById(id);
    if (el) el.scrollIntoView({ behavior: "smooth" });
    setMenuOpen(false);
  };

  const handleNavClick = (id: string) => {
    if (id === "products") {
      router.push("/products");
      setMenuOpen(false);
      return;
    }

    scrollTo(id);
  };

  // 🔥 Google Login
  const handleGoogleLogin = async () => {
    if (!auth || !db) {
      alert("Firebase not configured. Check .env.local");
      return;
    }
    try {
      const provider = new GoogleAuthProvider();
      const result = await signInWithPopup(auth, provider);
      const loggedUser = result.user;

      await setDoc(
        doc(db, "users", loggedUser.uid),
        {
          name: loggedUser.displayName,
          email: loggedUser.email,
          photo: loggedUser.photoURL,
          createdAt: new Date(),
        },
        { merge: true }
      );
    } catch (err) {
      console.error(err);
    }
  };

  const handleLogout = async () => {
    if (!auth) return;
    await signOut(auth);
    setShowProfileMenu(false);
  };

  const services = [
    {
      icon: "⚡",
      title: "Electronics Design & Development",
      description:
        "We transform innovative ideas into reliable electronic products through expert circuit design, embedded systems development, and hardware engineering.",
    },
    {
      icon: "🔌",
      title: "PCB Design & Manufacturing",
      description:
        "We provide end-to-end PCB solutions including schematic design, multilayer PCB layout, prototyping, and manufacturing.",
    },
    {
      icon: "📡",
      title: "IoT Solutions",
      description:
        "We develop intelligent IoT systems that connect devices, collect data, and enable remote monitoring and control.",
    },
    {
      icon: "🏠",
      title: "Home & Industrial Automation",
      description:
        "We design automation products that improve convenience, efficiency, and safety.",
    },
    {
      icon: "💻",
      title: "Embedded Systems Engineering",
      description:
        "Our expertise in microcontrollers, sensors, and firmware development enables us to create robust embedded solutions.",
    },
    {
      icon: "📶",
      title: "Wireless Control Systems",
      description:
        "We develop advanced wireless control technologies for remote switching, monitoring, and automation applications.",
    },
    {
      icon: "🛡️",
      title: "Smart Safety Devices",
      description:
        "We create innovative safety-focused products designed to protect people and equipment from electrical hazards.",
    },
    {
      icon: "🚀",
      title: "Custom Product Development",
      description:
        "We partner with startups, businesses, and innovators to turn ideas into market-ready products.",
    },
  ];

  const endlessServices = [...services, ...services];

  return (
    <header
      id="home"
      style={{
        background: "linear-gradient(90deg,#0b132b,#1f4068)",
        color: "#fff",
        paddingTop: "80px",
      }}
    >
      <nav
        style={{
          position: "fixed",
          top: 0,
          left: 0,
          width: "100%",
          maxWidth: "2000px",
          margin: "0 auto",
          zIndex: 1000,
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
          padding: scrolled ? "10px 5%" : "14px 5%",
          transition: "all 0.35s ease",
          background: scrolled ? "rgba(11,19,43,0.92)" : "transparent",
          backdropFilter: scrolled ? "blur(12px)" : "none",
          boxShadow: scrolled ? "0 6px 25px rgba(0,0,0,0.25)" : "none",
        }}
      >
        {/* Logo */}
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6 }}
          style={{ display: "flex", alignItems: "center", gap: 8 }}
        >
          <Image
            src="/images/logo.png"
            alt="Supekar Electronics"
            height={40}
            width={120}
            objectFit="contain"
          />
          <strong style={{ fontSize: "clamp(14px, 2.5vw, 20px)", whiteSpace: "nowrap" }}>Supekar Electronics</strong>
        </motion.div>

        {/* Desktop Links - Hidden on mobile */}
        <div className="desktop-nav" style={{ display: "flex", gap: "clamp(12px, 3vw, 20px)", alignItems: "center" }}>
          {["about", "products", "contact"].map((id) => (
            <motion.button
              key={id}
              onClick={() => handleNavClick(id)}
              whileHover={{ scale: 1.08 }}
              style={{
                ...linkStyle,
                position: "relative",
                overflow: "hidden",
                fontSize: "clamp(12px, 2vw, 16px)",
                padding: "8px 12px",
              }}
            >
              {id.charAt(0).toUpperCase() + id.slice(1)}
              <motion.div
                layoutId={`underline-${id}`}
                style={{
                  position: "absolute",
                  bottom: 0,
                  left: 0,
                  height: 2,
                  width: "100%",
                  background: "#00d084",
                  transformOrigin: "left",
                  scaleX: 0,
                }}
                whileHover={{ scaleX: 1 }}
                transition={{ duration: 0.25 }}
              />
            </motion.button>
          ))}

          {/* AUTH SECTION - Desktop */}
          {!user ? (
            <motion.button
              whileHover={{ scale: 1.04, boxShadow: "0 14px 30px rgba(56,189,248,0.25)" }}
              whileTap={{ scale: 0.98 }}
              onClick={handleGoogleLogin}
              style={googleStyle}
            >
              Login
            </motion.button>
          ) : (
            <div ref={profileRef} style={{ position: "relative" }}>
              <motion.button
                type="button"
                onClick={() => setShowProfileMenu(!showProfileMenu)}
                whileHover={{ scale: 1.03 }}
                whileTap={{ scale: 0.98 }}
                style={profileChipStyle}
              >
                <motion.img
                  whileHover={{ rotate: [0, -3, 3, 0] }}
                  src={user.photoURL || "https://ui-avatars.com/api/?name=User&background=0d9488&color=fff"}
                  alt="profile"
                  style={profileImageStyle}
                />
                <span style={{ display: "flex", flexDirection: "column", alignItems: "flex-start", minWidth: 0 }}>
                  <strong style={{ fontSize: "0.92rem", color: "#eff6ff", lineHeight: 1.1 }}>{user.displayName || "User"}</strong>
                  <span style={{ fontSize: "0.75rem", color: "#bfdbfe", lineHeight: 1.2 }}>Logged in</span>
                </span>
              </motion.button>

              {/* Logout Panel Desktop */}
              <AnimatePresence>
                {showProfileMenu && (
                  <motion.div
                    initial={{ opacity: 0, scale: 0.85, y: -10 }}
                    animate={{ opacity: 1, scale: 1, y: 0 }}
                    exit={{ opacity: 0, scale: 0.85, y: -10 }}
                    transition={{ duration: 0.25 }}
                    style={{
                      position: "absolute",
                      top: 58,
                      right: 0,
                      background: "rgba(15,23,42,0.98)",
                      backdropFilter: "blur(14px)",
                      padding: "10px 12px",
                      borderRadius: 14,
                      border: "1px solid rgba(125,211,252,0.18)",
                      boxShadow: "0 14px 30px rgba(8,15,35,0.45)",
                    }}
                  >
                    <motion.button
                      whileHover={{ scale: 1.05 }}
                      onClick={handleLogout}
                      style={{
                        background: "transparent",
                        border: "none",
                        color: "#fff",
                        cursor: "pointer",
                        fontSize: "0.95rem",
                        fontWeight: 600,
                      }}
                    >
                      Logout
                    </motion.button>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          )}
        </div>

        {/* Mobile Hamburger Menu Button */}
        <motion.button
          className="mobile-menu-btn"
          onClick={() => setMenuOpen(!menuOpen)}
          style={{
            background: "transparent",
            border: "none",
            color: "#fff",
            fontSize: "1.5rem",
            cursor: "pointer",
            padding: "8px 12px",
            zIndex: 1001,
          }}
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.95 }}
        >
          {menuOpen ? "✕" : "☰"}
        </motion.button>
      </nav>

      {/* Mobile Dropdown Menu */}
      <AnimatePresence>
        {menuOpen && (
          <motion.div
            className="mobile-dropdown"
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.3 }}
            style={{
              position: "fixed",
              top: 64,
              left: 0,
              right: 0,
              background: "rgba(11,19,43,0.98)",
              backdropFilter: "blur(12px)",
              flexDirection: "column",
              gap: 0,
              padding: "12px 0",
              zIndex: 999,
              boxShadow: "0 8px 32px rgba(0,0,0,0.3)",
            }}
          >
            {/* Mobile Navigation Links */}
            {["about", "products", "contact"].map((id) => (
              <motion.button
                key={id}
                onClick={() => handleNavClick(id)}
                whileHover={{ backgroundColor: "rgba(0,208,132,0.1)" }}
                whileTap={{ scale: 0.98 }}
                style={{
                  background: "transparent",
                  border: "none",
                  color: "#fff",
                  fontSize: "1rem",
                  padding: "14px 20px",
                  textAlign: "left",
                  cursor: "pointer",
                  transition: "background 0.2s ease",
                  borderLeft: "3px solid transparent",
                }}
              >
                {id.charAt(0).toUpperCase() + id.slice(1)}
              </motion.button>
            ))}

            <motion.div
              style={{
                height: "1px",
                background: "rgba(0,208,132,0.2)",
                margin: "8px 0",
              }}
            />

            {/* Mobile Auth Section */}
            {!user ? (
              <motion.button
                onClick={handleGoogleLogin}
                whileHover={{ backgroundColor: "rgba(56,189,248,0.12)" }}
                whileTap={{ scale: 0.98 }}
                style={{
                  background: "linear-gradient(135deg, rgba(56,189,248,0.12), rgba(14,165,233,0.18))",
                  border: "1px solid rgba(125,211,252,0.28)",
                  color: "#eff6ff",
                  fontSize: "1rem",
                  fontWeight: 700,
                  padding: "12px 14px",
                  textAlign: "left",
                  cursor: "pointer",
                  borderRadius: 12,
                  transition: "background 0.2s ease",
                }}
              >
                ✨ Sign in with Google
              </motion.button>
            ) : (
              <div style={{ padding: "10px 12px" }}>
                <motion.div
                  style={{
                    display: "flex",
                    alignItems: "center",
                    gap: 12,
                    marginBottom: 10,
                    padding: "10px",
                    borderRadius: 12,
                    background: "linear-gradient(135deg, rgba(56,189,248,0.10), rgba(15,23,42,0.92))",
                    border: "1px solid rgba(125,211,252,0.16)",
                  }}
                >
                  <img
                    src={user.photoURL || "https://ui-avatars.com/api/?name=User&background=0d9488&color=fff"}
                    alt="profile"
                    style={{
                      width: 44,
                      height: 44,
                      borderRadius: "50%",
                      border: "2px solid #00d084",
                      objectFit: "cover",
                      boxShadow: "0 8px 18px rgba(0,0,0,0.35)",
                    }}
                  />
                  <div style={{ flexGrow: 1, minWidth: 0 }}>
                    <div style={{ fontSize: "0.82rem", color: "#bfdbfe", textTransform: "uppercase", letterSpacing: "0.12em" }}>Signed in</div>
                    <div style={{ fontSize: "0.92rem", fontWeight: 700, color: "#fff", whiteSpace: "nowrap", overflow: "hidden", textOverflow: "ellipsis" }}>{user.displayName || "User"}</div>
                  </div>
                </motion.div>
                <motion.button
                  onClick={() => {
                    handleLogout();
                    setMenuOpen(false);
                  }}
                  whileHover={{ backgroundColor: "rgba(255,107,107,0.2)" }}
                  whileTap={{ scale: 0.98 }}
                  style={{
                    background: "transparent",
                    border: "1px solid #ff6b6b",
                    color: "#ff6b6b",
                    fontSize: "0.9rem",
                    fontWeight: 600,
                    padding: "10px 16px",
                    borderRadius: 6,
                    cursor: "pointer",
                    width: "100%",
                    transition: "all 0.2s ease",
                  }}
                >
                  Logout
                </motion.button>
              </div>
            )}
          </motion.div>
        )}
      </AnimatePresence>

      {/* HERO CONTENT */}
      <section style={{ minHeight: "80vh", padding: "80px 5% 40px 5%" }}>
        <div className="hero-wrapper" style={{ display: "flex", alignItems: "center", gap: "clamp(20px, 5vw, 40px)", flexDirection: "column" }}>
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="hero-content"
            style={{ maxWidth: "100%", width: "100%" }}
          >
            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2, duration: 0.8 }}
              style={{ fontSize: "clamp(2rem, 7vw, 4rem)", marginBottom: "clamp(12px, 3vw, 24px)", lineHeight: 1.3 }}
            >
              Innovate. Design. Engineer. Automate
            </motion.h1>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3, duration: 0.8 }}
              style={{ fontSize: "clamp(0.9rem, 2.5vw, 1.125rem)", marginBottom: "clamp(16px, 4vw, 24px)", lineHeight: 1.6 }}
            >
              We design and manufacture innovative technologies that transform ideas into intelligent solutions
            </motion.p>
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.4, duration: 0.8 }}
              style={{ display: "flex", gap: "clamp(12px, 3vw, 16px)", justifyContent: "flex-start" }}
            >

            </motion.div>
          </motion.div>
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5, duration: 0.8 }}
            style={{
              width: "100%",
              marginTop: "40px",
              overflowX: "hidden",
              paddingBottom: "10px",
              msOverflowStyle: "none",
              scrollbarWidth: "none",
            }}
          >
            <div
              className="services-track"
              style={{
                display: "flex",
                gap: "20px",
                width: "max-content",
                padding: "10px",
                animation: shouldReduce ? "none" : "servicesMarquee 28s linear infinite",
                willChange: "transform",
              }}
            >
              {endlessServices.map((service, index) => (
                <motion.div
                  key={`${service.title}-${index}`}
                  whileHover={{
                    y: -8,
                    scale: 1.03,
                  }}
                  onMouseEnter={() => {
                    const track = document.querySelector(".services-track");
                    if (track) {
                      (track as HTMLElement).style.animationPlayState = "paused";
                    }
                  }}
                  onMouseLeave={() => {
                    const track = document.querySelector(".services-track");
                    if (track) {
                      (track as HTMLElement).style.animationPlayState = "running";
                    }
                  }}
                  style={{
                    width: "320px",
                    minHeight: "280px",
                    padding: "24px",
                    borderRadius: "20px",
                    background: "rgba(255,255,255,0.05)",
                    backdropFilter: "blur(12px)",
                    border: "1px solid rgba(0,208,132,0.25)",
                    boxShadow: "0 10px 30px rgba(0,0,0,0.25)",
                    flexShrink: 0,
                    cursor: "pointer",
                    transition: "all 0.3s ease",
                  }}
                >
                  <div
                    style={{
                      fontSize: "2rem",
                      marginBottom: "15px",
                    }}
                  >
                    {service.icon}
                  </div>

                  <h3
                    style={{
                      fontSize: "1.15rem",
                      marginBottom: "12px",
                      color: "#00d084",
                    }}
                  >
                    {service.title}
                  </h3>

                  <p
                    style={{
                      color: "#d1d5db",
                      lineHeight: 1.6,
                      fontSize: "0.95rem",
                    }}
                  >
                    {service.description}
                  </p>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      <style jsx global>{`
        @keyframes servicesMarquee {
          from {
            transform: translateX(0);
          }
          to {
            transform: translateX(-50%);
          }
        }
      `}</style>
    </header>
  );
}



const googleStyle: React.CSSProperties = {
  background: "linear-gradient(135deg, #22d3ee 0%, #0ea5e9 45%, #2563eb 100%)",
  border: "1px solid rgba(125, 211, 252, 0.35)",
  color: "#eff6ff",
  padding: "10px 16px",
  borderRadius: 12,
  fontWeight: 700,
  cursor: "pointer",
  boxShadow: "0 10px 24px rgba(14, 165, 233, 0.25)",
};

const profileChipStyle: React.CSSProperties = {
  display: "flex",
  alignItems: "center",
  gap: 10,
  background: "linear-gradient(135deg, rgba(15, 23, 42, 0.98), rgba(30, 41, 59, 0.95))",
  border: "1px solid rgba(125, 211, 252, 0.18)",
  borderRadius: 999,
  padding: "8px 12px 8px 8px",
  color: "#fff",
  cursor: "pointer",
  boxShadow: "0 12px 24px rgba(8, 15, 35, 0.35)",
};

const profileImageStyle: React.CSSProperties = {
  width: 42,
  height: 42,
  borderRadius: "50%",
  border: "2px solid #22d3ee",
  objectFit: "cover",
  boxShadow: "0 8px 18px rgba(0, 0, 0, 0.28)",
};