import { motion } from 'motion/react';
import { Play } from 'lucide-react';

export default function PromotionalVideo() {
  return (
    <section className="py-24 border-t border-white/10 relative overflow-hidden bg-black/50">
      <div className="max-w-5xl mx-auto px-6 md:px-8">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="flex flex-col items-center text-center mb-12"
        >
          <div className="text-[10px] uppercase tracking-widest text-[#00FF00] mb-4 font-bold border border-[#00FF00]/30 px-3 py-1 rounded-full bg-[#00FF00]/5">The Full Workflow</div>
          <h2 className="text-4xl md:text-6xl font-black italic tracking-tighter uppercase mb-6 leading-tight">
            Watch The Masterclass
          </h2>
          <p className="text-gray-400 text-sm md:text-base font-light leading-relaxed max-w-2xl">
            Learn the exact 4-step framework used to generate viral Animal Transformation Reels that social media algorithms love. From prompting the Gem to native uploading.
          </p>
        </motion.div>
        
        <motion.div 
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="relative aspect-video w-full rounded-2xl border border-white/10 bg-black/50 overflow-hidden shadow-2xl shadow-[#00FF00]/10"
        >
          {/* The provided iframe embed */}
          <iframe 
            width="100%" 
            height="100%" 
            src="https://www.youtube.com/embed/uGNb_ompMfs?si=8YpSYT7UkYwmQOYO" 
            title="YouTube video player" 
            frameBorder="0" 
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" 
            referrerPolicy="strict-origin-when-cross-origin" 
            allowFullScreen
            className="absolute inset-0 w-full h-full"
          ></iframe>
        </motion.div>
      </div>
    </section>
  );
}
