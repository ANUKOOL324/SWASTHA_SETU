import { AiHighlight } from "@/components/landing/ai-highlight";
import { CtaBanner } from "@/components/landing/cta-banner";
import { FeaturesGrid } from "@/components/landing/features-grid";
import { HeroSection } from "@/components/landing/hero-section";
import { RoleCards } from "@/components/landing/role-cards";
import { SectionShell } from "@/components/landing/section-shell";

export default function LandingPage() {
  return (
    <div className="mx-auto flex w-full max-w-7xl flex-col px-4 pb-10 pt-0 sm:px-8 sm:pb-14 sm:pt-1 lg:px-12">
      <HeroSection />

      <SectionShell
        id="features"
        eyebrow="Platform features"
        title="Everything care coordination needs, in one place"
        description="From patient discovery to hospital operations and urgent support, every workflow is connected so care moves faster."
      >
        <FeaturesGrid />
      </SectionShell>

      <SectionShell
        id="roles"
        eyebrow="Built for two sides"
        title="Different user flows, one connected healthcare network"
        description="Patients get fast, public access to care. Hospitals get operational control. Both work on the same live network."
      >
        <RoleCards />
      </SectionShell>

      <SectionShell
        eyebrow="AI layer"
        title="Intelligence that works quietly in the background"
        description="Smart search, review summaries, and guided assistance make every interaction faster — without getting in the way."
      >
        <AiHighlight />
      </SectionShell>

      <section className="py-6 sm:py-10">
        <CtaBanner />
      </section>
    </div>
  );
}
