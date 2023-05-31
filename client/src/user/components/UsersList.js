import React from "react";
import "./UsersList.css";
import UserItem from "./UserItem";

function UsersList({ users }) {
  let renderedUsers;

  if (users.length === 0) {
    renderedUsers = (
      <div className="center">
        <h2>No users foun</h2>d
      </div>
    );
  } else {
    renderedUsers = users.map((user) => {
      return <UserItem key={user.id} user={user} />;
    });
  }

  return <ul className="users-list">{renderedUsers}</ul>;
}

export default UsersList;
