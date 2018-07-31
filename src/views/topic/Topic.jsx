import React, { Component } from 'react'
import API_CONFIG from '../../api'
import axios from 'axios'
import './Topic.css'


class Topic extends Component {

    constructor (props) {
        super(props);
        this.state = {
            res: {
                title: '加载中',
                content: '加载中',
                reply_count: 0,
                replies: []
            }
        }
    }


    fetchTopic = () => {
        axios.get(`${API_CONFIG.topicDetail}${this.props.match.params.id}`)
            .then(res => {
                if( res.data.success ) {
                	// console.log(res.data.data)
                    this.setState({res: res.data.data});
                }
            })
            .catch(e => {
                this.props.history.replace('/');
            });
    }


    componentDidMount () {
        this.fetchTopic()
    }

	render() {
        var repos = this.state.res.replies;
        var repoList = repos.map(function (item, index) {
            return (
                <li key={item.id}>
                    <div className="authorAvatar">
                        <img src={item.author.avatar_url} alt="头像"/>
                    </div>
                    <div className="authorName">{item.author.loginname}</div>
                    <div className="replyContent markdown-body" dangerouslySetInnerHTML={{__html: item.content}}></div>
                </li>
            );
        });
		return (
			<section className="topic">
				<div className="content">
                    <h1>{this.state.res.title}</h1>
                    <div className="markdown-body" dangerouslySetInnerHTML={{__html: this.state.res.content}}></div>
	        	</div>
                <div className="comment">
                    <div className="reply-count">{ this.state.res.reply_count } 回复</div>
                    <ul>{repoList}</ul>
                </div>
			</section>
		)
	}
}

export default Topic;