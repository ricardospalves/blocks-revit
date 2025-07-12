import type { HTMLAttributes } from 'react'
import { classNames } from '@/utils/classNames'

type NativeAttributes = HTMLAttributes<HTMLHeadingElement>

type AsProp = 'h1' | 'h2' | 'h3' | 'h4' | 'h5' | 'h6'

export type PageTitleProps = NativeAttributes & {
  as?: AsProp
}

export const PageTitle = ({
  as = 'h1',
  children,
  className,
  ...props
}: PageTitleProps) => {
  const Component = as

  return (
    <Component
      className={classNames([
        'px-4 py-6 relative text-[1.75rem] leading-normal font-bold shadow-md',
        'before:content-[""] before:block before:h-px before:absolute before:inset-x-0 before:top-0 before:bg-linear-to-r before:from-accent before:to-accent-secondary',
        className,
      ])}
      {...props}
    >
      <span
        className={classNames([
          'block max-w-wrapper w-full mx-auto',
          'after:content-[""] after:block after:w-9 after:h-1 after:bg-linear-to-r after:from-accent after:to-accent-secondary after:rounded-full',
        ])}
      >
        {children}
      </span>
    </Component>
  )
}
