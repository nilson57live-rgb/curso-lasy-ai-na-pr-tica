'use client'

import { useState } from 'react'
import Link from 'next/link'
import { Menu, X, Sparkles } from 'lucide-react'

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false)

  return (
    <nav className="bg-white shadow-lg fixed w-full top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-20">
          {/* Logo */}
          <Link href="/" className="flex items-center space-x-2">
            <div className="bg-gradient-to-r from-purple-600 to-indigo-600 p-2 rounded-lg">
              <Sparkles className="w-6 h-6 text-white" />
            </div>
            <span className="text-2xl font-bold bg-gradient-to-r from-purple-600 to-indigo-600 bg-clip-text text-transparent">
              LASY AI
            </span>
          </Link>

          {/* Desktop Menu */}
          <div className="hidden md:flex items-center space-x-8">
            <Link href="/#curso" className="text-gray-700 hover:text-purple-600 font-medium transition-colors">
              O Curso
            </Link>
            <Link href="/#modulos" className="text-gray-700 hover:text-purple-600 font-medium transition-colors">
              Módulos
            </Link>
            <Link href="/#depoimentos" className="text-gray-700 hover:text-purple-600 font-medium transition-colors">
              Depoimentos
            </Link>
            <Link href="/captura" className="text-gray-700 hover:text-purple-600 font-medium transition-colors">
              E-book Grátis
            </Link>
            <Link href="/dashboard" className="bg-gradient-to-r from-purple-600 to-indigo-600 text-white px-6 py-2 rounded-lg font-semibold hover:shadow-lg transition-all">
              Área do Aluno
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="md:hidden p-2 rounded-lg hover:bg-gray-100"
          >
            {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>

        {/* Mobile Menu */}
        {isOpen && (
          <div className="md:hidden py-4 space-y-4">
            <Link href="/#curso" className="block text-gray-700 hover:text-purple-600 font-medium py-2">
              O Curso
            </Link>
            <Link href="/#modulos" className="block text-gray-700 hover:text-purple-600 font-medium py-2">
              Módulos
            </Link>
            <Link href="/#depoimentos" className="block text-gray-700 hover:text-purple-600 font-medium py-2">
              Depoimentos
            </Link>
            <Link href="/captura" className="block text-gray-700 hover:text-purple-600 font-medium py-2">
              E-book Grátis
            </Link>
            <Link href="/dashboard" className="block bg-gradient-to-r from-purple-600 to-indigo-600 text-white px-6 py-3 rounded-lg font-semibold text-center">
              Área do Aluno
            </Link>
          </div>
        )}
      </div>
    </nav>
  )
}
