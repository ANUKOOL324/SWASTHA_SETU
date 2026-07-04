import { BrainCircuit, SearchCheck, Sparkles } from "lucide-react";

import { FadeIn } from "@/components/motion/fade-in";
import { InteractiveCard } from "@/components/motion/interactive-card";

const aiItems = [
  {
    title: "Semantic search",
    description: "Embeddings help match hospitals and equipment by meaning, not only exact keywords.",
    icon: SearchCheck,
  },
  {
    title: "Review and dashboard insights",
    description: "Summaries and insight cards help teams scan sentiment and shortage trends faster.",
    icon: Sparkles,
  },
  {
    title: "Assistant layer",
    description: "Chat-style support can guide users while the core product still works without AI.",
    icon: BrainCircuit,
  },
];

export function AiHighlight() {
  return (
    <FadeIn>
      <div className="rounded-3xl border border-[var(--border)] bg-white p-4 shadow-sm sm:rounded-[32px] sm:p-8">
        <div className="max-w-2xl">
          <p className="text-[11px] font-semibold uppercase tracking-[0.22em] text-[var(--primary)] sm:text-xs sm:tracking-[0.24em]">AI features highlight</p>
          <h3 className="font-display mt-3 text-2xl font-bold tracking-tight text-[var(--foreground)] sm:mt-4 sm:text-3xl">Helpful AI where it matters most</h3>
          <p className="mt-3 text-sm leading-7 text-[var(--muted)] sm:mt-4 sm:leading-8">
            AI improves discovery, summarization, and assistance across the platform — while every
            core workflow keeps working independently, so care never waits on a model.
          </p>
        </div>

        <div className="mt-6 grid gap-4 sm:grid-cols-2 md:mt-8 md:grid-cols-3">
          {aiItems.map((item, index) => {
            const Icon = item.icon;

            return (
              <FadeIn key={item.title} delay={index * 0.08} className="h-full">
                <InteractiveCard className="h-full">
                  <div className="group h-full rounded-2xl border border-[var(--border)] bg-[var(--background)] p-3.5 transition-all duration-200 hover:border-[var(--primary)]/30 hover:bg-white sm:rounded-[24px] sm:p-5">
                    <div className="inline-flex rounded-xl bg-[var(--primary-soft)] p-2.5 text-[var(--primary)] transition-transform duration-200 group-hover:scale-110 sm:rounded-2xl sm:p-3">
                      <Icon className="h-5 w-5" />
                    </div>
                    <h4 className="font-display mt-3 text-base font-bold tracking-tight text-[var(--foreground)] sm:mt-4 sm:text-lg">{item.title}</h4>
                    <p className="mt-1.5 text-[13px] leading-6 text-[var(--muted)] sm:mt-2 sm:text-sm sm:leading-7">{item.description}</p>
                  </div>
                </InteractiveCard>
              </FadeIn>
            );
          })}
        </div>
      </div>
    </FadeIn>
  );
}
