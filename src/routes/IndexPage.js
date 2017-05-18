import React from 'react';
import { connect } from 'dva';
import Layout from "../components/layout/main.layout";
import HeaderComponent from "../components/index/header";
import ContentComponent from "../components/index/indexContent";
import RightSiderComponent from "../components/index/indexRightSider";
import UserInfo from '../components/index/userInfo';

function IndexPage() {
  return (
    <Layout 
      title="云东家商户管理中心"  
      ContentComponent={<div>首页内容</div>} 
      HeaderComponent={<HeaderComponent selected="main" />} 
      MenuComponent="" 
      ContentComponent={<ContentComponent />}
      RightSiderComponent={<RightSiderComponent />}
      UserInfo={<UserInfo />}
      RightSiderWidth="240"
      contentType="grail"
      animation={{
        duration: 200
      }}
    />
  );
}

IndexPage.propTypes = {
};

export default connect()(IndexPage);
