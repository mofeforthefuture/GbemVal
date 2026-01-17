import { motion } from 'motion/react';
import { Heart } from 'lucide-react';

export function FloatingHearts() {
  const hearts = Array.from({ length: 12 }, (_, i) => ({
    id: i,
    delay: i * 2,
    x: Math.random() * 100,
    duration: 15 + Math.random() * 10,
  }));

  return (
    <div className="fixed inset-0 pointer-events-none overflow-hidden">
      {hearts.map((heart) => (
        <motion.div
          key={heart.id}
          className="absolute text-rose-200/20"
          initial={{ y: '100vh', x: `${heart.x}vw` }}
          animate={{
            y: '-10vh',
            x: [`${heart.x}vw`, `${heart.x + 5}vw`, `${heart.x}vw`],
          }}
          transition={{
            y: {
              duration: heart.duration,
              repeat: Infinity,
              delay: heart.delay,
              ease: 'linear',
            },
            x: {
              duration: 5,
              repeat: Infinity,
              ease: 'easeInOut',
            },
          }}
          style={{
            left: 0,
          }}
        >
          <Heart className="w-4 h-4 fill-current" />
        </motion.div>
      ))}
    </div>
  );
}
