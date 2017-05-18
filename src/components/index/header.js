import styles from "./index.css";
import React,{ Component} from "react";
import { Card,Icon } from 'antd';
import QueueAnim from 'rc-queue-anim';

const list = {
    main: '首页',
    manage: '管理中心',
    support: '技术支持',
    message: '消息中心' 
};

const manageMenuList=[
      {
          name: '门店管理',
          subtitle: "门店与职员管理",
          logo: "../../assets/management/shop.png",
          content:[
              {name:"门店列表",href:"/#/manage/shopList",icon:"shop"},
              {name:"职员管理",href:"/#/manage/shopList",icon:"idcard"},
              {name:"设备绑定",href:"/#/manage/shopList",icon:"android"}
          ]
      },
      {
          name: "商品管理",
          subtitle: "库存、条码与出入库管理",
          logo: "../../assets/management/product.png",
          content:[
              {name:"商品入库",href:"/#/manage/product",icon:"folder-add"},
              {name:"库存记录",href:"/#/manage/product",icon:"file-excel"},
              {name:"商品出库",href:"/#/manage/product",icon:"export"},
              {name:"条码管理",href:"/#/manage/product",icon:"barcode"},
              {name:"商品单位管理",href:"/#/manage/product",icon:"bank"}
          ]
      },
      {
          name: "支付申请",
          subtitle: "银行卡、支付宝、微信支付申请",
          logo: "../../assets/management/pay.png",
          content:[
              {name:"门店列表",href:"/#/manage/pay",icon:"shop"},
              {name:"支付申请",href:"/#/manage/pay",icon:"pay-circle"},
              {name:"申请记录",href:"/manage/pay",icon:"hourglass"}
          ]
      },
      {
          name: "统计报表",
          subtitle: "盈利、销售、库存报表",
          logo: "../../assets/management/statistic.png",
          content:[
              {name:"盈利报表",href:"/#/manage/pay",icon:"pie-chart"},
              {name:"销售排行",href:"/#/manage/pay",icon:"bar-chart"},
              {name:"营业数据",href:"/#/manage/pay",icon:"area-chart"},
              {name:"库存报表",href:"/#/manage/pay",icon:"line-chart"},
              {name:"会员报表",href:"/#/manage/pay",icon:"dot-chart"}
          ]
      },
      {
          name: "会员中心",
          subtitle: "会员信息查看和编辑",
          logo: "../../assets/management/member.png",
          content:[
              {name:"会员列表",href:"/#/manage/pay",icon:"star-o"},
              {name:"会员积分",href:"/#/manage/pay",icon:"coffee"},
              {name:"等级设置",href:"/#/manage/pay",icon:"wallet"}
          ]
      }
      ];

const CardListItem= function({arr}){
    return(
        <ul className={styles.listItemUl}>
            {arr.map((val,index)=>{
                return(
                    <li key={index}>
                        <a href={val.href}>
                            <span>
                                <Icon type={val.icon?val.icon:"link"} />
                            </span>
                            <p>{val.name}</p>
                        </a>
                    </li>
                );
            })}
        </ul>
    );
};

