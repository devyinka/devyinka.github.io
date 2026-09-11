"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { contactData } from "@/utils";
import { Form } from "@/components/Form";
import { MailSVG, GithubSVG, LinkedInSVG } from "@/components/ui/icons/";

const containerVariants = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: {
      staggerChildren: 0.12,
    },
  },
};

const itemVariants = {
  hidden: {
    opacity: 0,
    y: 20,
  },
  show: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.5,
      ease: "easeOut",
    },
  },
};

export default function Contact() {
  const { email, github, linkedIn } = contactData;

  return (
    <div className="min-h-screen bg-[#0a0a0a] px-6 py-24">
      <div className="mx-auto max-w-3xl">
        {/* Header */}
        <div className="mb-14">
          <h1 className="text-4xl font-bold tracking-tight text-slate-100 md:text-5xl">
            Let&apos;s Connect
          </h1>

          <p className="mt-4 max-w-2xl text-lg leading-relaxed text-slate-400">
            Let&apos;s talk about building reliable web applications,
            cross-platform mobile apps, backend systems, reliable database
            Architecture, intelligent solutions, and connected IoT products.
          </p>
        </div>

        {/* Contact Links */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, margin: "-50px" }}
          className="space-y-3"
        >
          {/* Email */}
          <motion.div variants={itemVariants}>
            <Link
              href={`mailto:${email}?subject=Hello from your portfolio`}
              className="group flex items-center justify-between gap-4 rounded-xl border border-slate-800 px-5 py-4 transition-all duration-300 hover:border-cyan-500/50 hover:bg-slate-900/50"
            >
              <div className="flex min-w-0 items-center gap-4">
                <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-lg bg-cyan-950/50 text-cyan-400 transition-transform duration-300 group-hover:scale-105">
                  <MailSVG />
                </div>

                <div className="min-w-0">
                  <h3 className="font-semibold text-slate-100">Email Me</h3>

                  <p className="mt-0.5 truncate text-sm text-slate-500">
                    {email}
                  </p>
                </div>
              </div>

              <span className="text-lg text-slate-600 transition-all duration-300 group-hover:translate-x-1 group-hover:text-cyan-400">
                →
              </span>
            </Link>
          </motion.div>

          {/* GitHub */}
          <motion.div variants={itemVariants}>
            <Link
              href={github}
              target="_blank"
              rel="noopener noreferrer"
              className="group flex items-center justify-between gap-4 rounded-xl border border-slate-800 px-5 py-4 transition-all duration-300 hover:border-slate-500 hover:bg-slate-900/50"
            >
              <div className="flex min-w-0 items-center gap-4">
                <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-lg bg-slate-800/70 transition-transform duration-300 group-hover:scale-105">
                  <GithubSVG color="#ffffff" size={25} />
                </div>

                <div className="min-w-0">
                  <h3 className="font-semibold text-slate-100">GitHub</h3>

                  <p className="mt-0.5 truncate text-sm text-slate-500">
                    Projects, source code, and technical work
                  </p>
                </div>
              </div>

              <span className="text-lg text-slate-600 transition-all duration-300 group-hover:translate-x-1 group-hover:text-slate-300">
                ↗
              </span>
            </Link>
          </motion.div>

          {/* LinkedIn */}
          <motion.div variants={itemVariants}>
            <Link
              href={linkedIn}
              target="_blank"
              rel="noopener noreferrer"
              className="group flex items-center justify-between gap-4 rounded-xl border border-slate-800 px-5 py-4 transition-all duration-300 hover:border-[#0077b5]/60 hover:bg-slate-900/50"
            >
              <div className="flex min-w-0 items-center gap-4">
                <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-lg bg-[#0077b5]/10 transition-transform duration-300 group-hover:scale-105">
                  <LinkedInSVG />
                </div>

                <div className="min-w-0">
                  <h3 className="font-semibold text-slate-100">LinkedIn</h3>

                  <p className="mt-0.5 truncate text-sm text-slate-500">
                    Connect with me professionally
                  </p>
                </div>
              </div>

              <span className="text-lg text-slate-600 transition-all duration-300 group-hover:translate-x-1 group-hover:text-[#0077b5]">
                ↗
              </span>
            </Link>
          </motion.div>
        </motion.div>

        {/* Message Form */}
        <motion.div
          variants={itemVariants}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, margin: "-50px" }}
          className="mt-14"
        >
          <div className="mb-7">
            <h2 className="text-2xl font-bold text-slate-100">
              Start a Conversation
            </h2>

            <p className="mt-2 text-slate-500">
              Have a project, idea, or technical challenge in mind? Send me a
              message and let&apos;s talk.
            </p>
          </div>

          <Form />
        </motion.div>
      </div>
    </div>
  );
}
