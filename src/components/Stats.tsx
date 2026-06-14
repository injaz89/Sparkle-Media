"use client";

import { useEffect, useRef, useState } from "react";
import { motion, useInView } from "framer-motion";

const stats = [
  {
    value: 6,
    suffix: "+",
    label: "Operating Countries",
    description: "Countries we currently work with",
  },
  {
    value: 2000000,
    suffix: "+",
    label: "Marketing Budgets (LKR)",
    description: "Marketing budgets we worked with",
    prefix: "LKR ",
    short: "2M+",
  },
  {
    value: 350,
    suffix: "+",
    label: "Deliverables",
    description: "Digital content delivered",
  },
  {
    value: 15,
    suffix: "+",
    label: "Team Members",
    description: "Equipped team members",
  },
];

function AnimatedCounter({ target, suffix, prefix, short }: { target: number; suffix: string; prefix?: string; short?: string }) {
  const [count, setCount] = useState(0);
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: true });

  useEffect(() => {
    if (!isInView) return;
    if (short) return; // Use pre-formatted short string
    const duration = 2000;
    const steps = 60;
    const increment = target / steps;
    let current = 0;
    const timer = setInterval(() => {
      current += increment;
      if (current >= target) {
        setCount(target);
        clearInterval(timer);
      } else {
        setCount(Math.floor(current));
      }
    }, duration / steps);
    return () => clearInterval(timer);
  }, [isInView, target, short]);

  return (
    <div ref={ref}>
      {short && isInView ? (
        <span>{short}</span>
      ) : (
        <span>
          {prefix}
          {count.toLocaleString()}
          {suffix}
        </span>
      )}
    </div>
  );
}

export function Stats() {
  return (
    <section className="py-16 bg-navy relative overflow-hidden">
      {/* Background accent */}
      <div className="absolute inset-0 opacity-10 pointer-events-none"
        style={{
          backgroundImage: "radial-gradient(circle at 20% 50%, #00B4DB 0%, transparent 60%), radial-gradient(circle at 80% 50%, #0083B0 0%, transparent 60%)"
        }}
      />
      <div className="max-w-7xl mx-auto px-6 relative z-10">
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-0 divide-x divide-white/10">
          {stats.map((stat, i) => (
            <motion.div
              key={i}
              className="text-center px-8 py-6"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: i * 0.1 }}
            >
              <div className="text-4xl md:text-5xl font-black mb-2 tracking-tight text-transparent bg-clip-text bg-gradient-to-br from-cyan-300 to-blue-400">
                <AnimatedCounter
                  target={stat.value}
                  suffix={stat.suffix}
                  prefix={stat.prefix}
                  short={stat.short}
                />
              </div>
              <p className="text-sm font-bold text-white uppercase tracking-widest mb-1 whitespace-nowrap">
                {stat.label}
              </p>
              <p className="text-xs text-gray-400 font-light">{stat.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
