export const WebSocketSVG = () => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      {/* Top arc: Server → Client (Downstream) */}
      <path d="M6 11 C6 6, 18 6, 18 11" />
      <path d="M15 10 L18 11 L15 12" />

      {/* Bottom arc: Client → Server (Upstream) */}
      <path d="M18 13 C18 18, 6 18, 6 13" />
      <path d="M9 12 L6 13 L9 14" />

      {/* Center Hub / Persistent Connection */}
      <circle cx="12" cy="12" r="2" />
      <circle cx="12" cy="12" r="5" strokeDasharray="2 3" />
    </svg>
  );
};
