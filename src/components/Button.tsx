import { ButtonHTMLAttributes, ReactNode } from "react";
import { cn } from "../lib/utils";

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  id?: string;
  className?: string;
  title?: string;
  leftIcon?: ReactNode;
  rightIcon?: ReactNode;
}

const Button = ({
  id,
  className,
  leftIcon,
  rightIcon,
  title,
  ...props
}: ButtonProps) => {
  return (
    <button
      id={id}
      className={cn(
        "group relative z-10 w-fit cursor-pointer overflow-hidden rounded-full bg-violet-50 px-7 py-3 text-black",
        className
      )}
      {...props}
    >
      {leftIcon}
      <span className="relative inline-flex overflow-hidden font-general text-xs uppercase">
        <div>{title}</div>
      </span>
      {rightIcon}
    </button>
  );
};

export default Button;
