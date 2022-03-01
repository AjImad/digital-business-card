import React from "react"
import ProfilePicture from "../assets/avatar.jfif"
import emailLogo from "../assets/Email-logo.png"
import linkedinLogo from "../assets/LinkedIn-logo.png"
import styles from "./Info.module.css"

export default function Info(){
    return (
        <div className={styles.container}>
            <header className={styles.header}>
                <img
                    className={styles.avatar}
                    src={ProfilePicture}
                    alt="AJBAR Imad"
                />
            </header>
            <div className={styles.bio}>
                <h1 className={styles.name}>AJBAR Imad</h1>
                <p className={styles.title}>Frontend Developer</p>
                <p className={styles.small}>(Website coming soon)</p>
                <div className={styles.contacts}>
                    <a
                        target="_blank"
                        rel="noopener noreferrer"
                        className={`${styles.links} ${styles.email}`}
                        href="mailto:ajbar.imad.99@gmail.com"
                    >
                        <img className={styles.icons} src={emailLogo}/>
                        Email
                    </a>
                    <a
                        target="_blank"
                        rel="noopener noreferrer"
                        className={`${styles.links} ${styles.linkedin}`}
                        href="https://www.linkedin.com/in/imad-ajbar-09a77720b/"
                    >
                        <img className={styles.icons} src={linkedinLogo}/>
                        Linkedin
                    </a>
                </div>
            </div>
        </div>
    )
}