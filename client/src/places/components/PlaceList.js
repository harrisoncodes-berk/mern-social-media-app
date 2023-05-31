import React from "react";

import Card from "../../shared/components/UIElements/Card";
import PlaceItem from "./PlaceItem";

import "./PlaceList.css";

function PlaceList({ places }) {
  let renderedPlaces;

  if (places.length === 0) {
    renderedPlaces = (
      <div className="place-list center">
        <Card>
          <h2>No users found</h2>
          <button>Share Place</button>
        </Card>
      </div>
    );
  } else {
    renderedPlaces = places.map((place) => {
      return <PlaceItem key={place.id} place={place} />;
    });
  }

  return <ul className="place-list">{renderedPlaces}</ul>;
}

export default PlaceList;
