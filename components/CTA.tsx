import { ArrowRight } from 'lucide-react'

export default function CTA() {
  return (
    <section className="py-20 bg-gradient-to-br from-blue-600 to-purple-700">
      <div className="container mx-auto px-4 text-center">
        <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
          Pronto para Transformar Sua Vida?
        </h2>
        <p className="text-xl text-blue-100 mb-8 max-w-2xl mx-auto">
          Garanta sua vaga agora e comece a criar apps com IA hoje mesmo!
        </p>
        <button className="bg-white text-blue-600 px-8 py-4 rounded-full text-lg font-bold hover:bg-blue-50 transition-all duration-300 hover:scale-105 shadow-2xl inline-flex items-center gap-2">
          Garantir Minha Vaga — R$49,90
          <ArrowRight className="w-5 h-5" />
        </button>
        <p className="text-blue-100 mt-4 text-sm">
          ⏰ Promoção por tempo limitado para os primeiros 1000 alunos
        </p>
      </div>
    </section>
  )
}
