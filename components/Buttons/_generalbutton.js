import styles from '@/styles/Home.module.css'
import {
    Button,
} from "@mui/material";

const Logout = ({ props, function1 }) => {
    

    return(
        <Button variant="text" onClick={function1}>
            <span className={styles.buttontext}>{props}</span>
        </Button>
    );
}
export default Logout;

//HONESTLY THIS COULD BE ANY GENERAL BUTTON

//CREATE PLALIST, LOGOUT