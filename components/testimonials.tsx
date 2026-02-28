"use client"

import { useRef } from "react"
import { useInView } from "@/hooks/use-in-view"
import { Star, ExternalLink } from "lucide-react"

const allTestimonials = [
  {
    name: "DB Office",
    company: "DB Office",
    website: "dboffice.in",
    industry: "Office Supplies / E-Commerce",
    service: "Full-Stack Web Application + E-Commerce Platform",
    result: "Custom e-commerce platform built and deployed, streamlining online product catalog and order management.",
    division: "Favor Apps",
  },
  {
    name: "Crazy Crackers",
    company: "Crazy Crackers",
    website: "crazycrackers.in",
    industry: "Retail / Seasonal E-Commerce",
    service: "Google Ads + Meta Performance Marketing",
    result: "Seasonal campaign setup driving targeted traffic during peak festive season with optimized ad spend.",
    division: "Favor Digital Marketing",
  },
  {
    name: "Amanah Chem Pharm",
    company: "Amanah Chem Pharm",
    website: "amanahchempharm.com",
    industry: "Chemical & Pharmaceutical",
    service: "Corporate Website + SEO Foundation",
    result: "Professional web presence established with SEO-optimized pages for B2B lead generation.",
    division: "Favor Apps",
  },
  {
    name: "Bold Print Studio",
    company: "Bold Print Studio",
    website: "boldprintstudio.net",
    industry: "Printing / Creative Services",
    service: "Website Development + Local SEO",
    result: "Modern portfolio website launched with local search optimization for regional visibility.",
    division: "Favor Apps",
  },
  {
    name: "Karangal Institution",
    company: "Karangal Institution",
    website: "karangalinstitutioncbe.com",
    industry: "Education / Institution",
    service: "Institutional Website + Google Ads",
    result: "Digital presence built with admissions-focused landing pages and targeted Google campaigns.",
    division: "Favor Digital Marketing",
  },
  {
    name: "Skillful Learning",
    company: "Skillful Learning",
    website: "skillfullearning.in",
    industry: "EdTech / Online Learning",
    service: "Web Application + Performance Marketing",
    result: "Learning platform developed with integrated lead-gen funnels and Meta ad campaigns.",
    division: "Favor Apps",
  },
  {
    name: "Carage Car Care",
    company: "Carage Car Care",
    website: "caragecarcare.co.in",
    industry: "Automotive / Services",
    service: "Website + Local SEO + Google Ads",
    result: "Service booking website with local SEO setup driving walk-in and appointment inquiries.",
    division: "Favor Digital Marketing",
  },
  {
    name: "Pulse Celebrations",
    company: "Pulse Celebrations",
    website: "pulsecelebrations.com",
    industry: "Events / Celebrations",
    service: "Brand Website + Social Media Marketing",
    result: "Event showcase website with social media campaigns generating consistent booking inquiries.",
    division: "Favor Digital Marketing",
  },
  {
    name: "FoodLogixs",
    company: "FoodLogixs",
    website: "foodlogixs.in",
    industry: "Food & Logistics / Supply Chain",
    service: "Custom Web App + CRM Automation",
    result: "Operations web app with automated CRM workflows reducing manual coordination overhead.",
    division: "Favor Apps",
  },
  {
    name: "Educadd Rajajinagar",
    company: "Educadd Rajajinagar",
    website: "educaddrajajinagar.co.in",
    industry: "Education / Training Institute",
    service: "SEO + Content Marketing + Google Ads",
    result: "Enrollment-focused campaigns with content strategy driving qualified student inquiries.",
    division: "Favor Digital Marketing",
  },
  {
    name: "Sexologist in Tamil Nadu",
    company: "Dr. Clinic",
    website: "sexologistintamilnadu.com",
    industry: "Healthcare / Medical Practice",
    service: "Website + Local SEO + Google Ads",
    result: "HIPAA-aware medical website with appointment booking and local search dominance.",
    division: "Favor Digital Marketing",
  },
]

interface TestimonialsProps {
  filter?: string
}

export function Testimonials({ filter }: TestimonialsProps) {
  const ref = useRef<HTMLDivElement>(null)
  const isInView = useInView(ref, { threshold: 0.1 })

  const testimonials = filter
    ? allTestimonials.filter((t) => t.division === filter)
    : allTestimonials

  return (
    <section className="relative bg-background py-16 md:py-24">
      <div ref={ref} className="mx-auto max-w-7xl px-6">
        {/* Section Header */}
        <div className="mb-16">
          <h2 className="mb-6 text-5xl sm:text-6xl md:text-7xl font-bold tracking-tight text-foreground leading-[1.2]">
            Client Success
            <br />
            Stories
          </h2>
          <p className="max-w-2xl text-base text-muted-foreground leading-relaxed">
            Every engagement is built around clear deliverables and measurable outcomes. Here's how we've helped brands across industries scale.
          </p>
        </div>

        {/* Testimonials Grid */}
        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
          {testimonials.map((t, i) => (
            <div
              key={t.name}
              className={`flex flex-col rounded-xl bg-card border border-border p-8 md:p-10 transition-all duration-500 hover:shadow-lg ${
                isInView
                  ? "translate-y-0 opacity-100"
                  : "translate-y-12 opacity-0"
              }`}
              style={{ transitionDelay: `${i * 100}ms` }}
            >
              {/* Stars */}
              <div className="mb-6 flex gap-1">
                {Array.from({ length: 5 }).map((_, j) => (
                  <Star
                    key={j}
                    size={16}
                    className="fill-primary text-primary"
                  />
                ))}
              </div>

              {/* Result Quote */}
              <p className="mb-8 text-base font-semibold text-foreground leading-relaxed flex-1">
                {`"${t.result}"`}
              </p>

              {/* Details */}
              <div className="mb-8 space-y-4 text-sm">
                <div className="flex flex-col gap-1">
                  <span className="text-xs font-semibold tracking-wide text-muted-foreground uppercase">
                    Industry
                  </span>
                  <span className="text-foreground/80">{t.industry}</span>
                </div>
                <div className="flex flex-col gap-1">
                  <span className="text-xs font-semibold tracking-wide text-muted-foreground uppercase">
                    Service
                  </span>
                  <span className="text-foreground/80">{t.service}</span>
                </div>
                <div className="flex flex-col gap-1">
                  <span className="text-xs font-semibold tracking-wide text-muted-foreground uppercase">
                    Website
                  </span>
                  <a
                    href={`https://${t.website}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-1 text-primary hover:underline w-fit"
                  >
                    {t.website}
                    <ExternalLink size={12} className="opacity-70" />
                  </a>
                </div>
              </div>

              {/* Divider */}
              <div className="mb-6 border-t border-border" />

              {/* Author */}
              <div className="flex items-center gap-3 mb-4">
                <div className="flex h-10 w-10 items-center justify-center rounded-full bg-primary/15 text-sm font-bold text-primary">
                  {t.name.charAt(0)}
                </div>
                <div>
                  <p className="text-sm font-semibold text-foreground">
                    {t.name}
                  </p>
                  <p className="text-xs text-muted-foreground">{t.company}</p>
                </div>
              </div>

              {/* Division Badge */}
              <div className="inline-flex rounded-lg bg-primary/10 px-3 py-1.5 text-xs font-medium tracking-wide text-primary uppercase w-fit">
                {t.division}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
