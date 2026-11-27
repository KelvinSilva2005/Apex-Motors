import type { Veiculo } from '../data/tipos'
import { CardVeiculo } from './CardVeiculo'
import { EstadoCarregando } from './EstadoCarregando'
import { EstadoErro } from './EstadoErro'

type ListaVeiculosProps = {
  veiculos: Veiculo[]
  carregando: boolean
  erro: string | null
  veiculoAberto: number | null
  onVerDetalhes: (id: number) => void
  onTentarNovamente: () => void
}

export function ListaVeiculos({
  veiculos,
  carregando,
  erro,
  veiculoAberto,
  onVerDetalhes,
  onTentarNovamente,
}: ListaVeiculosProps) {
  // Decide o que mostrar: carregando, erro, lista vazia ou os cards
  function renderizarConteudo() {
    if (carregando) {
      return <EstadoCarregando />
    }

    if (erro) {
      return <EstadoErro mensagem={erro} onTentarNovamente={onTentarNovamente} />
    }

    return (
      <>
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
      </>
    )
  }

  return (
    <section id="estoque" className="secao">
      <div className="container">
        <h2 className="secao__titulo">Veículos em destaque</h2>
        <p className="secao__subtitulo">Veículos de luxo selecionados para um estilo de vida extraordinário.</p>

        {renderizarConteudo()}
      </div>
    </section>
  )
}
