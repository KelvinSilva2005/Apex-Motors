# Apex Motors

Apex Motors é uma página única de uma concessionária fictícia de veículos de luxo. A página apresenta um catálogo de veículos em destaque, com nome, ano, categoria, preço e imagem, e uma busca por marca, modelo e faixa de preço. Também traz uma seção com os diferenciais da loja, depoimentos de clientes e uma área de contato com formulário e informações do showroom. O projeto é desenvolvido com React e TypeScript, com layout responsivo mobile first, como Trabalho de Conclusão de Disciplina (TCD).

## Como executar

Pré-requisito: [Node.js](https://nodejs.org/) instalado.

```bash
npm install
npm run dev
```

Depois, abra no navegador o endereço que aparecer no terminal (normalmente `http://localhost:5173`).

## Fonte dos dados

- **Listagem principal (veículos):** arquivo JSON externo [`public/veiculos.json`](./public/veiculos.json), com 10 veículos e preços reais de referência no Brasil (fotos do Wikimedia Commons). Ele é carregado com `fetch` dentro de um `useEffect` (função `buscarVeiculos` em `src/data/api.ts`). Enquanto os dados chegam, a página mostra cards "fantasma" animados; se a requisição falhar, aparece uma mensagem de erro com o botão **Tentar novamente**.
- **Listagem secundária (diferenciais):** vetor de objetos declarado no código, em `src/data/diferenciais.ts`, com 3 itens.
- **Depoimentos:** vetor de objetos em `src/data/depoimentos.ts`.

Os preços são valores de referência no Brasil pesquisados em novembro de 2026 (preços de lançamento divulgados pela imprensa e tabela Fipe). O Audi R8 já saiu de linha, então vale o preço de lançamento do modelo 2021. A loja, os diferenciais e os depoimentos são fictícios, criados para fins acadêmicos.

## Estrutura

```
public/
└── veiculos.json      # fonte externa da listagem principal
src/
├── components/        # Header, Logo, Icone, Hero, Busca, ListaVeiculos, CardVeiculo,
│                      # EstadoCarregando, EstadoErro, ListaDiferenciais, CardDiferencial,
│                      # ListaDepoimentos, CardDepoimento, Contato, Footer
├── data/
│   ├── api.ts         # buscarVeiculos(): fetch do JSON
│   ├── tipos.ts       # types Veiculo, Diferencial e Depoimento
│   ├── veiculos.ts    # opções dos filtros e funções auxiliares
│   ├── diferenciais.ts
│   └── depoimentos.ts
├── App.css            # estilos com variáveis em :root e media queries mobile first
├── App.tsx            # guarda o estado, busca os dados e compõe os componentes
├── index.css
└── main.tsx
```

## Interações (useState)

- **Busca:** filtros de marca, modelo e faixa de preço que atualizam a listagem na hora, com botão para limpar
- **Ver detalhes:** abre e fecha os detalhes de um veículo (marca, potência e descrição)
- **Menu mobile:** o botão hambúrguer abre e fecha o menu no celular
- **Tentar novamente:** refaz a busca dos veículos quando o carregamento falha

## Créditos das fotos

As fotos dos veículos e a foto principal (Porsche 911, no topo da página) são do [Wikimedia Commons](https://commons.wikimedia.org/), usadas sob as licenças livres indicadas na página de cada arquivo. Se uma foto não carregar, o card mostra um espaço reservado no lugar.

- Mercedes-Benz Classe S: [Mercedes-Benz_W223_IAA_2021_1X7A0206.jpg](https://commons.wikimedia.org/wiki/File:Mercedes-Benz_W223_IAA_2021_1X7A0206.jpg)
- Porsche 911 Carrera: [Porsche_992_Carrera_4S_Genf_2019_1Y7A5561.jpg](https://commons.wikimedia.org/wiki/File:Porsche_992_Carrera_4S_Genf_2019_1Y7A5561.jpg)
- Range Rover Autobiography: [Land_Rover_Range_Rover_Autobiography_L460_Charente_Grey_(1).jpg](https://commons.wikimedia.org/wiki/File:Land_Rover_Range_Rover_Autobiography_L460_Charente_Grey_%281%29.jpg)
- BMW i7 xDrive60: [BMW_7-Series_(G70)_750e_1X7A1895_(Hintergrund_retuschiert).jpg](https://commons.wikimedia.org/wiki/File:BMW_7-Series_%28G70%29_750e_1X7A1895_%28Hintergrund_retuschiert%29.jpg)
- Porsche Cayenne Coupé: [2023_Porsche_Cayenne_Coupé_S_1X7A1676.jpg](https://commons.wikimedia.org/wiki/File:2023_Porsche_Cayenne_Coupé_S_1X7A1676.jpg)
- Mercedes-AMG GT 63 S E Performance: [2016_Mercedes-AMG_GT_(C_190)_S_coupe_(2016-03-05)_01.jpg](https://commons.wikimedia.org/wiki/File:2016_Mercedes-AMG_GT_%28C_190%29_S_coupe_%282016-03-05%29_01.jpg)
- Audi RS e-tron GT performance: [Audi_RS_e-tron_GT_1X7A1874.jpg](https://commons.wikimedia.org/wiki/File:Audi_RS_e-tron_GT_1X7A1874.jpg)
- BMW X7 M60i: [BMW_G07_X7_M60i_1X7A7226.jpg](https://commons.wikimedia.org/wiki/File:BMW_G07_X7_M60i_1X7A7226.jpg)
- Land Rover Defender 110: [Land_Rover_DEFENDER_110_S_ADVENTURE_PACK_(L663)_front.jpg](https://commons.wikimedia.org/wiki/File:Land_Rover_DEFENDER_110_S_ADVENTURE_PACK_%28L663%29_front.jpg)
- Audi R8 V10 performance: [2020_Audi_R8_V10_5.2_Front.jpg](https://commons.wikimedia.org/wiki/File:2020_Audi_R8_V10_5.2_Front.jpg)

## Wireframes

Os wireframes ficam na pasta [`docs`](./docs): mobile, tablet e desktop.
