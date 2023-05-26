import React from "react";
import "./UsersList.css";
import UserItem from "./UserItem";

function UsersList({ users }) {
  let renderedUsers;

  if (users.length === 0) {
    renderedUsers = <div>No users found</div>;
  } else {
    renderedUsers = users.map((user) => {
      return <UserItem key={user.id} user={user} />;
    });
  }

  return <div>{renderedUsers}</div>;
}

export default UsersList;
