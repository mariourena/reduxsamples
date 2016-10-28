import React, { Component } from 'react';

export default class App extends Component {
  render() {
    return (
      <main role="main">
      	{this.props.children}
      </main>
    );
  }
}
