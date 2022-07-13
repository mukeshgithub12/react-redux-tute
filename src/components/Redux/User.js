import React from 'react'

const User = (props) => {
    console.log(props)
    const {data} = props
  return (
    <>
     <h2>Wecome To React Redux {data.name}</h2> 
     <h2>Age {data.age}</h2> 
    </>
  )
}

export default User
