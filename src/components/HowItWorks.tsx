import React from 'react';
import { motion } from 'framer-motion';
import { Eye, Wrench } from 'lucide-react';

const NinjaStar = ({
  className
}: {
  className?: string;
}) => <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" fill="none" stroke="currentColor" strokeWidth="40" strokeLinecap="round" strokeLinejoin="round" className={className}>
    <path d="M467.489,335.957c-1.361-5.055-6.62-8.056-11.611-6.695c-6.408,1.718-13.037,2.588-19.732,2.588
			c-41.824,0-75.851-34.027-75.851-75.851c0-41.824,34.028-75.851,75.851-75.851c6.695,0,13.324,0.87,19.732,2.588
			c5.065,1.366,10.25-1.634,11.611-6.694l44.185-164.096c0.88-3.273-0.055-6.768-2.454-9.167c-2.408-2.403-5.907-3.333-9.167-2.454
			l-164.101,44.18c-5.055,1.361-8.046,6.56-6.694,11.616c1.722,6.412,2.592,13.051,2.592,19.731
			c0,41.824-34.027,75.851-75.851,75.851c-41.824,0-75.851-34.027-75.851-75.851c0-6.713,0.87-13.347,2.593-19.722
			c0.648-2.426,0.315-5.018-0.935-7.199c-1.259-2.176-3.324-3.768-5.759-4.426L11.946,0.326C8.622-0.554,5.067,0.409,2.659,2.9
			c-2.398,2.482-3.25,6.074-2.241,9.37l50.074,162.74c1.435,4.634,6.102,7.435,10.87,6.523c4.731-0.921,9.602-1.384,14.49-1.384
			c41.824,0,75.851,34.028,75.851,75.851c0,41.824-34.027,75.851-75.851,75.851c-4.889,0-9.759-0.463-14.49-1.384
			c-4.759-0.898-9.435,1.884-10.87,6.523L0.419,499.729c-0.991,3.241-0.185,6.764,2.12,9.245c1.815,1.954,4.343,3.023,6.944,3.023
			c0.713,0,1.426-0.079,2.13-0.241l163.35-37.694c5.102-1.18,8.278-6.264,7.111-11.361c-1.278-5.569-1.926-11.315-1.926-17.074
			c0-41.824,34.028-75.851,75.851-75.851c41.824,0,75.851,34.028,75.851,75.851c0,5.759-0.648,11.505-1.926,17.074
			c-1.167,5.097,2.009,10.18,7.111,11.361l163.351,37.694c3.213,0.75,6.648-0.259,8.954-2.657c2.315-2.398,3.194-5.833,2.333-9.046
			L467.489,335.957z M350.064,457.604c0.5-3.963,0.75-7.967,0.75-11.977c0-52.282-42.537-94.814-94.814-94.814
			c-52.277,0-94.814,42.532-94.814,94.814c0,4.009,0.25,8.014,0.75,11.977L23.381,489.576l42.851-139.249" />
  </svg>;

const steps = [{
  id: 1,
  title: 'See',
  tagline: 'See your system clearly',
  description: 'Bring all your disconnected data into one unified view. No more hiding in silos.',
  icon: Eye
}, {
  id: 2,
  title: 'Fix',
  tagline: 'Fix issues fast',
  description: "Identify bottlenecks and inefficiencies immediately. Can't conform to a pre-built module? Leverage the power of AI to build your own.",
  icon: Wrench
}, {
  id: 3,
  title: 'Sharpen',
  tagline: 'Leave it sharper than before',
  description: 'Iterate and improve. Your system grows smarter and more efficient every day.',
  icon: NinjaStar
}];
export function HowItWorks() {
  return <section className="w-full py-24 px-6 bg-zinc-950 text-white overflow-hidden border-t border-white/5">
      <div className="max-w-7xl mx-auto">
        <motion.div initial={{
        opacity: 0
      }} whileInView={{
        opacity: 1
      }} viewport={{
        once: true
      }} className="text-center mb-20">
          <h2 className="text-4xl font-bold mb-4 text-white">
            The Path to Clarity
          </h2>
          <p className="text-gray-400 text-xl">
            Three simple steps to operational enlightenment
          </p>
        </motion.div>

        <div className="relative grid grid-cols-1 md:grid-cols-3 gap-12">
          {/* Connecting Line (Desktop only) */}
          <div className="hidden md:block absolute top-12 left-[16%] right-[16%] h-0.5 bg-zinc-800 z-0" />

          {steps.map((step, index) => <motion.div key={step.id} initial={{
          opacity: 0,
          scale: 0.9
        }} whileInView={{
          opacity: 1,
          scale: 1
        }} viewport={{
          once: true
        }} transition={{
          delay: index * 0.2,
          duration: 0.6
        }} className="relative z-10 flex flex-col items-center text-center group">
              <div className="w-24 h-24 bg-black rounded-full border-2 border-cyan-500 flex items-center justify-center mb-8 shadow-[0_0_20px_rgba(6,182,212,0.2)] group-hover:shadow-[0_0_30px_rgba(6,182,212,0.4)] transition-shadow duration-300">
                <step.icon className="w-10 h-10 text-cyan-400" />
              </div>

              <h3 className="text-3xl font-bold text-white mb-2">
                {step.title}
              </h3>
              <p className="text-cyan-400 font-medium mb-4">{step.tagline}</p>
              <p className="text-gray-400 max-w-xs leading-relaxed">
                {step.description}
              </p>
            </motion.div>)}
        </div>
      </div>
    </section>;
}