import React from 'react'


function LaunchFilterComponent(props){
    return (
         <div>
             <span > Launch Success </span>
             <button onClick={()=>{props.click({launch :true})}}>True</button>
             <button onClick={()=>{props.click({launch :false})}}>False</button>       
         </div>
    )
         
}


export default LaunchFilterComponent;