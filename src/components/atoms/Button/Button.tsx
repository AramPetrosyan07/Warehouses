import React from "react";
import { Text } from "../typography/Text/Text";
import type { TextProps } from "../../../types/text.types";

interface ButtonProps extends Partial<Pick<TextProps, "variant" | "weight">> {
  text: string;
  onClick?: () => void;
  disabled?: boolean;
  className?: string;
  textClassName?: string;
}

export const Button: React.FC<ButtonProps> = ({
  text,
  onClick,
  disabled = false,
  className,
  textClassName,
  variant = "body1",
  weight = "medium",
}) => {
  console.log("className", className);

  return (
    <button className={className} onClick={onClick} disabled={disabled}>
      <Text variant={variant} weight={weight} customClassName={textClassName}>
        {text}
      </Text>
    </button>
  );
};
