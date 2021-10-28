import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import { MusclesProvider } from './context';

// import { createTheme, ThemeProvider } from '@mui/material/styles';
// import { red, amber } from '@mui/material/colors';


// const theme = createTheme({
//   palette: {
//     primary: red,
//     secondary: {
//       // main: amber[500],
//       // main: "#ffc107",   // hex code for amber[500],
//       main: amber.A400, 

//       // if we define only the "main" color, then MUI will recalculate / pick the colors for "light" and "dark"
//       // light: 
//       // dark: 
//       light: amber[200],
//       dark: amber[700]
//     },
//     mode: 'light'
//   }
// });

// console.log(theme);
// // console.log(red);
// // console.log(theme.palette.primary);


ReactDOM.render(
  <React.StrictMode>
    {/* <ThemeProvider theme={theme}> */}
    <MusclesProvider>
      <App />
    </MusclesProvider>
    {/* </ThemeProvider> */}
  </React.StrictMode>,
  document.getElementById('root')
);

