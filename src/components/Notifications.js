import React from "react"
import styles from "./notification.module.css"

function Notifications({pinNotification})
{
    return(
        <>
            <div className={styles.notificationBox}>
                <p className={styles.updatesText}>Updates</p>
                <p className={styles.createText}> Create a life you love</p>
            {pinNotification === true  ? <p>Your pin has been added to favourites</p> : ""}
            </div>

        
        </>

    )
}
export default Notifications;