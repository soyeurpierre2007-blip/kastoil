import React from "react";
import { cn } from "@/lib/utils";
import { VariantProps, cva } from "class-variance-authority";

const buttonVariants = cva(
  "relative group border text-[#D4A017] mx-auto text-center rounded-full font-semibold transition-all duration-300 cursor-pointer",
  {
    variants: {
      variant: {
        default:
          "bg-[#D4A017]/10 hover:bg-[#D4A017]/15 border-[#D4A017]/30 hover:border-[#D4A017]/60",
        solid:
          "bg-[#D4A017] hover:bg-[#C49010] text-[#0B0E11] border-transparent hover:shadow-[0_0_30px_rgba(212,160,23,0.4)]",
        ghost:
          "border-transparent bg-transparent hover:border-[#D4A017]/40",
      },
      size: {
        default: "px-7 py-2 text-sm",
        sm: "px-4 py-1.5 text-xs",
        lg: "px-10 py-3.5 text-base",
        xl: "px-14 py-4 text-lg",
      },
    },
    defaultVariants: { variant: "default", size: "default" },
  }
);

export interface ButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement>,
    VariantProps<typeof buttonVariants> {
  neon?: boolean;
  href?: string;
  target?: string;
  rel?: string;
}

const NeonButton = React.forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className, neon = true, size, variant, children, href, target, rel, ...props }, ref) => {
    const classes = cn(buttonVariants({ variant, size }), className);
    const inner = (
      <>
        <span
          className={cn(
            "absolute h-px opacity-0 group-hover:opacity-100 transition-all duration-500 inset-x-0 top-0 bg-gradient-to-r w-3/4 mx-auto from-transparent via-[#D4A017] to-transparent",
            neon ? "block" : "hidden"
          )}
        />
        {children}
        <span
          className={cn(
            "absolute group-hover:opacity-30 transition-all duration-500 inset-x-0 h-px -bottom-px bg-gradient-to-r w-3/4 mx-auto from-transparent via-[#D4A017] to-transparent",
            neon ? "block" : "hidden"
          )}
        />
      </>
    );

    if (href) {
      return (
        <a href={href} target={target} rel={rel} className={classes}>
          {inner}
        </a>
      );
    }

    return (
      <button className={classes} ref={ref} {...props}>
        {inner}
      </button>
    );
  }
);

NeonButton.displayName = "NeonButton";
export { NeonButton, buttonVariants };
