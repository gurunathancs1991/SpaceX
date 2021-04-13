import React, {useState} from 'react';
import FilterComponent from './Filters';
import SpaceX from './SpaceAll';

function Main(){
    const [year, setYear] = useState(undefined);
    const [launch, setLaunch] = useState(false);
    const [land, setLand] = useState(false);
    return (    
        <div>
        <div  role="heading" class="header shadow"> SpaceX Launch Programs </div> 
        <div className="container">
            
            <div class="left-container">
                <FilterComponent onChange = {(year, launch, land)=>{
                    setYear(year);
                    setLaunch(launch);
                    setLand(land);
                }}></FilterComponent>
            </div>
            <div class="right-container">
                <SpaceX year={year} launch ={launch} land= {land}></SpaceX>
            </div>        
        </div>
        <div role="contentinfo" class="footer shadow"> Developed by Gurunathan </div> 
        </div>
      );
    
}

export default Main;

