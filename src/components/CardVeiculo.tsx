import type { Veiculo } from '../data/tipos'
import { formatarPreco } from '../data/veiculos'

type CardVeiculoProps = {
  veiculo: Veiculo
  aberto: boolean
  onVerDetalhes: (id: number) => void
}

export function CardVeiculo({ veiculo, aberto, onVerDetalhes }: CardVeiculoProps) {
  return (
    <article className={aberto ? 'card-veiculo card-veiculo--aberto' : 'card-veiculo'}>
      <div className="placeholder card-veiculo__imagem">Imagem do {veiculo.nome}</div>

      <div className="card-veiculo__corpo">
        <div className="card-veiculo__topo">
          <h3 className="card-veiculo__nome">{veiculo.nome}</h3>
          <span className="card-veiculo__preco">{formatarPreco(veiculo.preco)}</span>
        </div>

        <p className="card-veiculo__info">
          {veiculo.ano} | {veiculo.categoria}
        </p>

        {/* Detalhes só aparecem quando o card está aberto */}
        {aberto && (
          <div className="card-veiculo__detalhes">
            <p>
              <strong>Marca:</strong> {veiculo.marca}
            </p>
            <p>
              <strong>Potência:</strong> {veiculo.potencia}
            </p>
            <p>{veiculo.descricao}</p>
          </div>
        )}

        <button
          type="button"
          className="botao botao--claro card-veiculo__botao"
          onClick={() => onVerDetalhes(veiculo.id)}
          aria-expanded={aberto}
        >
          {aberto ? 'Fechar detalhes' : 'Ver detalhes'}
        </button>
      </div>
    </article>
  )
}
