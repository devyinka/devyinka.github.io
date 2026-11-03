import { motion } from "framer-motion";

export const ValueCard = ({
  title,
  description,
}: {
  title: string;
  description: string;
}) => {
  return (
    <motion.div
      whileHover={{
        y: -4,
      }}
      transition={{
        duration: 0.2,
      }}
      className="glass-surface rounded-xl p-6 transition-colors duration-300 hover:border-cyan-300/30 hover:bg-cyan-400/[0.06]"
    >
      <h3 className="font-medium text-slate-200">{title}</h3>

      <p className="mt-3 text-sm leading-relaxed text-slate-400">
        {description}
      </p>
    </motion.div>
  );
};
