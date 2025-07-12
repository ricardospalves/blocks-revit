import { CONFIG } from '@/constants/config'
import Image from 'next/image'
import Link from 'next/link'

const LINK_TEXT = 'Ir para a página inicial'

export const Header = () => {
  return (
    <header className="shrink-0 bg-white">
      <Link
        href="/"
        title={LINK_TEXT}
        className="block max-w-24 lg:max-w-36 w-full py-4 lg:py-3 mx-auto"
      >
        <span className="sr-only">{LINK_TEXT}</span>

        <Image
          src="/images/logo.svg"
          className="block w-full"
          alt={`Logo da ${CONFIG.COMPANY_NAME}`}
          width={108}
          height={36}
          loading="lazy"
        />
      </Link>
    </header>
  )
}
