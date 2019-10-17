import React from 'react';
import { Avatar, Icon, Button } from 'antd';
import { observer } from 'mobx-react';
import './style.less';
import './marked.css';

@observer
class ArticleDetail extends React.Component<any, any>{

    render() {
        //console.log(this.props.match.params.id);
        return (
            <div className="article clearfix">
                <div className="detail fl" style={{ width: '75%' }}>
                    <div className="header">
                        <div className="title">test</div>
                        <div className="author">
                            <div className="avatar">
                                <Avatar
                                    className="auth-logo"
                                    src={"https://zos.alipayobjects.com/rmsportal/jkjgkEfvpUPVyRjUImniVslZfWPnJuuZ.png"}
                                    size={50}
                                    icon="user"
                                />
                            </div>
                            <div className="info">
                                <span className="name">
                                    <span>liuyang</span>
                                </span>
                                <div
                                    props-data-classes="user-follow-button-header"
                                    data-author-follow-button=""
                                />
                                <div className="meta">
                                    <span className="publish-time">
                                        2019-10-17
                                    </span>
                                    <span className="wordage">
                                        字数 1150
                                    </span>
                                    <span className="views-count">
                                        阅读 1152
                                    </span>
                                    <span className="comments-count">
                                        评论 10
                                    </span>
                                    <span className="likes-count">
                                        喜欢 2
                                    </span>
                                </div>
                            </div>
                            <div className="tags" title="标签">
                                <Icon type="tags" theme="outlined" />
                                <span className="tag">
                                    TEst
                                </span>
                            </div>
                            <span className="clearfix" />
                        </div>
                    </div>
                    <div className="content">
                        <div
                            id="content"
                            className="article-detail"
                        />
                    </div>
                    <div className="heart">
                        <Button
                            type="danger"
                            size="large"
                            icon="heart"
                        >
                            好文要顶
                        </Button>
                    </div>
                </div>
            </div>
        )
    }

}

export default ArticleDetail;