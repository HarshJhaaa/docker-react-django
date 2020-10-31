import React,{useState} from 'react'
import {Link, Redirect} from 'react-router-dom'
import { useFormik } from 'formik'
import axios from 'axios'
import {Button,Typography,TextField} from '@material-ui/core'
function Register() {

  const [isLoggedIn, setLoggedIn] = useState(false);
  const [message,setMessage] = useState([])
  function Getdata(){
    axios.get('http://0.0.0.0:8000/auth/api/users/')
    .then((response) =>{
      console.log(response.data)
      setMessage(response.data)
    })
  }

  const formik = useFormik({
    initialValues: {
      username: '',
      password:'',
    },
    onSubmit: values =>{
      axios({
        method:'post',
        url:'http://0.0.0.0:8000/auth/api/users/',
        data: values
      }).then((response)=>{
        setLoggedIn(true);
      })
    }
  })

  if(isLoggedIn){
        return (<Redirect to={'/'}/>)
    }


  return (
    <div>
    <center>
    <Typography variant = "h2">Register Here!</Typography>
      <form onSubmit = {formik.handleSubmit}>
              <TextField variant="outlined"  label = "Enter Username" type = "text" name = "username" id = "username" onChange = {formik.handleChange} value = {formik.values.username}></TextField>
              <br></br>
              <br></br>
              <TextField variant="outlined"  label = "Password" type = "password" name = "password" id = "password" onChange = {formik.handleChange} value = {formik.values.password}></TextField>
              <br></br>
              <br></br>
              <Button color = "primary" variant = "outlined" type = 'submit'>Register</Button>
      </form>
      <br></br>
        <Button color = 'secondary' 	 type = 'submit' onClick = {Getdata}><Typography variant = "h5">Click to Check usernames not availble</Typography></Button>

        <ul>

          {
            message.length ?
            message.map(messages =><li key ={messages.id}>{messages.username}</li>):
            null
          }
        </ul>
        </center>
      </div>
  );
}

export default Register
