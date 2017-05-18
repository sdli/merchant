import React,{Component} from 'react';
import { connect } from 'dva';
import Layout from "../../components/layout/main.layout";
import HeaderComponent from "../../components/index/header";
import MenuComponent from "../../components/menu/manage";
import UserInfo from '../../components/index/userInfo';
import Table from "../../components/charts/shopTable.js";
import Well from "../../components/well/well";
import { Modal,Button } from 'antd';
import ShopModal from "../../components/form/addShop";

class ManagementTable extends Component{
    constructor(props){
        super(props);
        this.state = { visible: false };
    }

    showModal = () => {
        this.setState({
        visible: true,
        });
    }

    handleOk = (e) => {
        console.log(e);
        this.setState({
        visible: false,
        });
    }

    handleCancel = (e) => {
        console.log(e);
        this.setState({
        visible: false,
        });
    }
    render(){
        return (
            <div>
                <Well title="店铺列表" component={
                    <div>
                        <Button type="primary" onClick={this.showModal} icon="plus">新增门店</Button>
                        <Modal title="新增门店" visible={this.state.visible}
                        onOk={this.handleOk} onCancel={this.handleCancel}
                        >
                            <ShopModal />
                        </Modal>
                    </div>
                } />
                <div style={{padding:"16px",borderTop:"8px solid #f6f6f6"}}>
                    <Table />
                </div>
            </div> 
        );
    }
    
};

function IndexPage(){
  return (
    <Layout 
      title="云东家商户管理中心"  
      ContentComponent={<ManagementTable />} 
      HeaderComponent={<HeaderComponent selected="manage" />} 
      MenuComponent={<MenuComponent />}
      UserInfo={<UserInfo />}
      contentType="full"
      Animation={{
          duration: 200,
          type: "right"
      }}
    />
  );
}

export default connect()(IndexPage);
