import React, { Component } from 'react'
import  { Link } from 'react-router-dom'
import './Header.css';

class Header extends Component {
    constructor (props) {
        super(props);
        this.handleMenu = this.handleMenu.bind(this);
        this.state = {
            status: true
        }
    }
	handleMenu() {
		this.setState({status: !this.state.status});
	}
	render() {
		const hide = {
            display: 'none'
        };
        const show = {
            display: 'block'
        };
        var menuStyle = this.state.status === true ? show : hide;
		return (
			<div>
                <Link to="/">
                	<img className="logo" src="http://o4j806krb.qnssl.com/public/images/cnodejs_light.svg" alt="cnode" />
                </Link>
				<ul className="navigation">
					<li style={menuStyle}><Link to="/">首页</Link></li>
					<li style={menuStyle}><Link to="/about">关于</Link></li>
				</ul>
				<div className="muneBtn" onClick={this.handleMenu}>
					<img className="menu" src={require('../../assets/images/menu.png')} alt="menu"/>
				</div>
			</div>
			
		)
	}
}

export default Header;