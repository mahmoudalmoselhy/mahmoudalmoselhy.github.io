import * as React from "react"
import { Slot } from "@radix-ui/react-slot"
import { cva, type VariantProps } from "class-variance-authority"

import { cn } from "@/lib/utils"

const buttonVariants = cva(
  "inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-full text-sm font-semibold transition-all duration-300 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 [&_svg]:pointer-events-none [&_svg]:size-4 [&_svg]:shrink-0",
  {
    variants: {
      variant: {
        default: "bg-gradient-to-r from-[hsl(175,85%,50%)] via-[hsl(200,90%,55%)] to-[hsl(280,85%,65%)] text-primary-foreground shadow-md hover:from-[hsl(185,90%,55%)] hover:via-[hsl(280,85%,65%)] hover:to-[hsl(320,90%,60%)] hover:shadow-[0_0_25px_hsl(175,85%,50%,0.5)] hover:scale-105",
        outline:
          "border-2 border-[hsl(175,85%,50%)] bg-transparent text-[hsl(175,85%,50%)] hover:bg-gradient-to-r hover:from-[hsl(175,85%,50%)] hover:to-[hsl(200,90%,55%)] hover:text-primary-foreground hover:border-transparent hover:shadow-[0_0_20px_hsl(175,85%,50%,0.4)]",
        glow: "bg-gradient-to-r from-[hsl(175,85%,50%)] to-[hsl(200,90%,55%)] text-primary-foreground hover:from-[hsl(200,90%,55%)] hover:to-[hsl(280,85%,65%)] hover:shadow-[0_0_30px_hsl(200,90%,55%,0.6)] hover:scale-105",
        destructive:
          "bg-destructive text-destructive-foreground hover:bg-destructive/90 hover:shadow-[0_0_15px_hsl(0,62.8%,50%,0.5)]",
        secondary:
          "bg-secondary text-secondary-foreground hover:bg-gradient-to-r hover:from-[hsl(175,85%,50%,0.2)] hover:to-[hsl(280,85%,65%,0.2)] hover:text-[hsl(175,85%,50%)]",
        ghost: "hover:bg-gradient-to-r hover:from-[hsl(175,85%,50%,0.1)] hover:to-[hsl(200,90%,55%,0.1)] hover:text-[hsl(175,85%,50%)]",
        link: "text-[hsl(175,85%,50%)] underline-offset-4 hover:underline hover:text-[hsl(200,90%,55%)]",
      },
      size: {
        default: "h-auto px-8 py-3",
        sm: "h-auto px-6 py-2",
        lg: "h-auto px-10 py-4",
        icon: "h-10 w-10",
      },
    },
    defaultVariants: {
      variant: "default",
      size: "default",
    },
  }
)

export interface ButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement>,
    VariantProps<typeof buttonVariants> {
  asChild?: boolean
}

const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className, variant, size, asChild = false, ...props }, ref) => {
    const Comp = asChild ? Slot : "button"
    return (
      <Comp
        className={cn(buttonVariants({ variant, size, className }))}
        ref={ref}
        {...props}
      />
    )
  }
)
Button.displayName = "Button"

export { Button, buttonVariants }
