import React, { Component } from 'react'
import styles from "./App.module.css";
import Popup from 'reactjs-popup' 

class SignupPost extends Component {
    constructor(props){
        super(props);
        this.state={ 
            name:"",
            nickName:"",
            email:"",
            password:""
        };
        this.handleSignup = this.handleSignup.bind(this);
        this.handleChange = this.handleChange.bind(this);
    }

    handleChange(event) {
    this.setState({ [event.target.id]: event.target.name });
    }
    
    handleSignup() {
        fetch('https://questioners-two-staging.herokuapp.com/api/auth/signup/',{
        method: "POST",
        headers: {
            'Content-Type': 'application/json'
        },
        })
            .then(response => response.json())
            .then(data => {
                if (data.status === 201){
                    console.log(data);
                  } else if(data.error){
                    window.alert(data.error)
                  }
                  
            })
    }

  render() {
    return (
        <Popup trigger={<button className={styles["auth-button"]}> Signup </button>} modal>
            {close => (
            <div className={styles["modal"]}>
                <div className="header">
                    Questioner Signup
                </div>
                <div className="content">
                    <input 
                        id="name" 
                        type="text" 
                        name="name" 
                        placeholder="Name" 
                        data-testid="SignNameInput"
                        handleChange={this.handleChange}
                    />
                    <input 
                        id="nick_name" 
                        type="text" 
                        name="nick_name" 
                        placeholder="Nick Name" 
                        data-testid="SignNickNameInput"
                        handleChange={this.handleChange}
                    />
                    <input 
                        id="email" 
                        type="text" 
                        name="email" 
                        placeholder="Email" 
                        data-testid="SignEmailInput"
                        handleChange={this.handleChange}
                    />
                    <input 
                        id="password" 
                        type="password" 
                        name="password" 
                        placeholder="Password" 
                        data-testid="SignPasswordInput"
                        handleChange={this.handleChange}
                    /> 
                    <input 
                        id="Signresults" 
                        type="submit" 
                        value="Signup" 
                        data-testid="SignSubmitButton"
                        handleChange={this.handleChange}
                    />
                </div>
                <div className="button">
                    <button className="button" onClick={() => {close()}}>
                        close modal
                    </button>
                </div>
            </div>
            )}
        </Popup>
    )
  }
}


export default SignupPost

