import React from 'react';

import Tilt from 'react-tilt';
import BrainLogo from '../logo/Logo.png';
import '../logo/Logo.css';

class SignIn extends React.Component {
    constructor(props) {
        super();
        this.state = {
            signInEmail: '',
            signInPassword: '',
        }
    }

    onEmailChange = (event) => {
        this.setState({signInEmail: event.target.value})
    }

    onPasswordChange = (event) => {
        this.setState({signInPassword: event.target.value})
    }

    onSubmitSignIn = () => {
        fetch('https://mysterious-savannah-50744.herokuapp.com/signin', {
            method: 'post',
            headers: {'Content-Type': 'application/json'},
            body: JSON.stringify({
                email: this.state.signInEmail,
                password: this.state.signInPassword
            })
        })
            .then(response => response.json())
            .then(user => {
              if(user.id){
                this.props.loadUser(user);
                this.props.onRouteChange('home');
              }
            })
    }

    render() {
        const { onRouteChange } = this.props;
        return (
          <article className="br2 ba b--black-10 mv4 w-100 w-50-m w-25-l mw6 shadow-4 center">
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
                    className="b ph3 pv2 input-reset ba b--black bg-transparent grow pointer f5 dib shadow-4 br2" 
                    type="submit" 
                    value="Sign in"
                    onClick={this.onSubmitSignIn}/>
                </div>
                <div className="lh-copy mt3">
                  <p 
                    onClick={() => onRouteChange('register') }
                    className="f6 link dim black db pointer">New user? <span className="b">Register</span>
                  </p>
                </div>
              </div>
            </main>
          </article>
        )
    }

} 

export default SignIn;