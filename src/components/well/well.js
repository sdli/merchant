import React,{Component} from "react";
import styles from "./well.css";

const well = function({component,title}){
    return (
        <div className={styles.wellPrimary}>
            <p>{title}</p>
            <div>
                {component}
            </div>
        </div>
    );
};

export default well;
