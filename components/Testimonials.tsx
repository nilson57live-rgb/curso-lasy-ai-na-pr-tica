'use client'

import { Star, Quote } from 'lucide-react'

const testimonials = [
  {
    name: "Carlos Silva",
    role: "Empreendedor Digital",
    image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400&h=400&fit=crop",
    text: "Consegui criar meu primeiro app em apenas 3 dias! A Lasy AI é incrível e o curso é muito completo. Já estou vendendo meus apps e gerando renda extra.",
    rating: 5
  },
  {
    name: "Ana Paula Costa",
    role: "Designer Gráfica",
    image: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=400&h=400&fit=crop",
    text: "Nunca imaginei que conseguiria criar apps sem saber programar. O curso é muito didático e a Lasy AI facilita tudo. Recomendo muito!",
    rating: 5
  },
  {
    name: "Ricardo Mendes",
    role: "Estudante de Marketing",
    image: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=400&h=400&fit=crop",
    text: "Investimento que valeu cada centavo! Aprendi a criar apps profissionais e já estou oferecendo serviços para empresas locais. Mudou minha vida!",
    rating: 5
  }
]

export default function Testimonials() {
  return (
    <section id="depoimentos" className="bg-gray-50 py-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl sm:text-5xl font-extrabold text-gray-900 mb-4">
            O Que Nossos Alunos Dizem
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Histórias reais de pessoas que transformaram suas vidas com a Lasy AI
          </p>
        </div>

        {/* Testimonials Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <div 
              key={index}
              className="bg-white rounded-2xl shadow-xl p-8 hover:shadow-2xl transition-all duration-300 hover:-translate-y-2"
            >
              {/* Quote Icon */}
              <Quote className="w-10 h-10 text-purple-600 mb-4" />

              {/* Rating */}
              <div className="flex space-x-1 mb-4">
                {[...Array(testimonial.rating)].map((_, i) => (
                  <Star key={i} className="w-5 h-5 fill-yellow-400 text-yellow-400" />
                ))}
              </div>

              {/* Testimonial Text */}
              <p className="text-gray-700 mb-6 leading-relaxed">
                "{testimonial.text}"
              </p>

              {/* Author Info */}
              <div className="flex items-center space-x-4">
                <img 
                  src={testimonial.image} 
                  alt={testimonial.name}
                  className="w-14 h-14 rounded-full object-cover"
                />
                <div>
                  <h4 className="font-bold text-gray-900">{testimonial.name}</h4>
                  <p className="text-sm text-gray-600">{testimonial.role}</p>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Trust Badge */}
        <div className="mt-16 text-center">
          <div className="inline-flex items-center space-x-2 bg-green-100 px-6 py-3 rounded-full">
            <span className="text-2xl">✓</span>
            <span className="text-green-800 font-semibold">
              Mais de 1.000 alunos satisfeitos
            </span>
          </div>
        </div>
      </div>
    </section>
  )
}
