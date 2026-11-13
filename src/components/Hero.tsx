export function Hero() {
  return (
    <section id="inicio" className="secao hero">
      <div className="container hero__grade">
        <div>
          <p className="hero__chamada">Veículos excepcionais</p>
          <h1 className="hero__titulo">Dirija algo extraordinário</h1>
          <p className="hero__texto">
            Uma coleção cuidadosamente selecionada dos veículos mais prestigiados do mundo. Luxo,
            performance e exclusividade sem compromissos.
          </p>
          <div className="hero__botoes">
            <a href="#estoque" className="botao botao--escuro">
              Ver estoque
            </a>
            <a href="#sobre" className="botao botao--claro">
              Saiba mais
            </a>
          </div>
        </div>

        <div className="placeholder hero__imagem">Imagem principal do carro</div>
      </div>
    </section>
  )
}
