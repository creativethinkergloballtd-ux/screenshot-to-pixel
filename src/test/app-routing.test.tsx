import { matchRoutes } from "react-router";
import { describe, expect, it } from "vitest";

import { routes } from "@/router";

// Match routes without running loaders or rendering: loaders may need a network
// the test run lacks.
function leafRoute(path: string) {
  return matchRoutes(routes, path)?.at(-1)?.route;
}

describe("App routing", () => {
  it("matches a page for / instead of falling back to not found", () => {
    expect(leafRoute("/")?.index).toBe(true);
  });

  it("serves the dashboard at /app behind the sign-in gate", () => {
    const matches = matchRoutes(routes, "/app") ?? [];
    expect(matches.at(-1)?.route.path).toBe("app");
    expect(matches.some((m) => m.route.id === "_authenticated")).toBe(true);
  });

  it("has separate sign-in and sign-up pages", () => {
    expect(leafRoute("/auth")?.path).toBe("auth");
    expect(leafRoute("/signup")?.path).toBe("signup");
  });

  it("falls back to the not-found page for unknown paths", () => {
    expect(leafRoute("/does-not-exist")?.path).toBe("*");
  });
});
