import React from 'react'
import user from "./icons/user.png"
import EditIcon from '@material-ui/icons/Edit';
import DeleteIcon from '@material-ui/icons/Delete';
import axios from "axios"

function IndividualTeacher(props) {

    const deleteEntry = () => {
        axios.delete(`https://drf-school-api.herokuapp.com/teachers/${props.each.id}/`).then(() => props.getData())
    }
    
    return (
        <div className="card">
            <div>
                <img src={user} alt="user" className="headshot" />
                <br />
                <center><b>ID:</b> {props.each.id}</center>
            </div>
            
            <div className="details">
                <div><b>Name:</b> {props.each.name}</div>
                <div><b>Subject:</b> {props.each.subject}</div>
                <div><b>Experience:</b> {props.each.experience}</div>
            </div>

            <div className="options">
                <button onClick={() => props.handleModal(props.each)} className="editIcons"><EditIcon /></button>
                <br />
                <button className="editIcons" onClick={() => deleteEntry()} ><DeleteIcon /></button>
            </div>
        </div>
    )
}

export default IndividualTeacher
