type EstadoErroProps = {
  mensagem: string
  onTentarNovamente: () => void
}

export function EstadoErro({ mensagem, onTentarNovamente }: EstadoErroProps) {
  return (
    <div className="estado-erro" role="alert">
      <p className="estado-erro__titulo">Ops! Algo deu errado.</p>
      <p className="estado-erro__mensagem">{mensagem}</p>
      <button type="button" className="botao botao--escuro estado-erro__botao" onClick={onTentarNovamente}>
        Tentar novamente
      </button>
    </div>
  )
}
