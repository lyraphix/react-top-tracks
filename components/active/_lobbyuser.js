import styles from '@/styles/Home.module.css'
import * as React from "react";

const User = (props) => {


    return (
        
        <div style={{
            flexDirection: "row",
            width: "200px",
            height: "60px",
            borderRadius: "30px",
            background: "#BAC0F1",
            alignSelf: "center",
            display: "flex"
        }}>
            <img classname={styles.untitledartworkdash3} style={{ marginTop: "5px", marginBottom: "5px", marginRight: "10px", marginLeft: "5px", width: "50px", height: "auto" }} src={props.avatar} />
            <div style={{ flexDirection: "column", fontFamily: "Inter, sans-serif", fontSize: "80%", fontWeight: "500", color: "#494362", letterSpacing: "1px", alignSelf: "center", marginLeft: "10px" }}>
                {props.id}
            </div>
            {/* <div style = {{
                    flexDirection:"row", 
                    width:"20px", 
                    height: "20px", 
                    marginLeft: "30%",
                    borderRadius:"30px",
                    background: "#E0765E",
                    alignSelf:"center"}}>
                </div> */}
        </div>
    );
}
export default User;

//HONESTLY THIS COULD BE ANY GENERAL BUTTON

//CREATE PLALIST, LOGOUT