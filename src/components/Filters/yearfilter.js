import React from 'react'

const data = [2006,2007, 2008,2009,2010, 2011, 2012, 2013, 2014];

function YearFilterComponent(props){
    return (
         <div>
             {data.map((item)=>
                 <button key={item} onClick={(e)=>{props.click({year: e.target.id})}} id={item}>{item}</button>
             )}
         </div>
    )
}

export default YearFilterComponent;