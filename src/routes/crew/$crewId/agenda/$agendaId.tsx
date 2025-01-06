import CrewAgendaPage from "@/pages/CrewAgendaPage";
import { createFileRoute } from "@tanstack/react-router";

export const Route = createFileRoute("/crew/$crewId/agenda/$agendaId")({
  component: CrewAgendaPage,
});
