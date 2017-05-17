import {Icon,Button,Carousel} from 'antd';
import styles from "./index.css";

const Content = function(){
    return (
           <div>
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
                <div className={styles.newsGroup}>
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
    );
}

export default Content;