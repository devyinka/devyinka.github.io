"use client";

import { useRef } from "react";
import Image from "next/image";
import Link from "next/link";
import { motion, useInView } from "framer-motion";
import { ValueCard } from "@/components/ui/value";
import { ValueCardData } from "@/utils/value";
import { Tooltip } from "@nextui-org/tooltip";
import { skills } from "@/utils/skill";

import { whoAmIData, techonologyIconList } from "@/utils";
import { iconType } from "@/types";

const slideUp = {
  hidden: {
    opacity: 0,
    y: 30,
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
      {/* Background Effects */}
      <div className="pointer-events-none fixed inset-0 z-0">
        <div className="absolute left-[-10%] top-[-20%] h-[600px] w-[600px] animate-pulse rounded-full bg-cyan-500/10 blur-3xl" />

        <div className="absolute bottom-[-20%] right-[-10%] h-[500px] w-[500px] animate-pulse rounded-full bg-blue-600/10 blur-3xl [animation-delay:1000ms]" />
      </div>

      <div className="relative z-10 mx-auto max-w-screen-xl px-6 py-12 md:px-12 md:py-20 lg:px-24">
        <div className="mx-auto max-w-4xl">
          {/* =====================================================
              HERO
          ====================================================== */}
          <header className="mb-20">
            <motion.div
              initial="hidden"
              animate="visible"
              variants={staggerContainer}
              className="rounded-2xl border border-white/5 bg-white/[0.03] p-8 text-center shadow-2xl backdrop-blur-sm lg:p-12 lg:text-left"
            >
              {/* Profile Image */}
              <motion.div
                variants={slideUp}
                className="relative mx-auto mb-6 h-28 w-28 lg:mx-0"
              >
                <Image
                  src="/salam.jpg"
                  alt={`${fullName} photo`}
                  fill
                  priority
                  className="rounded-full border-2 border-cyan-400/30 object-cover grayscale transition-all duration-700 hover:border-cyan-400/70 hover:grayscale-0"
                />
              </motion.div>

              {/* Name */}
              <motion.h1
                variants={slideUp}
                className="text-4xl font-bold tracking-tight text-slate-100 sm:text-5xl"
              >
                {fullName}
              </motion.h1>

              {/* Profession */}
              <motion.h2
                variants={slideUp}
                className="mt-3 text-lg font-medium tracking-tight text-cyan-400 sm:text-xl"
              >
                {profession}
              </motion.h2>

              {/* Introduction */}
              <motion.p
                variants={slideUp}
                className="mx-auto mt-6 max-w-2xl text-base leading-relaxed text-slate-400 lg:mx-0"
              >
                {whoAmI}
              </motion.p>

              {/* Main Technologies */}
              <motion.div
                variants={slideUp}
                className="mt-8 flex flex-wrap justify-center gap-2 lg:justify-start"
              >
                {skills.map((technology) => (
                  <span
                    key={technology}
                    className="rounded-full border border-cyan-400/10 bg-cyan-400/5 px-3 py-1.5 text-xs font-medium text-cyan-300"
                  >
                    {technology}
                  </span>
                ))}
              </motion.div>

              {/* Security / Engineering Badge */}
              <motion.div
                variants={slideUp}
                className="mt-6 flex flex-wrap justify-center gap-2 lg:justify-start"
              >
                <span className="rounded-full border border-emerald-400/10 bg-emerald-400/5 px-3 py-1.5 text-xs font-medium text-emerald-300">
                  Security-Minded Development
                </span>

                <span className="rounded-full border border-blue-400/10 bg-blue-400/5 px-3 py-1.5 text-xs font-medium text-blue-300">
                  Networking & IoT
                </span>

                <span className="rounded-full border border-purple-400/10 bg-purple-400/5 px-3 py-1.5 text-xs font-medium text-purple-300">
                  Ethical Hacking · Learning
                </span>
              </motion.div>

              {/* Quote */}
              <motion.p
                variants={slideUp}
                className="mx-auto mt-8 max-w-xl border-l-2 border-cyan-400/50 pl-4 text-sm italic leading-relaxed text-slate-500 lg:mx-0"
              >
                &quot;{quote}&quot;
              </motion.p>

              {/* CTA */}
              <motion.div
                variants={slideUp}
                className="mt-9 flex flex-col justify-center gap-3 sm:flex-row lg:justify-start"
              >
                <Link
                  href="/projects"
                  className="inline-flex items-center justify-center gap-2 rounded-full bg-cyan-500 px-6 py-3 text-sm font-semibold text-slate-950 transition-all duration-300 hover:bg-cyan-400 hover:shadow-[0_0_25px_rgba(34,211,238,0.2)]"
                >
                  View My Projects
                  <span>→</span>
                </Link>

                <Link
                  href="/about"
                  className="inline-flex items-center justify-center gap-2 rounded-full border border-white/10 bg-white/[0.03] px-6 py-3 text-sm font-medium text-slate-300 transition-all duration-300 hover:border-cyan-400/30 hover:bg-cyan-400/5 hover:text-cyan-300"
                >
                  About Me
                </Link>
              </motion.div>
            </motion.div>
          </header>

          <main className="flex flex-col gap-20">
            {/* =====================================================
                WHAT I DO
            ====================================================== */}
            <Section>
              <SectionHeading>What I Do</SectionHeading>

              <div className="grid gap-5 md:grid-cols-2">
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
                SECURITY
            ====================================================== */}
            <Section>
              <SectionHeading>Security Mindset</SectionHeading>

              <div className="rounded-2xl border border-emerald-400/10 bg-emerald-400/[0.025] p-7 sm:p-8">
                <div className="flex flex-col gap-6 md:flex-row md:items-start">
                  {/* Icon */}
                  <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl border border-emerald-400/20 bg-emerald-400/10 text-xl text-emerald-300">
                    ◈
                  </div>

                  <div>
                    <h3 className="text-lg font-semibold text-slate-200">
                      Security is part of the development process
                    </h3>

                    <p className="mt-3 text-sm leading-relaxed text-slate-400">
                      I believe applications should not only work correctly, but
                      should also be designed with security in mind. I apply
                      security-conscious practices during development while
                      continuously expanding my knowledge of ethical hacking and
                      penetration testing.
                    </p>

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
                      ].map((skill) => (
                        <span
                          key={skill}
                          className="rounded-full border border-emerald-400/10 bg-emerald-400/5 px-3 py-1.5 text-xs text-emerald-300"
                        >
                          {skill}
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

              <ul className="flex flex-wrap gap-3">
                {techonologyIconList.map(
                  ({ name, icon }: iconType, index: number) => (
                    <Tooltip key={index} content={name} placement="top">
                      <motion.li
                        whileHover={{
                          scale: 1.05,
                          y: -2,
                        }}
                        whileTap={{
                          scale: 0.95,
                        }}
                        className="flex cursor-default items-center gap-2 rounded-full bg-cyan-400/10 px-4 py-2 text-sm font-medium text-cyan-300 ring-1 ring-inset ring-cyan-400/20 transition-shadow hover:shadow-[0_0_20px_rgba(34,211,238,0.15)]"
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

            {/* =====================================================
                ENGINEERING BACKGROUND
            ====================================================== */}
            <Section>
              <SectionHeading>Engineering Background</SectionHeading>

              <div className="relative">
                {/* Timeline Line */}
                <div className="absolute bottom-0 left-3 top-0 w-px bg-gradient-to-b from-cyan-400/40 via-slate-700/40 to-transparent" />

                <div className="relative pl-10">
                  {/* Timeline Dot */}
                  <div className="absolute left-[5px] top-1.5 h-2 w-2 rounded-full bg-cyan-400 shadow-[0_0_10px_rgba(34,211,238,0.5)]" />

                  <p className="text-sm font-semibold uppercase tracking-wider text-cyan-400">
                    Telecommunication Engineering
                  </p>

                  <h3 className="mt-2 text-xl font-semibold text-slate-200">
                    Systems Thinking Beyond Software
                  </h3>

                  <p className="mt-4 max-w-3xl text-sm leading-relaxed text-slate-400">
                    My engineering background gives me a broader understanding
                    of computer networks, communication systems, embedded
                    devices, and connected technologies. This perspective helps
                    me understand not only the software layer, but also how
                    systems communicate and operate in the real world.
                  </p>

                  <div className="mt-5 flex flex-wrap gap-2">
                    {[
                      "Computer Networks",
                      "Communication Systems",
                      "Embedded Systems",
                      "IoT",
                      "Connected Devices",
                    ].map((skill) => (
                      <span
                        key={skill}
                        className="rounded-full border border-blue-400/10 bg-blue-400/5 px-3 py-1.5 text-xs text-blue-300"
                      >
                        {skill}
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

              <div className="grid gap-5 md:grid-cols-3">
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
              className="pb-10 pt-4"
            >
              <div className="rounded-2xl border border-cyan-400/10 bg-cyan-400/[0.03] p-8 text-center sm:p-10">
                <p className="text-sm font-medium uppercase tracking-widest text-cyan-400">
                  Let&apos;s build something useful
                </p>

                <h2 className="mt-3 text-2xl font-semibold text-slate-100 sm:text-3xl">
                  Explore what I&apos;ve built.
                </h2>

                <p className="mx-auto mt-3 max-w-xl text-sm leading-relaxed text-slate-400">
                  Take a look at my projects to see how I apply software
                  engineering, systems thinking, and security-conscious
                  development to real-world problems.
                </p>

                <div className="mt-6">
                  <Link
                    href="/projects"
                    className="inline-flex items-center gap-2 rounded-full border border-cyan-400/20 bg-cyan-400/10 px-6 py-3 text-sm font-medium text-cyan-300 transition-all duration-300 hover:bg-cyan-400/20"
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
    <h3 className="mb-6 text-sm font-bold uppercase tracking-widest text-slate-500">
      {children}
    </h3>
  );
};

/* =====================================================
   VALUE CARD
===================================================== */

/* =====================================================
   DIVIDER
===================================================== */

const Divider = () => (
  <div className="mt-16 h-px w-full bg-gradient-to-r from-transparent via-slate-700/30 to-transparent" />
);
