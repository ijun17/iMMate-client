import { CrewPage } from '@/pages/CrewPage'
import { createFileRoute } from '@tanstack/react-router'

export const Route = createFileRoute('/crew/$crewId/')({
  component: CrewPage,
})
