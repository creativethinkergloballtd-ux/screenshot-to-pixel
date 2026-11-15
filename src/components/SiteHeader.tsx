import { Link } from "@tanstack/react-router";
import { LogOut } from "lucide-react";

import { BrandMark } from "@/components/BrandMark";
import { useSession } from "@/components/SessionProvider";
import { Button } from "@/components/ui/button";
import { useSignOut } from "@/hooks/useSignOut";

export function SiteHeader() {
  const { session, ready } = useSession();
  const signOut = useSignOut();

  return (
    <header className="sticky top-0 z-40 border-b border-border bg-background/70 backdrop-blur-xl">
      <div className="mx-auto flex h-16 max-w-6xl items-center justify-between px-4 sm:px-6">
        <BrandMark />
        <nav className="flex items-center gap-2">
          {ready && session ? (
            <>
              <Button asChild variant="ghost" size="sm" className="hidden sm:inline-flex">
                <Link to="/app">Dashboard</Link>
              </Button>
              <Button variant="glass" size="sm" onClick={signOut}>
                <LogOut aria-hidden="true" />
                Sign out / 登出
              </Button>
            </>
          ) : (
            <Button asChild variant="hero" size="sm">
              <Link to="/auth">Sign in / 登入</Link>
            </Button>
          )}
        </nav>
      </div>
    </header>
  );
}
