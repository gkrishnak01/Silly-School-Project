import React, { useState,useEffect } from 'react'
import axios from "axios"
import IndividualTeacher from './IndividualTeacher';
import { Modal } from "@material-ui/core"
import UpdateTeacher from "./UpdateTeacher"

function Teachers() {
    const [teacherData,setTeacherData] = useState();
    const [view,setView] = useState();


    const getData = () => {
        axios.get("https://drf-school-api.herokuapp.com/teachers").then( function (response) {setTeacherData(response.data)})
    }

    useEffect(() => {
        getData()
    }, [])

    useEffect(() => {
        setView(teacherData?.map( each => <IndividualTeacher each={each} handleModal={handleModal} getData={getData} />))
    }, [teacherData])

    const [modal,setModal] = useState(false);
    const [modalView,setModalView] = useState();

    const handleModal = (modalProps) => {
        setModal(value => !value)
        setModalView(<UpdateTeacher data={modalProps} getData={getData} handleModal={handleModal}/>)
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

export default Teachers
