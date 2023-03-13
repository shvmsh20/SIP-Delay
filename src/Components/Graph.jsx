import React from 'react'

import {ResponsiveContainer,BarChart,Bar,XAxis,YAxis}from 'recharts'


function Graph(props) {
  const Array = [
    {
      name:"Start Today",
      number: 320000,
      
  },
  {
      name:"Delayed Start",
      number: 200000,

  },
  {
      name:"Loss",
      number: 80000,

  },
]
console.log("MI ",props.mi);
return (
    <div className='graph'>
      <p className='graph-text'>After 5 years, you will have<br/>
      <span className='totalamount'>₹ 8,56,981</span>
      <br/>That's <span className='potentialamount'>₹ 1,24,369</span> as potential capital gains <br/> on your investment of 
      <span className='delay'> ₹ 7,32,612</span></p>
    <ResponsiveContainer width="80%" aspect={1} >
        <BarChart  className="bar-graph" data = {Array} width={200} height = {200}>
            <XAxis dataKey="name" fill='#5E73EB'/>
            <YAxis />
            <Bar dataKey="number" fill = '#5E73EB'/>
        </BarChart>
    </ResponsiveContainer>
    </div>
  )



}

export default Graph;
