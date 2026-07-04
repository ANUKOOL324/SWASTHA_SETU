import type { Route } from "next";
import Link from "next/link";
import { ArrowUp, ArrowUpRight, HeartPulse } from "lucide-react";

type FooterLink = {
  href: Route;
  label: string;
};

const desktopPlatformLinks: FooterLink[] = [
  { href: "/hospitals", label: "Hospitals" },
  { href: "/medical-shops", label: "Medical Shops" },
  { href: "/map", label: "Map Search" },
  { href: "/issues", label: "Issues" },
];

const desktopSolutionLinks: FooterLink[] = [
  { href: "/assistant", label: "AI Assistant" },
  { href: "/activity", label: "Activity" },
  { href: "/hospital/dashboard", label: "Hospital Dashboard" },
];

const desktopAccountLinks: FooterLink[] = [
  { href: "/login", label: "Sign In" },
  { href: "/register", label: "Register" },
];

const mobileQuickLinks: FooterLink[] = [
  { href: "/hospitals", label: "Hospitals" },
  { href: "/medical-shops", label: "Medical Shops" },
  { href: "/assistant", label: "AI Assistant" },
  { href: "/map", label: "Map Search" },
];

export function PublicFooter() {
  return (
    <footer className="border-t border-(--border) bg-[radial-gradient(circle_at_top_right,rgba(15,118,110,0.12),transparent_52%),rgba(255,255,255,0.92)]">
      <div className="mx-auto w-full max-w-[94rem] px-3 pt-5 pb-0 sm:px-6 sm:pt-7 lg:px-8">
        <div className="rounded-t-[30px] border border-b-0 border-(--border) bg-white/82 p-5 shadow-[0_18px_42px_rgba(10,32,28,0.09)] backdrop-blur sm:p-7">
          <div className="space-y-5 sm:hidden">
            <div className="flex items-start justify-between gap-3">
              <Link href="/" className="group inline-flex min-w-0 items-center gap-3">
                <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-2xl bg-(--foreground) text-white shadow-[0_14px_28px_rgba(16,35,27,0.15)]">
                  <HeartPulse className="h-5 w-5" />
                </div>
                <div className="min-w-0">
                  <p className="truncate text-base font-semibold tracking-tight text-(--foreground)">Swasth Setu</p>
                  <p className="truncate text-[10px] uppercase tracking-[0.18em] text-(--muted)">Healthcare coordination</p>
                </div>
              </Link>

              <a
                href="#"
                aria-label="Back to top"
                className="inline-flex h-10 w-10 shrink-0 items-center justify-center rounded-full border border-(--border) bg-white text-(--foreground) transition hover:border-(--primary) hover:text-(--primary)"
              >
                <ArrowUp className="h-4 w-4" />
              </a>
            </div>

            <p className="text-[13px] leading-6 text-(--muted)">
              Fast emergency coordination built for clear decisions across hospitals, shops, and patient support.
            </p>

            <nav aria-label="Footer quick links">
              <ul className="grid grid-cols-2 gap-2.5">
                {mobileQuickLinks.map((link) => (
                  <li key={link.href}>
                    <Link
                      href={link.href}
                      className="group flex min-h-11 items-center justify-between gap-2 rounded-2xl border border-(--border) bg-white/88 px-3.5 py-2.5 text-[13px] font-medium text-(--foreground) transition hover:border-(--primary) hover:text-(--primary)"
                    >
                      <span className="truncate">{link.label}</span>
                      <ArrowUpRight className="h-3.5 w-3.5 shrink-0 text-(--muted) transition group-hover:text-(--primary)" />
                    </Link>
                  </li>
                ))}
              </ul>
            </nav>

            <div className="border-t border-(--border) pt-4 text-center text-xs text-(--muted)">
              © 2026 Swasth Setu · AI-powered healthcare coordination
            </div>
          </div>

          <div className="hidden gap-8 sm:grid lg:grid-cols-[1.05fr_1.95fr]">
            <div className="space-y-4">
              <Link href="/" className="group inline-flex items-center gap-3">
                <div className="flex h-11 w-11 items-center justify-center rounded-2xl bg-(--foreground) text-white shadow-[0_14px_28px_rgba(16,35,27,0.15)] transition-transform duration-300 group-hover:-translate-y-0.5">
                  <HeartPulse className="h-5 w-5" />
                </div>
                <div>
                  <p className="text-base font-semibold tracking-tight text-(--foreground)">Swasth Setu</p>
                  <p className="text-[11px] uppercase tracking-[0.22em] text-(--muted)">Healthcare coordination</p>
                </div>
              </Link>

              <p className="max-w-[34rem] text-sm leading-7 text-(--muted)">
                Fast emergency coordination for hospitals, medical shops, and patients. Built to keep decisions clear during high-pressure moments.
              </p>
            </div>

            <div className="grid gap-7 sm:grid-cols-3">
              <FooterColumn heading="Platform" links={desktopPlatformLinks} />
              <FooterColumn heading="Solutions" links={desktopSolutionLinks} />
              <FooterColumn heading="Account" links={desktopAccountLinks} />
            </div>
          </div>

          <div className="mt-7 hidden border-t border-(--border) pt-5 sm:flex sm:flex-row sm:items-center sm:justify-between sm:gap-4">
            <div className="flex flex-wrap items-center gap-x-4 gap-y-2 text-sm text-(--muted)">
              <span>© 2026 Swasth Setu</span>
              <span className="hidden md:inline">-</span>
              <span>AI-powered hospital and emergency coordination platform</span>
            </div>

            <a
              href="#"
              className="inline-flex items-center gap-2 rounded-full border border-(--border) px-4 py-2 text-sm font-medium text-(--foreground) transition hover:-translate-y-0.5 hover:border-(--primary) hover:text-(--primary)"
            >
              Back to Top
              <ArrowUp className="h-3.5 w-3.5" />
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}

function FooterColumn({ heading, links }: { heading: string; links: FooterLink[] }) {
  return (
    <nav aria-label={heading} className="space-y-3">
      <h3 className="text-xs font-semibold uppercase tracking-[0.2em] text-(--muted)">{heading}</h3>
      <ul className="space-y-2.5">
        {links.map((link) => (
          <li key={link.href}>
            <Link
              href={link.href}
              className="group inline-flex items-center gap-2 text-sm font-medium text-(--foreground)/88 transition hover:translate-x-0.5 hover:text-(--foreground)"
            >
              <span>{link.label}</span>
              <ArrowUpRight className="h-3.5 w-3.5 opacity-0 transition group-hover:opacity-100" />
            </Link>
          </li>
        ))}
      </ul>
    </nav>
  );
}
