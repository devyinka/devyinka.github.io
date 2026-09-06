type IconType = { color: string; size: number };

export const ReactnativeSVG = ({ color, size }: IconType) => {
  return (
    <svg
      role="img"
      viewBox="0 0 24 24"
      xmlns="http://www.w3.org/2000/svg"
      width={size}
      fill={color}
    >
      <title>React Native</title>
      <path
        d="M128 110
           a18 18 0 1 0 0.1 0"
      />
    </svg>
  );
};
