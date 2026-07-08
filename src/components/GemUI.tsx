import { motion } from 'motion/react';
import { Plus, Mic, ArrowUp, MoreVertical, X, ChevronDown } from 'lucide-react';

export default function GemUI() {
  return (
    <motion.div 
      initial={{ opacity: 0, scale: 0.95 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ duration: 0.8, delay: 0.2 }}
      className="w-full max-w-2xl mx-auto rounded-2xl overflow-hidden border border-white/10 shadow-2xl bg-[#131314] font-sans flex flex-col min-h-[400px] sm:h-[500px]"
    >
      {/* Top Bar */}
      <div className="flex justify-end p-4">
        <MoreVertical className="w-5 h-5 text-gray-400" />
      </div>

      {/* Main Content Area */}
      <div className="flex-1 flex flex-col items-center justify-center px-6 sm:px-8 text-center mt-0 sm:mt-[-40px] py-8 sm:py-0">
        {/* Avatar */}
        <div className="w-12 h-12 sm:w-14 sm:h-14 rounded-full bg-[#004A77] flex items-center justify-center text-lg sm:text-xl text-white mb-4 sm:mb-6 shrink-0">
          W
        </div>
        
        {/* Title */}
        <h2 className="text-xl sm:text-2xl font-normal text-white mb-3 sm:mb-4">
          Wild Mutation AI Reel Architect
        </h2>
        
        {/* Description */}
        <p className="text-gray-300 text-xs sm:text-sm max-w-lg leading-relaxed">
          An autonomous, web-scouting script architect that researches current real-time video trends to build high-retention "Epic Wildlife Transformation" multi-clip Facebook Reels concepts.
        </p>
      </div>

      {/* Bottom Area (Input & Warning) */}
      <div className="p-4 sm:p-6 flex flex-col items-center gap-4">
        {/* Warning Pill */}
        <div className="flex items-center gap-2 sm:gap-3 bg-[#1E1F20] border border-white/5 px-3 sm:px-4 py-2 rounded-full text-[10px] sm:text-xs text-gray-300 max-w-full">
          <span className="truncate">This Gem is shared. Instructions may change.</span>
          <button className="hover:bg-white/10 p-1 rounded-full transition-colors shrink-0">
            <X className="w-3 h-3 sm:w-3.5 sm:h-3.5" />
          </button>
        </div>

        {/* Input Box */}
        <div className="w-full bg-[#1E1F20] rounded-[24px] p-1.5 sm:p-2 pl-3 sm:pl-4 flex items-center gap-2 sm:gap-3">
          <button className="p-1.5 sm:p-2 hover:bg-white/5 rounded-full transition-colors shrink-0">
            <Plus className="w-4 h-4 sm:w-5 sm:h-5 text-gray-400" />
          </button>
          
          <input 
            type="text" 
            placeholder="Ask Gemini" 
            className="flex-1 bg-transparent border-none outline-none text-white placeholder:text-gray-500 text-sm sm:text-[15px] min-w-0"
            readOnly
          />

          <div className="flex items-center gap-1 shrink-0">
            <button className="hidden sm:flex items-center gap-1 text-xs text-gray-300 bg-[#282A2C] px-3 py-1.5 rounded-lg hover:bg-white/10 transition-colors">
              Flash
              <ChevronDown className="w-3 h-3" />
            </button>
            <button className="hidden sm:flex p-2 hover:bg-white/5 rounded-full transition-colors">
              <Mic className="w-5 h-5 text-gray-400" />
            </button>
            <button className="w-8 h-8 sm:w-10 sm:h-10 bg-[#0A56D0] rounded-full flex items-center justify-center hover:bg-[#0B57D0]/90 transition-colors ml-1 shrink-0">
              <ArrowUp className="w-4 h-4 sm:w-5 sm:h-5 text-white" />
            </button>
          </div>
        </div>
      </div>
    </motion.div>
  );
}
