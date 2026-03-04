import { ReactNode } from 'react';

interface GlassContainerProps {
  children: ReactNode;
  className?: string;
  intensity?: 'light' | 'medium' | 'heavy';
}

export default function GlassContainer({
  children,
  className = '',
  intensity = 'medium'
}: GlassContainerProps) {
  const intensityClasses = {
    light: 'glass-light',
    medium: 'glass-medium',
    heavy: 'glass-heavy'
  };

  return (
    <div
      className={`${intensityClasses[intensity]} ${className}`}
    >
      {children}
    </div>
  );
}
