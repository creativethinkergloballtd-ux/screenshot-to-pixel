import { createFileRoute } from "@tanstack/react-router";

import { AuthCard } from "@/components/AuthCard";

export const Route = createFileRoute("/signup")({
  head: () => ({
    meta: [
      { title: "Create account — Flight Price Notifier" },
      { name: "description", content: "Create a free Flight Price Notifier account and get emailed when Taipei fares drop." },
      { property: "og:title", content: "Create account — Flight Price Notifier" },
      { property: "og:description", content: "Get emailed when Taipei fares drop below your budget." },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary" },
    ],
  }),
  component: SignUpPage,
});

function SignUpPage() {
  return (
    <main className="relative flex min-h-screen items-center justify-center overflow-hidden px-4 py-16">
      <div className="pointer-events-none absolute inset-0 bg-hero-glow" />
      <div className="pointer-events-none absolute inset-0 bg-grid" />
      <div className="relative w-full flex justify-center">
        <AuthCard mode="signup" />
      </div>
    </main>
  );
}
