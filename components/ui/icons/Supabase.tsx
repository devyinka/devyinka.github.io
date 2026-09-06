export const SupabaseSVG = () => {
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
      {/* Cloud shape */}
      <path d="M17.5 8.5A3.5 3.5 0 0 1 17 15H5a3 3 0 0 1 0-6h.5A4.5 4.5 0 0 1 14 6.5" />
      {/* Database cylinder */}
      <ellipse cx="12" cy="17" rx="9" ry="3" />
      <path d="M3 17v2c0 1.66 4 3 9 3s9-1.34 9-3v-2" />
      {/* Optional: small "S" letter inside the database to make it more Supabase-specific */}
      <text x="12" y="19" fontSize="8" textAnchor="middle" fill="currentColor">
        S
      </text>
    </svg>
  );
};
