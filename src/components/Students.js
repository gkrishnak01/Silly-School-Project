import React, { useState,useEffect } from 'react'
import axios from "axios"
import IndividualStudent from './IndividualStudent';
import "./user.css"
import { Modal } from "@material-ui/core"

import UpdateStudent from "./UpdateStudent"


function Students() {

    const [studentData,setStudentData] = useState();
    const [view,setView] = useState();

    const getData = () => {
        axios.get("https://drf-school-api.herokuapp.com/students").then( function (response) {setStudentData(response.data)})
    }

    useEffect(() => {
        getData()
    }, [])

    useEffect(() => {
        setView(studentData?.map( each => <IndividualStudent each={each} handleModal={handleModal} getData={getData}/>))
    }, [studentData])

    const [modal,setModal] = useState(false);
    const [modalView,setModalView] = useState();

    const handleModal = (modalProps) => {
        setModal(value => !value)
        setModalView(<UpdateStudent data={modalProps} getData={getData} handleModal={handleModal}/>)
    }


    return (
        <div className="container">
            <Modal
          open={modal}
          onClose = {()=>setModal(false)}> 
            {modalView}
          </Modal>
            {view ? view : null}
            <div onClick={() => handleModal(null)} className="createIcon"><div>+</div></div>
        </div>
    )
}

export default Students
