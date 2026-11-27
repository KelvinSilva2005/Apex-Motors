// Os veículos agora vêm do arquivo public/veiculos.json (ver src/data/api.ts).
// Aqui ficam só as opções dos filtros e as funções auxiliares.

// Opções dos filtros da busca
export const marcas = ['Mercedes-Benz', 'Porsche', 'Land Rover', 'BMW', 'Audi']

export const categorias = ['Sedã', 'Coupé', 'SUV']

export const faixasDePreco = [
  { valor: 'ate-1000', texto: 'Até R$ 1 milhão' },
  { valor: '1000-1300', texto: 'R$ 1 milhão a R$ 1,3 milhão' },
  { valor: 'acima-1300', texto: 'Acima de R$ 1,3 milhão' },
]

// Formata o número como preço em reais: 1266900 -> "R$ 1.266.900"
export function formatarPreco(preco: number): string {
  return preco.toLocaleString('pt-BR', { style: 'currency', currency: 'BRL', minimumFractionDigits: 0, maximumFractionDigits: 0 })
}

// Confere se o preço está dentro da faixa escolhida no filtro
export function precoNaFaixa(preco: number, faixa: string): boolean {
  if (faixa === 'ate-1000') return preco <= 1000000
  if (faixa === '1000-1300') return preco > 1000000 && preco <= 1300000
  if (faixa === 'acima-1300') return preco > 1300000
  return true
}
