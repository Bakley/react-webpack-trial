import React from 'react';
import styles from "./App.module.css";
import { SignupPop } from './Signup_pop';
import { LoginupPop } from './Login_pop';
import LoginPost from './Login';

export const Navbar = () => {
    return (
        <div className={styles.header}>
            <header className={styles["main-header"]}>
                <nav>
                    <ul>
                        <SignupPop />
                        <LoginPost />
                        <button className={styles["auth-button"]}><a href=""></a>Admin</button>
                        
                    </ul>
                </nav>

            </header>
        </div>
    );
}