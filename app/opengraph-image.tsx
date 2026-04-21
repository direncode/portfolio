import { ImageResponse } from "next/og";

export const runtime = "edge";
export const alt =
  "Diren Kumaratilleke — Horizontal Intelligence Primitives";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default async function Image() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          background: "#0a0a09",
          color: "#eeeeec",
          display: "flex",
          flexDirection: "column",
          padding: "64px 72px",
          position: "relative",
        }}
      >
        {/* Eyebrow */}
        <div
          style={{
            display: "flex",
            alignItems: "center",
            gap: "14px",
            color: "#c8a25a",
            fontSize: "15px",
            letterSpacing: "5px",
            textTransform: "uppercase",
          }}
        >
          <div style={{ display: "flex" }}>Manifesto</div>
          <div
            style={{
              width: "36px",
              height: "1px",
              background: "#c8a25a",
              opacity: 0.6,
              display: "flex",
            }}
          />
          <div style={{ display: "flex" }}>
            Horizontal Intelligence Primitives
          </div>
        </div>

        {/* Title */}
        <div
          style={{
            display: "flex",
            fontSize: "92px",
            fontWeight: 700,
            lineHeight: 1.0,
            letterSpacing: "-2px",
            marginTop: "30px",
          }}
        >
          Diren Kumaratilleke
        </div>

        {/* Subtitle */}
        <div
          style={{
            display: "flex",
            fontSize: "26px",
            color: "#d8d8d4",
            marginTop: "24px",
            maxWidth: "1000px",
            lineHeight: 1.35,
          }}
        >
          Nineteen. Solo. One year. Four primitives across four subfields.
        </div>

        {/* Four-primitive grid */}
        <div
          style={{
            display: "flex",
            gap: "14px",
            marginTop: "44px",
          }}
        >
          {[
            {
              name: "BTUT",
              role: "COORDINATION",
              beat: "New approach to DARPA Challenge 13 · cross-domain",
            },
            {
              name: "Crystara",
              role: "STRUCTURE",
              beat: "Beats JEPA + GAT/GCN · +36.6 AUC pts",
            },
            {
              name: "NIV",
              role: "SIGNAL",
              beat: "Beats Fed yield curve · 41.71% orthogonal",
            },
            {
              name: "PDE",
              role: "INGESTION",
              beat: "Participatory Data Estate · federal-hardening",
            },
          ].map((p) => (
            <div
              key={p.name}
              style={{
                flex: 1,
                border: "1px solid #32322d",
                background: "#121210",
                padding: "22px",
                display: "flex",
                flexDirection: "column",
                gap: "4px",
              }}
            >
              <div
                style={{
                  display: "flex",
                  fontSize: "30px",
                  fontWeight: 700,
                  color: "#eeeeec",
                }}
              >
                {p.name}
              </div>
              <div
                style={{
                  display: "flex",
                  fontSize: "11px",
                  color: "#c8a25a",
                  letterSpacing: "3px",
                  marginTop: "2px",
                }}
              >
                {p.role}
              </div>
              <div
                style={{
                  display: "flex",
                  fontSize: "14px",
                  color: "#b4b4ad",
                  marginTop: "10px",
                  lineHeight: 1.35,
                }}
              >
                {p.beat}
              </div>
            </div>
          ))}
        </div>

        {/* Footer */}
        <div
          style={{
            position: "absolute",
            bottom: "36px",
            left: "72px",
            right: "72px",
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
            color: "#64645c",
            fontSize: "14px",
            letterSpacing: "2.5px",
            textTransform: "uppercase",
          }}
        >
          <div style={{ display: "flex" }}>diren.vercel.app</div>
          <div style={{ display: "flex", color: "#c8a25a" }}>
            The tape is the argument
          </div>
        </div>
      </div>
    ),
    {
      ...size,
    }
  );
}
