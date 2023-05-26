import React from "react";
import UsersList from "../components/UsersList";

function Users() {
  const users = [
    { id: 1, name: "Harry" },
    { id: 2, name: "Lauren" },
  ];

  return <UsersList users={users} />;
}

export default Users;
