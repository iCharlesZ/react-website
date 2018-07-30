import React, { Component } from 'react';
import './GoTop.css'

class GoTop extends Component {
	constructor (props) {
        super(props);
        this.onScrollHandle = this.onScrollHandle.bind(this);
        this.state = {
            showGoTop: false
        }
    }

	_goTop = () => {
    	window.scrollTo({
    		top: 0, 
    		behavior: "smooth" 
		});
	}

	onScrollHandle(event) {
		var scrollTop = event.target.scrollingElement.scrollTop;
		if (scrollTop > 200) {
			this.setState({showGoTop: true});
		} else {
			this.setState({showGoTop: false});
		}
	}

	componentDidMount() {
		window.addEventListener('scroll', this.onScrollHandle, true)
	}

	render() {
		const hide = {
            'opacity': 0,
            'transition': 'opacity 0.5s linear'
        };
        const show = {
            'opacity': '1',
            'transition': '0.5s'
        };
		var goTopStyle = this.state.showGoTop === true ? show : hide;
    	return (
			<div style={goTopStyle} className="goTop" onClick={this._goTop}>回到顶部</div>
    	)
  	}
}

export default GoTop;
