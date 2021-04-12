import YearFilterComponent from './yearfilter';
import LaunchFilterComponent from './launchfilter';
import LandFilterComponent from './landfilter'
import { fetchSpaceByFilter } from "../../action/filters";
import React, { useState, useEffect } from 'react';

function FilterComponent(props){
    const [year, setYear] = useState(undefined);
    const [launch, setLaunch] = useState(false);
    const [land, setLand] = useState(false);
    
    
    return(
        <div>
            Filters
            <YearFilterComponent click={(e)=>{
                setYear(e.year);
                props.onChange(e.year, launch, land);
            }} init ={year}></YearFilterComponent>
            <LaunchFilterComponent click={(e)=>{
                setLaunch(e.launch);
                props.onChange(year, e.launch, land);
            }} init = {launch}></LaunchFilterComponent>
            <LandFilterComponent click={(e)=>{
                 setLand(e.land);
                 props.onChange(year, launch, e.land);
            }} init = {land}></LandFilterComponent>
        </div>
    )
}

export default FilterComponent;

