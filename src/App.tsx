import { useState } from 'react';
import { HeroSection } from './components/HeroSection';
import { PoemSection } from './components/PoemSection';
import { FinalQuestion } from './components/FinalQuestion';
import { FloatingHearts } from './components/FloatingHearts';
import { CelebrationModal } from './components/CelebrationModal';

export default function App() {
  const [currentSection, setCurrentSection] = useState<'hero' | 'poem' | 'question'>('hero');
  const [showCelebration, setShowCelebration] = useState(false);

  const handleOpenLetter = () => {
    setCurrentSection('poem');
  };

  const handleRevealQuestion = () => {
    setCurrentSection('question');
  };

  const handleAnswer = () => {
    setShowCelebration(true);
  };

  return (
    <div className="min-h-screen relative overflow-hidden">
      <FloatingHearts />
      
      <HeroSection 
        isActive={currentSection === 'hero'}
        onOpenLetter={handleOpenLetter}
      />

      <PoemSection 
        isActive={currentSection === 'poem'}
        onComplete={handleRevealQuestion}
      />

      <FinalQuestion 
        isActive={currentSection === 'question'}
        onAnswer={handleAnswer}
      />

      {showCelebration && <CelebrationModal />}
    </div>
  );
}
