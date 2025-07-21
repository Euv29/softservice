'use client';

import { useEffect } from 'react';
import Link from 'next/link';

export default function Error({
  error,
  reset,
}: {
  error: Error & { digest?: string }
  reset: () => void
}) {
  useEffect(() => {
    console.error(error)
  }, [error])

  return (
    <div className="flex items-center justify-center min-h-screen bg-white">
      <div className="text-center max-w-md mx-auto px-4">
        <h1 className="text-6xl font-bold text-blue-600 mb-4">Ops!</h1>
        <h2 className="text-2xl font-semibold text-gray-900 mb-4">
          Algo deu errado
        </h2>
        <p className="text-gray-600 mb-8">
          Ocorreu um erro inesperado. Nossa equipa técnica foi notificada e está a trabalhar para resolver o problema.
        </p>
        <div className="space-y-3">
          <button
            onClick={reset}
            className="w-full bg-blue-600 text-white px-6 py-3 rounded-lg hover:bg-blue-700 transition-colors font-medium"
          >
            Tentar novamente
          </button>
          <Link
            href="/"
            className="block w-full bg-gray-100 text-gray-900 px-6 py-3 rounded-lg hover:bg-gray-200 transition-colors font-medium"
          >
            Voltar ao início
          </Link>
        </div>
      </div>
    </div>
  )
}
