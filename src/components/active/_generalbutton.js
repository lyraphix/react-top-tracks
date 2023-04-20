import styles from '@/styles/Home.module.css'
import {
    Button,
} from "@mui/material";
import * as React from "react";


const MainButton = (props) => {

    const hsize = props.height;
    const wsize = props.weight;
    const marginl = props.mll;
    const marginr = props.mrr;
    const margint = props.mtt;
    const marginb = props.mbb;
    const colori= props.coloringg;

    return(
        
        <Button variant="contained" href={props.link} onClick={props.loc} sx={{height:hsize, width:wsize, backgroundColor:colori, color:"primary.textD", alignSelf:"center", ml: marginl, mt: margint, mb: marginb, mr: marginr}}>{props.name}</Button>

        
    );
}
export default MainButton;
