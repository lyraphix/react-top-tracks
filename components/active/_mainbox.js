import * as React from "react";
import styles from '@/styles/Home.module.css'

const MainBox = (props) => {
    

    return(
        <div className={styles.dashboard} style={{ height: "100vh", flexDirection: "column", backgroundColor: "#282634" }}>
            {props.object1}
            {props.object2}
        </div>
    );
}
export default MainBox;