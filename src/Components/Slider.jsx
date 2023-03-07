
import React, {useState} from 'react'


function Slider(props) {

  const midVal = (parseInt(props.mn)+parseInt(props.mx))/2;
  const [val, setVal] = useState(midVal);

  function handleChange(){

    setVal(document.getElementById(props.field).value);
    //document.getElementById(props.field).value = val;
    
}
  return (
    <div className='slider'>
    <div className='container-label'>
    <h5 className='slider-heading'>{props.title}</h5>
    <button type="number" className='display-btn'> {val} </button>
    </div>
     
    <input id = {props.field} type="range" min={props.mn} max={props.mx} value={val}
          onInput={()=>handleChange()} />   
    <svg width="100%" height="24">
              <line
                x1="4"
                y1="0"
                x2="440"
                y2="0"
                stroke="#444"
                strokeWidth="20"
                strokeDasharray="1 20"
              />
            </svg>
            <br/>
    
    </div>
  )
}

export default Slider