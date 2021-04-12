import React, {useState} from 'react';
import FilterComponent from './Filters';
import SpaceX from './SpaceAll';

function Main(){
    const [year, setYear] = useState(undefined);
    const [launch, setLaunch] = useState(false);
    const [land, setLand] = useState(false);
    return (     
        <div className="container">
            <FilterComponent onChange = {(year, launch, land)=>{
                setYear(year);
                setLaunch(launch);
                setLand(land);
            }}></FilterComponent>
            <SpaceX year={year} launch ={launch} land= {land}></SpaceX>
        </div>
      );
    
}

export default Main;

