import { createFileRoute, redirect } from "@tanstack/react-router";

export const Route = createFileRoute("/contact")({
  staticData: { sitemap: false },
  beforeLoad: () => {
    throw redirect({ to: "/about", replace: true });
  },
});
