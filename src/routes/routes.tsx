/* eslint-disable react-refresh/only-export-components */
import { lazy } from "react";

const HomePage = lazy(() => import("../pages/homePage"));

export const routes = [
  {
    path: "/",
    element: <HomePage />,
    layout: "home",
  },
];
