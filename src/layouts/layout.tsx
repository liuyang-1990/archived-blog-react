import React from 'react';
import { Layout, Menu, BackTop, Icon } from 'antd';
import './style.less';
const { Content, Footer, Header, Sider } = Layout;

class Layouts extends React.Component<any, any> {

    render() {
        return (
            <div>
                <Layout className="layout">
                    <Header className="header"
                        style={{
                            position: 'fixed',
                            zIndex: 1,
                            top: 0,
                            width: '100%',
                            float: 'left',
                            background: '#fff',
                            borderBottom: '1px solid #eee',
                        }}>
                        <Menu
                            theme="light"
                            mode="horizontal"
                            defaultSelectedKeys={['1']}
                            style={{ lineHeight: '64px' }}
                        >
                            <Menu.Item key="1">nav 1</Menu.Item>
                            <Menu.Item key="2">nav 2</Menu.Item>
                            <Menu.Item key="3">nav 3</Menu.Item>
                        </Menu>
                    </Header>
                    <Layout style={{ padding: '24px 0', background: '#fff' }}>
                        <Content style={{ padding: '0 24px 0 0', minHeight: 280 }}>
                            {this.props.children}
                        </Content>
                        <Sider theme="light">Sider</Sider>
                    </Layout>
                </Layout>
                <Footer style={{ textAlign: 'center', background: '#fff' }}>
                    Copyright <Icon type="copyright" /> 2019 created by liuyang | Powered by .Net Core 2.2 on Linux
               </Footer>
                <BackTop />
            </div >

        )
    }
}

export default Layouts;
