import React from 'react'
import '../Media/CSS/App.css';
import SideBar from './SideBar';
import Calculator from './SIPDelayCalculator'
import Graph from './SIPDelayGraph'


export default function() {
  return (
    <>
    <div>
        SIP 
        <SideBar/>
        <Calculator/>
        <Graph/>
    </div>
    
    
    </>
  )
}
