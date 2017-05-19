import React,{Component} from "react";
import styles from "./support.css";

class More extends Component{
    constructor(props){
        super(props);
    }

    render(){
        const {arr} = this.props;
        return(
            <div  style={{borderTop:"8px solid #f6f6f6"}}>
                <div className={styles.faqDiv}>
                    <p>更多支持</p>
                    <div className={styles.faqGroup}>
                        <div>
                            <div className={styles.findMore} style={{background:"#4d4d4d"}}>
                                <p>在线文档</p>
                                <p>查看在线说明书</p>
                            </div>
                        </div>
                        <div>
                            <div className={styles.findMore} style={{background:"#0092C9"}}>
                                <p>提交工单</p>
                                <p>客服24小时内回复</p>
                            </div>
                        </div>
                        <div>
                            <div className={styles.findMore} style={{background:"#14C900"}}>
                                <p>客服电话</p>
                                <p>0755-86524867</p>
                            </div>
                        </div>
                        <div style={{clear:"both"}}></div>
                    </div>
                </div>
            </div>
        );
    }

}

export default More;