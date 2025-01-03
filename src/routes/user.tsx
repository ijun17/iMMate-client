import { UserPage } from "@/pages/UserPage";
import { createFileRoute } from "@tanstack/react-router";

export const Route = createFileRoute("/user")({
  component: UserPage,
});
