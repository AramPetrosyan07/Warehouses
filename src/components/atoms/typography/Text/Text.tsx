import React, { type JSX } from "react";
import "./Text.scss";
import {
  allowedWeights,
  defaultTagMap,
  variantClasses,
  weightClasses,
  type TextProps,
} from "../../../../types/text.types";

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

  const inlineStyle = color
    ? { color, margin: 0, padding: 0, ...style }
    : { margin: 0, padding: 0, ...style };

  return (
    <Component className={classes} style={inlineStyle}>
      {children}
    </Component>
  );
};
