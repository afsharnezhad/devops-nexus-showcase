import { useState, useEffect } from 'react';

interface TerminalTextProps {
  text: string;
  className?: string;
  typingSpeed?: number;
  startDelay?: number;
}

export const TerminalText = ({ 
  text, 
  className = '', 
  typingSpeed = 50,
  startDelay = 2000 
}: TerminalTextProps) => {
  const [displayedText, setDisplayedText] = useState('');
  const [currentIndex, setCurrentIndex] = useState(0);
  const [showCursor, setShowCursor] = useState(true);

  useEffect(() => {
    const cursorInterval = setInterval(() => {
      setShowCursor(prev => !prev);
    }, 530);

    return () => clearInterval(cursorInterval);
  }, []);

  useEffect(() => {
    const startTimeout = setTimeout(() => {
      if (currentIndex < text.length) {
        const timeout = setTimeout(() => {
          setDisplayedText(prev => prev + text[currentIndex]);
          setCurrentIndex(prev => prev + 1);
        }, typingSpeed);

        return () => clearTimeout(timeout);
      }
    }, startDelay);

    return () => clearTimeout(startTimeout);
  }, [currentIndex, text, typingSpeed, startDelay]);

  return (
    <div className={`font-mono ${className}`}>
      <span className="text-primary">$</span>{' '}
      <span className="text-foreground/90">{displayedText}</span>
      <span 
        className={`inline-block w-2 h-5 ml-1 bg-primary ${
          showCursor ? 'opacity-100' : 'opacity-0'
        } transition-opacity`}
      />
    </div>
  );
};
