"use client";

import Link from "next/link";
import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";

import { AuthShell } from "@/components/auth/auth-shell";
import { authButtonClassName, authInputClassName, authLabelClassName } from "@/components/auth/auth-fields";
import { useAsyncTask, useAuth, useToast } from "@/hooks";
import { getErrorMessage } from "@/lib/utils";
import { authService } from "@/services";
import { useAuthStore } from "@/store";
import type { AuthResponse } from "@/types";

interface LoginFormProps {
  redirectTo: "/" | "/hospital" | "/patient/feed";
}

export function LoginForm({ redirectTo }: LoginFormProps) {
  const router = useRouter();
  const { isAuthenticated, isHydrated, syncCurrentUser } = useAuth();
  const { setSession } = useAuthStore();
  const toast = useToast();
  const { isLoading, error, run } = useAsyncTask<AuthResponse>();

  const [isValidating, setIsValidating] = useState(false);
  const [form, setForm] = useState({ email: "", password: "" });

  useEffect(() => {
    if (!isHydrated || !isAuthenticated) return;

    setIsValidating(true);
    syncCurrentUser()
      .then((user) => {
        if (user) {
          router.replace(user.role === "patient" ? "/patient/feed" : "/hospital");
        }
      })
      .finally(() => setIsValidating(false));
  }, [isAuthenticated, isHydrated, router, syncCurrentUser]);

  const handleSubmit = async (event: React.SyntheticEvent<HTMLFormElement>) => {
    event.preventDefault();

    try {
      const result = await run(() => authService.login(form));
      setSession(result);
      toast.success("Signed in successfully", "Your account session is ready.");
      const dest = result.user?.role === "patient" ? "/patient/feed" : result.user?.role ? "/hospital" : redirectTo;
      router.push(dest);
    } catch (submitError) {
      toast.error("Login failed", getErrorMessage(submitError, "Please check your credentials and try again."));
    }
  };

  if (isValidating) {
    return (
      <AuthShell
        title="Welcome back"
        description="Sign in to continue your care journey or hospital operations on Swasth Setu."
        highlights={[
          "Book appointments and track support requests",
          "Open your hospital dashboard in one click",
        ]}
        footer={null}
      >
        <p className="py-6 text-center text-sm text-[var(--muted)]">Verifying your session...</p>
      </AuthShell>
    );
  }

  return (
    <AuthShell
      title="Welcome back"
      description="Sign in to continue your care journey or hospital operations on Swasth Setu."
      highlights={[
        "Book appointments and track support requests",
        "Open your hospital dashboard in one click",
      ]}
      footer={
        <p>
          Don&apos;t have an account?{" "}
          <Link href="/register" className="font-semibold text-[var(--primary)]">
            Create one
          </Link>
        </p>
      }
    >
      <form className="space-y-3" onSubmit={handleSubmit}>
        <div>
          <label className={authLabelClassName} htmlFor="email">
            Email
          </label>
          <input
            id="email"
            type="email"
            required
            value={form.email}
            onChange={(event) => setForm((current) => ({ ...current, email: event.target.value }))}
            className={authInputClassName}
            placeholder="you@example.com"
          />
        </div>

        <div>
          <label className={authLabelClassName} htmlFor="password">
            Password
          </label>
          <input
            id="password"
            type="password"
            required
            value={form.password}
            onChange={(event) => setForm((current) => ({ ...current, password: event.target.value }))}
            className={authInputClassName}
            placeholder="Enter your password"
          />
        </div>

        {error ? <p className="text-xs text-red-600">{error}</p> : null}

        <button type="submit" disabled={isLoading} className={authButtonClassName}>
          {isLoading ? "Signing in..." : "Sign in"}
        </button>
      </form>
    </AuthShell>
  );
}
