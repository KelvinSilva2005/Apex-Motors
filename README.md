# Apex Motors

Apex Motors é uma página única de uma concessionária fictícia de veículos de luxo. A página apresenta um catálogo de veículos em destaque, com nome, ano, categoria, preço e imagem, e uma busca por marca, modelo e faixa de preço. Também traz uma seção com os diferenciais da loja, depoimentos de clientes e uma área de contato com formulário e informações do showroom. O projeto é desenvolvido com React e TypeScript, com layout responsivo mobile first, como Trabalho de Conclusão de Disciplina (TCD).

## Como executar

```bash
npm install
npm run dev
```

## Listagens

- **Principal:** veículos em estoque, 10 itens (vetor em `src/data/veiculos.ts`; a partir da Fase 4, JSON externo)
- **Secundária:** diferenciais da loja, 3 itens (vetor em `src/data/diferenciais.ts`)

## Estrutura (Fase 3)

```
src/
├── components/   # Header, Logo, Icone, Hero, Busca, ListaVeiculos, CardVeiculo,
│                 # ListaDiferenciais, CardDiferencial, ListaDepoimentos, CardDepoimento, Contato, Footer
├── data/         # tipos.ts (types) e os vetores veiculos.ts, diferenciais.ts e depoimentos.ts
├── App.css       # estilos com variáveis em :root e media queries mobile first
├── App.tsx       # guarda o estado e compõe os componentes
├── index.css
└── main.tsx
```

## Interações (useState)

- **Busca:** filtros de marca, modelo e faixa de preço que atualizam a listagem na hora, com botão para limpar
- **Ver detalhes:** abre e fecha os detalhes de um veículo (marca, potência e descrição)
- **Menu mobile:** o botão hambúrguer abre e fecha o menu no celular

## Wireframes

Os wireframes ficam na pasta [`docs`](./docs): mobile, tablet e desktop.
