import React from "react";
import {connect} from "dva";
import LoginForm from "../components/login/Login";
import MainLayout from '../components/layout/main.layout';

const LoginPage = ({dispatch,login})=>{
    function handleSubmit(info){
        console.log(info);
    }

    return (
        <MainLayout title="云东家商户后台登录" ContentComponent={<LoginForm handleSubmit={handleSubmit}  />}>
            
        </MainLayout>
    );
}

export default connect()(LoginPage);
