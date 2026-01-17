import React from 'react';

interface RepeaterProps {
  count?: number;
  children: React.ReactNode;
}

export const For = ({ count = 2, children }: RepeaterProps) => {
  return (
    <>
      {Array.from({ length: count }).map((_, index) => (
        <React.Fragment key={index}>{children}</React.Fragment>
      ))}
    </>
  );
};
