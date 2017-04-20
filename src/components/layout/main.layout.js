import { Layout, Menu, Breadcrumb, Icon } from 'antd';
import React, { Component } from "react";
const { SubMenu } = Menu;
const { Header, Content, Footer, Sider } = Layout;
import styles from "./layout.css";

/*
后台系统最主要的布局模块，所有页面均由此页面
控制结构和组成。
布局样式：
        ——————————————————————
                HEADER
        ______________________
        | L |     M      | R |
        |   |            |   |
        |   |            |   |
        |   |            |   |
        |   |            |   |
        |   |            |   |
        ——————————————————————
                FOOTER
        ______________________

备注：其中R部分放置在Content模块中，可有可无，自行
控制。
*/
class mainLayout extends Component{
    constructor(props){
        super(props);
    }

    render(){
        const {children,ContentComponent,MenuComponent,HeaderComponent,title} = this.props;
        return (
            <Layout className={styles.layout}>
                <Header className={styles.header}>
                    <div className={styles.logo}>
                        {title}
                    </div>
                        {HeaderComponent}
                </Header>
                <Content className={styles.content}>
                    <Layout style={{background: '#fff' }}>
                        {MenuComponent &&  <Sider width={MenuComponent?200:0} style={{ background: '#fff' }}>
                            {MenuComponent}
                        </Sider>}
                        <Content style={{minHeight: 360 }}>
                            {ContentComponent || this.props.children}
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