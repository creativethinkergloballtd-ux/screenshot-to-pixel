import { Radar } from "lucide-react";

import { FadeIn } from "@/components/FadeIn";
import { SiteFooter } from "@/components/SiteFooter";
import { SiteHeader } from "@/components/SiteHeader";
import { usePageMeta } from "@/hooks/usePageMeta";

import { useAuthenticatedUser } from "./route";

export function AppDashboard() {
  usePageMeta({
    title: "Dashboard — Flight Price Notifier",
    description: "Your Flight Price Notifier dashboard.",
    twitterCard: "summary",
    robots: "noindex",
  });

  const user = useAuthenticatedUser();

  return (
    <div className="flex min-h-screen flex-col">
      <SiteHeader />
      <main className="relative flex-1 overflow-hidden">
        <div className="pointer-events-none absolute inset-0 bg-hero-glow" />
        <div className="relative mx-auto max-w-3xl px-4 py-16 sm:px-6 sm:py-24">
          <FadeIn>
            <h1 className="break-words text-3xl font-semibold tracking-tight text-foreground sm:text-4xl">
              Hi {user.email}
            </h1>
          </FadeIn>
          <FadeIn delay={120}>
            <div className="mt-8 rounded-2xl border border-border bg-card/80 p-6 shadow-card backdrop-blur sm:p-8">
              <span className="grid size-11 place-items-center rounded-xl border border-primary/30 bg-primary/10 text-primary-glow">
                <Radar className="size-5" aria-hidden="true" />
              </span>
              <p className="mt-5 text-lg font-medium leading-relaxed text-foreground">
                你的航線追蹤儀表板即將上線 — 下一個里程碑會加上訂閱航線的功能。
              </p>
              <p className="mt-2 text-sm text-muted-foreground">
                Your dashboard is coming soon. Route-subscription will be added in the next milestone.
              </p>
            </div>
          </FadeIn>
        </div>
      </main>
      <SiteFooter />
    </div>
  );
}
