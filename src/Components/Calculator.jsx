import React, {useState} from 'react'
import InputArea from './InputArea';
import GraphArea from "./GraphArea"

function Calculator() {
  const [monthlyInvestment, setMonthlyInvestment] = useState(500);
  function changeMonthlyInvestment(val){
    if (val<0){
      setMonthlyInvestment(500)
    }
    else if( val > 10000)
    {
      setMonthlyInvestment(10000)
    }
    else setMonthlyInvestment(val);
  }
  const [investmentPeriod, setInvestmentPeriod] = useState(1);
  function changeInvestmentPeriod(val){
    if (val<0){
      setInvestmentPeriod(1)
    }
    else if( val > 30)
    {
      setInvestmentPeriod(30)
    }
    else setInvestmentPeriod(val);
  }
  const [rateOfReturn, setRateOfReturn] = useState(1);
  function changeRateOfReturn(val){
    if (val<0){
      setRateOfReturn(1)
    }
    else if( val > 30)
    {
      setRateOfReturn(30)
    }
    else setRateOfReturn(val);
  }
  const [delay, setDelay] = useState(1);
  function changeDelay(val){
    if (val<0){
      setDelay(1)
    }
    else if( val > 120)
    {
      setDelay(120)
    }
    else setDelay(val);
  }
  return (
    <div className='calculator'>

      <h2 className='heading'> SIP Delay Calculator</h2>

     
      <h5 className='info'>It tells you how much wealth you can create by
      making monthly investment</h5>
      <div className='container'>

        <InputArea monthlyInvestment={monthlyInvestment} changeMonthlyInvestment={changeMonthlyInvestment} investmentPeriod={investmentPeriod} changeInvestmentPeriod={changeInvestmentPeriod}
          rateOfReturn={rateOfReturn} changeRateOfReturn={changeRateOfReturn} delay={delay} changeDelay={changeDelay}
        />
        <GraphArea monthlyInvestment={monthlyInvestment} investmentPeriod={investmentPeriod} rateOfReturn={rateOfReturn} delay={delay}/>
      </div>
      
    </div>
  )
}

export default Calculator;
