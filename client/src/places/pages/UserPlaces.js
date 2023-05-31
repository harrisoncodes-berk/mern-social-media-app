import React from "react";
import { useParams } from "react-router-dom";

import PlaceList from "../components/PlaceList";

function UserPlaces() {
  const places = [
    {
      id: '1',
      title: "Golden Gate Bridge",
      description: "Cool red bridge!",
      imageUrl: "https://upload.wikimedia.org/wikipedia/commons/thumb/0/0c/GoldenGateBridge-001.jpg/2560px-GoldenGateBridge-001.jpg",
      address: "The Bay",
      location: { lat: 100, long: 101 },
      creator: '1',
    },
  ];

  const userId = useParams().userId;
  const loadedPlaces = places.filter((place) => {
    return place.creator === userId;
  });

  return <PlaceList places={loadedPlaces} />;
}

export default UserPlaces;
