import * as React from "react";

const Center = (props) => {
    

    return(
        <div style = {{
            flexDirection:"column", 
            justifyContent:"center",
            alignSelf:"center",
            marginBottom:"20px",
            display: "flex"}}>
            {props.object}
            {props.object2}
            {props.object3}
            {props.object4}
            {props.object5}
            {props.object6}
            {props.object7}


        </div>
    );
}
export default Center;

