import React from 'react';
import { Avatar, Divider } from 'antd';
import { Link } from 'react-router-dom';
import { observer } from 'mobx-react';
import ArticleState from '../../states/article.state';
import { TYPES } from '../../utils/types';
import { myContainer } from '../../config/inversify.config';
import './style.less';

@observer
class SiderRight extends React.Component<any, any>{

    private store: ArticleState = myContainer.get<ArticleState>(TYPES.ArticleState);

    componentDidMount() {
        this.store.queryAllTags();
    }

    render() {

        const list = this.store.tags.map(item =>
            (<Link
                className="item"
                key={item.Id}
                to={'/'}
            >
                <span key={item.Id}>{item.TagName}</span>
            </Link>)
        );

        return (
            <div className="right">
                <Avatar className="right-logo" src={"https://zos.alipayobjects.com/rmsportal/jkjgkEfvpUPVyRjUImniVslZfWPnJuuZ.png"} size={130} icon="user" />
                <div className="title">liuyang's blog</div>
                <Divider />
                <div className="tags">
                    <div className="title">标签云</div>
                    {list}
                </div>
            </div>

        )
    }

}


export default SiderRight;