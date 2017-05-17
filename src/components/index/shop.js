import styles from "./index.css";
import image from "../../assets/yay.jpg";
import { Badge,Popover,Button  } from 'antd';

const PopContent= function(){
    return (
        <div>
            <p className={styles.popOver}>
                <Button type="primary" icon="link" size="small">商户入网</Button>
                <Button type="primary" icon="line-chart" size="small">商户报表</Button>
            </p>
            <p className={styles.popOver}>
                <Button type="primary" icon="smile-o" size="small">编辑信息</Button>
                <Button type="primary" icon="android" size="small">终端管理</Button>
            </p>
        </div>
    );
};

const ShopItem = function({shopName,status,image}){
    return(
        <Popover content={<PopContent />} title="快捷功能" placement="rightTop">
            <div className={styles.shopItem}>
                <img src={require('../../assets/'+ image+ '.png')} />
                <p>
                    <span>{shopName}</span>
                </p>
                <span>
                    <Badge status="processing" />运营中
                </span>
            </div>
        </Popover>
    );
};

const shop = function({shopList}){
    return (
        <div className={styles.indexShop}>
            {shopList.map((val)=>{
                return (
                    <ShopItem shopName={val.name} status={val.status} key={val.name} image={val.image}/>
                );
            })}
        </div>
    );
}

export default shop;