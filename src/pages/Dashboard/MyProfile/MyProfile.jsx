import React, { useState } from "react";
import { BadgeCheck } from "lucide-react";
import useAuth from "../../../hooks/useAuth";
import useDbUser from "../../../hooks/useDbUser";
import EditProfileModal from "./EditProfileModal";

const MyProfile = () => {
  const [isOpen, setIsOpen] = useState(false);
  const { user } = useAuth();
  const { badge, role } = useDbUser(); // assuming you also have "role"

  // Badge color class mapping
  const badgeStyles = {
    Bronze: "badge bg-amber-500 text-white",
    Silver: "badge bg-gray-400 text-white",
    Gold: "badge bg-yellow-500 text-black",
    Platinum: "badge bg-blue-400 text-white",
  };

  return (
    <div className="">
      {/* Top Profile Info */}
      <div className="flex flex-col md:flex-row items-center gap-6 mb-8">
        <div className="avatar">
          <div className="w-32 rounded-full ring ring-primary ring-offset-base-100 ring-offset-2">
            {user?.photoURL ? (
              <img src={user.photoURL} alt="Profile" />
            ) : (
              <img
                src="https://cdn-icons-png.flaticon.com/512/149/149071.png"
                alt="Default avatar"
              />
            )}
          </div>
        </div>
        <div>
          <h1 className="text-4xl font-bold text-base-content text-center md:text-left">
            {user?.displayName || "Unnamed User"}
          </h1>
          <div className="flex items-center justify-center md:justify-start gap-2 mt-2">
            <span
              className={`${
                badgeStyles[badge] || "badge badge-neutral"
              } badge-lg gap-1`}
            >
              <BadgeCheck size={16} />
              {badge} Badge
            </span>
            {role && (
              <span className="badge badge-primary badge-lg capitalize">
                {role}
              </span>
            )}
          </div>
        </div>
      </div>

      {/* Grid: Overview + Side panels */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        {/* Profile Overview */}
        <div className="lg:col-span-2 card bg-primary/5 shadow-md">
          <div className="card-body">
            <h2 className="card-title text-2xl mb-4">Profile Overview</h2>
            <div className="space-y-4">
              <div className="flex flex-col sm:flex-row">
                <span className="font-semibold w-32">Full Name:</span>
                <span className="text-base-content/80">
                  {user?.displayName || "N/A"}
                </span>
              </div>
              <div className="divider my-0" />
              <div className="flex flex-col sm:flex-row">
                <span className="font-semibold w-32">Email:</span>
                <span className="text-base-content/80">{user?.email}</span>
              </div>
              <div className="divider my-0" />
              <div className="flex flex-col sm:flex-row">
                <span className="font-semibold w-32">Phone Number:</span>
                <span className="text-base-content/80">+1 (555) 123-4567</span>
              </div>
              <div className="divider my-0" />
              <div className="flex flex-col sm:flex-row">
                <span className="font-semibold w-32">Address:</span>
                <span className="text-base-content/80">
                  123 Main Street, Anytown, USA
                </span>
              </div>
              <div className="divider my-0" />
              <div className="flex flex-col sm:flex-row">
                <span className="font-semibold w-32">Joined Date:</span>
                <span className="text-base-content/80">October 21, 2021</span>
              </div>
            </div>
          </div>
        </div>

        {/* Sidebar */}
        <div className="space-y-8">
          {/* Stats */}
          <div className="card bg-primary/5 shadow-md">
            <div className="card-body">
              <h2 className="card-title text-2xl mb-4">Stats</h2>
              <div className="space-y-4">
                <div className="flex items-center gap-4 p-4 bg-base-100 rounded-lg">
                  <div className="p-2 bg-primary/20 rounded-full">
                    <svg
                      className="h-6 w-6 text-primary"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2m-6 9l2 2 4-4"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"
                      />
                    </svg>
                  </div>
                  <div>
                    <div className="font-bold text-xl">15</div>
                    <div className="text-sm text-base-content/70">
                      Total Orders
                    </div>
                  </div>
                </div>

                <div className="flex items-center gap-4 p-4 bg-base-100 rounded-lg">
                  <div className="p-2 bg-success/20 rounded-full">
                    <svg
                      className="h-6 w-6 text-success"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M5 13l4 4L19 7"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"
                      />
                    </svg>
                  </div>
                  <div>
                    <div className="font-bold text-xl">{badge}</div>
                    <div className="text-sm text-base-content/70">
                      Active Subscription
                    </div>
                  </div>
                </div>

                <div className="flex items-center gap-4 p-4 bg-base-100 rounded-lg">
                  <div className="p-2 bg-warning/20 rounded-full">
                    <svg
                      className="h-6 w-6 text-warning"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"
                      />
                    </svg>
                  </div>
                  <div>
                    <div className="font-bold text-xl">20</div>
                    <div className="text-sm text-base-content/70">
                      Saved Favorites
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Account Settings */}
          <div className="card bg-primary/5 shadow-md">
            <div className="card-body">
              <h2 className="card-title text-2xl mb-4">Account Settings</h2>
              <div className="flex flex-col gap-4">
                <button
                  onClick={() => setIsOpen(true)}
                  className="btn btn-primary"
                >
                  Edit Profile
                </button>
                <button className="btn btn-outline btn-primary">
                  Change Password
                </button>
                <button className="btn btn-error btn-outline">Log Out</button>
              </div>
            </div>
          </div>

          {/* End Account Settings */}
        </div>
      </div>
      {/* Modal Component */}
      <EditProfileModal
        profile={user}
        // setProfile={setProfile}
        isOpen={isOpen}
        setIsOpen={setIsOpen}
      />
    </div>
  );
};

export default MyProfile;
