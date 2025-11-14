'use client'

import { CheckCircle, Users } from 'lucide-react'

const targetAudience = [
  "Empreendedores que querem criar seus próprios apps",
  "Profissionais que desejam oferecer serviços de criação de apps",
  "Estudantes buscando uma nova habilidade lucrativa",
  "Designers que querem expandir suas ofertas de serviço",
  "Freelancers procurando novos nichos de mercado",
  "Pessoas sem conhecimento técnico que querem criar apps",
  "Profissionais de marketing digital buscando inovação",
  "Qualquer pessoa que queira gerar renda com tecnologia"
]

export default function WhoIsFor() {
  return (
    <section className="bg-gray-50 py-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Left Column - Content */}
          <div>
            <div className="inline-flex items-center space-x-2 bg-purple-100 px-4 py-2 rounded-full mb-6">
              <Users className="w-5 h-5 text-purple-600" />
              <span className="text-purple-600 font-semibold">Para Quem É Este Curso</span>
            </div>

            <h2 className="text-4xl sm:text-5xl font-extrabold text-gray-900 mb-6">
              Este Curso É Para Você Se...
            </h2>

            <p className="text-xl text-gray-600 mb-8 leading-relaxed">
              Não importa sua experiência ou formação. Se você quer aprender a criar apps 
              profissionais e gerar renda com tecnologia, este curso é para você.
            </p>

            <div className="space-y-4">
              {targetAudience.map((item, index) => (
                <div key={index} className="flex items-start space-x-3">
                  <CheckCircle className="w-6 h-6 text-green-500 flex-shrink-0 mt-1" />
                  <span className="text-gray-700 text-lg">{item}</span>
                </div>
              ))}
            </div>

            <div className="mt-10 p-6 bg-gradient-to-r from-purple-600 to-indigo-600 rounded-xl">
              <p className="text-white text-lg font-semibold text-center">
                ✨ Não precisa de conhecimento prévio em programação!
              </p>
            </div>
          </div>

          {/* Right Column - Image */}
          <div className="relative">
            <div className="relative rounded-2xl overflow-hidden shadow-2xl">
              <img 
                src="https://images.unsplash.com/photo-1522071820081-009f0129c71c?w=800&h=600&fit=crop" 
                alt="Pessoas trabalhando juntas"
                className="w-full h-auto"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-purple-900/50 to-transparent"></div>
            </div>

            {/* Floating Stats */}
            <div className="absolute -bottom-6 -left-6 bg-white rounded-xl shadow-xl p-6">
              <div className="text-center">
                <div className="text-4xl font-bold text-purple-600 mb-1">1000+</div>
                <div className="text-sm text-gray-600">Alunos Ativos</div>
              </div>
            </div>

            <div className="absolute -top-6 -right-6 bg-white rounded-xl shadow-xl p-6">
              <div className="text-center">
                <div className="text-4xl font-bold text-green-600 mb-1">4.9★</div>
                <div className="text-sm text-gray-600">Avaliação</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
