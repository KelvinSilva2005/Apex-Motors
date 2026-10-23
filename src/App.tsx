function App() {
  return (
    <div className="min-h-screen bg-white text-neutral-900">
      {/* ===== Cabeçalho ===== */}
      <header className="sticky top-0 z-10 border-b border-neutral-300 bg-white">
        <div className="mx-auto flex max-w-6xl items-center justify-between px-4 py-4 md:px-8">
          <a href="#inicio" className="flex items-center gap-2">
            <svg
              viewBox="0 0 40 32"
              className="h-8 w-10"
              fill="none"
              stroke="currentColor"
              strokeWidth="2.5"
              aria-hidden="true"
            >
              <path d="M2 30 L20 2 L38 30 Z" />
              <path d="M12 30 L24 12" />
            </svg>
            <span className="text-xl font-semibold">Apex Motors</span>
          </a>

          <nav className="hidden items-center gap-6 text-sm font-medium md:flex lg:gap-10">
            <a href="#inicio" className="hover:underline">
              Início
            </a>
            <a href="#estoque" className="hover:underline">
              Estoque
            </a>
            <a href="#estoque" className="hover:underline">
              Modelos de Luxo
            </a>
            <a href="#sobre" className="hover:underline">
              Sobre
            </a>
            <a href="#contato" className="hover:underline">
              Contato
            </a>
          </nav>

          <div className="flex items-center">
            <button
              type="button"
              aria-label="Buscar"
              className="hidden border-l border-neutral-400 pl-4 md:block"
            >
              <svg
                viewBox="0 0 24 24"
                className="h-5 w-5"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                aria-hidden="true"
              >
                <circle cx="11" cy="11" r="7" />
                <path d="M20 20 L16 16" />
              </svg>
            </button>
            <button type="button" aria-label="Abrir menu" className="md:hidden">
              <svg
                viewBox="0 0 24 24"
                className="h-7 w-7"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                aria-hidden="true"
              >
                <path d="M3 6 H21 M3 12 H21 M3 18 H21" />
              </svg>
            </button>
          </div>
        </div>
      </header>

      <main>
        {/* ===== Destaque principal (hero) ===== */}
        <section id="inicio" className="border-b border-neutral-300">
          <div className="mx-auto grid max-w-6xl gap-6 px-4 py-8 md:grid-cols-2 md:items-center md:px-8 lg:py-12">
            <div>
              <p className="text-xs font-semibold uppercase tracking-[0.3em] text-neutral-600">
                Veículos excepcionais
              </p>
              <h1 className="mt-2 font-serif text-4xl uppercase leading-tight lg:text-5xl">
                Dirija algo extraordinário
              </h1>
              <p className="mt-4 text-neutral-700">
                Uma coleção cuidadosamente selecionada dos veículos mais
                prestigiados do mundo. Luxo, performance e exclusividade sem
                compromissos.
              </p>
              <div className="mt-6 flex flex-col gap-3 md:flex-row">
                <a
                  href="#estoque"
                  className="bg-neutral-900 px-8 py-3 text-center text-sm font-semibold uppercase text-white hover:bg-neutral-700"
                >
                  Ver estoque
                </a>
                <a
                  href="#sobre"
                  className="border border-neutral-900 px-8 py-3 text-center text-sm font-semibold uppercase hover:bg-neutral-100"
                >
                  Saiba mais
                </a>
              </div>
            </div>

            <div className="flex aspect-video items-center justify-center border border-neutral-300 bg-neutral-100 text-xs uppercase text-neutral-500">
              Imagem principal do carro
            </div>
          </div>
        </section>

        {/* ===== Busca ===== */}
        <section className="border-b border-neutral-300">
          <form className="mx-auto grid max-w-6xl gap-4 px-4 py-6 md:grid-cols-2 md:px-8 lg:grid-cols-4 lg:items-end">
            <label className="flex flex-col gap-1 text-sm font-semibold">
              Marca
              <select className="border border-neutral-400 bg-white px-3 py-2 font-normal">
                <option>Todas as Marcas</option>
                <option>Mercedes-Benz</option>
                <option>Porsche</option>
                <option>Land Rover</option>
              </select>
            </label>

            <label className="flex flex-col gap-1 text-sm font-semibold">
              Modelo
              <select className="border border-neutral-400 bg-white px-3 py-2 font-normal">
                <option>Todos os Modelos</option>
                <option>Sedã</option>
                <option>Coupé</option>
                <option>SUV</option>
              </select>
            </label>

            <label className="flex flex-col gap-1 text-sm font-semibold">
              Faixa de Preço
              <select className="border border-neutral-400 bg-white px-3 py-2 font-normal">
                <option>Qualquer Preço</option>
                <option>Até R$ 130.000</option>
                <option>R$ 130.000 a R$ 150.000</option>
                <option>Acima de R$ 150.000</option>
              </select>
            </label>

            <button
              type="button"
              className="bg-neutral-900 py-3 text-sm font-semibold uppercase text-white hover:bg-neutral-700 md:self-end"
            >
              Buscar
            </button>
          </form>
        </section>

        {/* ===== Listagem principal: veículos em destaque ===== */}
        <section id="estoque" className="border-b border-neutral-300">
          <div className="mx-auto max-w-6xl px-4 py-10 md:px-8">
            <h2 className="text-center font-serif text-2xl uppercase md:text-3xl">
              Veículos em destaque
            </h2>
            <p className="mt-1 text-center text-sm text-neutral-600">
              Veículos de luxo selecionados para um estilo de vida
              extraordinário.
            </p>

            <div className="mt-8 grid gap-4 md:grid-cols-2 md:gap-6 lg:grid-cols-3">
              {/* Veículo 1 */}
              <article className="flex border border-neutral-300 md:flex-col">
                <div className="flex w-1/3 shrink-0 items-center justify-center bg-neutral-100 p-2 text-center text-xs uppercase text-neutral-500 md:aspect-video md:w-full">
                  Imagem do veículo 1
                </div>
                <div className="flex flex-1 flex-col gap-2 p-3 md:p-4">
                  <div className="flex items-start justify-between gap-2">
                    <h3 className="font-semibold">Mercedes-Benz Classe S</h3>
                    <span className="whitespace-nowrap font-semibold">
                      R$ 129.900
                    </span>
                  </div>
                  <p className="text-sm text-neutral-600">2024 | Sedã</p>
                  <a
                    href="#contato"
                    className="mt-auto border border-neutral-900 py-2 text-center text-xs font-semibold uppercase hover:bg-neutral-100"
                  >
                    Ver detalhes
                  </a>
                </div>
              </article>

              {/* Veículo 2 */}
              <article className="flex border border-neutral-300 md:flex-col">
                <div className="flex w-1/3 shrink-0 items-center justify-center bg-neutral-100 p-2 text-center text-xs uppercase text-neutral-500 md:aspect-video md:w-full">
                  Imagem do veículo 2
                </div>
                <div className="flex flex-1 flex-col gap-2 p-3 md:p-4">
                  <div className="flex items-start justify-between gap-2">
                    <h3 className="font-semibold">Porsche 911 Carrera</h3>
                    <span className="whitespace-nowrap font-semibold">
                      R$ 152.900
                    </span>
                  </div>
                  <p className="text-sm text-neutral-600">2024 | Coupé</p>
                  <a
                    href="#contato"
                    className="mt-auto border border-neutral-900 py-2 text-center text-xs font-semibold uppercase hover:bg-neutral-100"
                  >
                    Ver detalhes
                  </a>
                </div>
              </article>

              {/* Veículo 3 (no tablet fica centralizado sozinho na linha) */}
              <article className="flex border border-neutral-300 md:col-span-2 md:mx-auto md:w-2/3 md:flex-col lg:col-span-1 lg:w-full">
                <div className="flex w-1/3 shrink-0 items-center justify-center bg-neutral-100 p-2 text-center text-xs uppercase text-neutral-500 md:aspect-video md:w-full">
                  Imagem do veículo 3
                </div>
                <div className="flex flex-1 flex-col gap-2 p-3 md:p-4">
                  <div className="flex items-start justify-between gap-2">
                    <h3 className="font-semibold">Range Rover Autobiography</h3>
                    <span className="whitespace-nowrap font-semibold">
                      R$ 141.900
                    </span>
                  </div>
                  <p className="text-sm text-neutral-600">2024 | SUV</p>
                  <a
                    href="#contato"
                    className="mt-auto border border-neutral-900 py-2 text-center text-xs font-semibold uppercase hover:bg-neutral-100"
                  >
                    Ver detalhes
                  </a>
                </div>
              </article>
            </div>
          </div>
        </section>

        {/* ===== Listagem secundária: diferenciais ===== */}
        <section id="sobre" className="border-b border-neutral-300">
          <div className="mx-auto max-w-6xl px-4 py-10 md:px-8">
            <h2 className="text-center font-serif text-2xl uppercase md:text-3xl">
              Por que escolher a Apex Motors
            </h2>
            <p className="mt-1 text-center text-sm text-neutral-600">
              Um padrão mais elevado em veículos de luxo.
            </p>

            <div className="mt-8 grid gap-6 md:grid-cols-3 md:gap-0 md:divide-x md:divide-neutral-300">
              <div className="flex items-start gap-4 md:px-4">
                <div className="flex h-14 w-14 shrink-0 items-center justify-center rounded-full border-2 border-neutral-900 lg:h-16 lg:w-16">
                  <svg
                    viewBox="0 0 24 24"
                    className="h-7 w-7"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="1.5"
                    aria-hidden="true"
                  >
                    <path d="M6 3 H18 L22 9 L12 21 L2 9 Z M2 9 H22 M9 3 L12 21 M15 3 L12 21" />
                  </svg>
                </div>
                <div>
                  <h3 className="text-sm font-semibold uppercase">
                    Seleção Premium
                  </h3>
                  <p className="mt-1 text-sm text-neutral-600">
                    Uma curadoria criteriosa dos veículos mais prestigiados do
                    mundo.
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-4 md:px-4">
                <div className="flex h-14 w-14 shrink-0 items-center justify-center rounded-full border-2 border-neutral-900 lg:h-16 lg:w-16">
                  <svg
                    viewBox="0 0 24 24"
                    className="h-7 w-7"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="1.5"
                    aria-hidden="true"
                  >
                    <path d="M12 2 L20 5 V11 C20 16 16.5 20 12 22 C7.5 20 4 16 4 11 V5 Z" />
                  </svg>
                </div>
                <div>
                  <h3 className="text-sm font-semibold uppercase">
                    Qualidade Verificada
                  </h3>
                  <p className="mt-1 text-sm text-neutral-600">
                    Todos os veículos passam por uma avaliação completa de
                    procedência, segurança e desempenho.
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-4 md:px-4">
                <div className="flex h-14 w-14 shrink-0 items-center justify-center rounded-full border-2 border-neutral-900 lg:h-16 lg:w-16">
                  <svg
                    viewBox="0 0 24 24"
                    className="h-7 w-7"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="1.5"
                    aria-hidden="true"
                  >
                    <circle cx="12" cy="8" r="4" />
                    <path d="M4 21 C4 16 8 14 12 14 C16 14 20 16 20 21 Z" />
                  </svg>
                </div>
                <div>
                  <h3 className="text-sm font-semibold uppercase">
                    Atendimento Exclusivo
                  </h3>
                  <p className="mt-1 text-sm text-neutral-600">
                    Experiência personalizada, do primeiro contato à entrega do
                    seu veículo.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* ===== Depoimentos ===== */}
        <section className="border-b border-neutral-300 bg-neutral-100">
          <div className="mx-auto max-w-6xl px-4 py-10 md:px-8">
            <h2 className="text-center font-serif text-2xl uppercase md:text-3xl">
              Uma experiência de luxo
            </h2>
            <p className="mt-1 text-center text-sm text-neutral-600">
              A confiança de quem já viveu a experiência Apex Motors.
            </p>

            <div className="mt-8 grid gap-4 md:grid-cols-2 md:gap-6">
              <article className="flex gap-4 border border-neutral-300 bg-white p-4">
                <div className="h-14 w-14 shrink-0 rounded-full bg-neutral-200 lg:h-16 lg:w-16" />
                <div>
                  <p className="text-sm text-neutral-700">
                    "A Apex Motors tornou todo o processo simples e seguro.
                    Atendimento impecável e uma seleção incrível de veículos."
                  </p>
                  <p className="mt-2 tracking-widest">★★★★★</p>
                  <p className="text-xs text-neutral-600">
                    <span className="font-semibold text-neutral-900">
                      Carlos M.
                    </span>{" "}
                    | Cliente Verificado
                  </p>
                </div>
              </article>

              <article className="flex gap-4 border border-neutral-300 bg-white p-4">
                <div className="h-14 w-14 shrink-0 rounded-full bg-neutral-200 lg:h-16 lg:w-16" />
                <div>
                  <p className="text-sm text-neutral-700">
                    "Experiência realmente diferenciada. Equipe muito
                    profissional e atenciosa, do início ao fim. Recomendo sem
                    hesitação."
                  </p>
                  <p className="mt-2 tracking-widest">★★★★★</p>
                  <p className="text-xs text-neutral-600">
                    <span className="font-semibold text-neutral-900">
                      Mariana R.
                    </span>{" "}
                    | Cliente Verificada
                  </p>
                </div>
              </article>
            </div>
          </div>
        </section>

        {/* ===== Contato ===== */}
        <section id="contato">
          <div className="mx-auto max-w-6xl px-4 py-10 md:px-8">
            <h2 className="text-center font-serif text-2xl uppercase md:text-3xl">
              Entre em contato
            </h2>
            <p className="mt-1 text-center text-sm text-neutral-600">
              Visite nosso showroom ou envie uma mensagem. Nossa equipe está
              pronta para atendê-lo.
            </p>

            <div className="mt-8 grid gap-6 md:grid-cols-5">
              <form className="border-neutral-300 md:col-span-3 md:border md:p-4">
                <h3 className="mb-3 hidden text-sm font-semibold uppercase md:block">
                  Enviar mensagem
                </h3>
                <div className="grid gap-3 md:grid-cols-2">
                  <input
                    type="text"
                    placeholder="Nome Completo"
                    className="border border-neutral-400 px-3 py-2 text-sm"
                  />
                  <input
                    type="email"
                    placeholder="E-mail"
                    className="border border-neutral-400 px-3 py-2 text-sm"
                  />
                  <input
                    type="text"
                    placeholder="Assunto"
                    className="border border-neutral-400 px-3 py-2 text-sm md:col-span-2"
                  />
                  <textarea
                    placeholder="Sua Mensagem"
                    rows={4}
                    className="border border-neutral-400 px-3 py-2 text-sm md:col-span-2"
                  />
                  <button
                    type="button"
                    className="bg-neutral-900 py-3 text-sm font-semibold uppercase text-white hover:bg-neutral-700 md:col-span-2 lg:col-span-1"
                  >
                    Enviar mensagem
                  </button>
                </div>
              </form>

              <div className="md:col-span-2">
                <div className="flex aspect-video flex-col items-center justify-center gap-2 border border-neutral-300 bg-neutral-100 text-xs uppercase text-neutral-500">
                  <svg
                    viewBox="0 0 24 24"
                    className="h-7 w-7 text-neutral-900"
                    fill="currentColor"
                    aria-hidden="true"
                  >
                    <path d="M12 2 C8 2 5 5 5 9 C5 14 12 22 12 22 C12 22 19 14 19 9 C19 5 16 2 12 2 Z M12 12 A3 3 0 1 1 12 6 A3 3 0 1 1 12 12 Z" />
                  </svg>
                  Mapa do showroom
                </div>
                <div className="mt-4 text-sm">
                  <p className="font-semibold">Showroom Apex Motors</p>
                  <p className="text-neutral-600">
                    Av. Europa, 1234 – Jardim Europa, São Paulo – SP, 01449-000
                  </p>
                  <p className="mt-2 text-neutral-600">
                    Segunda a Sexta: 9h às 19h
                  </p>
                  <p className="text-neutral-600">Sábado: 9h às 14h</p>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>

      {/* ===== Rodapé ===== */}
      <footer className="border-t border-neutral-300">
        <div className="mx-auto grid max-w-6xl gap-6 px-4 py-8 md:grid-cols-4 md:divide-x md:divide-neutral-300 md:px-8">
          <div>
            <div className="flex items-center gap-2">
              <svg
                viewBox="0 0 40 32"
                className="h-7 w-9"
                fill="none"
                stroke="currentColor"
                strokeWidth="2.5"
                aria-hidden="true"
              >
                <path d="M2 30 L20 2 L38 30 Z" />
                <path d="M12 30 L24 12" />
              </svg>
              <span className="text-lg font-semibold">Apex Motors</span>
            </div>
            <p className="mt-2 text-xs uppercase text-neutral-600">
              Veículos extraordinários. Pessoas extraordinárias.
            </p>
          </div>

          <div className="md:pl-6">
            <h4 className="text-xs font-semibold uppercase">Links rápidos</h4>
            <ul className="mt-2 space-y-1 text-sm text-neutral-700">
              <li>
                <a href="#inicio" className="hover:underline">
                  Início
                </a>
              </li>
              <li>
                <a href="#estoque" className="hover:underline">
                  Estoque
                </a>
              </li>
              <li>
                <a href="#estoque" className="hover:underline">
                  Modelos de Luxo
                </a>
              </li>
              <li>
                <a href="#sobre" className="hover:underline">
                  Sobre
                </a>
              </li>
              <li>
                <a href="#contato" className="hover:underline">
                  Contato
                </a>
              </li>
            </ul>
          </div>

          <div className="md:pl-6">
            <h4 className="text-xs font-semibold uppercase">Siga-nos</h4>
            <div className="mt-2 flex gap-2">
              <a
                href="#"
                aria-label="Instagram"
                className="flex h-9 w-9 items-center justify-center border border-neutral-900 text-xs font-bold hover:bg-neutral-100"
              >
                IG
              </a>
              <a
                href="#"
                aria-label="Facebook"
                className="flex h-9 w-9 items-center justify-center border border-neutral-900 text-xs font-bold hover:bg-neutral-100"
              >
                f
              </a>
              <a
                href="#"
                aria-label="LinkedIn"
                className="flex h-9 w-9 items-center justify-center border border-neutral-900 text-xs font-bold hover:bg-neutral-100"
              >
                in
              </a>
              <a
                href="#"
                aria-label="YouTube"
                className="flex h-9 w-9 items-center justify-center border border-neutral-900 text-xs font-bold hover:bg-neutral-100"
              >
                YT
              </a>
            </div>
          </div>

          <div className="md:pl-6">
            <h4 className="text-xs font-semibold uppercase">Contato</h4>
            <ul className="mt-2 space-y-1 text-sm text-neutral-700">
              <li>(11) 3050-0123</li>
              <li>contato@apexmotors.com.br</li>
              <li>Av. Europa, 1234 – São Paulo, SP</li>
            </ul>
          </div>
        </div>

        <p className="border-t border-neutral-300 py-3 text-center text-xs text-neutral-500">
          © 2026 Apex Motors. Todos os direitos reservados.
        </p>
      </footer>
    </div>
  );
}

export default App;