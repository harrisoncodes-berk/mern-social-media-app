import React from "react";
import { Link } from "react-router-dom";
import "./UserItem.css";

function UserItem({ user }) {
  return (
    <Link to={`/${user.id}/places`}>
      <h3>{user.name}</h3>
    </Link>
  );
}

export default UserItem;
