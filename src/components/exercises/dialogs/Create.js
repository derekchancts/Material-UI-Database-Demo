import React, { useState } from 'react';
import {  
  Dialog, 
  DialogTitle, 
  DialogContent,
  DialogContentText,
  DialogActions,
  TextField,
  Button,
  Fab,
  FormControl,
  InputLabel,
  Select,
  MenuItem
} from '@mui/material';
import AddIcon from '@mui/icons-material/Add';
import makeStyles from '@mui/styles/makeStyles';



const useStyles = makeStyles(theme => ({
  FormControl: {
    width: '500px'
  }
}))



const Props = ({ muscles: categories, onExerciseCreate }) => {
  const classes = useStyles();

  const [isOpen, setIsOpen] = useState(false)
  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');
  const [muscles, setMuscles] = useState('');
  

  const emptyValues = () => {
    setTitle('');
    setDescription('');
    setMuscles('');
  };


  const handleCreate = () => {
    // INPUT VALIDATION
    // console.log(title, description, muscles);

    const id = title.toLowerCase().replace(/ /g, '-')  // replace all empty spaces with -
    // const id = title.toLowerCase().split(' ').join('-')
    // console.log(id)

    const newExercise = {id, title, description, muscles};
    onExerciseCreate(newExercise);

    setIsOpen(!isOpen);
    emptyValues();
  };


  return (
    <>
      {/* <Fab color="primary" aria-label="add"> */}
      <Fab aria-label="add" size="small" onClick={() => setIsOpen(!isOpen)}>
        <AddIcon />
      </Fab>

      <Dialog open={isOpen} onClose={() => setIsOpen(!isOpen)} fullWidth >  
        <DialogTitle>
          Create a new exercise
        </DialogTitle>

        <DialogContent>
          <DialogContentText gutterBottom>
            Please fill out the form below
          </DialogContentText>
          <form>
            <TextField
              variant="outlined"
              id="title"
              label="Title"
              placeholder="Please enter title"
              value={title}
              onChange={(e) => setTitle(e.target.value)}
              fullWidth
              // className={classes.FormControl} 
              sx={{ mb: '.5rem'}}
            />

            <FormControl fullWidth sx={{ mb: '.5rem' }}>
            {/* <FormControl className={classes.FormControl}  sx={{ mb: '.5rem' }}> */}
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
              // className={classes.FormControl} 
              multiline
              rows={4}
            />
          </form>
        </DialogContent>

        <DialogActions sx={{ justifyContent: "center", mb: ".5rem"}}>
          <Button onClick={handleCreate} variant="contained">Create</Button>
        </DialogActions>

      </Dialog>
    </>
  )
}

export default Props
