"use client";
import { motion, useReducedMotion } from "framer-motion";
import Image from "next/image";
import { FaEnvelope, FaPhone, FaLinkedin, FaInstagram } from "react-icons/fa";

export default function FounderSection() {
  const shouldReduce = useReducedMotion();

  return (
    <section
      id="founder"
      className="bg-combined bg-pulse"
      style={{
        textAlign: "center",
        padding: "90px 5%",
        position: "relative",
        overflow: "hidden",
      }}
    >
      <motion.div
        initial={shouldReduce ? {} : { opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: shouldReduce ? 0 : 1 }}
        viewport={{ once: true }}
      >
        <motion.div
          whileHover={{ scale: 1.05 }}
          animate={shouldReduce ? undefined : { y: [0, -10, 0] }}
          transition={
            shouldReduce
              ? undefined
              : { duration: 4, repeat: Infinity, ease: "easeInOut" }
          }
          style={{
            width: 220,
            height: 220,
            borderRadius: "50%",
            overflow: "hidden",
            margin: "0 auto 30px",
            boxShadow: "0 25px 60px rgba(0,0,0,0.6)",
            border: "3px solid rgba(0,255,136,0.7)",
            position: "relative",
          }}
        >
          <Image
            src="/images/founder.png"
            alt="Founder"
            fill
            priority
            style={{
              objectFit: "cover",
              objectPosition: "center top",
            }}
          />
        </motion.div>

        {/* Name */}
        <motion.h2
          initial={shouldReduce ? {} : { opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2, duration: 0.8 }}
          style={{
            fontSize: "44px",
            fontWeight: 600,
            letterSpacing: "1px",
            marginBottom: "10px",
          }}
        >
          Mr. Prathamesh Supekar
        </motion.h2>

        {/* Accent Line */}
        <motion.div
          initial={{ width: 0 }}
          whileInView={{ width: "90px" }}
          transition={{ delay: 0.3, duration: 0.8 }}
          style={{
            height: "4px",
            background: "#00ff88",
            margin: "0 auto 20px",
            borderRadius: "2px",
          }}
        />

        {/* Role */}
        <motion.h3
          initial={shouldReduce ? {} : { opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ delay: 0.4, duration: 0.8 }}
          style={{
            fontSize: "20px",
            color: "#ccc",
            marginBottom: "20px",
            fontWeight: 400,
          }}
        >
          Founder & CEO
        </motion.h3>

        {/* Email */}
        <motion.a
          href="mailto:prathameshsupekar2804@gmail.com"
          initial={shouldReduce ? {} : { opacity: 0, y: 15 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.5, duration: 0.8 }}
          whileHover={{ scale: 1.05 }}
          style={{
            display: "inline-flex",
            alignItems: "center",
            gap: "10px",
            padding: "10px 20px",
            background: "rgba(0,255,136,0.1)",
            border: "1px solid rgba(0,255,136,0.5)",
            borderRadius: "30px",
            textDecoration: "none",
            color: "#00ff88",
            fontSize: "16px",
            marginBottom: "15px",
          }}
        >
          <FaEnvelope />
          prathameshsupekar2804@gmail.com
        </motion.a>

        <br />

        {/* LinkedIn */}
        <motion.a
          href="https://www.linkedin.com/in/prathamesh-supekar-9a8037256"
          target="_blank"
          rel="noreferrer"
          initial={shouldReduce ? {} : { opacity: 0, y: 15 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.6, duration: 0.8 }}
          whileHover={{ scale: 1.05 }}
          style={{
            display: "inline-flex",
            alignItems: "center",
            gap: "10px",
            padding: "10px 20px",
            background: "rgba(0,255,136,0.1)",
            border: "1px solid rgba(0,255,136,0.5)",
            borderRadius: "30px",
            textDecoration: "none",
            color: "#00ff88",
            fontSize: "16px",
            marginBottom: "15px",
          }}
        >
          <FaLinkedin />
          LinkedIn Profile
        </motion.a>

        <br />

        {/* Instagram */}
        <motion.a
          href="https://www.instagram.com/prathamesh2804_?igsh=MXJzMHUyb21idzB0bA=="
          target="_blank"
          rel="noreferrer"
          initial={shouldReduce ? {} : { opacity: 0, y: 15 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.65, duration: 0.8 }}
          whileHover={{ scale: 1.05 }}
          style={{
            display: "inline-flex",
            alignItems: "center",
            gap: "10px",
            padding: "10px 20px",
            background: "rgba(0,255,136,0.1)",
            border: "1px solid rgba(0,255,136,0.5)",
            borderRadius: "30px",
            textDecoration: "none",
            color: "#00ff88",
            fontSize: "16px",
            marginBottom: "15px",
          }}
        >
          <FaInstagram />
          Instagram Profile
        </motion.a>

        <br />

        {/* Phone */}
        <motion.a
          href="tel:8459672618"
          initial={shouldReduce ? {} : { opacity: 0, y: 15 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.6, duration: 0.8 }}
          whileHover={{ scale: 1.05 }}
          style={{
            display: "inline-flex",
            alignItems: "center",
            gap: "10px",
            padding: "10px 20px",
            background: "rgba(0,255,136,0.1)",
            border: "1px solid rgba(0,255,136,0.5)",
            borderRadius: "30px",
            textDecoration: "none",
            color: "#00ff88",
            fontSize: "16px",
            marginBottom: "30px",
          }}
        >
          <FaPhone />
          +91 84596 72618
        </motion.a>

        {/* Vision Statement */}
        <motion.p
          initial={shouldReduce ? {} : { opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.7, duration: 0.9 }}
          style={{
            maxWidth: "750px",
            margin: "0 auto",
            fontSize: "18px",
            lineHeight: "1.8",
            color: "#ddd",
          }}
        >
          "Our mission is to deliver innovative Electronics, IoT, and Automation solutions that simplify everyday life through smart, reliable, and locally engineered technology."
        </motion.p>
      </motion.div>
    </section>
  );
}
