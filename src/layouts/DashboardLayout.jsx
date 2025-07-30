import { useState } from "react";
import { Link, Outlet, useLocation } from "react-router";
import { FiMenu, FiX } from "react-icons/fi";
import useAuth from "../hooks/useAuth";
import Logo from "../components/Logo/Logo";
import { FaConciergeBell, FaMoneyCheckAlt, FaStar, FaUserCircle } from "react-icons/fa";
import {
  FaUserShield,
  FaUsers,
  FaUtensils,
  FaMoneyBillWave,
  FaClipboardList,
} from "react-icons/fa";
import useUserRole from "../hooks/useUserRole";

const DashboardLayout = () => {
  const { user } = useAuth();
  const [ open, setOpen ] = useState(false);
  const { role } = useUserRole();
  const location = useLocation();
  const locationPathName = location.pathname.replace("/dashboard/", "");

  const menuItems = [
    { name: "My Profile", path: "my-profile", icon: <FaUserCircle /> },
    {
      name: "Requested Meals",
      path: "requested-meal",
      icon: <FaConciergeBell />,
    },
    { name: "My Reviews", path: "my-reviews", icon: <FaStar /> },
    {
      name: "Payment History",
      path: "payment-history",
      icon: <FaMoneyCheckAlt />,
    },
  ];

  const adminMenuItems = [
    {
      name: "Admin Profile",
      path: "admin-profile",
      icon: <FaUserShield />,
    },
    {
      name: "Manage Users",
      path: "manage-users",
      icon: <FaUsers />,
    },
    {
      name: "Add Meals",
      path: "add-meals",
      icon: <FaUtensils />,
    },
    {
      name: "All Meals",
      path: "all-meals",
      icon: <FaUtensils />,
    },
    {
      name: "Serve Meals",
      path: "serve-meals",
      icon: <FaUtensils />,
    },
    {
      name: "Payment History",
      path: "all-payment-history",
      icon: <FaMoneyBillWave />,
    },
    {
      name: "Meal Requests",
      path: "all-meal-requests",
      icon: <FaClipboardList />,
    },
  ];

  return (
    <div className="min-h-screen flex bg-base-200">
      {/* Sidebar */}
      <div
        className={`fixed z-20 inset-y-0 left-0 w-64 bg-base-100 p-4 shadow-lg transform ${
          open ? "translate-x-0" : "-translate-x-full"
        } transition-transform duration-300 lg:translate-x-0`}
      >
        <div className="flex justify-between items-center mb-10">
          <Logo />
          <button className="lg:hidden" onClick={() => setOpen(false)}>
            <FiX size={24} />
          </button>
        </div>
        <ul className="space-y-2">
          {role === "admin"
            ? adminMenuItems.map((item) => (
                <li key={item.name}>
                  <Link
                    to={item.path}
                    className={`flex items-center gap-2 p-2 rounded hover:bg-base-300 ${
                      item.path === locationPathName && "bg-base-300"
                    }`}
                  >
                    {item.icon}
                    {item.name}
                  </Link>
                </li>
              ))
            : menuItems.map((item) => (
                <li key={item.name}>
                  <Link
                    to={item.path}
                    className={`flex items-center gap-2 p-2 rounded hover:bg-base-300 ${
                      item.path === locationPathName && "bg-base-300"
                    }`}
                  >
                    {item.icon}
                    {item.name}
                  </Link>
                </li>
              ))}
        </ul>
      </div>

      {/* Content */}
      <div className="w-full lg:ml-64">
        {/* Top navbar */}
        <div className="bg-base-100 shadow px-4 py-3 flex items-center justify-between lg:justify-end">
          <button className="lg:hidden" onClick={() => setOpen(true)}>
            <FiMenu size={24} />
          </button>
          <div className="text-sm font-medium">
            Welcome, {user?.displayName}
          </div>
        </div>

        {/* Main Content */}
        <div className="p-4">
          <Outlet />
        </div>
      </div>
    </div>
  );
};

export default DashboardLayout;
