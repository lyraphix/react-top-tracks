import * as React from "react";
import styles from '@/styles/Home.module.css'

import {
  Button,
} from '@mui/material/';

const Indexbutton = (props) => {
    
   

    return(
        <div className={styles.navigatepages}>
            <Button onClick={props.function} variant="text" href={props.link} >
              <span className={styles.buttontext}>{props.name}</span>
            </Button>
        </div>
    );
}
export default Indexbutton;