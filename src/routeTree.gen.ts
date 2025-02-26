/* eslint-disable */

// @ts-nocheck

// noinspection JSUnusedGlobalSymbols

// This file was automatically generated by TanStack Router.
// You should NOT make any changes in this file as it will be overwritten.
// Additionally, you should also exclude this file from your linter and/or formatter to prevent it from being checked or modified.

// Import Routes

import { Route as rootRoute } from './routes/__root'
import { Route as UserImport } from './routes/user'
import { Route as IndexImport } from './routes/index'
import { Route as CrewCrewIdIndexImport } from './routes/crew/$crewId/index'
import { Route as CrewCrewIdAgendaAgendaIdImport } from './routes/crew/$crewId/agenda/$agendaId'

// Create/Update Routes

const UserRoute = UserImport.update({
  id: '/user',
  path: '/user',
  getParentRoute: () => rootRoute,
} as any)

const IndexRoute = IndexImport.update({
  id: '/',
  path: '/',
  getParentRoute: () => rootRoute,
} as any)

const CrewCrewIdIndexRoute = CrewCrewIdIndexImport.update({
  id: '/crew/$crewId/',
  path: '/crew/$crewId/',
  getParentRoute: () => rootRoute,
} as any)

const CrewCrewIdAgendaAgendaIdRoute = CrewCrewIdAgendaAgendaIdImport.update({
  id: '/crew/$crewId/agenda/$agendaId',
  path: '/crew/$crewId/agenda/$agendaId',
  getParentRoute: () => rootRoute,
} as any)

// Populate the FileRoutesByPath interface

declare module '@tanstack/react-router' {
  interface FileRoutesByPath {
    '/': {
      id: '/'
      path: '/'
      fullPath: '/'
      preLoaderRoute: typeof IndexImport
      parentRoute: typeof rootRoute
    }
    '/user': {
      id: '/user'
      path: '/user'
      fullPath: '/user'
      preLoaderRoute: typeof UserImport
      parentRoute: typeof rootRoute
    }
    '/crew/$crewId/': {
      id: '/crew/$crewId/'
      path: '/crew/$crewId'
      fullPath: '/crew/$crewId'
      preLoaderRoute: typeof CrewCrewIdIndexImport
      parentRoute: typeof rootRoute
    }
    '/crew/$crewId/agenda/$agendaId': {
      id: '/crew/$crewId/agenda/$agendaId'
      path: '/crew/$crewId/agenda/$agendaId'
      fullPath: '/crew/$crewId/agenda/$agendaId'
      preLoaderRoute: typeof CrewCrewIdAgendaAgendaIdImport
      parentRoute: typeof rootRoute
    }
  }
}

// Create and export the route tree

export interface FileRoutesByFullPath {
  '/': typeof IndexRoute
  '/user': typeof UserRoute
  '/crew/$crewId': typeof CrewCrewIdIndexRoute
  '/crew/$crewId/agenda/$agendaId': typeof CrewCrewIdAgendaAgendaIdRoute
}

export interface FileRoutesByTo {
  '/': typeof IndexRoute
  '/user': typeof UserRoute
  '/crew/$crewId': typeof CrewCrewIdIndexRoute
  '/crew/$crewId/agenda/$agendaId': typeof CrewCrewIdAgendaAgendaIdRoute
}

export interface FileRoutesById {
  __root__: typeof rootRoute
  '/': typeof IndexRoute
  '/user': typeof UserRoute
  '/crew/$crewId/': typeof CrewCrewIdIndexRoute
  '/crew/$crewId/agenda/$agendaId': typeof CrewCrewIdAgendaAgendaIdRoute
}

export interface FileRouteTypes {
  fileRoutesByFullPath: FileRoutesByFullPath
  fullPaths: '/' | '/user' | '/crew/$crewId' | '/crew/$crewId/agenda/$agendaId'
  fileRoutesByTo: FileRoutesByTo
  to: '/' | '/user' | '/crew/$crewId' | '/crew/$crewId/agenda/$agendaId'
  id:
    | '__root__'
    | '/'
    | '/user'
    | '/crew/$crewId/'
    | '/crew/$crewId/agenda/$agendaId'
  fileRoutesById: FileRoutesById
}

export interface RootRouteChildren {
  IndexRoute: typeof IndexRoute
  UserRoute: typeof UserRoute
  CrewCrewIdIndexRoute: typeof CrewCrewIdIndexRoute
  CrewCrewIdAgendaAgendaIdRoute: typeof CrewCrewIdAgendaAgendaIdRoute
}

const rootRouteChildren: RootRouteChildren = {
  IndexRoute: IndexRoute,
  UserRoute: UserRoute,
  CrewCrewIdIndexRoute: CrewCrewIdIndexRoute,
  CrewCrewIdAgendaAgendaIdRoute: CrewCrewIdAgendaAgendaIdRoute,
}

export const routeTree = rootRoute
  ._addFileChildren(rootRouteChildren)
  ._addFileTypes<FileRouteTypes>()

/* ROUTE_MANIFEST_START
{
  "routes": {
    "__root__": {
      "filePath": "__root.tsx",
      "children": [
        "/",
        "/user",
        "/crew/$crewId/",
        "/crew/$crewId/agenda/$agendaId"
      ]
    },
    "/": {
      "filePath": "index.tsx"
    },
    "/user": {
      "filePath": "user.tsx"
    },
    "/crew/$crewId/": {
      "filePath": "crew/$crewId/index.tsx"
    },
    "/crew/$crewId/agenda/$agendaId": {
      "filePath": "crew/$crewId/agenda/$agendaId.tsx"
    }
  }
}
ROUTE_MANIFEST_END */
