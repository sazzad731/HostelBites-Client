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
import AdminProfile from "../pages/Dashboard/AdminPages/AdminProfile/AdminProfile";
import AdminRoute from "./AdminRoute";
import DashboardRedirect from "./DashboardRedirect";
import ManageUsers from "../pages/Dashboard/AdminPages/ManageUsers/ManageUsers";
import AddMeals from "../pages/Dashboard/AdminPages/AddMeals/AddMeals";
import AllMeals from "../pages/Dashboard/AdminPages/AllMeals/AllMeals";
import ServeMeals from "../pages/Dashboard/AdminPages/ServeMeals/ServeMeals";
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
        index: true,
        element: <DashboardRedirect />,
      },
      {
        path: "my-profile",
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
        element: (
          <PrivateRoute>
            <PaymentHistory />
          </PrivateRoute>
        ),
      },

      // admin routes
      {
        path: "admin-profile",
        element: (
          <PrivateRoute>
            <AdminRoute>
              <AdminProfile />
            </AdminRoute>
          </PrivateRoute>
        ),
      },
      {
        path: "manage-users",
        element: (
          <PrivateRoute>
            <AdminRoute>
              <ManageUsers />
            </AdminRoute>
          </PrivateRoute>
        ),
      },
      {
        path: "add-meals",
        element: (
          <PrivateRoute>
            <AdminRoute>
              <AddMeals />
            </AdminRoute>
          </PrivateRoute>
        ),
      },
      {
        path: "all-meals",
        element: (
          <PrivateRoute>
            <AdminRoute>
              <AllMeals />
            </AdminRoute>
          </PrivateRoute>
        ),
      },
      {
        path: "serve-meals",
        element: (
          <PrivateRoute>
            <AdminRoute>
              <ServeMeals/>
            </AdminRoute>
          </PrivateRoute>
        ),
      },
    ],
  },
  {
    path: "*",
    element: (
      <div className="w-full min-h-screen flex items-center justify-center">
        <h3 className="text-3xl font-bold">404</h3>
      </div>
    ),
  },
]);