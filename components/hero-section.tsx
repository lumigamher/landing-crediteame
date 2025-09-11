import { Button } from "@/components/ui/button"
import { ArrowRight } from "lucide-react"

export function HeroSection() {
  return (
    <section className="relative overflow-hidden bg-background py-16 sm:py-24">
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-20 left-10 w-40 h-40 bg-blue-500/8 rounded-full blur-2xl"></div>
        <div className="absolute top-40 right-20 w-32 h-32 bg-purple-500/6 rounded-full blur-xl"></div>
        <div className="absolute bottom-20 left-1/3 w-48 h-48 bg-green-500/5 rounded-full blur-3xl"></div>
        <div className="absolute bottom-40 right-10 w-36 h-36 bg-orange-500/10 rounded-full blur-2xl"></div>

        {/* Decorative stars */}
        <div className="absolute top-32 right-1/4 w-3 h-3 bg-yellow-400/25 rounded-full blur-sm"></div>
        <div className="absolute top-60 left-1/4 w-2 h-2 bg-blue-400/30 rounded-full blur-sm"></div>
        <div className="absolute bottom-32 right-1/3 w-4 h-4 bg-purple-400/20 rounded-full blur-sm"></div>
        <div className="absolute bottom-60 left-16 w-2 h-2 bg-green-400/25 rounded-full blur-sm"></div>
      </div>

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div className="space-y-8">
            <h1 className="text-4xl font-bold tracking-tight text-foreground sm:text-5xl lg:text-6xl text-balance">
              Tu <span className="text-primary">préstamo</span> rápido, fácil y 100% en línea.
            </h1>
            <p className="text-lg leading-relaxed text-muted-foreground text-pretty">
              Préstamos rápidos <span className="font-semibold">desde 200 mil hasta 8 millones COP</span>, ajustados a
              tu perfil, ya seas particular o empresa. Sin trámites eternos, todo 100% online y en minutos.
            </p>

            <div className="flex items-center space-x-4">
              <div className="flex -space-x-2">
                <img
                  src="/happy-customer-profile.jpg"
                  alt="Cliente satisfecho"
                  className="w-10 h-10 rounded-full border-2 border-background"
                />
                <img
                  src="/satisfied-business-owner.jpg"
                  alt="Cliente satisfecho"
                  className="w-10 h-10 rounded-full border-2 border-background"
                />
                <img
                  src="/happy-woman-customer.png"
                  alt="Cliente satisfecho"
                  className="w-10 h-10 rounded-full border-2 border-background"
                />
              </div>
              <div className="text-sm text-muted-foreground">
                <span className="font-semibold text-foreground">+1.2k</span> Clientes satisfechos
              </div>
            </div>

            <div>
              <Button size="lg" className="bg-primary text-primary-foreground hover:bg-primary/90 text-lg px-8 py-6">
                Solicita tu préstamo ahora
                <ArrowRight className="ml-2 h-5 w-5" />
              </Button>
            </div>
          </div>

          <div className="relative">
            <div className="relative">
              {/* Decorative elements */}
              <div className="absolute -top-4 -left-4 w-8 h-8 text-yellow-400">
                <svg viewBox="0 0 24 24" fill="currentColor">
                  <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z" />
                </svg>
              </div>
              <div className="absolute top-8 -right-8 w-16 h-16 rounded-full bg-blue-100 opacity-60"></div>
              <div className="absolute -bottom-8 left-8 w-6 h-6 bg-green-200 rounded-sm rotate-45"></div>

              <img
                src="/happy-couple-celebrating-financial-success--man-an.jpg"
                alt="Pareja feliz celebrando"
                className="w-full h-auto rounded-2xl"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
