import { categorias, faixasDePreco, marcas } from '../data/veiculos'

type BuscaProps = {
  marca: string
  categoria: string
  faixaPreco: string
  onMudarMarca: (marca: string) => void
  onMudarCategoria: (categoria: string) => void
  onMudarFaixaPreco: (faixa: string) => void
  onLimpar: () => void
}

export function Busca({
  marca,
  categoria,
  faixaPreco,
  onMudarMarca,
  onMudarCategoria,
  onMudarFaixaPreco,
  onLimpar,
}: BuscaProps) {
  return (
    <section id="busca" className="busca">
      <form className="container busca__formulario">
        <label className="campo">
          Marca
          <select className="campo__select" value={marca} onChange={(evento) => onMudarMarca(evento.target.value)}>
            <option value="">Todas as Marcas</option>
            {marcas.map((item) => (
              <option key={item} value={item}>
                {item}
              </option>
            ))}
          </select>
        </label>

        <label className="campo">
          Modelo
          <select
            className="campo__select"
            value={categoria}
            onChange={(evento) => onMudarCategoria(evento.target.value)}
          >
            <option value="">Todos os Modelos</option>
            {categorias.map((item) => (
              <option key={item} value={item}>
                {item}
              </option>
            ))}
          </select>
        </label>

        <label className="campo">
          Faixa de Preço
          <select
            className="campo__select"
            value={faixaPreco}
            onChange={(evento) => onMudarFaixaPreco(evento.target.value)}
          >
            <option value="">Qualquer Preço</option>
            {faixasDePreco.map((faixa) => (
              <option key={faixa.valor} value={faixa.valor}>
                {faixa.texto}
              </option>
            ))}
          </select>
        </label>

        {/* O filtro é aplicado na hora; "Buscar" leva até a listagem */}
        <div className="busca__botoes">
          <a href="#estoque" className="botao botao--escuro">
            Buscar
          </a>
          <button type="button" className="botao botao--claro" onClick={onLimpar}>
            Limpar
          </button>
        </div>
      </form>
    </section>
  )
}
