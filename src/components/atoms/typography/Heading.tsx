interface HeadingProps extends React.HTMLAttributes<HTMLHeadingElement> {
  h?: 1 | 2 | 3 | 4 | 5 | 6;
  children: React.ReactNode;
  className?: string;
}

export const Heading: React.FC<HeadingProps> = ({
  h = 1,
  children,
  className = "",
  ...props
}) => {
  const Tag = `h${h}` as "h1" | "h2" | "h3" | "h4" | "h5" | "h6";
  return (
    <Tag className={`text-heading-${h} ${className}`} {...props}>
      {children}
    </Tag>
  );
};
