import { createBrowserRouter } from "react-router";
import RootLayout from "../layouts/RootLayout";
import Home from '../pages/Home/Home'
import MealDetail from "../pages/MealDetail/MealDetail";
import Login from "../pages/Login/Login";
import Register from "../pages/Register/Register";
import Meals from "../pages/Meals/Meals";
import PrivateRoute from "../routes/PrivateRoute"
import Checkout from "../pages/Checkout/Checkout";
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
        path: "/meals",
        Component: Meals
      },
      {
        path: "/meal/:id",
        Component: MealDetail,
      },
      {
        path: "/checkout/:id",
        element: <PrivateRoute><Checkout/></PrivateRoute>
      },
      {
        path: "/login",
        Component: Login
      },
      {
        path: "/register",
        Component: Register
      }
    ]
  }
]);