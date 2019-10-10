import React from 'react';
import { Avatar, Divider } from 'antd';
import { Link } from 'react-router-dom';
import './style.less';


class SiderRight extends React.Component<any, any>{

    render() {

        const list =
            <Link
                className="item"
                key="id"
                to={'/'}
            >
                <span >数据结构与算法</span>
            </Link>
            ;

        return (
            <div className="right">
                <Avatar className="right-logo" src={"https://gw.alipayobjects.com/zos/rmsportal/mqaQswcyDLcXyDKnZfES.png"} size={130} icon="user" />
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