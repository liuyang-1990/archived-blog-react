import React from 'react';
import { Layout, BackTop, Icon } from 'antd';
import GlobalHeader from '../components/GlobalHeader';
import GlobalFooter from '../components/GlobalFooter';
import SiderRight from '../components/GlobalSider';
import './style.less';
const { Content, Sider } = Layout;

const copyright =
    <React.Fragment>
        Copyright <Icon type="copyright" /> 2019 created by liuyang | Powered by .Net Core 2.2 on Linux
    </React.Fragment>


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
                        <Sider width={350} style={{ background: '#fff' }}>
                            <SiderRight />
                        </Sider>
                    </Layout>
                </Layout>
                <GlobalFooter copyright={copyright} />
                <BackTop />
            </div>

        )
    }
}

export default Layouts;
