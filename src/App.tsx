import Hero from './components/Hero';
import Blueprint from './components/Blueprint';
import ProofAndScale from './components/ProofAndScale';
import PromotionalVideo from './components/PromotionalVideo';
import CallToAction from './components/CallToAction';
import { Gem, Youtube, Facebook, Instagram } from 'lucide-react';

export default function App() {
  return (
    <div className="min-h-screen border-0 md:border-[12px] md:border-[#111] selection:bg-[#00FF00]/30 selection:text-[#00FF00] overflow-x-hidden">
      <nav className="border-b border-white/10 p-6 md:p-8">
        <div className="max-w-7xl mx-auto flex items-center justify-between">
          <a href="https://ttmt-cc-cutom-gems.github.io/wild-mutation-ai-reel-architect-gem/" className="flex items-center gap-2 group">
             <div className="w-10 h-10 flex items-center justify-center group-hover:scale-110 transition-transform">
               <span className="text-3xl">🐺</span>
             </div>
             <span className="text-[10px] md:text-xs font-bold tracking-[0.2em] md:tracking-[0.3em] uppercase group-hover:text-[#00FF00] transition-colors">Wild Mutation AI Reel Architect Gem</span>
          </a>
          <div className="hidden md:flex gap-6 text-[10px] font-semibold tracking-widest uppercase opacity-60">
            <a href="https://github.com/ttmt-cc-cutom-gems/wild-mutation-ai-reel-architect-gem" target="_blank" rel="noreferrer" className="hover:text-[#00FF00] transition-colors">Source Code</a>
            <a href="https://gemini.google.com/gem/1fXbjdjhk6R76rZCL28RPQnE4beyTpYvy?usp=sharing" target="_blank" rel="noreferrer" className="hover:text-[#00FF00] transition-colors">Try the Gem</a>
          </div>
        </div>
      </nav>

      <main>
        <Hero />
        <PromotionalVideo />
        <Blueprint />
        <ProofAndScale />
        <CallToAction />
      </main>

      <footer className="border-t border-white/10 pt-12 pb-8">
        <div className="max-w-7xl mx-auto px-6 md:px-8">
           <div className="text-[10px] text-gray-500 font-semibold tracking-widest uppercase flex flex-col gap-8">
             <div className="flex flex-col lg:flex-row lg:items-center justify-between gap-8">
               <p className="max-w-3xl leading-relaxed lg:flex-1">Disclaimer: While this content style has high viral potential, specific views, reach, or income results are not guaranteed. Success heavily relies on consistency and platform updates.</p>
               
               <div className="flex flex-col md:flex-row items-start md:items-center gap-6 lg:flex-shrink-0">
                 <div className="flex items-center gap-4 bg-white/5 p-4 rounded-xl border border-white/10 w-full md:w-auto">
                   <div className="w-12 h-12 rounded-lg bg-[#00FF00]/10 overflow-hidden flex items-center justify-center flex-shrink-0 border border-[#00FF00]/20 p-0.5">
                     <img src="/ttmt-cc-custom-gems-logo.jpeg" alt="TTMT CC Custom Gems" className="w-full h-full object-cover rounded-md" />
                   </div>
                   <div className="flex flex-col">
                     <span className="text-[9px] uppercase tracking-widest text-[#00FF00] mb-1">Created By</span>
                     <a href="https://github.com/ttmt-cc-cutom-gems" target="_blank" rel="noreferrer" className="text-white hover:text-[#00FF00] transition-colors font-bold uppercase tracking-widest text-[11px] mb-0.5">TTMT CC Custom Gems</a>
                     <span className="normal-case tracking-normal text-xs text-gray-400">Custom Gemini Gems for content automations.</span>
                   </div>
                 </div>
               </div>
             </div>
             
             <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-6 mt-4 border-t border-white/5 pt-8">
               <div className="flex items-center gap-3">
                 <div className="w-8 h-8 rounded bg-[#00FFFF]/10 border border-[#00FFFF]/20 flex items-center justify-center p-0.5">
                   <img src="/the-time-machine-tech-logo.jpeg" alt="The Time Machine Tech" className="w-full h-full object-cover" />
                 </div>
                 <p className="whitespace-nowrap text-sm text-gray-500">&copy; {new Date().getFullYear()} <a href="https://www.youtube.com/@TheTimeMachineTech" target="_blank" rel="noreferrer" className="hover:text-[#00FF00] transition-colors font-medium">The Time Machine Tech</a></p>
               </div>
               <div className="flex items-center gap-6">
                 <a href="https://www.youtube.com/@TheTimeMachineTech" target="_blank" rel="noreferrer" className="flex items-center gap-2 text-gray-500 hover:text-[#FF0000] transition-colors">
                   <Youtube className="w-4 h-4" />
                   <span>YouTube</span>
                 </a>
                 <a href="https://www.facebook.com/thetimemachinetech/" target="_blank" rel="noreferrer" className="flex items-center gap-2 text-gray-500 hover:text-[#1877F2] transition-colors">
                   <Facebook className="w-4 h-4" />
                   <span>Facebook</span>
                 </a>
                 <a href="https://www.instagram.com/thetimemachinetech/" target="_blank" rel="noreferrer" className="flex items-center gap-2 text-gray-500 hover:text-[#E4405F] transition-colors">
                   <Instagram className="w-4 h-4" />
                   <span>Instagram</span>
                 </a>
               </div>
             </div>
             <div className="mt-6 text-center">
               <p className="text-[10px] text-gray-600 max-w-2xl mx-auto leading-relaxed">
                 &copy; 2026 The Time Machine Tech<br />
                 Released under the MIT License. Copyright &copy; {new Date().getFullYear()} TTMT CC Custom Gems. <br />
                 See the <a href="https://github.com/ttmt-cc-cutom-gems/wild-mutation-ai-reel-architect-gem/blob/main/LICENSE" target="_blank" rel="noreferrer" className="underline hover:text-[#00FF00] transition-colors">LICENSE</a> file for details.
               </p>
             </div>
           </div>
        </div>
      </footer>
    </div>
  );
}
