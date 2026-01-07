import React from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X, Check } from 'lucide-react';

interface BookingModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export function BookingModal({ isOpen, onClose }: BookingModalProps) {
  const [submitted, setSubmitted] = React.useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Simulate submission
    setTimeout(() => {
      setSubmitted(true);
      setTimeout(() => {
        setSubmitted(false);
        onClose();
      }, 2000);
    }, 1000);
  };

  return (
    <AnimatePresence>
      {isOpen && (
        <>
          {/* Backdrop */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={onClose}
            className="fixed inset-0 bg-black/80 backdrop-blur-sm z-50 flex items-center justify-center p-4"
          >
            {/* Modal */}
            <motion.div
              initial={{ scale: 0.95, opacity: 0, y: 20 }}
              animate={{ scale: 1, opacity: 1, y: 0 }}
              exit={{ scale: 0.95, opacity: 0, y: 20 }}
              onClick={(e) => e.stopPropagation()}
              className="w-full max-w-lg bg-zinc-900 border border-white/10 rounded-2xl shadow-2xl overflow-hidden relative"
            >
              {/* Close Button */}
              <button
                onClick={onClose}
                className="absolute top-4 right-4 p-2 text-gray-400 hover:text-white transition-colors rounded-full hover:bg-white/5"
              >
                <X className="w-5 h-5" />
              </button>

              <div className="p-8">
                {submitted ? (
                  <div className="flex flex-col items-center justify-center py-12 text-center space-y-4">
                    <div className="w-16 h-16 bg-green-500/10 rounded-full flex items-center justify-center text-green-500 mb-4">
                      <Check className="w-8 h-8" />
                    </div>
                    <h3 className="text-2xl font-bold text-white">Requirement Received!</h3>
                    <p className="text-gray-400">
                      Our ninjas are sharpening their shurikens. Expect a signal soon.
                    </p>
                  </div>
                ) : (
                  <>
                    <h3 className="text-2xl font-bold text-white mb-2">Join the Dojo</h3>
                    <p className="text-gray-400 mb-6">
                      Tell us about your chaos, and we'll show you the path to clarity.
                    </p>

                    <form onSubmit={handleSubmit} className="space-y-4">
                      <div className="space-y-2">
                        <label htmlFor="name" className="text-sm font-medium text-gray-300">Name</label>
                        <input
                          type="text"
                          id="name"
                          required
                          className="w-full px-4 py-3 bg-black/50 border border-white/10 rounded-lg text-white placeholder-gray-500 focus:outline-none focus:border-cyan-500 focus:ring-1 focus:ring-cyan-500 transition-colors"
                          placeholder="Sensei Smith"
                        />
                      </div>
                      
                      <div className="space-y-2">
                        <label htmlFor="email" className="text-sm font-medium text-gray-300">Work Email</label>
                        <input
                          type="email"
                          id="email"
                          required
                          className="w-full px-4 py-3 bg-black/50 border border-white/10 rounded-lg text-white placeholder-gray-500 focus:outline-none focus:border-cyan-500 focus:ring-1 focus:ring-cyan-500 transition-colors"
                          placeholder="sensei@company.com"
                        />
                      </div>

                      <div className="space-y-2">
                        <label htmlFor="company" className="text-sm font-medium text-gray-300">Company</label>
                        <input
                          type="text"
                          id="company"
                          required
                          className="w-full px-4 py-3 bg-black/50 border border-white/10 rounded-lg text-white placeholder-gray-500 focus:outline-none focus:border-cyan-500 focus:ring-1 focus:ring-cyan-500 transition-colors"
                          placeholder="Dojo Inc."
                        />
                      </div>

                      <div className="pt-4">
                        <button
                          type="submit"
                          className="w-full py-4 bg-cyan-500 hover:bg-cyan-400 text-black font-bold rounded-lg shadow-lg shadow-cyan-500/20 transition-colors"
                        >
                          Request Access
                        </button>
                      </div>
                    </form>
                  </>
                )}
              </div>
            </motion.div>
          </motion.div>
        </>
      )}
    </AnimatePresence>
  );
}
