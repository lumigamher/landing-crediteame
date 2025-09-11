"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Card, CardContent } from "@/components/ui/card"
import { Loader2 } from "lucide-react"

const LOAN_CONFIG = {
  // Interest rates by loan purpose (annual percentage)
  interestRates: {
    personal: 0.24, // 24% annual
    business: 0.18, // 18% annual
    education: 0.15, // 15% annual
    medical: 0.2, // 20% annual
    home: 0.12, // 12% annual
  },
  // Processing fee percentage
  processingFee: 0.03, // 3% of loan amount
  // Insurance percentage
  insurance: 0.02, // 2% of loan amount
  // Minimum and maximum loan amounts
  minAmount: 200000,
  maxAmount: 5000000,
  // Available terms in months
  availableTerms: [3, 6, 12, 18, 24, 36, 48],
}

export function LoanSimulatorSection() {
  const [amount, setAmount] = useState("")
  const [purpose, setPurpose] = useState("")
  const [term, setTerm] = useState("")
  const [salary, setSalary] = useState("")
  const [isCalculating, setIsCalculating] = useState(false)
  const [results, setResults] = useState<any>(null)

  const calculateLoan = async () => {
    if (!amount || !purpose || !term || !salary) {
      alert("Por favor completa todos los campos")
      return
    }

    const loanAmount = Number.parseFloat(amount)
    const monthlySalary = Number.parseFloat(salary)
    const termMonths = Number.parseInt(term)

    // Validation
    if (loanAmount < LOAN_CONFIG.minAmount || loanAmount > LOAN_CONFIG.maxAmount) {
      alert(
        `El monto debe estar entre $${LOAN_CONFIG.minAmount.toLocaleString()} y $${LOAN_CONFIG.maxAmount.toLocaleString()}`,
      )
      return
    }

    if (loanAmount > monthlySalary * 10) {
      alert("El monto solicitado excede 10 veces tu salario mensual")
      return
    }

    setIsCalculating(true)

    // Simulate API call delay
    await new Promise((resolve) => setTimeout(resolve, 2000))

    const annualRate = LOAN_CONFIG.interestRates[purpose as keyof typeof LOAN_CONFIG.interestRates]
    const monthlyRate = annualRate / 12

    // Calculate monthly payment using amortization formula
    const monthlyPayment =
      (loanAmount * (monthlyRate * Math.pow(1 + monthlyRate, termMonths))) / (Math.pow(1 + monthlyRate, termMonths) - 1)

    const totalPayment = monthlyPayment * termMonths
    const totalInterest = totalPayment - loanAmount
    const processingFee = loanAmount * LOAN_CONFIG.processingFee
    const insurance = loanAmount * LOAN_CONFIG.insurance
    const totalCost = totalPayment + processingFee + insurance

    // Calculate debt-to-income ratio
    const debtToIncomeRatio = (monthlyPayment / monthlySalary) * 100

    setResults({
      loanAmount,
      monthlyPayment,
      totalPayment,
      totalInterest,
      processingFee,
      insurance,
      totalCost,
      termMonths,
      annualRate: annualRate * 100,
      debtToIncomeRatio,
      approved: debtToIncomeRatio <= 30, // Approve if debt-to-income is 30% or less
    })

    setIsCalculating(false)
  }

  const resetSimulation = () => {
    setResults(null)
    setAmount("")
    setPurpose("")
    setTerm("")
    setSalary("")
  }

  return (
    <section className="py-16 bg-gray-50 relative overflow-hidden">
      <div className="absolute inset-0 pointer-events-none">
        {/* Decorative circles */}
        <div className="absolute top-16 left-8 w-36 h-36 bg-blue-500/6 rounded-full blur-2xl"></div>
        <div className="absolute top-32 right-16 w-28 h-28 bg-purple-500/8 rounded-full blur-xl"></div>
        <div className="absolute bottom-24 left-1/4 w-44 h-44 bg-green-500/5 rounded-full blur-3xl"></div>
        <div className="absolute bottom-16 right-12 w-32 h-32 bg-orange-500/7 rounded-full blur-2xl"></div>
        <div className="absolute top-1/2 left-1/2 w-40 h-40 bg-pink-500/6 rounded-full blur-2xl transform -translate-x-1/2 -translate-y-1/2"></div>

        {/* Decorative stars */}
        <div className="absolute top-24 right-1/3 w-3 h-3 bg-yellow-400/20 rounded-full blur-sm"></div>
        <div className="absolute top-48 left-1/3 w-2 h-2 bg-blue-400/25 rounded-full blur-sm"></div>
        <div className="absolute bottom-40 right-1/4 w-4 h-4 bg-purple-400/15 rounded-full blur-sm"></div>
        <div className="absolute bottom-32 left-20 w-2 h-2 bg-green-400/20 rounded-full blur-sm"></div>
        <div className="absolute top-40 left-2/3 w-3 h-3 bg-pink-400/18 rounded-full blur-sm"></div>
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Form Section */}
          <div className="bg-white rounded-2xl shadow-lg p-8">
            <div className="space-y-6">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">¿Cuánto necesitas?</label>
                <div className="relative">
                  <span className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-500">$</span>
                  <Input
                    type="number"
                    placeholder="Ingresa el monto"
                    value={amount}
                    onChange={(e) => setAmount(e.target.value)}
                    className="pl-8"
                    disabled={isCalculating}
                  />
                </div>
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">Motivo del préstamo</label>
                <Select value={purpose} onValueChange={setPurpose} disabled={isCalculating}>
                  <SelectTrigger>
                    <SelectValue placeholder="Selecciona el motivo" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="personal">Personal</SelectItem>
                    <SelectItem value="business">Negocio</SelectItem>
                    <SelectItem value="education">Educación</SelectItem>
                    <SelectItem value="medical">Médico</SelectItem>
                    <SelectItem value="home">Hogar</SelectItem>
                  </SelectContent>
                </Select>
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">Número de cuotas</label>
                <Select value={term} onValueChange={setTerm} disabled={isCalculating}>
                  <SelectTrigger>
                    <SelectValue placeholder="Selecciona el plazo" />
                  </SelectTrigger>
                  <SelectContent>
                    {LOAN_CONFIG.availableTerms.map((months) => (
                      <SelectItem key={months} value={months.toString()}>
                        {months} meses
                      </SelectItem>
                    ))}
                  </SelectContent>
                </Select>
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">¿Cuál es tu salario?</label>
                <div className="relative">
                  <span className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-500">$</span>
                  <Input
                    type="number"
                    placeholder="Ingresa tu salario"
                    value={salary}
                    onChange={(e) => setSalary(e.target.value)}
                    className="pl-8"
                    disabled={isCalculating}
                  />
                </div>
              </div>

              <Button
                onClick={calculateLoan}
                className="w-full hover:bg-blue-700 text-white py-3 bg-primary"
                disabled={isCalculating}
              >
                {isCalculating ? (
                  <>
                    <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                    Calculando...
                  </>
                ) : (
                  "Calcular"
                )}
              </Button>
            </div>
          </div>

          {/* Content/Results Section */}
          <div className="space-y-6">
            {!results ? (
              <div>
                <h2 className="text-3xl font-bold text-gray-900 mb-4">Simula tu préstamo ideal</h2>
                <p className="text-gray-600 mb-6 leading-relaxed">
                  Calcula tu préstamo en segundos; ingresa el monto, plazo y tu salario para obtener una proyección
                  estimada de tus cuotas. Las condiciones finales serán ajustadas de acuerdo con tu perfil y situación
                  financiera específica.
                </p>
                <Button size="lg" className="bg-primary text-primary-foreground hover:bg-primary/90 px-8 py-3">
                  Solicita tu préstamo ahora
                </Button>
              </div>
            ) : (
              <div className="space-y-6">
                <div className="flex items-center justify-between">
                  <h3 className="text-2xl font-bold text-gray-900">Resultado de tu simulación</h3>
                  <Button variant="outline" onClick={resetSimulation} className="text-sm bg-transparent">
                    Nueva simulación
                  </Button>
                </div>

                {/* Approval Status */}
                <Card
                  className={`border-2 ${results.approved ? "border-green-200 bg-green-50" : "border-red-200 bg-red-50"}`}
                >
                  <CardContent className="p-6">
                    <div className="text-center">
                      <div
                        className={`text-2xl font-bold mb-2 ${results.approved ? "text-green-600" : "text-red-600"}`}
                      >
                        {results.approved ? "✅ Pre-aprobado" : "❌ Requiere revisión"}
                      </div>
                      <p className={`text-sm ${results.approved ? "text-green-700" : "text-red-700"}`}>
                        {results.approved
                          ? "Tu solicitud cumple con nuestros criterios iniciales"
                          : `Tu ratio deuda-ingreso es ${results.debtToIncomeRatio.toFixed(1)}% (máximo recomendado: 30%)`}
                      </p>
                    </div>
                  </CardContent>
                </Card>

                {/* Loan Details */}
                <div className="grid md:grid-cols-2 gap-4">
                  <Card>
                    <CardContent className="p-6">
                      <div className="text-center">
                        <div className="text-3xl font-bold text-blue-600 mb-2">
                          ${results.monthlyPayment.toLocaleString("es-CO", { maximumFractionDigits: 0 })}
                        </div>
                        <div className="text-sm text-gray-600">Cuota mensual</div>
                      </div>
                    </CardContent>
                  </Card>

                  <Card>
                    <CardContent className="p-6">
                      <div className="text-center">
                        <div className="text-3xl font-bold text-gray-900 mb-2">{results.annualRate.toFixed(1)}%</div>
                        <div className="text-sm text-gray-600">Tasa anual</div>
                      </div>
                    </CardContent>
                  </Card>
                </div>

                {/* Detailed Breakdown */}
                <Card>
                  <CardContent className="p-6">
                    <h4 className="font-semibold text-gray-900 mb-4">Desglose detallado</h4>
                    <div className="space-y-3">
                      <div className="flex justify-between">
                        <span className="text-gray-600">Monto del préstamo:</span>
                        <span className="font-medium">${results.loanAmount.toLocaleString("es-CO")}</span>
                      </div>
                      <div className="flex justify-between">
                        <span className="text-gray-600">Intereses totales:</span>
                        <span className="font-medium">
                          ${results.totalInterest.toLocaleString("es-CO", { maximumFractionDigits: 0 })}
                        </span>
                      </div>
                      <div className="flex justify-between">
                        <span className="text-gray-600">Comisión de apertura (3%):</span>
                        <span className="font-medium">
                          ${results.processingFee.toLocaleString("es-CO", { maximumFractionDigits: 0 })}
                        </span>
                      </div>
                      <div className="flex justify-between">
                        <span className="text-gray-600">Seguro (2%):</span>
                        <span className="font-medium">
                          ${results.insurance.toLocaleString("es-CO", { maximumFractionDigits: 0 })}
                        </span>
                      </div>
                      <hr className="my-2" />
                      <div className="flex justify-between font-semibold text-lg">
                        <span>Total a pagar:</span>
                        <span>${results.totalCost.toLocaleString("es-CO", { maximumFractionDigits: 0 })}</span>
                      </div>
                    </div>
                  </CardContent>
                </Card>

                <div className="text-center">
                  <Button size="lg" className="bg-primary text-primary-foreground hover:bg-primary/90 px-8 py-3">
                    Solicitar este préstamo
                  </Button>
                  <p className="text-xs text-gray-500 mt-2">
                    * Esta es una simulación. Las condiciones finales pueden variar según tu perfil crediticio.
                  </p>
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
    </section>
  )
}
