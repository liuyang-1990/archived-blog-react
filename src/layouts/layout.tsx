import React from 'react';
import { Layout, BackTop, Icon } from 'antd';
import './style.less';
import GlobalHeader from '../components/GlobalHeader';
const { Content, Footer, Sider } = Layout;

class Layouts extends React.Component<any, any> {

    render() {
        return (
            <div className="Layouts">
                <GlobalHeader />
                <Layout className="layout">
                    <Layout style={{ padding: '24px 0', background: '#fff' }}>
                        <Content style={{ padding: '0 24px 0 0', minHeight: 280 }}>
                            {this.props.children}
                        </Content>
                        <Sider width={350} style={{ background: '#fff' }}>Sider</Sider>
                    </Layout>
                </Layout>
                <Footer style={{ textAlign: 'center', background: '#fff' }}>
                    Copyright <Icon type="copyright" /> 2019 created by liuyang | Powered by .Net Core 2.2 on Linux
               </Footer>
                <BackTop />
            </div>

        )
    }
}

export default Layouts;
