import React from 'react';
import SliderArea from './SliderArea';

function InputArea(props) {
  return (
    <div class="inputArea">
      <SliderArea index={0} mn={500} mx={10000} steps={500} value={props.mi} setValue={props.changeMi}/>
      <SliderArea index={1} mn={1} mx={30} steps={1} value={props.ip} setValue={props.changeIp}/>
      <SliderArea index={2} mn={1} mx={30} steps={0.1} value={props.ror} setValue={props.changeRor}/>
      <SliderArea index={3} mn={1} mx={120} steps={1} value={props.delay} setValue={props.changeDelay}/>
    </div>
  )
}

export default InputArea