import axios from 'axios';

import {
  ROOT,  
  REQUEST_ALLSPACEDETAILS,
  RECEIVE_ALLSPACEDETAILS
} from "./types";


export const fetchSpaceByFilter = (year, launch, land) => async dispatch => {

  try {
    dispatch({ type: REQUEST_ALLSPACEDETAILS});
    const URL = frameURL(year,launch, land);
    const res = await axios.get(`${URL}`)
    dispatch({ type: RECEIVE_ALLSPACEDETAILS, payload: res.data });
  } catch(e) {
    console.log(e);
    dispatch({ type: RECEIVE_ALLSPACEDETAILS, payload: [] });
  }
};

function frameURL(year, launch, land){
    let url = ROOT;
    if(year){
        url+='&launch_year='+year
    }
    if(launch){
        url+= '&launch_success=true'
    }
    if(land){
        url+= '&land_success=true'
    }
    return url;
}


