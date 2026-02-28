"use client"

import { useRef } from "react"
import { useInView } from "@/hooks/use-in-view"
import Link from "next/link"
import {
  Smartphone,
  BarChart3,
  ArrowRight,
  Code2,
  Globe,
  Cpu,
  ShieldCheck,
  Cloud,
  Search,
  Megaphone,
  Share2,
  Bot,
  LineChart,
  MessageSquare,
} from "lucide-react"

const divisions = [
  {
    icon: Smartphone,
    title: "Favor Apps",
    tagline: "High-Performance Web Engineering",
    description:
      "We build production-grade web applications, SaaS platforms, admin dashboards, and custom CRM systems using modern high-code frameworks.",
    services: [
      { icon: Code2, label: "Business Websites & Web Apps" },
      { icon: Cloud, label: "SaaS Development" },
      { icon: Globe, label: "Admin Dashboards & CRMs" },
      { icon: Cpu, label: "API Integrations & Automation" },
      { icon: ShieldCheck, label: "Secure & Scalable Architecture" },
    ],
    cta: "Explore Apps",
    href: "/services/apps",
    accent: "#1565C0",
  },
  {
    icon: BarChart3,
    title: "Favor Digital Marketing",
    tagline: "Omnichannel Performance Marketing",
    description:
      "From Meta Ads to Google Shopping, LinkedIn to WhatsApp Automation -- we run full-funnel campaigns across every platform that drives revenue.",
    services: [
      { icon: Search, label: "SEO & Google Ads" },
      { icon: Megaphone, label: "Meta, LinkedIn & Bing Ads" },
      { icon: Share2, label: "Google Shopping & Display" },
      { icon: Bot, label: "AI & CRM Automation" },
      { icon: MessageSquare, label: "Email & WhatsApp Automation" },
      { icon: LineChart, label: "CRO & Analytics" },
    ],
    stats: [
      { value: "200+", label: "Campaigns" },
      { value: "3-6X", label: "Avg ROAS" },
      { value: "13+", label: "Platforms" },
    ],
    cta: "Explore Marketing",
    href: "/services/marketing",
    accent: "#2196F3",
  },
]

export function Divisions() {
  const ref = useRef<HTMLDivElement>(null)
  const isInView = useInView(ref, { threshold: 0.1 })

  return (
    <section id="services" className="relative bg-background py-16 md:py-24">
      <div ref={ref} className="mx-auto max-w-6xl px-6">
        {/* Section Header */}
        <div className="mb-16">
          <h2 className="mb-6 text-5xl sm:text-6xl md:text-7xl font-bold tracking-tight text-foreground leading-[1.2]">
            Two Divisions,
            <br />
            One Growth System
          </h2>
          <p className="max-w-2xl text-base text-muted-foreground leading-relaxed">
            Favor Apps builds the technology. Favor Digital Marketing drives the traffic. Together, they create a complete growth engine.
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid gap-8 md:grid-cols-2">
          {divisions.map((div, i) => (
            <div
              key={div.title}
              className={`group flex flex-col rounded-2xl bg-card p-8 md:p-10 border border-border transition-all duration-500 hover:shadow-lg ${
                isInView
                  ? "translate-y-0 opacity-100"
                  : "translate-y-12 opacity-0"
              }`}
              style={{ transitionDelay: `${i * 150}ms` }}
            >
              {/* Icon Header */}
              <div className="mb-6">
                <div className="mb-4 inline-flex h-14 w-14 items-center justify-center rounded-xl bg-primary/10">
                  <div.icon size={28} className="text-primary" />
                </div>
                <h3 className="mb-2 text-3xl font-bold text-foreground">
                  {div.title}
                </h3>
                <p className="text-base font-medium text-primary">
                  {div.tagline}
                </p>
              </div>

              {/* Description */}
              <p className="mb-8 text-base text-muted-foreground leading-relaxed">
                {div.description}
              </p>

              {/* Services List */}
              <div className="mb-8 flex flex-1 flex-col gap-4">
                <p className="text-sm font-semibold text-foreground uppercase tracking-wide">Key Services</p>
                {div.services.map((service) => (
                  <div
                    key={service.label}
                    className="flex items-center gap-3 text-sm text-muted-foreground"
                  >
                    <service.icon size={16} className="shrink-0 text-primary" />
                    {service.label}
                  </div>
                ))}
              </div>

              {/* Stats */}
              {"stats" in div && div.stats && (
                <div className="mb-8 grid grid-cols-3 gap-4">
                  {div.stats.map((stat) => (
                    <div key={stat.label} className="text-center">
                      <p className="text-2xl font-bold text-primary mb-1">
                        {stat.value}
                      </p>
                      <p className="text-xs tracking-wide text-muted-foreground uppercase">
                        {stat.label}
                      </p>
                    </div>
                  ))}
                </div>
              )}

              {/* CTA */}
              <Link
                href={div.href}
                className="inline-flex items-center justify-center gap-2 rounded-lg bg-primary px-6 py-3 text-sm font-semibold text-primary-foreground transition-all hover:bg-primary/90 hover:shadow-lg"
              >
                {div.cta}
                <ArrowRight size={16} className="transition-transform group-hover:translate-x-1" />
              </Link>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
