import React from 'react';
import {  
  Paper,
  Tabs,
  Tab,
  // Box
} from '@mui/material';



const Footer = ({ muscles, selectedCategory, setSelectedCategory }) => {

  const index = selectedCategory 
    ? muscles.findIndex(group => group === selectedCategory) + 1
    : 0


  const onIndexSelect = (e, index) => {
    setSelectedCategory(index === 0 ? '' : muscles[index - 1])
  };
  

  return (
    // <Box sx={{ width: '100%' }}>
    <Paper sx={{ }}>
      <Tabs
        // value={"one"}
        // value={0}
        value={index}
        onChange={onIndexSelect}
        textColor="secondary"
        indicatorColor="secondary"
        aria-label="secondary tabs example"
        centered
      >
        {/* <Tab value="one" label="Item One" />
        <Tab value="two" label="Item Two" />
        <Tab value="three" label="Item Three" /> */}

        {/* <Tab label="Item One" />
        <Tab label="Item Two" />
        <Tab label="Item Three" /> */}

        <Tab label="All" />
        {muscles.map(muscle => (
          <Tab key={muscle} label={muscle} />
        ))}

      </Tabs>
    </Paper>
      // </Box />
  )
}

export default Footer