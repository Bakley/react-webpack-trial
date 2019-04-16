import React from 'react';
import styles from "./App.module.css";
import Popup from 'reactjs-popup' 
    
export const LoginupPop = () => {
    return (
            <Popup trigger={<button className={styles["auth-button"]}> Login </button>} modal>
                {close => (
                <div className="modal">
                    <a className="close" onClick={close}> &times; </a>
                    <div className="header">
                        Questioner Login
                    </div>
                    <div className="content">
                        <input id="email" type="text" name="email" placeholder="Email" data-testid="LoginEmailInput"/>
                        <input id="password" type="password" name="password" placeholder="Password" data-testid="LoginPasswordInput"/> 
                        <input id="Loginresults" type="submit" value="Loginup" data-testid="LoginSubmitButton"></input> 
                    </div>
                    <div className="button">
                        <button className="button" onClick={() => {close()}}>
                            close modal
                        </button>
                    </div>
                </div>
                )}
            </Popup>
        );
}