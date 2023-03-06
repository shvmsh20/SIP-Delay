import React, {useState} from 'react'


function Slider() {

  const [val, setVal] = useState(0);

  function handleChange(){
    setVal(document.getElementById("slider-inp").value);
    
    //document.getElementById("rangeValue").innerText = val;
    document.getElementById("slider-inp").value = val;
}
  return (
    <div className='slider'>
    <input id="slider-inp" type="range" min="0" max="100" 
         value={val} onInput={()=>handleChange()} />
    <svg width="80%" height="24">
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
  
    </div>
  )
}

export default Slider