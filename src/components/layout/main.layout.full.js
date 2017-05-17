import { Layout } from 'antd';
import React, { Component } from "react";
const { Content, Sider } = Layout;
import styles from "./layout.css";

class mainLayout extends Component{
    constructor(props){
        super(props);
    }

    render(){
        const {ContentComponent} = this.props;
        return (
            <Layout className={styles.layout}>
                {ContentComponent}
            </Layout>
        );
    }
}

export default mainLayout;