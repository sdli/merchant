import React from "react";
import {connect} from "dva";
import LoginForm from "../components/login/Login";
import MainLayout from '../components/layout/main.layout';

const LoginPage = ({dispatch,loginForm})=>{
    
    function handleSubmit(values){
        dispatch({type: 'loginForm/login',loginInfo:values});
    }

    return (
        <MainLayout title="云东家商户后台登录" contentType="full" ContentComponent={<LoginForm handleSubmit={handleSubmit} alert={loginForm.alert} dispatch={dispatch} />}>
        </MainLayout>
    );
}

export default connect(({loginForm})=>({loginForm,}))(LoginPage);
