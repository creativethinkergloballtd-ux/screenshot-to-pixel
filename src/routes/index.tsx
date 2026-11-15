import { Link } from "react-router";
import { ArrowRight, BellRing, Radar, Unlock } from "lucide-react";

import { FadeIn } from "@/components/FadeIn";
import { FeatureCard } from "@/components/FeatureCard";
import { RouteAlertPreview } from "@/components/RouteAlertPreview";
import { SiteFooter } from "@/components/SiteFooter";
import { SiteHeader } from "@/components/SiteHeader";
import { Button } from "@/components/ui/button";
import { usePageMeta } from "@/hooks/usePageMeta";

const features = [
  {
    icon: Radar,
    title: "盯緊熱門航線",
    subtitle: "Always-on route watching",
    body: "持續監控台北出發的熱門航線（東京、首爾），自動抓最低票價。",
  },
  {
    icon: BellRing,
    title: "達標自動通知",
    subtitle: "Target-price email alerts",
    body: "低於你設定的目標價，就寄 email 提醒你，附上立即訂購連結。",
  },
  {
    icon: Unlock,
    title: "隨時取消",
    subtitle: "Cancel anytime",
    body: "月訂閱制，不想用隨時停，沒有綁約。",
  },
];

export function Landing() {
  usePageMeta({
    title: "Flight Price Notifier 機票降價通知 — Fare alerts from Taipei",
    description:
      "設定航線與目標價，機票降價就通知你。Set a route and a target price — we email you when the fare drops.",
    ogTitle: "Flight Price Notifier 機票降價通知",
    ogDescription: "Set a route from Taipei and a target price — we email you when the fare drops.",
    twitterCard: "summary_large_image",
  });

  return (
    <div className="flex min-h-screen flex-col">
      <SiteHeader />
      <main className="flex-1">
        <section className="relative overflow-hidden">
          <div className="pointer-events-none absolute inset-0 bg-hero-glow" />
          <div className="pointer-events-none absolute inset-0 bg-grid" />
          <div className="relative mx-auto grid max-w-6xl items-center gap-14 px-4 pb-20 pt-16 sm:px-6 sm:pt-24 lg:grid-cols-[1.1fr_1fr] lg:pb-28">
            <div className="text-center lg:text-left">
              <div className="animate-rise">
                <span className="inline-flex items-center gap-2 rounded-full border border-primary/30 bg-primary/10 px-3 py-1 text-xs font-medium text-primary-glow">
                  <span className="size-1.5 rounded-full bg-success" /> 機票降價通知 · From Taipei
                </span>
              </div>
              <div className="animate-rise" style={{ animationDelay: "80ms" }}>
                <h1 className="mt-6 text-5xl font-bold tracking-tight text-gradient sm:text-6xl lg:text-7xl">
                  Flight Price Notifier
                </h1>
              </div>
              <div className="animate-rise" style={{ animationDelay: "160ms" }}>
                <p className="mt-6 text-xl font-medium text-foreground sm:text-2xl">
                  設定航線與目標價，機票降價就通知你
                </p>
                <p className="mx-auto mt-3 max-w-lg text-base text-muted-foreground lg:mx-0">
                  Set a route and a target price — we email you when the fare drops.
                </p>
              </div>
              <div className="animate-rise" style={{ animationDelay: "240ms" }}>
                <div className="mt-9 flex flex-col items-center justify-center gap-3 sm:flex-row lg:justify-start">
                  <Button asChild variant="hero" size="xl">
                    <Link to="/signup">
                      免費開始 · Get started <ArrowRight aria-hidden="true" />
                    </Link>
                  </Button>
                  <Button asChild variant="glass" size="xl">
                    <Link to="/auth">Sign in / 登入</Link>
                  </Button>
                </div>
              </div>
            </div>
            <div className="animate-rise" style={{ animationDelay: "200ms" }}>
              <RouteAlertPreview />
            </div>
          </div>
        </section>

        <section className="mx-auto max-w-6xl px-4 py-20 sm:px-6 sm:py-28">
          <FadeIn>
            <div className="mx-auto max-w-2xl text-center">
              <h2 className="text-3xl font-semibold tracking-tight text-foreground sm:text-4xl">
                不在乎哪天飛，只在乎預算
              </h2>
              <p className="mt-3 text-muted-foreground">
                Built for flexible travelers who just want a ticket under budget.
              </p>
            </div>
          </FadeIn>
          <div className="mt-14 grid gap-5 md:grid-cols-3">
            {features.map((f, i) => (
              <FadeIn key={f.subtitle} delay={i * 120}>
                <FeatureCard {...f} />
              </FadeIn>
            ))}
          </div>
        </section>
      </main>
      <SiteFooter />
    </div>
  );
}
