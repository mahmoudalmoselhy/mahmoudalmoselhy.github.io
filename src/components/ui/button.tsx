import * as React from "react"
import { Slot } from "@radix-ui/react-slot"
import { cva, type VariantProps } from "class-variance-authority"

import { cn } from "@/lib/utils"

const buttonVariants = cva(
  "inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-full text-sm font-medium transition-all duration-300 ease-m3-standard focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 [&_svg]:pointer-events-none [&_svg]:size-4 [&_svg]:shrink-0",
  {
    variants: {
      variant: {
        // Colorful solid buttons with hover color change
        default: "bg-rose text-white hover:bg-pink hover:shadow-[0_4px_16px_hsl(330_81%_60%/0.4)] hover:-translate-y-0.5 active:scale-[0.98]",
        violet: "bg-violet text-white hover:bg-indigo hover:shadow-[0_4px_16px_hsl(239_84%_67%/0.4)] hover:-translate-y-0.5 active:scale-[0.98]",
        blue: "bg-blue text-white hover:bg-cyan hover:shadow-[0_4px_16px_hsl(192_91%_40%/0.4)] hover:-translate-y-0.5 active:scale-[0.98]",
        orange: "bg-orange text-white hover:bg-amber hover:shadow-[0_4px_16px_hsl(38_92%_50%/0.4)] hover:-translate-y-0.5 active:scale-[0.98]",
        emerald: "bg-emerald text-white hover:bg-teal hover:shadow-[0_4px_16px_hsl(174_62%_40%/0.4)] hover:-translate-y-0.5 active:scale-[0.98]",
        pink: "bg-pink text-white hover:bg-purple hover:shadow-[0_4px_16px_hsl(280_73%_55%/0.4)] hover:-translate-y-0.5 active:scale-[0.98]",
        indigo: "bg-indigo text-white hover:bg-violet hover:shadow-[0_4px_16px_hsl(262_83%_58%/0.4)] hover:-translate-y-0.5 active:scale-[0.98]",
        teal: "bg-teal text-white hover:bg-emerald hover:shadow-[0_4px_16px_hsl(160_84%_39%/0.4)] hover:-translate-y-0.5 active:scale-[0.98]",
        
        // Tonal variants - soft bg that fills on hover
        "tonal-rose": "bg-rose/12 text-rose hover:bg-rose hover:text-white hover:shadow-[0_4px_16px_hsl(350_89%_60%/0.3)] hover:-translate-y-0.5",
        "tonal-blue": "bg-blue/12 text-blue hover:bg-blue hover:text-white hover:shadow-[0_4px_16px_hsl(217_91%_60%/0.3)] hover:-translate-y-0.5",
        "tonal-violet": "bg-violet/12 text-violet hover:bg-violet hover:text-white hover:shadow-[0_4px_16px_hsl(262_83%_58%/0.3)] hover:-translate-y-0.5",
        "tonal-emerald": "bg-emerald/12 text-emerald hover:bg-emerald hover:text-white hover:shadow-[0_4px_16px_hsl(160_84%_39%/0.3)] hover:-translate-y-0.5",
        
        // Outlined variants - border that fills on hover
        outline: "border-2 border-rose bg-transparent text-rose hover:bg-rose hover:text-white hover:shadow-[0_4px_16px_hsl(350_89%_60%/0.3)] hover:-translate-y-0.5",
        "outline-blue": "border-2 border-blue bg-transparent text-blue hover:bg-blue hover:text-white hover:shadow-[0_4px_16px_hsl(217_91%_60%/0.3)] hover:-translate-y-0.5",
        "outline-violet": "border-2 border-violet bg-transparent text-violet hover:bg-violet hover:text-white hover:shadow-[0_4px_16px_hsl(262_83%_58%/0.3)] hover:-translate-y-0.5",
        "outline-emerald": "border-2 border-emerald bg-transparent text-emerald hover:bg-emerald hover:text-white hover:shadow-[0_4px_16px_hsl(160_84%_39%/0.3)] hover:-translate-y-0.5",
        
        // Utility variants
        destructive: "bg-destructive text-destructive-foreground hover:bg-destructive/90",
        secondary: "bg-secondary text-secondary-foreground hover:bg-secondary/80",
        ghost: "hover:bg-secondary text-foreground",
        link: "text-primary underline-offset-4 hover:underline",
      },
      size: {
        default: "h-10 px-6 py-2",
        sm: "h-9 px-4 py-2 text-xs",
        lg: "h-12 px-8 py-3",
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
