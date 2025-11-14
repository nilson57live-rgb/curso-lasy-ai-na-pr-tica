'use client'

import { ArrowRight, Clock, Zap } from 'lucide-react'
import Link from 'next/link'

export default function Price() {
  return (
    <section id="preco" className="bg-gradient-to-br from-purple-900 via-indigo-900 to-blue-900 py-24">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Urgency Banner */}
        <div className="text-center mb-12">
          <div className="inline-flex items-center space-x-2 bg-red-500 px-6 py-3 rounded-full mb-6 animate-pulse">
            <Clock className="w-5 h-5 text-white" />
            <span className="text-white font-bold">OFERTA POR TEMPO LIMITADO</span>
          </div>

          <h2 className="text-4xl sm:text-5xl font-extrabold text-white mb-4">
            Garanta Sua Vaga Agora
          </h2>
          <p className="text-xl text-white/90">
            Apenas 1000 vagas disponíveis com este preço promocional
          </p>
        </div>

        {/* Pricing Card */}
        <div className="bg-white rounded-3xl shadow-2xl overflow-hidden">
          <div className="bg-gradient-to-r from-yellow-400 to-orange-500 p-6 text-center">
            <p className="text-gray-900 font-bold text-xl">
              🔥 PROMOÇÃO ESPECIAL - ÚLTIMAS VAGAS
            </p>
          </div>

          <div className="p-12">
            {/* Price Comparison */}
            <div className="text-center mb-8">
              <div className="mb-4">
                <span className="text-gray-500 text-2xl line-through">De R$ 997,00</span>
              </div>
              <div className="mb-2">
                <span className="text-gray-400 text-3xl line-through">Por R$ 99,90</span>
              </div>
              <div className="mb-6">
                <span className="text-6xl font-extrabold text-transparent bg-gradient-to-r from-purple-600 to-indigo-600 bg-clip-text">
                  R$ 49,90
                </span>
              </div>
              <p className="text-gray-600 text-lg">
                ou <span className="font-bold">12x de R$ 4,99</span> sem juros
              </p>
            </div>

            {/* What's Included */}
            <div className="bg-gray-50 rounded-2xl p-8 mb-8">
              <h3 className="text-2xl font-bold text-gray-900 mb-6 text-center">
                O Que Está Incluso:
              </h3>
              <div className="space-y-4">
                {[
                  "✓ Acesso completo aos 10 módulos do curso",
                  "✓ 3 projetos práticos de apps completos",
                  "✓ Certificado profissional ao finalizar",
                  "✓ Todos os 5 bônus exclusivos (R$ 1.585 em valor)",
                  "✓ Acesso vitalício ao conteúdo",
                  "✓ Atualizações futuras gratuitas",
                  "✓ Suporte via comunidade VIP",
                  "✓ Garantia incondicional de 30 dias"
                ].map((item, index) => (
                  <div key={index} className="flex items-center space-x-3">
                    <Zap className="w-5 h-5 text-green-500 flex-shrink-0" />
                    <span className="text-gray-700 text-lg">{item}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* CTA Button */}
            <Link 
              href="/checkout"
              className="group w-full bg-gradient-to-r from-green-500 to-emerald-600 text-white px-12 py-6 rounded-xl font-bold text-2xl hover:shadow-2xl hover:scale-105 transition-all duration-300 flex items-center justify-center space-x-3"
            >
              <span>Garantir Minha Vaga Agora</span>
              <ArrowRight className="w-6 h-6 group-hover:translate-x-2 transition-transform" />
            </Link>

            <p className="text-center text-gray-600 mt-6">
              🔒 Pagamento 100% seguro e protegido
            </p>
          </div>
        </div>

        {/* Scarcity Counter */}
        <div className="mt-12 text-center">
          <div className="inline-block bg-white/10 backdrop-blur-sm rounded-xl p-6">
            <p className="text-white text-lg mb-2">Vagas Restantes:</p>
            <div className="text-5xl font-bold text-yellow-300">247</div>
            <p className="text-white/80 mt-2">de 1000 vagas disponíveis</p>
          </div>
        </div>
      </div>
    </section>
  )
}
