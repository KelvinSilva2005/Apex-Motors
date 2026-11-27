// Cards "fantasma" animados exibidos enquanto os veículos são carregados
const cardsFantasma = [1, 2, 3]

export function EstadoCarregando() {
  return (
    <div className="estado-carregando">
      <p className="estado-carregando__texto" role="status">
        Carregando veículos...
      </p>

      <div className="lista-veiculos">
        {cardsFantasma.map((numero) => (
          <div key={numero} className="card-veiculo card-esqueleto" aria-hidden="true">
            <div className="esqueleto card-esqueleto__imagem" />
            <div className="card-veiculo__corpo">
              <div className="esqueleto card-esqueleto__linha" />
              <div className="esqueleto card-esqueleto__linha card-esqueleto__linha--curta" />
              <div className="esqueleto card-esqueleto__botao" />
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}
