export function Footer() {
  return (
    <footer id="contact" className="bg-gray-800 text-white">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Company Info */}
          <div>
            <div className="flex items-center mb-4">
              <img src="/creditea-white-logo.png" alt="Creditea.me" className="h-8 w-auto" />
            </div>
            <p className="text-gray-300 text-sm">Tu crédito fácil, rápido y a la medida.</p>
          </div>

          {/* Pages */}
          <div>
            <h3 className="font-semibold text-white mb-4">Páginas</h3>
            <ul className="space-y-2">
              <li>
                <a href="#" className="text-gray-300 hover:text-white transition-colors text-sm">
                  Cómo funciona
                </a>
              </li>
              <li>
                <a href="#" className="text-gray-300 hover:text-white transition-colors text-sm">
                  Calculadora
                </a>
              </li>
              <li>
                <a href="#" className="text-gray-300 hover:text-white transition-colors text-sm">
                  FAQs
                </a>
              </li>
              <li>
                <a href="#" className="text-gray-300 hover:text-white transition-colors text-sm">
                  Inversores
                </a>
              </li>
              <li>
                <a href="#" className="text-gray-300 hover:text-white transition-colors text-sm">
                  Contacto
                </a>
              </li>
            </ul>
          </div>

          {/* Legal */}
          <div>
            <h3 className="font-semibold text-white mb-4">Legal</h3>
            <ul className="space-y-2">
              <li>
                <a href="#" className="text-gray-300 hover:text-white transition-colors text-sm">
                  Términos y condiciones
                </a>
              </li>
              <li>
                <a href="#" className="text-gray-300 hover:text-white transition-colors text-sm">
                  Política de privacidad
                </a>
              </li>
              <li>
                <a href="#" className="text-gray-300 hover:text-white transition-colors text-sm">
                  Política de cookies
                </a>
              </li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3 className="font-semibold text-white mb-4">Contacto</h3>
            <div className="space-y-2 text-sm">
              <div>
                <a href="mailto:contacto@creditea.me" className="text-gray-300 hover:text-white transition-colors">
                  contacto@creditea.me
                </a>
              </div>
              <div>
                <a href="tel:+573245192378" className="text-gray-300 hover:text-white transition-colors">
                  +57 324 519 2378
                </a>
              </div>
              <div className="text-gray-300">NIT: 901.782.780-1</div>
            </div>
          </div>
        </div>

        <div className="mt-12 pt-8 border-t border-gray-700">
          <div className="mb-6">
            <p className="text-xs text-gray-400 leading-relaxed text-center max-w-4xl mx-auto">
              Invertir a través de Crediteame implica riesgos. No se garantiza la devolución del capital ni
              rentabilidades fijas. Crediteame S.A.S. no es una entidad vigilada por la Superintendencia Financiera de
              Colombia. Todas las operaciones ofrecidas a través de esta plataforma se realizan bajo esquemas de
              financiación privada conforme a la legislación colombiana.
            </p>
          </div>

          <div className="text-center">
            <p className="text-gray-400 text-sm">Copyright 2025 Creditea.me SAS All Rights Reserved</p>
          </div>
        </div>
      </div>
    </footer>
  )
}
