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
              {name:"门店列表",href:"/management/shopList",icon:"shop"},
              {name:"职员管理",href:"/management/shopList",icon:"idcard"},
              {name:"设备绑定",href:"/management/shopList",icon:"android"}
          ]
      },
      {
          name: "商品管理",
          subtitle: "库存、条码与出入库管理",
          logo: "../../assets/management/product.png",
          content:[
              {name:"商品入库",href:"/management/product",icon:"folder-add"},
              {name:"库存记录",href:"/management/product",icon:"file-excel"},
              {name:"商品出库",href:"/management/product",icon:"export"},
              {name:"条码管理",href:"/management/product",icon:"barcode"},
              {name:"商品单位管理",href:"/management/product",icon:"bank"}
          ]
      },
      {
          name: "支付申请",
          subtitle: "银行卡、支付宝、微信支付申请",
          logo: "../../assets/management/pay.png",
          content:[
              {name:"门店列表",href:"/management/pay",icon:"shop"},
              {name:"支付申请",href:"/management/pay",icon:"pay-circle"},
              {name:"申请记录",href:"/management/pay",icon:"hourglass"}
          ]
      },
      {
          name: "统计报表",
          subtitle: "盈利、销售、库存报表",
          logo: "../../assets/management/statistic.png",
          content:[
              {name:"盈利报表",href:"/management/pay",icon:"pie-chart"},
              {name:"销售排行",href:"/management/pay",icon:"bar-chart"},
              {name:"营业数据",href:"/management/pay",icon:"area-chart"},
              {name:"库存报表",href:"/management/pay",icon:"line-chart"},
              {name:"会员报表",href:"/management/pay",icon:"dot-chart"}
          ]
      },
      {
          name: "会员中心",
          subtitle: "会员信息查看和编辑",
          logo: "../../assets/management/member.png",
          content:[
              {name:"会员列表",href:"/management/pay",icon:"star-o"},
              {name:"会员积分",href:"/management/pay",icon:"coffee"},
              {name:"等级设置",href:"/management/pay",icon:"wallet"}
          ]
      }
      ];

const CardListItem= function({arr}){
    return(
        <ul className={styles.listItemUl}>
            {arr.map((val)=>{
                return(
                    <li>
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
                style={{
                    position: 'fixed',
                    top:64,
                    left:0,
                    width:"100%",
                    padding: "32px 10%",
                    backgroundColor:'#ffffff',
                    borderBottom:"1px solid #f0f0f0",
                    zIndex:"9000",
                    boxShadow:"0 6px 6px #e3e3e3",
                    minWidth: 1024
                }}
            >
                    <QueueAnim  
                        delay={50} 
                        duration={500} 
                        className={styles.manageCardList}
                        type={['top',"bottom"]}
                    >
                        <div key="card1">
                            <Card bodyStyle={{padding:0}}>
                                <div>
                                    <img alt={manageMenuList[0].name+"图片"} width="100%" src={require("../../assets/management/shop.png")} />
                                </div>
                                <div style={{textAlign: "center"}} className={styles.cardTitle}>
                                    <p><strong>{manageMenuList[0].name}</strong></p>
                                    <p>{manageMenuList[0].subtitle}</p>
                                    <CardListItem  arr={manageMenuList[0].content} />
                                </div>
                            </Card>
                        </div>
                        <div key="card2">
                            <Card bodyStyle={{padding:0}}>
                                <div>
                                    <img alt={manageMenuList[1].name+"图片"} width="100%" src={require("../../assets/management/product.png")} />
                                </div>
                                <div style={{textAlign: "center"}} className={styles.cardTitle}>
                                    <p><strong>{manageMenuList[1].name}</strong></p>
                                    <p>{manageMenuList[1].subtitle}</p>
                                    <CardListItem  arr={manageMenuList[1].content} />
                                </div>
                            </Card>  
                        </div>
                        <div key="card3">
                            <Card bodyStyle={{padding:0}}>
                                <div>
                                    <img alt={manageMenuList[2].name+"图片"} width="100%" src={require("../../assets/management/pay.png")} />
                                </div>
                                <div style={{textAlign: "center"}} className={styles.cardTitle}>
                                    <p><strong>{manageMenuList[2].name}</strong></p>
                                    <p>{manageMenuList[2].subtitle}</p>
                                    <CardListItem  arr={manageMenuList[2].content} />
                               </div>
                            </Card>                
                        </div>
                        <div key="card4">
                            <Card bodyStyle={{padding:0}}>
                                <div>
                                    <img alt={manageMenuList[3].name+"图片"} width="100%" src={require("../../assets/management/statistic.png")} />
                                </div>
                                <div style={{textAlign: "center"}} className={styles.cardTitle}>
                                    <p><strong>{manageMenuList[3].name}</strong></p>
                                    <p>{manageMenuList[3].subtitle}</p>
                                    <CardListItem  arr={manageMenuList[3].content} />
                                </div>
                            </Card>
                        </div>
                        <div key="card5">
                            <Card bodyStyle={{padding:0}}>
                                <div>
                                    <img alt={manageMenuList[4].name+"图片"} width="100%" src={require("../../assets/management/member.png")} />
                                </div>
                                <div style={{textAlign: "center"}} className={styles.cardTitle}>
                                    <p><strong>{manageMenuList[4].name}</strong></p>
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
                    <li className={selected=='main'?styles.headerMenuActive:''} onMouseEnter={this.handleLeave}><p>首页</p></li>
                    <li className={selected=='manage'?styles.headerMenuActive:''} onMouseEnter={this.handleHover}><p>管理中心</p></li>
                    <li className={selected=='support'?styles.headerMenuActive:''} onMouseEnter={this.handleLeave}><p>技术支持</p></li>
                    <li className={selected=='message'?styles.headerMenuActive:''}><p>消息中心</p></li>
                </ul>
                {this.state.management?<ManagementMenu animation={this.animation} handleLeave={this.handleLeave} status={this.state.management} />:null}
            </div>
        );
    }
}

export default Header;