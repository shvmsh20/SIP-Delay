import React, {useState} from 'react'
import InputArea from './InputArea';
import Graph from "./Graph"

function Calculator() {
  const [mi, setMi] = useState(0);
  function changeMi(val){
    setMi(val);
  }
  return (
    <div className='calculator'>

      <h2 className='heading'> SIP Delay Calculator</h2>

     
      <h5 className='info'>It tells you how much wealth you can create by
      making monthly investment</h5>
      <div className='container'>
        <InputArea changeMi={changeMi}/>
        <Graph mi={mi}/>
      </div>
      
    </div>
  )
}

export default Calculator;
