import React from 'react';
import {  
  Paper,
  Tabs,
  Tab,
  // Box
} from '@mui/material';
import makeStyles from '@mui/styles/makeStyles';


const useStyles = makeStyles(theme => ({
  Paper: {
    overflowX: "auto",

    // '&.MuiTabs-flexContainer': {
      [theme.breakpoints.down('sm')]: {
        // backgroundColor: 'red',
        // minWidth:"50%",
        // maxWidth:"70%"

      }, 

    // }


    
  }
}))



const Footer = ({ muscles, selectedCategory, setSelectedCategory }) => {
  const classes = useStyles();

  const index = selectedCategory 
    ? muscles.findIndex(group => group === selectedCategory) + 1
    : 0


  const onIndexSelect = (e, index) => {
    setSelectedCategory(index === 0 ? '' : muscles[index - 1])
  };
  

  return (
    // <Box sx={{ width: '100%' }}>
    <Paper >
      <Tabs
        // value={"one"}
        // value={0}
        value={index}
        onChange={onIndexSelect}
        textColor="secondary"
        indicatorColor="secondary"
        aria-label="secondary tabs example"
        centered
        // variant="scrollable"
      >
        {/* <Tab value="one" label="Item One" />
        <Tab value="two" label="Item Two" />
        <Tab value="three" label="Item Three" /> */}

        {/* <Tab label="Item One" />
        <Tab label="Item Two" />
        <Tab label="Item Three" /> */}

        <Tab label="All" className={classes.Paper}/>
        {muscles.map(muscle => (
          <Tab key={muscle} label={muscle} className={classes.Paper} />
        ))}

      </Tabs>
    </Paper>
      // </Box />
  )
}

export default Footer