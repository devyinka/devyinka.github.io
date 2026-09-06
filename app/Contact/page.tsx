"use client";
import Link from "next/link";
import { motion } from "framer-motion";
import { contactData } from "@/utils";
import { Form } from "@/components/Form";
import { MailSVG, GithubSVG, LinkedInSVG } from "@/components/ui/icons/";

const containerVariants = {
  hidden: { opacity: 0 },
  show: { opacity: 1, transition: { staggerChildren: 0.15 } },
};

const itemVariants = {
  hidden: { opacity: 0, y: 30 },
  show: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } },
};

export default function Contact() {
  const { email, github, linkedIn } = contactData;

  return (
    <div className="bg-[#0a0a0a] min-h-screen py-24 px-6">
      <div className="max-w-4xl mx-auto">
        <div className="mb-12 text-center">
          <h1 className="text-4xl md:text-5xl font-bold text-slate-100 tracking-tight">
            Get In Touch
          </h1>
          <p className="text-slate-400 mt-4 text-lg">
            Let's discuss networking, backend architecture, or your next
            engineering role.
          </p>
        </div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, margin: "-50px" }}
          className="grid grid-cols-1 md:grid-cols-2 gap-5"
        >
          {/* Email Link */}
          <motion.div variants={itemVariants} className="md:col-span-1 h-full">
            <Link
              href={`mailto:${email}?subject=Mail from your Portfolio`}
              className="flex flex-col justify-center items-center gap-3 p-8 rounded-2xl bg-slate-800/30 border border-slate-700/50 backdrop-blur-sm hover:bg-slate-800/60 hover:border-cyan-500/50 transition-all duration-300 h-full group"
            >
              <div className="p-4 bg-cyan-950/50 rounded-full text-cyan-400 group-hover:scale-110 transition-transform">
                <MailSVG />
              </div>
              <span className="text-slate-200 font-medium mt-2">{email}</span>
            </Link>
          </motion.div>

          {/* GitHub Card - Spans 2 rows */}
          <motion.div
            variants={itemVariants}
            className="md:col-span-1 md:row-span-2 h-full"
          >
            <Link
              href={github}
              rel="noopener noreferrer"
              target="_blank"
              className="flex flex-col justify-center items-center gap-4 p-8 rounded-2xl bg-slate-800/30 border border-slate-700/50 backdrop-blur-sm hover:bg-slate-800/60 hover:border-slate-500/50 transition-all duration-300 h-full group"
            >
              <div className="group-hover:-translate-y-2 transition-transform duration-300">
                <GithubSVG color="#ffffff" size={70} />
              </div>
              <div className="text-center mt-4">
                <h3 className="text-2xl font-bold text-slate-100">
                  GitHub Profile
                </h3>
                <p className="text-slate-400 mt-2">
                  Explore my backend architectures, IoT firmware, and source
                  code.
                </p>
              </div>
            </Link>
          </motion.div>

          {/* LinkedIn Link */}
          <motion.div variants={itemVariants} className="md:col-span-1 h-full">
            <Link
              href={linkedIn}
              rel="noopener noreferrer"
              target="_blank"
              className="flex flex-col justify-center items-center p-8 rounded-2xl bg-[#0077b5]/10 border border-[#0077b5]/30 backdrop-blur-sm hover:bg-[#0077b5]/20 hover:border-[#0077b5]/60 transition-all duration-300 h-full group"
            >
              <div className="group-hover:scale-110 transition-transform duration-300">
                <LinkedInSVG />
              </div>
              <span className="text-slate-300 font-medium mt-4">
                Connect on LinkedIn
              </span>
            </Link>
          </motion.div>

          {/* Form Container */}
          <motion.div
            variants={itemVariants}
            className="col-span-1 md:col-span-2 mt-6 p-8 rounded-2xl bg-slate-900/50 border border-slate-800 shadow-2xl"
          >
            <h3 className="text-xl font-bold text-slate-200 mb-6">
              Send a Direct Message
            </h3>
            <Form />
          </motion.div>
        </motion.div>
      </div>
    </div>
  );
}
