import { PageTitle } from '@/components/ui/PageTitle'
import { Families } from './Families'

export const Home = () => {
  return (
    <>
      <PageTitle>Catálogo</PageTitle>

      <section className="px-2">
        <div className="lg:max-w-wrapper w-full mx-auto py-8">
          <h2 className="mb-5 text-2xl font-semibold">Resultados</h2>
          <Families />
        </div>
      </section>
    </>
  )
}
