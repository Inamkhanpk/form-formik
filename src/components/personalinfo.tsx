import React from 'react';
import { Formik, Field, Form, ErrorMessage } from 'formik';
import * as Yup from 'yup';
import TextField from '@material-ui/core/TextField'
import Button from '@material-ui/core/Button' 
import Paper from '@material-ui/core/Paper'
import { makeStyles } from '@material-ui/core/styles';
import { Box } from '@material-ui/core';
const useStyles = makeStyles((theme) => ({
  paper:{
    width:'50%',
    margin:'auto'
  },
  textc:{
    color:'red'
  }
}));
 export const Info = ({submit,setFormValues,prevValues}) => {
  const classes = useStyles();
   return (
     <Formik
       initialValues={prevValues}
       
       validationSchema={Yup.object({
        name: Yup.string()
           .max(15, 'Must be 15 characters or less')
           .min(5,"Must be 5 characters or more")
           .required('Required necessary'),
         password: Yup.string()
           .max(20, 'Must be 20 characters or less')
           .required('Required'),
           email: Yup.string()
           .email('Invalid email address')
           .required('Required'),
       })}
       onSubmit={(values) => {
         submit(1)
         setFormValues({...values})
       }}
     >
       <Form>
         <Paper className={classes.paper}>
         <label htmlFor="name"> Name</label>&nbsp;
         <Box paddingBottom={2}>
         <Field name="name" as={TextField} variant="outlined" type="text" />
         </Box>
         <ErrorMessage className={classes.textc} name="name" />
         <br/>
         <label htmlFor="password">Password</label>&nbsp;
         <Box paddingBottom={2}>
         <Field name="password" as={TextField} variant="outlined"  type="password" />
         </Box>
         <ErrorMessage className={classes.textc} name="password" />
         <br/>
         <label htmlFor="email">Email </label>&nbsp;
         <Box paddingBottom={2}>
         <Field name="email" as={TextField} variant="outlined"  type="email" />
         </Box>
         <ErrorMessage className={classes.textc} name="email" />
         <Button variant="contained" type="submit">Submit</Button>
         </Paper>
       </Form>
     </Formik>
   );
 };