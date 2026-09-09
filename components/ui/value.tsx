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
      className="rounded-xl border border-white/5 bg-white/[0.025] p-6 transition-colors duration-300 hover:border-cyan-400/10 hover:bg-white/[0.04]"
    >
      <h3 className="font-medium text-slate-200">{title}</h3>

      <p className="mt-3 text-sm leading-relaxed text-slate-400">
        {description}
      </p>
    </motion.div>
  );
};
