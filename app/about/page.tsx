"use client";
import { useRef } from "react";
import Link from "next/link";
import { motion, useInView } from "framer-motion";
import { educationList } from "@/utils";
import { educationType } from "@/types";
import { languageList } from "@/utils/languageData";

export default function About() {
  return (
    <div className="bg-[#0a0a0a] min-h-screen text-slate-300 font-sans selection:bg-cyan-500/30 selection:text-cyan-200 py-24 px-6 relative overflow-hidden">
      {/* Background Glow */}
      <div className="pointer-events-none fixed inset-0 z-0">
        <div className="absolute top-[10%] right-[-5%] h-[500px] w-[500px] rounded-full bg-cyan-900/20 blur-[120px]" />
      </div>

      <div className="max-w-4xl mx-auto relative z-10 flex flex-col gap-24">
        {/* Page Header */}
        <Section>
          <h1 className="text-4xl md:text-5xl font-bold text-slate-100 tracking-tight mb-8">
            About Me
          </h1>
          <div className="flex flex-col gap-6 text-lg leading-relaxed text-slate-400">
            <p>
              I&apos;m Salam Sodiq, a full-stack software developer focused on
              building reliable web applications, APIs, and backend systems. I
              enjoy turning real-world requirements into practical software that
              is maintainable, efficient, and easy to use.
            </p>
            <p>
              My background in Telecommunication Engineering gives me a strong
              foundation in computer networks, communication systems, and
              understanding how data moves across connected systems. I bring
              that systems-level perspective into software development, with a
              particular interest in application architecture, networking,
              security, and system reliability.
            </p>
            <p>
              I developed my software engineering skills independently, starting
              with C and C++ before moving into modern web and mobile
              development. Today, I work with technologies such as React,
              Next.js, Node.js, Express, databases, and React Native to build
              full-stack and mobile applications.
            </p>
            <p>
              {" "}
              One of the things I value most about engineering is the ability to
              learn unfamiliar technologies. When I encounter a new framework,
              library, or system, I break it down, understand how its components
              work together, and turn that understanding into working
              software.{" "}
            </p>
            <p>
              My goal is to grow as a professional software engineer while
              building systems that solve meaningful problems. I&apos;m
              particularly interested in opportunities where I can contribute
              across the frontend and backend, work with experienced engineers,
              and continue developing strong software engineering practices.
            </p>
          </div>
        </Section>

        {/* Education & Experience */}
        <Section>
          <h2 className="text-2xl font-bold text-slate-200 mb-8 border-b border-slate-800 pb-4">
            Academic & Professional Journey
          </h2>
          <div className="flex flex-col gap-8 border-l border-cyan-900/50 pl-6 ml-2">
            {educationList.map((item, index) => (
              <div key={index} className="relative group">
                <div className="absolute -left-[31px] top-1.5 h-3 w-3 rounded-full bg-slate-800 border-2 border-cyan-500 group-hover:bg-cyan-400 transition-colors" />
                <h3 className="text-xl font-semibold text-slate-200 mt-1">
                  {item.title}
                </h3>
                {item.subtitle && (
                  <span className="block text-sm font-bold tracking-widest text-cyan-600 uppercase mt-1">
                    {item.subtitle}
                  </span>
                )}
                <p className="text-slate-400 mt-2 leading-relaxed">
                  {item.description}
                </p>
              </div>
            ))}
          </div>
        </Section>

        {/* Languages & Personal Depth */}
        <Section>
          <h2 className="text-2xl font-bold text-slate-200 mb-8 border-b border-slate-800 pb-4">
            Beyond the Code
          </h2>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Languages Map */}
            <div>
              <h3 className="text-lg font-semibold text-cyan-400 mb-4">
                Linguistics
              </h3>
              <div className="flex flex-col gap-4">
                {languageList.map((lang, index) => (
                  <div key={index}>
                    <span className="font-medium text-slate-200">
                      {lang.title}
                    </span>
                    <p className="text-sm text-slate-400">{lang.description}</p>
                  </div>
                ))}
              </div>
            </div>

            {/* Personal Context */}
            <div className="text-slate-400 leading-relaxed space-y-4">
              <p>
                {" "}
                I enjoy understanding complex systems and explaining them
                clearly. That mindset influences how I approach software
                architecture, debugging, documentation, and collaboration.{" "}
              </p>{" "}
              <p>
                {" "}
                Outside software development, I enjoy stories built around
                strategy, investigation, and complex problem-solving. I&apos;m
                particularly drawn to anime such as <i>
                  Moriarty the Patriot
                </i>{" "}
                and <i>Terror in Resonance</i>.{" "}
              </p>
            </div>
          </div>
        </Section>

        {/* Call to Action */}
        <Section>
          <div className="mt-8 p-8 rounded-2xl bg-gradient-to-br from-slate-900 to-[#0a0a0a] border border-slate-800 text-center shadow-2xl">
            <h3 className="text-2xl font-bold text-slate-200 mb-4">
              {" "}
              Explore My Projects{" "}
            </h3>
            <p className="text-slate-400 mb-8 max-w-lg mx-auto">
              {" "}
              See how I turn real-world requirements into full-stack
              applications, APIs, mobile applications, and integrated software
              systems.{" "}
            </p>
            <Link
              href="/projects"
              className="inline-flex items-center justify-center px-8 py-3 rounded-lg bg-cyan-600 hover:bg-cyan-500 text-white font-medium transition-all hover:scale-105 shadow-[0_0_20px_rgba(8,145,178,0.4)]"
            >
              View Projects
            </Link>
          </div>
        </Section>
      </div>
    </div>
  );
}

// Reusable Scroll Reveal Component
const Section = ({ children }: { children: React.ReactNode }) => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <motion.section
      ref={ref}
      initial={{ opacity: 0, y: 30 }}
      animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
      transition={{ duration: 0.7, ease: "easeOut" }}
    >
      {children}
    </motion.section>
  );
};
