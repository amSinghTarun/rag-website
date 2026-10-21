import { ImageResponse } from "next/og";

export const alt = "OG RAG — explainable local-first hybrid retrieval";
export const size = {
  width: 1200,
  height: 630,
};
export const contentType = "image/png";

export default function OpenGraphImage() {
  return new ImageResponse(
    <div
      style={{
        width: "100%",
        height: "100%",
        padding: "64px 72px",
        display: "flex",
        flexDirection: "column",
        justifyContent: "space-between",
        background: "#f2f0e8",
        backgroundImage:
          "linear-gradient(rgba(17,19,15,.06) 1px, transparent 1px), linear-gradient(90deg, rgba(17,19,15,.06) 1px, transparent 1px)",
        backgroundSize: "40px 40px",
        color: "#11130f",
        fontFamily: "Arial, sans-serif",
      }}
    >
      <div
        style={{
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
        }}
      >
        <div style={{ display: "flex", alignItems: "center", gap: 16 }}>
          <div
            style={{
              width: 58,
              height: 58,
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              borderRadius: 6,
              background: "#11130f",
              color: "#c8ff3d",
              fontSize: 24,
              fontWeight: 800,
            }}
          >
            R/
          </div>
          <div style={{ display: "flex", flexDirection: "column" }}>
            <span style={{ fontSize: 19, fontWeight: 800, letterSpacing: 2 }}>
              OG RAG
            </span>
            <span style={{ marginTop: 5, color: "#565a51", fontSize: 13 }}>
              RETRIEVAL, EXPOSED.
            </span>
          </div>
        </div>
        <div
          style={{
            padding: "10px 15px",
            border: "2px solid #11130f",
            background: "#c8ff3d",
            fontSize: 13,
            fontWeight: 800,
            letterSpacing: 1.5,
          }}
        >
          LOCAL-FIRST · HYBRID RAG
        </div>
      </div>

      <div style={{ display: "flex", alignItems: "center", gap: 68 }}>
        <div style={{ width: "58%", display: "flex", flexDirection: "column" }}>
          <span
            style={{
              fontSize: 74,
              fontWeight: 800,
              letterSpacing: -5,
              lineHeight: 0.96,
            }}
          >
            Document search with the
          </span>
          <span
            style={{
              marginTop: 10,
              color: "#3157ff",
              fontFamily: "Georgia, serif",
              fontSize: 72,
              fontStyle: "italic",
              letterSpacing: -4,
              lineHeight: 0.96,
            }}
          >
            ranking logic exposed.
          </span>
        </div>

        <div
          style={{
            width: "42%",
            padding: "26px 28px",
            display: "flex",
            flexDirection: "column",
            border: "2px solid #11130f",
            background: "#11130f",
            color: "#fffef8",
            boxShadow: "12px 12px 0 #3157ff",
          }}
        >
          <span style={{ color: "#c8ff3d", fontSize: 13, letterSpacing: 2 }}>
            RANKING FORMULA
          </span>
          <div
            style={{
              marginTop: 24,
              display: "flex",
              alignItems: "baseline",
              justifyContent: "space-between",
            }}
          >
            <span style={{ color: "#c8ff3d", fontSize: 44, fontWeight: 800 }}>
              .55
            </span>
            <span style={{ color: "#777b71", fontSize: 22 }}>+</span>
            <span style={{ color: "#c8ff3d", fontSize: 44, fontWeight: 800 }}>
              .30
            </span>
            <span style={{ color: "#777b71", fontSize: 22 }}>+</span>
            <span style={{ color: "#c8ff3d", fontSize: 44, fontWeight: 800 }}>
              .10
            </span>
            <span style={{ color: "#777b71", fontSize: 22 }}>+</span>
            <span style={{ color: "#c8ff3d", fontSize: 44, fontWeight: 800 }}>
              .05
            </span>
          </div>
          <div
            style={{
              marginTop: 8,
              display: "flex",
              justifyContent: "space-between",
              color: "#a6aa9e",
              fontSize: 10,
            }}
          >
            <span>FUSION</span>
            <span>COVERAGE</span>
            <span>HEADING</span>
            <span>PHRASE</span>
          </div>
        </div>
      </div>

      <div
        style={{
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
          borderTop: "2px solid #11130f",
          paddingTop: 19,
          fontSize: 15,
          fontWeight: 700,
          letterSpacing: 1,
        }}
      >
        <span>OPENAI · LANCEDB · SQLITE · BUN</span>
        <span>40 + 40 CANDIDATES · RRF K=60 · 8 EVIDENCE WINDOWS</span>
      </div>
    </div>,
    size,
  );
}
