export default function HomePage() {
  return (
    <main className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-100">
      <div className="container mx-auto px-4 py-16">
        <div className="max-w-4xl mx-auto text-center">
          <h1 className="text-5xl font-bold text-gray-900 mb-6">
            Bem-vindo ao Together
          </h1>
          <p className="text-xl text-gray-700 mb-8">
            Conecte-se com pessoas que compartilham seus interesses e atividades
          </p>
          <div className="bg-white rounded-lg shadow-xl p-8">
            <h2 className="text-2xl font-semibold text-gray-800 mb-4">
              🚀 Projeto Iniciado com Sucesso!
            </h2>
            <p className="text-gray-600 mb-6">
              Sua plataforma de rede social está pronta para ser desenvolvida.
            </p>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-8">
              <div className="p-6 bg-blue-50 rounded-lg">
                <div className="text-3xl mb-3">🤝</div>
                <h3 className="font-semibold text-gray-800 mb-2">Conexões</h3>
                <p className="text-sm text-gray-600">
                  Encontre pessoas com interesses similares
                </p>
              </div>
              <div className="p-6 bg-green-50 rounded-lg">
                <div className="text-3xl mb-3">🎯</div>
                <h3 className="font-semibold text-gray-800 mb-2">Atividades</h3>
                <p className="text-sm text-gray-600">
                  Organize e participe de eventos
                </p>
              </div>
              <div className="p-6 bg-purple-50 rounded-lg">
                <div className="text-3xl mb-3">💬</div>
                <h3 className="font-semibold text-gray-800 mb-2">Comunidade</h3>
                <p className="text-sm text-gray-600">
                  Compartilhe experiências autênticas
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </main>
  )
}
