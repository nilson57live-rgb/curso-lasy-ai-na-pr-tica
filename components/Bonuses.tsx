'use client'

import { Gift, CheckCircle } from 'lucide-react'

const bonuses = [
  {
    title: "App Completo Pronto para Copiar",
    value: "R$ 297",
    description: "Um aplicativo completo e funcional que você pode usar como base para seus projetos",
    icon: "📱"
  },
  {
    title: "Templates Profissionais de Prompts",
    value: "R$ 197",
    description: "Biblioteca com +50 prompts testados e otimizados para criar apps incríveis",
    icon: "📝"
  },
  {
    title: "Pacote Lasy Ready v2",
    value: "R$ 497",
    description: "Componentes, designs e recursos premium para acelerar seu desenvolvimento",
    icon: "🎁"
  },
  {
    title: "Acesso ao Grupo VIP",
    value: "R$ 197",
    description: "Comunidade exclusiva de alunos para networking e troca de experiências",
    icon: "👥"
  },
  {
    title: "Atualizações Vitalícias",
    value: "R$ 397",
    description: "Acesso a todas as atualizações futuras do curso sem custo adicional",
    icon: "🔄"
  }
]

export default function Bonuses() {
  const totalValue = bonuses.reduce((acc, bonus) => {
    return acc + parseInt(bonus.value.replace('R$ ', ''))
  }, 0)

  return (
    <section className="bg-gray-50 py-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center space-x-2 bg-green-100 px-6 py-3 rounded-full mb-6">
            <Gift className="w-5 h-5 text-green-600" />
            <span className="text-green-600 font-semibold">Bônus Exclusivos</span>
          </div>

          <h2 className="text-4xl sm:text-5xl font-extrabold text-gray-900 mb-4">
            Leve Também Estes Bônus Incríveis
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Além do curso completo, você recebe bônus exclusivos para acelerar seus resultados
          </p>
        </div>

        {/* Bonuses List */}
        <div className="space-y-6 mb-12">
          {bonuses.map((bonus, index) => (
            <div 
              key={index}
              className="bg-white rounded-2xl shadow-lg p-8 hover:shadow-xl transition-all duration-300 border-2 border-transparent hover:border-purple-400"
            >
              <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-6">
                <div className="flex items-start space-x-4 flex-1">
                  <div className="text-5xl">{bonus.icon}</div>
                  <div>
                    <div className="flex items-center space-x-3 mb-2">
                      <h3 className="text-2xl font-bold text-gray-900">
                        Bônus #{index + 1}: {bonus.title}
                      </h3>
                      <CheckCircle className="w-6 h-6 text-green-500" />
                    </div>
                    <p className="text-gray-600 leading-relaxed">
                      {bonus.description}
                    </p>
                  </div>
                </div>
                <div className="bg-gradient-to-r from-green-500 to-emerald-500 text-white px-6 py-3 rounded-xl font-bold text-xl whitespace-nowrap">
                  {bonus.value}
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Total Value */}
        <div className="bg-gradient-to-r from-purple-600 to-indigo-600 rounded-2xl p-8 text-center">
          <div className="max-w-3xl mx-auto">
            <h3 className="text-3xl font-bold text-white mb-4">
              Valor Total dos Bônus
            </h3>
            <div className="text-6xl font-extrabold text-yellow-300 mb-4">
              R$ {totalValue.toLocaleString('pt-BR')}
            </div>
            <p className="text-xl text-white/90">
              Tudo isso GRÁTIS quando você se inscrever hoje!
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}
