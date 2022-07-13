import React, { Component } from 'react'

export default class Profile extends Component {
    constructor(){
        super()
    }
    componentDidMount(){
        console.log('Welcome To React Js');
    }
  render() {
    return (
      <>
      <hr/>
        <h1>Welcome To Class Base Component</h1>
      </>
    )
  }
}
