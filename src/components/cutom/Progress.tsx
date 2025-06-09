import {
    MapPin,
    Trash2,
    Truck,
    Shield,
    Calendar,
    CreditCard,
} from "lucide-react"
const steps = [
    { icon: MapPin, label: "Postcode", completed: true },
    { icon: Trash2, label: "Waste Type", completed: true },
    { icon: Truck, label: "Select Skip", active: true },
    { icon: Shield, label: "Permit Check", completed: false },
    { icon: Calendar, label: "Choose Date", completed: false },
    { icon: CreditCard, label: "Payment", completed: false },
]

export const Progress = () => {
    return (
       <div className="border-b border-gray-800 px-4 py-6">
        <div className="max-w-6xl mx-auto w-full">
          <div className="overflow-x-auto">
            <div className="flex items-center justify-center gap-4 min-w-max px-2 sm:px-0">
              {steps.map((step, index) => {
                const Icon = step.icon
                return (
                  <div key={step.label} className="flex items-center flex-shrink-0">
                    <div
                      className={`flex items-center gap-2 sm:gap-3 ${
                        step.completed
                          ? "text-blue-400"
                          : step.active
                          ? "text-blue-400"
                          : "text-gray-500"
                      }`}
                    >
                      <Icon className="w-5 h-5" />
                      <span className="text-xs sm:text-sm font-medium whitespace-nowrap">
                        {step.label}
                      </span>
                    </div>
                    {index < steps.length - 1 && (
                      <div
                        className={`w-6 h-px mx-2 ${
                          step.completed ? "bg-blue-400" : "bg-gray-700"
                        }`}
                      />
                    )}
                  </div>
                )
              })}
            </div>
          </div>
        </div>
      </div>
    )
}
