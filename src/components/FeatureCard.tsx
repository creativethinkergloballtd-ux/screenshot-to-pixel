import type { LucideIcon } from "lucide-react";

export function FeatureCard({
  icon: Icon,
  title,
  subtitle,
  body,
}: {
  icon: LucideIcon;
  title: string;
  subtitle: string;
  body: string;
}) {
  return (
    <article className="group relative h-full overflow-hidden rounded-2xl border border-border bg-card-gradient p-6 shadow-card transition-colors hover:border-primary/40 sm:p-7">
      <div className="pointer-events-none absolute -right-16 -top-16 size-40 rounded-full bg-primary/10 blur-3xl transition-opacity group-hover:opacity-100 sm:opacity-60" />
      <span className="grid size-11 place-items-center rounded-xl border border-primary/30 bg-primary/10 text-primary-glow">
        <Icon className="size-5" aria-hidden="true" />
      </span>
      <h3 className="mt-5 text-lg font-semibold tracking-tight text-foreground">{title}</h3>
      <p className="text-sm font-medium text-primary-glow">{subtitle}</p>
      <p className="mt-3 text-sm leading-relaxed text-muted-foreground">{body}</p>
    </article>
  );
}
