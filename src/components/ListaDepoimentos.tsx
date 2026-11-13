import type { Depoimento } from '../data/tipos'
import { CardDepoimento } from './CardDepoimento'

type ListaDepoimentosProps = {
  depoimentos: Depoimento[]
}

export function ListaDepoimentos({ depoimentos }: ListaDepoimentosProps) {
  return (
    <section className="secao secao--cinza">
      <div className="container">
        <h2 className="secao__titulo">Uma experiência de luxo</h2>
        <p className="secao__subtitulo">A confiança de quem já viveu a experiência Apex Motors.</p>

        <div className="lista-depoimentos">
          {depoimentos.map((depoimento) => (
            <CardDepoimento key={depoimento.id} depoimento={depoimento} />
          ))}
        </div>
      </div>
    </section>
  )
}
