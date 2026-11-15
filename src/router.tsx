import { createBrowserRouter, type RouteObject } from "react-router";

import { NotFound, RootErrorBoundary, RootLayout } from "./routes/__root";
import { AppDashboard } from "./routes/_authenticated/app";
import { AUTHENTICATED_ROUTE_ID, AuthenticatedLayout, requireUser } from "./routes/_authenticated/route";
import { SignInPage } from "./routes/auth";
import { Landing } from "./routes/index";
import { SignUpPage } from "./routes/signup";

export const routes: RouteObject[] = [
  {
    id: "root",
    element: <RootLayout />,
    errorElement: <RootErrorBoundary />,
    children: [
      { index: true, element: <Landing /> },
      { path: "auth", element: <SignInPage /> },
      { path: "signup", element: <SignUpPage /> },
      {
        id: AUTHENTICATED_ROUTE_ID,
        loader: requireUser,
        element: <AuthenticatedLayout />,
        children: [{ path: "app", element: <AppDashboard /> }],
      },
      { path: "*", element: <NotFound /> },
    ],
  },
];

export const router = createBrowserRouter(routes);
