import React from 'react'
import Slider from './Slider'

function Input() {
  return (
    <div className='input'>

    <Slider mn="50000" mx="1000000" field="mi" title="Monthly Investment (Rs.)"/>
    <Slider mn="1" mx="30" field="ip" title="Investment period (in years)"/>
    <Slider mn="1" mx="30" field="ror" title="Expected Rate of Return (%p.a)"/>
    <Slider mn="1" mx="30" field="delay" title="Delay in starting SIP (in months)"/>

    </div>
  )
}

export default Input