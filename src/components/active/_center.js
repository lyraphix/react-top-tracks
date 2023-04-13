import * as React from "react";

const Center = (props) => {
    

    return(
        <div style = {{
            flexDirection:"column", 
            // width:"30vw", 
            // height: "60px", 
            // borderRadius:"30px",
            // background: "#BAC0F1",
            justifyContent:"center",
            alignSelf:"center",
            marginBottom:"40px",
            display: "flex"}}>
            {props.object}
            {props.object2}
            {props.object3}
            {props.object4}
        </div>
    );
}
export default Center;

