import './style.less';
import logo from '../../assets/logo.svg';
import React from 'react';
import { Link, withRouter } from 'react-router-dom';
import {
    Layout,
    Icon,
    Menu,
    Row,
    Col,
    Drawer
} from 'antd';
const { Header } = Layout;


class GlobalHeader extends React.Component<any, any> {
    constructor(props) {
        super(props);
        this.state = {
            isMobile: false,
            visible: false,
            placement: 'top',
            current: null,
            menuCurrent: '',
            login: false,
            register: false,
            nav: '首页',
            navTitle: '首页',
            code: '',
            isLoading: false,
        };

    }
    componentDidMount() {
        this.initMenu(this.props.pathname);
    }

    showDrawer = () => {
        this.setState({
            visible: true,
        });
    };

    onClose = () => {
        this.setState({
            visible: false,
        });
    };

    initMenu(name) {
        let key = '9';
        let navTitle = '';
        if (name === '/') {
            key = '9';
            navTitle = '首页';
        } else if (name === '/articles') {
            key = '1';
            navTitle = '文章';
        } else if (name === '/hot') {
            key = '2';
            navTitle = '热门';
        } else if (name === '/timeLine') {
            key = '3';
            navTitle = '历程';
        } else if (name === '/message') {
            key = '4';
            navTitle = '留言';
        } else if (name === '/about') {
            key = '5';
            navTitle = '关于我';
        } else if (name === '/articleDetail') {
            key = '6';
            navTitle = '文章详情';
        } else if (name === '/project') {
            key = '7';
            navTitle = '项目';
        } else if (name === '/archive') {
            key = '8';
            navTitle = '归档';
        }
        this.setState({
            navTitle,
            menuCurrent: key,
        });
    }

    componentWillReceiveProps(nextProps) {
        this.initMenu(nextProps.pathname);
    }


    handleMenu = e => {
        this.setState({
            menuCurrent: e.key,
        });
    };

    handleLogout = e => {
        this.setState({
            current: e.key,
        });
        window.sessionStorage.userInfo = '';
        this.onClose();
    };

    menuClick({ key }) {
        this.setState({
            nav: key,
        });
    }
    render() {

        return (
            <div className="left">
                <Header
                    className="header"
                    style={{
                        position: 'fixed',
                        zIndex: 1,
                        top: 0,
                        width: '100%',
                        minWidth: '1200px',
                        height: '66px',
                        float: 'left',
                        backgroundColor: 'white',
                        borderBottom: '1px solid #eee',
                    }}
                >
                    <Row className="container">
                        <Col style={{ width: '120px', float: 'left' }}>
                            <a href="/">
                                <div className="logo">
                                    <img src={logo} alt="" />
                                </div>
                            </a>
                        </Col>
                        <Col style={{ width: '780px', float: 'left' }}>
                            <Menu
                                theme="light"
                                mode="horizontal"
                                defaultSelectedKeys={['1']}
                                onClick={this.handleMenu}
                                selectedKeys={[this.state.menuCurrent]}
                                style={{ lineHeight: '64px', borderBottom: 'none' }}
                            >
                                <Menu.Item key="9">
                                    <Link to="/">
                                        <Icon type="home" theme="outlined" />
                                        首页
                                    </Link>
                                </Menu.Item>
                                <Menu.Item key="1">
                                    <Link to="/articles">
                                        <Icon type="ordered-list" theme="outlined" />
                                        文章
                                </Link>
                                </Menu.Item>
                                <Menu.Item key="2">
                                    <Link to="/hot">
                                        <Icon type="fire" theme="outlined" />
                                        热门
                                    </Link>
                                </Menu.Item>
                                <Menu.Item key="8">
                                    <Link to="/archive">
                                        <Icon type="project" theme="outlined" />
                                        归档
                                    </Link>
                                </Menu.Item>
                                <Menu.Item key="7">
                                    <Link to="/project">
                                        <Icon type="database" theme="outlined" />
                                        项目
                                    </Link>
                                </Menu.Item>
                                <Menu.Item key="3">
                                    <Link to="/timeLine">
                                        <Icon type="hourglass" theme="outlined" />
                                        历程
                                    </Link>
                                </Menu.Item>
                                <Menu.Item key="4">
                                    <Link to="/message">
                                        <Icon type="message" theme="outlined" />
                                        留言
                                    </Link>
                                </Menu.Item>
                                <Menu.Item key="5">
                                    <Link to="/about">
                                        <Icon type="user" theme="outlined" />
                                        关于
                                    </Link>
                                </Menu.Item>
                            </Menu>
                        </Col>
                        <Col
                            style={{ textAlign: 'right', width: '300px', float: 'left' }}
                        >
                        </Col>
                    </Row>
                </Header>

                <Drawer
                    placement={this.state.placement}
                    closable={false}
                    onClose={this.onClose}
                    visible={this.state.visible}
                    height={420}
                >
                    <div className="drawer">
                        <p onClick={this.onClose}>
                            <Link to="/">
                                <Icon type="home" /> 首页
              </Link>
                        </p>
                        <p onClick={this.onClose}>
                            <Link to="/articles">
                                <Icon type="ordered-list" /> 文章
              </Link>
                        </p>
                        <p onClick={this.onClose}>
                            <Link to="/hot">
                                <Icon type="fire" /> 热门
              </Link>
                        </p>
                        <p onClick={this.onClose}>
                            <Link to="/archive">
                                <Icon type="project" /> 归档
              </Link>
                        </p>
                        <p onClick={this.onClose}>
                            <Link to="/project">
                                <Icon type="project" /> 项目
              </Link>
                        </p>
                        <p onClick={this.onClose}>
                            <Link to="/timeLine">
                                <Icon type="hourglass" /> 历程
              </Link>
                        </p>
                        <p onClick={this.onClose}>
                            <Link to="/message">
                                <Icon type="message" /> 留言
              </Link>
                        </p>
                        <p onClick={this.onClose}>
                            <Link to="/about">
                                <Icon type="user" /> 关于
              </Link>
                        </p>

                    </div>
                </Drawer>
            </div>
        );
    }
}

export default withRouter(GlobalHeader);
