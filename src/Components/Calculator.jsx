import React from 'react'
import Input from './Input';
import Graph from "./Graph"

function Calculator() {
  return (
    <div className='calculator'>
      <h2 className='heading'> SIP Delay Calculator</h2>
      <h5 className='info'>It tells you how much wealth you can create by
      making monthly investment</h5>
      <div className='container'>
        <Input />
        <Graph />
      </div>
      
    </div>
  )
}

export default Calculator;
