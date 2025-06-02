import React from 'react';

interface ParagraphProps extends React.HTMLAttributes<HTMLParagraphElement> {
  className?: string;
  children: React.ReactNode;
}

export const Paragraph: React.FC<ParagraphProps> = ({ children, className = '', ...props }) => {
  return (
    <p className={`text-base text-gray-700 leading-relaxed ${className}`} {...props}>
      {children}
    </p>
  );
};