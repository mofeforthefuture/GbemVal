import { motion } from 'motion/react';
import { Heart } from 'lucide-react';
import { useEffect, useState } from 'react';

interface PoemSectionProps {
  isActive: boolean;
  onComplete: () => void;
}

export function PoemSection({ isActive, onComplete }: PoemSectionProps) {
  const [showButton, setShowButton] = useState(false);

  useEffect(() => {
    if (isActive) {
      // Show button after poem animations complete
      const timer = setTimeout(() => {
        setShowButton(true);
      }, 6000);
      return () => clearTimeout(timer);
    }
  }, [isActive]);

  if (!isActive) return null;

  const stanzas = [
    [
      "Roses are sometimes red",
      "And violets sometimes blue",
      "But all their colours are jaded",
      "Cause my favorite colour is you",
    ],
    [
      "A box of chocolates never compared",
      "I don't even want fondue",
      "As the only taste I've come to prefer,",
      "Is your lips on mine, the taste of you",
    ],
    [
      "I could write a thousand lines",
      "But I do hope I did this right",
      "We both know one day of celebrating love will never suffice",
      "But for the sake of tradition, …",
    ],
  ];

  return (
    <motion.div
      className="min-h-screen flex items-center justify-center px-6 py-20 relative"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 1 }}
      style={{
        background: 'linear-gradient(135deg, #fff0f3 0%, #ffe5ea 50%, #fff5f7 100%)',
      }}
    >
      {/* Vignette effect */}
      <div 
        className="absolute inset-0 pointer-events-none"
        style={{
          background: 'radial-gradient(circle at center, transparent 0%, rgba(139, 69, 80, 0.05) 100%)',
        }}
      />

      <div className="max-w-2xl w-full relative z-10">
        {/* Paper texture background */}
        <motion.div
          className="relative p-8 md:p-12 rounded-lg"
          initial={{ scale: 0.9, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ duration: 0.8 }}
          style={{
            background: 'linear-gradient(135deg, rgba(255, 255, 255, 0.9) 0%, rgba(255, 250, 245, 0.95) 100%)',
            boxShadow: '0 20px 60px rgba(139, 69, 80, 0.15), inset 0 1px 0 rgba(255, 255, 255, 0.8)',
          }}
        >
          {/* Subtle ink texture */}
          <div 
            className="absolute inset-0 opacity-[0.02] rounded-lg pointer-events-none"
            style={{
              backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 200 200' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noise'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.8' /%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noise)' /%3E%3C/svg%3E")`,
            }}
          />

          <div className="relative">
            {stanzas.map((stanza, stanzaIndex) => (
              <motion.div
                key={stanzaIndex}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ 
                  duration: 0.8, 
                  delay: stanzaIndex * 1.5 + 0.5,
                }}
                className="mb-8 last:mb-0"
              >
                {stanza.map((line, lineIndex) => (
                  <motion.p
                    key={lineIndex}
                    className="text-xl md:text-2xl text-rose-900/80 leading-relaxed mb-1"
                    style={{ fontFamily: '"Cormorant Garamond", serif' }}
                    initial={{ opacity: 0, x: -10 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ 
                      duration: 0.6, 
                      delay: stanzaIndex * 1.5 + 0.5 + lineIndex * 0.2,
                    }}
                  >
                    {line}
                  </motion.p>
                ))}

                {/* Heart divider between stanzas */}
                {stanzaIndex < stanzas.length - 1 && (
                  <motion.div
                    className="flex items-center justify-center my-6"
                    initial={{ opacity: 0, scale: 0 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ 
                      duration: 0.5, 
                      delay: stanzaIndex * 1.5 + 2,
                    }}
                  >
                    <Heart className="w-4 h-4 text-rose-300 fill-rose-300" />
                  </motion.div>
                )}
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Continue button */}
        {showButton && (
          <motion.div
            className="flex justify-center mt-12"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <button
              onClick={onComplete}
              className="px-10 py-4 rounded-full text-lg"
              style={{
                background: 'linear-gradient(135deg, #ffd1dc 0%, #ffb6c8 100%)',
                boxShadow: '0 8px 30px rgba(255, 182, 200, 0.3)',
                fontFamily: '"Inter", sans-serif',
                fontWeight: 400,
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.boxShadow = '0 12px 40px rgba(255, 182, 200, 0.5)';
                e.currentTarget.style.transform = 'scale(1.05)';
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.boxShadow = '0 8px 30px rgba(255, 182, 200, 0.3)';
                e.currentTarget.style.transform = 'scale(1)';
              }}
            >
              <span className="text-rose-900">Continue</span>
            </button>
          </motion.div>
        )}
      </div>
    </motion.div>
  );
}
