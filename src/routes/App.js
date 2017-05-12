import React from 'react';
import {connect} from "dva";
import Modal from "../components/layout/main.modal";

const AuthTrace = ({loginForm,dispatch,children,modalController})=>{
    return (
        <div>
            <Modal status={loginForm.status} dispatch={dispatch} loginModal={modalController.loginModal} />
            <div>
                {children}
            </div>
        </div>
    );
};

export default connect(({loginForm,modalController})=>({loginForm,modalController}))(AuthTrace);