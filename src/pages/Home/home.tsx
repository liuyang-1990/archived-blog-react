import React from 'react';
import { List, Icon } from 'antd';
import { observer } from 'mobx-react';
import ArticleState from '../../states/article.state';
import { TYPES } from '../../utils/types';
import { myContainer } from '../../config/inversify.config';
import { ArticleInfo } from '../../models/GridParams';
import { toLocaleTimeString } from '../../utils/utils';
import settings from '../../config/settings.config';



const IconText = ({ type, text }) => (
    <span>
        <Icon type={type} style={{ marginRight: 8 }} />
        {text}
    </span>
);

@observer
class Home extends React.Component<any, any>{

    private store: ArticleState = myContainer.get<ArticleState>(TYPES.ArticleState);

    componentDidMount() {
        this.store.queryArticlesByPage({ PageNum: 1, PageSize: settings.pageSize });
    }

    onChange = page => {
        this.store.queryArticlesByPage({ PageNum: page, PageSize: settings.pageSize });
    }


    render() {

        return (
            <List<ArticleInfo>
                itemLayout="vertical"
                size="large"
                pagination={{
                    total: this.store.articleList.TotalRows,
                    onChange: this.onChange,
                    pageSize: settings.pageSize,
                }}
                dataSource={this.store.articleList.Rows}
                renderItem={(item: ArticleInfo) => (
                    <List.Item
                        key={item.Title}
                        actions={[
                            <IconText type="eye" text={item.Views} key="list-vertical-star-o" />,
                            <IconText type="like-o" text={item.Likes} key="list-vertical-like-o" />,
                            <IconText type="message" text={item.Comments} key="list-vertical-message" />,
                            <span>{toLocaleTimeString(item.CreateTime)}</span>
                        ]}
                        extra={
                            <img
                                width={200}
                                alt="logo"
                                src="https://gw.alipayobjects.com/zos/rmsportal/mqaQswcyDLcXyDKnZfES.png"
                            />
                        }
                    >
                        <List.Item.Meta
                            title={<a style={{ fontSize: 18, fontWeight: 700 }} href={`/detail/${item.Id}`}>{item.Title}</a>}
                        />
                        {item.Abstract}
                    </List.Item>
                )}
            />);
    }
}

export default Home;
