import { useEffect, useState } from 'react'
import './App.css'
import { Header } from './components/Header'
import { Hero } from './components/Hero'
import { Busca } from './components/Busca'
import { ListaVeiculos } from './components/ListaVeiculos'
import { ListaDiferenciais } from './components/ListaDiferenciais'
import { ListaDepoimentos } from './components/ListaDepoimentos'
import { Contato } from './components/Contato'
import { Footer } from './components/Footer'
import { buscarVeiculos } from './data/api'
import { precoNaFaixa } from './data/veiculos'
import { diferenciais } from './data/diferenciais'
import { depoimentos } from './data/depoimentos'
import type { Veiculo } from './data/tipos'

function App() {
  // Dados externos da listagem principal (vêm do JSON com fetch)
  const [veiculos, setVeiculos] = useState<Veiculo[]>([])
  const [carregando, setCarregando] = useState(true)
  const [erro, setErro] = useState<string | null>(null)

  // Muda de valor a cada clique em "Tentar novamente" para refazer a busca
  const [tentativa, setTentativa] = useState(0)

  // Filtros da busca ('' significa "todos")
  const [marca, setMarca] = useState('')
  const [categoria, setCategoria] = useState('')
  const [faixaPreco, setFaixaPreco] = useState('')

  // Id do veículo com os detalhes abertos (null = nenhum)
  const [veiculoAberto, setVeiculoAberto] = useState<number | null>(null)

  // Menu do celular aberto ou fechado
  const [menuAberto, setMenuAberto] = useState(false)

  // Carrega os veículos quando a página abre (e de novo a cada nova tentativa)
  useEffect(() => {
    async function carregarVeiculos() {
      try {
        const dados = await buscarVeiculos()
        setVeiculos(dados)
      } catch {
        setErro('Não foi possível carregar os veículos. Verifique sua conexão e tente novamente.')
      } finally {
        setCarregando(false)
      }
    }

    carregarVeiculos()
  }, [tentativa])

  function tentarNovamente() {
    setErro(null)
    setCarregando(true)
    setTentativa(tentativa + 1)
  }

  // Abre os detalhes do veículo clicado, ou fecha se ele já estiver aberto
  function alternarDetalhes(id: number) {
    setVeiculoAberto(veiculoAberto === id ? null : id)
  }

  function limparFiltros() {
    setMarca('')
    setCategoria('')
    setFaixaPreco('')
  }

  // Veículos que passam pelos três filtros
  const veiculosFiltrados = veiculos.filter(
    (veiculo) =>
      (marca === '' || veiculo.marca === marca) &&
      (categoria === '' || veiculo.categoria === categoria) &&
      precoNaFaixa(veiculo.preco, faixaPreco),
  )

  return (
    <>
      <Header menuAberto={menuAberto} onAlternarMenu={() => setMenuAberto(!menuAberto)} />

      <main>
        <Hero />
        <Busca
          marca={marca}
          categoria={categoria}
          faixaPreco={faixaPreco}
          onMudarMarca={setMarca}
          onMudarCategoria={setCategoria}
          onMudarFaixaPreco={setFaixaPreco}
          onLimpar={limparFiltros}
        />
        <ListaVeiculos
          veiculos={veiculosFiltrados}
          carregando={carregando}
          erro={erro}
          veiculoAberto={veiculoAberto}
          onVerDetalhes={alternarDetalhes}
          onTentarNovamente={tentarNovamente}
        />
        <ListaDiferenciais diferenciais={diferenciais} />
        <ListaDepoimentos depoimentos={depoimentos} />
        <Contato />
      </main>

      <Footer />
    </>
  )
}

export default App
