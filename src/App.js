import React, { useState, useEffect } from 'react';
// import { Header, Footer } from "./components/layouts"
import Footer from "./components/layouts/Footer";
import Header from "./components/layouts/Header";
import Exercises from './components/exercises';
import { muscles, exercises } from './data/store';



function App() {
  const [exerciseList, setExerciseList] = useState(exercises);
  const [exercise, setExercise] = useState([]);
  const [selectedCategory, setSelectedCategory] = useState('');
  const [selectedExercise, setSelectedExercise] = useState('');



  // function getExecisesByMuscles1() {
  //   return exerciseList
  // }



  /*
  const getExecisesByMuscles = () => {

    // Object.entries - returns an array of [key, value] pairs
    return Object.entries( exerciseList.reduce((exercises, exercise) => {    // exercises = accumulator

      const { muscles } = exercise;  // shoulders, arms, chest, back or legs
      // console.log(muscles)

      // console.log(exercises)   // console.log the accumulator, initially it's an empty object as we defined below
      // console.log(exercises[muscles])  // gets "undefined" the 1st time, when the array (of objects) doesn't exist
                                          // if it exist, then exercises[muscles] 
      // console.log(exercise)  // iterating each exercise
                           
    // exercises[muscles] = 
      // exercises[muscles] !== undefined 

      exercises[muscles] = 
        exercises[muscles]  // if exercises[muscles] exist or not empty / not undefined
        ? [...exercises[muscles], exercise]   // if array already exist, add the "exercise" object to the array 
                                              // (to the new array after spreading the values of the existing array)
        : [exercise]    // otherwise, create a new array with the exercise object alone

      return exercises  // returns an object 

    }, {})
    )
  };
*/


  useEffect(() => {
    async function getData() {

      const getExecisesByMuscles = () => {
        return Object.entries( exerciseList.reduce((exercises, exercise) => {
          const { muscles } = exercise;
          exercises[muscles] = 
          exercises[muscles]  // if exercises[muscles] exist or not empty / not undefined
          ? [...exercises[muscles], exercise]   // if array already exist, add the "exercise" object to the array 
                                                // (to the new array after spreading the values of the existing array)
          : [exercise]    // otherwise, create a new array with the exercise object alone

        return exercises  // returns an object 

          }, {})
          )
      };

      let data = await getExecisesByMuscles();
      setExercise(data);
    }

    getData()
  }, 
[exerciseList])
  

/*
  const getExecisesByMuscle = () => {
    let exercises = [];

    exerciseList.map(exercise => {
      const { muscles } = exercise; 
      // console.log(exercises)
      // console.log(exercises[muscles])

      exercises[muscles] = 
      exercises[muscles] ? [...exercises[muscles], exercise] : [exercise] 
      
      // console.log(exercises)
      // return (
      //   exercises
      // )
    })

    return exercises
    
  };
*/


  const handleExerciseSelected = (id) => {
    const foundExercise = exerciseList.find(exercise => exercise.id === id)
    // console.log(foundExercise)

    setSelectedExercise(foundExercise);
  };


  const onExerciseCreate = newExercise => {
    // console.log(newExercise)
    setExerciseList([
      ...exerciseList,
      newExercise
    ])
    // console.log(exerciseList)
  };


  
  // exercise = getExecisesByMuscle()


  return (
    <>
      {/* {console.log(getExecisesByMuscle())} */}
      
      <Header 
        muscles={muscles}
        onExerciseCreate={onExerciseCreate}
      />

      <Exercises 
        exercise={exercise} 
        // setExerciseList={setExerciseList}
        selectedCategory={selectedCategory} 
        onSelect={handleExerciseSelected}
        selectedExercise={selectedExercise}
      />

      <Footer 
        muscles={muscles} 
        selectedCategory={selectedCategory} 
        setSelectedCategory={setSelectedCategory} 
      />

    </>
  );
}

export default App;
