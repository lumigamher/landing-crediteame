export function HowItWorksSection() {
  return (
    <section className="py-16 bg-white">
      <div className="container mx-auto px-4">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div>
            <div className="mb-8">
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">Así de fácil es obtener tu préstamo</h2>
            </div>

            <div className="space-y-8">
              <div className="flex gap-4">
                <div className="flex-shrink-0">
                  <div className="w-8 h-8 bg-primary text-primary-foreground rounded-full flex items-center justify-center font-semibold shadow-sm">
                    1
                  </div>
                </div>
                <div>
                  <h3 className="text-lg font-semibold text-gray-900 mb-2">Regístrate en minutos</h3>
                  <p className="text-gray-600">Accede a nuestra plataforma y crea tu cuenta con tus datos básicos.</p>
                </div>
              </div>

              <div className="flex gap-4">
                <div className="flex-shrink-0">
                  <div className="w-8 h-8 bg-primary text-primary-foreground rounded-full flex items-center justify-center font-semibold shadow-sm">
                    2
                  </div>
                </div>
                <div>
                  <h3 className="text-lg font-semibold text-gray-900 mb-2">Sube tu documentación</h3>
                  <p className="text-gray-600">
                    Adjunta los documentos solicitados de forma segura y sin complicaciones.
                  </p>
                </div>
              </div>

              <div className="flex gap-4">
                <div className="flex-shrink-0">
                  <div className="w-8 h-8 bg-primary text-primary-foreground rounded-full flex items-center justify-center font-semibold shadow-sm">
                    3
                  </div>
                </div>
                <div>
                  <h3 className="text-lg font-semibold text-gray-900 mb-2">Solicita tu préstamo</h3>
                  <p className="text-gray-600">
                    Solicita el monto, plazo y condiciones que más se ajusten a tus necesidades.
                  </p>
                </div>
              </div>

              <div className="flex gap-4">
                <div className="flex-shrink-0">
                  <div className="w-8 h-8 bg-primary text-primary-foreground rounded-full flex items-center justify-center font-semibold shadow-sm">
                    4
                  </div>
                </div>
                <div>
                  <h3 className="text-lg font-semibold text-gray-900 mb-2">Recibe tu dinero rápidamente</h3>
                  <p className="text-gray-600">
                    Tras una revisión ágil de tu solicitud, aprobamos tu préstamo y el dinero llega a tu cuenta.
                  </p>
                </div>
              </div>
            </div>
          </div>

          <div className="lg:text-center">
            <div className="relative">
              <img
                src="/happy-woman-using-smartphone-for-loan-application-.jpg"
                alt="Mujer feliz usando smartphone para solicitar préstamo"
                className="w-full max-w-md mx-auto rounded-lg"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
