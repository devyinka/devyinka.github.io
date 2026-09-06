"use client";
import { useRef } from "react";
import Image from "next/image";
import Link from "next/link";
import { motion, useInView } from "framer-motion";
import { whoAmIData, techonologyIconList, educationList } from "@/utils";
import { iconType, educationType } from "@/types";
import { Tooltip } from "@nextui-org/tooltip";

const slideUp = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.5, ease: "easeOut" } },
};

const staggerContainer = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.08 },
  },
};

export default function Homepage() {
  const { fullName, profession, whoAmI, quote } = whoAmIData;

  return (
    <div className="bg-[#0a0a0a] min-h-screen text-slate-300 font-sans selection:bg-cyan-500/30 selection:text-cyan-200 relative overflow-x-hidden">
      {/* Background Blurs - unchanged */}
      <div className="pointer-events-none fixed inset-0 z-0">
        <div className="absolute top-[-20%] left-[-10%] h-[600px] w-[600px] rounded-full bg-cyan-500/10 blur-3xl animate-pulse" />
        <div className="absolute bottom-[-20%] right-[-10%] h-[500px] w-[500px] rounded-full bg-blue-600/10 blur-3xl animate-pulse delay-1000" />
      </div>

      <div className="relative z-10 mx-auto max-w-screen-xl px-6 py-12 md:px-12 md:py-20 lg:px-24">
        <div className="max-w-3xl mx-auto">
          <header className="mb-16 lg:mb-20">
            <motion.div
              initial="hidden"
              animate="visible"
              variants={staggerContainer}
              className="bg-white/[0.03] backdrop-blur-sm rounded-2xl p-8 lg:p-12 border border-white/5 shadow-2xl text-center lg:text-left"
            >
              <motion.div
                variants={slideUp}
                className="relative w-28 h-28 mx-auto lg:mx-0 mb-6"
              >
                <Image
                  src="/salam.jpg"
                  alt={`${fullName} photo`}
                  fill
                  className="rounded-full object-cover grayscale hover:grayscale-0 transition-all duration-700 border-2 border-cyan-400/30 hover:border-cyan-400/70 shadow-xl"
                />
              </motion.div>

              <motion.h1
                variants={slideUp}
                className="text-4xl font-bold tracking-tight text-slate-100 sm:text-5xl"
              >
                {fullName}
              </motion.h1>

              <motion.h2
                variants={slideUp}
                className="mt-2 text-lg font-medium tracking-tight text-cyan-400 sm:text-xl"
              >
                {profession}
              </motion.h2>

              <motion.p
                variants={slideUp}
                className="mt-6 max-w-md mx-auto lg:mx-0 leading-relaxed text-slate-400 italic border-l-2 border-cyan-400/50 pl-4"
              >
                &#34;{quote}&#34;
              </motion.p>

              <motion.div
                variants={slideUp}
                className="mt-8 h-px w-16 bg-gradient-to-r from-cyan-400/50 to-transparent mx-auto lg:mx-0"
              />
            </motion.div>
          </header>

          <main className="flex flex-col gap-16 lg:gap-20">
            <Section>
              <h3 className="text-sm font-bold uppercase tracking-widest text-slate-500 mb-6">
                About
              </h3>
              <p className="text-lg leading-relaxed text-slate-300">{whoAmI}</p>
              <Divider />
            </Section>

            <Section>
              <h3 className="text-sm font-bold uppercase tracking-widest text-slate-500 mb-6">
                Core Technologies
              </h3>
              <ul className="flex flex-wrap gap-4">
                {techonologyIconList.map(
                  ({ name, icon }: iconType, index: number) => (
                    <Tooltip key={index} content={name} placement="top">
                      <motion.li
                        whileHover={{ scale: 1.05, y: -2 }}
                        whileTap={{ scale: 0.95 }}
                        className="flex items-center gap-2 rounded-full bg-cyan-400/10 px-4 py-2 text-sm font-medium text-cyan-300 ring-1 ring-inset ring-cyan-400/20 cursor-default transition-shadow hover:shadow-[0_0_20px_rgba(34,211,238,0.15)]"
                      >
                        <span className="text-xl">{icon}</span>
                        <span>{name}</span>
                      </motion.li>
                    </Tooltip>
                  ),
                )}
              </ul>
              <Divider />
            </Section>

            <Section>
              <h3 className="text-sm font-bold uppercase tracking-widest text-slate-500 mb-6">
                Education & Trajectory
              </h3>
              <div className="group/list flex flex-col gap-12">
                {educationList.map((item: educationType, index: number) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.4, delay: index * 0.1 }}
                    viewport={{ once: true }}
                    className="group relative grid pb-1 sm:grid-cols-8 sm:gap-8 md:gap-4 lg:hover:!opacity-100 lg:group-hover/list:opacity-60 transition-opacity duration-300"
                  >
                    <div className="absolute -inset-x-4 -inset-y-4 z-0 hidden rounded-xl transition motion-reduce:transition-none lg:-inset-x-6 lg:block lg:group-hover:bg-white/5"></div>

                    <header className="z-10 mb-2 mt-1 text-xs font-semibold uppercase tracking-wide text-slate-500 sm:col-span-2">
                      {item.years}
                    </header>
                    <div className="z-10 sm:col-span-6">
                      <h3 className="font-medium leading-snug text-slate-200">
                        {item.career}
                      </h3>
                      <p className="mt-2 text-sm leading-relaxed text-slate-400">
                        {item.description}
                      </p>
                    </div>
                  </motion.div>
                ))}
              </div>
            </Section>

            {/* CTA BUTTON - now naturally at the bottom, no extra positioning */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              viewport={{ once: true }}
              className="flex justify-center pt-4 pb-8 w-full"
            >
              <Link
                href="/about"
                className="inline-flex items-center gap-3 px-8 py-3 rounded-full bg-cyan-900/20 text-cyan-400 hover:bg-cyan-900/40 hover:text-cyan-300 font-medium transition-all group border border-cyan-900/50 shadow-lg"
              >
                Discover My Journey
                <span className="group-hover:translate-x-1 transition-transform">
                  →
                </span>
              </Link>
            </motion.div>
          </main>
        </div>
      </div>
    </div>
  );
}

// Helper components remain exactly the same
const Section = ({ children }: { children: React.ReactNode }) => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-80px 0px" });

  return (
    <motion.section
      ref={ref}
      initial={{ opacity: 0, y: 30 }}
      animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
      transition={{ duration: 0.6, ease: "easeOut" }}
      className="w-full"
    >
      {children}
    </motion.section>
  );
};

const Divider = () => (
  <div className="mt-16 h-px w-full bg-gradient-to-r from-transparent via-slate-700/30 to-transparent" />
);
