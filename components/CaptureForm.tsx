'use client'

import { useState } from 'react'
import { supabase } from '@/lib/supabase'
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { Label } from '@/components/ui/label'
import { CheckCircle2, Loader2 } from 'lucide-react'

export default function CaptureForm() {
  const [name, setName] = useState('')
  const [email, setEmail] = useState('')
  const [loading, setLoading] = useState(false)
  const [success, setSuccess] = useState(false)
  const [error, setError] = useState('')

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setLoading(true)
    setError('')

    try {
      const { error: dbError } = await supabase
        .from('leads')
        .insert([
          { name, email, ebook_sent: false }
        ])

      if (dbError) throw dbError

      setSuccess(true)
      setName('')
      setEmail('')
      
      // Simular envio de e-book
      setTimeout(() => {
        window.location.href = '/ebook.pdf'
      }, 2000)
    } catch (err: any) {
      setError(err.message || 'Erro ao cadastrar. Tente novamente.')
    } finally {
      setLoading(false)
    }
  }

  if (success) {
    return (
      <div className="text-center py-8">
        <CheckCircle2 className="w-16 h-16 text-green-500 mx-auto mb-4" />
        <h3 className="text-2xl font-bold text-gray-800 mb-2">
          Cadastro realizado com sucesso!
        </h3>
        <p className="text-gray-600">
          Verifique seu e-mail para acessar o e-book gratuito.
        </p>
      </div>
    )
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-4">
      <div>
        <Label htmlFor="name" className="text-gray-700">Nome completo</Label>
        <Input
          id="name"
          type="text"
          value={name}
          onChange={(e) => setName(e.target.value)}
          placeholder="Seu nome"
          required
          className="mt-1"
        />
      </div>

      <div>
        <Label htmlFor="email" className="text-gray-700">E-mail</Label>
        <Input
          id="email"
          type="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          placeholder="seu@email.com"
          required
          className="mt-1"
        />
      </div>

      {error && (
        <div className="bg-red-50 border border-red-200 text-red-700 px-4 py-3 rounded">
          {error}
        </div>
      )}

      <Button
        type="submit"
        disabled={loading}
        className="w-full bg-gradient-to-r from-blue-600 to-indigo-600 hover:from-blue-700 hover:to-indigo-700"
      >
        {loading ? (
          <>
            <Loader2 className="w-4 h-4 mr-2 animate-spin" />
            Cadastrando...
          </>
        ) : (
          'Baixar E-book Gratuito'
        )}
      </Button>

      <p className="text-xs text-center text-gray-500 mt-4">
        Ao cadastrar, você concorda em receber e-mails com conteúdos exclusivos.
      </p>
    </form>
  )
}
