import React, { Component } from 'react';
import './App.css';

class App extends Component {
  render() {
    return (
		<ul className="navigation">
			<li><a>首页</a></li>
			<li><a>精华</a></li>
			<li><a>关于</a></li>
			<li><a>登录</a></li>
		</ul>
    );
  }
}

export default App;
