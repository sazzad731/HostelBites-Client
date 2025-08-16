import React from "react";


// =============== TODO ===================
// 1. Collect all data using react hook form
// 2. upload image into imgbb
// 3. update user name and image in firebase
// 4. put data in mongodb


const EditProfileModal = ({ profile, setProfile, isOpen, setIsOpen }) => {
  const handleChange = (e) => {
    setProfile({ ...profile, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Updated Profile:", profile);
    setIsOpen(false); // Close modal after submit
  };

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 flex items-center justify-center bg-black/30 z-50">
      <div className="bg-white rounded-xl p-6 w-96 shadow-lg">
        <h3 className="text-lg font-semibold mb-4">Edit Profile</h3>
        <form className="space-y-3">
          <div>
            <label className="block text-sm">Name</label>
            <input
              type="text"
              name="name"
              value={profile.displayName}
              onChange={handleChange}
              className="input input-bordered w-full"
            />
          </div>
          <div>
            <label className="block text-sm">Email</label>
            <input
              type="email"
              name="email"
              value={profile.email}
              onChange={handleChange}
              className="input input-bordered w-full"
              disabled
            />
          </div>
          <div>
            <label className="block text-sm">Photo URL</label>
            <input
              type="text"
              name="photo"
              onChange={handleChange}
              className="input input-bordered w-full"
            />
          </div>

          <div className="flex justify-end gap-2 mt-4">
            <button
              type="button"
              className="btn"
              onClick={() => setIsOpen(false)}
            >
              Cancel
            </button>
            <button type="submit" className="btn btn-primary">
              Save
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default EditProfileModal;
