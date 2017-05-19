import { Carousel } from 'antd';
import styles from "./well.css";

const cards = function(){
    return(
          <Carousel autoplay>
            <div className={styles.slickSlide}><h1>云东家推广中心</h1></div>
            <div className={styles.slickSlide}><h1>一键生成H5功能全新上线</h1></div>
        </Carousel>
    );
};

export default cards;
