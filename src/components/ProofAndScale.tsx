import { motion } from 'motion/react';

export default function ProofAndScale() {
  return (
    <section className="py-24 border-t border-white/10 relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 md:px-8">
        
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 mb-24">
          <div className="lg:col-span-5 lg:border-r border-white/10 lg:pr-10">
            <div className="text-[10px] uppercase tracking-widest text-[#1877F2] mb-4 font-bold border border-[#1877F2]/30 px-3 py-1 rounded-full bg-[#1877F2]/10 inline-block">The Proof</div>
            <h3 className="text-3xl font-black italic tracking-tighter uppercase mb-8 text-white">Live Facebook Test</h3>
            
            <a href="https://www.facebook.com/share/166hZ4UH8yB/" target="_blank" rel="noreferrer" className="block group">
              <div className="bg-[#0A0A0A] border border-white/10 rounded-2xl p-6 md:p-8 group-hover:border-[#1877F2]/40 transition-colors relative overflow-hidden shadow-2xl">
                <div className="absolute top-0 right-0 w-32 h-32 bg-[#1877F2]/10 rounded-bl-full blur-2xl"></div>
                <div className="flex items-center gap-5 mb-6 relative z-10">
                  <div className="w-20 h-20 rounded-full bg-[#1A1A1A] overflow-hidden border-2 border-white/10 group-hover:border-[#1877F2] transition-colors shrink-0">
                    <img src="./wolf.webp" alt="Wild Mutation AI" className="w-full h-full object-cover group-hover:scale-105 transition-all duration-500" />
                  </div>
                  <div>
                    <h4 className="font-bold text-2xl text-white group-hover:text-[#1877F2] transition-colors">Wild Mutation AI</h4>
                    <p className="text-gray-500 text-sm mt-1">Facebook Page</p>
                  </div>
                </div>
                <div className="text-sm md:text-base text-gray-400 leading-relaxed font-light mb-6 relative z-10">
                  We set up a brand new Facebook page specifically to stress-test this exact reel format. Look at the page we published just days ago. The recommendation engine loves this style of content!
                </div>
                <div className="flex items-center gap-2 text-xs font-bold text-[#1877F2] uppercase tracking-widest relative z-10">
                  View Live Page Proof
                  <svg className="w-4 h-4 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M14 5l7 7m0 0l-7 7m7-7H3"></path></svg>
                </div>
              </div>
            </a>
          </div>

          <div className="lg:col-span-7">
            <div className="text-[10px] uppercase tracking-widest opacity-40 mb-4 font-bold">Dominate Platforms</div>
            <h2 className="text-4xl md:text-6xl font-black italic tracking-tighter uppercase mb-12">Scale Across Networks</h2>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-12 md:gap-8">
              <div>
                <div className="text-2xl font-black italic uppercase tracking-tighter mb-4 text-[#00FF00]">Multi-Platform</div>
                <p className="text-gray-400 text-sm font-light leading-relaxed">
                  Don't stop at Facebook. Take this workflow to Instagram Reels and TikTok.
                </p>
              </div>
              <div>
                <div className="text-2xl font-black italic uppercase tracking-tighter mb-4 text-[#00FF00]">Copyright Safe</div>
                <p className="text-gray-400 text-sm font-light leading-relaxed">
                  Upload raw clips natively. Select background music directly from the native library.
                </p>
              </div>
              <div>
                <div className="text-2xl font-black italic uppercase tracking-tighter mb-4 text-[#00FF00]">Monetization</div>
                <p className="text-gray-400 text-sm font-light leading-relaxed">
                  Direct content monetization and creator fund income. Plug affiliate links for passive revenue.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
