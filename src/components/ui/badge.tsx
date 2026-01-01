import * as React from "react"
import { cva, type VariantProps } from "class-variance-authority"

import { cn } from "@/lib/utils"

const badgeVariants = cva(
  "inline-flex items-center rounded-full border px-2.5 py-0.5 text-xs font-semibold transition-colors focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2",
  {
    variants: {
      variant: {
        default:
          "border-transparent bg-primary text-primary-foreground hover:bg-primary/80",
        secondary:
          "border-transparent bg-secondary text-secondary-foreground hover:bg-secondary/80",
        destructive:
          "border-transparent bg-destructive text-destructive-foreground hover:bg-destructive/80",
        outline: "text-foreground",
        // Colorful variants
        rose: "border-transparent bg-rose/15 text-rose",
        orange: "border-transparent bg-orange/15 text-orange",
        amber: "border-transparent bg-amber/15 text-amber",
        emerald: "border-transparent bg-emerald/15 text-emerald",
        teal: "border-transparent bg-teal/15 text-teal",
        cyan: "border-transparent bg-cyan/15 text-cyan",
        blue: "border-transparent bg-blue/15 text-blue",
        indigo: "border-transparent bg-indigo/15 text-indigo",
        violet: "border-transparent bg-violet/15 text-violet",
        purple: "border-transparent bg-purple/15 text-purple",
        pink: "border-transparent bg-pink/15 text-pink",
        lime: "border-transparent bg-lime/15 text-lime",
      },
    },
    defaultVariants: {
      variant: "default",
    },
  }
)

// Array of colorful variants for cycling through
export const colorfulVariants = [
  "rose", "orange", "emerald", "blue", "violet", "pink", 
  "amber", "teal", "cyan", "indigo", "purple", "lime"
] as const;

// Get a consistent color based on string hash
export function getColorVariant(str: string, index?: number): "rose" | "orange" | "amber" | "emerald" | "teal" | "cyan" | "blue" | "indigo" | "violet" | "purple" | "pink" | "lime" {
  if (typeof index === 'number') {
    return colorfulVariants[index % colorfulVariants.length];
  }
  // Simple hash function
  let hash = 0;
  for (let i = 0; i < str.length; i++) {
    hash = ((hash << 5) - hash) + str.charCodeAt(i);
    hash |= 0;
  }
  return colorfulVariants[Math.abs(hash) % colorfulVariants.length];
}

export interface BadgeProps
  extends React.HTMLAttributes<HTMLDivElement>,
    VariantProps<typeof badgeVariants> {}

function Badge({ className, variant, ...props }: BadgeProps) {
  return (
    <div className={cn(badgeVariants({ variant }), className)} {...props} />
  )
}

export { Badge, badgeVariants }