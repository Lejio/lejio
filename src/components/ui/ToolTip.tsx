import { motion, AnimatePresence } from 'framer-motion';
import { useState } from 'react';

const Tooltip = ({ text, children }: { text: string, children: React.ReactNode }) => {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <div className="relative flex items-center justify-center">
      <button
        className="rounded-md"
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
      >
        { children }
      </button>

      <AnimatePresence>
        {isHovered && (
          <motion.div
            className="absolute bottom-full mb-2 px-3 py-1 z-40 bg-black text-white text-sm rounded-md shadow-lg"
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: 10 }}
            transition={{ duration: 0.2 }}
          >
            {text}
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

export default Tooltip;
