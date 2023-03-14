import React, {useState} from 'react'
import InputArea from './InputArea';
import GraphArea from "./GraphArea"

function Calculator() {
  const [mi, setMi] = useState(5000);
  function changeMi(val){
    setMi(val);
  }
  const [ip, setIp] = useState(15);
  function changeIp(val){
    setIp(val);
  }
  const [ror, setRor] = useState(15);
  function changeRor(val){
    setRor(val);
  }
  const [delay, setDelay] = useState(10);
  function changeDelay(val){
    setDelay(val);
  }
  return (
    <div className='calculator'>

      <h2 className='heading'> SIP Delay Calculator</h2>

     
      <h5 className='info'>It tells you how much wealth you can create by
      making monthly investment</h5>
      <div className='container'>

        <InputArea mi={mi} changeMi={changeMi} ip={ip} changeIp={changeIp}
          ror={ror} changeRor={changeRor} delay={delay} changeDelay={changeDelay}
        />
        <GraphArea mi={mi} ip={ip} ror={ror} delay={delay}/>
      </div>
      
    </div>
  )
}

export default Calculator;
