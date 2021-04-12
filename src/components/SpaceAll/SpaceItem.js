import React from 'react';
import { NavLink } from 'react-router-dom';

export default ({ flight_number, mission_name, launch_year, launch_success })  => {
  return (
    <NavLink to={`/`} className="countries-item">
      <img src={flight_number} alt=""/>
      <div className="countries-item-data">
        <span>Mission name: {mission_name} #{flight_number}</span>   
        <span>Launch year: {launch_year}</span>
        <span>Launch success: {launch_success ? "true": "false"} </span>
      </div>
    </NavLink>
  );
};