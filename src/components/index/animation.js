import QueueAnim from 'rc-queue-anim';
import { Card } from 'antd';

const manageMenuList=[
      {
          name: '门店管理',
          subtitle: "门店与职员管理",
          logo: "../../assets/management/shop.png",
          content:[
              {name:"门店列表",href:"/management/shopList"},
              {name:"职员管理",href:"/management/shopList"},
              {name:"设备绑定",href:"/management/shopList"}
          ]
      },
      {
          name: "商品管理",
          subtitle: "库存、条码与出入库管理",
          logo: "../../assets/management/product.png",
          content:[
              {name:"商品入库",href:"/management/product"},
              {name:"库存记录",href:"/management/product"},
              {name:"商品出库",href:"/management/product"},
              {name:"条码管理",href:"/management/product"},
              {name:"商品单位管理",href:"/management/product"}
          ]
      },
      {
          name: "支付申请",
          subtitle: "银行卡、支付宝、微信支付申请",
          logo: "../../assets/management/pay.png",
          content:[
              {name:"门店列表",href:"/management/pay"},
              {name:"支付申请",href:"/management/pay"},
              {name:"申请记录",href:"/management/pay"}
          ]
      },
      {
          name: "统计报表",
          subtitle: "盈利、销售、库存报表",
          logo: "../../assets/management/statistic.png",
          content:[
              {name:"盈利报表",href:"/management/pay"},
              {name:"销售排行",href:"/management/pay"},
              {name:"营业数据",href:"/management/pay"},
              {name:"库存报表",href:"/management/pay"},
              {name:"会员报表",href:"/management/pay"}
          ]
      },
      {
          name: "会员中心",
          subtitle: "会员信息查看和编辑",
          logo: "../../assets/management/member.png",
          content:[
              {name:"会员列表",href:"/management/pay"},
              {name:"会员积分",href:"/management/pay"},
              {name:"等级设置",href:"/management/pay"}
          ]
      }
      ];

const animation = function(){
    return (
                    <QueueAnim  delay={1000} duration={5000}>
                        <div key="a">
                            <div>
                                <img alt={manageMenuList[0].name+"图片"} width="100%" src={require("../../assets/management/shop.png")} />
                            </div>
                            <div style={{textAlign: "center"}}>
                                <h3>{manageMenuList[0].name}</h3>
                                <p>{manageMenuList[0].subtitle}</p>
                            </div>
                        </div>
                        <div key="b">
                            <div>
                                <img alt={manageMenuList[0].name+"图片"} width="100%" src={require("../../assets/management/shop.png")} />
                            </div>
                            <div style={{textAlign: "center"}}>
                                <h3>{manageMenuList[0].name}</h3>
                                <p>{manageMenuList[0].subtitle}</p>
                            </div>
                        </div>
                        <div key="c">
                            <div>
                                <img alt={manageMenuList[0].name+"图片"} width="100%" src={require("../../assets/management/shop.png")} />
                            </div>
                            <div style={{textAlign: "center"}}>
                                <h3>{manageMenuList[0].name}</h3>
                                <p>{manageMenuList[0].subtitle}</p>
                            </div>
                        </div>
                    </QueueAnim>
    );
}

export default animation;
