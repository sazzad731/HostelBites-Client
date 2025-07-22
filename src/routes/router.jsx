import { createBrowserRouter } from "react-router";
import RootLayout from "../layouts/RootLayout";
import Home from '../pages/Home/Home'
import MealDetail from "../pages/MealDetail/MealDetail";
import Login from "../pages/Login/Login";
export const router = createBrowserRouter([
  {
    path: "/",
    Component: RootLayout,
    children: [
      {
        index: true,
        Component: Home
      },
      {
        path: "/meal/:id",
        Component: MealDetail,
      },
      {
        path: "/login",
        Component: Login
      }
    ]
  }
]);