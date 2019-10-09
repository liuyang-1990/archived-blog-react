import './style.less';
import logo from '../../assets/logo.svg';
import React from 'react';
import { Link, withRouter } from 'react-router-dom';
import menus from '../../config/menu.config';
import {
    Layout,
    Icon,
    Menu,
    Row,
    Col
} from 'antd';
const { Header } = Layout;


class GlobalHeader extends React.Component<any, any> {
    constructor(props) {
        super(props);
        this.state = {      
            menuCurrent: '',
        };
    }

    componentDidMount(){
        this.setState({
            menuCurrent: '/',
        });
    }

    handleMenu = e => {
        this.setState({
            menuCurrent: e.key,
        });
    };

    render() {

        return (
            <div className="left">
                <Header className="header" >
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
                                mode="horizontal"
                                onClick={this.handleMenu}
                                selectedKeys={[this.state.menuCurrent]}
                                style={{ lineHeight: '64px', borderBottom: 'none' }}
                            >
                                {
                                    menus && menus.map(item => {
                                        return (<Menu.Item key={item.path}>
                                            <Link to={item.path}>
                                                <Icon type={item.icon} theme="outlined" />
                                                {item.name}
                                            </Link>
                                        </Menu.Item>)
                                    })
                                }
                            </Menu>
                        </Col>
                        <Col
                            style={{ textAlign: 'right', width: '300px', float: 'left' }}
                        >
                        </Col>
                    </Row>
                </Header>
            </div>
        );
    }
}

export default withRouter(GlobalHeader);
