import React from 'react';
import {  
  Paper,
  Tabs,
  Tab,
  // Box,
  useMediaQuery,
  AppBar
} from '@mui/material';
import makeStyles from '@mui/styles/makeStyles';
import { useTheme } from '@mui/material/styles';


const useStyles = makeStyles(theme => ({
  Paper: {
    // overflowX: "auto",
    
    // '& .MuiTabs-flexContainer': {
      [theme.breakpoints.down('sm')]: {
        backgroundColor: 'red',
        // minWidth:"50%",
        // maxWidth:"50%",
      }, 

    // }
  },
  tabs:{
    // [theme.breakpoints.up("sm")]: {
    //   margin:'0 auto'
    // }
  },
}))



const Footer = ({ muscles, selectedCategory, setSelectedCategory }) => {
  const classes = useStyles();


  const theme = useTheme();

  let scrollableTabs = useMediaQuery(theme.breakpoints.down('sm'));
  scrollableTabs = scrollableTabs ? "scrollable" : null

  let checkCenter = useMediaQuery(theme.breakpoints.up('sm'));
  checkCenter = scrollableTabs === null ? true : false



  const index = selectedCategory 
    ? muscles.findIndex(group => group === selectedCategory) + 1
    : 0

  const onIndexSelect = (e, index) => {
    setSelectedCategory(index === 0 ? '' : muscles[index - 1])
  };
  

  return (
    // <Box sx={{ width: '100%' }}>
    // <Paper >
    <AppBar position="static">
      <Tabs 
        // value={"one"}
        // value={0}
        value={index}
        onChange={onIndexSelect}
        textColor="secondary"
        indicatorColor="secondary"
        aria-label="secondary tabs example"
        // centered="false"
        centered={checkCenter}
        scrollButtons="auto"
        // variant="scrollable"
        variant={scrollableTabs}
        allowScrollButtonsMobile
      >
        {/* <Tab value="one" label="Item One" />
        <Tab value="two" label="Item Two" />
        <Tab value="three" label="Item Three" /> */}

        {/* <Tab label="Item One" />
        <Tab label="Item Two" />
        <Tab label="Item Three" /> */}

        {/* <Tab label="All" className={classes.Paper}/>
        {muscles.map(muscle => (
          <Tab key={muscle} label={muscle} className={classes.Paper} />
        ))} */}

        <Tab label="All" />
        {muscles.map(muscle => (
          <Tab key={muscle} label={muscle}  />
        ))}

      </Tabs>
    </AppBar>
    // {/* </Paper> */}
      // </Box />
  )
}

export default Footer