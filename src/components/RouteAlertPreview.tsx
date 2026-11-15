import { BellRing, Plane } from "lucide-react";

// Decorative illustration of a fare alert; values are illustrative only.
export function RouteAlertPreview() {
  return (
    <div className="relative mx-auto w-full max-w-md">
      <div className="absolute inset-0 -z-10 rounded-3xl bg-primary/20 blur-3xl" />
      <div className="rounded-3xl border border-border bg-card/80 p-5 shadow-card backdrop-blur sm:p-6">
        <svg viewBox="0 0 320 150" className="h-auto w-full" aria-hidden="true">
          <defs>
            <linearGradient id="arc" x1="0" x2="1">
              <stop offset="0%" stopColor="var(--primary)" />
              <stop offset="100%" stopColor="var(--primary-glow)" />
            </linearGradient>
          </defs>
          <path d="M40 120 Q 150 10 280 52" fill="none" stroke="url(#arc)" strokeWidth="2" strokeDasharray="6 4" className="animate-dash" />
          <path d="M40 120 Q 140 60 240 112" fill="none" stroke="url(#arc)" strokeOpacity="0.55" strokeWidth="2" strokeDasharray="6 4" className="animate-dash" />
          <circle cx="40" cy="120" r="5" fill="var(--primary-glow)" />
          <circle cx="280" cy="52" r="4" fill="var(--foreground)" />
          <circle cx="240" cy="112" r="4" fill="var(--foreground)" fillOpacity="0.7" />
          <text x="40" y="142" textAnchor="middle" fontSize="11" fill="var(--muted-foreground)">TPE</text>
          <text x="280" y="40" textAnchor="middle" fontSize="11" fill="var(--muted-foreground)">NRT 東京</text>
          <text x="262" y="134" textAnchor="middle" fontSize="11" fill="var(--muted-foreground)">ICN 首爾</text>
        </svg>

        <div className="mt-4 flex items-start gap-3 rounded-2xl border border-primary/30 bg-primary/10 p-4">
          <span className="grid size-9 shrink-0 place-items-center rounded-full bg-gradient-primary">
            <BellRing className="size-4 text-primary-foreground" aria-hidden="true" />
          </span>
          <div className="min-w-0 text-sm">
            <p className="font-semibold text-foreground">降價了！TPE → NRT</p>
            <p className="mt-0.5 text-muted-foreground">
              最低價 <span className="font-semibold text-success">NT$6,980</span> · 目標 NT$7,500
            </p>
          </div>
        </div>

        <div className="mt-3 flex items-center justify-between rounded-2xl border border-border bg-secondary/50 px-4 py-3 text-sm">
          <span className="flex items-center gap-2 text-muted-foreground">
            <Plane className="size-4 text-primary-glow" aria-hidden="true" /> TPE → ICN
          </span>
          <span className="text-muted-foreground">監控中 · Watching</span>
        </div>
      </div>
    </div>
  );
}
