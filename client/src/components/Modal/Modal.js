import React from 'react'

const Modal = () => {
    const image = 'https://www.pngfind.com/pngs/m/377-3773029_9-blank-scroll-banner-png-for-free-download.png'

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


    return (
        <div style = {modalStyle} id = "modal">
            <p>Random Text</p>
        </div>
    )
}

export default Modal