export const SmartAttendanceSVG = () => {
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
      className="lucide lucide-user-check"
    >
      <path d="M16 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2" />
      <circle cx="10" cy="7" r="4" />
      <path d="M21 11l-3 3-2-2" />
    </svg>
  );
};

export const MultimodalAttendanceSVG = () => {
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
      {/* Face outline */}
      <circle cx="12" cy="8" r="4" />
      <path d="M8 16a8 8 0 0 1 8 0" />
      {/* Fingerprint swirl inside or near face */}
      <path d="M12 4C8.8 4 6 6.5 6 9c0 1.5.8 2.8 2 3.5" />
      <path d="M18 9c0-2.5-2.8-5-6-5s-6 2.5-6 5c0 1.5.8 2.8 2 3.5" />
      <path d="M14 7c0-1.5-1-2.5-2-2.5s-2 1-2 2.5" />
      {/* checkmark */}
      <path d="M20 14l-3 3-2-2" />
    </svg>
  );
};
