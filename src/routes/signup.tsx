import { usePageMeta } from "@/hooks/usePageMeta";
import { AuthCard } from "@/components/AuthCard";

export function SignUpPage() {
  usePageMeta({
    title: "Create account — Flight Price Notifier",
    description: "Create a free Flight Price Notifier account and get emailed when Taipei fares drop.",
    ogDescription: "Get emailed when Taipei fares drop below your budget.",
    twitterCard: "summary",
  });

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
