"use client";

import { Building2, UserRound } from "lucide-react";

import type { UserRole } from "@/types";

const roleChoices: Array<{
  label: string;
  value: UserRole;
  hint: string;
  icon: typeof UserRound;
}> = [
  {
    label: "Patient",
    value: "patient",
    hint: "Find care & book visits",
    icon: UserRound,
  },
  {
    label: "Hospital Admin",
    value: "hospital_admin",
    hint: "Manage hospital operations",
    icon: Building2,
  },
];

interface RolePickerProps {
  value: UserRole;
  onChange: (role: UserRole) => void;
}

export function RolePicker({ value, onChange }: RolePickerProps) {
  return (
    <fieldset className="col-span-full">
      <legend className="mb-1 block text-xs font-medium text-[var(--foreground)]">Role</legend>
      <div className="grid grid-cols-2 gap-2">
        {roleChoices.map((role) => {
          const Icon = role.icon;
          const isSelected = value === role.value;

          return (
            <button
              key={role.value}
              type="button"
              aria-pressed={isSelected}
              onClick={() => onChange(role.value)}
              className={[
                "group flex items-center gap-2 rounded-lg border bg-white p-2.5 text-left transition duration-200",
                isSelected
                  ? "border-[var(--primary)] bg-[var(--primary-soft)] ring-1 ring-[var(--primary)]/20"
                  : "border-[var(--border)] hover:border-[var(--primary)] hover:bg-[var(--primary-soft)]/35",
              ].join(" ")}
            >
              <span
                className={[
                  "flex h-7 w-7 shrink-0 items-center justify-center rounded-md transition",
                  isSelected
                    ? "bg-[var(--primary)] text-white"
                    : "bg-[var(--primary-soft)] text-[var(--primary)] group-hover:bg-[var(--primary)] group-hover:text-white",
                ].join(" ")}
              >
                <Icon className="h-3.5 w-3.5" />
              </span>
              <span className="min-w-0">
                <span className="block text-xs font-semibold text-[var(--foreground)]">{role.label}</span>
                <span className="mt-0.5 block text-[10px] leading-4 text-[var(--muted)]">{role.hint}</span>
              </span>
            </button>
          );
        })}
      </div>
    </fieldset>
  );
}
