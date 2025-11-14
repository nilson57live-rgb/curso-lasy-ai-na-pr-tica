'use client'

import { Sparkles, Zap, Target, TrendingUp } from 'lucide-react'

export default function CourseExplanation() {
  return (
    <section id="curso" className="bg-white py-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl sm:text-5xl font-extrabold text-gray-900 mb-4">
            O Que É o Curso LASY AI na Prática?
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Um treinamento completo que te ensina a criar e vender aplicativos profissionais 
            usando inteligência artificial, mesmo sem conhecimento técnico.
          </p>
        </div>

        {/* Features Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16">
          <div className="bg-gradient-to-br from-purple-50 to-indigo-50 rounded-2xl p-8 border-2 border-purple-200">
            <div className="bg-purple-600 w-14 h-14 rounded-xl flex items-center justify-center mb-4">
              <Sparkles className="w-7 h-7 text-white" />
            </div>
            <h3 className="text-2xl font-bold text-gray-900 mb-3">
              Aprenda do Zero
            </h3>
            <p className="text-gray-700 leading-relaxed">
              Não precisa saber programar! O curso começa do básico e te leva até a criação 
              de apps profissionais prontos para vender.
            </p>
          </div>

          <div className="bg-gradient-to-br from-blue-50 to-cyan-50 rounded-2xl p-8 border-2 border-blue-200">
            <div className="bg-blue-600 w-14 h-14 rounded-xl flex items-center justify-center mb-4">
              <Zap className="w-7 h-7 text-white" />
            </div>
            <h3 className="text-2xl font-bold text-gray-900 mb-3">
              Resultados Rápidos
            </h3>
            <p className="text-gray-700 leading-relaxed">
              Crie seu primeiro app funcional em poucos dias. Metodologia prática e objetiva 
              para você começar a gerar resultados rapidamente.
            </p>
          </div>

          <div className="bg-gradient-to-br from-green-50 to-emerald-50 rounded-2xl p-8 border-2 border-green-200">
            <div className="bg-green-600 w-14 h-14 rounded-xl flex items-center justify-center mb-4">
              <Target className="w-7 h-7 text-white" />
            </div>
            <h3 className="text-2xl font-bold text-gray-900 mb-3">
              Projetos Práticos
            </h3>
            <p className="text-gray-700 leading-relaxed">
              Aprenda criando 3 apps completos: Lista de Tarefas, App de Hábitos e 
              App Financeiro. Projetos reais que você pode vender.
            </p>
          </div>

          <div className="bg-gradient-to-br from-orange-50 to-yellow-50 rounded-2xl p-8 border-2 border-orange-200">
            <div className="bg-orange-600 w-14 h-14 rounded-xl flex items-center justify-center mb-4">
              <TrendingUp className="w-7 h-7 text-white" />
            </div>
            <h3 className="text-2xl font-bold text-gray-900 mb-3">
              Monetização Garantida
            </h3>
            <p className="text-gray-700 leading-relaxed">
              Aprenda estratégias comprovadas de monetização, marketing e vendas. 
              Descubra como vender seus apps para empresas e clientes.
            </p>
          </div>
        </div>

        {/* Video Demo Placeholder */}
        <div className="bg-gradient-to-r from-purple-600 to-indigo-600 rounded-2xl p-12 text-center">
          <div className="max-w-3xl mx-auto">
            <h3 className="text-3xl font-bold text-white mb-4">
              Veja a Lasy AI em Ação
            </h3>
            <p className="text-white/90 text-lg mb-8">
              Assista a demonstração completa de como criar um app do zero em minutos
            </p>
            <div className="bg-black/20 backdrop-blur-sm rounded-xl p-16 border-2 border-white/30">
              <div className="flex items-center justify-center">
                <div className="bg-white/20 backdrop-blur-sm rounded-full p-6 hover:bg-white/30 transition-all cursor-pointer">
                  <svg className="w-16 h-16 text-white" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M8 5v14l11-7z"/>
                  </svg>
                </div>
              </div>
              <p className="text-white mt-4 font-semibold">Clique para assistir a demonstração</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
