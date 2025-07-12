import { PageTitle } from '@/components/ui/PageTitle'

export const Home = () => {
  return (
    <>
      <PageTitle>Catálogo</PageTitle>

      <section className="px-2">
        <div className="max-w-wrapper w-full mx-auto pt-8">
          <h2 className="mb-5 text-2xl font-semibold">Resultados</h2>
        </div>
      </section>
    </>
  )
}
