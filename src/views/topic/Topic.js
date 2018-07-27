import React, { Component } from 'react'
import API_CONFIG from '../../api'
import axios from 'axios'
import './Topic.css'


class Topic extends Component {

    constructor (props) {
        super(props);
        this.state = {
            title: '加载中',
            content: '加载中'
        }
    }


    fetchTopic = () => {
        axios.get(`${API_CONFIG.topicDetail}${this.props.match.params.id}`)
            .then(res => {
                if( res.data.success ) {
                	// console.log(res.data.data)
                    this.setState({title: res.data.data.title});
                    this.setState({content: res.data.data.content});
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
		return (
			<section className="topic">
				<div className="content">
                    <h1>{this.state.title}</h1>
                    <div className="markdown-body" dangerouslySetInnerHTML={{__html: this.state.content}}></div>
	        	</div>
			</section>
		)
	}
}

export default Topic;