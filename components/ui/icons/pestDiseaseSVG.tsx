export const PestDetectionSVG = () => {
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
      {/* Leaf/Bean Plant */}
      <path d="M12 2v6" />
      <path d="M12 8c-3.5 0-6 2.5-6 6" />
      <path d="M12 8c3.5 0 6 2.5 6 6" />
      <path d="M6 14c0 1.5 1 3 2.5 4" />
      <path d="M18 14c0 1.5-1 3-2.5 4" />

      {/* Magnifying Glass / Detection Lens */}
      <circle cx="12" cy="13" r="3" />
      <path d="M14 15l2 2" />

      {/* Pest Indicator / Warning Dot */}
      <circle cx="10" cy="12" r="1.5" fill="currentColor" />
      <circle cx="14" cy="12" r="1" fill="currentColor" />

      {/* Data/Sensor Waves */}
      <path d="M4 18c2-2 4-3 6-3" />
      <path d="M20 18c-2-2-4-3-6-3" />
      <path d="M3 20c3-2 6-3 9-3" />
      <path d="M21 20c-3-2-6-3-9-3" />

      {/* Brain/Chip Symbol for Intelligence */}
      <rect x="9.5" y="9.5" width="5" height="5" rx="1" />
      <path d="M11 10v4" />
      <path d="M13 10v4" />
      <path d="M10 11h4" />
      <path d="M10 13h4" />
    </svg>
  );
};
