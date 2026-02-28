"use client"

import { useRef } from "react"
import { useInView } from "@/hooks/use-in-view"
import {
  ClipboardList,
  Users,
  Cog,
  Globe,
  FileText,
  ShieldCheck,
} from "lucide-react"

const reasons = [
  {
    icon: ClipboardList,
    title: "Structured Execution Framework",
    description:
      "Every project follows a documented process: audit, strategy, build, launch, optimize. No guesswork.",
  },
  {
    icon: Users,
    title: "Limited Clients Per Quarter",
    description:
      "We cap our roster to ensure dedicated attention, faster turnarounds, and better results for each partner.",
  },
  {
    icon: Cog,
    title: "Automation-Driven Systems",
    description:
      "We build repeatable systems with Zapier, Make, n8n, and custom integrations so growth compounds over time.",
  },
  {
    icon: Globe,
    title: "Multi-Platform Expertise",
    description:
      "Meta, Google, LinkedIn, YouTube, WhatsApp -- we run full-funnel campaigns across every channel that matters.",
  },
  {
    icon: FileText,
    title: "Transparent Cost Breakdown",
    description:
      "No hidden fees. Every proposal comes with a clear scope, deliverable list, and line-item pricing.",
  },
  {
    icon: ShieldCheck,
    title: "Full Ownership & IP Rights",
    description:
      "Everything we build belongs to you. Full source code, ad account access, and documentation handover included.",
  },
]

export function WhyFavor() {
  const ref = useRef<HTMLDivElement>(null)
  const isInView = useInView(ref, { threshold: 0.15 })

  return (
    <section className="relative bg-secondary py-16 md:py-24">
      <div ref={ref} className="mx-auto max-w-6xl px-6">
        {/* Section Header */}
        <div className="mb-16">
          <h2 className="mb-6 text-5xl sm:text-6xl md:text-7xl font-bold tracking-tight text-foreground leading-[1.2]">
            Why Favor
          </h2>
          <p className="max-w-2xl text-base text-muted-foreground leading-relaxed">
            We operate differently. Here is what sets us apart from every other agency or freelancer.
          </p>
        </div>

        {/* Reasons Grid */}
        <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
          {reasons.map((r, i) => (
            <div
              key={r.title}
              className={`flex flex-col rounded-xl bg-background p-8 border border-border transition-all duration-500 hover:shadow-md ${
                isInView
                  ? "translate-y-0 opacity-100"
                  : "translate-y-12 opacity-0"
              }`}
              style={{ transitionDelay: `${i * 100}ms` }}
            >
              <div className="mb-6 inline-flex h-12 w-12 items-center justify-center rounded-lg bg-primary/15">
                <r.icon size={24} className="text-primary" />
              </div>
              <h3 className="mb-3 text-lg font-bold text-foreground">
                {r.title}
              </h3>
              <p className="text-sm text-muted-foreground leading-relaxed">
                {r.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
