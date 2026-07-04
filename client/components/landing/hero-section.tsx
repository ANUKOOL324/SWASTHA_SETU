import Link from "next/link";
import { ArrowRight, BrainCircuit, Building2, HeartHandshake, ShieldPlus, Sparkles } from "lucide-react";

import { FadeIn } from "@/components/motion/fade-in";
import { InteractiveCard } from "@/components/motion/interactive-card";
import { Pill } from "@/components/ui/pill";

const statItems = [
  { value: "24/7", label: "Care discovery, always available" },
  { value: "10+", label: "Coordination modules for hospitals" },
  { value: "Live", label: "Realtime updates and smart search" },
];

const spotlightItems = [
  "Find hospitals by location, treatment, doctors, and facilities",
  "Coordinate equipment, issues, and ambulance help across hospitals",
  "Get AI-assisted guidance for care decisions and emergencies",
];

export function HeroSection() {
  return (
    <section className="grid gap-6 pt-2 pb-8 sm:gap-8 sm:pt-4 sm:pb-10 lg:grid-cols-[minmax(0,1.02fr)_minmax(320px,0.98fr)] lg:items-center lg:gap-10 lg:pt-5 lg:pb-12">
      <FadeIn className="space-y-4 sm:space-y-6">
        <div className="hidden sm:block">
          <Pill label="Connected healthcare network" />
        </div>
        <div className="space-y-3 sm:space-y-5">
          <h1 className="font-display max-w-[11ch] text-[2rem] font-extrabold leading-[1.06] tracking-[-0.035em] text-[var(--foreground)] min-[360px]:max-w-[13ch] min-[360px]:text-[2.25rem] sm:max-w-4xl sm:text-balance sm:text-5xl sm:leading-[1.02] lg:text-[4.15rem]">
            Healthcare that finds you{" "}
            <span className="bg-gradient-to-r from-[var(--primary)] to-[var(--primary-strong)] bg-clip-text text-transparent">
              faster
            </span>
            .
          </h1>
          <p className="text-lead max-w-[32ch] text-[0.98rem] leading-[1.65] min-[360px]:max-w-[36ch] min-[360px]:text-[1.0625rem] min-[360px]:leading-[1.72] sm:max-w-2xl sm:text-lg sm:leading-[1.78] lg:max-w-[42rem] lg:text-[1.1875rem] lg:leading-[1.8]">
            <span className="sm:hidden">
              Find hospitals and coordinate urgent care in real time.
            </span>
            <span className="hidden sm:inline">
              Swasth Setu connects patients with the right hospitals and gives care teams one
              place to manage doctors, ambulances, equipment, and urgent support — in real time.
            </span>
          </p>
        </div>

        <div className="flex flex-col gap-2.5 min-[420px]:flex-row min-[420px]:flex-wrap sm:gap-3">
          <Link
            href="/hospitals"
            className="group inline-flex min-h-11 w-full items-center justify-center gap-2 rounded-full bg-gradient-to-r from-[var(--primary)] to-[var(--primary-strong)] px-5 py-2.5 text-sm font-semibold text-white shadow-[0_16px_36px_rgba(15,118,110,0.24)] transition-all duration-200 hover:-translate-y-0.5 hover:shadow-[0_20px_44px_rgba(15,118,110,0.3)] min-[420px]:w-auto min-[420px]:flex-1 sm:min-h-12 sm:flex-none sm:min-w-[190px] sm:px-7 sm:py-3"
          >
            Find a Hospital
            <ArrowRight className="h-4 w-4 transition-transform duration-200 group-hover:translate-x-0.5" />
          </Link>
          <Link
            href="/hospital/dashboard"
            className="inline-flex min-h-11 w-full items-center justify-center gap-2 rounded-full border border-[var(--border)] bg-white px-5 py-2.5 text-sm font-semibold text-[var(--foreground)] shadow-sm transition-all duration-200 hover:-translate-y-0.5 hover:border-[var(--primary)] hover:text-[var(--primary)] hover:shadow-md min-[420px]:w-auto min-[420px]:flex-1 sm:min-h-12 sm:flex-none sm:min-w-[190px] sm:px-7 sm:py-3"
          >
            Hospital Dashboard
            <Building2 className="h-4 w-4" />
          </Link>
        </div>

        <div className="grid grid-cols-1 gap-2.5 min-[420px]:grid-cols-2 sm:grid-cols-3 sm:gap-3">
          {statItems.map((item, index) => (
            <FadeIn
              key={item.label}
              delay={0.15 + index * 0.08}
              className={index === 2 ? "min-[420px]:col-span-2 sm:col-span-1" : undefined}
            >
              <InteractiveCard className="h-full">
                <div className="h-full rounded-2xl border border-[var(--border)] bg-white p-3.5 shadow-sm transition-colors duration-200 hover:border-[var(--primary)]/30 sm:rounded-3xl sm:p-5">
                  <p className="font-display text-xl font-bold tracking-tight text-[var(--primary)] sm:text-2xl">{item.value}</p>
                  <p className="mt-1.5 text-[13px] leading-5 text-[var(--muted)] sm:mt-2 sm:text-sm sm:leading-6">{item.label}</p>
                </div>
              </InteractiveCard>
            </FadeIn>
          ))}
        </div>
      </FadeIn>

      <FadeIn delay={0.1} className="hidden lg:block">
        <div className="relative overflow-hidden rounded-3xl border border-[var(--border)] bg-white p-4 shadow-[var(--shadow)] sm:rounded-[36px] sm:p-7">
          <div
            aria-hidden
            className="pointer-events-none absolute -right-16 -top-16 h-48 w-48 rounded-full bg-[var(--primary-soft)] opacity-70 blur-2xl"
          />
          <div className="relative space-y-5">
            <div className="flex items-start gap-3 sm:items-center">
              <div className="rounded-2xl bg-[var(--primary-soft)] p-3 text-[var(--primary)]">
                <HeartHandshake className="h-6 w-6" />
              </div>
              <div className="min-w-0">
                <p className="text-[11px] font-semibold uppercase tracking-[0.22em] text-[var(--muted)] sm:text-xs sm:tracking-[0.24em]">
                  Why Swasth Setu
                </p>
                <p className="font-display mt-1 text-lg font-bold tracking-tight text-[var(--foreground)] sm:text-xl">
                  Coordination, not just directory search
                </p>
              </div>
            </div>

            <div className="grid gap-2.5 rounded-2xl border border-[var(--border)] bg-[var(--background)] p-3 sm:gap-4 sm:rounded-[28px] sm:p-5">
              {spotlightItems.map((item, index) => {
                const Icon = [ShieldPlus, Sparkles, BrainCircuit][index];

                return (
                  <InteractiveCard key={item}>
                    <div className="flex items-start gap-3 rounded-2xl bg-white/70 px-3 py-3 transition-colors duration-200 hover:bg-white sm:bg-transparent sm:px-3 sm:py-2 sm:hover:bg-white/80">
                      <div className="mt-1 rounded-xl bg-[var(--primary-soft)] p-2 text-[var(--primary)]">
                        <Icon className="h-4 w-4" />
                      </div>
                      <p className="text-sm leading-6 text-[var(--muted)] sm:leading-7">{item}</p>
                    </div>
                  </InteractiveCard>
                );
              })}
            </div>
          </div>
        </div>
      </FadeIn>
    </section>
  );
}
