import React from 'react';
import { NavLink } from 'react-router-dom';

export default ({ flight_number, mission_name, launch_year, launch_success, land_success, details })  => {
  return (
    <div tabIndex="0" className="space-item shadow" aria-label={ "mission name is " + mission_name +" flight number is "+ flight_number +" launch year is " + launch_year +" launch success is "+ launch_success +" "+ details}>
      
      <img role="img" src={"../../../img/imgt"+ Math.floor((Math.random() * 3) + 1) +".png"} alt=""/>
      <div className="grid-container">
        <div class="highlight">Mission</div>
        <div> {mission_name} #{flight_number}</div>   
        <div class="highlight">Launch Year</div>
        <div > {launch_year}</div>
        <div  class="highlight"> Successful Launch</div>
        <div>{launch_success ? "True": "False"} </div>
        <div  class="highlight"> Successful Land</div>
        <div>{land_success ? "True": "False"} </div>
      </div>
    </div>
  );
};