import React from 'react';
import { Link, NavLink } from "react-router";
import Logo from '../Logo/Logo';
import useAuth from '../../hooks/useAuth';
import Swal from 'sweetalert2';
import { IoNotifications } from "react-icons/io5";

const Header = () => {
  const { user, logOut } = useAuth();


  const handleLogOut = () =>{
    logOut()
      .then(() => {
        Swal.fire({
          title: "Log out successful",
          text: "You successfully log out",
          icon: "success"
        })
        localStorage.removeItem("token");
      })
      .catch(err =>
      {
        Swal.fire({
          title: err.message,
          icon: "error"
        })
      });
  };





  // ✅ Navigation links in one array
  const navItems = (
    <>
      <li>
        <NavLink to="/">Home</NavLink>
      </li>
      <li>
        <NavLink to="/meals">Meals</NavLink>
      </li>
      <li>
        <NavLink to="/upcoming-meals">Upcoming Meals</NavLink>
      </li>
    </>
  );

  return (
    <nav className="navbar max-w-7xl mx-auto">
      {/* Start */}
      <div className="navbar-start">
        {/* Mobile burger */}
        <div className="dropdown">
          <label tabIndex={0} className="btn btn-ghost lg:hidden">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h16M4 18h16"
              />
            </svg>
          </label>
          <ul
            tabIndex={0}
            className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52 text-lg font-medium"
          >
            {navItems}
          </ul>
        </div>
        <Logo />
      </div>

      {/* Center */}
      <div className="navbar-center hidden lg:flex">
        <ul className="menu menu-horizontal px-1 text-lg font-medium">
          {navItems}
        </ul>
      </div>

      {/* End */}
      <div className="navbar-end space-x-4">
        <button className="btn btn-ghost btn-circle hidden sm:block">
          <div className="indicator">
            <span className="indicator-item status status-primary"></span>
            <IoNotifications size={20}/>
          </div>
        </button>

        {!user ? (
          <Link to="/login" className="btn btn-primary">
            Join Us
          </Link>
        ) : (
          <div className="dropdown dropdown-end">
            <label tabIndex={0} className="btn btn-ghost btn-circle avatar">
              <div className="w-10 rounded-full">
                {user?.photoURL ? (
                  <img src={user.photoURL} alt="Profile" />
                ) : (
                  <img
                    src="https://cdn-icons-png.flaticon.com/512/149/149071.png"
                    alt="Profile"
                  />
                )}
              </div>
            </label>
            <ul
              tabIndex={0}
              className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52"
            >
              <li>
                <span className="font-bold">{user.displayName}</span>
              </li>
              <li>
                <Link to="/dashboard">Dashboard</Link>
              </li>
              <li>
                <button onClick={handleLogOut}>Logout</button>
              </li>
            </ul>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Header;