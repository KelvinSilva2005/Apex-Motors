import type { Veiculo } from './tipos'

// Listagem principal: veículos em destaque (dados fictícios).
export const veiculos: Veiculo[] = [
  {
    id: 1,
    nome: 'Mercedes-Benz Classe S',
    marca: 'Mercedes-Benz',
    categoria: 'Sedã',
    ano: 2024,
    preco: 129900,
    potencia: '435 cv',
    descricao: 'Sedã de referência em conforto, com bancos massageadores e acabamento em couro Nappa.',
  },
  {
    id: 2,
    nome: 'Porsche 911 Carrera',
    marca: 'Porsche',
    categoria: 'Coupé',
    ano: 2024,
    preco: 152900,
    potencia: '394 cv',
    descricao: 'O esportivo clássico de motor traseiro, com câmbio PDK de 8 marchas.',
  },
  {
    id: 3,
    nome: 'Range Rover Autobiography',
    marca: 'Land Rover',
    categoria: 'SUV',
    ano: 2024,
    preco: 141900,
    potencia: '530 cv',
    descricao: 'SUV de luxo com suspensão a ar, teto panorâmico e capacidade off-road.',
  },
  {
    id: 4,
    nome: 'BMW Série 7',
    marca: 'BMW',
    categoria: 'Sedã',
    ano: 2023,
    preco: 124500,
    potencia: '380 cv',
    descricao: 'Sedã executivo com tela de cinema traseira de 31 polegadas e direção semiautônoma.',
  },
  {
    id: 5,
    nome: 'Porsche Cayenne Coupé',
    marca: 'Porsche',
    categoria: 'SUV',
    ano: 2024,
    preco: 148700,
    potencia: '353 cv',
    descricao: 'SUV com linhas de coupé, tração integral e desempenho de esportivo.',
  },
  {
    id: 6,
    nome: 'Mercedes-AMG GT',
    marca: 'Mercedes-Benz',
    categoria: 'Coupé',
    ano: 2023,
    preco: 168900,
    potencia: '585 cv',
    descricao: 'Coupé de alta performance com motor V8 biturbo feito à mão pela AMG.',
  },
  {
    id: 7,
    nome: 'Audi RS e-tron GT',
    marca: 'Audi',
    categoria: 'Sedã',
    ano: 2024,
    preco: 159900,
    potencia: '598 cv',
    descricao: 'Gran turismo 100% elétrico, com aceleração de 0 a 100 km/h em 3,3 segundos.',
  },
  {
    id: 8,
    nome: 'BMW X7 M60i',
    marca: 'BMW',
    categoria: 'SUV',
    ano: 2023,
    preco: 136400,
    potencia: '530 cv',
    descricao: 'SUV de sete lugares com acabamento em cristal e som Bowers & Wilkins.',
  },
  {
    id: 9,
    nome: 'Land Rover Defender 110',
    marca: 'Land Rover',
    categoria: 'SUV',
    ano: 2024,
    preco: 118900,
    potencia: '400 cv',
    descricao: 'Ícone off-road reinventado, com conforto de luxo e tecnologia atual.',
  },
  {
    id: 10,
    nome: 'Audi R8 V10',
    marca: 'Audi',
    categoria: 'Coupé',
    ano: 2023,
    preco: 174900,
    potencia: '620 cv',
    descricao: 'Superesportivo de motor central V10 aspirado, a despedida de uma lenda.',
  },
]

// Opções dos filtros da busca
export const marcas = ['Mercedes-Benz', 'Porsche', 'Land Rover', 'BMW', 'Audi']

export const categorias = ['Sedã', 'Coupé', 'SUV']

export const faixasDePreco = [
  { valor: 'ate-130', texto: 'Até R$ 130.000' },
  { valor: '130-150', texto: 'R$ 130.000 a R$ 150.000' },
  { valor: 'acima-150', texto: 'Acima de R$ 150.000' },
]

// Formata o número como preço em reais: 129900 -> "R$ 129.900"
export function formatarPreco(preco: number): string {
  return preco.toLocaleString('pt-BR', { style: 'currency', currency: 'BRL', minimumFractionDigits: 0, maximumFractionDigits: 0 })
}

// Confere se o preço está dentro da faixa escolhida no filtro
export function precoNaFaixa(preco: number, faixa: string): boolean {
  if (faixa === 'ate-130') return preco <= 130000
  if (faixa === '130-150') return preco > 130000 && preco <= 150000
  if (faixa === 'acima-150') return preco > 150000
  return true
}
