import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { ArrowRight } from 'lucide-react';
import { ThreeDojoBackground } from './ThreeDojoBackground';

interface FinalCTAProps {
  onOpenModal: () => void;
}

export function FinalCTA({ onOpenModal }: FinalCTAProps) {
  const [isHovering, setIsHovering] = useState(false);
  return <section className="w-full py-32 px-6 bg-zinc-950 relative overflow-hidden border-t border-white/5" onMouseEnter={() => setIsHovering(true)} onMouseLeave={() => setIsHovering(false)}>
      {/* 3D Dojo Background - Controlled by Hover */}
      <ThreeDojoBackground isHovering={isHovering} />

      {/* Radial Overlay to focus center */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,transparent_0%,black_80%)] pointer-events-none z-0" />

      <div className="max-w-4xl mx-auto text-center relative z-10">
        <motion.div initial={{
        opacity: 0,
        y: 30
      }} whileInView={{
        opacity: 1,
        y: 0
      }} viewport={{
        once: true
      }}>
          {/* New Full Logo */}
          <img src="/Designer_(55).png" alt="SoftwareSensAI Logo" className="w-64 md:w-80 mx-auto mb-12 object-contain drop-shadow-[0_0_15px_rgba(6,182,212,0.3)]" />

          <h2 className="text-5xl md:text-6xl font-bold text-white mb-8 tracking-tight drop-shadow-lg">
            The dojo is open.
          </h2>

          <p className="text-xl md:text-2xl text-gray-400 mb-12 max-w-2xl mx-auto drop-shadow-md">
            Begin your training. See your system, fix it fast, and leave it
            sharper than before.
          </p>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-6">
            <motion.button onClick={onOpenModal} whileHover={{
            scale: 1.05,
            boxShadow: '0 0 30px rgba(6, 182, 212, 0.6)'
          }} whileTap={{
            scale: 0.95
          }} className="px-10 py-5 bg-white text-black text-xl font-bold rounded-lg shadow-xl flex items-center gap-3 group border-2 border-transparent hover:border-cyan-500 transition-colors duration-300">
              Request Access / Book a Demo
              <ArrowRight className="w-5 h-5 text-cyan-600 group-hover:translate-x-1 transition-transform" />
            </motion.button>
          </div>

          <p className="mt-12 text-gray-500 text-sm">
            Join the waitlist for early access.
          </p>
        </motion.div>
      </div>
    </section>;
}