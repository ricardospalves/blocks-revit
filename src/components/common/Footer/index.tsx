import Link from 'next/link'
import { NAVIGATION } from './navigation'

export const Footer = () => {
  return (
    <footer className="shrink-0 bg-[#e9e9e9] text-[#322e2e]">
      <nav>
        <ul className="lg:flex lg:items-center lg:justify-center border-y border-y-black/25 lg:border-y-0 divide-y divide-black/25 lg:divide-y-0">
          {NAVIGATION.map(({ href, name }) => {
            return (
              <li key={name}>
                <Link
                  href={href}
                  className="block py-2 lg:py-5 px-4 hover:underline focus-visible:underline"
                >
                  {name}
                </Link>
              </li>
            )
          })}
        </ul>
      </nav>
    </footer>
  )
}
