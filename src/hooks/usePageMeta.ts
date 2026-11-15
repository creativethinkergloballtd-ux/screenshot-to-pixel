import { useEffect } from "react";

type PageMeta = {
  title: string;
  description?: string;
  ogTitle?: string;
  ogDescription?: string;
  twitterCard?: "summary" | "summary_large_image";
  robots?: string;
};

function setMeta(attr: "name" | "property", key: string, content: string | undefined) {
  let el = document.head.querySelector<HTMLMetaElement>(`meta[${attr}="${key}"]`);
  if (content === undefined) {
    if (el?.dataset["pageMeta"] === "true") el.remove();
    return;
  }
  if (!el) {
    el = document.createElement("meta");
    el.setAttribute(attr, key);
    el.dataset["pageMeta"] = "true";
    document.head.appendChild(el);
  }
  el.setAttribute("content", content);
}

// Per-page <title>/<meta> for the client-rendered SPA (replaces TanStack's route head()).
export function usePageMeta(meta: PageMeta) {
  const { title, description, ogTitle, ogDescription, twitterCard, robots } = meta;
  useEffect(() => {
    document.title = title;
    setMeta("name", "description", description);
    setMeta("property", "og:title", ogTitle ?? title);
    setMeta("property", "og:description", ogDescription ?? description);
    setMeta("name", "twitter:card", twitterCard);
    setMeta("name", "robots", robots);
  }, [title, description, ogTitle, ogDescription, twitterCard, robots]);
}
