import React from 'react';
import { motion } from 'framer-motion';
import { Bot, Cpu, Layers } from 'lucide-react';
export function AIBuilder() {
  return <section className="w-full py-24 px-6 bg-black border-t border-white/5">
      <div className="max-w-7xl mx-auto">
        <div className="flex flex-col lg:flex-row items-center gap-16">
          <motion.div initial={{
          opacity: 0,
          x: -30
        }} whileInView={{
          opacity: 1,
          x: 0
        }} viewport={{
          once: true
        }} className="lg:w-1/2">
            <div className="inline-flex items-center gap-2 px-4 py-2 bg-cyan-950/30 border border-cyan-500/20 text-cyan-400 rounded-full text-sm font-semibold mb-6">
              <Bot className="w-4 h-4" />
              AI-Powered Builder
            </div>
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-6 leading-tight">
              Build your own modules <br />
              <span className="text-cyan-500">without writing code</span>
            </h2>
            <p className="text-xl text-gray-400 mb-8 leading-relaxed">
              No developers? No problem. Describe what you need, and our AI
              constructs the perfect module for your workflow. Democratized
              technology at your fingertips.
            </p>

            <div className="space-y-6">
              <div className="flex items-start gap-4">
                <div className="p-2 bg-zinc-900 rounded-lg border border-white/10">
                  <Cpu className="w-6 h-6 text-cyan-500" />
                </div>
                <div>
                  <h4 className="font-bold text-white">
                    Intelligent Generation
                  </h4>
                  <p className="text-gray-500">
                    AI understands your business context and suggests optimal
                    structures.
                  </p>
                </div>
              </div>
              <div className="flex items-start gap-4">
                <div className="p-2 bg-zinc-900 rounded-lg border border-white/10">
                  <Layers className="w-6 h-6 text-cyan-500" />
                </div>
                <div>
                  <h4 className="font-bold text-white">Seamless Integration</h4>
                  <p className="text-gray-500">
                    New modules instantly connect with your existing Sheets and
                    Dashboards.
                  </p>
                </div>
              </div>
            </div>
          </motion.div>

          <motion.div initial={{
          opacity: 0,
          scale: 0.95
        }} whileInView={{
          opacity: 1,
          scale: 1
        }} viewport={{
          once: true
        }} className="lg:w-1/2 w-full">
            <div className="relative bg-zinc-900 p-8 rounded-2xl shadow-2xl border border-white/10">
              {/* Abstract UI Representation of AI Builder */}
              <div className="space-y-4">
                <div className="flex items-center gap-3 mb-6">
                  <div className="w-3 h-3 rounded-full bg-red-500/20" />
                  <div className="w-3 h-3 rounded-full bg-yellow-500/20" />
                  <div className="w-3 h-3 rounded-full bg-green-500/20" />
                </div>

                <div className="p-4 bg-black rounded-lg border border-white/10 mb-4">
                  <p className="text-sm text-gray-500 mb-2">User Prompt:</p>
                  <p className="text-white font-medium">
                    "Create a project tracker for my marketing team with
                    deadlines and approval status."
                  </p>
                </div>

                <div className="relative pl-8 border-l-2 border-cyan-900 space-y-4">
                  <div className="absolute left-[-5px] top-0 w-2 h-2 bg-cyan-500 rounded-full shadow-[0_0_10px_rgba(6,182,212,0.5)]" />
                  <div className="p-3 bg-cyan-950/20 rounded border border-cyan-500/20 flex items-center justify-between">
                    <span className="text-cyan-400 text-sm font-medium">
                      Generating Sheet: Marketing Projects...
                    </span>
                    <span className="text-cyan-600 text-xs">Done</span>
                  </div>
                  <div className="p-3 bg-cyan-950/20 rounded border border-cyan-500/20 flex items-center justify-between">
                    <span className="text-cyan-400 text-sm font-medium">
                      Creating Applet: Approval Workflow...
                    </span>
                    <span className="text-cyan-600 text-xs">Done</span>
                  </div>
                  <div className="p-3 bg-cyan-950/20 rounded border border-cyan-500/20 flex items-center justify-between">
                    <span className="text-cyan-400 text-sm font-medium">
                      Configuring Dashboard: Team Velocity...
                    </span>
                    <span className="text-cyan-600 text-xs">Done</span>
                  </div>
                </div>

                <div className="mt-6 pt-6 border-t border-white/5 text-center">
                  <button className="text-cyan-500 font-semibold text-sm hover:text-cyan-400 transition-colors">
                    View Generated Module →
                  </button>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>;
}