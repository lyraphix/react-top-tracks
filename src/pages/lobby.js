import * as React from "react";
import styles from '@/styles/Home.module.css'

const Lobby = () => {

    const readyup = "/lobby/readyup.png";

    return (
        <div className={styles.all}>


            <div className={styles.landing} style={{ marginLeft: 0 }}>
                <div className={styles.flexcontainer}>

                </div>

                <div className={styles.flexcontainer}>
                    <div className={styles.flexcontainer1}>
                        <div className={styles.catabsolutecontainer} style={{ marginRight: "15%" }}>
                            <span className={styles.meetyour} style={{ fontWeight: 400, color: "#dcdffb" }}>Privacy</span>
                            <span className={styles.gettheplaylistjus} style={{ fontSize: 15, lineHeight: 1.5 }}>
                                dnaknklask
                            </span>

                            <span className={styles.gettheplaylistjus} style={{ marginTop: -20, fontSize: 15, lineHeight: 1.5 }}>
                                hello
                                <img src={readyup} />
                            </span>
                            
                        </div>
                    </div>
                </div>

            </div>
            <span className={styles.num20238bitsterms}>
                
            </span>
            <span className={styles.num20238bitsterms}>
                
            </span>
            <span className={styles.num20238bitsterms}>
                
            </span>

        </div>
    );
};
export default Lobby;
