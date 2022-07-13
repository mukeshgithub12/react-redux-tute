import React, { Component } from 'react'

export default class Home extends Component {
    constructor(){
        super()
        this.state  = {
            name:'Welcome To Mukesh Kumar (Class Components)',
            email:'zenscale@gmail.com',
            count:0
        }
    }
    UpdateState()
    { 
        this.setState({
            name: 'Welcome To Javascript Development',
            count: this.state.count + 1
        })
     }
  render() {
    return (
      <>
      <hr/>
        {/* <h1>Name: {this.state.name}</h1> */}
        <h1>Count: {this.state.count}</h1>
        <h1>Email: {this.state.email}</h1>
        <button onClick={() => {this.UpdateState()}}>Update State</button>
      </>
    )
  }
}
