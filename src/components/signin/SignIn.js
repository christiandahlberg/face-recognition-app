import React from 'react';

import Tilt from 'react-tilt';
import BrainLogo from '../logo/Logo.png';
import '../logo/Logo.css';

const SignIn = ({ onRouteChange }) => {
    return (

      <article className="br2 ba b--black-10 mv4 w-100 w-50-m w-25-l mw6 shadow-5 center">
        <main className="pa4 black-80">
          <form className="measure center">
            <fieldset id="sign_up" className="ba b--transparent ph0 mh0">
              <Tilt className="center Tilt br2 shadow-5" options={{ max : 35 }} style={{ height: 150, width: 150 }} >
                <div className="Tilt-inner pa3">
                    <img style={{paddingTop:'25px'}}alt='logo' src={BrainLogo}/>
                </div>
                </Tilt>
              <div className="mt4">
                <label className="db fw6 lh-copy f6" for="email-address">Email</label>
                <input className="pa2 input-reset ba bg-transparent hover-bg-black hover-white w-100" type="email" name="email-address"  id="email-address" />
              </div>
              <div className="mv3">
                <label className="db fw6 lh-copy f6" for="password">Password</label>
                <input className="b pa2 input-reset ba bg-transparent hover-bg-black hover-white w-100" type="password" name="password"  id="password" />
              </div>
            </fieldset>
            <div className="">
              <input 
                class="b ph3 pv2 input-reset ba b--black bg-transparent grow pointer f5 dib shadow-4 br2" 
                type="submit" 
                value="Sign in"
                onClick={() => onRouteChange('home') }/>
            </div>
            <div className="lh-copy mt3">
              <a href="#0" className="f6 link dim black db">Register</a>
            </div>
          </form>
        </main>
      </article>
    )
} 

export default SignIn;