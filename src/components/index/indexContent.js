import {Icon, Button,Menu,Carousel} from 'antd';
import styles from "./index.css";
import Chart from "../charts/indexChart";
import Shops from "./shop";

const Buttons = function({name,icon}){
    return (
        <div className={styles.recommendButton}>
            <Icon type={icon} className={styles.buttonIcon} />
            <span className={styles.buttonName}>{name}</span>
        </div>
    );
};

const buttonList = [
    {data:{
        icon: 'area-chart',
        name: '我的数据',
        link: '/data'
    }},
    {allData:{
        icon: 'bars',
        name: '全部数据',
        link: '/data'
    }},
    {pos:{
        icon: 'pay-circle',
        name: 'POS入网申请',
        link: '/data'
    }},
    {ware:{
        icon: 'hdd',
        name: '库存数据',
        link: '/data'
    }},
    {balance:{
        icon: 'red-envelope',
        name: '盈利数据',
        link: '/data'
    }},
    {shop:{
        icon: 'shop',
        name: '店铺管理',
        link: '/data'
    }},
    {pay:{
        icon: 'safety',
        name: '全部支付数据',
        link: '/data'
    }},
    {customer:{
        icon: 'coffee',
        name: '会员管理',
        link: '/data'
    }},
    {sell:{
        icon: 'trophy',
        name: '销售数据',
        link: '/data'
    }}
];

const Datas = function({shops,yesterday,today,msg}){
    return (
        <div className={styles.data}>
            <div className={styles.dataCell}>
                <p>2</p>
                <p>我的门店</p>
            </div>
            <div className={styles.dataCell}>
                <p>￥998739.00</p>
                <p>昨日销售额</p>
            </div>
            <div className={styles.dataCell}>
                <p>￥23455.00</p>
                <p>今日销售额</p>
            </div>
            <div className={styles.dataCell}>
                <p>5</p>
                <p>我的消息</p>
            </div>
            <div className={styles.dataCell}>
                <span>更多数据</span>
            </div>
        </div>
    );
}

const shopList=[
    {name:'万佳便利店',status: 1,image: 1},
    {name:'seven Elleven', status: 1, image: 2},
    {name:'辉煌VR体验店', status: 1, image: 3},
    {name:'oppo手机-布吉店', status: 1,image: 4},
    {name:'苹果手机专卖店-KKMall-AAAAAAAAAAAAA', status: 1 , image:5}
];

const Content = function(){
    return (
       <div className={styles.indexContent}>
           <div className={styles.contentLeft}>
               <div className={styles.contentCell}>
                   <p className={styles.contentCellTitle}>常用功能：</p>
                    {buttonList.map((val)=>{
                        for(var x in val){
                                return (
                                    <Buttons name={val[x].name} icon={val[x].icon} key={x} />
                                );
                            }
                        })
                    }
                  <div style={{clear: 'both'}}></div>
               </div>
               <div className={styles.contentCell}>
                   <p className={styles.contentCellTitle}>我的数据：</p>
                   <Datas />
               </div>
               <div className={styles.contentCellFlex}>
                    <div className={styles.flex30+' ' + styles.rightBorder}>
                        <p className={styles.contentCellTitle}>店铺列表：</p>
                        <Shops shopList={shopList} />
                   </div>
                   <div className={styles.flex70+' ' + styles.leftBorder}>
                        <p className={styles.contentCellTitle}>交易报表：</p>
                        <Chart />
                   </div>
               </div>
           </div>
           <div className={styles.contentRight}>
               <div className={styles.merchantInfo}>
                   <p>账户：1233453535</p>
                   <p>昵称：李书东的店铺</p>
                   <p><Button size="small">编辑资料</Button></p>
               </div>
               <div className={styles.merchantHelp}>
                   <p>
                       <Icon type="edit" />
                       <span>客服留言</span>
                   </p>
                   <p>
                       <Icon type="copy" />
                       <span>产品使用指南</span>
                   </p>
               </div>
               <div className={styles.imageGroup}>
                      <Carousel autoplay>
                        <div className={styles.imageItem}>
                            <img src={require("../../assets/6.png")} />
                        </div>
                        <div className={styles.imageItem}>
                            <img src={require("../../assets/6.png")} />
                        </div>
                    </Carousel>
                </div>
                <div className={styles.imageGroup}>
                    <p className={styles.contentCellTitle}>消息资讯：</p>
                    <ul className={styles.newsList}>
                        <li><span>[新]</span>云东家发布新款设备</li>
                        <li>商户入网申请流程有变化</li>
                        <li>云东家新增23寸副屏，更高清！</li>
                        <li>云东家POS设备新增2款新产品</li>
                        <li><span>[活动]</span>买配件，我买单！2017年中秋活动预告！</li>
                    </ul>
                </div>
           </div>
       </div>
    );
}

export default Content;