import React from 'react'

function FunctionBase( prop) {
    const mk = prop.title
    const ALERTBTN = () =>{
        alert(mk);
    }
  return (
    <>
    <hr/>
    <h1>Welcome to function base component</h1>
    <button onClick={ALERTBTN}>Click</button>
    <h2>{prop.title2.name}</h2>
    </>
  )
}

export default FunctionBase
