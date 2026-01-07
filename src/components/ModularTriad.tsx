import React from 'react';
import { motion } from 'framer-motion';
import { Table2, Zap, BarChart3 } from 'lucide-react';
import { ThreeGridBackground } from './ThreeGridBackground';
const modules = [{
  title: 'Sheets',
  subtitle: 'Raw Truth',
  description: 'The foundation of your data. Flexible, powerful spreadsheets that act as the single source of truth for your operations.',
  icon: Table2,
  delay: 0
}, {
  title: 'Applets',
  subtitle: 'Take Action',
  description: 'Workflows that move business forward. Turn passive data into active tasks, approvals, and automations.',
  icon: Zap,
  delay: 0.2
}, {
  title: 'Dashboards',
  subtitle: 'Gain Insight',
  description: 'Visual clarity at a glance. Real-time metrics and charts that help you make informed decisions instantly.',
  icon: BarChart3,
  delay: 0.4
}];
export function ModularTriad() {
  return <section className="relative w-full py-24 px-6 bg-black overflow-hidden">
      {/* 3D Grid Background */}
      <ThreeGridBackground />

      {/* Gradient Overlay to fade grid at edges */}
      <div className="absolute inset-0 bg-gradient-to-b from-black via-transparent to-black pointer-events-none z-0" />

      <div className="relative z-10 max-w-7xl mx-auto">
        <div className="text-center mb-20">
          <motion.h2 initial={{
          opacity: 0,
          y: 20
        }} whileInView={{
          opacity: 1,
          y: 0
        }} viewport={{
          once: true
        }} className="text-4xl font-bold text-white mb-4">
            The Modular Triad
          </motion.h2>
          <motion.p initial={{
          opacity: 0,
          y: 20
        }} whileInView={{
          opacity: 1,
          y: 0
        }} viewport={{
          once: true
        }} transition={{
          delay: 0.1
        }} className="text-xl text-gray-400">
            Three pillars of operational mastery
          </motion.p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {modules.map((module, index) => <motion.div key={module.title} initial={{
          opacity: 0,
          y: 30
        }} whileInView={{
          opacity: 1,
          y: 0
        }} viewport={{
          once: true
        }} transition={{
          delay: module.delay,
          duration: 0.6
        }} className="group relative p-8 bg-zinc-900/80 backdrop-blur-md rounded-xl border border-white/10 hover:border-cyan-500/50 transition-colors duration-300">
              <div className="w-16 h-16 bg-black/50 rounded-lg border border-white/10 flex items-center justify-center mb-6 group-hover:shadow-[0_0_15px_rgba(6,182,212,0.3)] transition-shadow">
                <module.icon className="w-8 h-8 text-cyan-500" />
              </div>

              <h3 className="text-2xl font-bold text-white mb-2">
                {module.title}
              </h3>
              <p className="text-sm font-semibold text-cyan-500 uppercase tracking-wider mb-4">
                {module.subtitle}
              </p>
              <p className="text-gray-400 leading-relaxed">
                {module.description}
              </p>

              {/* Decorative corner accent */}
              <div className="absolute top-0 right-0 w-0 h-0 border-t-[40px] border-r-[40px] border-t-transparent border-r-white/5 group-hover:border-r-cyan-500/20 transition-colors duration-300 rounded-tr-xl" />
            </motion.div>)}
        </div>
      </div>
    </section>;
}