import React, { Fragment } from 'react';
import {  
  Typography,
  Paper,
  Grid,
  // List,
  ListItem,
  ListItemText 
} from '@mui/material';


const styles = {
  Paper: {
    padding: "20px",
    margin: "10px 0",
    // height: "500px",
    maxHeight: "70vh",
    overflowY: "auto",  // makes it scrollable
  }
}


const Props = ({ 
  exercise, 
  selectedCategory, 
  onSelect,
  selectedExercise: {
    id, 
    title = "Welcome!",   // set a default value "Welcome!" for title
    description = "Please select an exercise from the left."
  } 
}) => {

  // console.log(exercise)

  // const  [group]  = exercise;
  // console.log(group)

  // console.log(exercise[0])

  return (
    <Grid container spacing={2}>

      <Grid item sm>
        <Paper style={styles.Paper}>
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
                      // key={item.title}
                      button
                      onClick={() => onSelect(item.id)}
                    >
                      <ListItemText 
                        primary={item.title}
                      />
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


      <Grid item sm>
      {/* <Paper style={styles.Paper} >
          <Typography
            variant="h4"
          >Welcome!</Typography>
          <Typography
            variant="subtitle1"
            sx={{ mt: '20px'}}
          >Please select an exercise from the left.</Typography>
      </Paper> */}

      <Paper style={styles.Paper} >
        <Typography 
          variant="h4"
        >{title}</Typography>
        <Typography
          variant="subtitle1"
          sx={{ mt: '20px'}}
        >{description}</Typography>
      </Paper>

      </Grid>


    </Grid>
  )
}

export default Props
