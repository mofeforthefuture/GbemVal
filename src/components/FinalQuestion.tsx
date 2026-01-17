import { motion } from 'motion/react';
import { Heart } from 'lucide-react';
import { useState } from 'react';

interface FinalQuestionProps {
  isActive: boolean;
  onAnswer: () => void;
}

export function FinalQuestion({ isActive, onAnswer }: FinalQuestionProps) {
  const [hoveredButton, setHoveredButton] = useState<string | null>(null);

  if (!isActive) return null;

  return (
    <motion.div
      className="min-h-screen flex items-center justify-center px-6 relative"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 1.2 }}
      style={{
        background: 'linear-gradient(135deg, #ffe8ec 0%, #ffd1dc 50%, #ffe8ec 100%)',
      }}
    >
      {/* Soft glow vignette */}
      <div 
        className="absolute inset-0 pointer-events-none"
        style={{
          background: 'radial-gradient(circle at center, rgba(255, 255, 255, 0.3) 0%, transparent 70%)',
        }}
      />

      {/* Ambient floating hearts on this section */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {Array.from({ length: 6 }).map((_, i) => (
          <motion.div
            key={i}
            className="absolute text-rose-300/30"
            initial={{ 
              x: `${20 + i * 15}vw`,
              y: '100vh',
            }}
            animate={{
              y: '-20vh',
              x: [`${20 + i * 15}vw`, `${25 + i * 15}vw`, `${20 + i * 15}vw`],
            }}
            transition={{
              y: {
                duration: 8 + i * 2,
                repeat: Infinity,
                ease: 'linear',
                delay: i * 0.5,
              },
              x: {
                duration: 3,
                repeat: Infinity,
                ease: 'easeInOut',
              },
            }}
          >
            <Heart className="w-6 h-6 fill-current" />
          </motion.div>
        ))}
      </div>

      <div className="max-w-2xl w-full text-center relative z-10">
        <motion.h2
          className="text-5xl md:text-7xl mb-16 text-rose-900"
          style={{ fontFamily: '"Dancing Script", cursive' }}
          initial={{ opacity: 0, scale: 0.9, y: 30 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.3 }}
        >
          Will you be my Valentine?
        </motion.h2>

        <motion.div
          className="flex flex-col sm:flex-row gap-6 justify-center items-center"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.8 }}
        >
          <motion.button
            onClick={onAnswer}
            onMouseEnter={() => setHoveredButton('yes')}
            onMouseLeave={() => setHoveredButton(null)}
            className="relative px-12 py-5 rounded-full text-xl md:text-2xl overflow-hidden min-w-[200px]"
            style={{
              background: 'linear-gradient(135deg, #ffb6c8 0%, #ff9db3 100%)',
              boxShadow: hoveredButton === 'yes' 
                ? '0 16px 50px rgba(255, 157, 179, 0.6)' 
                : '0 10px 35px rgba(255, 157, 179, 0.4)',
              fontFamily: '"Inter", sans-serif',
              fontWeight: 500,
            }}
            whileHover={{ scale: 1.08 }}
            whileTap={{ scale: 0.95 }}
          >
            {/* Glow effect on hover */}
            <motion.div
              className="absolute inset-0 rounded-full"
              style={{
                background: 'radial-gradient(circle, rgba(255,255,255,0.5) 0%, transparent 70%)',
              }}
              animate={{
                opacity: hoveredButton === 'yes' ? [0.3, 0.6, 0.3] : 0,
              }}
              transition={{
                duration: 1.5,
                repeat: hoveredButton === 'yes' ? Infinity : 0,
              }}
            />
            <span className="relative z-10 text-white flex items-center justify-center gap-2">
              Yes 💕
            </span>
          </motion.button>

          <motion.button
            onClick={onAnswer}
            onMouseEnter={() => setHoveredButton('ofcourse')}
            onMouseLeave={() => setHoveredButton(null)}
            className="relative px-12 py-5 rounded-full text-xl md:text-2xl overflow-hidden min-w-[200px]"
            style={{
              background: 'linear-gradient(135deg, #ffd1dc 0%, #ffb6c8 100%)',
              boxShadow: hoveredButton === 'ofcourse' 
                ? '0 16px 50px rgba(255, 182, 200, 0.6)' 
                : '0 10px 35px rgba(255, 182, 200, 0.4)',
              fontFamily: '"Inter", sans-serif',
              fontWeight: 500,
            }}
            whileHover={{ scale: 1.08 }}
            whileTap={{ scale: 0.95 }}
          >
            {/* Glow effect on hover */}
            <motion.div
              className="absolute inset-0 rounded-full"
              style={{
                background: 'radial-gradient(circle, rgba(255,255,255,0.5) 0%, transparent 70%)',
              }}
              animate={{
                opacity: hoveredButton === 'ofcourse' ? [0.3, 0.6, 0.3] : 0,
              }}
              transition={{
                duration: 1.5,
                repeat: hoveredButton === 'ofcourse' ? Infinity : 0,
              }}
            />
            <span className="relative z-10 text-rose-900 flex items-center justify-center gap-2">
              Of course 💖
            </span>
          </motion.button>
        </motion.div>

        {/* Subtle hint text */}
        <motion.p
          className="mt-8 text-rose-700/60 text-sm"
          style={{ fontFamily: '"Cormorant Garamond", serif' }}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 1.5 }}
        >
          (both answers lead to the same place in my heart)
        </motion.p>
      </div>
    </motion.div>
  );
}
