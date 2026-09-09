"use client";

import { useRef } from "react";
import Image from "next/image";
import Link from "next/link";
import { motion, useInView } from "framer-motion";
import { Tooltip } from "@nextui-org/tooltip";

import { ValueCard } from "@/components/ui/value";
import { ValueCardData } from "@/utils/value";
import { skills } from "@/utils/skill";
import { whoAmIData, techonologyIconList } from "@/utils";
import { iconType } from "@/types";

const slideUp = {
  hidden: {
    opacity: 0,
    y: 25,
  },

  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.5,
      ease: "easeOut",
    },
  },
};

const staggerContainer = {
  hidden: {
    opacity: 0,
  },

  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.08,
    },
  },
};

export default function Homepage() {
  const { fullName, profession, whoAmI, quote } = whoAmIData;

  return (
    <div className="relative min-h-screen overflow-x-hidden bg-[#0a0a0a] font-sans text-slate-300 selection:bg-cyan-500/30 selection:text-cyan-200">
      {/* =====================================================
          BACKGROUND EFFECTS
      ====================================================== */}

      <div className="pointer-events-none fixed inset-0 z-0 overflow-hidden">
        <div className="absolute -left-40 -top-40 h-[450px] w-[450px] rounded-full bg-cyan-500/10 blur-3xl sm:h-[550px] sm:w-[550px]" />

        <div className="absolute -bottom-40 -right-40 h-[400px] w-[400px] rounded-full bg-blue-600/10 blur-3xl sm:h-[500px] sm:w-[500px]" />
      </div>

      {/* =====================================================
          PAGE CONTAINER
      ====================================================== */}

      <div className="relative z-10 mx-auto w-full max-w-screen-xl px-4 py-8 sm:px-6 sm:py-12 md:px-12 md:py-20 lg:px-24">
        <div className="mx-auto w-full max-w-4xl">
          {/* =====================================================
              HERO
          ====================================================== */}

          <header className="mb-16 sm:mb-20">
            <motion.div
              initial="hidden"
              animate="visible"
              variants={staggerContainer}
              className="w-full overflow-hidden rounded-2xl border border-white/5 bg-white/[0.03] p-6 shadow-2xl backdrop-blur-sm sm:p-8 lg:p-12"
            >
              {/* PROFILE IMAGE */}

              <motion.div
                variants={slideUp}
                className="relative mx-auto mb-6 h-24 w-24 sm:h-28 sm:w-28 lg:mx-0"
              >
                <Image
                  src="/salam.jpg"
                  alt={`${fullName} photo`}
                  fill
                  priority
                  sizes="112px"
                  className="rounded-full border-2 border-cyan-400/30 object-cover grayscale transition-all duration-700 hover:border-cyan-400/70 hover:grayscale-0"
                />
              </motion.div>

              {/* NAME */}

              <motion.h1
                variants={slideUp}
                className="break-words text-3xl font-bold tracking-tight text-slate-100 sm:text-4xl md:text-5xl"
              >
                {fullName}
              </motion.h1>

              {/* PROFESSION */}

              <motion.h2
                variants={slideUp}
                className="mt-3 text-base font-medium tracking-tight text-cyan-400 sm:text-lg md:text-xl"
              >
                {profession}
              </motion.h2>

              {/* INTRODUCTION */}

              <motion.p
                variants={slideUp}
                className="mx-auto mt-6 max-w-2xl text-sm leading-7 text-slate-400 sm:text-base sm:leading-relaxed lg:mx-0"
              >
                {whoAmI}
              </motion.p>

              <motion.p
                variants={slideUp}
                className="mx-auto mt-7 max-w-xl border-l-2 border-cyan-400/50 pl-4 text-left text-sm italic leading-relaxed text-slate-500 lg:mx-0"
              >
                &quot;{quote}&quot;
              </motion.p>

              {/* =====================================================
                  CTA BUTTONS
              ====================================================== */}

              <motion.div
                variants={slideUp}
                className="mt-8 flex w-full flex-col gap-3 sm:flex-row sm:items-center lg:justify-start"
              >
                <Link
                  href="/projects"
                  className="inline-flex w-full items-center justify-center gap-2 rounded-full bg-cyan-500 px-6 py-3 text-sm font-semibold text-slate-950 transition-all duration-300 hover:bg-cyan-400 hover:shadow-[0_0_25px_rgba(34,211,238,0.2)] sm:w-auto"
                >
                  View My Projects
                  <span>→</span>
                </Link>

                <Link
                  href="/about"
                  className="inline-flex w-full items-center justify-center gap-2 rounded-full border border-white/10 bg-white/[0.03] px-6 py-3 text-sm font-medium text-slate-300 transition-all duration-300 hover:border-cyan-400/30 hover:bg-cyan-400/5 hover:text-cyan-300 sm:w-auto"
                >
                  About Me
                </Link>
              </motion.div>
            </motion.div>
          </header>

          {/* =====================================================
              MAIN CONTENT
          ====================================================== */}

          <main className="flex flex-col gap-16 sm:gap-20">
            {/* =====================================================
                WHAT I DO
            ====================================================== */}

            <Section>
              <SectionHeading>What I Do</SectionHeading>

              <div className="grid grid-cols-1 gap-4 sm:gap-5 md:grid-cols-2">
                {ValueCardData.map((value, index) => (
                  <ValueCard
                    key={index}
                    title={value.title}
                    description={value.description}
                  />
                ))}
              </div>

              <Divider />
            </Section>

            {/* =====================================================
                SECURITY MINDSET
            ====================================================== */}

            <Section>
              <SectionHeading>Security Mindset</SectionHeading>

              <div className="w-full overflow-hidden rounded-2xl border border-emerald-400/10 bg-emerald-400/[0.025] p-5 sm:p-7 md:p-8">
                <div className="flex flex-col gap-5 sm:gap-6 md:flex-row md:items-start">
                  {/* SECURITY ICON */}

                  <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl border border-emerald-400/20 bg-emerald-400/10 text-lg text-emerald-300 sm:h-12 sm:w-12 sm:text-xl">
                    ◈
                  </div>

                  <div className="min-w-0">
                    <h3 className="text-base font-semibold leading-6 text-slate-200 sm:text-lg">
                      Security is part of the development process
                    </h3>

                    <p className="mt-3 text-sm leading-6 text-slate-400">
                      I believe applications should not only work correctly, but
                      should also be designed with security in mind. I apply
                      security-conscious practices during development while
                      continuously expanding my knowledge of ethical hacking and
                      penetration testing.
                    </p>

                    {/* SECURITY SKILLS */}

                    <div className="mt-5 flex flex-wrap gap-2">
                      {[
                        "Authentication",
                        "Authorization",
                        "Input Validation",
                        "API Security",
                        "Secure Data Handling",
                        "OWASP Awareness",
                        "Ethical Hacking",
                        "Penetration Testing",
                      ].map((securitySkill) => (
                        <span
                          key={securitySkill}
                          className="rounded-full border border-emerald-400/10 bg-emerald-400/5 px-3 py-1.5 text-[11px] leading-4 text-emerald-300 sm:text-xs"
                        >
                          {securitySkill}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              </div>

              <Divider />
            </Section>

            {/* =====================================================
                CORE TECHNOLOGIES
            ====================================================== */}

            <Section>
              <SectionHeading>Core Technologies</SectionHeading>

              <ul className="flex flex-wrap gap-2 sm:gap-3">
                {techonologyIconList.map(
                  ({ name, icon }: iconType, index: number) => (
                    <Tooltip key={index} content={name} placement="top">
                      <motion.li
                        whileHover={{
                          scale: 1.04,
                          y: -2,
                        }}
                        whileTap={{
                          scale: 0.96,
                        }}
                        className="flex max-w-full cursor-default items-center gap-2 rounded-full bg-cyan-400/10 px-3 py-2 text-xs font-medium text-cyan-300 ring-1 ring-inset ring-cyan-400/20 transition-shadow hover:shadow-[0_0_20px_rgba(34,211,238,0.15)] sm:px-4 sm:text-sm"
                      >
                        <span className="shrink-0 text-base sm:text-xl">
                          {icon}
                        </span>

                        <span className="truncate">{name}</span>
                      </motion.li>
                    </Tooltip>
                  ),
                )}
              </ul>

              <Divider />
            </Section>

            {/* =====================================================
                ENGINEERING BACKGROUND
            ====================================================== */}

            <Section>
              <SectionHeading>Engineering Background</SectionHeading>

              <div className="relative overflow-hidden">
                {/* TIMELINE */}

                <div className="absolute bottom-0 left-2.5 top-0 w-px bg-gradient-to-b from-cyan-400/40 via-slate-700/40 to-transparent sm:left-3" />

                <div className="relative pl-8 sm:pl-10">
                  {/* TIMELINE DOT */}

                  <div className="absolute left-[6px] top-1.5 h-1.5 w-1.5 rounded-full bg-cyan-400 shadow-[0_0_10px_rgba(34,211,238,0.5)] sm:left-[5px] sm:h-2 sm:w-2" />

                  <p className="text-xs font-semibold uppercase tracking-wider text-cyan-400 sm:text-sm">
                    Telecommunication Engineering
                  </p>

                  <h3 className="mt-2 text-lg font-semibold leading-7 text-slate-200 sm:text-xl">
                    Systems Thinking Beyond Software
                  </h3>

                  <p className="mt-3 max-w-3xl text-sm leading-6 text-slate-400 sm:mt-4">
                    My engineering background gives me a broader understanding
                    of computer networks, communication systems, embedded
                    devices, and connected technologies. This perspective helps
                    me understand not only the software layer, but also how
                    systems communicate and operate in the real world.
                  </p>

                  {/* ENGINEERING SKILLS */}

                  <div className="mt-5 flex flex-wrap gap-2">
                    {[
                      "Computer Networks",
                      "Communication Systems",
                      "Embedded Systems",
                      "IoT",
                      "Connected Devices",
                    ].map((engineeringSkill) => (
                      <span
                        key={engineeringSkill}
                        className="rounded-full border border-blue-400/10 bg-blue-400/5 px-3 py-1.5 text-[11px] leading-4 text-blue-300 sm:text-xs"
                      >
                        {engineeringSkill}
                      </span>
                    ))}
                  </div>
                </div>
              </div>

              <Divider />
            </Section>

            {/* =====================================================
                WHAT I BRING
            ====================================================== */}

            <Section>
              <SectionHeading>What I Bring</SectionHeading>

              <div className="grid grid-cols-1 gap-4 sm:gap-5 md:grid-cols-3">
                <ValueCard
                  title="Full-Stack Thinking"
                  description="I understand how frontend interfaces, backend services, APIs, databases, and users fit together as one complete system."
                />

                <ValueCard
                  title="Security Mindset"
                  description="I consider security during development and continuously build my skills in ethical hacking and penetration testing."
                />

                <ValueCard
                  title="Systems Perspective"
                  description="My engineering background helps me approach software problems with an understanding of networks, devices, and system interactions."
                />
              </div>
            </Section>

            {/* =====================================================
                FINAL CTA
            ====================================================== */}

            <motion.section
              initial={{
                opacity: 0,
                y: 25,
              }}
              whileInView={{
                opacity: 1,
                y: 0,
              }}
              transition={{
                duration: 0.6,
              }}
              viewport={{
                once: true,
              }}
              className="pb-6 pt-2 sm:pb-10 sm:pt-4"
            >
              <div className="w-full overflow-hidden rounded-2xl border border-cyan-400/10 bg-cyan-400/[0.03] p-6 text-center sm:p-8 md:p-10">
                <p className="text-xs font-medium uppercase tracking-[0.2em] text-cyan-400 sm:text-sm sm:tracking-widest">
                  Let&apos;s build something useful
                </p>

                <h2 className="mt-3 text-xl font-semibold leading-8 text-slate-100 sm:text-2xl md:text-3xl">
                  Explore what I&apos;ve built.
                </h2>

                <p className="mx-auto mt-3 max-w-xl text-sm leading-6 text-slate-400">
                  Take a look at my projects to see how I apply software
                  engineering, systems thinking, and security-conscious
                  development to real-world problems.
                </p>

                <div className="mt-6">
                  <Link
                    href="/projects"
                    className="inline-flex w-full items-center justify-center gap-2 rounded-full border border-cyan-400/20 bg-cyan-400/10 px-6 py-3 text-sm font-medium text-cyan-300 transition-all duration-300 hover:bg-cyan-400/20 sm:w-auto"
                  >
                    Explore Projects
                    <span>→</span>
                  </Link>
                </div>
              </div>
            </motion.section>
          </main>
        </div>
      </div>
    </div>
  );
}

/* =====================================================
   SECTION
===================================================== */

const Section = ({ children }: { children: React.ReactNode }) => {
  const ref = useRef(null);

  const isInView = useInView(ref, {
    once: true,
    margin: "-80px 0px",
  });

  return (
    <motion.section
      ref={ref}
      initial={{
        opacity: 0,
        y: 30,
      }}
      animate={
        isInView
          ? {
              opacity: 1,
              y: 0,
            }
          : {
              opacity: 0,
              y: 30,
            }
      }
      transition={{
        duration: 0.6,
        ease: "easeOut",
      }}
      className="w-full"
    >
      {children}
    </motion.section>
  );
};

/* =====================================================
   SECTION HEADING
===================================================== */

const SectionHeading = ({ children }: { children: React.ReactNode }) => {
  return (
    <h3 className="mb-5 text-xs font-bold uppercase tracking-[0.18em] text-slate-500 sm:mb-6 sm:text-sm sm:tracking-widest">
      {children}
    </h3>
  );
};

/* =====================================================
   DIVIDER
===================================================== */

const Divider = () => (
  <div className="mt-12 h-px w-full bg-gradient-to-r from-transparent via-slate-700/30 to-transparent sm:mt-16" />
);
