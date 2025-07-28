import { useState } from "react";
import { Link, Outlet } from "react-router";
import { FiMenu, FiX } from "react-icons/fi";
import useAuth from "../hooks/useAuth";
import Logo from "../components/Logo/Logo";
import { FaConciergeBell, FaMoneyCheckAlt, FaStar, FaUserCircle } from "react-icons/fa";

const DashboardLayout = () => {
  const { user } = useAuth();
  const [ open, setOpen ] = useState(false);

  const menuItems = [
    { name: "My Profile", path: "/dashboard/profile", icon: <FaUserCircle /> },
    {
      name: "Requested Meals",
      path: "/dashboard/requested-meals",
      icon: <FaConciergeBell />,
    },
    { name: "My Reviews", path: "/dashboard/my-reviews", icon: <FaStar /> },
    {
      name: "Payment History",
      path: "/dashboard/payment-history",
      icon: <FaMoneyCheckAlt />,
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
          <Logo/>
          <button className="lg:hidden" onClick={() => setOpen(false)}>
            <FiX size={24} />
          </button>
        </div>
        <ul className="space-y-2">
          {menuItems.map((item) => (
            <li key={item.name}>
              <Link
                to={item.path}
                className="flex items-center gap-2 p-2 rounded hover:bg-base-300"
              >
                {item.icon}
                {item.name}
              </Link>
            </li>
          ))}
        </ul>
      </div>

      {/* Content */}
      <div className="flex-1 lg:ml-64">
        {/* Top navbar */}
        <div className="bg-base-100 shadow px-4 py-3 flex items-center justify-between lg:justify-end">
          <button className="lg:hidden" onClick={() => setOpen(true)}>
            <FiMenu size={24} />
          </button>
          <div className="text-sm font-medium">Welcome, {user?.displayName}</div>
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
