import axios from "axios";
import {useEffect, useState} from "react";
import toast from "react-hot-toast";

const UserManagement = () => {
  const [users, setUsers] = useState([]);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [selectedUser, setSelectedUser] = useState(null);
  const [updatedRole, setUpdatedRole] = useState("");

  useEffect(() => {
    const fetchUsers = async () => {
      try {
        const {data} = await axios.get(
          "https://japanese-vocab-server-neon.vercel.app/users"
        );
        setUsers(data);
      } catch (error) {
        console.error("Error fetching users:", error);
      }
    };

    fetchUsers();
  }, []);

  const openModal = (user) => {
    setSelectedUser(user);
    setUpdatedRole(user.role); // Set the current role as default
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setSelectedUser(null);
    setUpdatedRole("");
    setIsModalOpen(false);
  };

  const handleRoleUpdate = async () => {
    if (!updatedRole || updatedRole === selectedUser.role) {
      return;
    }

    try {
      const response = await axios.patch(
        `https://japanese-vocab-server-neon.vercel.app/user/${selectedUser._id}`,
        {role: updatedRole}
      );

      if (response.status === 200) {
        setUsers((prevUsers) =>
          prevUsers.map((user) =>
            user._id === selectedUser._id ? {...user, role: updatedRole} : user
          )
        );
        toast.success("User Role Changed Successfully!");
        closeModal();
      }
    } catch (error) {
      console.error("Error updating role:", error);
    }
  };

  return (
    <div className="container mx-auto px-4 sm:px-8 md:ml-9">
      <h1 className="text-4xl my-5 text-center font-bold">All Users:</h1>
      {/* table data below */}
      <div className="overflow-x-auto">
        <table className="table">
          {/* head */}
          <thead className="bg-[#B0A289] text-white font-bold text-xs">
            <tr>
              <th>Index</th>
              <th>Image</th>
              <th>Name</th>
              <th>Email</th>
              <th>Role</th>
              <th>Action</th>
            </tr>
          </thead>
          <tbody>
            {users.length > 0 ? (
              users.map((user, index) => (
                <tr key={index}>
                  <td>
                    <label>{index + 1}</label>
                  </td>
                  <td>
                    <img
                      src={user.photo}
                      alt="User Avatar"
                      className="size-12 rounded-full"
                    />
                  </td>
                  <td>{user.name}</td>
                  <td>{user.email}</td>
                  <td>{user.role}</td>
                  <td>
                    <button
                      className="relative cursor-pointer inline-block px-3 py-1 font-bold text-white leading-tight bg-[#B0A289] rounded-full"
                      onClick={() => openModal(user)}
                    >
                      Update Role
                    </button>
                  </td>
                </tr>
              ))
            ) : (
              <tr>
                <td colSpan="6" className="text-center">
                  No users found.
                </td>
              </tr>
            )}
          </tbody>
        </table>
      </div>

      {/* Modal */}
      {isModalOpen && selectedUser && (
        <div className="fixed inset-0 flex items-center justify-center bg-gray-800 bg-opacity-50">
          <div className="bg-green-400 p-5 rounded shadow-lg w-96">
            <h2 className="text-lg font-bold mb-4">Update Role</h2>
            <p>
              Update role for <strong>{selectedUser.name}</strong>
            </p>
            <select
              className="mt-3 p-2 border rounded"
              value={updatedRole}
              onChange={(e) => setUpdatedRole(e.target.value)}
            >
              <option value="User">User</option>
              <option value="Admin">Admin</option>
            </select>
            <div className="mt-4 flex justify-end space-x-3">
              <button
                className="px-4 py-2 bg-gray-300 rounded"
                onClick={closeModal}
              >
                Cancel
              </button>
              <button
                className="px-4 py-2 bg-green-500 text-white rounded"
                onClick={handleRoleUpdate}
              >
                Confirm
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default UserManagement;
