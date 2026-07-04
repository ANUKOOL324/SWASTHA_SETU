"use client";

import Link from "next/link";
import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";
import { AuthShell } from "@/components/auth/auth-shell";
import { authButtonClassName, authInputClassName, authLabelClassName } from "@/components/auth/auth-fields";
import { RolePicker } from "@/components/auth/role-picker";
import { useAsyncTask, useAuth, useToast } from "@/hooks";
import { getErrorMessage } from "@/lib/utils";
import { authService } from "@/services";
import { useAuthStore } from "@/store";
import type { AuthResponse, UserRole } from "@/types";

export default function RegisterPage() {
  const router = useRouter();
  const { isAuthenticated, isHydrated } = useAuth();
  const { setSession } = useAuthStore();
  const toast = useToast();
  const { isLoading, error, run } = useAsyncTask<AuthResponse>();

  const [form, setForm] = useState({
    name: "",
    email: "",
    phone: "",
    password: "",
    role: "patient" as UserRole,
    hospitalName: "",
  });

  const { syncCurrentUser } = useAuth();

  useEffect(() => {
    if (!isHydrated || !isAuthenticated) return;
    syncCurrentUser().then((user) => {
      if (user) {
        router.replace(user.role === "patient" ? "/patient/feed" : "/hospital");
      }
    });
  }, [isAuthenticated, isHydrated, router, syncCurrentUser]);

  const handleSubmit = async (event: React.SyntheticEvent<HTMLFormElement>) => {
    event.preventDefault();

    const payload = {
      name: form.name,
      email: form.email,
      phone: form.phone,
      password: form.password,
      role: form.role,
      ...(form.role === "hospital_admin" && form.hospitalName.trim()
        ? { hospitalName: form.hospitalName.trim() }
        : {}),
    };

    try {
      const result = await run(() => authService.register(payload));
      setSession(result);
      toast.success("Account created", "Your new account is ready to use.");
      router.push(form.role === "patient" ? "/patient/feed" : "/hospital");
    } catch (submitError) {
      toast.error("Registration failed", getErrorMessage(submitError, "Please review the form and try again."));
    }
  };

  return (
    <AuthShell
      title="Create your account"
      description="Set up your profile in under a minute and choose how you want to use Swasth Setu."
      highlights={[
        "Patient access for hospitals, booking, and care support",
        "Hospital admin tools for beds, equipment, and ambulances",
      ]}
      formWidth="full"
      footer={
        <p>
          Already have an account?{" "}
          <Link href="/login" className="font-semibold text-[var(--primary)]">
            Sign in
          </Link>
        </p>
      }
    >
      <form className="grid gap-3 sm:grid-cols-2" onSubmit={handleSubmit}>
        <div className="col-span-full">
          <label className={authLabelClassName} htmlFor="name">
            Full name
          </label>
          <input
            id="name"
            required
            value={form.name}
            onChange={(event) => setForm((current) => ({ ...current, name: event.target.value }))}
            className={authInputClassName}
            placeholder="Your full name"
          />
        </div>

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
          <label className={authLabelClassName} htmlFor="phone">
            Phone
          </label>
          <input
            id="phone"
            required
            value={form.phone}
            onChange={(event) => setForm((current) => ({ ...current, phone: event.target.value }))}
            className={authInputClassName}
            placeholder="+91..."
          />
        </div>

        <div className="col-span-full">
          <label className={authLabelClassName} htmlFor="password">
            Password
          </label>
          <input
            id="password"
            type="password"
            minLength={6}
            required
            value={form.password}
            onChange={(event) => setForm((current) => ({ ...current, password: event.target.value }))}
            className={authInputClassName}
            placeholder="At least 6 characters"
          />
        </div>

        <RolePicker
          value={form.role}
          onChange={(role) => setForm((current) => ({ ...current, role, hospitalName: "" }))}
        />

        {form.role === "hospital_admin" ? (
          <div className="col-span-full">
            <label className={authLabelClassName} htmlFor="hospitalName">
              Hospital name <span className="font-normal text-[var(--muted)]">(required)</span>
            </label>
            <input
              id="hospitalName"
              required
              value={form.hospitalName}
              onChange={(event) =>
                setForm((current) => ({ ...current, hospitalName: event.target.value }))
              }
              className={authInputClassName}
              placeholder="e.g. City General Hospital"
            />
            <p className="mt-1 text-xs text-[var(--muted)]">
              A hospital will be created automatically and linked to your account.
            </p>
          </div>
        ) : null}

        {error ? <p className="col-span-full text-sm text-red-600">{error}</p> : null}

        <div className="col-span-full pt-1">
          <button type="submit" disabled={isLoading} className={authButtonClassName}>
            {isLoading ? "Creating account..." : "Create account"}
          </button>
        </div>
      </form>
    </AuthShell>
  );
}
