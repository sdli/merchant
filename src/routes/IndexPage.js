import React from 'react';
import { connect } from 'dva';
import styles from './IndexPage.css';
import Layout from "../components/layout/main.layout";
import HeaderComponent from "../components/index/header";
import MenuComponent from "../components/index/menu";
import ContentComponent from "../components/index/indexContent";
function IndexPage() {
  return (
    <Layout 
      title="云东家商户管理中心"  
      ContentComponent={<div>首页内容</div>} 
      HeaderComponent={<HeaderComponent selected="main" />} 
      MenuComponent={<MenuComponent />} 
      ContentComponent={<ContentComponent />}      
    />
  );
}

IndexPage.propTypes = {
};

export default connect()(IndexPage);
