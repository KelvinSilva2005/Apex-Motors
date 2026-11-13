import type { Diferencial } from '../data/tipos'
import { Icone } from './Icone'

type CardDiferencialProps = {
  diferencial: Diferencial
}

export function CardDiferencial({ diferencial }: CardDiferencialProps) {
  return (
    <div className="diferencial">
      <div className="diferencial__icone">
        <Icone nome={diferencial.icone} />
      </div>
      <div>
        <h3 className="diferencial__titulo">{diferencial.titulo}</h3>
        <p className="diferencial__texto">{diferencial.descricao}</p>
      </div>
    </div>
  )
}
