import React, { Component } from 'react'
import  { Link } from 'react-router-dom'
import './Header.css';

class Header extends Component {
	render() {
		return (
			<div>
				<img className="logo" src="http://o4j806krb.qnssl.com/public/images/cnodejs_light.svg" alt="cnode" />
				<ul className="navigation">
					<li><Link to="/">首页</Link></li>
					<li><Link to="/second">关于</Link></li>
				</ul>
			</div>
			
		)
	}
}

export default Header;