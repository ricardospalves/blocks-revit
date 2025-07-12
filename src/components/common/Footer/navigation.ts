type NavigationItem = {
  name: string
  href: string
}

type Navigation = ReadonlyArray<NavigationItem>

export const NAVIGATION: Navigation = [
  {
    href: '/',
    name: 'Sobre',
  },
  {
    href: '/',
    name: 'FAQ',
  },
  {
    href: '/',
    name: 'Termos de uso',
  },
  {
    href: '/',
    name: 'Politica de privacidade',
  },
]
