'use client'

import { Shield, CheckCircle } from 'lucide-react'

export default function Guarantee() {
  return (
    <section className="bg-white py-24">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-gradient-to-br from-green-50 to-emerald-50 rounded-3xl p-12 border-4 border-green-200">
          <div className="text-center mb-8">
            <div className="inline-flex items-center justify-center w-24 h-24 bg-green-500 rounded-full mb-6">
              <Shield className="w-12 h-12 text-white" />
            </div>
            
            <h2 className="text-4xl sm:text-5xl font-extrabold text-gray-900 mb-4">
              Garantia Incondicional de 30 Dias
            </h2>
            <p className="text-xl text-gray-700 max-w-2xl mx-auto">
              Experimente o curso sem riscos. Se não ficar satisfeito, devolvemos 100% do seu dinheiro.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
            <div className="bg-white rounded-xl p-6 shadow-md">
              <div className="flex items-start space-x-3">
                <CheckCircle className="w-6 h-6 text-green-500 flex-shrink-0 mt-1" />
                <div>
                  <h3 className="font-bold text-gray-900 mb-2">Sem Perguntas</h3>
                  <p className="text-gray-600">
                    Não precisa justificar. Basta solicitar o reembolso dentro de 30 dias.
                  </p>
                </div>
              </div>
            </div>

            <div className="bg-white rounded-xl p-6 shadow-md">
              <div className="flex items-start space-x-3">
                <CheckCircle className="w-6 h-6 text-green-500 flex-shrink-0 mt-1" />
                <div>
                  <h3 className="font-bold text-gray-900 mb-2">Reembolso Total</h3>
                  <p className="text-gray-600">
                    100% do valor pago de volta, sem taxas ou complicações.
                  </p>
                </div>
              </div>
            </div>

            <div className="bg-white rounded-xl p-6 shadow-md">
              <div className="flex items-start space-x-3">
                <CheckCircle className="w-6 h-6 text-green-500 flex-shrink-0 mt-1" />
                <div>
                  <h3 className="font-bold text-gray-900 mb-2">Processo Simples</h3>
                  <p className="text-gray-600">
                    Envie um email e receba seu reembolso em até 5 dias úteis.
                  </p>
                </div>
              </div>
            </div>

            <div className="bg-white rounded-xl p-6 shadow-md">
              <div className="flex items-start space-x-3">
                <CheckCircle className="w-6 h-6 text-green-500 flex-shrink-0 mt-1" />
                <div>
                  <h3 className="font-bold text-gray-900 mb-2">Risco Zero</h3>
                  <p className="text-gray-600">
                    Todo o risco é nosso. Você só tem a ganhar ao experimentar.
                  </p>
                </div>
              </div>
            </div>
          </div>

          <div className="bg-green-500 rounded-xl p-6 text-center">
            <p className="text-white text-lg font-semibold">
              ✓ Garantia válida por 30 dias a partir da data de compra
            </p>
          </div>
        </div>

        {/* Trust Badges */}
        <div className="mt-12 flex flex-wrap items-center justify-center gap-8">
          <div className="flex items-center space-x-2">
            <Shield className="w-6 h-6 text-green-600" />
            <span className="text-gray-700 font-semibold">Pagamento Seguro</span>
          </div>
          <div className="flex items-center space-x-2">
            <CheckCircle className="w-6 h-6 text-green-600" />
            <span className="text-gray-700 font-semibold">Dados Protegidos</span>
          </div>
          <div className="flex items-center space-x-2">
            <span className="text-2xl">🔒</span>
            <span className="text-gray-700 font-semibold">SSL Certificado</span>
          </div>
        </div>
      </div>
    </section>
  )
}
