import useAuth from "../../../../hooks/useAuth";
import useDbUser from "../../../../hooks/useDbUser";

const AdminProfile = () => {
  const { user } = useAuth();
  const { role, numberOfMeal } = useDbUser();

  return (
    <div className="">
      {/* Profile Header */}
      <div className="flex flex-col md:flex-row items-center gap-6 mb-8">
        <div className="avatar">
          <div className="w-32 rounded-full ring ring-primary ring-offset-base-100 ring-offset-2">
            <img
              src={
                user?.photoURL ||
                "https://cdn-icons-png.flaticon.com/512/149/149071.png"
              }
              alt="Admin Avatar"
            />
          </div>
        </div>
        <div>
          <h2 className="text-3xl font-bold text-center md:text-left">
            {user?.displayName || "Admin"}
          </h2>
          <div className="flex items-center gap-2 mt-2 justify-center md:justify-start">
            <span className="badge badge-primary badge-lg capitalize">
              {role}
            </span>
          </div>
        </div>
      </div>

      {/* Main Content */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        {/* Personal Info + Actions */}
        <div className="lg:col-span-2 space-y-6">
          {/* Personal Info Card */}
          <div className="card bg-base-100 shadow-md transition-shadow hover:shadow-lg">
            <div className="card-body">
              <h3 className="card-title">Personal Information</h3>
              <div className="divide-y divide-base-200">
                <div className="py-3 grid grid-cols-3 gap-4 items-center">
                  <dt className="text-sm font-medium text-base-content/70">
                    Email
                  </dt>
                  <dd className="text-sm text-base-content col-span-2">
                    {user?.email || "N/A"}
                  </dd>
                </div>
                <div className="py-3 grid grid-cols-3 gap-4 items-center">
                  <dt className="text-sm font-medium text-base-content/70">
                    Display Name
                  </dt>
                  <dd className="text-sm text-base-content col-span-2">
                    {user?.displayName || "N/A"}
                  </dd>
                </div>
                <div className="py-3 grid grid-cols-3 gap-4 items-center">
                  <dt className="text-sm font-medium text-base-content/70">
                    Role
                  </dt>
                  <dd className="text-sm text-base-content col-span-2 capitalize">
                    {role}
                  </dd>
                </div>
                <div className="py-3 grid grid-cols-3 gap-4 items-center">
                  <dt className="text-sm font-medium text-base-content/70">
                    Total Meals Added
                  </dt>
                  <dd className="text-sm text-base-content col-span-2">
                    {numberOfMeal}
                  </dd>
                </div>
              </div>
            </div>
          </div>

          {/* Actions Card */}
          <div className="card bg-base-100 shadow-md transition-shadow hover:shadow-lg">
            <div className="card-body">
              <h3 className="card-title">Actions</h3>
              <div className="flex flex-col sm:flex-row gap-4 mt-2">
                <button className="btn btn-primary flex-1">Edit Profile</button>
                <button className="btn btn-outline flex-1">
                  Change Password
                </button>
                <button className="btn btn-error btn-outline flex-1">
                  Log Out
                </button>
              </div>
            </div>
          </div>
        </div>

        {/* Stats Sidebar */}
        <div className="space-y-6">
          <div className="stats stats-vertical shadow-md w-full transition-shadow hover:shadow-lg">
            <div className="stat">
              <div className="stat-title">Users Managed</div>
              <div className="stat-value text-primary">250</div>
              <div className="stat-desc">↗︎ 12 (5%)</div>
            </div>
            <div className="stat">
              <div className="stat-title">Active Subscriptions</div>
              <div className="stat-value text-primary">180</div>
              <div className="stat-desc">↗︎ 25 (16%)</div>
            </div>
            <div className="stat">
              <div className="stat-title">Pending Orders</div>
              <div className="stat-value">15</div>
              <div className="stat-desc">↘︎ 3 (18%)</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AdminProfile;
