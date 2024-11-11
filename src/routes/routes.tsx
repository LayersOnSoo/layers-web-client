/* eslint-disable react-refresh/only-export-components */
import { lazy } from "react";
import AdminPanelLayout from "../layout/adminLayout";
import StationListPage from "@/pages/station/StationListPage";
import AddStationPage from "@/pages/station/AddStationPage";
import AssignStationPage from "@/pages/station/AssignStationPage";

const HomePage = lazy(() => import("../pages/homePage"));

// Examiner Management Pages
const ExaminerListPage = lazy(
  () => import("../pages/examiner/ExaminerListPage")
);
const AddExaminerPage = lazy(() => import("../pages/examiner/AddExaminerPage"));

const AssignExaminerPage = lazy(
  () => import("../pages/examiner/AssignExaminerPage")
);

export const routes = [
  {
    path: "/",
    element: <HomePage />,
    layout: "home",
  },
  {
    path: "/dashboard",
    element: <AdminPanelLayout />,
    layout: "dashboard",
    children: [
      {
        path: "/dashboard/examiner-management",
        element: <ExaminerListPage />,
        layout: "dashboard",
      },
      {
        path: "/dashboard/examiner-management/add",
        element: <AddExaminerPage />,
        layout: "dashboard",
      },

      {
        path: "/dashboard/examiner-management/assign",
        element: <AssignExaminerPage />,
        layout: "dashboard",
      },
      {
        path: "station-management",
        element: <StationListPage />,
      },
      {
        path: "station-management/add",
        element: <AddStationPage />,
      },
      {
        path: "station-management/assign",
        element: <AssignStationPage />,
      },
    ],
  },
];
