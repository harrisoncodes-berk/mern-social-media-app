import React from "react";
import UsersList from "../components/UsersList";

function Users() {
  const users = [
    {
      id: 1,
      name: "Harry",
      image:
        "https://www.pexels.com/photo/shiba-ibu-wearing-yellow-knitted-beanie-4588052/",
      places: 3,
    },
    {
      id: 2,
      name: "Lauren",
      image:
        "https://www.pexels.com/photo/chihuahua-wearing-red-coat-costume-4588435/",
      places: 2,
    },
  ];

  return <UsersList users={users} />;
}

export default Users;
