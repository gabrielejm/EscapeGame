import React, {useState, useEffect} from 'react'
import './ButtonPuzzle.css'

const Button = ({color}) => {
    const [backColor, setBackColor] = useState()

    useEffect(()=> {
        setBackColor(color)
    }, [])

    const toggle = () => {
        backColor === 'green' ? setBackColor('red') : setBackColor('green')
    }

    return (
        <button className="button" onClick={toggle} style={{backgroundColor: backColor}}></button>
    )
}

export default Button