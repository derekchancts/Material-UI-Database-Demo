import React, { useContext } from 'react';
// import FormGroup from '@mui/material/FormGroup';
// import FormControlLabel from '@mui/material/FormControlLabel';
// import Switch from '@mui/material/Switch';
import {  
  Stack, 
  // Toolbar,  
  Typography,
  Switch,
  // FormControlLabel
} from '@mui/material';
import { MusclesContext } from '../../context';



// const SwitchMode = ({ toggleDark, settoggleDark }) => {
const SwitchMode = () => {

  const { toggleDark, settoggleDark } = useContext(MusclesContext);

  const handleChange = () => {
    settoggleDark(!toggleDark)
  };


  return (
    <>
      {/* <FormControlLabel
          control={
            <Switch 
              checked={toggleDark} 
              onChange={handleChange} 
            name="switchMode" />
          }
          label="Switch"
      /> */}

      <Stack direction="row" spacing={0} alignItems="center">
        <Typography variant="caption">Light</Typography>
        <Switch
          checked={toggleDark}
          onChange={handleChange}
          inputProps={{ 'aria-label': 'controlled' }}
          // size="small"
        />
        <Typography variant="caption">Dark</Typography>
      </Stack>
    </>
  )
}

export default SwitchMode
