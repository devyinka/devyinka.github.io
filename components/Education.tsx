import { educationType } from "../types";

export const Education = ({ title, subtitle, description }: educationType) => {
  return (
    <div>
      <h3 className="text-xl inline">{title}</h3>
      <span className="text-sm text-gray-400"> ({subtitle})</span>
      <p className="text-lg text-gray-400">{description}</p>
    </div>
  );
};
