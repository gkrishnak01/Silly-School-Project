import React,{useState} from 'react'
import { TextField,Button } from "@material-ui/core"
import axios from 'axios'

function UpdateTeacher(props) {

    const [name,setName] = useState(props.data?.name)
    const [experience, setExperience] = useState(props.data?.experience)
    const [subject, setSubject] = useState(props.data?.subject)

    const sendData = (event) => {

        event.preventDefault()
        const data = {
            "name":name,
            "subject":subject,
            "experience":parseInt(experience)   
        }
        if(props.data?.id)
        {
            axios.put(`https://drf-school-api.herokuapp.com/teachers/${props.data.id}/`,data).then(() => props.getData())
        }
        else
            axios.post("https://drf-school-api.herokuapp.com/teachers/",data).then(() => props.getData())
        props.handleModal()
    }
      
    return (
        <div>
            <div className="modalStyles">
                  <form className="edit" onSubmit={sendData}>
                    <TextField 
                        id="outlined-basic" 
                        label="Name" 
                        variant="outlined" 
                        value={name}
                        onChange={ event => event.target.value !== " " ? setName(event.target.value) : null} 
                    />
                    <br />
                    <TextField 
                        id="outlined-basic" 
                        label="Subject" 
                        variant="outlined" 
                        value={subject} 
                        onChange={ event => event.target.value !== " " ? setSubject(event.target.value) : null}
                    />
                    <br />
                    <TextField  
                        id="outlined-basic" 
                        label="Experience" 
                        variant="outlined" 
                        value={experience}
                        onChange={ event => event.target.value !== " " ? setExperience(event.target.value) : null}
                    />
                    <br />
                    <center>
                        <Button type="submit" variant="contained" color="primary" style={{width:"20%"}} >
                            Save
                        </Button>
                    </center>
                  </form>
              </div>
        </div>
    )
}

export default UpdateTeacher
