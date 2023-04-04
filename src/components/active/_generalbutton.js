import styles from '@/styles/Home.module.css'
import {
    Button,
} from "@mui/material";
import * as React from "react";


const MainButton = (props) => {

    const hsize = props.height;
    const wsize = props.weight;

    return(
        
            <Button variant="contained" onClick={props.loc} sx={{height:hsize, width:wsize,color:"primary.textD", alignSelf:"center"}}>{props.name}</Button>
        
    );
}
export default MainButton;