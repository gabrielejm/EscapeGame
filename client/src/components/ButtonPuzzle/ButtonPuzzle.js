import React from "react";
import Button from './Button'
import Submit from "./submit";

const ButtonPuzzle = () => {
    const colors = ['red', 'green']
    const newColor = (arr) =>{
        return arr[Math.floor(Math.random()* Math.floor(arr.length))]
      }

    return (
    <>
        <Button color = {newColor(colors)}/>
        <Button color = {newColor(colors)}/>
        <Button color = {newColor(colors)}/>
        <Button color = {newColor(colors)}/>
        <Button color = {newColor(colors)}/>
        <div>
        <Submit />
        </div>
    </>
    )
};

export default ButtonPuzzle