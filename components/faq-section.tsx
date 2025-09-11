"use client"

import { useState } from "react"
import { ChevronDown, ChevronUp } from "lucide-react"

const faqs = [
  {
    question: "¿Qué requisitos necesito para solicitar un préstamo?",
    answer:
      "Para solicitar un préstamo con nosotros, solo necesitas: • Ser mayor de 18 años y residir en Colombia. • Tener cédula de ciudadanía o extranjería. • Demostrar ingresos o capacidad de pago. • Completar el formulario y enviar la documentación solicitada.",
  },
  {
    question: "¿Cuánto dinero puedo solicitar?",
    answer:
      "Puedes solicitar desde $200,000 COP hasta: • $2,000,000 COP si eres persona natural. • $8,000,000 COP si eres una empresa o persona jurídica. El monto aprobado dependerá de tu perfil financiero y tu historial de pagos.",
  },
  {
    question: "¿En cuánto tiempo recibiré el dinero si mi préstamo es aprobado?",
    answer:
      "El dinero será transferido a tu cuenta bancaria en un plazo de 24 horas hábiles después de aprobarse tu préstamo y firmar los documentos.",
  },
  {
    question: "¿Cuáles son las tasas de interés y los plazos de pago?",
    answer:
      "Nuestras tasas de interés y plazos varían según tu perfil financiero: • Tasas de interés: Se informan antes de firmar el contrato y cumplen con la normativa legal vigente en Colombia. • Plazos de pago: Desde 3 hasta 12 meses con cuotas mensuales fijas. Antes de confirmar tu préstamo, te mostraremos todos los detalles claramente.",
  },
  {
    question: "¿El proceso es completamente en línea?",
    answer:
      "Sí, todo el proceso es 100% digital: • Regístrate en nuestra plataforma. • Completa el formulario y sube tus documentos. • Si tu préstamo es aprobado, firma el contrato digitalmente. • Recibe el dinero en tu cuenta bancaria. Sin filas ni trámites presenciales.",
  },
  {
    question: "¿Puedo hacer pagos anticipados sin penalización?",
    answer:
      "Sí, puedes realizar pagos anticipados, incluyendo el pago de cuotas futuras, sin penalización ni cargos adicionales. Sin embargo, el pago anticipado no modificará la estructura del préstamo, es decir, las cuotas, plazos e intereses establecidos al inicio del contrato se mantendrán sin alteraciones.",
  },
  {
    question: "¿Qué sucede si me retraso con el pago de mi cuota?",
    answer:
      "Si te atrasas en tu pago: • Se aplicarán intereses de mora según tu contrato. • Te enviaremos recordatorios para ayudarte a regularizar tu deuda. • Un retraso prolongado podría afectar tu historial crediticio y generar acciones de cobro. Para evitar estos inconvenientes, te recomendamos siempre pagar a tiempo.",
  },
]

function FAQItem({ faq, isOpen, onToggle }: { faq: (typeof faqs)[0]; isOpen: boolean; onToggle: () => void }) {
  return (
    <div className="border border-gray-200 rounded-lg overflow-hidden">
      <button
        className="w-full px-6 py-4 text-left bg-white hover:bg-gray-50 transition-colors duration-200 flex items-center justify-between"
        onClick={onToggle}
      >
        <span className="font-medium text-gray-900 pr-4">{faq.question}</span>
        {isOpen ? (
          <ChevronUp className="h-5 w-5 text-blue-600 flex-shrink-0" />
        ) : (
          <ChevronDown className="h-5 w-5 text-blue-600 flex-shrink-0" />
        )}
      </button>
      {isOpen && (
        <div className="px-6 py-4 bg-gray-50 border-t border-gray-200">
          <p className="text-gray-700 leading-relaxed whitespace-pre-line">{faq.answer}</p>
        </div>
      )}
    </div>
  )
}

export function FAQSection() {
  const [openItems, setOpenItems] = useState<number[]>([])

  const toggleItem = (index: number) => {
    setOpenItems((prev) => (prev.includes(index) ? prev.filter((i) => i !== index) : [...prev, index]))
  }

  return (
    <section className="py-16 bg-white">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-gray-900 mb-4">Preguntas Frecuentes</h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Encuentra respuestas a las preguntas más comunes sobre nuestros préstamos
          </p>
        </div>

        <div className="space-y-4">
          {faqs.map((faq, index) => (
            <FAQItem key={index} faq={faq} isOpen={openItems.includes(index)} onToggle={() => toggleItem(index)} />
          ))}
        </div>
      </div>
    </section>
  )
}
