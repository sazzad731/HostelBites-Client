import useAuth from "../../../../hooks/useAuth";
import useUserRole from "../../../../hooks/useUserRole";

const AdminProfile = () => {
  const { user } = useAuth();
  const { role, numberOfMeal } = useUserRole();

  return (
    <div className="p-6 max-w-3xl mx-auto bg-white rounded-lg shadow-md">
      <h2 className="text-2xl font-bold mb-4">Admin Profile</h2>

      <div className="flex items-center gap-4 mb-6">
        <div className="avatar">
          <div className="w-24 rounded-full ring ring-primary ring-offset-base-100 ring-offset-2">
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
          <h3 className="text-xl font-semibold">
            {user?.displayName || "Admin"}
          </h3>
          <p className="text-sm text-gray-500">{user?.email}</p>
          <div className="mt-1">
            <span className="badge badge-warning text-white capitalize">
              {role}
            </span>
          </div>
        </div>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
        <div className="bg-gray-100 p-4 rounded-lg">
          <p className="font-medium text-gray-700">Display Name</p>
          <p className="text-gray-600">{user?.displayName || "N/A"}</p>
        </div>
        <div className="bg-gray-100 p-4 rounded-lg">
          <p className="font-medium text-gray-700">Email</p>
          <p className="text-gray-600">{user?.email || "N/A"}</p>
        </div>
        <div className="bg-gray-100 p-4 rounded-lg">
          <p className="font-medium text-gray-700">Role</p>
          <p className="text-gray-600 capitalize">{role}</p>
        </div>
        <div className="bg-gray-100 p-4 rounded-lg">
          <p className="font-medium text-gray-700">Total Meals Added</p>
          <p className="text-gray-600">{numberOfMeal}</p>
        </div>
      </div>
    </div>
  );
};

export default AdminProfile;
