import React,{useState} from 'react'
import { TextField,Button } from "@material-ui/core"
import axios from "axios"


function UpdateStudent(props) {
    
    const [name,setName] = useState(props.data?.name);
    const [grade,setGrade] = useState(props.data?.grade);
    const [age,setAge] = useState(props.data?.age);
    const [major,setMajor] = useState(props.data?.major);
    
    const sendData = (event) => {
        event.preventDefault()
        const data = {
            "name":name,
            "age":age,
            "grade":grade,
            "major":major 
        }

        console.log(data)
        if(props.data?.id)
        {
            axios.put(`https://drf-school-api.herokuapp.com/students/${props.data.id}/`,data).then(() => props.getData())
        }
        else
            axios.post("https://drf-school-api.herokuapp.com/students/",data).then(() => props.getData())
    
        props.handleModal()
    }
    

    return (
        
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
                        label="Grade" 
                        variant="outlined" 
                        value={grade} 
                        onChange={ event => event.target.value !== " " ? setGrade(event.target.value) : null}
                    />
                    <br />
                    <TextField  
                        id="outlined-basic" 
                        label="Age" 
                        variant="outlined" 
                        value={age}
                        onChange={ event => event.target.value !== " " ? setAge(event.target.value) : null}
                    />
                    <br />
                    <TextField 
                        id="outlined-basic" 
                        label="Major" 
                        variant="outlined" 
                        value={major}
                        onChange={ event => event.target.value !== " " ? setMajor(event.target.value) : null} 
                    />
                    <br />
                    <center>
                        <Button type="submit" variant="contained" color="primary" style={{width:"20%"}} >
                            Save
                        </Button>
                    </center>
                  </form>
              </div>
    )
}

export default UpdateStudent
