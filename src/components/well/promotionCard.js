import React,{Component} from "react";
import {Icon,Button,Dropdown,Menu,message} from "antd";
import styles from "./well.css";

const set1 = [
    {
        title:"iBeacon",
        subtitle:"开启附近摇一摇功能",
        color: "#24D287",
        status: false,
        icon: "shake"
    },
    {
        title:"物料中心",
        subtitle:"支付二维图、商铺常用logo",
        color: "#0092C9",
        status: false,
        icon: "picture"
    },
    {
        title:"会员折扣",
        subtitle:"根据会员等级设置折扣价",
        color: "#14C900",
        status: false,
        icon: "tag"
    },
    {
        title:"买赠满减",
        subtitle:"设置优惠活动",
        color: "#F5BB35",
        status: false,
        icon: "gift"
    },
    {
        title:"优惠券",
        subtitle:"生成优惠券和核销条件",
        color: "#FF449B",
        status: false,
        icon: "red-envelope"
    }
];

const set2 = [
    {
        title:"H5页面生成器",
        subtitle:"一键生成宣传网站",
        color: "#9545FE",
        status: false,
        icon: "tablet"
    },
    {
        title:"绑定微信公众号",
        subtitle:"便捷编辑微信图文",
        color: "#41DF46",
        status: false,
        icon: "message"
    },
    {
        title:"云东购线上商铺",
        subtitle:"创建云东购线上商铺",
        color: "#FE4141",
        status: false,
        icon: "shop"
    }
];

const set3 = [
    {
        title:"云东金融",
        subtitle:"云东家金融服务平台",
        color: "#8B8427",
        status: false,
        icon: "safety"
    },
    {
        title:"云东借贷宝",
        subtitle:"开启立即获得3000万元额度",
        color: "#24D287",
        status: false,
        icon: "bank"
    },
    {
        title:"开放API",
        subtitle:"定制自己的数据报表",
        color: "#24D287",
        status: false,
        icon: "pie-chart"
    }
];

const menu=(
  <Menu>
    <Menu.Item key="1">应用信息</Menu.Item>
    <Menu.Item key="2">帮助文档</Menu.Item>
  </Menu>
);

const card = function({title,subtitle,icon,color},key){
    return(
        <div className={styles.promotionCard} key={key}>
            <div className={styles.cardHead} style={{backgroundColor:color}}>
                <Icon type={icon} />
                <p>{title}</p>
            </div>
            <p>{subtitle}</p>
            <div className={styles.cardButton}>
                <Dropdown.Button overlay={menu}>
                    {status?"打开":"申请使用"}
                </Dropdown.Button>
            </div>
        </div>
    );
}

const cards = function(){
    return(
        <div>
            <div className={styles.cardGroup}>
                <p>线下营销</p>
                {set1.map((val,index)=>{
                    return card(val,"set1"+index);
                })}
                <div style={{clear:"both"}}></div>
            </div>
            <div className={styles.cardGroup}>
                <p>网上营销</p>
                {set2.map((val,index)=>{
                    return card(val,"set1"+index);
                })}
                <div style={{clear:"both"}}></div>
            </div>
            <div className={styles.cardGroup}>
                <p>数据与金融服务</p>
                {set3.map((val,index)=>{
                    return card(val,"set1"+index);
                })}
                <div style={{clear:"both"}}></div>
            </div>
        </div>
    );
}
export default cards;