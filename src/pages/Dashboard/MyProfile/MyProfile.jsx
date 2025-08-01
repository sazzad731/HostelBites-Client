import React from "react";
import { BadgeCheck } from "lucide-react";
import useAuth from "../../../hooks/useAuth";
import useDbUser from "../../../hooks/useDbUser";

const MyProfile = () => {
  const { user } = useAuth();
  const { badge } = useDbUser();
  

  // Badge color class mapping based on role
  const badgeStyles = {
    Bronze: "badge bg-amber-500 text-white",
    Silver: "badge bg-gray-400 text-white",
    Gold: "badge bg-yellow-500 text-black",
    Platinum: "badge bg-blue-400 text-white",
  };

  return (
    <div className="p-6 max-w-3xl mx-auto">
      <div className="bg-base-100 shadow-xl rounded-2xl p-6 text-center">
        <div className="avatar mb-4">
          <div className="w-24 h-24 rounded-full ring ring-primary ring-offset-base-100 ring-offset-2 mx-auto">
            {user?.photoURL ? (
              <img src={user.photoURL} alt="User avatar" />
            ) : (
              <img
                src="https://cdn-icons-png.flaticon.com/512/149/149071.png"
                alt="User avatar"
              />
            )}
          </div>
        </div>

        <h2 className="text-2xl font-bold">{user?.displayName}</h2>
        <p className="text-gray-500">{user?.email}</p>

        <div className="mt-4">
          <div
            className={`${badgeStyles[badge]} gap-1 text-sm px-4 py-2`}
          >
            <BadgeCheck size={16} />
            {badge} Badge
          </div>
        </div>
      </div>
    </div>
  );
};

export default MyProfile;
