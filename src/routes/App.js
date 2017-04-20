import React from 'react';
import {connect} from "dva";
import LoginForm from "../components/login/Login";
import Modal from "../components/layout/main.modal";

const AuthTrace = ({loginForm,dispatch,children})=>{
    return (
        <div>
            <Modal status={loginForm.status} dispatch={dispatch}  />
            <div>
                {children}
            </div>
        </div>
    );
};

export default connect(({loginForm})=>({loginForm}))(AuthTrace);