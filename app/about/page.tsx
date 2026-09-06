"use client";
import { useRef } from "react";
import Image from "next/image";
import Link from "next/link";
import { motion, useInView } from "framer-motion";
import { techonologyIconList, educationList } from "@/utils";
import { iconType, educationType } from "@/types";

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
          <h1 className="text-4xl md:text-5xl font-bold text-slate-100 tracking-tight mb-6">
            Bridging Hardware, Data, and Security
          </h1>
          <div className="flex flex-col gap-6 text-lg leading-relaxed text-slate-400">
            <p>
              Most developers start with the software; I started with the
              signal. Earning my degree in Telecommunication Engineering from
              the Federal University of Technology Minna gave me a deep
              understanding of cellular infrastructure, RF signals, and how data
              physically moves across networks.
            </p>
            <p>
              I leverage that hardware-level foundation to build full-stack
              systems that interact with the physical world. Over the last few
              years, I have architected secure backend pipelines (Node.js,
              PostgreSQL), developed cross-platform mobile apps, and integrated
              edge IoT devices using ESP32 microcontrollers and real-time MQTT
              protocols. While I actively build APIs and mobile experiences, my
              ultimate trajectory is Networking and Cyber Security. I don't just
              want to build scalable applications; my focus is on engineering
              the secure network infrastructures that keep those applications,
              and their data, completely safe
            </p>
            <p>
              Now, my trajectory is strictly focused on{" "}
              <span className="text-cyan-400 font-medium">
                Networking and Cyber Security
              </span>
              . I build systems that don't just work—they remain secure,
              scalable, and resilient from the physical edge device all the way
              to the cloud database.
            </p>
          </div>
        </Section>

        {/* Education Timeline */}
        <Section>
          <h2 className="text-2xl font-bold text-slate-200 mb-8 border-b border-slate-800 pb-4">
            Academic Foundation
          </h2>
          <div className="flex flex-col gap-8 border-l border-cyan-900/50 pl-6 ml-2">
            {educationList.map((item: educationType, index: number) => (
              <div key={index} className="relative group">
                {/* Timeline Dot */}
                <div className="absolute -left-[31px] top-1.5 h-3 w-3 rounded-full bg-slate-800 border-2 border-cyan-500 group-hover:bg-cyan-400 transition-colors" />

                <span className="text-sm font-bold tracking-widest text-cyan-600 uppercase">
                  {item.years}
                </span>
                <h3 className="text-xl font-semibold text-slate-200 mt-1">
                  {item.career}
                </h3>
                <p className="text-slate-400 mt-2 leading-relaxed">
                  {item.description}
                </p>
              </div>
            ))}
          </div>
        </Section>

        {/* Beyond the Code (Personalization) */}
        <Section>
          <h2 className="text-2xl font-bold text-slate-200 mb-6 border-b border-slate-800 pb-4">
            Beyond the Code
          </h2>
          <p className="text-lg leading-relaxed text-slate-400">
            When I am not designing database schemas or configuring Linux
            environments, I am usually immersed in high-stakes psychological
            strategy and espionage. You will likely find me watching anime like{" "}
            <i>Terror in Resonance</i>, <i>Spy x Family</i>,{" "}
            <i>Moriarty the Patriot</i>, and <i>Link Click</i>, or catching up
            on historical K-dramas.
          </p>
        </Section>

        {/* Strategic Call to Action */}
        <Section>
          <div className="mt-12 p-8 rounded-2xl bg-gradient-to-br from-slate-900 to-[#0a0a0a] border border-slate-800 text-center shadow-2xl">
            <h3 className="text-2xl font-bold text-slate-200 mb-4">
              See the Architecture
            </h3>
            <p className="text-slate-400 mb-8 max-w-lg mx-auto">
              Dive into the backend structures, secure pipelines, and
              cross-platform apps I have built.
            </p>
            <Link
              href="/projects"
              className="inline-flex items-center justify-center px-8 py-3 rounded-lg bg-cyan-600 hover:bg-cyan-500 text-white font-medium transition-all hover:scale-105 shadow-[0_0_20px_rgba(8,145,178,0.4)]"
            >
              Explore My Projects
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
