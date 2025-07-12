import type { VariantProps } from 'tailwind-variants'
import { tv } from 'tailwind-variants'

export const buttonVariants = tv({
  base: 'items-center h-12 px-4 border text-base font-semibold text-center rounded-lg transition-colors',
  variants: {
    block: {
      true: 'flex w-full',
      false: 'inline-flex',
    },
    theme: {
      accent:
        'text-white border-accent bg-gradient-to-r from-accent to-accent-secondary hover:from-neutral-800 focus-visible:from-neutral-800 hover:to-neutral-800 focus-visible:to-neutral-800',
    },
  },
  defaultVariants: {
    block: false,
    theme: 'accent',
  },
})

export type ButtonVariantProps = VariantProps<typeof buttonVariants>
