import { useEffect, useState, type FormEvent } from "react";
import { Link, useNavigate } from "react-router";
import { Loader2 } from "lucide-react";
import { toast } from "sonner";

import { BrandMark } from "@/components/BrandMark";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { supabase } from "@/integrations/supabase/client";

type Mode = "signin" | "signup";

const copy = {
  signin: {
    title: "Sign in / 登入",
    subtitle: "Welcome back — 回來看看你的航線",
    cta: "Sign in",
    switchText: "還沒有帳號？",
    switchLink: "Sign up / 註冊",
    switchTo: "/signup",
  },
  signup: {
    title: "Create account / 註冊",
    subtitle: "Start watching fares in seconds — 幾秒鐘就能開始",
    cta: "Create account",
    switchText: "已經有帳號了？",
    switchLink: "Sign in / 登入",
    switchTo: "/auth",
  },
} as const;

export function AuthCard({ mode }: { mode: Mode }) {
  const navigate = useNavigate();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [notice, setNotice] = useState<string | null>(null);
  const t = copy[mode];

  // Already signed in? Skip straight to the dashboard.
  useEffect(() => {
    supabase.auth.getSession().then(({ data }) => {
      if (data.session) navigate("/app", { replace: true });
    });
  }, [navigate]);

  async function handleSubmit(e: FormEvent) {
    e.preventDefault();
    setError(null);
    setNotice(null);
    setLoading(true);
    try {
      if (mode === "signin") {
        const { error } = await supabase.auth.signInWithPassword({ email, password });
        if (error) throw error;
        navigate("/app", { replace: true });
      } else {
        const { data, error } = await supabase.auth.signUp({
          email,
          password,
          options: { emailRedirectTo: window.location.origin },
        });
        if (error) throw error;
        if (data.session) {
          toast.success("Account created — 歡迎加入！");
          navigate("/app", { replace: true });
        } else {
          setNotice("請到信箱點擊確認連結 — Check your inbox to confirm your email.");
        }
      }
    } catch (err) {
      setError(err instanceof Error ? err.message : "Something went wrong. 請再試一次。");
    } finally {
      setLoading(false);
    }
  }

  return (
    <div className="w-full max-w-sm">
      <div className="mb-8 flex justify-center">
        <BrandMark />
      </div>
      <div className="rounded-2xl border border-border bg-card/80 p-6 shadow-card backdrop-blur sm:p-8">
        <h1 className="text-2xl font-semibold tracking-tight text-foreground">{t.title}</h1>
        <p className="mt-1 text-sm text-muted-foreground">{t.subtitle}</p>

        <form onSubmit={handleSubmit} className="mt-6 space-y-4">
          <div className="space-y-2">
            <Label htmlFor="email">Email</Label>
            <Input
              id="email"
              type="email"
              autoComplete="email"
              required
              placeholder="you@example.com"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="h-11 bg-background/60"
            />
          </div>
          <div className="space-y-2">
            <Label htmlFor="password">Password / 密碼</Label>
            <Input
              id="password"
              type="password"
              autoComplete={mode === "signin" ? "current-password" : "new-password"}
              required
              minLength={6}
              placeholder={mode === "signup" ? "至少 6 個字元" : "••••••••"}
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              className="h-11 bg-background/60"
            />
          </div>

          {error && (
            <p role="alert" className="rounded-lg border border-destructive/40 bg-destructive/10 px-3 py-2 text-sm text-destructive">
              {error}
            </p>
          )}
          {notice && (
            <p className="rounded-lg border border-primary/40 bg-primary/10 px-3 py-2 text-sm text-foreground">
              {notice}
            </p>
          )}

          <Button type="submit" variant="hero" size="xl" className="w-full" disabled={loading}>
            {loading && <Loader2 className="animate-spin" aria-hidden="true" />}
            {t.cta}
          </Button>
        </form>

        <p className="mt-6 text-center text-sm text-muted-foreground">
          {t.switchText}{" "}
          <Link to={t.switchTo} className="font-medium text-primary-glow hover:underline">
            {t.switchLink}
          </Link>
        </p>
      </div>
    </div>
  );
}
