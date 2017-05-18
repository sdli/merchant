import { Menu, Icon } from 'antd';
import React,{Component} from "react";
const SubMenu = Menu.SubMenu;

class Sider extends Component {
  state = {
    current: '1',
    openKeys: ["sub1"],
  }
  handleClick = (e) => {
    console.log('Clicked: ', e);
    this.setState({ current: e.key });
  }

  onOpenChange = (openKeys) => {
    const state = this.state;
    const latestOpenKey = openKeys.find(key => !(state.openKeys.indexOf(key) > -1));
    const latestCloseKey = state.openKeys.find(key => !(openKeys.indexOf(key) > -1));

    let nextOpenKeys = [];
    if (latestOpenKey) {
      nextOpenKeys = this.getAncestorKeys(latestOpenKey).concat(latestOpenKey);
    }
    if (latestCloseKey) {
      nextOpenKeys = this.getAncestorKeys(latestCloseKey);
    }
    this.setState({ openKeys: nextOpenKeys });
  }

  getAncestorKeys = (key) => {
    const map = {
      sub3: ['sub2'],
    };
    return map[key] || [];
  }

  render() {
      console.log(this.state);
    return (
      <Menu
        mode="inline"
        openKeys={this.state.openKeys}
        selectedKeys={[this.state.current]}
        style={{ width: 240,minHeight: 750 }}
        onOpenChange={this.onOpenChange}
        onClick={this.handleClick}
        defaultSelectedKeys={['sub1','sub2','sub3']}
      >
        <SubMenu key="sub1" title={<span><Icon type="shop" /><span>门店管理</span></span>}>
          <Menu.Item key="1">门店列表</Menu.Item>
          <Menu.Item key="2">职员管理</Menu.Item>
          <Menu.Item key="3">设备绑定</Menu.Item>
        </SubMenu>
        <SubMenu key="sub2" title={<span><Icon type="select" /><span>商品管理</span></span>}>
          <Menu.Item key="5">新增商品</Menu.Item>
          <Menu.Item key="6">库存记录</Menu.Item>
          <SubMenu key="sub3" title="库存管理">
            <Menu.Item key="7">商品入库</Menu.Item>
            <Menu.Item key="8">商品出库</Menu.Item>
            <Menu.Item key="9">商品报损</Menu.Item>
          </SubMenu>
          <Menu.Item key="10">条码库</Menu.Item>
          <Menu.Item key="11">商品单位库</Menu.Item>
        </SubMenu>
        <SubMenu key="sub4" title={<span><Icon type="pay-circle" /><span>支付申请</span></span>}>
          <Menu.Item key="12">门店列表</Menu.Item>
          <Menu.Item key="13">申请支付</Menu.Item>
          <Menu.Item key="14">申请记录</Menu.Item>
        </SubMenu>
        <SubMenu key="sub5" title={<span><Icon type="pie-chart" /><span>数据统计</span></span>}>
          <Menu.Item key="15">盈利报表</Menu.Item>
          <Menu.Item key="16">销售排行</Menu.Item>
          <Menu.Item key="17">营业数据</Menu.Item>
          <Menu.Item key="18">库存报表</Menu.Item>
          <Menu.Item key="19">会员报表</Menu.Item>
        </SubMenu>
        <SubMenu key="sub6" title={<span><Icon type="user" /><span>会员管理</span></span>}>
          <Menu.Item key="20">会员列表</Menu.Item>
          <Menu.Item key="21">会员积分</Menu.Item>
          <Menu.Item key="22">会员等级</Menu.Item>
        </SubMenu>
      </Menu>
    );
  }
}

export default Sider;

