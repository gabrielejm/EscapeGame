import React, { useContext } from 'react'
import {ModalContext} from './ModalContext'
let modal 

const Modal = () => {
    //Calls Modal Context
    modal = useContext(ModalContext)
    //allows us to insert the new messages into the modal
    const message = modal.modalAttributes.message
    //Styling the Pieces of the Component
    const image = 'https://www.pngfind.com/pngs/m/377-3773029_9-blank-scroll-banner-png-for-free-download.png'
    const buttonStyle = {
        color: "red",
        backgroundColor: "#d4c79d",
        left: "15px",
        top: "5px",
        position: "absolute",
        borderColor: "#d4c79d",

    }
    const modalStyle = {
        height: "30%",
        width: "40%",
        backgroundImage: `url(${image})`,
        backgroundSize: "140% 140%",
        backgroundPosition: "center",
        position: "absolute",
        right: "29%",
        top: "34%",
        visibility: "hidden"
    }
    const textStyle = {
        marginTop: "10%",
        marginLeft: '5%',
        width: '90%'
    }

    // Hides Modal
    const hide = () => {
        document.getElementById('modal').style.visibility = "hidden"
    }

    //Returns the Component
    return (
        <div style = {modalStyle} id = "modal">
            <button style = {buttonStyle} onClick = {hide}> X </button>
            <p style = {textStyle} id = "text">{message}</p>
        </div>
    )
}

export default Modal