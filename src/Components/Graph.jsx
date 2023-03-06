import React from 'react'
import {ResponsiveContainer,BarChart,Bar,XAxis,YAxis}from 'recharts'


function Graph() {
  const Array = [
    {
      name:"Monthly Investment",
      number: 4,
      
  },
  {
      name:"Delay",
      number: 2,

  },
  {
      name:"Investment Period",
      number: 8,

  },
]
return (
    <div className='graph'>
      <p className='graph-text'>After 5 years, you will have<br/>
      <span className='totalamount'>₹ 8,56,981</span>
      <br/>That's <span className='potentialamount'>₹ 1,24,369</span> as potential capital gains on your investment of <br/>
      <span className='delay'>₹ 7,32,612</span></p>
    <ResponsiveContainer width="50%" aspect={1}>
        <BarChart data = {Array} width={200} height = {200}>
            <XAxis dataKey="name"/>
            <YAxis />
            <Bar dataKey="number" fill = '#5E73EB'/>
        </BarChart>
    </ResponsiveContainer>
    </div>
  )

}

export default Graph;
