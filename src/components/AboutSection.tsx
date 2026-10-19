"use client";

import { motion } from "framer-motion";
import Image from "next/image";

export default function AboutSection() {
  return (
    <section
      id="about"
      style={{
        position: "relative",
        minHeight: "100vh",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        overflow: "hidden",
        isolation: "isolate",
      }}
    >
      {/* Decorative background image. */}
      <motion.div
        initial={{ scale: 1.2 }}
        whileInView={{ scale: 1 }}
        transition={{ duration: 2, ease: "easeOut" }}
        viewport={{ once: true }}
        style={{
          position: "absolute",
          inset: 0,
          zIndex: -2,
        }}
        aria-hidden="true"
      >
        <Image
          src="/images/about-bg.jpg"
          alt=""
          fill
          sizes="100vw"
          style={{ objectFit: "cover", objectPosition: "center" }}
        />
      </motion.div>

      {/* 🌑 Dark Gradient Overlay */}
      <div
        style={{
          position: "absolute",
          inset: 0,
          background:
            "linear-gradient(to right, rgba(0,0,0,0.85), rgba(0,0,0,0.6))",
          zIndex: -1,
        }}
      />

      {/* ✨ Content Box */}
      <motion.div
        initial={{ opacity: 0, y: 80 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
        viewport={{ once: true }}
        style={{
          maxWidth: "900px",
          padding: "40px 30px",
          borderRadius: "20px",
          backdropFilter: "blur(10px)",
          background: "rgba(255,255,255,0.05)",
          border: "1px solid rgba(255,255,255,0.1)",
          boxShadow: "0 30px 80px rgba(0,0,0,0.6)",
          margin: "0 20px",
        }}
      >
        {/* Animated Heading */}
        <motion.h2
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          viewport={{ once: true }}
          style={{
            fontSize: "48px",
            marginBottom: "30px",
            letterSpacing: "1px",
            fontWeight: "600",
          }}
        >
          About Us
        </motion.h2>

        {/* Animated Paragraph */}
        <motion.p
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.4 }}
          viewport={{ once: true }}
          style={{
            fontSize: "19px",
            lineHeight: "1.9",
            color: "#ddd",
          }}
        >
          Supekar Electronics is a registered Indian electronics manufacturing and technology company specializing in Electronics Design, IoT Solutions, Embedded Systems, Automation, PCB Design, PCB Manufacturing, and Product Development. The company develops innovative and reliable products for residential, industrial, and agricultural applications with a focus on smart automation and connected technologies.

        </motion.p>
      </motion.div>
    </section>
  );
}