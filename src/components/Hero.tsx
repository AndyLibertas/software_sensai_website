import React from 'react';
import { motion } from 'framer-motion';
import { ArrowRight, User } from 'lucide-react';
import { ThreeBackground } from './ThreeBackground';

interface HeroProps {
  onOpenModal: () => void;
}

export function Hero({ onOpenModal }: HeroProps) {
  return <section className="relative w-full min-h-screen flex flex-col items-center pt-32 pb-20 px-6 bg-black overflow-hidden perspective-1000">
      {/* Three.js Background Layer */}
      <ThreeBackground />

      {/* Sign In Button - Top Right */}
      <div className="absolute top-6 right-6 z-50">
        <motion.button whileHover={{
        scale: 1.05,
        backgroundColor: 'rgba(255,255,255,0.1)'
      }} whileTap={{
        scale: 0.95
      }} className="flex items-center gap-2 px-4 py-2 rounded-full border border-white/10 text-white/80 hover:text-white hover:border-white/30 transition-colors bg-black/50 backdrop-blur-md">
          <User className="w-4 h-4" />
          <span className="text-sm font-medium">Sign In</span>
        </motion.button>
      </div>

      {/* Background Ambience Overlays */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,transparent_0%,black_90%)]" />
        <div className="absolute bottom-0 left-0 w-full h-1/2 bg-gradient-to-t from-zinc-950 to-transparent" />
      </div>

      <motion.div initial={{
      opacity: 0,
      y: 30
    }} animate={{
      opacity: 1,
      y: 0
    }} transition={{
      duration: 0.8,
      ease: 'easeOut'
    }} className="relative z-10 flex flex-col items-center text-center max-w-5xl mx-auto mb-16">
        {/* Logo - Even Bigger */}
        <motion.img src="/Designer56.png" alt="SoftwareSensAI Icon" className="h-48 md:h-64 mb-10 object-contain drop-shadow-2xl" initial={{
        scale: 0.9,
        opacity: 0
      }} animate={{
        scale: 1,
        opacity: 1
      }} transition={{
        duration: 0.8
      }} />

        {/* Headline */}
        <h1 className="text-5xl md:text-7xl font-bold tracking-tight text-white mb-8 leading-tight drop-shadow-lg">
          Software that adapts to <br />
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-cyan-600">
            your business
          </span>
        </h1>

        {/* Sub-headline */}
        <p className="text-xl md:text-2xl text-gray-400 mb-10 max-w-2xl leading-relaxed drop-shadow-md">
          Modular, AI-powered operations for growing businesses. Unify accounting, CRM, and
          IT. Build modules that fit your workflow.
        </p>

        {/* CTAs */}
        <div className="flex flex-col sm:flex-row gap-4 w-full sm:w-auto">
          <motion.button onClick={onOpenModal} whileHover={{
          scale: 1.05,
          boxShadow: '0 0 25px rgba(6, 182, 212, 0.4)'
        }} whileTap={{
          scale: 0.95
        }} className="px-8 py-4 bg-cyan-500 hover:bg-cyan-400 text-black text-lg font-bold rounded-lg shadow-lg shadow-cyan-500/20 transition-all duration-300 flex items-center justify-center gap-2">
            Request Access / Book a Demo
            <ArrowRight className="w-5 h-5" />
          </motion.button>
        </div>
      </motion.div>

      {/* Product Stage - The Video (Simplified Animation) */}
      <motion.div initial={{
      opacity: 0,
      y: 50
    }} animate={{
      opacity: 1,
      y: 0
    }} transition={{
      duration: 1,
      delay: 0.2,
      ease: 'easeOut'
    }} className="relative w-full max-w-6xl mx-auto z-20 group">
        {/* Glow behind video */}
        <div className="absolute -inset-4 bg-cyan-500/20 blur-3xl rounded-[30px] opacity-50 group-hover:opacity-70 transition-opacity duration-700" />

        {/* Video Container */}
        <div className="relative rounded-2xl border border-white/10 bg-zinc-900/80 backdrop-blur-sm shadow-2xl overflow-hidden ring-1 ring-white/5">
          {/* Browser Header */}
          <div className="h-10 bg-black/50 border-b border-white/5 flex items-center px-4 gap-2">
            <div className="flex gap-2">
              <div className="w-3 h-3 rounded-full bg-red-500/20 border border-red-500/30" />
              <div className="w-3 h-3 rounded-full bg-yellow-500/20 border border-yellow-500/30" />
              <div className="w-3 h-3 rounded-full bg-green-500/20 border border-green-500/30" />
            </div>
            <div className="mx-auto px-4 py-1 bg-white/5 rounded-full text-[10px] text-gray-500 font-mono tracking-wide">
              app.softwaresensai.com
            </div>
          </div>

          {/* The Video */}
          <div className="relative aspect-[16/9] bg-black">
            <video src="/Video_Project.undefined" className="w-full h-full object-cover" autoPlay muted loop playsInline />
            {/* Subtle reflection gradient */}
            <div className="absolute inset-0 bg-gradient-to-tr from-white/5 to-transparent pointer-events-none mix-blend-overlay" />
          </div>
        </div>
      </motion.div>
    </section>;
}