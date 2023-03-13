import React, {useState} from 'react'

import {ResponsiveContainer,BarChart,Bar,XAxis,YAxis, Label}from 'recharts'

function findAmountWithoutDelay(mi, ip, ror){
  let Months = (ip)*12;
  let Rate = (ror - 0)/12;
  let sipCumulation = 0;
  let sipGrowthResult = 0;

  for(let i=1; i<=Months; i++)
  {
    sipCumulation = mi*(Math.pow((1+Rate/100),i));
    sipGrowthResult += sipCumulation;
  }
  return sipGrowthResult;
}

function findAmountWithDelay(mi, ip, ror, delay){
  let Months = (ip)*12 - delay;
  let Rate = (ror - 0)/12;
  let sipCumulation = 0;
  let sipGrowthResult = 0;

  for(let i=1; i<=Months; i++)
  {
    sipCumulation = mi*(Math.pow((1+Rate/100),i));
    sipGrowthResult += sipCumulation;
  }
  return sipGrowthResult;
}

function Graph({mi, ip, ror, delay}) {
  
  

let Result1 = findAmountWithoutDelay(mi, ip, ror).toFixed(0);
let Result2 = findAmountWithDelay(mi, ip, ror, delay).toFixed(0);
let NotionalLoss = Result1-Result2;





  const Array = [
    {
      name:"Start Today",
      number: Result1,
      
  },
  {
      name:"Delayed Start",
      number: Result2,

  },
  {
      name:"Loss",
      number: NotionalLoss,
      fill: '#DF2E38'

  },
]


return (
    <div className='graph'>
      <p className='graph-text'>After {ip} years, you will have<br/>
      <span className='totalamount'>₹ {Result2}</span>
      <br/>That's <span className='potentialamount'>₹ {Result1}</span> as potential capital gains <br/> on your investment of 
      <span className='delay'> ₹ {mi}</span></p>
      
    <ResponsiveContainer width="80%" aspect={1.2} >
     
        <BarChart  className="bar-graph" data = {Array} width={600} height = {200}>
            <XAxis dataKey="name" fill='#5E73EB'/>
            <YAxis>
            <Label angle={270} position='left' offset={0}
            value="Amount in Rs."
            style={{ textAnchor: 'middle', fontSize: '80%', fill: 'rgba(0, 0, 0, 0.56)' }}></Label>
            </YAxis>
            <Bar dataKey="number" fill = '#5E73EB' />
        </BarChart>
    </ResponsiveContainer>
    </div>
  )



}

export default Graph;
