import { Logo } from './Logo'

const links = [
  { texto: 'Início', href: '#inicio' },
  { texto: 'Estoque', href: '#estoque' },
  { texto: 'Modelos de Luxo', href: '#estoque' },
  { texto: 'Sobre', href: '#sobre' },
  { texto: 'Contato', href: '#contato' },
]

const redes = [
  { sigla: 'IG', nome: 'Instagram' },
  { sigla: 'f', nome: 'Facebook' },
  { sigla: 'in', nome: 'LinkedIn' },
  { sigla: 'YT', nome: 'YouTube' },
]

export function Footer() {
  return (
    <footer className="rodape">
      <div className="container rodape__grade">
        <div className="rodape__coluna">
          <Logo />
          <p className="rodape__slogan">Veículos extraordinários. Pessoas extraordinárias.</p>
        </div>

        <div className="rodape__coluna">
          <h4 className="rodape__titulo">Links rápidos</h4>
          <ul className="rodape__lista">
            {links.map((link) => (
              <li key={link.texto}>
                <a href={link.href}>{link.texto}</a>
              </li>
            ))}
          </ul>
        </div>

        <div className="rodape__coluna">
          <h4 className="rodape__titulo">Siga-nos</h4>
          <div className="redes">
            {redes.map((rede) => (
              <a key={rede.nome} href="#" aria-label={rede.nome} className="redes__link">
                {rede.sigla}
              </a>
            ))}
          </div>
        </div>

        <div className="rodape__coluna">
          <h4 className="rodape__titulo">Contato</h4>
          <ul className="rodape__lista">
            <li>(11) 3050-0123</li>
            <li>contato@apexmotors.com.br</li>
            <li>Av. Europa, 1234 – São Paulo, SP</li>
          </ul>
        </div>
      </div>

      <p className="rodape__copyright">© 2026 Apex Motors. Todos os direitos reservados.</p>
    </footer>
  )
}
