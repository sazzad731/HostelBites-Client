import { useQuery } from "@tanstack/react-query";
import { FaUserShield, FaTruck, FaTrash, FaSearch } from "react-icons/fa";
import useAxiosSecure from "../../../../hooks/useAxiosSecure";
import { useState } from "react";

const ManageUsers = () => {
  const [search, setSearch] = useState("");
  const axiosSecure = useAxiosSecure();

  const { data: users = [] } = useQuery({
    queryKey: ["users", search],
    queryFn: async () => {
      const res = await axiosSecure.get(`/users?nameOrEmail=${search}`);
      return res.data;
    },
  });


  return (
    <div>
      <h2 className="text-2xl font-bold mb-6 text-center">Manage Users</h2>

      {/* Search Field */}
      <div className="flex items-center gap-2 mb-10 max-w-sm">
        <FaSearch className="text-gray-500" />
        <input
          type="text"
          placeholder="Search by name or email"
          className="input input-bordered w-full"
          onChange={(e) => setSearch(e.target.value)}
        />
      </div>

      <div className="overflow-x-auto">
        <table className="table">
          <thead className="bg-base-200 text-base-content">
            <tr>
              <th className="whitespace-nowrap">#</th>
              <th className="whitespace-nowrap">User</th>
              <th className="whitespace-nowrap">Email</th>
              <th className="whitespace-nowrap">subscription status</th>
              <th className="whitespace-nowrap">Role</th>
              <th className="whitespace-nowrap">Make Admin</th>
            </tr>
          </thead>
          <tbody>
            {users.map((user, idx) => (
              <tr key={user._id}>
                <td className="whitespace-nowrap">{idx + 1}</td>
                <td className="capitalize whitespace-nowrap">{user.name}</td>
                <td className="whitespace-nowrap">{user.email}</td>
                <td className="capitalize whitespace-nowrap">{user.badge}</td>
                <td className="capitalize whitespace-nowrap">{user.role}</td>
                <td className="whitespace-nowrap">
                  <button
                    disabled={user.role === "admin"}
                    className="btn btn-sm btn-outline text-green-600"
                  >
                    <FaUserShield />
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default ManageUsers;
