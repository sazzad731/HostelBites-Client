import React from 'react';
import { FcGoogle } from "react-icons/fc";
import { FaFacebook } from "react-icons/fa6";

const AuthButtons = () => {
  return (
    <div className="grid sm:grid-cols-2 gap-4">
      <button className="flex w-full items-center justify-center gap-3 rounded-lg border border-slate-300 bg-white px-4 py-2.5 text-sm font-semibold text-slate-700 shadow-sm hover:bg-slate-50 transition-colors cursor-pointer">
        <FcGoogle size={22} />
        <span>Google</span>
      </button>
      <button className="flex w-full items-center justify-center gap-3 rounded-lg border border-slate-300 bg-white px-4 py-2.5 text-sm font-semibold text-slate-700 shadow-sm hover:bg-slate-50 transition-colors cursor-pointer">
        <FaFacebook className="text-[#1877F2]" size={20} />
        <span>Facebook</span>
      </button>
    </div>
  );
};

export default AuthButtons;