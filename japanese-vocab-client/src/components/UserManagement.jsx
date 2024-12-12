import axios from "axios";
import {useEffect, useState} from "react";

const UserManagement = () => {
  const [users, setUsers] = useState([]);

  useEffect(() => {
    const fetchUsers = async () => {
      try {
        const {data} = await axios.get("http://localhost:5000/users");
        setUsers(data);
      } catch (error) {
        console.error("Error fetching users:", error);
      }
    };

    fetchUsers();
  }, []);

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
            {/* Render rows only if users is not empty */}
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
                    <span className="relative cursor-pointer inline-block px-3 py-1 font-bold text-white leading-tight">
                      <span
                        aria-hidden="true"
                        className="absolute inset-0 bg-[#B0A289]  rounded-full text-white"
                      ></span>
                      <span className="relative">Update Role</span>
                    </span>
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
    </div>
  );
};

export default UserManagement;
