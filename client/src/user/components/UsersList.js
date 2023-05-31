import React from "react";
import "./UsersList.css";
import UserItem from "./UserItem";
import Card from "../../shared/components/UIElements/Card";

function UsersList({ users }) {
  let renderedUsers;

  if (users.length === 0) {
    renderedUsers = (
      <div className="center">
        <Card>
          <h2>No users found</h2>
        </Card>
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
