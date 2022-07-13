import React, { Component } from 'react'

export default class Toggle extends Component {
    constructor(){
        super();
        this.state={
            show: true
        }
    }
  render() {
    return (
        <>
        <hr/>
        {
            this.state.show ?
            <h1>This Toggle Meathod</h1>
            :null
        }
        
        {/* <h1>Toggle Meathod</h1>  */}
        <button onClick={() => {this.setState({show: !this.state.show})}}>Toggle Meathod</button>
       </>
    )
  }
}
