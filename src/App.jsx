import React, { Component } from 'react';
import Routes from './router/index.jsx'
import GoTop from './components/goTop/GoTop.jsx'
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
