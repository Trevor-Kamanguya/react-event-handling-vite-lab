// Code SubmitButton Component Here
import React from "react";

function SubmitButton (){
    function handleEnter(){
        console.log("Mouse Entered")
    }
    function handleLeave(){
        console.log("Mouse Exiting")
    }
    return(
        <>
            <button onMouseEnter={handleEnter} onMouseLeave={handleLeave}>Submit password</button>
        </>
    )
}

export default SubmitButton;