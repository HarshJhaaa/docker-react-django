import React,{useState} from 'react';
import axios from 'axios'
import {Button,Typography,TextField} from '@material-ui/core'
function Greet (props){

  const [greet,setGreet] = useState([])
  const [dis , setDis] = useState(true);

    function greety(){
      axios.get('http://0.0.0.0:8000/api/greet/', {
        headers: {
            'Authorization': `token ${props.token}`
          }
        }).then(response=>{
          console.log(response.data)
          setGreet(response.data)

        })
        .catch(response=>{
          console.log(response)
        });
    }

    return (
      <div>
      <center>

        <Button  variant = 'outlined' type = 'submit' onClick = {greety}>Load Seceret Message</Button>
        {
        greet.length ?
        greet.map(greets =><Typography variant = "h1" key ={greets.id}>{greets.messages}></Typography>):
        null
        }
        </center>
      </div>
    )
  }

export default Greet
