import type { Veiculo } from '../data/tipos'
import { CardVeiculo } from './CardVeiculo'

type ListaVeiculosProps = {
  veiculos: Veiculo[]
  veiculoAberto: number | null
  onVerDetalhes: (id: number) => void
}

export function ListaVeiculos({ veiculos, veiculoAberto, onVerDetalhes }: ListaVeiculosProps) {
  return (
    <section id="estoque" className="secao">
      <div className="container">
        <h2 className="secao__titulo">Veículos em destaque</h2>
        <p className="secao__subtitulo">Veículos de luxo selecionados para um estilo de vida extraordinário.</p>

        <p className="estoque__resultado">{veiculos.length} veículo(s) encontrado(s)</p>

        {veiculos.length === 0 ? (
          <p className="lista-vazia">Nenhum veículo encontrado com esses filtros. Tente outra combinação.</p>
        ) : (
          <div className="lista-veiculos">
            {veiculos.map((veiculo) => (
              <CardVeiculo
                key={veiculo.id}
                veiculo={veiculo}
                aberto={veiculoAberto === veiculo.id}
                onVerDetalhes={onVerDetalhes}
              />
            ))}
          </div>
        )}
      </div>
    </section>
  )
}
