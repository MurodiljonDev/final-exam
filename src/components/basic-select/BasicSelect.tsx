import * as React from 'react';
import Box from '@mui/material/Box';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select, { SelectChangeEvent } from '@mui/material/Select';
import "./BasicSelect.scss"

export default function BasicSelect() {
  const [age, setAge] = React.useState('');

  const handleChange = (event: SelectChangeEvent) => {
    setAge(event.target.value as string);
  };

  return (
    <Box className='basic_input' sx={{ minWidth: 120, background:'rgba(88, 85, 246, 0.245)',}}>
      <FormControl   fullWidth>
        <InputLabel  id="demo-simple-select-label">Sorted by:</InputLabel>
        <Select
          labelId="demo-simple-select-label"
          id="demo-simple-select"
          value={age}
          label="Age"
          onChange={handleChange}
        >
          <MenuItem value={10}>Trending</MenuItem>
          <MenuItem value={20}>Name</MenuItem>
          <MenuItem value={30}>Most popular</MenuItem>
        </Select>
      </FormControl>
    </Box>
  );
}