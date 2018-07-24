import React, { Component } from 'react'
import { NavLink } from 'react-router-dom'
import './Index.css'
import API_CONFIG from '../../api'
import { querystring } from '../../utils'
import axios from 'axios';
import List from '../../components/topics-list/TopicsList'


class HomePage extends Component {
	constructor (props) {
        super(props)
        this.state = {
            page: 1,        // 当前页
            total: 9999,    // 总条数
            topics: [],     // 主题列表
            mark: false,
        }
    }

    componentDidMount () {
        this.setState({
            page: parseInt(querystring(this.props.location.search).page) || 1,
        }, () => {
            this.fetchTopics();
        })
    }
    
    componentDidUpdate (prevProps, prevState, prevContext) {
        if( this.props.location != prevProps.location ) {
            var page = parseInt(querystring(this.props.location.search).page);
            if( !page ) {
                this.setState({page: 1}, () => {
                    this.fetchTopics();
                });
                return;
            }
            this.fetchTopics();
        }
    }

    fetchTopics = () => {
        this.setState({
            mark: true,
        });
        var beforeTime = Date.now();
        axios.get(API_CONFIG.topics, {
                params: {
                    limit: 40,
                    mdrender: false,
                    tab: querystring(this.props.location.search).tab || 'all',
                    page: this.state.page,
                }
            })
            .then(res => {
                // console.log(res)
                var afterTime = Date.now() - beforeTime;
                if( afterTime <= 300 ) {
                    setTimeout(() => {
                        this.setState({
                            mark: false,
                        });   
                    }, 300 - afterTime)
                } else {
                    this.setState({
                        mark: false,
                    });
                }
                if( res.data.success ) {
                    this.setState({
                        topics: res.data.data
                    });
                } 
            })
            .catch(e => e);
    }

    isActive (tabVal) {
        return querystring(this.props.location.search).tab === tabVal;
    }

    homePageActive = () => {
        var tab = querystring(this.props.location.search).tab;
        return !tab || tab == 'all';
    }

	render() {
		return (
			<div className="HomePage">
				<div className="content">
					<nav className="nav">
                        <NavLink to="/" isActive={this.homePageActive}>全部</NavLink>
                        <NavLink to="/?tab=good" isActive={this.isActive.bind(this, 'good')}>精华</NavLink>
                        <NavLink to="/?tab=share" isActive={this.isActive.bind(this, 'share')}>分享</NavLink>
                        <NavLink to="/?tab=ask" isActive={this.isActive.bind(this, 'ask')}>问答</NavLink>
                        <NavLink to="/?tab=job" isActive={this.isActive.bind(this, 'job')}>招聘</NavLink>
                        <NavLink to="/?tab=dev" isActive={this.isActive.bind(this, 'dev')}>客户端测试</NavLink>
                    </nav>
                    <List topics={this.state.topics} />
				</div>
			</div>
		)
	}
}

export default HomePage;