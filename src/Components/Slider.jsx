import React, {useState} from 'react'


function Slider() {

  const [val, setVal] = useState(0);

  function handleChange(){
    setVal(document.getElementById("slider-inp").value);
    
    document.getElementById("rangeValue").innerText = val;
    document.getElementById("slider-inp").value = val;
}
  return (
    <div className='slider'>
         <input id="slider-inp" type="range" min="0" max="100" 
         value={val} onInput={()=>handleChange()} />
        <p id="rangeValue">0</p>
    </div>
  )
}

export default Slider