interface TextProps extends React.HTMLAttributes<HTMLSpanElement> {
  className?: string;
  children: React.ReactNode;
}

export const Text: React.FC<TextProps> = ({ children, className = '', ...props }) => {
  return (
    <span className={`text-sm text-gray-600 ${className}`} {...props}>
      {children}
    </span>
  );
};