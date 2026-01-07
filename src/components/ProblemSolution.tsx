import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { AlertCircle, CheckCircle2, Flame, Wind } from "lucide-react";
export function ProblemSolution() {
  const [activeCard, setActiveCard] = useState<"chaos" | "harmony" | null>(
    null
  );
  // Background variants for the SECTION
  const sectionVariants = {
    default: {
      backgroundColor: "#09090b",
    },
    chaos: {
      backgroundColor: "#450a0a",
    },
    harmony: {
      backgroundColor: "#083344",
    }, // cyan-950/darker
  };
  return (
    <motion.section
      className="w-full py-24 px-6 relative overflow-hidden transition-colors duration-700 ease-in-out"
      animate={activeCard || "default"}
      variants={sectionVariants}
    >
      {/* Dynamic Background Gradients */}
      <AnimatePresence>
        {activeCard === "chaos" && (
          <motion.div
            initial={{
              opacity: 0,
            }}
            animate={{
              opacity: 1,
            }}
            exit={{
              opacity: 0,
            }}
            transition={{
              duration: 0.5,
            }}
            className="absolute inset-0 bg-gradient-to-br from-red-900/40 via-black to-black pointer-events-none z-0"
          />
        )}
        {activeCard === "harmony" && (
          <motion.div
            initial={{
              opacity: 0,
            }}
            animate={{
              opacity: 1,
            }}
            exit={{
              opacity: 0,
            }}
            transition={{
              duration: 0.5,
            }}
            className="absolute inset-0 bg-gradient-to-br from-cyan-900/40 via-black to-black pointer-events-none z-0"
          />
        )}
      </AnimatePresence>

      <div className="max-w-7xl mx-auto relative z-10">
        {/* Title Section */}
        <motion.div className="text-center mb-20">
          <h2 className="text-3xl md:text-5xl font-bold text-white mb-4 tracking-tight">
            Welcome to the <span className="text-cyan-500">Dojo</span>
          </h2>
          <p className="text-xl text-gray-400 max-w-2xl mx-auto">
            Where we train you to defeat {" "}
            <span className="text-red-500 font-bold">Chaos</span> and achieve{" "}
            <span className="text-cyan-500 font-bold">Clarity</span>
          </p>
        </motion.div>

        {/* Grid with 3 columns layout */}
        <div className="relative grid grid-cols-1 lg:grid-cols-[1fr_auto_1fr] gap-4 md:gap-12 items-center">
          {/* Problem Side - Chaos */}
          <motion.div
            onHoverStart={() => setActiveCard("chaos")}
            onHoverEnd={() => setActiveCard(null)}
            onClick={() =>
              setActiveCard(activeCard === "chaos" ? null : "chaos")
            }
            initial={{
              rotate: -2,
            }}
            animate={{
              opacity: 1,
              scale: activeCard === "chaos" ? 1.05 : 1,
              filter: activeCard === "harmony" ? "blur(2px)" : "blur(0px)",
            }}
            whileHover={{
              rotate: [-2, -3, -1, -3, -2],
              transition: {
                duration: 0.4,
              },
            }}
            transition={{
              duration: 0.4,
            }}
            className="relative p-8 md:p-12 bg-zinc-900/80 backdrop-blur-sm rounded-2xl border border-white/5 overflow-hidden shadow-2xl cursor-pointer group h-full"
          >
            {/* Fire Animation (Internal) */}
            <AnimatePresence>
              {activeCard === "chaos" && (
                <motion.div
                  initial={{
                    opacity: 0,
                  }}
                  animate={{
                    opacity: 1,
                  }}
                  exit={{
                    opacity: 0,
                  }}
                  className="absolute inset-0 z-0"
                >
                  {[...Array(15)].map((_, i) => (
                    <motion.div
                      key={i}
                      className="absolute w-1.5 h-1.5 bg-orange-500 rounded-full blur-[1px]"
                      initial={{
                        y: "100%",
                        x: Math.random() * 100 + "%",
                        opacity: 0,
                      }}
                      animate={{
                        y: "-20%",
                        x: (Math.random() - 0.5) * 50 + "%",
                        opacity: [0, 1, 0],
                        scale: [0.5, 1.5, 0],
                      }}
                      transition={{
                        duration: 1.5 + Math.random() * 2,
                        repeat: Infinity,
                        delay: Math.random() * 2,
                      }}
                    />
                  ))}
                </motion.div>
              )}
            </AnimatePresence>

            <div className="absolute top-0 right-0 p-4 opacity-5 group-hover:opacity-20 transition-opacity duration-500 transform group-hover:scale-110">
              <Flame className="w-32 h-32 text-red-500" />
            </div>

            <h3 className="text-2xl font-bold text-white mb-2 flex items-center gap-3 relative z-10">
              <span className="w-8 h-1 bg-red-500/50 rounded-full shadow-[0_0_10px_rgba(239,68,68,0.5)]"></span>
              The Chaos
            </h3>
            <p className="text-red-400 font-medium mb-6 relative z-10 italic">
              Conforming your business to how your software operates.
            </p>

            <p className="text-lg text-gray-400 mb-6 leading-relaxed relative z-10">
              The world of SMBs is full of noise. Separate accounting, CRM, and
              IT systems pulling you in different directions. Data silos, manual
              reconciliations, and wasted time breed frustration.
            </p>
            <blockquote className="border-l-4 border-red-500 pl-4 italic text-xl text-white mb-6 relative z-10 bg-red-950/20 py-2 pr-2 rounded-r-lg">
              "We have numerous different softwares for all of our business
              functions, and we have to adapt to how they operate"
            </blockquote>
            <ul className="space-y-3 text-gray-500 relative z-10">
              <li className="flex items-center gap-2">
                <span className="w-1.5 h-1.5 bg-red-500/50 rounded-full" />{" "}
                Disconnected tools
              </li>
              <li className="flex items-center gap-2">
                <span className="w-1.5 h-1.5 bg-red-500/50 rounded-full" />{" "}
                Scattered data
              </li>
              <li className="flex items-center gap-2">
                <span className="w-1.5 h-1.5 bg-red-500/50 rounded-full" />{" "}
                Rigid workflows
              </li>
            </ul>
          </motion.div>

          {/* VS Image Badge - Centered in grid */}
          <div className="hidden lg:flex justify-center items-center z-20">
            <motion.div
              className="w-40 h-40 pointer-events-none"
              animate={{
                scale: activeCard ? 0.8 : 1,
              }}
            >
              <img
                src="/Designer_(58).png"
                alt="VS"
                className="w-full h-full object-contain drop-shadow-2xl"
              />
            </motion.div>
          </div>

          {/* Solution Side - Harmony */}
          <motion.div
            onHoverStart={() => setActiveCard("harmony")}
            onHoverEnd={() => setActiveCard(null)}
            onClick={() =>
              setActiveCard(activeCard === "harmony" ? null : "harmony")
            }
            initial={{
              rotate: 2,
            }}
            animate={{
              opacity: 1,
              scale: activeCard === "harmony" ? 1.05 : 1,
              filter: activeCard === "chaos" ? "blur(2px)" : "blur(0px)",
            }}
            whileHover={{
              rotate: [2, 3, 1, 3, 2],
              transition: {
                duration: 0.4,
              },
            }}
            transition={{
              duration: 0.4,
            }}
            className="relative p-8 md:p-12 bg-black text-white rounded-2xl shadow-[0_0_30px_rgba(6,182,212,0.15)] border border-cyan-500/30 overflow-hidden cursor-pointer group h-full"
          >
            {/* Peaceful Flow Animation (Internal) */}
            <AnimatePresence>
              {activeCard === "harmony" && (
                <motion.div
                  initial={{
                    opacity: 0,
                  }}
                  animate={{
                    opacity: 1,
                  }}
                  exit={{
                    opacity: 0,
                  }}
                  className="absolute inset-0 z-0"
                >
                  <motion.div
                    className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,rgba(6,182,212,0.1),transparent_70%)]"
                    animate={{
                      scale: [1, 1.2, 1],
                      opacity: [0.3, 0.6, 0.3],
                    }}
                    transition={{
                      duration: 4,
                      repeat: Infinity,
                      ease: "easeInOut",
                    }}
                  />
                  <motion.div
                    className="absolute -inset-full bg-gradient-to-r from-transparent via-cyan-500/10 to-transparent transform -skew-x-12"
                    animate={{
                      x: ["-100%", "200%"],
                    }}
                    transition={{
                      duration: 3,
                      repeat: Infinity,
                      ease: "linear",
                    }}
                  />
                </motion.div>
              )}
            </AnimatePresence>

            <div className="absolute top-0 right-0 p-4 opacity-20 group-hover:opacity-30 transition-opacity duration-500 transform group-hover:scale-110 group-hover:rotate-12">
              <Wind className="w-32 h-32 text-cyan-500" />
            </div>

            <h3 className="text-2xl font-bold text-white mb-2 flex items-center gap-3 relative z-10">
              <span className="w-8 h-1 bg-cyan-500 rounded-full shadow-[0_0_15px_rgba(6,182,212,0.8)]"></span>
              The Clarity
            </h3>
            <p className="text-cyan-400 font-medium mb-6 relative z-10 italic">
              Conforming your Software to how your business operates
            </p>
            <p className="text-lg text-gray-300 mb-6 leading-relaxed relative z-10">
              Software-Sensai brings calm to the storm. A unified platform where
              data flows freely. Deep down, you believe technology should serve
              you, not rule you.
            </p>
            <blockquote className="border-l-4 border-cyan-500 pl-4 italic text-xl text-white mb-6 relative z-10 bg-cyan-950/20 py-2 pr-2 rounded-r-lg">
              "It’s time you stop adapting your business to your software, and
              start adapting your software to your business."
            </blockquote>
            <ul className="space-y-3 text-cyan-400 relative z-10">
              <li className="flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4" /> Unified operations
              </li>
              <li className="flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4" /> AI-powered adaptability
              </li>
              <li className="flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4" /> Clarity and control
              </li>
            </ul>
          </motion.div>
        </div>
      </div>
    </motion.section>
  );
}
