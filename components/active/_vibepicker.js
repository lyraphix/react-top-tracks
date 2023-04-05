//SUBJECTED TO CHANGE
import * as React from "react";
import styles from '@/styles/Home.module.css'

const Vibecontent = (props) => {


    return (
        <div style={{
            flexDirection: "row",
            width: "60px",
            height: "60px",
            borderRadius: "30px",
            marginLeft:"10px",
            marginRight:"10px",
            background: !props.avatarcolor ? "#E0765E" : "#64936E",
            alignSelf: "center",
            display: "flex"
        }}>
            <img classname={styles.untitledartworkdash3} style={{ marginTop: "5px", marginBottom: "5px", marginRight: "10px", marginLeft: "5px", width: "50px", height: "auto" }} src={props.avatar} />
        </div>

    );
}
export default Vibecontent;