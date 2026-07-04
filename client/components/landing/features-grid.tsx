import { ActivitySquare, CalendarCheck2, MapPinned, MessageSquareMore, PackageSearch, Siren } from "lucide-react";

import { FadeIn } from "@/components/motion/fade-in";
import { InteractiveCard } from "@/components/motion/interactive-card";

const features = [
  {
    title: "Hospital discovery",
    description: "Search by city, treatment, facilities, doctor specialization, and availability.",
    icon: MapPinned,
  },
  {
    title: "Appointment flow",
    description: "Patients can move from discovery to doctor booking with a simple flow.",
    icon: CalendarCheck2,
  },
  {
    title: "Equipment visibility",
    description: "Hospitals can manage stock, assignment, and shortage coordination cleanly.",
    icon: PackageSearch,
  },
  {
    title: "Ambulance support",
    description: "Emergency and support requests fit into one connected hospital network.",
    icon: Siren,
  },
  {
    title: "Realtime coordination",
    description: "Chat, issue updates, and equipment changes can be pushed live with Socket.IO.",
    icon: MessageSquareMore,
  },
  {
    title: "Operational dashboard",
    description: "Hospital teams get one place for trends, workloads, and action items.",
    icon: ActivitySquare,
  },
];

export function FeaturesGrid() {
  return (
    <div className="grid gap-4 sm:grid-cols-2 sm:gap-5 xl:grid-cols-3">
      {features.map((item, index) => {
        const Icon = item.icon;

        return (
          <FadeIn key={item.title} delay={index * 0.06} className="h-full">
            <InteractiveCard className="h-full">
              <article className="group h-full rounded-2xl border border-[var(--border)] bg-[var(--card)] p-4 shadow-sm backdrop-blur transition-all duration-200 hover:border-[var(--primary)]/30 hover:shadow-[0_18px_44px_rgba(15,118,110,0.12)] sm:rounded-[28px] sm:p-6">
                <div className="mb-3 inline-flex rounded-xl bg-[var(--primary-soft)] p-2.5 text-[var(--primary)] transition-transform duration-200 group-hover:scale-110 sm:mb-5 sm:rounded-2xl sm:p-3">
                  <Icon className="h-5 w-5" />
                </div>
                <h3 className="font-display text-base font-bold tracking-tight text-[var(--foreground)] sm:text-xl">{item.title}</h3>
                <p className="mt-2 text-[13px] leading-6 text-[var(--muted)] sm:mt-3 sm:text-sm sm:leading-7">{item.description}</p>
              </article>
            </InteractiveCard>
          </FadeIn>
        );
      })}
    </div>
  );
}
