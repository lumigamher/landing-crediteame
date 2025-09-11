import { Shield, Clock, CheckCircle } from "lucide-react"

export function WhyChooseUsSection() {
  return (
    <section className="py-20 bg-gray-50 relative overflow-hidden">
      <div className="absolute inset-0 pointer-events-none">
        {/* Decorative circles */}
        <div className="absolute top-12 left-12 w-32 h-32 bg-blue-500/8 rounded-full blur-2xl"></div>
        <div className="absolute top-24 right-16 w-28 h-28 bg-purple-500/6 rounded-full blur-xl"></div>
        <div className="absolute bottom-16 left-1/4 w-40 h-40 bg-green-500/5 rounded-full blur-3xl"></div>
        <div className="absolute bottom-20 right-12 w-36 h-36 bg-orange-500/7 rounded-full blur-2xl"></div>
        <div className="absolute top-1/2 left-1/2 w-44 h-44 bg-pink-500/6 rounded-full blur-3xl transform -translate-x-1/2 -translate-y-1/2"></div>

        {/* Decorative stars */}
        <div className="absolute top-20 right-1/3 w-3 h-3 bg-yellow-400/22 rounded-full blur-sm"></div>
        <div className="absolute top-40 left-1/3 w-2 h-2 bg-blue-400/28 rounded-full blur-sm"></div>
        <div className="absolute bottom-28 right-1/4 w-4 h-4 bg-purple-400/18 rounded-full blur-sm"></div>
        <div className="absolute bottom-40 left-16 w-2 h-2 bg-green-400/24 rounded-full blur-sm"></div>
        <div className="absolute top-32 left-2/3 w-3 h-3 bg-pink-400/20 rounded-full blur-sm"></div>
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">¿Por qué elegirnos?</h2>
        </div>

        <div className="grid md:grid-cols-3 gap-8 max-w-7xl mx-auto">
          <div className="bg-white rounded-3xl p-10 text-center shadow-lg hover:shadow-xl transition-shadow duration-300">
            <div className="w-20 h-20 bg-blue-300 rounded-full flex items-center justify-center mx-auto mb-8">
              <Shield className="w-10 h-10 text-white" />
            </div>
            <h3 className="text-2xl font-bold text-gray-900 mb-6">Aprobación rápida</h3>
            <p className="text-gray-600 text-lg leading-relaxed">
              Resolvemos tu solicitud en menos de 24h, sin trámites interminables.
            </p>
          </div>

          <div className="bg-white rounded-3xl p-10 text-center shadow-lg hover:shadow-xl transition-shadow duration-300">
            <div className="w-20 h-20 bg-blue-300 rounded-full flex items-center justify-center mx-auto mb-8">
              <Clock className="w-10 h-10 text-white" />
            </div>
            <h3 className="text-2xl font-bold text-gray-900 mb-6">Flexibilidad</h3>
            <p className="text-gray-600 text-lg leading-relaxed">
              Préstamos personalizados para particulares y pequeñas empresas.
            </p>
          </div>

          <div className="bg-white rounded-3xl p-10 text-center shadow-lg hover:shadow-xl transition-shadow duration-300">
            <div className="w-20 h-20 bg-blue-300 rounded-full flex items-center justify-center mx-auto mb-8">
              <CheckCircle className="w-10 h-10 text-white" />
            </div>
            <h3 className="text-2xl font-bold text-gray-900 mb-6">100% online y seguro</h3>
            <p className="text-gray-600 text-lg leading-relaxed">
              Tu información está protegida con la mejor tecnología.
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}
