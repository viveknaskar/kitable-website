
import { cn } from "./utils";

// Define common animation classes
const fadeIn = "animate-fade-in";
const blurIn = "animate-blur-in";
const slideInFromLeft = "animate-slide-in-from-left";
const slideInFromRight = "animate-slide-in-from-right";
const slideInFromBottom = "animate-slide-in-from-bottom";
const float = "animate-float";
const pulseSubtle = "animate-pulse-subtle";

// Animation variants with delays
export const getAnimationWithDelay = (
  animation: string,
  delayIndex: number = 0,
  baseDuration: number = 150
): string => {
  const delay = delayIndex * baseDuration;
  return cn(animation, `duration-400 [animation-delay:${delay}ms]`);
};

// Staggered animation for lists
export const getStaggeredAnimation = (
  animation: string = fadeIn,
  index: number = 0,
  staggerAmount: number = 50
): string => {
  return cn(animation, `[animation-delay:${index * staggerAmount}ms]`);
};

// Export named animation classes to be used directly
export const animations = {
  fadeIn,
  blurIn,
  slideInFromLeft,
  slideInFromRight,
  slideInFromBottom,
  float,
  pulseSubtle,
};

// Common animation patterns for specific UI elements
export const pageTransition = "animate-blur-in duration-300";
export const cardHoverEffect = "transition-all duration-300 hover:shadow-float hover:-translate-y-1";
export const buttonHoverEffect = "transition-all duration-200 hover:shadow-sm hover:-translate-y-0.5";
