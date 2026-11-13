import type { Depoimento } from '../data/tipos'

type CardDepoimentoProps = {
  depoimento: Depoimento
}

export function CardDepoimento({ depoimento }: CardDepoimentoProps) {
  return (
    <article className="depoimento">
      <div className="depoimento__avatar" />
      <div>
        <p className="depoimento__texto">"{depoimento.texto}"</p>
        <p className="depoimento__estrelas" aria-label="5 estrelas">
          ★★★★★
        </p>
        <p className="depoimento__cliente">
          <strong>{depoimento.cliente}</strong> | {depoimento.selo}
        </p>
      </div>
    </article>
  )
}
