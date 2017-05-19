import React,{Component} from 'react';
import { connect } from 'dva';
import Layout from "../../components/layout/main.layout";
import HeaderComponent from "../../components/index/header";
import UserInfo from '../../components/index/userInfo';
import Search from "../../components/well/supportSearch";
import Faq from "../../components/well/supportFaq";
import More from "../../components/well/supportConnect";

const arr = [
    {
        title: "请问什么是云东家智能收银机？"
    },
    {
        title: "请问什么是云东家智能收银机？"
    },
    {
        title: "请问什么是云东家智能收银机？"
    },
    {
        title: "请问什么是云东家智能收银机？"
    },
    {
        title: "请问什么是云东家智能收银机？"
    },
    {
        title: "请问什么是云东家智能收银机？"
    },
    {
        title: "请问什么是云东家智能收银机？"
    },
    {
        title: "请问什么是云东家智能收银机？"
    },
    {
        title: "请问什么是云东家智能收银机？"
    },
    {
        title: "请问什么是云东家智能收银机？"
    },
    {
        title: "请问什么是云东家智能收银机？"
    }
];

const Support = function(){
    return(
        <div style={{paddingTop:32}}>
            <Search />
            <Faq arr={arr} />
            <More />
        </div>
    );
};

function IndexPage(){
  return (
    <Layout
      title="云东家商户管理中心"  
      ContentComponent={<Support />} 
      HeaderComponent={<HeaderComponent selected="support" />} 
      UserInfo={<UserInfo />}
      contentType="full"
      Animation={{
          duration: 200,
          type: "right"
      }}
    />
  );
}

export default connect()(IndexPage);
