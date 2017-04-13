import styles from "./index.css";

const list = {
    main: '首页',
    manage: '管理中心',
    support: '技术支持',
    message: '消息中心' 
};

const header = function({selected}){
    console.log(selected);
    return(
        <div className={styles.headerMenu}>
            <ul className={styles.headerUl}>
                <li className={selected=='main'?styles.headerMenuActive:''}><p>首页</p></li>
                <li className={selected=='manage'?styles.headerMenuActive:''}><p>管理中心</p></li>
                <li className={selected=='support'?styles.headerMenuActive:''}><p>技术支持</p></li>
                <li className={selected=='message'?styles.headerMenuActive:''}><p>消息中心</p></li>
            </ul>
        </div>
    );
}

export default header;