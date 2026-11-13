import { useState } from 'react'
import './App.css'
import { Header } from './components/Header'
import { Hero } from './components/Hero'
import { Busca } from './components/Busca'
import { ListaVeiculos } from './components/ListaVeiculos'
import { ListaDiferenciais } from './components/ListaDiferenciais'
import { ListaDepoimentos } from './components/ListaDepoimentos'
import { Contato } from './components/Contato'
import { Footer } from './components/Footer'
import { veiculos, precoNaFaixa } from './data/veiculos'
import { diferenciais } from './data/diferenciais'
import { depoimentos } from './data/depoimentos'

function App() {
  // Filtros da busca ('' significa "todos")
  const [marca, setMarca] = useState('')
  const [categoria, setCategoria] = useState('')
  const [faixaPreco, setFaixaPreco] = useState('')

  // Id do veículo com os detalhes abertos (null = nenhum)
  const [veiculoAberto, setVeiculoAberto] = useState<number | null>(null)

  // Menu do celular aberto ou fechado
  const [menuAberto, setMenuAberto] = useState(false)

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
          veiculoAberto={veiculoAberto}
          onVerDetalhes={alternarDetalhes}
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
