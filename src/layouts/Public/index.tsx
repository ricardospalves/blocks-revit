import { Footer } from '@/components/common/Footer'
import { Header } from '@/components/common/Header'
import { JoinUsAlert } from '@/components/common/JoinUsAlert'

export type PublicLayoutProps = Readonly<React.PropsWithChildren>

export const PublicLayout = ({ children }: PublicLayoutProps) => {
  return (
    <div className="flex flex-col min-h-screen supports-[min-height:100dvh]:min-h-dvh mx-auto">
      <Header />
      <JoinUsAlert />

      <main className="flex flex-col grow">{children}</main>

      <Footer />
    </div>
  )
}
