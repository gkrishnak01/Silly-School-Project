import React from 'react'
import user from "./icons/user.png"
import EditIcon from '@material-ui/icons/Edit';
import DeleteIcon from '@material-ui/icons/Delete';
import axios from 'axios';

function IndividualStudent(props) {

    const deleteEntry = () => {
        axios.delete(`https://drf-school-api.herokuapp.com/students/${props.each.id}/`).then(() => props.getData())
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
                <div><b>Grade:</b> {props.each.grade}</div>
                <div><b>Age:</b> {props.each.age}</div>
                <div><b>Major:</b> {props.each.major}</div>
            </div>

            <div className="options">
                <button onClick={() => props.handleModal(props.each)} className="editIcons"><EditIcon /></button>
                <br />
                <button className="editIcons" onClick={() => deleteEntry()}><DeleteIcon /></button>
            </div>
        </div>
    )
}

export default IndividualStudent