const ManagementMenu = function({handleLeave,status}){
    return (
            <div 
                onMouseLeave={handleLeave}
                className={styles.manageDropDownMenu}
            >
                    <QueueAnim  
                        delay={50} 
                        duration={500} 
                        className={styles.manageCardList}
                        type={['top',"bottom"]}
                    >
                        <div key="card1">
                            <Card bodyStyle={{padding:0}}>
                                <div className={styles.cardImage}>
                                    <img alt={manageMenuList[0].name+"图片"} src={require("../../assets/management/shop.png")} />
                                    <p className={styles.cardTag}>{manageMenuList[0].name}</p>
                                </div>
                                <div className={styles.cardTitle}>
                                    <p>{manageMenuList[0].subtitle}</p>
                                    <CardListItem  arr={manageMenuList[0].content} />
                                </div>
                            </Card>
                        </div>
                        <div key="card2">
                            <Card bodyStyle={{padding:0}}>
                                <div className={styles.cardImage}>
                                    <img alt={manageMenuList[1].name+"图片"} src={require("../../assets/management/product.png")} />
                                    <p  className={styles.cardTag}>{manageMenuList[1].name}</p>
                                </div>
                                <div style={{textAlign: "center"}} className={styles.cardTitle}>
                                    <p>{manageMenuList[1].subtitle}</p>
                                    <CardListItem  arr={manageMenuList[1].content} />
                                </div>
                            </Card>
                        </div>
                        <div key="card3">
                            <Card bodyStyle={{padding:0}}>
                                <div className={styles.cardImage}>
                                    <img alt={manageMenuList[2].name+"图片"} src={require("../../assets/management/pay.png")} />
                                    <p className={styles.cardTag}>{manageMenuList[2].name}</p>
                                </div>
                                <div style={{textAlign: "center"}} className={styles.cardTitle}>
                                    <p>{manageMenuList[2].subtitle}</p>
                                    <CardListItem  arr={manageMenuList[2].content} />
                               </div>
                            </Card>                
                        </div>
                        <div key="card4">
                            <Card bodyStyle={{padding:0}}>
                                <div className={styles.cardImage}>
                                    <img alt={manageMenuList[3].name+"图片"} src={require("../../assets/management/statistic.png")} />
                                    <p className={styles.cardTag}>{manageMenuList[3].name}</p>
                                </div>
                                <div style={{textAlign: "center"}} className={styles.cardTitle}>
                                    <p>{manageMenuList[3].subtitle}</p>
                                    <CardListItem  arr={manageMenuList[3].content} />
                                </div>
                            </Card>
                        </div>
                        <div key="card5">
                            <Card bodyStyle={{padding:0}}>
                                <div className={styles.cardImage}>
                                    <img alt={manageMenuList[4].name+"图片"} src={require("../../assets/management/member.png")} />
                                    <p className={styles.cardTag}>{manageMenuList[4].name}</p>
                                </div>
                                <div style={{textAlign: "center"}} className={styles.cardTitle}>
                                    <p>{manageMenuList[4].subtitle}</p>
                                    <CardListItem  arr={manageMenuList[4].content} />
                                </div>
                            </Card>                
                        </div>
                    </QueueAnim>
            </div>
       
    );
}
class Header extends Component{
    constructor(props){
        super(props);
        this.state={
            management: 0
        };
        this.handleHover = this.handleHover.bind(this);
        this.handleLeave = this.handleLeave.bind(this);
        this.animation  = {height: 360, repeat: 0, duration: 500};
    }
    handleHover(){
        this.setState({
            management: 1
        });
    }

    handleLeave(){
        this.setState({
            management: 0
        });
    }

    render(){
        const {selected} = this.props;
        return(
            <div className={styles.headerMenu}>
                <ul className={styles.headerUl}>
                    <li className={selected=='main'?styles.headerMenuActive:''} onMouseEnter={this.handleLeave}><p><a href="/">首页</a></p></li>
                    <li className={selected=='manage'?styles.headerMenuActive:''} onMouseEnter={this.handleHover}><p><a href="/#/manage">管理中心</a></p></li>
                    <li className={selected=='promotion'?styles.headerMenuActive:''} onMouseEnter={this.handleLeave}><p href="/#/promotion"><a>运营推广</a></p></li>
                    <li className={selected=='support'?styles.headerMenuActive:''} onMouseEnter={this.handleLeave}><p><a href="/#/support">技术支持</a></p></li>
                    <li className={selected=='message'?styles.headerMenuActive:''}><p><a href="/#/message">通知中心</a></p></li>
                    <div style={{clear:'both'}}></div>
                </ul>
                {this.state.management?<ManagementMenu animation={this.animation} handleLeave={this.handleLeave} status={this.state.management} />:null}
            </div>
        );
    }
}

export default Header;