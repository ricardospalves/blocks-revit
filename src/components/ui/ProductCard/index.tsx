import { classNames } from '@/utils/classNames'
import Image from 'next/image'
import Link from 'next/link'
import { LuArrowUpRight as ArrowUpRightIcon } from 'react-icons/lu'

export type ProductCardProps = {
  href: string
  image: {
    src: string
    alt?: string
  }
  title: string
  className?: string
  titleAs?: 'h1' | 'h2' | 'h3' | 'h4' | 'h5' | 'h6'
}

export const ProductCard = ({
  href,
  image,
  title,
  className,
  titleAs = 'h2',
}: ProductCardProps) => {
  const Title = titleAs

  return (
    <article className={classNames(['max-w-44 w-full h-full', className])}>
      <Link
        href={href}
        className="flex flex-col group border border-muted rounded-lg transition-colors hover:border-black focus-visible:border-black"
      >
        <div className="flex items-center p-2 border-t border-inherit">
          <Title className="grow text-xs font-semibold line-clamp-2">
            {title}
          </Title>

          <span
            className="flex items-center justify-center h-5 pl-2 ml-2 shrink-0 border-l border-inherit"
            aria-hidden={true}
          >
            <ArrowUpRightIcon className="block size-4" aria-hidden={true} />
          </span>
        </div>

        <div className="aspect-[8/9] order-first bg-white rounded-t-lg overflow-hidden">
          <Image
            src={image.src}
            className="block size-full object-scale-down"
            width={176}
            height={198}
            alt={image?.alt || `Objeto BIM para ${title}`}
            loading="lazy"
          />
        </div>
      </Link>
    </article>
  )
}
