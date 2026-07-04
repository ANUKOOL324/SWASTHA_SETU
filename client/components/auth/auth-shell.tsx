interface AuthShellProps {
  title: string;
  description: string;
  highlights?: string[];
  footer: React.ReactNode;
  children: React.ReactNode;
  formWidth?: "compact" | "full";
}

export function AuthShell({
  title,
  description,
  highlights,
  footer,
  children,
  formWidth = "compact",
}: AuthShellProps) {
  return (
    <div className="mx-auto w-full max-w-[820px] px-4 py-6 sm:px-6 sm:py-8">
      <div className="overflow-hidden rounded-2xl border border-[var(--border)] bg-white shadow-[var(--shadow)] sm:rounded-3xl">
        <div className="grid lg:grid-cols-2">
          <aside className="relative flex flex-col justify-center bg-[linear-gradient(165deg,rgba(15,118,110,0.98),rgba(8,42,38,0.98))] px-6 py-8 text-white sm:px-8 sm:py-10 lg:min-h-[480px] lg:px-9 lg:py-10">
            <div
              aria-hidden
              className="pointer-events-none absolute -right-10 -top-10 h-32 w-32 rounded-full bg-white/10 blur-3xl"
            />
            <div
              aria-hidden
              className="pointer-events-none absolute -bottom-12 -left-8 h-28 w-28 rounded-full bg-teal-300/10 blur-3xl"
            />

            <div className="relative">
              <p className="text-[11px] font-semibold uppercase tracking-[0.28em] text-teal-200/90">Swasth Setu</p>
              <h1 className="font-display mt-2.5 text-2xl font-bold leading-tight tracking-tight sm:text-[1.85rem]">
                {title}
              </h1>
              <p className="mt-2.5 max-w-[18rem] text-sm leading-6 text-white/76">{description}</p>

              {highlights?.length ? (
                <ul className="mt-6 space-y-2.5 border-t border-white/10 pt-5">
                  {highlights.map((item) => (
                    <li key={item} className="flex gap-2 text-[13px] leading-5 text-white/72">
                      <span aria-hidden className="mt-[7px] h-1 w-1 shrink-0 rounded-full bg-teal-300" />
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              ) : null}
            </div>
          </aside>

          <div className="flex flex-col justify-center border-t border-[var(--border)] px-6 py-7 sm:px-8 sm:py-9 lg:border-t-0 lg:border-l lg:py-10">
            <div className={formWidth === "full" ? "w-full" : "mx-auto w-full max-w-[320px]"}>
              {children}
              {footer ? (
                <div className="mt-5 border-t border-[var(--border)] pt-4 text-center text-xs text-[var(--muted)] sm:text-left">
                  {footer}
                </div>
              ) : null}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
