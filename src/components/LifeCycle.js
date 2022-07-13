import React, { Component } from 'react'

export default class LifeCycle extends Component {
    constructor()
    {
        super()
        console.log('constructor')
    }
    componentDidMount()
    {
        console.log('componentDidMount')
    }
  render() {
    return (
      <div>
        
      </div>
    )
  }
}
