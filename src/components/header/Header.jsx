import React, { Component } from 'react'
import  { Link } from 'react-router-dom'
import './Header.css';

class Header extends Component {
    constructor (props) {
        super(props);
        this.handleMenu = this.handleMenu.bind(this);
        this.resize = this.resize.bind(this);
        this.closeMenu = this.closeMenu.bind(this);
        this.state = {
            status: false
        }
    }
	handleMenu() {
		this.setState({status: !this.state.status});
	}

	resize() {
		if ( window.innerWidth > 600 ) {
			this.setState({status: true});
		} else {
			this.setState({status: false});
		}
	}

	closeMenu() {
		if (window.innerWidth < 600) {
			this.setState({status: false});
		}
	}

	componentDidMount() {
		window.addEventListener('resize', this.resize)
	}

	render() {
		const hide = {
            display: 'none'
        };
        const show = {
            display: 'block'
        };
        // var menuStyle = this.state.status === true ? show : hide;
        var menuStyle = window.innerWidth > 600 ? show : (this.state.status === true ? show : hide);
		return (
			<div>
                <Link to="/">
                	<img className="logo" src="http://o4j806krb.qnssl.com/public/images/cnodejs_light.svg" alt="cnode" />
                </Link>
				<ul className="navigation">
					<li style={menuStyle} onClick={this.closeMenu}><Link to="/">首页</Link></li>
					<li style={menuStyle} onClick={this.closeMenu}><Link to="/about">关于</Link></li>
				</ul>
				<div className="muneBtn" onClick={this.handleMenu}>
					<img className="menu" src={require('../../assets/images/menu.png')} alt="menu"/>
				</div>
			</div>
			
		)
	}
}

export default Header;