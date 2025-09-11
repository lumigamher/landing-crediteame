"use client"

import { useEffect, useState } from "react"

export function StatsSection() {
  const [counts, setCounts] = useState({
    years: 0,
    amount: 0,
    clients: 0,
    digital: 0,
  })

  const [isVisible, setIsVisible] = useState(false)

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        if (entries[0].isIntersecting && !isVisible) {
          setIsVisible(true)
          startAnimation()
        }
      },
      { threshold: 0.5 },
    )

    const section = document.getElementById("stats-section")
    if (section) {
      observer.observe(section)
    }

    return () => observer.disconnect()
  }, [isVisible])

  const startAnimation = () => {
    const targets = {
      years: 13,
      amount: 1.7,
      clients: 1200,
      digital: 100,
    }

    const duration = 2500 // 2.5 seconds
    const steps = 100
    const stepDuration = duration / steps

    let currentStep = 0

    const timer = setInterval(() => {
      currentStep++
      const progress = Math.min(currentStep / steps, 1)

      const easeOutQuart = 1 - Math.pow(1 - progress, 4)

      setCounts({
        years: Math.floor(targets.years * easeOutQuart),
        amount: Number((targets.amount * easeOutQuart).toFixed(1)),
        clients: Math.floor(targets.clients * easeOutQuart),
        digital: Math.floor(targets.digital * easeOutQuart),
      })

      if (currentStep >= steps) {
        clearInterval(timer)
        setCounts(targets)
      }
    }, stepDuration)

    return () => clearInterval(timer)
  }

  const formatClients = (count: number) => {
    if (count >= 1000) {
      return `${(count / 1000).toFixed(1)}k`
    }
    return count.toString()
  }

  return (
    <section id="stats-section" className="bg-secondary/30 py-16">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-8 text-center">
          <div className="space-y-2 animate-fade-in transform transition-all duration-500">
            <div className="text-4xl font-bold text-primary">+{counts.years}</div>
            <div className="text-sm text-muted-foreground font-medium">Años de experiencia</div>
          </div>
          <div
            className="space-y-2 animate-fade-in transform transition-all duration-500"
            style={{ animationDelay: "0.2s" }}
          >
            <div className="text-4xl font-bold text-primary">+{counts.amount}B</div>
            <div className="text-sm text-muted-foreground font-medium">COP Prestados</div>
          </div>
          <div
            className="space-y-2 animate-fade-in transform transition-all duration-500"
            style={{ animationDelay: "0.4s" }}
          >
            <div className="text-4xl font-bold text-primary">+{formatClients(counts.clients)}</div>
            <div className="text-sm text-muted-foreground font-medium">Clientes satisfechos</div>
          </div>
          <div
            className="space-y-2 animate-fade-in transform transition-all duration-500"
            style={{ animationDelay: "0.6s" }}
          >
            <div className="text-4xl font-bold text-primary">{counts.digital}%</div>
            <div className="text-sm text-muted-foreground font-medium">Digital y seguro</div>
          </div>
        </div>
      </div>
    </section>
  )
}
