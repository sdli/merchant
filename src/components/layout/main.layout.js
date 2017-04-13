import { Layout, Menu, Breadcrumb, Icon } from 'antd';
import React, { Component } from "react";
const { SubMenu } = Menu;
const { Header, Content, Footer, Sider } = Layout;
import styles from "./layout.css";

class mainLayout extends Component{
    constructor(props){
        super(props);
    }

    render(){
        const {children,ContentComponent,MenuComponent,HeaderComponent,title} = this.props;
        return (
            <Layout className={styles.layout}>
                <Header className={styles.header}>
                    <div className={styles.logo} >
                        {title}
                    </div>
                     {HeaderComponent}
                </Header>
                <Content className={styles.content}>
                    <Layout style={{ padding: '24px 0', background: '#fff' }}>
                        {MenuComponent &&  <Sider width={MenuComponent?200:0} style={{ background: '#fff' }}>
                            {MenuComponent}
                        </Sider>}
                        <Content style={{ padding: '0 16px', minHeight: 360 }}>
                            {ContentComponent}
                        </Content>
                    </Layout>
                </Content>
                <Footer style={{ textAlign: 'center' }}>
                    云东家商户管理后台，ant-design<br/>
                    版权所有 @CopyRight 2015-2017 深圳前海云东家科技有限公司
                </Footer>
            </Layout>
        );   
    }
}

export default mainLayout;