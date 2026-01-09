import React, { useState } from 'react';
import { Hero } from '../components/Hero';
import { ProblemSolution } from '../components/ProblemSolution';
import { ModularTriad } from '../components/ModularTriad';
import { HowItWorks } from '../components/HowItWorks';
import { AIBuilder } from '../components/AIBuilder';
import { FinalCTA } from '../components/FinalCTA';
import { BookingModal } from '../components/BookingModal';

export function LandingPage() {
  const [isModalOpen, setIsModalOpen] = useState(false);

  return <main className="w-full min-h-screen bg-black font-sans text-white selection:bg-cyan-500 selection:text-white">
      <Hero onOpenModal={() => setIsModalOpen(true)} />

      {/* Trust/Social Proof Section */}
      <section className="py-12 bg-zinc-950 border-y border-white/5">
        <div className="max-w-7xl mx-auto px-6 text-center">
          <p className="text-sm font-medium text-gray-500 mb-8 tracking-[0.2em] uppercase">
            Trusted by forward-thinking companies
          </p>
          <div className="flex flex-wrap justify-center items-center gap-x-12 gap-y-8">
            <a href="https://www.libertascolorado.com" target="_blank" rel="noopener noreferrer" className="text-xl md:text-2xl font-bold text-gray-500 hover:text-white transition-colors duration-300">
              Libertas
            </a>
            <a href="https://aegiscm.net" target="_blank" rel="noopener noreferrer" className="text-xl md:text-2xl font-bold text-gray-500 hover:text-white transition-colors duration-300">
              Aegis Construction
            </a>
            <a href="https://meetsaltcollective.com" target="_blank" rel="noopener noreferrer" className="text-xl md:text-2xl font-bold text-gray-500 hover:text-white transition-colors duration-300">
              Salt Collective
            </a>
            <a href="https://www.flowworksco.com" target="_blank" rel="noopener noreferrer" className="text-xl md:text-2xl font-bold text-gray-500 hover:text-white transition-colors duration-300">
              Flow Works
            </a>
          </div>
        </div>
      </section>

      <ProblemSolution />
      <ModularTriad />
      <HowItWorks />
      <AIBuilder />
      <FinalCTA onOpenModal={() => setIsModalOpen(true)} />

      <footer className="bg-black py-12 border-t border-white/10">
        <div className="max-w-7xl mx-auto px-6 flex flex-col md:flex-row justify-between items-center gap-6">
          <div className="flex items-center gap-2">
            <img src="/Designer56.png" alt="Logo Icon" className="w-8 h-8" />
            <span className="font-bold text-lg text-white">
              SoftwareSens<span className="text-cyan-500">AI</span>
            </span>
          </div>
          <div className="text-gray-600 text-xs font-medium uppercase tracking-wider text-center">
            Powered by a Team of Heavily Caffeinated Ninjas
          </div>
          <div className="text-gray-500 text-sm">
            © {new Date().getFullYear()} SoftwareSensAI. All rights reserved.
          </div>
        </div>
      </footer>

      <BookingModal isOpen={isModalOpen} onClose={() => setIsModalOpen(false)} />
    </main>;
}