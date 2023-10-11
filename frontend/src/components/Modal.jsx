import {React, useRef, useEffect, useState} from 'react'
import axios from "axios";



const Modal = ({showModal, setShowModal, setAllStudents}) => {
    const ModalRef = useRef(0);
    const initialState = {
        name: "",
        email: "",
        age: 18
    }
    const [studentInfos, setStudentInfos] = useState(initialState) 


    const sendToBack = async () => {
        await axios.post("http://localhost:4000/students", studentInfos).then((data) => {
            setAllStudents(current => [...current, {...studentInfos, id: data.data._id}])
        }).catch((err) => {
            console.log(err)
        })
        
    }

    const validateAdd = () => {
        sendToBack()
        setStudentInfos(initialState)
        setShowModal(false)
    }

    useEffect(() => {
		const HanleModal = (event) => {
			if (ModalRef.current && !ModalRef.current.contains(event.target)) {
                setStudentInfos(initialState)
				setShowModal(false)
			  }
		}
		if (showModal)
			document.addEventListener('click',HanleModal,true);
		return () => {
		  document.removeEventListener('click',HanleModal,true);
		}
	  }, [showModal])


  return (
    <>
        {showModal ? 
            <>
                <div className="modal-container">
                    <div ref={ModalRef} className="modal">
                        <h1>Student Infos</h1>
                        <div className='name-input'>
                            <p style={{margin: '0', marginTop: "3px"}}>student name:</p>
                            <div className='input-error-container'>
                                <input type='text' placeholder='student name' className='input-infos' value={studentInfos.name} onChange={(e) => setStudentInfos({...studentInfos, name : e.target.value})}/>
                            </div>
                        </div>
                        <div className='name-input' style={{marginTop: '20px'}}>
                            <p style={{margin: '0', marginTop: "3px"}}>student age:</p>
                            <div className='input-error-container'>
                                <input type='number' placeholder='student age' className='input-infos' value={studentInfos.age} onChange={(e) => setStudentInfos({...studentInfos, age : e.target.value})}/>
                            </div>
                        </div>
                        <div className='name-input' style={{marginTop: '20px'}}>
                            <p style={{margin: '0', marginTop: "3px"}}>student email:</p>
                            <div className='input-error-container'>
                                <input type='email' placeholder='student email' className='input-infos' value={studentInfos.email} onChange={(e) => setStudentInfos({...studentInfos, email : e.target.value})}/>
                            </div>
                        </div>
                        <div className='buttons-container'>
                            <button 
                                className='button-modal' 
                                onClick={() => {
                                    setStudentInfos(initialState)
                                    setShowModal(false)
                                }}
                                style={{backgroundColor: 'red'}}
                            >
                                    Annuler
                            </button>
                            <button 
                                className='button-modal' 
                                style={{backgroundColor: 'limegreen'}} 
                                onClick={() => {validateAdd()}}>
                                    Add
                            </button>
                        </div>
                    </div>
                </div>
                <div className='background-modal'/>
            </> 
        : null}
    </>
  )
}

export default Modal