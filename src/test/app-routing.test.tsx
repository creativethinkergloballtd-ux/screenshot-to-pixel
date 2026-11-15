import { QueryClient } from "@tanstack/react-query";
import { createRouter, rootRouteId } from "@tanstack/react-router";
import { describe, expect, it } from "vitest";

import { routeTree } from "@/routeTree.gen";

// Match routes without running loaders or rendering: loaders may need a server or
// network the test run lacks, and jsdom never loads the stylesheets React waits on.
function leafRouteId(path: string) {
  const router = createRouter({ routeTree, context: { queryClient: new QueryClient() } });
  return router.matchRoutes(path).at(-1)?.routeId;
}

describe("App routing", () => {
  it("matches a page for / instead of falling back to not found", () => {
    expect(leafRouteId("/")).not.toBe(rootRouteId);
  });

  it("serves the dashboard at /app behind the sign-in gate", () => {
    expect(leafRouteId("/app")).toBe("/_authenticated/app");
  });

  it("has separate sign-in and sign-up pages", () => {
    expect(leafRouteId("/auth")).toBe("/auth");
    expect(leafRouteId("/signup")).toBe("/signup");
  });
});
