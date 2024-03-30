import { VariantProps, cva } from "class-variance-authority";
import React from "react";
import { tailwindClassesMerger } from "../../lib/utils";

const buttonVariants = cva("", {
  variants: {
    variant: {
      primary: "text-white bg-primary",
      secondary: "text-primary bg-white border border-primary",
      danger: "text-white bg-danger",
      warning: "text-white bg-warning",
      success: "text-white bg-success",
      info: "text-white bg-info",
      light: "text-primary bg-[#E5F4F2]",
      dark: "text-white bg-dark",
      link: "text-primary font-semibold bg-transparent",
      outline: "text-primary bg-transparent border-2 bg-white border-primary",
    },
    size: {
      sm: "w-20 h-8",
      md: "w-24 h-10",
      lg: "w-32 h-12",
      xl: "w-40 h-14",
      "2xl": "w-48 h-16",
      "3xl": "w-56 h-20",
      full: "w-full h-16",
    },
    textSize: {
      xs: "text-xs",
      sm: "text-sm",
      base: "text-base",
      lg: "text-lg",
      xl: "text-xl",
      "2xl": "text-2xl",
      "3xl": "text-3xl",
    },
    roundedSize: {
      none: "",
      sm: "rounded-sm",
      md: "rounded-md",
      lg: "rounded-lg",
      xl: "rounded-xl",
      "2xl": "rounded-2xl",
      "3xl": "rounded-3xl",
      full: "rounded-full",
    },
  },
});

export interface ButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement>,
    VariantProps<typeof buttonVariants> {
  isLoading?: boolean;
  children: React.ReactNode;
  onClick?: () => void;
  leftSection?: React.ReactNode;
  rightSection?: React.ReactNode;
}

function Button({
  children,
  onClick,
  leftSection,
  rightSection,
  isLoading,
  roundedSize,
  variant,
  size,
  textSize,
  className,
}: ButtonProps) {
  return (
    <button
      onClick={onClick}
      disabled={isLoading}
      className={tailwindClassesMerger(
        "flex items-center justify-center px-4 py-2 text-base font-medium focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-primary",
        buttonVariants({ variant, roundedSize, size, textSize, className })
      )}
    >
      {leftSection}
      {children}
      {rightSection}
    </button>
  );
}

export default Button;
