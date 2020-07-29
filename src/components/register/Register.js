import React from 'react';

import Tilt from 'react-tilt';
import BrainLogo from '../logo/Logo.png';
import '../logo/Logo.css';

class Register extends React.Component {
  constructor(props) {
        super();
        this.state = {
            name: '',
            email: '',
            password: '',
        }
    }

    validate = () => {
      const nameInput = document.getElementById('name').value;
      const emailInput = document.getElementById('email-address').value;
      const password = document.getElementById('password').value;

      var pattern = new RegExp(/^(("[\w-\s]+")|([\w-]+(?:\.[\w-]+)*)|("[\w-\s]+")([\w-]+(?:\.[\w-]+)*))(@((?:[\w-]+\.)*\w[\w-]{0,66})\.([a-z]{2,6}(?:\.[a-z]{2})?)$)|(@\[?((25[0-5]\.|2[0-4][0-9]\.|1[0-9]{2}\.|[0-9]{1,2}\.))((25[0-5]|2[0-4][0-9]|1[0-9]{2}|[0-9]{1,2})\.){2}(25[0-5]|2[0-4][0-9]|1[0-9]{2}|[0-9]{1,2})\]?$)/i);
      let isValid = true;

      if (nameInput.length === 0 ||
          password.length === 0 ||
          emailInput.length === 0 ||
          !pattern.test(emailInput)) {
        isValid = false;
      }

      return isValid;

    }

    onNameChange = (event) => {
        this.setState({name: event.target.value})
    }

    onEmailChange = (event) => {
        this.setState({email: event.target.value})
    }

    onPasswordChange = (event) => {
        this.setState({password: event.target.value})
    }

    onSubmitRegister = () => {

      if (!this.validate()) {
        console.log("ERROR: Validation wrong. Either empty values or wrong email pattern.") // TODO error handling
      } else {
        fetch('http://localhost:3001/register', {
          method: 'post',
          headers: {'Content-Type': 'application/json'},
          body: JSON.stringify({
              name: this.state.name,
              email: this.state.email,
              password: this.state.password
          })
      })
          .then(response => response.json())
          .then(user => {
              if (user) {
                  this.props.loadUser(user);
                  this.props.onRouteChange('home')
                  console.log(user)
              }
          })
      }
    }

  render() {
    const { onRouteChange } = this.props;
    return (
      <article className="br2 ba b--black-10 mv4 w-100 w-50-m w-25-l mw6 shadow-5 center">
        <main className="pa4 black-80">
          <div className="measure center">
            <fieldset id="sign_up" className="ba b--transparent ph0 mh0">
              <Tilt className="center Tilt br2 shadow-5" options={{ max : 35 }} style={{ height: 150, width: 150 }} >
                <div className="Tilt-inner pa3">
                    <img style={{paddingTop:'25px'}}alt='logo' src={BrainLogo}/>
                </div>
              </Tilt>
              <div className="">
                <p className="tc f3 fw6 ph0 mh0">SmartBrain</p>   
              </div>
              <div className="mt4">
                <label className="db fw6 lh-copy f6 mb2" htmlFor="name">Name</label>
                <input 
                  onChange={this.onNameChange} 
                  className="pa2 input-reset ba bg-transparent hover-bg-black hover-white w-100" 
                  type="text" 
                  name="name"  
                  id="name" />
              </div>
              <div className="mv3">
                <label className="db fw6 lh-copy f6 mb2" htmlFor="email-address">Email</label>
                <input 
                  onChange={this.onEmailChange} 
                  className="pa2 input-reset ba bg-transparent hover-bg-black hover-white w-100" 
                  type="email" 
                  name="email-address" 
                  id="email-address" />
              </div>
              <div className="mv3">
                <label className="db fw6 lh-copy f6 mb2" htmlFor="password">Password</label>
                <input 
                  onChange={this.onPasswordChange} 
                  className="b pa2 input-reset ba bg-transparent hover-bg-black hover-white w-100" 
                  type="password" 
                  name="password" 
                  id="password" />
              </div>
            </fieldset>
            <div className="">
              <input 
                className="b br2 ph3 pv2 input-reset ba b--black bg-transparent grow pointer f5 dib shadow-4" 
                type="submit" 
                value="Register"
                onClick={this.onSubmitRegister}/>
            </div>
            <div className="lh-copy mt3">
              <p 
                onClick={() => onRouteChange('signin') }
                className="f6 link dim black db pointer">Already have an account? <span className="b">Sign in</span>
              </p>
            </div>
          </div>
        </main>
      </article>
    )
  }  
} 

export default Register;