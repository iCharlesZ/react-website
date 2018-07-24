import React, { Component } from 'react'
import './TopicsList.css'

class TopicsList extends Component {

    tag = topic => {
        if( topic.top ) {
            return {
                text: '置顶',
                className: 'top',
            }
        }
        if( topic.good ) {
            return {
                text: '精华',
                className: 'good',
            }
        }
        switch(topic.tab) {
            // 问答
            case 'ask':
                return {
                    text: '问答',
                    className: topic.tab
                };
            // 分享
            case 'share':
                return {
                    text: '分享',
                    className: topic.tab
                };
            // 招聘
            case 'job':
                return {
                    text: '招聘',
                    className: topic.tab
                };
            // 精华
            case 'good':
                return {
                    text: '精华',
                    className: topic.tab
                };
            // 测试
            case 'dev':
                return {
                    text: '测试',
                    className: topic.tab
                };
            default:
                return {
                    text: '',
                    className: 'default'
                }
        }
    }

    render () {
        return (
            <ul>
            {
                this.props.topics.map(item => {
                    return (
                        <li key={item.id}>
                            <div className="avatar">
                                <img src={item.author.avatar_url} alt="头像" title={item.author.loginname} />
                            </div>
                            {
                                item.reply_count !== undefined &&
                                <div className="reply-view">{ item.reply_count }/{ item.visit_count }</div>
                            }
                            {
                                item.tab && <span className={`tag ${this.tag(item).className}`}>{ this.tag(item).text }</span>
                            }
                            <span className="title">{ item.title}</span>
                        </li>
                    )
                })
            }
            </ul>
        );
    }
}



export default TopicsList;