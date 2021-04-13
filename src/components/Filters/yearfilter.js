import React from 'react'

const data = [2006,2007, 2008,2009,2010, 2011, 2012, 2013, 2014, 2015];

function YearFilterComponent(props){
    const content = data.map((item) =>
        <div tabIndex="0" role="button" key={item}  onClick={(e)=>{            
                handleAction(e, props, e.target.id);               
            }} 
            onKeyDown ={(e)=>{
                if(e.key == "Enter")
                    handleAction(e, props, e.target.id);   
            }}            
            id={item} className={item == props.init ? "year-button selected": "year-button"}>            
            {item}
        </div>
    );
    return (
         <div>
             <div class="year-header" id="yearlabel"> Launch Year </div>
             <div class='flex-container' aria-labelledby="yearlabel">
                 {content}             
             </div>
           
         </div>
    )
}

function handleAction(e, props, value){
    props.click({
        year :  e.target.classList.contains("selected") ? null : value
    });        
}

export default YearFilterComponent;