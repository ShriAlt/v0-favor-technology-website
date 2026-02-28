"use client"

import Link from "next/link"
import { ArrowRight, MessageCircle } from "lucide-react"

export function Hero() {
  return (
    <section className="relative bg-gradient-to-b from-background via-white to-secondary/30 pt-32 pb-20">
      <div className="mx-auto max-w-6xl px-6">
        {/* Hero Headline - Large Bold OceanX Style */}
        <div className="max-w-5xl">
          <h1 className="mb-8 text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-bold tracking-tight text-foreground leading-[1.1]">
            We Engineer{" "}
            <span className="text-primary">Growth</span>
            <br />
            Through Systems
          </h1>
        </div>

        {/* Subtitle */}
        <div className="mb-16 max-w-3xl">
          <p className="mb-4 text-lg sm:text-xl font-medium text-foreground/80">
            High-Code Web Applications. Omnichannel Marketing. AI Automation.
          </p>
          <p className="text-base text-muted-foreground leading-relaxed max-w-2xl">
            Favor combines production-grade web engineering with full-funnel performance marketing to help ambitious brands scale predictably and profitably.
          </p>
        </div>

        {/* CTAs */}
        <div className="flex flex-col sm:flex-row gap-4">
          <Link
            href="/pricing"
            className="group inline-flex items-center justify-center gap-2 rounded-lg bg-primary px-8 py-4 text-sm font-semibold text-primary-foreground transition-all hover:bg-primary/90 hover:shadow-lg"
          >
            View Plans
            <ArrowRight size={16} className="transition-transform group-hover:translate-x-1" />
          </Link>
          <Link
            href="/contact"
            className="inline-flex items-center justify-center gap-2 rounded-lg border-2 border-primary bg-transparent px-8 py-4 text-sm font-semibold text-primary transition-all hover:bg-primary/5"
          >
            <MessageCircle size={16} />
            Book Strategy Call
          </Link>
        </div>
      </div>
    </section>
  )
}
