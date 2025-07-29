import { createBrowserRouter } from "react-router";
import RootLayout from "../layouts/RootLayout";
import Home from '../pages/Home/Home'
import MealDetail from "../pages/MealDetail/MealDetail";
import Login from "../pages/Login/Login";
import Register from "../pages/Register/Register";
import Meals from "../pages/Meals/Meals";
import PrivateRoute from "../routes/PrivateRoute"
import Checkout from "../pages/Checkout/Checkout";
import DashboardLayout from "../layouts/DashboardLayout";
import MyProfile from "../pages/Dashboard/MyProfile/MyProfile";
import RequestedMeals from "../pages/Dashboard/RequestedMeals/RequestedMeals";
import MyReviews from "../pages/Dashboard/MyReviews/MyReviews";
import PaymentHistory from "../pages/Dashboard/PaymentHistory/PaymentHistory";
export const router = createBrowserRouter([
  {
    path: "/",
    Component: RootLayout,
    children: [
      {
        index: true,
        Component: Home,
      },
      {
        path: "/meals",
        Component: Meals,
      },
      {
        path: "/meal/:id",
        Component: MealDetail,
      },
      {
        path: "/checkout/:packageId",
        element: (
          <PrivateRoute>
            <Checkout />
          </PrivateRoute>
        ),
      },
      {
        path: "/login",
        Component: Login,
      },
      {
        path: "/register",
        Component: Register,
      },
    ],
  },
  {
    path: "/dashboard",
    element: (
      <PrivateRoute>
        <DashboardLayout />
      </PrivateRoute>
    ),
    children: [
      {
        path: "/dashboard",
        element: (
          <PrivateRoute>
            <MyProfile />
          </PrivateRoute>
        ),
      },
      {
        path: "requested-meal",
        element: (
          <PrivateRoute>
            <RequestedMeals />
          </PrivateRoute>
        ),
      },
      {
        path: "my-reviews",
        element: (
          <PrivateRoute>
            <MyReviews />
          </PrivateRoute>
        ),
      },
      {
        path: "payment-history",
        element: <PrivateRoute><PaymentHistory/></PrivateRoute>
      },
    ],
  },
]);