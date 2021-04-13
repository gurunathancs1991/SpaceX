import React from 'react'


function LandFilterComponent(props){
    return (
         <div>
            <div id="landlabel" class="year-header"> Successful Land </div>
            <div class='flex-container' aria-labelledby="landlabel">
                 <div tabIndex="0" role="button" className={props.init == true ? "year-button selected" : "year-button"}  onClick={(e)=>{
                      handleAction(e, props, true);                    
                     }} onKeyDown={(e)=>{
                         if(e.key == "Enter")
                        handleAction(e, props, true);     
                     }}>True</div>
                 <div tabIndex="0" role ="button" className={props.init == false ? "year-button selected" : "year-button"}  onClick={(e)=>{
                        handleAction(e, props, false);  
                    }
                     } onKeyDown= {(e)=>{    
                        if(e.key == "Enter")                     
                        handleAction(e, props, false);
                     }}>False</div>           
         </div>
         </div>
    )
}

function handleAction(e, props, value){
    props.click({
        land :  e.target.classList.contains("selected") ? null : value
    });        
}

export default LandFilterComponent;  