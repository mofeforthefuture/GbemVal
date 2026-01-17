import { motion } from 'motion/react';
import { Heart, Sparkles } from 'lucide-react';

export function CelebrationModal() {
  return (
    <motion.div
      className="fixed inset-0 z-50 flex items-center justify-center px-6"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5 }}
      style={{
        background: 'rgba(139, 69, 80, 0.2)',
        backdropFilter: 'blur(10px)',
      }}
    >
      {/* Burst of hearts */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {Array.from({ length: 30 }).map((_, i) => {
          const angle = (i / 30) * Math.PI * 2;
          const distance = 150 + Math.random() * 200;
          const x = Math.cos(angle) * distance;
          const y = Math.sin(angle) * distance;
          
          return (
            <motion.div
              key={i}
              className="absolute top-1/2 left-1/2 text-rose-400"
              initial={{ x: 0, y: 0, scale: 0, opacity: 0 }}
              animate={{ 
                x, 
                y, 
                scale: [0, 1.5, 0],
                opacity: [0, 1, 0],
              }}
              transition={{
                duration: 2,
                delay: i * 0.02,
                ease: 'easeOut',
              }}
            >
              <Heart className="w-4 h-4 fill-current" />
            </motion.div>
          );
        })}
      </div>

      <motion.div
        className="relative max-w-lg w-full p-10 rounded-2xl text-center"
        initial={{ scale: 0.8, opacity: 0, y: 50 }}
        animate={{ scale: 1, opacity: 1, y: 0 }}
        transition={{ 
          duration: 0.6,
          delay: 0.2,
          type: 'spring',
          stiffness: 200,
        }}
        style={{
          background: 'linear-gradient(135deg, rgba(255, 255, 255, 0.98) 0%, rgba(255, 250, 245, 0.98) 100%)',
          boxShadow: '0 30px 80px rgba(139, 69, 80, 0.3)',
        }}
      >
        {/* Sparkle effects */}
        <motion.div
          className="absolute -top-6 -right-6 text-yellow-400"
          animate={{
            rotate: [0, 360],
            scale: [1, 1.2, 1],
          }}
          transition={{
            duration: 3,
            repeat: Infinity,
          }}
        >
          <Sparkles className="w-8 h-8" />
        </motion.div>

        <motion.div
          className="absolute -bottom-6 -left-6 text-yellow-400"
          animate={{
            rotate: [360, 0],
            scale: [1, 1.2, 1],
          }}
          transition={{
            duration: 3,
            repeat: Infinity,
            delay: 1.5,
          }}
        >
          <Sparkles className="w-8 h-8" />
        </motion.div>

        <motion.div
          className="flex justify-center mb-6"
          initial={{ scale: 0 }}
          animate={{ scale: 1 }}
          transition={{ 
            duration: 0.5,
            delay: 0.5,
            type: 'spring',
            stiffness: 300,
          }}
        >
          <div className="relative">
            <Heart className="w-20 h-20 text-rose-500 fill-rose-500" />
            <motion.div
              className="absolute inset-0"
              animate={{
                scale: [1, 1.3, 1],
                opacity: [0.5, 0, 0.5],
              }}
              transition={{
                duration: 2,
                repeat: Infinity,
              }}
            >
              <Heart className="w-20 h-20 text-rose-400 fill-rose-400" />
            </motion.div>
          </div>
        </motion.div>

        <motion.h3
          className="text-4xl md:text-5xl mb-4 text-rose-900"
          style={{ fontFamily: '"Dancing Script", cursive' }}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.7 }}
        >
          She said yes! 💕
        </motion.h3>

        <motion.p
          className="text-xl md:text-2xl text-rose-800/80 leading-relaxed"
          style={{ fontFamily: '"Cormorant Garamond", serif' }}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 1 }}
        >
          My heart is already racing…
          <br />
          <span className="text-lg italic">Happy Valentine's Day, my love</span>
        </motion.p>

        {/* Floating hearts around the modal */}
        {Array.from({ length: 8 }).map((_, i) => {
          const angle = (i / 8) * Math.PI * 2;
          const radius = 180;
          const x = Math.cos(angle) * radius;
          const y = Math.sin(angle) * radius;
          
          return (
            <motion.div
              key={`float-${i}`}
              className="absolute text-rose-300"
              style={{
                left: '50%',
                top: '50%',
              }}
              animate={{
                x: [0, x, 0],
                y: [0, y, 0],
                scale: [0, 1, 0],
                opacity: [0, 0.6, 0],
              }}
              transition={{
                duration: 3,
                delay: 1.5 + i * 0.2,
                repeat: Infinity,
              }}
            >
              <Heart className="w-3 h-3 fill-current" />
            </motion.div>
          );
        })}
      </motion.div>
    </motion.div>
  );
}
