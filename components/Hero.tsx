'use client'

import { ArrowRight, Sparkles, Zap } from 'lucide-react'
import Link from 'next/link'

export default function Hero() {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden pt-20">
      {/* Background Gradient */}
      <div className="absolute inset-0 bg-gradient-to-br from-purple-600 via-indigo-600 to-blue-700"></div>
      
      {/* Animated Background Elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute -top-40 -right-40 w-80 h-80 bg-purple-500 rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-blob"></div>
        <div className="absolute -bottom-40 -left-40 w-80 h-80 bg-indigo-500 rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-blob animation-delay-2000"></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-80 h-80 bg-blue-500 rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-blob animation-delay-4000"></div>
      </div>

      {/* Content */}
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24 text-center">
        {/* Badge */}
        <div className="inline-flex items-center space-x-2 bg-white/20 backdrop-blur-sm px-6 py-3 rounded-full mb-8">
          <Sparkles className="w-5 h-5 text-yellow-300" />
          <span className="text-white font-semibold">LASY READY v3 — ULTIMATE EDITION</span>
        </div>

        {/* Main Title */}
        <h1 className="text-5xl sm:text-6xl lg:text-7xl font-extrabold text-white mb-6 leading-tight">
          Crie Apps com Inteligência Artificial
          <br />
          <span className="bg-gradient-to-r from-yellow-300 to-orange-400 bg-clip-text text-transparent">
            Mesmo Sem Saber Programar
          </span>
        </h1>

        {/* Subtitle */}
        <p className="text-xl sm:text-2xl text-white/90 mb-12 max-w-3xl mx-auto leading-relaxed">
          Aprenda a transformar ideias em aplicativos reais usando a Lasy AI. 
          Do zero à renda, de forma prática e profissional.
        </p>

        {/* CTA Buttons */}
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-12">
          <Link 
            href="#preco" 
            className="group bg-gradient-to-r from-yellow-400 to-orange-500 text-gray-900 px-10 py-5 rounded-xl font-bold text-lg hover:shadow-2xl hover:scale-105 transition-all duration-300 flex items-center space-x-2 w-full sm:w-auto justify-center"
          >
            <span>Garantir Minha Vaga — R$49,90</span>
            <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
          </Link>
          
          <Link 
            href="#curso" 
            className="bg-white/10 backdrop-blur-sm text-white px-10 py-5 rounded-xl font-bold text-lg hover:bg-white/20 transition-all duration-300 border-2 border-white/30 w-full sm:w-auto"
          >
            Conhecer o Curso
          </Link>
        </div>

        {/* Social Proof */}
        <div className="flex flex-col sm:flex-row items-center justify-center gap-8 text-white">
          <div className="flex items-center space-x-2">
            <Zap className="w-6 h-6 text-yellow-300" />
            <span className="font-semibold">+1.000 alunos</span>
          </div>
          <div className="hidden sm:block w-1 h-6 bg-white/30"></div>
          <div className="flex items-center space-x-2">
            <Sparkles className="w-6 h-6 text-yellow-300" />
            <span className="font-semibold">Certificado incluso</span>
          </div>
          <div className="hidden sm:block w-1 h-6 bg-white/30"></div>
          <div className="flex items-center space-x-2">
            <span className="text-2xl">⭐</span>
            <span className="font-semibold">4.9/5 de avaliação</span>
          </div>
        </div>

        {/* Promo Badge */}
        <div className="mt-12 inline-block bg-red-500 text-white px-6 py-3 rounded-full font-bold animate-pulse">
          🔥 Promoção por tempo limitado - Apenas 1000 vagas!
        </div>
      </div>

      <style jsx>{`
        @keyframes blob {
          0%, 100% { transform: translate(0, 0) scale(1); }
          33% { transform: translate(30px, -50px) scale(1.1); }
          66% { transform: translate(-20px, 20px) scale(0.9); }
        }
        .animate-blob {
          animation: blob 7s infinite;
        }
        .animation-delay-2000 {
          animation-delay: 2s;
        }
        .animation-delay-4000 {
          animation-delay: 4s;
        }
      `}</style>
    </section>
  )
}
