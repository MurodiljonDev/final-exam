// import * as React from 'react';
import Box from '@mui/material/Box';
import Slider from '@mui/material/Slider';
import { SliderValue } from '../../redux/slice/sliderSlice';
import { useDispatch } from "react-redux"
import { useSelector } from "react-redux"
import "./SliderInput.scss"

export default function SliderInput() {
  const dispatch = useDispatch()
  const dataSlider = useSelector((state: any) => state.sliderValue.sliderValue)
  return (
    <Box sx={{ width: 300 }}>
      {/* <Slider
        size="small"
        defaultValue={70}
        aria-label="Small0"
        valueLabelDisplay="auto"
      /> */}
      <div className='box_slider'>
        <span className='num_slider'>{dataSlider}px</span>
        <Slider className='slider' value={dataSlider} min={8} max={300} defaultValue={50} aria-label="Default" valueLabelDisplay="auto" onChange={(e: any) => dispatch(SliderValue(e.target.value))} />
      </div>
    </Box>
  );
}