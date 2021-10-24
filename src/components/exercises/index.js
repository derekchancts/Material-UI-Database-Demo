import React, { Fragment, useState, useEffect } from 'react';
import {  
  Typography,
  Paper,
  Grid,
  // List,
  ListItem,
  ListItemText,
  IconButton,
} from '@mui/material';
import DeleteOutlineOutlinedIcon from '@mui/icons-material/DeleteOutlineOutlined';
// import Delete from '@mui/icons-material/Delete';
import EditOutlinedIcon from '@mui/icons-material/EditOutlined';
// import { Delete, Remove, RemoveCircle } from '@mui/icons-material'
import Form from './Form';
import makeStyles from '@mui/styles/makeStyles';


const useStyles = makeStyles(theme => ({
  Paper: {
    padding: "20px",
    margin: "10px 0",
    // height: "500px",
    minHeight: "70vh",
    maxHeight: "70vh",
    overflowY: "auto",  // makes it scrollable
     
  
    [theme.breakpoints.down('sm')]: {
      // backgroundColor: 'red',
      minHeight: "35vh",
      maxHeight: "35vh",
    }, 
  },
  spacing: {
    padding: theme.spacing(2),

    [theme.breakpoints.down('sm')]: {
      padding: theme.spacing(0)
    }, 
  }
  }));


// const styles = {
//   Paper: {
//     padding: "20px",
//     margin: "10px 0",
//     // height: "500px",
//     minHeight: "70vh",
//     maxHeight: "70vh",
//     overflowY: "auto",  // makes it scrollable
//   }
// }



const Props = ({
  exercise, 
  selectedCategory, 
  onSelect,
  // selectedExercise: {
  //   id, 
  //   title = "Welcome!",   // set a default value "Welcome!" for title
  //   description = "Please select an exercise from the left."
  // },
  selectedExercise,
  setSelectedExercise,
  exerciseList,
  onDelete,
  onSelectEdit,
  editMode,
  muscles,
  categories,
  setEditMode,
  selectedExercises,
  onEditExercise
}) => {

  const classes = useStyles();

  // const { id, title = "Welcome!", description = "Please select an exercise from the left."} = selectedExercise;

  // const [selectedId, setSelectedId] = useState("");
  const [selectedtitle, setSelectedtitle] = useState('');
  const [selecteddescription, setSelecteddescription] = useState('');


  
  useEffect(() => {
    // console.log(selectedExercise)
    // console.log(selectedExercise.title)
    // console.log(selectedExercise.description)
    
    // setSelectedId(selectedExercise.id)
    setSelectedtitle(selectedExercise.title);
    setSelecteddescription(selectedExercise.description)
  }, [selectedExercise])


  
  return (
    
    // <Grid container spacing={2}>
    <Grid container className={classes.spacing}> 

      <Grid item xs={12} sm={6}>
        {/* <Paper style={styles.Paper}> */}
        {/* <Paper className={classes.Paper} sx={{ overflowY: "auto" }}> */}
        <Paper className={classes.Paper}>
          {exercise.map(([group, exerciseItem]) => 
          !selectedCategory || selectedCategory === group
            ? <Fragment key={group}>
                <Typography 
                  variant="h6"
                  sx={{ textTransform: "capitalize", fontWeight: "bold"}}
                >
                  {group}
                </Typography>

                <ListItem component="ul" sx={{ flexDirection: 'column' }}>
                  {exerciseItem.map(item => 
                  
                    <ListItem 
                      key={item.id}
                      button
                      onClick={() => onSelect(item.id)}
                    >
                      
                      <ListItemText 
                        primary={item.title}
                      />

                      <>
                        <IconButton onClick={() => onSelectEdit(item.id)}>
                          <EditOutlinedIcon color="info" />
                        </IconButton>
                      </>

                      <>
                        <IconButton onClick={() => onDelete(item.id)}>
                          <DeleteOutlineOutlinedIcon color="warning" />
                        </IconButton>
                      </>

                    </ListItem>
                    
                  )}
                </ListItem>
              </Fragment>
            : null
          
        
          )}
        </Paper>

        {/* <Grid item sm>
        <Paper sx={{ padding: "20px", my: "10px" }}>
          {exercise.map((exercise) => console.log()
            
          )}
        </Paper> */}
      </Grid>



      <Grid item xs={12} sm={6}
      >
      {/* <Paper style={styles.Paper} >
          <Typography
            variant="h4"
          >Welcome!</Typography>
          <Typography
            variant="subtitle1"
            sx={{ mt: '20px'}}
          >Please select an exercise from the left.</Typography>
      </Paper> */}

      {/* <Paper style={styles.Paper} > */}
      <Paper className={classes.Paper}>
        { editMode 
          ? <Form 
              muscles={muscles} 
              categories={categories} 
              setEditMode={setEditMode}
              selectedExercises={selectedExercises}
              onEditExercise={onEditExercise}
            />
          : <>
              <Typography 
                variant="h4"
              // >{selectedtitle ? selectedtitle : "Welcome!"}</Typography>
              >{selectedtitle ? selectedtitle : "Welcome!"}</Typography>
              <Typography
                variant="subtitle1"
                sx={{ mt: '20px'}}
              >{selecteddescription ? selecteddescription : "Please select an exercise from the left."}</Typography>
            </>
        }

     
      </Paper>

      </Grid>


    </Grid>
  )
}

export default Props
