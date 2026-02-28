"use client"

import { useRef, useState, useEffect } from "react"
import Link from "next/link"
import { ArrowRight, Check, Star } from "lucide-react"
import { useInView } from "@/hooks/use-in-view"
import { plans, formatINR } from "@/lib/plans-data"

export function PricingCards() {
  const ref = useRef<HTMLDivElement>(null)
  const isInView = useInView(ref, { threshold: 0.1 })
  const [mounted, setMounted] = useState(false)

  useEffect(() => {
    setMounted(true)
  }, [])

  return (
    <section className="relative bg-background py-16 md:py-24">
      <div ref={ref} className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="mb-16">
          <h2 className="mb-6 text-5xl sm:text-6xl md:text-7xl font-bold tracking-tight text-foreground leading-[1.2]">
            Pricing Plans
          </h2>
          <p className="max-w-2xl text-base text-muted-foreground leading-relaxed">
            Choose a plan that scales with your business. All plans include strategy, execution, and monthly reporting.
          </p>
        </div>

        {/* Pricing Grid */}
        <div className="grid gap-8 lg:grid-cols-2">
          {plans.map((plan, i) => {
            const isPopular = plan.slug === "scale"
            return (
              <div
                key={plan.slug}
                className={`group relative flex flex-col rounded-xl border transition-all duration-500 ${
                  isPopular
                    ? "border-primary bg-primary/5 shadow-lg lg:scale-105"
                    : "border-border bg-card hover:shadow-md"
                } ${
                  isInView
                    ? "translate-y-0 opacity-100"
                    : "translate-y-12 opacity-0"
                }`}
                style={{ transitionDelay: `${i * 120}ms` }}
              >
                {isPopular && (
                  <div className="absolute -top-3 left-8 inline-flex items-center gap-1.5 rounded-lg bg-primary px-4 py-1.5 text-xs font-semibold text-primary-foreground">
                    <Star size={14} className="fill-current" />
                    Most Popular
                  </div>
                )}

                <div className="p-8 md:p-10 flex flex-col h-full">
                  {/* Header */}
                  <div className="mb-6">
                    <h3 className="mb-2 text-2xl font-bold text-foreground">
                      {plan.name}
                    </h3>
                    <p className="text-base text-primary font-medium">
                      {plan.tagline}
                    </p>
                  </div>

                  {/* Price */}
                  <div className="mb-8">
                    {plan.slug === "custom" ? (
                      <>
                        <p className="text-3xl font-bold text-foreground md:text-4xl mb-2">
                          Custom Pricing
                        </p>
                        <p className="text-sm text-muted-foreground">
                          Based on requirements and reference projects
                        </p>
                      </>
                    ) : (
                      <>
                        <div className="flex items-baseline gap-2 mb-1">
                          <span className="text-4xl md:text-5xl font-bold text-foreground">
                            {mounted ? formatINR(plan.startingPrice) : <span className="inline-block h-10 w-32 animate-pulse rounded bg-muted" />}
                          </span>
                          <span className="text-base text-muted-foreground">/month</span>
                        </div>
                        <p className="text-sm text-muted-foreground">
                          Min contract: {plan.minContract}
                        </p>
                      </>
                    )}
                  </div>

                  {/* Best For */}
                  <div className="mb-8 rounded-lg bg-primary/5 border border-primary/10 px-5 py-4">
                    <p className="text-xs font-semibold text-muted-foreground uppercase tracking-wide mb-2">
                      Best For
                    </p>
                    <p className="text-sm text-foreground leading-relaxed">
                      {plan.bestFor}
                    </p>
                  </div>

                  {/* Highlights */}
                  <div className="mb-8 flex flex-1 flex-col gap-4">
                    <p className="text-xs font-semibold text-muted-foreground uppercase tracking-wide">Includes</p>
                    {plan.highlights.map((h) => (
                      <div key={h} className="flex items-start gap-3">
                        <Check
                          size={18}
                          className="mt-0 shrink-0 text-primary"
                        />
                        <span className="text-sm text-foreground/80 leading-relaxed">
                          {h}
                        </span>
                      </div>
                    ))}
                  </div>

                  {/* CTA */}
                  <Link
                    href={`/contact?plan=${plan.slug}`}
                    className={`flex items-center justify-center gap-2 rounded-lg px-6 py-4 text-sm font-semibold transition-all ${
                      isPopular
                        ? "bg-primary text-primary-foreground hover:bg-primary/90 hover:shadow-lg"
                        : "border-2 border-primary bg-transparent text-primary hover:bg-primary/5"
                    }`}
                  >
                    {plan.slug === "custom" ? "Request Custom Quote" : "Get Started"}
                    <ArrowRight
                      size={16}
                      className="transition-transform group-hover:translate-x-1"
                    />
                  </Link>
                </div>
            )
          })}
        </div>

        {/* Bottom note */}
        <div className="mt-16 text-center max-w-3xl mx-auto">
          <p className="text-base text-muted-foreground leading-relaxed mb-3">
            All plans include dedicated account manager, campaign setup, creative direction, and performance reporting.
          </p>
          <p className="text-sm text-muted-foreground/70">
            Prices are in INR. Ad spend budget is separate and billed directly by platforms.
          </p>
        </div>
      </div>
    </section>
  )
}
