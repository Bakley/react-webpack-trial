import React, { Component } from 'react'
// import { LoginupPop } from './Login_pop';
import styles from "./App.module.css";
import Popup from 'reactjs-popup' 

class LoginPost extends Component {
	constructor(props){
	super(props);
	this.state={ 
		email:"",
		password:""
	};
	this.handleLogin = this.handleLogin.bind(this);
	this.handleChange = this.handleChange.bind(this);
	}

	handleChange(event) {
	this.setState({ [event.target.id]: event.target.name });
	}

	handleLogin() {
		fetch('https://questioners-two-staging.herokuapp.com/api/auth/login/',{
			method: "POST",
			headers: {
				'Content-Type': 'application/json'
	       },
	})
		.then(response => response.json())
		.then(data => {
			if (data.status === 201){
				console.log(data);
				} 
		else {
			window.alert(data.detail)
			}
		})
		.catch(error =>{
			if (error){
				alert(error.detail)
			}
		} );
		}

  render() {
    return (

      <Popup trigger={<button className={styles["auth-button"]}> Login </button>} modal>
        {close => (
        <div className={styles["modal"]}>
            <div className="header">
                Questioner Login
            </div>
            <div className="content">
                <input 
                  id="email" 
                  type="text" 
                  name="email" 
                  placeholder="Email" 
                  data-testid="LoginEmailInput"  
                  handleChange={this.handleChange}
                />
                <input 
                  id="password" 
                  type="password" 
                  name="password" 
                  placeholder="Password" 
                  data-testid="LoginPasswordInput"
                  handleChange={this.handleChange}
                /> 
                <input 
                id="Loginresults" 
                type="submit" 
                value="Loginup"  
                onClick={this.handleLogin} 
                data-testid="LoginSubmitButton"
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


export default LoginPost