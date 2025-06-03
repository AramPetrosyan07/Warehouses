import React, { type JSX } from "react";
import "./Text.scss";

interface TextProps {
  children: React.ReactNode;
  variant: "h1" | "h2" | "h3" | "body1" | "body2" | "caption" | "small";
  weight?: "regular" | "medium" | "medium_underline" | "bold";
  color?: string; // Accepts any color value: hex, named colors, or SCSS variables
  as?: keyof JSX.IntrinsicElements;
  customClassName?: string;
  style?: React.CSSProperties;
}

const variantClasses: Record<TextProps["variant"], string> = {
  h1: "text-h1",
  h2: "text-h2",
  h3: "text-h3",
  body1: "text-body1",
  body2: "text-body2",
  caption: "text-caption",
  small: "text-small",
};

const weightClasses: Record<NonNullable<TextProps["weight"]>, string> = {
  regular: "font-regular",
  medium: "font-medium",
  medium_underline: "font-medium-underline",
  bold: "font-bold",
};

const defaultTagMap: Record<TextProps["variant"], keyof JSX.IntrinsicElements> =
  {
    h1: "h1",
    h2: "h2",
    h3: "h3",
    body1: "p",
    body2: "p",
    caption: "span",
    small: "span",
  };

const allowedWeights: Record<TextProps["variant"], TextProps["weight"][]> = {
  h1: ["bold"],
  h2: ["bold"],
  h3: ["medium", "bold"],
  body1: ["regular", "medium", "bold"],
  body2: ["regular", "medium", "medium_underline", "bold"],
  caption: ["regular", "medium", "bold"],
  small: ["regular"],
};

export const Text: React.FC<TextProps> = ({
  children,
  variant,
  weight = "regular",
  color,
  as,
  customClassName = "",
  style = {},
}) => {
  const Component = as || defaultTagMap[variant];

  const finalWeight = allowedWeights[variant].includes(weight)
    ? weight
    : allowedWeights[variant][0] || "regular";

  const classes = [
    variantClasses[variant],
    weightClasses[finalWeight],
    customClassName,
  ]
    .filter(Boolean)
    .join(" ");

  console.log("classes", classes);

  const inlineStyle = color
    ? { color, margin: 0, padding: 0, ...style }
    : { margin: 0, padding: 0, ...style };

  return (
    <Component className={classes} style={inlineStyle}>
      {children}
    </Component>
  );
};
