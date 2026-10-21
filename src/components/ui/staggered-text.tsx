'use client';

import React from 'react';
import { motion, Variants } from 'framer-motion';

export interface StaggeredTextProps {
  text: string;
  segmentBy?: 'chars' | 'words' | 'lines';
  direction?: 'top' | 'bottom' | 'left' | 'right';
  staggerDirection?: 'forward' | 'reverse' | 'center';
  duration?: number;
  delay?: number; // per item delay in ms
  stagger?: number; // total start delay in sec
  blur?: boolean;
  className?: string;
  as?: React.ElementType;
}

export function StaggeredText({
  text,
  segmentBy = 'words',
  direction = 'bottom',
  staggerDirection = 'forward',
  duration = 0.8,
  delay = 50,
  stagger = 0,
  blur = true,
  className = '',
  as: Component = 'div',
}: StaggeredTextProps) {
  // Direction offsets
  const getOffset = () => {
    switch (direction) {
      case 'top':
        return { y: -30, x: 0 };
      case 'bottom':
        return { y: 30, x: 0 };
      case 'left':
        return { y: 0, x: -30 };
      case 'right':
        return { y: 0, x: 30 };
      default:
        return { y: 30, x: 0 };
    }
  };

  const offset = getOffset();
  const delayInSeconds = delay / 1000;

  const itemVariants: Variants = {
    hidden: {
      opacity: 0,
      x: offset.x,
      y: offset.y,
      filter: blur ? 'blur(8px)' : 'blur(0px)',
    },
    visible: (custom: number) => ({
      opacity: 1,
      x: 0,
      y: 0,
      filter: 'blur(0px)',
      transition: {
        duration,
        delay: custom,
        ease: [0.16, 1, 0.3, 1],
      },
    }),
  };

  if (segmentBy === 'chars') {
    const words = text.split(' ');
    let globalCharIndex = 0;
    const totalChars = text.length;

    const getCharDelay = (index: number) => {
      if (staggerDirection === 'reverse') {
        return (totalChars - 1 - index) * delayInSeconds + stagger;
      }
      if (staggerDirection === 'center') {
        const middle = (totalChars - 1) / 2;
        return Math.abs(index - middle) * delayInSeconds + stagger;
      }
      return index * delayInSeconds + stagger;
    };

    return (
      <Component className={`inline-flex flex-wrap justify-center items-center gap-[0.3em] ${className}`}>
        {words.map((word, wordIdx) => {
          const chars = Array.from(word);
          return (
            <span key={`${word}-${wordIdx}`} className="inline-block whitespace-nowrap">
              {chars.map((char) => {
                const charIdx = globalCharIndex++;
                const itemDelay = getCharDelay(charIdx);
                return (
                  <motion.span
                    key={`${char}-${charIdx}`}
                    custom={itemDelay}
                    variants={itemVariants}
                    initial="hidden"
                    animate="visible"
                    className="inline-block"
                  >
                    {char}
                  </motion.span>
                );
              })}
            </span>
          );
        })}
      </Component>
    );
  }

  // Split words or lines
  const segments = segmentBy === 'lines' ? text.split('\n') : text.split(' ');
  const totalSegments = segments.length;

  const getSegmentDelay = (index: number) => {
    if (staggerDirection === 'reverse') {
      return (totalSegments - 1 - index) * delayInSeconds + stagger;
    }
    if (staggerDirection === 'center') {
      const middle = (totalSegments - 1) / 2;
      return Math.abs(index - middle) * delayInSeconds + stagger;
    }
    return index * delayInSeconds + stagger;
  };

  return (
    <Component className={`inline-flex flex-wrap justify-center items-center gap-[0.3em] ${className}`}>
      {segments.map((segment, index) => {
        const itemDelay = getSegmentDelay(index);
        return (
          <motion.span
            key={`${segment}-${index}`}
            custom={itemDelay}
            variants={itemVariants}
            initial="hidden"
            animate="visible"
            className="inline-block whitespace-nowrap"
          >
            {segment}
          </motion.span>
        );
      })}
    </Component>
  );
}

export default StaggeredText;
