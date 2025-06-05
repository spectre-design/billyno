import * as React from "react"
import { Slot } from "@radix-ui/react-slot"
import { cva, type VariantProps } from "class-variance-authority"

import { cn } from "@/lib/utils"

const buttonVariants = cva(
  "inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-full text-base font-bold transition-all disabled:pointer-events-none disabled:opacity-50 [&_svg]:pointer-events-none [&_svg:not([class*='size-'])]:size-4 shrink-0 [&_svg]:shrink-0 outline-none focus-visible:border-ring focus-visible:ring-ring/50 focus-visible:ring-[3px] aria-invalid:ring-destructive/20 dark:aria-invalid:ring-destructive/40 aria-invalid:border-destructive",
  {
    variants: {
      variant: {
        default:
          "!bg-[#2D3C44] !text-white shadow font-bold hover:!bg-[#2D3C44]/90 active:!bg-[#2D3C44]/80 active:scale-95 disabled:bg-gray-200 disabled:text-gray-400",
        destructive:
          "bg-destructive text-white shadow hover:bg-destructive/90 active:bg-destructive/80 active:scale-95 aria-selected:bg-destructive aria-selected:text-white aria-selected:shadow-md",
        outline:
          "bg-white text-seaDeep border border-seaDeep shadow font-bold hover:bg-seaDeep/10 active:bg-seaDeep/20 active:scale-95 disabled:bg-gray-100 disabled:text-gray-400 disabled:border-gray-200",
        secondary:
          "bg-nickelPlate text-seaDeep shadow font-bold hover:bg-nickelPlate/80 active:bg-nickelPlate/60 active:scale-95 disabled:bg-gray-200 disabled:text-gray-400",
        ghost:
          "bg-transparent text-seaDeep hover:bg-seaDeep/10 active:bg-seaDeep/20 active:scale-95 aria-selected:bg-seaDeep aria-selected:text-white aria-selected:shadow-md",
        link: "text-seaDeep underline-offset-4 hover:underline",
      },
      size: {
        default: "h-11 px-6 py-3 has-[>svg]:px-5 text-base",
        sm: "h-9 rounded-full gap-1.5 px-4 has-[>svg]:px-3 text-sm",
        lg: "h-14 rounded-full px-8 has-[>svg]:px-6 text-lg",
        icon: "size-11",
      },
    },
    defaultVariants: {
      variant: "default",
      size: "default",
    },
  }
)

function Button({
  className,
  variant,
  size,
  asChild = false,
  ...props
}: React.ComponentProps<"button"> &
  VariantProps<typeof buttonVariants> & {
    asChild?: boolean
  }) {
  const Comp = asChild ? Slot : "button"

  return (
    <Comp
      data-slot="button"
      className={cn(buttonVariants({ variant, size, className }))}
      {...props}
    />
  )
}

export { Button, buttonVariants }
