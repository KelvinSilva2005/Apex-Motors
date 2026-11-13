import type { NomeIcone } from '../data/tipos'

type IconeProps = {
  nome: NomeIcone
}

// Desenha um ícone em SVG de acordo com o nome recebido
export function Icone({ nome }: IconeProps) {
  if (nome === 'local') {
    return (
      <svg viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
        <path d="M12 2 C8 2 5 5 5 9 C5 14 12 22 12 22 C12 22 19 14 19 9 C19 5 16 2 12 2 Z M12 12 A3 3 0 1 1 12 6 A3 3 0 1 1 12 12 Z" />
      </svg>
    )
  }

  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" aria-hidden="true">
      {nome === 'diamante' && <path d="M6 3 H18 L22 9 L12 21 L2 9 Z M2 9 H22 M9 3 L12 21 M15 3 L12 21" />}
      {nome === 'escudo' && <path d="M12 2 L20 5 V11 C20 16 16.5 20 12 22 C7.5 20 4 16 4 11 V5 Z" />}
      {nome === 'pessoa' && (
        <>
          <circle cx="12" cy="8" r="4" />
          <path d="M4 21 C4 16 8 14 12 14 C16 14 20 16 20 21 Z" />
        </>
      )}
      {nome === 'busca' && (
        <>
          <circle cx="11" cy="11" r="7" />
          <path d="M20 20 L16 16" />
        </>
      )}
      {nome === 'menu' && <path d="M3 6 H21 M3 12 H21 M3 18 H21" />}
      {nome === 'fechar' && <path d="M5 5 L19 19 M19 5 L5 19" />}
    </svg>
  )
}
