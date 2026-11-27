// Placa no estilo Mercosul com a logo da Apex Motors, exibida sobre a foto do veículo
export function Placa() {
  return (
    <div className="placa" aria-label="Placa Apex Motors">
      <span className="placa__faixa">Apex Motors</span>
      <span className="placa__corpo">
        <svg viewBox="0 0 40 32" className="placa__logo" fill="none" stroke="currentColor" strokeWidth="3" aria-hidden="true">
          <path d="M2 30 L20 2 L38 30 Z" />
          <path d="M12 30 L24 12" />
        </svg>
        APEX
      </span>
    </div>
  )
}
