import { ImageResponse } from "next/og";

export const runtime = "edge";
export const alt =
  "The returns are in the representation, not the scale — Diren Kumaratilleke";
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
          <div style={{ display: "flex" }}>Dubai</div>
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
            Nineteen · Solo · 7–9 Months
          </div>
        </div>

        {/* Title */}
        <div
          style={{
            display: "flex",
            fontSize: "62px",
            fontWeight: 700,
            lineHeight: 1.05,
            letterSpacing: "-1.5px",
            marginTop: "26px",
            color: "#c8a25a",
          }}
        >
          The returns are in the representation, not the scale.
        </div>

        {/* Subtitle */}
        <div
          style={{
            display: "flex",
            fontSize: "25px",
            color: "#d8d8d4",
            marginTop: "20px",
            maxWidth: "1020px",
            lineHeight: 1.35,
          }}
        >
          Diren Kumaratilleke — one claim, five systems that instantiate it.
        </div>

        {/* Five systems */}
        <div
          style={{
            display: "flex",
            gap: "12px",
            marginTop: "38px",
          }}
        >
          {[
            {
              name: "Latent Ocean",
              role: "GROUNDING",
              beat: "Prove absence, don't retrieve harder",
            },
            {
              name: "BTUT",
              role: "COORDINATION",
              beat: "O(N) instead of more machines",
            },
            {
              name: "Crystara",
              role: "AI TRAINING",
              beat: "Grow the architecture instead of scaling a fixed one",
            },
            {
              name: "NIV",
              role: "REGENERATIONISM",
              beat: "Does capital compound, or accumulate as friction?",
            },
            {
              name: "PDE",
              role: "DATA GOVERNANCE",
              beat: "Governance corpora auditable by construction",
            },
          ].map((p) => (
            <div
              key={p.name}
              style={{
                flex: 1,
                border: "1px solid #32322d",
                background: "#121210",
                padding: "16px",
                display: "flex",
                flexDirection: "column",
                gap: "2px",
              }}
            >
              <div
                style={{
                  display: "flex",
                  fontSize: "21px",
                  fontWeight: 700,
                  color: "#eeeeec",
                  lineHeight: 1.15,
                }}
              >
                {p.name}
              </div>
              <div
                style={{
                  display: "flex",
                  fontSize: "9px",
                  color: "#c8a25a",
                  letterSpacing: "2px",
                  marginTop: "4px",
                }}
              >
                {p.role}
              </div>
              <div
                style={{
                  display: "flex",
                  fontSize: "12px",
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
          <div style={{ display: "flex" }}>direncode.com</div>
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
