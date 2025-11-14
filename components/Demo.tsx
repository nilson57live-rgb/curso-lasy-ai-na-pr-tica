'use client'

import { Play, Sparkles } from 'lucide-react'

export default function Demo() {
  return (
    <section className="bg-gradient-to-br from-purple-900 via-indigo-900 to-blue-900 py-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <div className="inline-flex items-center space-x-2 bg-white/10 backdrop-blur-sm px-6 py-3 rounded-full mb-6">
            <Sparkles className="w-5 h-5 text-yellow-300" />
            <span className="text-white font-semibold">Demonstração ao Vivo</span>
          </div>

          <h2 className="text-4xl sm:text-5xl font-extrabold text-white mb-4">
            Veja a Lasy AI em Ação
          </h2>
          <p className="text-xl text-white/90 max-w-3xl mx-auto">
            Assista como é fácil criar um app completo em minutos usando a Lasy AI
          </p>
        </div>

        {/* Video Container */}
        <div className="max-w-5xl mx-auto">
          <div className="relative rounded-2xl overflow-hidden shadow-2xl">
            {/* Placeholder for video */}
            <div className="relative bg-black aspect-video">
              <img 
                src="https://images.unsplash.com/photo-1551650975-87deedd944c3?w=1200&h=675&fit=crop" 
                alt="Lasy AI Demo"
                className="w-full h-full object-cover opacity-60"
              />
              
              {/* Play Button Overlay */}
              <div className="absolute inset-0 flex items-center justify-center">
                <button className="group bg-white/20 backdrop-blur-sm hover:bg-white/30 rounded-full p-8 transition-all duration-300 hover:scale-110">
                  <Play className="w-16 h-16 text-white fill-white" />
                </button>
              </div>

              {/* Duration Badge */}
              <div className="absolute bottom-4 right-4 bg-black/70 backdrop-blur-sm px-4 py-2 rounded-lg">
                <span className="text-white font-semibold">5:30</span>
              </div>
            </div>
          </div>

          {/* Features Below Video */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-12">
            <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6 text-center">
              <div className="text-4xl mb-2">⚡</div>
              <h3 className="text-white font-bold text-lg mb-2">Rápido</h3>
              <p className="text-white/80">Crie apps em minutos, não em meses</p>
            </div>

            <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6 text-center">
              <div className="text-4xl mb-2">🎨</div>
              <h3 className="text-white font-bold text-lg mb-2">Profissional</h3>
              <p className="text-white/80">Design moderno e funcionalidades completas</p>
            </div>

            <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6 text-center">
              <div className="text-4xl mb-2">🚀</div>
              <h3 className="text-white font-bold text-lg mb-2">Pronto para Vender</h3>
              <p className="text-white/80">Apps prontos para monetizar imediatamente</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
