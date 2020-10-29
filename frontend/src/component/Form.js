import React,{useState} from 'react'
import {Link, Redirect} from 'react-router-dom'
import { useFormik } from 'formik'
import axios from 'axios'
import * as Yup from 'yup'
import {Button,Typography,TextField} from '@material-ui/core'

function Form(props) {

  const [message,setMessage] = useState([])
  const [isLoggedIn, setLoggedIn] = useState(false);
  const  validatonSchema = Yup.object({
    username: Yup.string().required('Required'),
    password: Yup.string().required('Required')
  })
  const formik = useFormik({
    initialValues: {
      username: '',
      password:'',},

    onSubmit: values =>{
      axios({
        method:'post',
        url:'http://hitlerway.pythonanywhere.com/auth/',
        data: values
      })
      .then((response)=>{
        // console.log(response.data.token)
        setLoggedIn(true);
        {props.userlogin(response.data.token)}

      })
      .catch(function (error) {
        console.log(error);
        });

    },
    validatonSchema,
  })
  if(isLoggedIn){
        return (<Redirect to={'/greet'}/>)
    }
  return (
    <div>
    <center>
    <Typography variant = 'h2'>
      Login to Reveal Mesg
    </Typography>
      <form onSubmit = {formik.handleSubmit} >
              <TextField variant="outlined" type = "text" name = "username" id = "username" onChange = {formik.handleChange} value = {formik.values.username} label = "Enter Username" />
              <br></br>
              <br></br>
              <TextField variant="outlined"  label = "Password" type = "password" name = "password" id = "password" onChange = {formik.handleChange} value = {formik.values.password}/>
                <br></br>
                <br></br>
                <Button color = "primary" variant = "outlined" type = 'submit'>Login</Button>
      </form>
      </center>


      </div>
  );
}

export default Form
