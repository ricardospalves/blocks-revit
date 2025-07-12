import type { LinkProps } from 'next/link'
import type { PropsWithChildren } from 'react'
import type { ButtonVariantProps } from './variants'
import { classNames } from '@/utils/classNames'
import Link from 'next/link'
import { buttonVariants } from './variants'

export type ButtonProps = LinkProps &
  PropsWithChildren &
  ButtonVariantProps & {
    className?: string
  }

export const Button = ({
  className,
  children,
  block,
  theme,
  ...props
}: ButtonProps) => {
  return (
    <Link
      className={classNames([buttonVariants({ block, theme }), className])}
      {...props}
    >
      {children}
    </Link>
  )
}
