import { VariantProps, cva } from "class-variance-authority";
import React from "react";

const buttonVariants = cva("", {
  variants: {
    variant: {
      primary: "text-white bg-primary",
      secondary: "text-primary bg-white border border-primary",
      danger: "text-white bg-danger",
      warning: "text-white bg-warning",
      success: "text-white bg-success",
      info: "text-white bg-info",
      light: "text-white bg-light",
      dark: "text-white bg-dark",
      link: "text-primary bg-transparent",
    },
  },
});

export interface ButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement>,
    VariantProps<typeof buttonVariants> {
  isLoading?: boolean;
  children: React.ReactNode;
  onClick: () => void;
  leftSection?: React.ReactNode;
  rightSection?: React.ReactNode;
  roundedSize?: "sm" | "md" | "lg" | "xl" | "full";
}

function Button({ children, onClick, leftSection, rightSection }: ButtonProps) {
  return (
    <button
      onClick={onClick}
      className="flex items-center justify-center px-4 py-2 text-base font-medium text-white bg-primary rounded-md shadow-md focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-primary"
    >
      {leftSection}
      {children}
      {rightSection}
    </button>
  );
}

export default Button;
