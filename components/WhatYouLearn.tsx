'use client'

import { BookOpen, Code, Rocket, DollarSign, TrendingUp, Award, Users, Briefcase, Lightbulb, Trophy } from 'lucide-react'

const modules = [
  {
    number: 1,
    title: "Introdução e Configuração",
    icon: BookOpen,
    topics: ["O que é a Lasy AI", "Criando sua conta", "Conhecendo o painel", "Primeiros passos"]
  },
  {
    number: 2,
    title: "Fundamentos da IA para Apps",
    icon: Lightbulb,
    topics: ["Fluxo de criação", "Prompts estruturais", "Lógicas de automação", "Boas práticas"]
  },
  {
    number: 3,
    title: "App 1: Lista de Tarefas com IA",
    icon: Code,
    topics: ["Planejamento do app", "Criação passo a passo", "Funcionalidades IA", "Publicação"]
  },
  {
    number: 4,
    title: "App 2: App de Hábitos Inteligentes",
    icon: Trophy,
    topics: ["Design do app", "Sistema de gamificação", "Notificações inteligentes", "Análise de dados"]
  },
  {
    number: 5,
    title: "App 3: App Financeiro de IA",
    icon: DollarSign,
    topics: ["Gestão financeira", "Gráficos e relatórios", "Previsões com IA", "Segurança de dados"]
  },
  {
    number: 6,
    title: "Monetização",
    icon: TrendingUp,
    topics: ["Modelos de negócio", "Precificação", "Estratégias de venda", "Plataformas de venda"]
  },
  {
    number: 7,
    title: "Lançamento e Marketing",
    icon: Rocket,
    topics: ["Estratégias de lançamento", "Marketing digital", "Redes sociais", "Anúncios pagos"]
  },
  {
    number: 8,
    title: "Automação de IA nos Apps",
    icon: Briefcase,
    topics: ["Integração de APIs", "Chatbots inteligentes", "Análise preditiva", "Personalização"]
  },
  {
    number: 9,
    title: "Vendendo Apps para Empresas",
    icon: Users,
    topics: ["Prospecção B2B", "Apresentação de propostas", "Negociação", "Contratos"]
  },
  {
    number: 10,
    title: "Projeto Final + Certificação",
    icon: Award,
    topics: ["Projeto completo", "Revisão final", "Certificado profissional", "Próximos passos"]
  }
]

export default function WhatYouLearn() {
  return (
    <section id="modulos" className="bg-white py-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl sm:text-5xl font-extrabold text-gray-900 mb-4">
            O Que Você Vai Aprender
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            10 módulos completos com conteúdo prático e direto ao ponto. 
            Do básico ao avançado, tudo que você precisa para dominar a criação de apps com IA.
          </p>
        </div>

        {/* Modules Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {modules.map((module) => {
            const Icon = module.icon
            return (
              <div 
                key={module.number}
                className="bg-gradient-to-br from-gray-50 to-white rounded-2xl p-8 border-2 border-gray-200 hover:border-purple-400 hover:shadow-xl transition-all duration-300"
              >
                <div className="flex items-start space-x-4">
                  {/* Module Number */}
                  <div className="bg-gradient-to-r from-purple-600 to-indigo-600 text-white w-12 h-12 rounded-xl flex items-center justify-center font-bold text-lg flex-shrink-0">
                    {module.number}
                  </div>

                  <div className="flex-1">
                    {/* Module Title */}
                    <div className="flex items-center space-x-2 mb-3">
                      <Icon className="w-6 h-6 text-purple-600" />
                      <h3 className="text-xl font-bold text-gray-900">
                        {module.title}
                      </h3>
                    </div>

                    {/* Topics */}
                    <ul className="space-y-2">
                      {module.topics.map((topic, index) => (
                        <li key={index} className="flex items-center space-x-2 text-gray-700">
                          <span className="w-1.5 h-1.5 bg-purple-600 rounded-full"></span>
                          <span>{topic}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </div>
            )
          })}
        </div>

        {/* Bottom CTA */}
        <div className="mt-16 text-center">
          <div className="inline-block bg-gradient-to-r from-purple-100 to-indigo-100 rounded-2xl p-8">
            <h3 className="text-2xl font-bold text-gray-900 mb-2">
              🎓 Certificado Profissional Incluso
            </h3>
            <p className="text-gray-700">
              Ao concluir o curso, você recebe um certificado digital reconhecido
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}
