import React from "react"
import styles from "./Footer.module.css"
import githubLogo from "../assets/Github-logo.png"

export default function Footer(){
    return(
        <footer className={styles.footer}>
            <div>
                <a 
                    target="_blank"
                    rel="noopener noreferrer"
                    href="https://github.com/AjImad"
                >
                    <img src={githubLogo} className={styles.socialIcon} />
                </a>
            </div>
        </footer>    
    )
}

