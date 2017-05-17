import { Layout } from 'antd';
import React, { Component } from "react";
const { Content } = Layout;
import styles from "./layout.css";

class mainLayout extends Component{
    constructor(props){
        super(props);
    }

    render(){
        const {ContentComponent,RightSiderComponent,RightSiderWidth} = this.props;
        return (
            <Layout className={styles.layout} style={{paddingRight:RightSiderWidth+'px'}}>
                <div className={styles.grailLeft + " "+ styles.grailBorder}>
                    {ContentComponent}
                </div>
                <div className={styles.grailRight} style={{width:RightSiderWidth+'px',marginRight:-RightSiderWidth+'px'}}>
                    {RightSiderComponent}
                </div>
            </Layout>
        );
    }
}

export default mainLayout;