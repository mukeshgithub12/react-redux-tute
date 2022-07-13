import React from 'react'
import { useState,useEffect } from 'react';

const HooksMeathod = () => {
 const [count, setCount]  = useState(1);
 useEffect(() =>{
  console.log(count)
 },[count==5]) 
  return (
    <>
    <hr />
     <p>Update Number: {count} </p>
     {/* <button onClick={() => {setCount(count+1)}}>Update </button> \ */}
     <button onClick={() => {setCount(count+1)}}>Update</button>
    </>
  )
}

export default HooksMeathod
