import type { Veiculo } from './tipos'

// Fonte externa da listagem principal: arquivo JSON servido pela pasta public/
const URL_VEICULOS = '/veiculos.json'

// Busca os veículos com fetch e devolve o vetor já tipado.
// Se a resposta não for OK (ex.: 404), lança um erro para quem chamou tratar.
export async function buscarVeiculos(): Promise<Veiculo[]> {
  const resposta = await fetch(URL_VEICULOS)

  if (!resposta.ok) {
    throw new Error(`Erro ${resposta.status} ao buscar os veículos`)
  }

  const dados: Veiculo[] = await resposta.json()
  return dados
}
