import React from "react";
import styles from "./ProfileImageBlocker.module.scss"

const ProfileImageBlocker: React.FC = () => {
    return <div className={styles.profileBlock}>
        <img className={styles.profilePic} alt="profile" src="https://media-exp1.licdn.com/dms/image/C5603AQEPDLaqBuwtYA/profile-displayphoto-shrink_400_400/0/1604749242748?e=1640217600&v=beta&t=GC3wsWIjz-vFCwBruITW9yA3lOTcsRO5vMnhHGzY5EI" />
    </div>
}

export default ProfileImageBlocker;
