import { ImageResponse } from "next/og";

export const alt = "Supekar Electronics — Electronics design and automation";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default function OpenGraphImage() {
  return new ImageResponse(
    (
      <div
        style={{
          display: "flex",
          width: "100%",
          height: "100%",
          flexDirection: "column",
          justifyContent: "center",
          padding: "80px",
          background: "linear-gradient(125deg, #0b132b, #1f4068)",
          color: "#f4f8fc",
          fontFamily: "Arial",
        }}
      >
        <div style={{ color: "#61f0bc", fontSize: 28, letterSpacing: 8 }}>SUPEKAR ELECTRONICS</div>
        <div style={{ marginTop: 32, fontSize: 62, fontWeight: 700 }}>
          Electronics, engineered for real life.
        </div>
        <div style={{ marginTop: 28, color: "#bdcce0", fontSize: 30 }}>
          PCB Design · IoT · Embedded Systems · Automation
        </div>
        <div style={{ marginTop: 22, color: "#61f0bc", fontSize: 24 }}>Satara, Maharashtra, India</div>
      </div>
    ),
    { ...size },
  );
}
