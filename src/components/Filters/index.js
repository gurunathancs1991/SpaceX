import YearFilterComponent from './yearfilter';
import LaunchLandComponent from './launchfilter';
import React, { useState, useEffect } from 'react';

function FilterComponent(props){
    const [year, setYear] = useState(null);
    const [launch, setLaunch] = useState(null);
    const [land, setLand] = useState(null);
    
    
    return(
        <div>
            <div class="FilterHeader">Filter</div>
            <YearFilterComponent click={(e)=>{
                setYear(e.year);
                props.onChange(e.year, launch, land);
            }} init ={year}></YearFilterComponent>
            <LaunchLandComponent click={(e)=>{
                setLaunch(e.launch);
                props.onChange(year, e.launch, land);
            }} init = {launch} name="launch"></LaunchLandComponent>
            <LaunchLandComponent click={(e)=>{
                 setLand(e.land);
                 props.onChange(year, launch, e.land);
            }} init = {land} name="land"></LaunchLandComponent>
        </div>
    )
}

export default FilterComponent;

