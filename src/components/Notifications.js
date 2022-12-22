import React from "react"
import styles from "./notification.module.css"

function Notifications()
{
    return(
        <>
            <div className={styles.notificationBox}>
                <p className={styles.updatesText}>Updates</p>
                <p className={styles.createText}> Create a life you love</p>
            </div>

        
        </>

    )
}
export default Notifications;