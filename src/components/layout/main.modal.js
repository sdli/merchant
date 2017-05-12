import React,{Component} from "react";
import { Modal, Button,message } from 'antd';

class MainModal extends Component{
    constructor(props){
        super(props);
        console.log(props);
    }

    componentDidMount(){
        const {dispatch,loginModal} = this.props;
        switch (loginModal){
            case 1: message.success("登录成功！");break;
            default: null;
        };
        if(!this.props.status){
            Modal.warning({
                title: '登录已过期',
                content: '请点击按钮重新返回登陆页面！',
                onOk() {
                    dispatch({type:'modalController/goLogin'});
                },
            });
        }
    }

    render(){
        const {status} = this.props;
        return (
            <div></div>
        );
    }
}

export default MainModal;