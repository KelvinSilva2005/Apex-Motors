import { Icone } from './Icone'

export function Contato() {
  return (
    <section id="contato" className="secao">
      <div className="container">
        <h2 className="secao__titulo">Entre em contato</h2>
        <p className="secao__subtitulo">
          Visite nosso showroom ou envie uma mensagem. Nossa equipe está pronta para atendê-lo.
        </p>

        <div className="contato__grade">
          <form className="formulario">
            <h3 className="formulario__titulo">Enviar mensagem</h3>
            <div className="formulario__campos">
              <input type="text" placeholder="Nome Completo" className="campo__entrada" />
              <input type="email" placeholder="E-mail" className="campo__entrada" />
              <input type="text" placeholder="Assunto" className="campo__entrada formulario__largo" />
              <textarea placeholder="Sua Mensagem" rows={4} className="campo__entrada formulario__largo" />
              <button type="button" className="botao botao--escuro formulario__largo formulario__botao">
                Enviar mensagem
              </button>
            </div>
          </form>

          <div>
            <div className="placeholder contato__mapa">
              <Icone nome="local" />
              Mapa do showroom
            </div>
            <div className="contato__endereco">
              <p>
                <strong>Showroom Apex Motors</strong>
              </p>
              <p>Av. Europa, 1234 – Jardim Europa, São Paulo – SP, 01449-000</p>
              <p className="contato__horario">Segunda a Sexta: 9h às 19h</p>
              <p>Sábado: 9h às 14h</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
