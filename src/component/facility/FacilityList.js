import React, { Component } from "react";
import axios from "axios";
import { Link } from "react-router-dom";

class FacilityList extends Component {
  state = {
    facilities: [],
  };

  componentDidMount() {
    this.fetchFacilities();
  }

  fetchFacilities = async () => {
    try {
      const response = await axios.get("http://127.0.0.1:8000/map/facility/");
      this.setState({ facilities: response.data });
    } catch (error) {
      console.error("Error fetching facilities:", error);
    }
  };

  render() {
    const { facilities } = this.state;

    return (
      <div className="facility-list-container">
        <h2>Facility List</h2>
        <div className="facility-boxes">
          {facilities.map((facility) => (
            <Link
              to={`/facility/${facility.id}`}
              key={facility.id}
              className="facility-box"
            >
              <h3>{facility.name}</h3>
              <p>Address: {facility.address}</p>
              <p>id : {facility.id}</p>
            </Link>
          ))}
        </div>
      </div>
    );
  }
}

export default FacilityList;
