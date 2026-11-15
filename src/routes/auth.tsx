import { usePageMeta } from "@/hooks/usePageMeta";
import { AuthCard } from "@/components/AuthCard";

export function SignInPage() {
  usePageMeta({
    title: "Sign in — Flight Price Notifier",
    description: "Sign in to Flight Price Notifier to manage your fare alerts from Taipei.",
    ogDescription: "Sign in to manage your Taipei fare alerts.",
    twitterCard: "summary",
  });

  return (
    <main className="relative flex min-h-screen items-center justify-center overflow-hidden px-4 py-16">
      <div className="pointer-events-none absolute inset-0 bg-hero-glow" />
      <div className="pointer-events-none absolute inset-0 bg-grid" />
      <div className="relative w-full flex justify-center">
        <AuthCard mode="signin" />
      </div>
    </main>
  );
}
