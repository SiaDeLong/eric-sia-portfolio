"use client";

import { motion } from "framer-motion";
import type { AboutContent } from "@/lib/types";

interface AboutProps {
  content: AboutContent;
}

function renderTerminalValue(value: string | number | boolean | string[]) {
  if (Array.isArray(value)) {
    return (
      <>
        [
        {value.map((v, i) => (
          <span key={v}>
            <span className="t-str">&quot;{v}&quot;</span>
            {i < value.length - 1 ? ", " : ""}
          </span>
        ))}
        ]
      </>
    );
  }
  if (typeof value === "string")
    return <span className="t-str">&quot;{value}&quot;</span>;
  if (typeof value === "number") return <span className="t-num">{value}</span>;
  return <span className="t-bool">{String(value)}</span>;
}

export default function About({ content }: AboutProps) {
  const { sectionLabel, heading, summary, highlights, strengths, terminal } =
    content;

  return (
    <section id="about" className="relative px-6 py-32 overflow-hidden">
      <div className="absolute inset-0 bg-linear-to-b from-purple-500/5 via-transparent to-transparent pointer-events-none" />

      <div className="relative mx-auto max-w-6xl">
        {/* Section heading */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mb-16 text-center"
        >
          <div className="justify-center section-label">{sectionLabel}</div>
          <h2 className="mb-6 font-bold text-white text-5xl md:text-6xl lg:text-7xl leading-tight">
            {heading}
          </h2>
        </motion.div>

        {/* Terminal + highlights */}
        <div className="gap-8 grid grid-cols-1 lg:grid-cols-5 mb-16">
          {/* Terminal block */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="lg:col-span-2"
          >
            <div className="terminal-block h-full">
              <div className="terminal-bar">
                <span />
                <span />
                <span />
                <span className="ml-2 font-mono text-[10px] text-dark-text-muted">
                  {terminal.filename}
                </span>
              </div>
              <div className="terminal-content">
                <div>
                  <span className="t-comment">{terminal.comment}</span>
                </div>
                <div>{"{"}</div>
                {terminal.fields.map((f) => (
                  <div key={f.key}>
                    &nbsp;&nbsp;
                    <span className="t-key">&quot;{f.key}&quot;</span>:{" "}
                    {renderTerminalValue(f.value)},
                  </div>
                ))}
                <div>{"}"}</div>
              </div>
            </div>
          </motion.div>

          {/* Highlights */}
          <div className="flex flex-col gap-6 lg:col-span-3">
            {highlights.map((item, index) => (
              <motion.div
                key={item.label}
                initial={{ opacity: 0, x: 30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.12 }}
                className="group relative"
              >
                <div className="absolute -inset-0.5 bg-linear-to-r from-purple-600 to-blue-600 opacity-0 group-hover:opacity-100 rounded-lg transition duration-500 blur" />
                <div className="relative flex items-center gap-6 bg-dark-surface p-6 border border-dark-border hover:border-purple-500/50 rounded-lg transition-all duration-300">
                  <div className="bg-clip-text bg-linear-to-r from-purple-400 to-blue-400 font-bold tabular-nums text-transparent text-5xl md:text-6xl shrink-0">
                    {item.number}
                  </div>
                  <div className="flex-1">
                    <div className="font-semibold text-white text-lg">
                      {item.label}
                    </div>
                    <div className="bg-purple-500/20 mt-2 rounded-full w-full h-1 overflow-hidden">
                      <motion.div
                        className="bg-linear-to-r from-purple-500 to-blue-500 rounded-full h-full"
                        initial={{ width: 0 }}
                        whileInView={{ width: "100%" }}
                        viewport={{ once: true }}
                        transition={{ duration: 1, delay: 0.3 + index * 0.1 }}
                      />
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Summary */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="group relative mx-auto max-w-4xl"
        >
          <div className="absolute -inset-1 bg-linear-to-r from-purple-600 via-blue-600 to-purple-600 opacity-20 group-hover:opacity-30 blur-xl rounded-2xl transition duration-500" />
          <div className="relative bg-dark-surface/50 backdrop-blur-sm p-8 md:p-12 border border-purple-500/30 rounded-2xl">
            <p className="font-light text-white text-xl md:text-2xl lg:text-3xl text-center leading-relaxed">
              {summary}
            </p>
          </div>
        </motion.div>

        {/* Strengths */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.5 }}
          className="flex flex-wrap justify-center gap-4 mt-16"
        >
          {strengths.map((strength, index) => (
            <motion.span
              key={strength}
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: 0.6 + index * 0.1 }}
              whileHover={{ scale: 1.05 }}
              className="bg-purple-500/10 hover:bg-purple-500/20 backdrop-blur-sm px-6 py-3 border border-purple-500/30 hover:border-purple-400/50 rounded-full font-medium text-purple-300 text-sm md:text-base transition-all duration-300 cursor-default"
            >
              {strength}
            </motion.span>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
