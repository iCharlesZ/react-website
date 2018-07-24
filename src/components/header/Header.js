import React, { Component } from 'react'
import  { Link } from 'react-router-dom'
import './Header.css';

class Header extends Component {
	render() {
		return (
			<div>
                <Link to="/">
                	<img className="logo" src="http://o4j806krb.qnssl.com/public/images/cnodejs_light.svg" alt="cnode" />
                </Link>
				<ul className="navigation">
					<li><Link to="/">首页</Link></li>
					<li><Link to="/about">关于</Link></li>
				</ul>
			</div>
			
		)
	}
}

export default Header;