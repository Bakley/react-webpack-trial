import React, { Component } from 'react'

class SignupPost extends Component {
    constructor(props){
        super(props);
        this.state={ 
            name = "",
            nickName = "",
            email:"",
            password:""
        };
        this.handleSignup = this.handleSignup.bind(this);
      }
    
        handleSignup() {
            fetch('https://questioners-two-staging.herokuapp.com/api/auth/signup/',{
              method: "POST",
              headers: {
                'Content-Type': 'application/json'
              },
            })
                .then(response => response.json())
                .then(data => console.log(data))
        }
  render() {
    return (
      <div>
        
      </div>
    )
  }
}


export default SignupPost

