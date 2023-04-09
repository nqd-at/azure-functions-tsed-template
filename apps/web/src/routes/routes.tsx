import { DefaultLayout } from "../layouts/DefaultLayout";
import { ErrorBoundary } from "../layouts/ErrorBoundary";
// import { RouteObject } from "react-router-dom";
// export const routes: RouteObject[] = [
export const routes = [
  {
    path: "/",
    element: <DefaultLayout />,
    children: [
      {
        index: true,
        lazy: () => import("../pages/HomePage"),
        errorElement: <ErrorBoundary />,
      },
      {
        path: "about",
        lazy: () => import("../pages/AboutPage"),
        errorElement: <ErrorBoundary />,
      },
    ],
  },
] as const;
