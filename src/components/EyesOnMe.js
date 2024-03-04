// Code EyesOnMe Component Here
import React from 'react'

function EyesOnMe() {
    function onFocus(){
        console.log("Good!")
    }
    function onBlur(){
        console.log("Hey! Eyes on me!")
    }
  return (
    <div>
      <button onBlur={onBlur} onFocus={onFocus}>Eyes on me</button>
    </div>
  )
}

export default EyesOnMe;