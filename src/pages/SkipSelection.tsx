"use client"

import { useState } from "react"
import {
  ArrowRight,
} from "lucide-react"
import { Button } from "@/components/ui/button"
import type { Skip } from "@/types/Skip"
import { Progress } from "@/components/cutom/Progress"
import { SkipCard } from "@/components/cutom/SkipCard"
import { formatHirePeriod, formatTitle } from "@/utils"



type SkipPageProps = {
  data: Skip[]
}
export default function SkipSelection({ data }: SkipPageProps) {
  const [selectedSkipId, setSelectedSkipId] = useState<number>(
    data[0]?.id ?? null
  )
  const calculatePrice = (price: number, vat: number) =>
    (price * (1 + vat / 100)).toFixed(2)
  const selectedSkipData = data.find((skip) => skip.id === selectedSkipId)



  return (
    <div className="min-h-screen bg-gray-900 text-white flex flex-col">
      {/* Progress Steps */}
      <Progress />

      {/* Main Content */}
      <main className="max-w-6xl mx-auto px-4 py-8 sm:py-12 flex-grow w-full">
        <div className="text-center mb-8 sm:mb-12 px-2">
          <h1 className="text-3xl sm:text-4xl font-bold mb-2 sm:mb-4 leading-tight">
            Choose Your Skip Size
          </h1>
          <p className="text-gray-400 text-sm sm:text-lg max-w-xl mx-auto">
            Select the skip size that best suits your needs
          </p>
        </div>

        {/* Skip Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
          {data.map((skip) => {
            const totalPrice = calculatePrice(skip.price_before_vat, skip.vat)
            return (
              <SkipCard skip={skip} selectedSkipId={selectedSkipId} setSelectedSkipId={setSelectedSkipId} totalPrice={totalPrice} />
            )
          })}
        </div>

        {/* Bottom Section */}
        <div className="flex flex-col sm:flex-row items-center justify-between border-t border-gray-800 pt-6 gap-4 sm:gap-0">
          <div className="flex flex-col sm:flex-row items-center gap-2 sm:gap-4">
            {selectedSkipData && (
              <>
                <span className="text-lg sm:text-xl font-medium">
                  {formatTitle(selectedSkipData.size)}
                </span>
                <span className="text-2xl sm:text-3xl font-bold text-blue-400">
                  £
                  {calculatePrice(
                    selectedSkipData.price_before_vat,
                    selectedSkipData.vat
                  )}
                </span>
                <span className="text-gray-400 text-sm sm:text-base">
                  {formatHirePeriod(selectedSkipData.hire_period_days)}
                </span>
              </>
            )}
          </div>

          <div className="flex gap-3">
            <Button
              variant="outline"
              className="border-gray-600 text-gray-300 hover:bg-gray-700 px-4 py-2 text-sm sm:text-base"
            >
              Back
            </Button>
            <Button className="bg-blue-600 hover:bg-blue-700 px-4 py-2 text-sm sm:text-base flex items-center gap-2">
              Continue <ArrowRight className="w-4 h-4" />
            </Button>
          </div>
        </div>
      </main>
    </div>
  )
}
