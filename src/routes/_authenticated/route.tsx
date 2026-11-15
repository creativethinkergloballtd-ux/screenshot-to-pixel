import type { User } from "@supabase/supabase-js";
import { Outlet, redirect, useRouteLoaderData } from "react-router";

import { supabase } from "@/integrations/supabase/client";

export const AUTHENTICATED_ROUTE_ID = "_authenticated";

// Session lives in browser storage, so this gate runs client-side only.
export async function requireUser(): Promise<{ user: User }> {
  const { data } = await supabase.auth.getUser();
  if (!data.user) throw redirect("/auth");
  return { user: data.user };
}

export function AuthenticatedLayout() {
  return <Outlet />;
}

export function useAuthenticatedUser(): User {
  const data = useRouteLoaderData(AUTHENTICATED_ROUTE_ID) as { user: User } | undefined;
  if (!data) throw new Error("useAuthenticatedUser must be used under the _authenticated route");
  return data.user;
}
