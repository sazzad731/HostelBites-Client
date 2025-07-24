import React from "react";
import { FcGoogle } from "react-icons/fc";
import { FaFacebook } from "react-icons/fa6";
import useAuth from "../../hooks/useAuth";
import useAxiosSecure from "../../hooks/useAxiosSecure";
import Swal from "sweetalert2";

const AuthButtons = () => {
  const { signInWithGoogle } = useAuth();
  const axiosSecure = useAxiosSecure();

  const handleGoogleSignIn = () => {
    signInWithGoogle()
      .then((result) => {
        const userInfo = {
          name: result.user.displayName,
          email: result.user.email,
          role: "student",
          badge: "Bronze",
        };

        axiosSecure.post("/users", userInfo)
          .then((res) => {
            if (res.data.insertedId) {
              Swal.fire({
                title: "Account Created Successful",
                icon: "success",
              });
            }
          }).catch((err) => {
            console.log(err)
          });
      })
      .catch((error) => {
        Swal.fire({
          title: error.message,
          text: error,
          icon: "error"
        })
      });
  };

  return (
    <div className="grid sm:grid-cols-2 gap-4">
      <button
        onClick={handleGoogleSignIn}
        className="flex w-full items-center justify-center gap-3 rounded-lg border border-slate-300 bg-white px-4 py-2.5 text-sm font-semibold text-slate-700 shadow-sm hover:bg-slate-50 transition-colors cursor-pointer"
      >
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
