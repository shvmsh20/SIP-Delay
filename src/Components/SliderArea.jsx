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
  
  function valuetext(value) {
    return `${value}`;
  }
  
  const Input2 = styled(MuiInput)`
    width: 80px;
  `;

  
function SliderArea(){
    const [mivalue, setValue] = React.useState(620000);

    const handleSliderChange = (event, newValue) => {
        setValue(newValue);
    };

    const handleInputChange = (event) => {
        setValue(event.target.value === '' ? '' : Number(event.target.value));
    };
 
  return (

    <div className='slider-area'>
        <Box sx={{ width: 500 }}>
    
      
            <Grid container spacing={25} alignItems="center">

                <Grid item>
                    <Typography id="input-slider" gutterBottom>
                    Monthly Investment (Rs.)
                    </Typography>
                </Grid>

                <Grid item>
                    <Input2  
                        value={mivalue}
                        size="small"
                        onChange={handleInputChange}
                        inputProps={{
                            step: 1,
                            min: 50000,
                            max: 10000000,
                        }}
                        />
                </Grid>
                
            </Grid>

            <Grid container>

                <Grid item xs>
                    <Slider

                    aria-label="Custom marks"
                    defaultValue={620000}
                    getAriaValueText={valuetext}
                    min={50000}
                    max={1000000}
                    marks={miArray}
                    
                    value={typeof mivalue === 'number' ? mivalue : 0}
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