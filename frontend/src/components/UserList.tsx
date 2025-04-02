import React from "react";
import { useQuery } from "@tanstack/react-query";
import { fetchUsers } from "../api/userApi";
import "./UserList.css"; // Import the CSS file

const UserList: React.FC = () => {
  const { data, isLoading, error } = useQuery({
    queryKey: ["users"],
    queryFn: fetchUsers,
  });

  if (isLoading) return <p className="loading">Loading users...</p>;
  if (error) return <p className="error">Error fetching users.</p>;

  return (
    <div className="user-container">
      <h2 className="title">User List</h2>
      <ul className="user-list">
        {data?.users?.map((user: { id: number; email: string }) => (
          <li key={user.id} className="user-item">
            {user.email}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default UserList;
