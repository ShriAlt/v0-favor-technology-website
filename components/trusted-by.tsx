"use client"

import { useRef } from "react"
import { useInView } from "@/hooks/use-in-view"

const stats = [
  {
    number: "200+",
    label: "Campaigns Managed",
  },
  {
    number: "11+",
    label: "Active Client Partners",
  },
  {
    number: "13+",
    label: "Platforms Covered",
  },
]

export function TrustedBy() {
  const ref = useRef<HTMLDivElement>(null)
  const isInView = useInView(ref, { threshold: 0.3 })

  return (
    <section className="relative bg-card py-16 md:py-20">
      <div
        ref={ref}
        className={`mx-auto max-w-6xl px-6 transition-all duration-700 ${
          isInView ? "translate-y-0 opacity-100" : "translate-y-6 opacity-0"
        }`}
      >
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 md:gap-8">
          {stats.map((stat, idx) => (
            <div key={idx} className="text-center md:text-left">
              <div className="mb-3">
                <div className="text-4xl md:text-5xl font-bold text-primary">
                  {stat.number}
                </div>
              </div>
              <p className="text-base text-muted-foreground">
                {stat.label}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
