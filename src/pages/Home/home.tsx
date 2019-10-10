import React from 'react';
import { List, Icon } from 'antd';

const listData: any = [];
for (let i = 0; i < 23; i++) {
    listData.push({
        href: `/detail/${i}`,
        title: `ant design part ${i}`,
        avatar: 'https://zos.alipayobjects.com/rmsportal/ODTLcjxAfvqbxHnVXCYX.png',
        description:
            'Ant Design, a design language for background applications, is refined by Ant UED Team.',
        content:
            'We supply a series of design principles, practical patterns and high quality design resources (Sketch and Axure), to help people create their product prototypes beautifully and efficiently.',
    });
}

const IconText = ({ type, text }) => (
    <span>
        <Icon type={type} style={{ marginRight: 8 }} />
        {text}
    </span>
);

class Home extends React.Component<any, any>{

    render() {

        return (
            <List
                itemLayout="vertical"
                size="large"
                pagination={{
                    onChange: page => {
                        console.log(page);
                    },
                    pageSize: 10,
                }}
                dataSource={listData}
                renderItem={(item: any) => (
                    <List.Item
                        key={item.title}
                        actions={[
                            <IconText type="eye" text="156" key="list-vertical-star-o" />,
                            <IconText type="like-o" text="156" key="list-vertical-like-o" />,
                            <IconText type="message" text="2" key="list-vertical-message" />,
                            <span>2019-10-10</span>
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
                            title={<a style={{ fontSize: 18, fontWeight: 700 }} href={item.href}>{item.title}</a>}
                        />
                        {item.content}
                    </List.Item>
                )}
            />)
    }
}

export default Home;
