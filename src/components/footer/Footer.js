import React from 'react'
import './Footer.css';

/*class Footer extends Component {
	render() {
		return (
			<div>Footer</div>
		)
	}
}*/
var Footer = () => {
    return (
        <div className="footer-box">
            <div className="source-code-add">
                <a href="https://github.com/zhchi-me/react-website" target="_blank" rel="noopener noreferrer">源码地址</a>
            </div>
            <div className="vendor">
                <ul>
                    <li className="cnode">
                        <span>CNode社区提供API</span>
                        <a href="https://cnodejs.org" target="_blank" rel="noopener noreferrer">
                            <img src="https://cnodejs.org/public/images/cnodejs.svg" alt="cnode" />
                        </a>
                    </li>
                    <li className="cnode">
                        <span>github提供网站托管</span>
                        <a href="https://github.com/" target="_blank" rel="noopener noreferrer">
                            <img src={require('../../assets/images/github.svg')} alt="github" />
                        </a>
                    </li>
                </ul>
            </div>
        </div>
    );
}


export default Footer;