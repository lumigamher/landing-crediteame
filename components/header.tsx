"use client"

import { Button } from "@/components/ui/button"
import { Menu, X } from "lucide-react"
import { useState } from "react"
import Image from "next/image"

export function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  return (
    <header className="sticky top-0 z-50 bg-white/95 backdrop-blur supports-[backdrop-filter]:bg-white/90 border-b border-gray-200">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <div className="flex items-center">
            <div className="flex-shrink-0">
              <Image
                src="/creditea-complete-logo.png"
                alt="Creditea.me"
                width={140}
                height={32}
                className="h-8 w-auto"
              />
            </div>
          </div>

          <div className="hidden md:flex items-center space-x-3">
            <Button variant="ghost" className="text-gray-700 hover:text-white">
              Iniciar Sesión
            </Button>
            <Button className="bg-blue-600 text-white hover:bg-blue-700">Solicitar Préstamo</Button>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden">
            <Button variant="ghost" size="sm" onClick={() => setIsMenuOpen(!isMenuOpen)} className="text-gray-700">
              {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </Button>
          </div>
        </div>

        {isMenuOpen && (
          <div className="md:hidden">
            <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3 border-t border-gray-200 bg-white">
              <div className="px-3 py-2 space-y-2">
                <Button variant="ghost" className="w-full justify-start text-gray-700 hover:text-blue-600">
                  Iniciar Sesión
                </Button>
                <Button className="w-full bg-blue-600 text-white hover:bg-blue-700">Solicitar Préstamo</Button>
              </div>
            </div>
          </div>
        )}
      </div>
    </header>
  )
}
