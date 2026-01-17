import { motion } from 'motion/react';

interface HeroSectionProps {
  isActive: boolean;
  onOpenLetter: () => void;
}

export function HeroSection({ isActive, onOpenLetter }: HeroSectionProps) {
  if (!isActive) return null;

  return (
    <motion.div
      className="min-h-screen flex items-center justify-center px-6 relative"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      style={{
        background: 'linear-gradient(135deg, #fff5f7 0%, #ffe8ec 50%, #fff9fa 100%)',
      }}
    >
      {/* Subtle grain texture overlay */}
      <div 
        className="absolute inset-0 opacity-[0.015] pointer-events-none"
        style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 200 200' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noise'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='4' /%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noise)' /%3E%3C/svg%3E")`,
        }}
      />

      <div className="max-w-2xl w-full text-center relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.3 }}
        >
          <h1 className="text-5xl md:text-7xl mb-4 text-rose-900/80 tracking-wide" 
              style={{ fontFamily: '"Dancing Script", cursive' }}>
            Knock knock……
          </h1>
          <motion.p
            className="text-2xl md:text-3xl text-rose-800/70 mb-16"
            style={{ fontFamily: '"Cormorant Garamond", serif' }}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.8 }}
          >
            is this seat taken?
          </motion.p>
        </motion.div>

        <motion.button
          onClick={onOpenLetter}
          className="group relative px-8 py-6 rounded-full text-base md:text-lg overflow-hidden"
          style={{
            background: 'linear-gradient(135deg, #ffd1dc 0%, #ffb6c8 100%)',
            boxShadow: '0 8px 30px rgba(255, 182, 200, 0.3)',
            fontFamily: '"Dancing Script", cursive',
          }}
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.6, delay: 1.3 }}
          whileHover={{ 
            scale: 1.05,
            boxShadow: '0 12px 40px rgba(255, 182, 200, 0.5)',
          }}
          whileTap={{ scale: 0.98 }}
        >
          {/* Heartbeat glow effect */}
          <motion.div
            className="absolute inset-0 rounded-full"
            style={{
              background: 'radial-gradient(circle, rgba(255,255,255,0.4) 0%, transparent 70%)',
            }}
            animate={{
              opacity: [0.3, 0.6, 0.3],
              scale: [1, 1.1, 1],
            }}
            transition={{
              duration: 2,
              repeat: Infinity,
              ease: 'easeInOut',
            }}
          />
          
          <span className="relative z-10 text-rose-900 leading-relaxed block">
            Dearest Iria…<br />
            <span className="text-base md:text-lg">My iridescent goddess</span><br />
            <span className="text-sm md:text-base opacity-90">You illuminate these words on my tongue</span>
          </span>
        </motion.button>
      </div>

      {/* Font preload */}
      <link rel="preconnect" href="https://fonts.googleapis.com" />
      <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
      <link href="https://fonts.googleapis.com/css2?family=Dancing+Script:wght@400;600;700&family=Cormorant+Garamond:ital,wght@0,300;0,400;0,600;1,400&family=Inter:wght@300;400;500&display=swap" rel="stylesheet" />
    </motion.div>
  );
}
