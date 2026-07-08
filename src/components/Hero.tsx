import { motion } from 'motion/react';
import { Facebook } from 'lucide-react';
import GemUI from './GemUI';

export default function Hero() {
  return (
    <section className="relative pt-20 pb-20 overflow-hidden lg:pt-32 lg:pb-28">
      <div className="relative z-10 max-w-7xl mx-auto px-6 md:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <div className="flex items-end gap-4 mb-8">
              <span className="text-[#00FF00] text-[10px] sm:text-xs font-mono font-bold border border-[#00FF00] px-2 py-1 uppercase tracking-tighter whitespace-nowrap">Status: Active / Viral Ready</span>
              <div className="h-[1px] flex-1 bg-white/10 hidden sm:block"></div>
            </div>
            
            <h1 className="text-[50px] sm:text-[70px] xl:text-[90px] leading-[0.85] font-black italic tracking-tighter uppercase mb-8">
              Wild <br />
              <span className="text-transparent" style={{ WebkitTextStroke: '2px white' }}>Mutation</span> <br />
              AI Architect
            </h1>
            
            <p className="max-w-xl text-base sm:text-lg text-gray-400 font-light leading-relaxed mb-10">
              An autonomous research engine that builds high-retention <span className="text-white font-medium">"Epic Wildlife Transformation"</span> blueprints by scouting real-time trends. Built exclusively for Facebook Reels dominance.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4">
              <a 
                href="https://gemini.google.com/gem/fdbe8e88aaee?usp=sharing" 
                target="_blank" 
                rel="noreferrer"
                className="bg-[#00FF00] text-black h-16 px-8 flex items-center justify-center font-black uppercase tracking-tighter text-sm hover:scale-[1.02] active:scale-[0.98] transition-all"
              >
                Get the Gem
                <svg className="w-4 h-4 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="3" d="M17 8l4 4m0 0l-4 4m4-4H3"></path></svg>
              </a>
              
              <a 
                href="https://www.facebook.com/share/166hZ4UH8yB/" 
                target="_blank" 
                rel="noreferrer"
                className="h-16 px-8 flex items-center justify-center gap-2 font-bold uppercase tracking-widest text-[10px] sm:text-xs border border-white/20 hover:bg-[#1877F2]/10 hover:text-[#1877F2] hover:border-[#1877F2]/30 transition-colors"
              >
                <Facebook className="w-4 h-4" />
                View Live Proof
              </a>
            </div>
          </motion.div>

          {/* Right Column: Gem Mockup */}
          <div className="relative lg:block">
            {/* Glow behind the UI */}
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full h-[80%] bg-[#00FF00]/10 blur-[100px] rounded-full pointer-events-none"></div>
            <div className="relative z-10">
              <GemUI />
            </div>
          </div>
        </div>
      </div>
      
      {/* Watermark */}
      <div className="absolute top-1/2 right-12 rotate-90 origin-bottom-right hidden xl:block z-0">
        <span className="text-[120px] font-black text-white/5 uppercase select-none pointer-events-none whitespace-nowrap">ALGORITHM CRACKED</span>
      </div>
    </section>
  );
}
