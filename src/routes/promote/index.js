import React,{Component} from 'react';
import { connect } from 'dva';
import Layout from "../../components/layout/main.layout";
import HeaderComponent from "../../components/index/header";
import UserInfo from '../../components/index/userInfo';
import Well from "../../components/well/well";
import Zone from "../../components/well/promotionZone";
import Cards from "../../components/well/promotionCard";

class PromotionIndex extends Component{
    constructor(props){
        super(props);
    }

    render(){
        return (
            <div>
                <div style={{padding:32}}>
                    <Zone />
                </div>
                <Cards />
            </div> 
        );
    }
};

function IndexPage(){
  return (
    <Layout
      title="云东家商户管理中心"  
      ContentComponent={<PromotionIndex />} 
      HeaderComponent={<HeaderComponent selected="promotion" />} 
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
