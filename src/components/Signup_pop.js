import React from 'react';
import styles from "./App.module.css";
import Popup from 'reactjs-popup' 
    
export const SignupPop = () => {
    return (
            <Popup trigger={<button className={styles["auth-button"]}> Signup </button>} modal>
                {close => (
                <div className="modal">
                    <a className="close" onClick={close}> &times; </a>
                    <div className="header">
                        Questioner Signup
                    </div>
                    <div className="content">
                        <input id="name" type="text" name="name" placeholder="Name" data-testid="SignNameInput"/>
                        <input id="nick_name" type="text" name="nick_name" placeholder="Nick Name" data-testid="SignNickNameInput"/>
                        <input id="email" type="text" name="email" placeholder="Email" data-testid="SignEmailInput"/>
                        <input id="password" type="password" name="password" placeholder="Password" data-testid="SignPasswordInput"/> 
                        <input id="Signresults" type="submit" value="Signup" data-testid="SignSubmitButton"></input> 
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
