import { Building2, UserRoundSearch } from "lucide-react";

import { FadeIn } from "@/components/motion/fade-in";
import { InteractiveCard } from "@/components/motion/interactive-card";

const roles = [
  {
    title: "People / Patients",
    description:
      "Discover hospitals, compare details, book appointments, raise issues, search nearby medical shops, and request ambulance help.",
    bullets: [
      "Search by area, disease, facilities, or doctor specialty",
      "View hospital details, reviews, and support options",
      "Use map-first discovery and public issue reporting",
    ],
    icon: UserRoundSearch,
  },
  {
    title: "Hospitals",
    description:
      "Manage doctors, equipment, ambulances, appointments, issue feeds, and collaborative support with other hospitals.",
    bullets: [
      "Operate from one dashboard with modular tools",
      "Coordinate shortages, chat, and support requests",
      "Track live operations while keeping AI optional",
    ],
    icon: Building2,
  },
];

export function RoleCards() {
  return (
    <div className="grid gap-4 sm:gap-6 lg:grid-cols-2">
      {roles.map((role, index) => {
        const Icon = role.icon;

        return (
          <FadeIn key={role.title} delay={index * 0.1} className="h-full">
            <InteractiveCard className="h-full">
              <article className="h-full rounded-2xl border border-[var(--border)] bg-white/90 p-4 shadow-sm transition-all duration-200 hover:border-[var(--primary)]/30 hover:shadow-[0_18px_44px_rgba(15,118,110,0.12)] sm:rounded-[30px] sm:p-7">
                <div className="flex items-start gap-3 sm:items-center sm:gap-4">
                  <div className="shrink-0 rounded-xl bg-[var(--foreground)]/6 p-2.5 text-[var(--primary)] sm:rounded-2xl sm:p-3">
                    <Icon className="h-5 w-5 sm:h-6 sm:w-6" />
                  </div>
                  <div className="min-w-0">
                    <p className="text-[10px] font-semibold uppercase tracking-[0.2em] text-[var(--muted)] sm:text-xs sm:tracking-[0.24em]">User role</p>
                    <h3 className="font-display text-lg font-bold tracking-tight text-[var(--foreground)] sm:text-2xl">{role.title}</h3>
                  </div>
                </div>
                <p className="mt-3 text-[13px] leading-6 text-[var(--muted)] sm:mt-5 sm:text-sm sm:leading-7">{role.description}</p>
                <div className="mt-4 space-y-2.5 sm:mt-6 sm:space-y-3">
                  {role.bullets.map((bullet) => (
                    <div key={bullet} className="flex items-start gap-2.5 sm:gap-3">
                      <div className="mt-[7px] h-2 w-2 shrink-0 rounded-full bg-[var(--primary)] sm:mt-2 sm:h-2.5 sm:w-2.5" />
                      <p className="text-[13px] leading-6 text-[var(--muted)] sm:text-sm sm:leading-7">{bullet}</p>
                    </div>
                  ))}
                </div>
              </article>
            </InteractiveCard>
          </FadeIn>
        );
      })}
    </div>
  );
}
