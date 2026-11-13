// Listagem principal: um veículo do estoque
export type Veiculo = {
  id: number
  nome: string
  marca: string
  categoria: string
  ano: number
  preco: number
  potencia: string
  descricao: string
}

// Listagem secundária: um diferencial da loja
export type Diferencial = {
  id: number
  titulo: string
  descricao: string
  icone: NomeIcone
}

// Depoimento de cliente
export type Depoimento = {
  id: number
  texto: string
  cliente: string
  selo: string
}

// Ícones desenhados em SVG no componente Icone
export type NomeIcone = 'diamante' | 'escudo' | 'pessoa' | 'busca' | 'menu' | 'fechar' | 'local'
