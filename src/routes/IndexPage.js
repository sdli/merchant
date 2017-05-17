import React from 'react';
import { connect } from 'dva';
import Layout from "../components/layout/main.layout";
import HeaderComponent from "../components/index/header";
// import MenuComponent from "../components/index/menu";
import ContentComponent from "../components/index/indexContent";
import RightSiderComponent from "../components/index/indexRightSider";


function IndexPage() {
  return (
    <Layout 
      title="云东家商户管理中心"  
      ContentComponent={<div>首页内容</div>} 
      HeaderComponent={<HeaderComponent selected="main" />} 
      MenuComponent="" 
      ContentComponent={<ContentComponent />}
      RightSiderComponent={<RightSiderComponent />}
      RightSiderWidth="240"
      contentType="grail"
    />
  );
}

IndexPage.propTypes = {
};

export default connect()(IndexPage);
