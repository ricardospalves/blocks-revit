import { ProductCard } from '@/components/ui/ProductCard'
import { FAMILIES } from './config/families'

export const Families = () => {
  return (
    <div className="grid gap-4 grid-cols-2 xs:grid-cols-3 sm:grid-cols-4 md:grid-cols-6 lg:grid-cols-7">
      {FAMILIES.map(({ href, image, name }) => {
        return (
          <ProductCard
            key={name}
            href={href}
            image={{
              src: image.src,
            }}
            title={name}
            titleAs="h3"
            className="max-w-none sm:max-w-44"
          />
        )
      })}
    </div>
  )
}
