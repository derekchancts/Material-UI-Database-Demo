import React from 'react';
import {  
  AppBar, 
  Toolbar,  
  Typography,
} from '@mui/material';
// import MenuIcon from '@mui/icons-material/Menu';
import CreateDialog from '../exercises/dialogs/Create';
import SwitchMode from '../exercises/SwitchMode';

 

// const Header = ({ muscles, onExerciseCreate, toggleDark, settoggleDark }) => {
const Header = () => {

  
  return (
    <>
    <AppBar position="static">
    <Toolbar>

        {/* <IconButton
          size="large"
          edge="start"
          color="inherit"
          aria-label="menu"
          sx={{ mr: 2 }}
        >
          <MenuIcon />
        </IconButton>

        <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
          News
        </Typography>

        <Button color="inherit">Login</Button> */}

        {/* <SwitchMode 
          toggleDark={toggleDark}
          settoggleDark={settoggleDark}
        /> */}

        <SwitchMode />

        <Typography 
          variant="h5" 
          // color="yellow"
          sx={{ marginLeft:'2rem', flex: 1 }}
        >
          Exercise Database
        </Typography>

        {/* <CreateDialog muscles={muscles} onExerciseCreate={onExerciseCreate} /> */}
        <CreateDialog />
      
    </Toolbar>
  </AppBar>
  </>
  )
}

export default Header
