import React,{Component} from "react";
import styles from "./support.css";

class faq extends Component{
    constructor(props){
        super(props);
    }

    render(){
        const {arr} = this.props;
        return(
            <div className={styles.faqDiv}>
                <p>常见问题</p>
                <div className={styles.faqGroup}>
                    <div>
                        <ul>
                            {arr.map((val,index)=>{
                                return (index<=3)?(<li key={index}><a>{val.title}</a></li>):null;
                                }
                            )}
                        </ul>
                    </div>
                    <div>
                        <ul>
                            {arr.map((val,index)=>{
                                 return (index>3&&index<=6)?(<li key={index}><a>{val.title}</a></li>):null;
                            })}
                        </ul>
                    </div>
                    <div>
                        <ul>
                            {arr.map((val,index)=>{
                                 return (index>6&&index<=9)?(<li key={index}><a>{val.title}</a></li>):null;
                            })}
                        </ul>
                    </div>
                    <div style={{clear:"both"}}></div>
                </div>
                <div style={{clear:"both"}}></div>
            </div>
        );
    }
}

export default faq;