import React, { useState, useEffect, useContext } from 'react';
// import { Header, Footer } from "./components/layouts"
import Footer from "./components/layouts/Footer";
import Header from "./components/layouts/Header";
import Exercises from './components/exercises';

// import { muscles, exercises } from './data/store';
import CssBaseline from '@mui/material/CssBaseline';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import { red, amber } from '@mui/material/colors';
import { MusclesContext } from './context';



const App = () => {

  const { 
    exerciseList, 
    // setExerciseList,
    muscles,
    toggleDark,
    // settoggleDark,
    // setEditMode,
    // handleExerciseSelected,
    // selectedExercise,
    // setSelectedExercise,
    // handleExerciseDelete,
    // handleExerciseSelectEdit,
    // handleExerciseCreate,
    // handleExerciseEdit,
    // selectedCategory,
    // exercise,
    setExercise
  } = useContext(MusclesContext);


  // const [exerciseList, setExerciseList] = useState(exercises);
  // const [exercise, setExercise] = useState([]);
  // const [selectedCategory, setSelectedCategory] = useState('');
  // const [selectedExercise, setSelectedExercise] = useState('');
  // const [editMode, setEditMode] = useState(false);
  // const [toggleDark, settoggleDark] = useState(false);


  const theme = createTheme({
    palette: {
      primary: red,
      secondary: {
        // main: amber[500],
        // main: "#ffc107",   // hex code for amber[500],
        main: amber.A400, 
  
        // if we define only the "main" color, then MUI will recalculate / pick the colors for "light" and "dark"
        // light: 
        // dark: 
        light: amber[200],
        dark: amber[700]
      },
      // mode: 'light'
      mode: toggleDark ? 'dark' : 'light',
      // spacing: {
      //   unit: "10px"
      // }
    }
  });
  // console.log(theme);
  // console.log(red);
  // console.log(theme.palette.primary);



//   useEffect(() => {
//     async function getData() {

//       const initExercises = muscles.reduce((exercises, category) => ({
//         ...exercises,
//         [category]: []  // create empty array for each category
//       }), {})
//       // console.log(muscles, initExercises);

//       // https://stackoverflow.com/questions/24074968/does-sort-function-change-original-array
//       function compare( a, b ) {
//         if ( a.title < b.title ){
//           return -1;
//         }
//         if ( a.title > b.title ){
//           return 1;
//         }
//         return 0;
//       }

//       // SORTS THE NEW ARRAY, BUT NOT ALTERING THE ORIGINAL ARRAY
//       let sortedExerciseList = exerciseList.slice().sort(compare);
//       // let sortedExerciseList = exerciseList;
//       // sortedExerciseList = sortedExerciseList.slice().sort(compare);
//       // console.log(exerciseList)
//       // console.log(sortedExerciseList)


//       const getExecisesByMuscles = () => {
//         // return Object.entries( exerciseList.reduce((exercises, exercise) => {
//         return Object.entries( sortedExerciseList.reduce((exercises, exercise) => {
//           const { muscles } = exercise;

//           /*
//           exercises[muscles] = 
//           exercises[muscles]  // if exercises[muscles] exist or not empty / not undefined
//           ? [...exercises[muscles], exercise]   // if array already exist, add the "exercise" object to the array 
//                                                 // (to the new array after spreading the values of the existing array)
//           : [exercise]    // otherwise, create a new array with the exercise object alone
//           */
         
//         // after we use "initExercises", there's no need to check if the muscle category already exist
//         exercises[muscles] = [...exercises[muscles], exercise]  

//         return exercises  // returns an object 

//           // }, {})
//           }, initExercises)
//           )
//       };

//       let data = await getExecisesByMuscles();
//       setExercise(data);
//     }

//     getData()
//   }, 
// [exerciseList])




useEffect(() => {
  async function getData() {

    const initExercises = muscles.reduce((exercises, category) => ({
      ...exercises,
      [category]: []  // create empty array for each category
    }), {})
    // console.log(muscles, initExercises);

    // https://stackoverflow.com/questions/24074968/does-sort-function-change-original-array
    function compare( a, b ) {
      if ( a.title < b.title ){
        return -1;
      }
      if ( a.title > b.title ){
        return 1;
      }
      return 0;
    }
    
    // SORTS THE NEW ARRAY, BUT NOT ALTERING THE ORIGINAL ARRAY
    let sortedExerciseList = exerciseList.slice().sort(compare);

    const getExecisesByMuscles = () => {
      return Object.entries( sortedExerciseList.reduce((exercises, exercise) => {
        const { muscles } = exercise;
        exercises[muscles] = [...exercises[muscles], exercise]  

        return exercises  // returns an object 
      }, initExercises)
      )
    };

    let data = await getExecisesByMuscles();
    setExercise(data);
  }

  getData()
}, 
[exerciseList, muscles, setExercise])



  // const handleExerciseSelected = (id) => {
  //   const foundExercise = exerciseList.find(exercise => exercise.id === id)
  //   // console.log(foundExercise)

  //   setSelectedExercise(foundExercise);
  // };


  // const handleExerciseCreate = newExercise => {
  //   // console.log(newExercise)
  //   setExerciseList([
  //     ...exerciseList,
  //     newExercise
  //   ])
  //   // console.log(exerciseList)
  // };



  // const handleExerciseDelete = async (id) => {
  //   // console.log(id)
    
  //   const newList = exerciseList.filter(exercise1 => exercise1.id !== id)
  //   // console.log(newList)
  //   await setExerciseList(newList)
  //   await setEditMode(false);

  //   // await setSelectedExercise({});
  //   let temp = selectedExercise.id === id ? {} : selectedExercise;
  //   await setSelectedExercise(temp)
  //   // await console.log(selectedExercise)
  // };


  // const handleExerciseSelectEdit = id => {
  //   setEditMode(true);

  //   const foundExercise = exerciseList.find(exercise => exercise.id === id);
  //   setSelectedExercise(foundExercise);
  // };


  // const handleExerciseEdit = (editExercise) => {
  //   // console.log(editExercise)
  //   // const filteredExercises = exerciseList.filter(exercise => exercise.id !== editExercise.id);

  //   setSelectedExercise(editExercise);   // update this so useEffect can sync the props correctly with the state

  //   setExerciseList([
  //     // ...filteredExercises,
  //     ...exerciseList.filter(exercise => exercise.id !== editExercise.id),
  //     editExercise
  //   ])
  // };
 

  
  // exercise = getExecisesByMuscle()

  return (
    <>
     <CssBaseline />
     
      {/* {console.log(getExecisesByMuscle())} */}
      <ThemeProvider theme={theme}>
        <Header 
          // muscles={muscles}
          // onExerciseCreate={handleExerciseCreate}
          // toggleDark={toggleDark}
          // settoggleDark={settoggleDark}
        />

        <Exercises 
          // exercise={exercise} 
          // selectedCategory={selectedCategory} 
          // onSelect={handleExerciseSelected}
          // selectedExercise={selectedExercise}
          // onDelete={handleExerciseDelete}
          // onSelectEdit={handleExerciseSelectEdit}
          // editMode={editMode}
          // setEditMode={setEditMode}
          // muscles={muscles}
          // onEditExercise={handleExerciseEdit}
          // selectedExercises={selectedExercise}
        />

        <Footer 
          // muscles={muscles} 
          // selectedCategory={selectedCategory} 
          // setSelectedCategory={setSelectedCategory} 
        />
      </ThemeProvider>

    </>
  );
}

export default App;
