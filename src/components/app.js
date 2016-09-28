import React, { Component } from 'react';
import Search from '../containers/search';
import List from '../containers/list'

export default class App extends Component {
  render() {
    return (
    	<main role="main">
    		<Search />
    		<List />
    	</main>
    );
  }
}
