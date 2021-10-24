import React, { useState, useEffect } from 'react';
import {  
  DialogActions,
  TextField,
  Button,
  FormControl,
  InputLabel,
  Select,
  MenuItem
} from '@mui/material';



const Form = ({ 
  muscles: categories, 
  setEditMode, 
  selectedExercises,
  onEditExercise
}) => {

  const [id, setId] = useState(selectedExercises.id)
  const [title, setTitle] = useState(selectedExercises.title);
  const [description, setDescription] = useState(selectedExercises.description);
  const [muscles, setMuscles] = useState(selectedExercises.muscles);



  useEffect(() => {
    // console.log(selectedExercises)

    setId(selectedExercises.id)
    setTitle(selectedExercises.title)
    setDescription(selectedExercises.description)
    setMuscles(selectedExercises.muscles)

  }, [selectedExercises])



  const emptyValues = () => {
    setTitle('');
    setDescription('');
    setMuscles('');
  };


  const handleSubmit = () => {
    // INPUT VALIDATION

    const newExercise = {id, title, description, muscles};
    onEditExercise(newExercise)
    // console.log(newExercise)

    setEditMode(false);
    emptyValues();
  };


  const handleCancel = () => {
    setEditMode(false);
    emptyValues();
  }


  
  return (
    <form>
      <TextField
        variant="outlined"
        id="title"
        label="Title"
        placeholder="Please enter title"
        value={title}
        onChange={(e) => setTitle(e.target.value)}
        fullWidth
        sx={{ mb: '.5rem'}}
      />

      <FormControl fullWidth sx={{ mb: '.5rem' }}>
        <InputLabel id="muscle">Muscles</InputLabel>
        <Select
          labelId="muscle"
          id="muscles"
          value={muscles}
          label="Mucles"
          onChange={(e) => setMuscles(e.target.value)}
        >
          {categories.map(category => 
            <MenuItem key={category} value={category}>{category}</MenuItem>
          )}
        </Select>
      </FormControl>

      <TextField
        variant="outlined"
        id="description"
        label="Description"
        placeholder="Please enter description"
        value={description}
        onChange={(e) => setDescription(e.target.value)}
        fullWidth
        multiline
        rows={4}
      />
      <br />

      <DialogActions sx={{ justifyContent: "center", mb: ".5rem"}}>
        <Button onClick={handleSubmit} variant="contained">Edit</Button>
        <Button onClick={handleCancel} variant="contained" color="secondary">Cancel</Button>
      </DialogActions>


    </form>
  )
}

export default Form
