import React from 'react';

interface CaptionProps {
  children: React.ReactNode;
}

export default function Caption({ children } : CaptionProps) {
  return (
    <p className='mt-2 text-center text-xs text-gray-500' data-testid='Caption-paragraph'>
      {children}
    </p>
  );
};