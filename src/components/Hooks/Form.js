import React, { Component } from 'react'

export default class Form extends Component {
    constructor()
    {
        super();
        this.state={
          user:null,
          password:null
        }

    }
    submit() {
      console.log(this.state)
    }
  render() {
    return (
        <>
        <hr/>
        <h1>Form Handling</h1>
        <input onChange={(e)  => this.setState({user:e.target.value})} type="text" name="user" placeholder='Enter your username'/>
        <br/>
        <input onChange={(e)  => this.setState({password:e.target.value})} type="pasword" name="password" placeholder='Enter Your Password'/>
        <br/>
        <button onClick={() => this.state}>Submit</button>
        
      </>
    )
  }
}
