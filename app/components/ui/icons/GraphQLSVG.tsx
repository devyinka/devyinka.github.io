type IconType = { color: string; size: number };

export const GraphQLSVG = ({ color, size }: IconType) => {
  return (
    <svg
      role="img"
      viewBox="0 0 24 24"
      xmlns="http://www.w3.org/2000/svg"
      width={size}
      height={size}
      fill={color}
    >
      <title>GraphQL</title>
      <path d="M12 2L3 7.03v9.94L12 22l9-4.03V7.03L12 2zM12 4.18L18.6 8.09v7.45L12 19.82 5.4 15.54V8.09L12 4.18zM12 8.64a1.64 1.64 0 1 1 0 3.28a1.64 1.64 0 0 1 0-3.28zM12 16.5a1.36 1.36 0 1 1 0 2.72a1.36 1.36 0 0 1 0-2.72zM4.36 10.1a1.27 1.27 0 1 1 0 2.54a1.27 1.27 0 0 1 0-2.54zM19.64 10.1a1.27 1.27 0 1 1 0 2.54a1.27 1.27 0 0 1 0-2.54zM4.36 14.9a1.27 1.27 0 1 1 0 2.54a1.27 1.27 0 0 1 0-2.54zM19.64 14.9a1.27 1.27 0 1 1 0 2.54a1.27 1.27 0 0 1 0-2.54z" />
    </svg>
  );
};
