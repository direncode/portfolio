type Props = {
  className?: string;
};

export function ConvergenceDiagram({ className = "" }: Props) {
  const nodes = [
    { id: "btut", label: "BTUT", sub: "coordination", x: 80, y: 60 },
    { id: "crystara", label: "Crystara", sub: "structure", x: 80, y: 220 },
    { id: "niv", label: "NIV", sub: "signal", x: 680, y: 60 },
    { id: "pde", label: "PDE", sub: "ingestion", x: 680, y: 220 },
  ];
  const center = { x: 380, y: 140 };

  return (
    <div
      className={`w-full overflow-hidden border border-ink-800 bg-ink-900/30 ${className}`}
      role="img"
      aria-label="Convergence diagram: four primitives feeding the Latent Ocean engine"
    >
      <svg
        viewBox="0 0 760 280"
        className="w-full h-auto text-ink-300"
        xmlns="http://www.w3.org/2000/svg"
      >
        <defs>
          <marker
            id="arrow"
            viewBox="0 0 10 10"
            refX="9"
            refY="5"
            markerWidth="6"
            markerHeight="6"
            orient="auto-start-reverse"
          >
            <path d="M 0 0 L 10 5 L 0 10 z" fill="#c8a25a" />
          </marker>
          <linearGradient id="pulse" x1="0" y1="0" x2="1" y2="0">
            <stop offset="0%" stopColor="#c8a25a" stopOpacity="0.2" />
            <stop offset="50%" stopColor="#c8a25a" stopOpacity="0.9" />
            <stop offset="100%" stopColor="#c8a25a" stopOpacity="0.2" />
          </linearGradient>
        </defs>

        {/* Edges */}
        {nodes.map((n) => (
          <line
            key={n.id}
            x1={n.x + (n.x < center.x ? 110 : 0)}
            y1={n.y + 28}
            x2={center.x + (n.x < center.x ? -80 : 80)}
            y2={center.y}
            stroke="#c8a25a"
            strokeOpacity="0.55"
            strokeWidth="1"
            markerEnd="url(#arrow)"
          />
        ))}

        {/* Nodes */}
        {nodes.map((n) => (
          <g key={n.id}>
            <rect
              x={n.x}
              y={n.y}
              width="110"
              height="56"
              fill="#121210"
              stroke="#32322d"
              strokeWidth="1"
            />
            <text
              x={n.x + 14}
              y={n.y + 24}
              fontFamily="Source Serif 4, serif"
              fontSize="16"
              fill="#eeeeec"
            >
              {n.label}
            </text>
            <text
              x={n.x + 14}
              y={n.y + 44}
              fontFamily="Inter, sans-serif"
              fontSize="10"
              fill="#8a8a81"
              letterSpacing="1.6"
            >
              {n.sub.toUpperCase()}
            </text>
          </g>
        ))}

        {/* Center engine */}
        <g>
          <rect
            x={center.x - 80}
            y={center.y - 36}
            width="160"
            height="72"
            fill="#1d1d1a"
            stroke="#c8a25a"
            strokeWidth="1.25"
          />
          <text
            x={center.x}
            y={center.y - 10}
            textAnchor="middle"
            fontFamily="Source Serif 4, serif"
            fontSize="18"
            fill="#eeeeec"
          >
            Latent Ocean
          </text>
          <text
            x={center.x}
            y={center.y + 12}
            textAnchor="middle"
            fontFamily="Inter, sans-serif"
            fontSize="10"
            fill="#c8a25a"
            letterSpacing="2"
          >
            HORIZONTAL INTELLIGENCE
          </text>
          <line
            x1={center.x - 60}
            y1={center.y + 22}
            x2={center.x + 60}
            y2={center.y + 22}
            stroke="url(#pulse)"
            strokeWidth="1"
          />
        </g>

        {/* Caption bands */}
        <text
          x="40"
          y="270"
          fontFamily="Inter, sans-serif"
          fontSize="10"
          fill="#64645c"
          letterSpacing="2"
        >
          REDUCTION
        </text>
        <text
          x="260"
          y="270"
          fontFamily="Inter, sans-serif"
          fontSize="10"
          fill="#64645c"
          letterSpacing="2"
        >
          CRYSTALLIZATION
        </text>
        <text
          x="500"
          y="270"
          fontFamily="Inter, sans-serif"
          fontSize="10"
          fill="#64645c"
          letterSpacing="2"
        >
          SIGNAL
        </text>
        <text
          x="640"
          y="270"
          fontFamily="Inter, sans-serif"
          fontSize="10"
          fill="#64645c"
          letterSpacing="2"
        >
          INGESTION
        </text>
      </svg>
    </div>
  );
}
