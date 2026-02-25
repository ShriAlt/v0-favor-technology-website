"use client"

import { useInViewRef } from "@/hooks/use-in-view"
import {
  Building2,
  Store,
  Briefcase,
  ShoppingBag,
  GraduationCap,
  Car,
  PartyPopper,
  Truck,
  FlaskConical,
  Printer,
  Stethoscope,
} from "lucide-react"

const partners = [
  {
    name: "DB Office",
    industry: "Office Supplies / E-Commerce",
    icon: Store,
    website: "dboffice.in",
  },
  {
    name: "Crazy Crackers",
    industry: "Retail / Seasonal E-Commerce",
    icon: ShoppingBag,
    website: "crazycrackers.in",
  },
  {
    name: "Amanah Chem Pharm",
    industry: "Chemical & Pharmaceutical",
    icon: FlaskConical,
    website: "amanahchempharm.com",
  },
  {
    name: "Bold Print Studio",
    industry: "Printing / Creative Services",
    icon: Printer,
    website: "boldprintstudio.net",
  },
  {
    name: "Karangal Institution",
    industry: "Education / Institution",
    icon: Building2,
    website: "karangalinstitutioncbe.com",
  },
  {
    name: "Skillful Learning",
    industry: "EdTech / Online Learning",
    icon: GraduationCap,
    website: "skillfullearning.in",
  },
  {
    name: "Carage Car Care",
    industry: "Automotive / Services",
    icon: Car,
    website: "caragecarcare.co.in",
  },
  {
    name: "Pulse Celebrations",
    industry: "Events / Celebrations",
    icon: PartyPopper,
    website: "pulsecelebrations.com",
  },
  {
    name: "FoodLogixs",
    industry: "Food & Logistics",
    icon: Truck,
    website: "foodlogixs.in",
  },
  {
    name: "Educadd Rajajinagar",
    industry: "Education / Training",
    icon: Briefcase,
    website: "educaddrajajinagar.co.in",
  },
  {
    name: "Dr. Clinic",
    industry: "Healthcare / Medical",
    icon: Stethoscope,
    website: "sexologistintamilnadu.com",
  },
]

export function GrowthPartners() {
  const { ref, isInView } = useInViewRef()

  return (
    <section className="relative py-32 md:py-40">
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute left-1/3 top-1/4 h-80 w-80 rounded-full bg-accent/3 blur-[100px]" />
      </div>

      <div ref={ref} className="relative mx-auto max-w-6xl px-6">
        <div
          className={`mb-20 text-center transition-all duration-700 ${
            isInView ? "animate-fade-in-up" : "opacity-0 translate-y-8"
          }`}
        >
          <div className="mb-4 flex items-center justify-center gap-3">
            <div className="h-px w-12 bg-accent/50" />
            <span className="text-xs font-semibold tracking-widest text-accent uppercase">
              Growth Partners
            </span>
            <div className="h-px w-12 bg-accent/50" />
          </div>
          <h2 className="mb-5 text-3xl font-bold tracking-tight text-foreground md:text-5xl text-balance">
            Brands We Scale
          </h2>
          <p className="mx-auto max-w-2xl text-base text-muted-foreground leading-relaxed">
            We work with ambitious brands across industries, driving measurable
            growth through performance marketing and custom technology.
          </p>
        </div>

        <div className="grid gap-5 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
          {partners.map((partner, i) => {
            const Icon = partner.icon
            return (
              <a
                key={partner.name}
                href={`https://${partner.website}`}
                target="_blank"
                rel="noopener noreferrer"
                className={`glass-card glass-card-hover group rounded-2xl p-7 text-center transition-all duration-500 ${
                  isInView
                    ? "animate-fade-in-up"
                    : "opacity-0 translate-y-8"
                }`}
                style={{ animationDelay: `${i * 80}ms` }}
              >
                <div className="mx-auto mb-4 flex h-12 w-12 items-center justify-center rounded-xl bg-primary/15 transition-colors group-hover:bg-primary/25">
                  <Icon size={22} className="text-accent" />
                </div>
                <h3 className="mb-1 text-sm font-semibold text-foreground">
                  {partner.name}
                </h3>
                <p className="mb-2 text-[11px] text-muted-foreground">
                  {partner.industry}
                </p>
                <p className="text-[11px] text-accent/70 group-hover:text-accent transition-colors">
                  {partner.website}
                </p>
              </a>
            )
          })}
        </div>
      </div>
    </section>
  )
}
