import { Template } from '../components/Template';

function Home() {
    return ( 
      <>
      <Template>
        <main className='p-8'> ...
       </main>
      </Template>
      

<div className="min-h-screen bg-gray-50 text-gray-800 font-sans">
      
      {/* 1. NAV BAR (Fixa e Elegante) */}

      {/* Espaçador para o conteúdo não sumir sob a navbar fixa */}
      <div className="pt-24"></div>

      {/* 2. HERO SECTION / SOBRE */}
      <section id="about" className="max-w-5xl mx-auto px-4 py-16 text-center">
        <span className="text-xs font-bold tracking-widest text-red-600 uppercase bg-red-50 px-3 py-1 rounded-full">
          Sobre a plataforma
        </span>
        <h1 className="mt-4 text-4xl font-extrabold tracking-tight text-gray-900 sm:text-5xl">
          Tecnologia que transforma a <br />
          <span className="text-red-600">segurança do trabalho</span>
        </h1>
        <p className="mt-6 text-lg leading-8 text-gray-600 max-w-3xl mx-auto">
          Nossa solução foi desenvolvida para simplificar a gestão de EPIs, automatizar processos e facilitar o controle de entrada, saída e estoque. Mais organização para a empresa, mais segurança para quem faz tudo acontecer.
        </p>

        {/* Grid de Diferenciais */}
        <div className="mt-12 grid gap-8 sm:grid-cols-2 text-left">
          <div className="bg-white p-8 rounded-2xl shadow-sm border border-gray-100">
            <h3 className="text-lg font-bold text-gray-900 flex items-center gap-2">
              <span className="w-2 h-2 rounded-full bg-red-600"></span>
              Segurança inteligente
            </h3>
            <p className="mt-2 text-sm text-gray-600 leading-relaxed">
              Automatizamos o controle de EPIs e simplificamos a rotina da sua empresa através de tecnologia, eficiência e praticidade.
            </p>
          </div>
          <div className="bg-white p-8 rounded-2xl shadow-sm border border-gray-100">
            <h3 className="text-lg font-bold text-gray-900 flex items-center gap-2">
              <span className="w-2 h-2 rounded-full bg-red-600"></span>
              Fim da burocracia
            </h3>
            <p className="mt-2 text-sm text-gray-600 leading-relaxed">
              Menos papelada. Mais controle digital integrado e conformidade com as normas vigentes em tempo real.
            </p>
          </div>
        </div>
      </section>

      {/* 3. SEÇÃO DE PREÇOS (Transformada de tabela para Cards Modernos) */}
      <section id="prices" className="bg-gray-100/70 border-y border-gray-200 py-20">
        <div className="max-w-5xl mx-auto px-4">
          <div className="text-center max-w-2xl mx-auto mb-12">
            <h2 className="text-3xl font-bold tracking-tight text-gray-900">Planos que se adaptam à sua empresa</h2>
            <p className="mt-3 text-base text-gray-600">Escolha a solução ideal para automatizar a gestão de EPIs e elevar o nível de segurança.</p>
          </div>

          {/* Cards de Preço */}
          <div className="grid gap-8 md:grid-cols-3 items-stretch">
            
            {/* Plano 12 Meses (Destaque) */}
            <div className="relative bg-white rounded-2xl p-8 shadow-md border-2 border-red-500 flex flex-col justify-between order-first md:order-none">
              <div className="absolute -top-4 left-1/2 -translate-x-1/2 bg-red-600 text-white text-xs font-bold px-3 py-1 rounded-full uppercase tracking-wider">
                Melhor Valor
              </div>
              <div>
                <h4 className="text-lg font-bold text-gray-900">Anual (12 Meses)</h4>
                <div className="mt-4 flex items-baseline text-gray-900">
                  <span className="text-3xl font-extrabold tracking-tight">R$ 599</span>
                  <span className="ml-1 text-sm font-semibold text-gray-500">/ano</span>
                </div>
                <p className="mt-4 text-sm text-gray-600">Economia máxima para empresas que buscam uma gestão sólida e contínua a longo prazo.</p>
              </div>
              <button className="mt-8 w-full bg-red-600 text-white font-semibold py-2.5 px-4 rounded-xl hover:bg-red-700 transition-colors text-sm">
                Escolher plano
              </button>
            </div>

            {/* Plano 3 Meses */}
            <div className="bg-white rounded-2xl p-8 shadow-sm border border-gray-200 flex flex-col justify-between">
              <div>
                <h4 className="text-lg font-bold text-gray-900">Trimestral (3 Meses)</h4>
                <div className="mt-4 flex items-baseline text-gray-900">
                  <span className="text-3xl font-extrabold tracking-tight">R$ 349</span>
                  <span className="ml-1 text-sm font-semibold text-gray-500">/3 meses</span>
                </div>
                <p className="mt-4 text-sm text-gray-600">Ideal para validar nossos processos e experimentar a automação na sua empresa.</p>
              </div>
              <button className="mt-8 w-full bg-gray-900 text-white font-semibold py-2.5 px-4 rounded-xl hover:bg-gray-800 transition-colors text-sm">
                Escolher plano
              </button>
            </div>

            {/* Plano Mensal */}
            <div className="bg-white rounded-2xl p-8 shadow-sm border border-gray-200 flex flex-col justify-between">
              <div>
                <h4 className="text-lg font-bold text-gray-900">Mensal</h4>
                <div className="mt-4 flex items-baseline text-gray-900">
                  <span className="text-3xl font-extrabold tracking-tight">R$ 199</span>
                  <span className="ml-1 text-sm font-semibold text-gray-500">/mês</span>
                </div>
                <p className="mt-4 text-sm text-gray-600">Flexibilidade total para sua empresa, sem fidelidade ou taxas de cancelamento.</p>
              </div>
              <button className="mt-8 w-full bg-gray-900 text-white font-semibold py-2.5 px-4 rounded-xl hover:bg-gray-800 transition-colors text-sm">
                Escolher plano
              </button>
            </div>

          </div>

          {/* Rodapé dos Planos */}
          <p className="mt-10 text-center text-sm font-medium text-gray-700 bg-white/80 p-4 rounded-xl border border-gray-200 max-w-3xl mx-auto shadow-sm">
            🛡️ Todos os planos incluem <span className="font-bold text-gray-900">suporte especializado</span>, atualizações constantes e acesso às principais ferramentas de gestão e controle de EPIs.
          </p>
        </div>
      </section>

      {/* 4. SEÇÃO DE BENEFÍCIOS */}
      <section id="benefits" className="max-w-5xl mx-auto px-4 py-20">
        <div className="text-center mb-12">
          <h2 className="text-2xl font-bold text-gray-900">Qual o benefício de usar essa ferramenta?</h2>
        </div>
        <div className="grid gap-6 sm:grid-cols-2">
          <div className="flex gap-4 p-4">
            <div className="text-red-600 text-xl font-bold">✓</div>
            <div>
              <h5 className="font-bold text-gray-900">Controle de EPIs Inteligente</h5>
              <p className="text-sm text-gray-600 mt-1">Acompanhe detalhadamente as entradas, saídas e movimentações de estoque em uma única tela centralizada.</p>
            </div>
          </div>
          <div className="flex gap-4 p-4">
            <div className="text-red-600 text-xl font-bold">✓</div>
            <div>
              <h5 className="font-bold text-gray-900">Automação Completa</h5>
              <p className="text-sm text-gray-600 mt-1">Reduza tarefas manuais cansativas e evite falhas humanas ou esquecimentos em auditorias de segurança.</p>
            </div>
          </div>
        </div>
      </section>

    </div>
    </>
  );
}

                export default Home;