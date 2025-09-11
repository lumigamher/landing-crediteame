"use client"

import type React from "react"

import { Card, CardContent } from "@/components/ui/card"
import { Star } from "lucide-react"
import { useState, useRef } from "react"

const testimonials = [
  {
    name: "María González",
    role: "Emprendedora",
    content:
      "Creditea me ayudó a expandir mi negocio cuando más lo necesitaba. El proceso fue súper rápido y sin complicaciones.",
    rating: 5,
    avatar: "/happy-customer-profile.jpg",
  },
  {
    name: "Carlos Rodríguez",
    role: "Comerciante",
    content:
      "Excelente servicio. Pude obtener mi préstamo en menos de 24 horas y las cuotas se ajustan perfectamente a mi presupuesto.",
    rating: 5,
    avatar: "/satisfied-business-owner.jpg",
  },
  {
    name: "Ana Martínez",
    role: "Profesional Independiente",
    content:
      "La mejor decisión que tomé. Creditea me dio la confianza y el respaldo financiero que necesitaba para crecer.",
    rating: 5,
    avatar: "/happy-woman-customer.png",
  },
]

function TestimonialCard({ testimonial, index }: { testimonial: (typeof testimonials)[0]; index: number }) {
  const [isHovered, setIsHovered] = useState(false)
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 })
  const cardRef = useRef<HTMLDivElement>(null)

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (!cardRef.current) return

    const rect = cardRef.current.getBoundingClientRect()
    const x = e.clientX - rect.left
    const y = e.clientY - rect.top

    const centerX = rect.width / 2
    const centerY = rect.height / 2

    const rotateX = (y - centerY) / 10
    const rotateY = (centerX - x) / 10

    setMousePosition({ x: rotateY, y: rotateX })
  }

  const handleMouseEnter = () => {
    setIsHovered(true)
  }

  const handleMouseLeave = () => {
    setIsHovered(false)
    setMousePosition({ x: 0, y: 0 })
  }

  return (
    <div
      ref={cardRef}
      className="perspective-1000"
      onMouseMove={handleMouseMove}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
      style={{
        transform: isHovered
          ? `rotateX(${mousePosition.y}deg) rotateY(${mousePosition.x}deg) translateZ(20px)`
          : "rotateX(0deg) rotateY(0deg) translateZ(0px)",
        transition: isHovered ? "none" : "transform 0.3s ease-out",
        transformStyle: "preserve-3d",
      }}
    >
      <Card className="bg-card border-border shadow-lg hover:shadow-2xl transition-shadow duration-300">
        <CardContent className="p-6">
          <div className="flex items-center mb-4">
            {[...Array(testimonial.rating)].map((_, i) => (
              <Star key={i} className="h-5 w-5 text-yellow-400 fill-current" />
            ))}
          </div>
          <blockquote className="text-card-foreground mb-6">"{testimonial.content}"</blockquote>
          <div className="flex items-center">
            <img
              src={testimonial.avatar || "/placeholder.svg"}
              alt={testimonial.name}
              className="w-12 h-12 rounded-full mr-4 object-cover"
            />
            <div>
              <div className="font-semibold text-card-foreground">{testimonial.name}</div>
              <div className="text-sm text-muted-foreground">{testimonial.role}</div>
            </div>
          </div>
        </CardContent>
      </Card>
    </div>
  )
}

export function TestimonialsSection() {
  return (
    <section id="testimonials" className="py-20 sm:py-32 relative overflow-hidden">
      <div className="absolute inset-0 pointer-events-none">
        {/* Decorative circles */}
        <div className="absolute top-10 left-10 w-32 h-32 bg-blue-500/10 rounded-full blur-xl"></div>
        <div className="absolute top-40 right-20 w-24 h-24 bg-purple-500/8 rounded-full blur-lg"></div>
        <div className="absolute bottom-20 left-1/4 w-40 h-40 bg-green-500/6 rounded-full blur-2xl"></div>
        <div className="absolute bottom-40 right-10 w-28 h-28 bg-orange-500/12 rounded-full blur-xl"></div>
        <div className="absolute top-1/2 left-1/2 w-36 h-36 bg-pink-500/8 rounded-full blur-2xl transform -translate-x-1/2 -translate-y-1/2"></div>

        {/* Decorative stars */}
        <div className="absolute top-20 right-1/3 w-3 h-3 bg-yellow-400/20 rounded-full blur-sm"></div>
        <div className="absolute top-60 left-1/3 w-2 h-2 bg-blue-400/25 rounded-full blur-sm"></div>
        <div className="absolute bottom-32 right-1/4 w-4 h-4 bg-purple-400/15 rounded-full blur-sm"></div>
        <div className="absolute bottom-60 left-20 w-2 h-2 bg-green-400/20 rounded-full blur-sm"></div>
        <div className="absolute top-32 left-2/3 w-3 h-3 bg-pink-400/18 rounded-full blur-sm"></div>
      </div>

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center">
          <h2 className="text-3xl font-bold tracking-tight text-foreground sm:text-4xl text-balance">
            Más de 1,200 clientes confían en nosotros
          </h2>
          <p className="mt-4 text-lg text-muted-foreground max-w-2xl mx-auto text-pretty">
            Conoce las experiencias de nuestros clientes satisfechos
          </p>
        </div>
        <div className="mt-16 grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-3">
          {testimonials.map((testimonial, index) => (
            <TestimonialCard key={index} testimonial={testimonial} index={index} />
          ))}
        </div>
      </div>
    </section>
  )
}
