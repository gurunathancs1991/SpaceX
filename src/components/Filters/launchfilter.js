import React from 'react'


function LaunchLandComponent(props){
    return (
         <div>
            <div id= { props.name + "label"} class="year-header">   { "Successful " + props.name} </div>
            <div class='flex-container' aria-labelledby={ props.name + "label"}>
                <CButton init={props.init} click= {props.click} value= {true} text="True" name = {props.name}></CButton> 
                <CButton init={props.init} click= {props.click} value= {false} text ="False" name = {props.name}></CButton>  
            </div>
         </div>
    )
}

function CButton(props){
   return (

        <div tabIndex="0" role= "button" className={props.init == props.value ? "year-button selected" : "year-button"} 
            onClick={(e)=>{
                handleAction(e, props);
            }}  
            onKeyDown={(e)=>{
            if(e.key == "Enter")
                    handleAction(e, props);     
       }}> {props.text} </div>  
   )
}

function handleAction(e, props){
    props.click({
        [props.name] :  e.target.classList.contains("selected") ? null : props.value
    });        
}

export default LaunchLandComponent;