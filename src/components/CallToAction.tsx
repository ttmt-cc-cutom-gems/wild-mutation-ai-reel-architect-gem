import { motion } from 'motion/react';
import { GitBranch, Cpu, Wand2, Sparkles, Code2 } from 'lucide-react';

export default function CallToAction() {
  return (
    <section className="py-24 border-t border-white/10 relative overflow-hidden bg-black">
      {/* Background gradients */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[400px] bg-[#00FF00]/5 blur-[120px] pointer-events-none rounded-full" />
      <div className="absolute -bottom-40 -right-40 w-96 h-96 bg-blue-500/10 blur-[100px] pointer-events-none rounded-full" />
      
      <div className="max-w-7xl mx-auto px-6 md:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          
          {/* Left Content */}
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.7 }}
            className="flex flex-col items-start text-left"
          >
            <div className="inline-flex items-center gap-2 text-[10px] uppercase tracking-widest text-[#00FF00] mb-6 font-bold border border-[#00FF00]/30 px-4 py-1.5 rounded-full bg-[#00FF00]/5">
              <Sparkles className="w-3 h-3" />
              <span>Open Source Instructions</span>
            </div>
            
            <h2 className="text-4xl md:text-5xl lg:text-7xl font-black italic tracking-tighter uppercase text-white leading-none mb-6">
              Mutate<br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-white to-gray-600">The Gem</span>
            </h2>
            
            <p className="text-gray-400 text-base md:text-lg font-light leading-relaxed mb-8 max-w-xl">
              Don't just use our AI architect—rebuild it. Grab the raw prompt details, clone the logic, and tweak the DNA. Change the animal focus, adjust the tone, or invent an entirely new viral format. The core engine is yours to command.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 w-full sm:w-auto">
              <a href="https://github.com/ttmt-cc-cutom-gems/wild-mutation-ai-reel-architect-gem" target="_blank" rel="noreferrer" className="group relative inline-flex items-center justify-center gap-3 bg-[#00FF00] text-black px-8 py-4 rounded-xl font-bold uppercase tracking-wider text-sm overflow-hidden transition-transform hover:scale-105 active:scale-95">
                <div className="absolute inset-0 bg-white/20 translate-y-full group-hover:translate-y-0 transition-transform duration-300 ease-out" />
                <GitBranch className="w-5 h-5 relative z-10" />
                <span className="relative z-10">Fork the Source</span>
              </a>
              
              <a href="https://gemini.google.com/gem/1fXbjdjhk6R76rZCL28RPQnE4beyTpYvy?usp=sharing" target="_blank" rel="noreferrer" className="group inline-flex items-center justify-center gap-3 bg-white/5 border border-white/10 text-white px-8 py-4 rounded-xl font-bold uppercase tracking-wider text-sm transition-all hover:bg-white/10 hover:border-white/20">
                <Wand2 className="w-5 h-5 group-hover:text-[#00FF00] transition-colors" />
                <span>Test Original</span>
              </a>
            </div>
          </motion.div>

          {/* Right Content - Visual Code/Node graphic */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.7, delay: 0.2 }}
            className="relative lg:h-[500px] flex items-center justify-center"
          >
            {/* Connecting lines */}
            <svg className="absolute inset-0 w-full h-full pointer-events-none opacity-20" viewBox="0 0 400 400" preserveAspectRatio="xMidYMid meet">
              <path d="M 200 50 C 200 150, 100 150, 100 250" fill="none" stroke="#00FF00" strokeWidth="2" strokeDasharray="4 4" />
              <path d="M 200 50 C 200 150, 300 150, 300 250" fill="none" stroke="#00FF00" strokeWidth="2" strokeDasharray="4 4" />
              <path d="M 200 50 C 200 200, 200 200, 200 350" fill="none" stroke="white" strokeWidth="2" />
            </svg>

            {/* Nodes */}
            <div className="relative w-full max-w-md mx-auto aspect-square">
              {/* Top Node - Original */}
              <div className="absolute top-0 left-1/2 -translate-x-1/2 bg-[#0A0A0A] border border-white/20 p-4 rounded-2xl shadow-2xl z-10 flex flex-col items-center group hover:border-[#00FF00]/50 transition-colors">
                <div className="w-12 h-12 bg-white/10 rounded-xl flex items-center justify-center mb-3">
                  <Cpu className="w-6 h-6 text-white" />
                </div>
                <div className="text-xs font-mono text-gray-400">wild-mutation-v1</div>
              </div>

              {/* Bottom Left Node - Fork 1 */}
              <div className="absolute bottom-20 left-0 bg-[#0A0A0A] border border-[#00FF00]/30 p-4 rounded-2xl shadow-2xl z-10 flex flex-col items-center hover:scale-105 transition-transform origin-bottom-left cursor-crosshair">
                <div className="w-10 h-10 bg-[#00FF00]/10 rounded-xl flex items-center justify-center mb-3">
                  <Code2 className="w-5 h-5 text-[#00FF00]" />
                </div>
                <div className="text-[10px] font-mono text-[#00FF00]">ocean-mutation-v2</div>
              </div>

              {/* Bottom Right Node - Fork 2 */}
              <div className="absolute bottom-20 right-0 bg-[#0A0A0A] border border-blue-500/30 p-4 rounded-2xl shadow-2xl z-10 flex flex-col items-center hover:scale-105 transition-transform origin-bottom-right cursor-crosshair">
                <div className="w-10 h-10 bg-blue-500/10 rounded-xl flex items-center justify-center mb-3">
                  <Wand2 className="w-5 h-5 text-blue-500" />
                </div>
                <div className="text-[10px] font-mono text-blue-400">mythic-beasts-v1</div>
              </div>

              {/* Bottom Center Node - Fork 3 */}
              <div className="absolute -bottom-4 left-1/2 -translate-x-1/2 bg-[#0A0A0A] border border-purple-500/30 p-4 rounded-2xl shadow-2xl z-10 flex flex-col items-center hover:scale-105 transition-transform origin-bottom cursor-crosshair">
                <div className="w-10 h-10 bg-purple-500/10 rounded-xl flex items-center justify-center mb-3">
                  <GitBranch className="w-5 h-5 text-purple-500" />
                </div>
                <div className="text-[10px] font-mono text-purple-400">your-custom-gem</div>
              </div>
            </div>
            
          </motion.div>
        </div>
      </div>
    </section>
  );
}
