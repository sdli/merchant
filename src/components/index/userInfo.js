import { Popover, Button, Icon } from 'antd';
import React,{Component} from "react";
import styles from "./index.css";


class UserInfo extends Component{
    constructor(props){
        super(props);
    }

    render(){
        const {userInfo} =this.props;
        const text="用户信息";
        const content = (
            <div style={{padding: '0'}}>
                <ul className={styles.listItemUl}>
                    <li key="userinfo1">
                        <a href="">
                            <span>
                                <Icon type="solution" />
                            </span>
                            <p>编辑资料</p>
                        </a>
                    </li>
                    <li key="userinfo2">
                        <a href="">
                            <span>
                                <Icon type="book" />
                            </span>
                            <p>提交工单</p>
                        </a>
                    </li>
                    <li key="userinfo3">
                        <a href="">
                            <span>
                                <Icon type="poweroff" />
                            </span>
                            <p>退出登录</p>
                        </a>
                    </li>
                </ul>
            </div>
        );
        return(
            <div className={styles.userInfoArea}>
                <Popover placement="bottomRight" content={content} trigger="hover" overlayClassName={styles.userInfoOverlay}>
                    <Button icon="user"  size="large">用户：15098985191  <Icon type="right" /></Button>
                </Popover>
            </div>
        );
    }
}

export default UserInfo;