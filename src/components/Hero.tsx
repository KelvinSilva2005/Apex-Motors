import { useState } from 'react'
import { Placa } from './Placa'

// Foto do destaque principal (Wikimedia Commons, créditos no README)
const FOTO_PRINCIPAL =
  'https://commons.wikimedia.org/wiki/Special:FilePath/Porsche_992_Carrera_4S_Genf_2019_1Y7A5561.jpg?width=1280'

export function Hero() {
  // Se a foto não carregar, mostra o espaço reservado no lugar
  const [fotoComErro, setFotoComErro] = useState(false)

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

        <div className="hero__imagem hero__midia">
          {fotoComErro ? (
            <div className="placeholder hero__substituto">Imagem principal do carro</div>
          ) : (
            <img
              src={FOTO_PRINCIPAL}
              alt="Porsche 911 Carrera em destaque"
              className="hero__foto"
              onError={() => setFotoComErro(true)}
            />
          )}

          {/* Placa com a logo da Apex por cima da foto */}
          <Placa />
        </div>
      </div>
    </section>
  )
}
