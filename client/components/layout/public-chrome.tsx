"use client";

import { usePathname } from "next/navigation";

import { PublicFooter } from "@/components/layout/public-footer";
import { PublicNavbar } from "@/components/layout/public-navbar";

const AUTH_ROUTES = new Set(["/login", "/register"]);

export function PublicChrome({ children }: { children: React.ReactNode }) {
  const pathname = usePathname();
  const isAuthPage = AUTH_ROUTES.has(pathname);

  return (
    <div className="relative">
      <PublicNavbar />
      <main className={isAuthPage ? "flex min-h-[calc(100vh-72px)] items-center" : undefined}>{children}</main>
      {!isAuthPage ? <PublicFooter /> : null}
    </div>
  );
}
