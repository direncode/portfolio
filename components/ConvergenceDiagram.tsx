type Props = {
  className?: string;
};

type Node = {
  id: string;
  label: string;
  sub: string;
  full?: string;
  link: string;
  href: string;
  x: number;
  y: number;
};

export function ConvergenceDiagram({ className = "" }: Props) {
  const nodes: Node[] = [
    {
      id: "btut",
      label: "BTUT",
      sub: "coordination",
      link: "btut.ai",
      href: "https://btut.ai",
      x: 40,
      y: 50,
    },
    {
      id: "crystara",
      label: "Crystara",
      sub: "structure",
      link: "github.com/direncode/tcd-jepa",
      href: "https://github.com/direncode/tcd-jepa",
      x: 40,
      y: 210,
    },
    {
      id: "niv",
      label: "NIV",
      sub: "signal",
      link: "regenerationism.ai",
      href: "https://regenerationism.ai",
      x: 640,
      y: 50,
    },
    {
      id: "pde",
      label: "PDE",
      full: "Participatory Data Estate",
      sub: "ingestion",
      link: "github.com/direncode/sguncch",
      href: "https://github.com/direncode/sguncch",
      x: 640,
      y: 210,
    },
  ];
  const center = { x: 420, y: 180 };
  const centerHalfW = 100;
  const centerHalfH = 40;

  return (
    <div
      className={`w-full overflow-hidden border border-ink-800 bg-ink-900/30 ${className}`}
      role="img"
      aria-label="Convergence diagram: four primitives feeding the Latent Ocean engine. Each node links to its external site or repository."
    >
      <svg
        viewBox="0 0 840 380"
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
        {nodes.map((n) => {
          const isLeft = n.x < center.x;
          const x1 = isLeft ? n.x + 160 : n.x;
          const y1 = n.y + 50;
          const x2 = center.x + (isLeft ? -centerHalfW : centerHalfW);
          const y2 =
            n.y < center.y ? center.y - centerHalfH + 10 : center.y + centerHalfH - 10;
          return (
            <line
              key={`edge-${n.id}`}
              x1={x1}
              y1={y1}
              x2={x2}
              y2={y2}
              stroke="#c8a25a"
              strokeOpacity="0.55"
              strokeWidth="1"
              markerEnd="url(#arrow)"
            />
          );
        })}

        {/* Nodes */}
        {nodes.map((n) => (
          <a
            key={n.id}
            href={n.href}
            target="_blank"
            rel="noopener noreferrer"
          >
            <g className="cursor-pointer">
              <rect
                x={n.x}
                y={n.y}
                width="160"
                height="100"
                fill="#121210"
                stroke="#32322d"
                strokeWidth="1"
              />
              <text
                x={n.x + 14}
                y={n.y + 28}
                fontFamily="Source Serif 4, serif"
                fontSize="18"
                fill="#eeeeec"
              >
                {n.label}
              </text>
              {n.full && (
                <text
                  x={n.x + 14}
                  y={n.y + 46}
                  fontFamily="Source Serif 4, serif"
                  fontSize="11"
                  fontStyle="italic"
                  fill="#b4b4ad"
                >
                  {n.full}
                </text>
              )}
              <text
                x={n.x + 14}
                y={n.y + (n.full ? 66 : 50)}
                fontFamily="Inter, sans-serif"
                fontSize="10"
                fill="#8a8a81"
                letterSpacing="1.6"
              >
                {n.sub.toUpperCase()}
              </text>
              <text
                x={n.x + 14}
                y={n.y + 86}
                fontFamily="JetBrains Mono, monospace"
                fontSize="10"
                fill="#c8a25a"
              >
                {n.link} ↗
              </text>
            </g>
          </a>
        ))}

        {/* Center engine */}
        <g>
          <rect
            x={center.x - centerHalfW}
            y={center.y - centerHalfH}
            width={centerHalfW * 2}
            height={centerHalfH * 2}
            fill="#1d1d1a"
            stroke="#c8a25a"
            strokeWidth="1.25"
          />
          <text
            x={center.x}
            y={center.y - 10}
            textAnchor="middle"
            fontFamily="Source Serif 4, serif"
            fontSize="19"
            fill="#eeeeec"
          >
            Latent Ocean
          </text>
          <text
            x={center.x}
            y={center.y + 14}
            textAnchor="middle"
            fontFamily="Inter, sans-serif"
            fontSize="10"
            fill="#c8a25a"
            letterSpacing="2"
          >
            HORIZONTAL INTELLIGENCE
          </text>
          <line
            x1={center.x - 70}
            y1={center.y + 26}
            x2={center.x + 70}
            y2={center.y + 26}
            stroke="url(#pulse)"
            strokeWidth="1"
          />
        </g>

        {/* Caption bands — below all boxes, evenly distributed */}
        <text
          x="40"
          y="360"
          fontFamily="Inter, sans-serif"
          fontSize="10"
          fill="#64645c"
          letterSpacing="2"
        >
          REDUCTION
        </text>
        <text
          x="250"
          y="360"
          fontFamily="Inter, sans-serif"
          fontSize="10"
          fill="#64645c"
          letterSpacing="2"
        >
          CRYSTALLIZATION
        </text>
        <text
          x="500"
          y="360"
          fontFamily="Inter, sans-serif"
          fontSize="10"
          fill="#64645c"
          letterSpacing="2"
        >
          SIGNAL
        </text>
        <text
          x="680"
          y="360"
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
