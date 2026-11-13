export function Logo() {
  return (
    <a href="#inicio" className="logo">
      <svg
        viewBox="0 0 40 32"
        className="logo__icone"
        fill="none"
        stroke="currentColor"
        strokeWidth="2.5"
        aria-hidden="true"
      >
        <path d="M2 30 L20 2 L38 30 Z" />
        <path d="M12 30 L24 12" />
      </svg>
      <span className="logo__nome">Apex Motors</span>
    </a>
  )
}
