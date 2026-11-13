import { Icone } from './Icone'
import { Logo } from './Logo'

type HeaderProps = {
  menuAberto: boolean
  onAlternarMenu: () => void
}

const links = [
  { texto: 'Início', href: '#inicio' },
  { texto: 'Estoque', href: '#estoque' },
  { texto: 'Modelos de Luxo', href: '#estoque' },
  { texto: 'Sobre', href: '#sobre' },
  { texto: 'Contato', href: '#contato' },
]

export function Header({ menuAberto, onAlternarMenu }: HeaderProps) {
  return (
    <header className="cabecalho">
      <div className="container cabecalho__barra">
        <Logo />

        {/* Menu expandido: tablet e desktop */}
        <nav className="menu" aria-label="Menu principal">
          {links.map((link) => (
            <a key={link.texto} href={link.href} className="menu__link">
              {link.texto}
            </a>
          ))}
        </nav>

        {/* Lupa (tablet e desktop): leva até a busca */}
        <a href="#busca" className="botao-icone botao-busca" aria-label="Buscar">
          <Icone nome="busca" />
        </a>

        {/* Hambúrguer (só no mobile): abre e fecha o menu */}
        <button
          type="button"
          className="botao-icone botao-menu"
          onClick={onAlternarMenu}
          aria-label={menuAberto ? 'Fechar menu' : 'Abrir menu'}
          aria-expanded={menuAberto}
        >
          <Icone nome={menuAberto ? 'fechar' : 'menu'} />
        </button>
      </div>

      {menuAberto && (
        <nav className="container menu-mobile" aria-label="Menu mobile">
          {links.map((link) => (
            <a key={link.texto} href={link.href} className="menu-mobile__link" onClick={onAlternarMenu}>
              {link.texto}
            </a>
          ))}
        </nav>
      )}
    </header>
  )
}
