import CaptureForm from '@/components/CaptureForm'

export default function Captura() {
  return (
    <main className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-100 flex items-center justify-center p-4">
      <div className="max-w-md w-full bg-white rounded-lg shadow-lg p-8">
        <h1 className="text-3xl font-bold text-center mb-2 text-gray-800">
          Descubra como criar e vender apps com IA usando a Lasy AI!
        </h1>
        <p className="text-center text-gray-600 mb-8">
          Baixe o e-book gratuito "Comece com a Lasy AI".
        </p>
        <CaptureForm />
      </div>
    </main>
  )
}