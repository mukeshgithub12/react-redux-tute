import React, { Component } from "react";

export default class EventHandling extends Component {
  testFunction() {
    alert("alert now");
  }
  render() {
    return (
      <div>
        <hr />
        <h1>EventHandling</h1>
        <button onClick={this.testFunction.bind()}>Event</button>
      </div>
    );
  }
}
