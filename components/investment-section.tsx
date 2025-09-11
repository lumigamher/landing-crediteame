export function InvestmentSection() {
  return (
    <section className="py-16 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="flex flex-col lg:flex-row items-center gap-12">
          {/* Left content */}
          <div className="flex-1 lg:pr-8">
            <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-6">
              Invierte en Creditea.me y haz <span className="text-blue-600">crecer</span> tu dinero
            </h2>
            <p className="text-lg text-gray-600 mb-8 leading-relaxed">
              Forma parte de nuestra plataforma y accede a una oportunidad de inversión segura y rentable. Ayuda a
              financiar micropréstamos que impulsan a personas y pequeñas empresas, mientras generas ingresos pasivos
              con atractivas tasas de retorno.
            </p>
            <button className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-4 rounded-lg font-semibold text-lg transition-colors">
              Quiero saber más
            </button>
          </div>

          {/* Right image */}
          <div className="flex-1 lg:pl-8">
            <div className="relative">
              <img
                src="/businessman-hands-phone.png"
                alt="Manos profesionales usando smartphone para inversiones"
                className="w-full h-auto max-w-md mx-auto"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
