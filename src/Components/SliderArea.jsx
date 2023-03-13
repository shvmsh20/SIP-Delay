import * as React from 'react';
import Box from '@mui/material/Box';
import Slider from '@mui/material/Slider';
import Typography from '@mui/material/Typography';
import MuiInput from '@mui/material/Input';
import Grid from '@mui/material/Grid';
import { styled } from '@mui/material/styles';



const miArray = [
    {
      value: 50000,
      label: '50000',
    },
    {
      value: 240000,
      label: '240000',
    },
    {
      value: 430000,
      label: '430000',
    },
    {
      value: 620000,
      label: '620000',
    },
    {
      value: 810000,
      label: '810000',
    },
    {
      value: 1000000,
      label: '1000000',
    },
  ];


  const ipArray = [
    {
      value: 1,
      label: '1',
    },
    {
      value: 4,
      label: '4',
    },
    {
      value: 7,
      label: '7',
    },
    {
      value: 10,
      label: '10',
    },
    {
      value: 13,
      label: '13',
    },
    {
      value: 15,
      label: '15',
    },
    {
      value: 18,
      label: '18',
    },
    {
      value: 21,
      label: '21',
    },
    {
      value: 24,
      label: '24',
    },
    {
      value: 27,
      label: '27',
    },
    {
      value: 30,
      label: '30',
    },
  ];

  const errArray = [
    {
      value: 1,
      label: '1',
    },
    {
      value: 3.9,
      label: '3.9',
    },
    {
      value: 6.8,
      label: '6.8',
    },
    {
      value: 9.7,
      label: '9.7',
    },
    {
      value: 12.6,
      label: '12.6',
    },
    {
      value: 15.5,
      label: '15.5',
    },
    {
      value: 18.4,
      label: '18.4',
    },
    {
      value: 21.3,
      label: '21.3',
    },
    {
      value: 24.2,
      label: '24.2',
    },
    {
      value: 27.1,
      label: '27.1',
    },
    {
      value: 30,
      label: '30',
    },
  ];
  
  const delayArray = [
    {
      value: 1,
      label: '1',
    },
    {
      value: 13,
      label: '13',
    },
    {
      value: 25,
      label: '25',
    },
    {
      value: 37,
      label: '37',
    },
    {
      value: 49,
      label: '49',
    },
    {
      value: 61,
      label: '61',
    },
    {
      value: 72,
      label: '72',
    },
    {
      value: 84,
      label: '84',
    },
    {
      value: 96,
      label: '96',
    },
    {
      value: 108,
      label: '108',
    },
    {
      value: 120,
      label: '120',
    },
  ];
  

const labelArr = [miArray, ipArray, errArray, delayArray];  

const titleArr = ["Monthly Investment (Rs.)", "Investment Period (in years)", 
"Expected Rate of Return (%p.a)", "Delay in Staring SIP (in months)"];

  
  function valuetext(value) {
    return `${value}`;
  }
  
  const Input2 = styled(MuiInput)`
    width: 80px;
  `;

  
function SliderArea({index, mn, mx, value, setValue}){

    const handleSliderChange = (event, newValue) => {
        setValue(newValue);
    };

    const handleInputChange = (event) => {
        setValue(event.target.value === '' ? '' : Number(event.target.value));
    };

 
  return (

    <div className='slider-area'>
        <Box sx={{ width: 500 }}>
    
      
            <Grid className="demo" container>
                <Grid item>
                    <Typography gutterBottom>
                    {titleArr[index]}
                    </Typography>
                </Grid>

                <Grid item>
                
                <Input2  
                        value={value}
                        size="small"
                        onChange={handleInputChange}
                        inputProps={{
                            step: 1,
                            min: mn,
                            max: mx,
                        }}
                        />
                    
                </Grid>
                
            </Grid>

            <Grid container>

                <Grid item xs>
                    <Slider

                    aria-label="Custom marks"
                    defaultValue={mn}
                    getAriaValueText={valuetext}
                    min={mn}
                    max={mx}
                    marks={labelArr[index]}
                    
                    value={typeof value === 'number' ? value : 0}
                    onChange={handleSliderChange}
                    aria-labelledby="input-slider"
                    />
                </Grid>
            
            </Grid>


        </Box>
    </div>

    
   
  )
}  

export default SliderArea;