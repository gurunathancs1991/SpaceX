import React from 'react'


function LandFilterComponent(props){
    return (
         <div>
             <span > Land Success </span>
                 <button onClick={()=>{props.click({land:true})}}>True</button>
                 <button onClick={()=>{props.click({land:false})}}>False</button>           
         </div>
    )
}

export default LandFilterComponent;  