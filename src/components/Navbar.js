import React from 'react';
import styles from "./App.module.css";
import LoginPost from './Login';
import SignupPost from './Signup';

export const Navbar = () => {
    return (
        <div className={styles.header}>
            <header className={styles["main-header"]}>
                <nav>
                    <ul>
                        <SignupPost />
                        <LoginPost />
                        <button className={styles["auth-button"]}><a href=""></a>Meetups</button>
                        
                    </ul>
                </nav>

            </header>
        </div>
    );
}