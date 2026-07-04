import Link from "next/link";
import { ArrowRight } from "lucide-react";

import { FadeIn } from "@/components/motion/fade-in";

export function CtaBanner() {
  return (
    <FadeIn>
      <div className="flex flex-col gap-5 rounded-3xl border border-[var(--border)] bg-white/90 p-4 shadow-sm sm:gap-6 sm:rounded-[32px] sm:p-8 lg:flex-row lg:items-center lg:justify-between">
        <div className="max-w-2xl">
          <p className="text-[11px] font-semibold uppercase tracking-[0.22em] text-[var(--primary)] sm:text-xs sm:tracking-[0.24em]">Get started</p>
          <h3 className="font-display mt-3 text-2xl font-bold tracking-tight text-[var(--foreground)] sm:mt-4 sm:text-3xl">
            Explore the network or jump straight into hospital operations.
          </h3>
          <p className="mt-3 text-sm leading-6 text-[var(--muted)] sm:leading-7">
            Find nearby hospitals, book appointments, and raise support requests — or sign in as a
            hospital to manage your entire operation from one dashboard.
          </p>
        </div>

        <div className="flex flex-col gap-2.5 min-[420px]:flex-row min-[420px]:flex-wrap sm:gap-3 lg:shrink-0">
          <Link
            href="/hospitals"
            className="group inline-flex min-h-11 w-full items-center justify-center gap-2 rounded-full bg-gradient-to-r from-[var(--primary)] to-[var(--primary-strong)] px-5 py-2.5 text-sm font-semibold text-white shadow-[0_16px_36px_rgba(15,118,110,0.24)] transition-all duration-200 hover:-translate-y-0.5 hover:shadow-[0_20px_44px_rgba(15,118,110,0.3)] min-[420px]:w-auto min-[420px]:flex-1 sm:min-h-12 sm:flex-none sm:min-w-[190px] sm:px-7 sm:py-3"
          >
            Explore Hospitals
            <ArrowRight className="h-4 w-4 transition-transform duration-200 group-hover:translate-x-0.5" />
          </Link>
          <Link
            href="/hospital/dashboard"
            className="inline-flex min-h-11 w-full items-center justify-center gap-2 rounded-full border border-[var(--border)] bg-white px-5 py-2.5 text-sm font-semibold text-[var(--foreground)] shadow-sm transition-all duration-200 hover:-translate-y-0.5 hover:border-[var(--primary)] hover:text-[var(--primary)] hover:shadow-md min-[420px]:w-auto min-[420px]:flex-1 sm:min-h-12 sm:flex-none sm:min-w-[190px] sm:px-7 sm:py-3"
          >
            Hospital Dashboard
          </Link>
        </div>
      </div>
    </FadeIn>
  );
}
