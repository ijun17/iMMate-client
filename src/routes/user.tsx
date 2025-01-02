import { MyPage } from "@/pages/MyPage";
import { createFileRoute } from "@tanstack/react-router";

export const Route = createFileRoute("/user")({
  component: MyPage,
});
