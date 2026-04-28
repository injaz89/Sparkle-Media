"use client";

import { motion } from "framer-motion";
import { Activity, ShieldCheck, HardDrive } from "lucide-react";

const tasks = [
  {
    icon: Activity,
    title: "Uptime Monitoring",
    desc: "24/7 proactive monitoring to ensure your platform is always accessible.",
  },
  {
    icon: HardDrive,
    title: "Automated Backups",
    desc: "Secure, off-site daily backups protecting your critical business data.",
  },
  {
    icon: ShieldCheck,
    title: "Security Patches",
    desc: "Continuous vulnerability scanning and immediate patch deployment.",
  },
];

export function TechMaintenance() {
  return (
    <section className="py-24 bg-white text-navy">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold mb-4">Maintenance Checklist</h2>
          <p className="text-gray-500 font-light max-w-2xl mx-auto">
            We offer comprehensive maintenance packages to keep your software running smoothly long after deployment.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {tasks.map((task, i) => {
            const Icon = task.icon;
            return (
              <motion.div 
                key={i}
                className="bg-gray-50 border border-cyan-100 p-8 rounded-none text-center group hover:border-cyan-500 transition-colors duration-300"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.15 }}
              >
                <div className="w-20 h-20 mx-auto bg-white rounded-none flex items-center justify-center mb-6 group-hover:bg-cyan-50 transition-colors">
                  <motion.div
                    animate={{ rotate: [0, 10, -10, 0] }}
                    transition={{ repeat: Infinity, duration: 4, ease: "easeInOut" }}
                  >
                    <Icon className="w-10 h-10 text-cyan-400" />
                  </motion.div>
                </div>
                <h3 className="text-2xl font-bold mb-3">{task.title}</h3>
                <p className="text-gray-500 font-light leading-relaxed">{task.desc}</p>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
