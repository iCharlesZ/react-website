import React from 'react'
import { Link } from 'react-router-dom'
import './404.css'

var NotMatch = ({ history }) => {
    return (
        <div className="p404">
            <img src={require('../../assets/images/not-match.gif')}/>
            <div className="page-text">卧槽！页面不见了！</div>
            <div className="go">
                <Link to="/">回到首页</Link>
            </div>
        </div>
    )
}


export default NotMatch;