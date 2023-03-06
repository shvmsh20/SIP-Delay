import React from 'react'

function handleChange(e){
    document.getElementById("rangeValue").innerText = document.getElementById("slider-inp").value;
    console.log(e.target.value);
    // document.getElementById("slider-inp").value = 
}
function Slider() {
  return (
    <div className='slider'>
         <input id="slider-inp" type="range" min="0" max="100" step="1"
         value="10"  onInput={()=>handleChange()} />
        <p id="rangeValue">0</p>
    </div>
  )
}

export default Slider