import React from "react";
import { Link } from "react-router-dom";
import  data  from "../data.json";

function LocationList() {
  return (
    <>
      <h2>Location List</h2>
      <ul>
        {data?.locs.map(({ id, name }) => (
          <li key={id}>
            <Link key={id} to={`/p/${id}`}>{name}</Link>
          </li>
        ))}
        
      </ul>
    </>
  );
}

export default LocationList;