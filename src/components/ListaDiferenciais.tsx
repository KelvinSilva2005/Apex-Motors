import type { Diferencial } from '../data/tipos'
import { CardDiferencial } from './CardDiferencial'

type ListaDiferenciaisProps = {
  diferenciais: Diferencial[]
}

export function ListaDiferenciais({ diferenciais }: ListaDiferenciaisProps) {
  return (
    <section id="sobre" className="secao">
      <div className="container">
        <h2 className="secao__titulo">Por que escolher a Apex Motors</h2>
        <p className="secao__subtitulo">Um padrão mais elevado em veículos de luxo.</p>

        <div className="lista-diferenciais">
          {diferenciais.map((diferencial) => (
            <CardDiferencial key={diferencial.id} diferencial={diferencial} />
          ))}
        </div>
      </div>
    </section>
  )
}
