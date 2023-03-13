import React from 'react';
import SliderArea from './SliderArea';

function InputArea(props) {
  return (
    <div class="input">
      <SliderArea index={0} mn={50000} mx={1000000} value={props.mi} setValue={props.changeMi}/>
      <SliderArea index={1} mn={1} mx={30} value={props.ip} setValue={props.changeIp}/>
      <SliderArea index={2} mn={1} mx={30} value={props.ror} setValue={props.changeRor}/>
      <SliderArea index={3} mn={1} mx={120} value={props.delay} setValue={props.changeDelay}/>
    </div>
  )
}

export default InputArea