import React, { Component } from 'react';
import Routes from './router'
import GoTop from './components/goTop/GoTop'
import './App.css'

class App extends Component {
  render() {
    return (
    	<div>
    		<GoTop/>
    		<Routes />
    	</div>
    )
  }
}

export default App;
