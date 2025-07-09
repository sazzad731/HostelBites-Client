import React from 'react';
import { Link } from 'react-router';
import logo from "../../assets/logo.svg";

const Logo = () => {
  return (
    <Link to="/" className="sm:text-2xl text-xl font-bold flex items-center gap-1.5">
      <img className="sm:w-10 w-7" src={logo} alt="Logo" /> HostelBites
    </Link>
  );
};

export default Logo;