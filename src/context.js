import React, { createContext, useState } from 'react';
import { muscles, exercises } from './data/store';


const MusclesContext = createContext();



const MusclesProvider = (props) => {
  const [exerciseList, setExerciseList] = useState(exercises);
  const [exercise, setExercise] = useState([]);

  const [selectedExercise, setSelectedExercise] = useState('');

  const [toggleDark, settoggleDark] = useState(false);
  const [editMode, setEditMode] = useState(false);

  const [selectedCategory, setSelectedCategory] = useState('');   // Footer


  
  const handleExerciseSelected = (id) => {
    const foundExercise = exerciseList.find(exercise => exercise.id === id)
    // console.log(foundExercise)
    setSelectedExercise(foundExercise);
  };


  const handleExerciseDelete = async (id) => {
    // console.log(id)
    const newList = exerciseList.filter(exercise1 => exercise1.id !== id)
    // console.log(newList)
    await setExerciseList(newList)
    await setEditMode(false);
    // await setSelectedExercise({});
    let temp = selectedExercise.id === id ? {} : selectedExercise;
    await setSelectedExercise(temp)
    // await console.log(selectedExercise)
  };


  const handleExerciseSelectEdit = id => {
    setEditMode(true);
    const foundExercise = exerciseList.find(exercise => exercise.id === id);
    setSelectedExercise(foundExercise);
  };


  const handleExerciseCreate = newExercise => {
    // console.log(newExercise)
    setExerciseList([
      ...exerciseList,
      newExercise
    ])
    // console.log(exerciseList)
  };

  
  const handleExerciseEdit = (editExercise) => {
    // console.log(editExercise)
    // const filteredExercises = exerciseList.filter(exercise => exercise.id !== editExercise.id);
    setSelectedExercise(editExercise);   // update this so useEffect can sync the props correctly with the state

    setExerciseList([
      // ...filteredExercises,
      ...exerciseList.filter(exercise => exercise.id !== editExercise.id),
      editExercise
    ])
  };
  

  const values = {
    exerciseList,
    setExerciseList,
    muscles,
    toggleDark,
    settoggleDark,
    editMode,
    setEditMode,
    handleExerciseSelected,
    selectedExercise,
    setSelectedExercise,
    handleExerciseDelete,
    handleExerciseSelectEdit,
    handleExerciseCreate,
    handleExerciseEdit,
    selectedCategory,
    setSelectedCategory,
    exercise,
    setExercise
  }

  
  return (
    <MusclesContext.Provider value={values}>
       {props.children}
    </MusclesContext.Provider>
  )

}


export { MusclesProvider, MusclesContext }