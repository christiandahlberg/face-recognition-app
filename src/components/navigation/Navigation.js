import React from 'react';
import './Navigation.css';

const Navigation = ({onRouteChange}) => {
	return (
		<nav style={{display: 'flex', justifyContent: 'flex-end'}}>
			<div className="">
              <input 
                className="b br2 mr3 mt3 ph3 pv2 input-reset ba b--black bg-transparent grow pointer f5 dib shadow-4" 
                type="submit" 
                value="Sign out"
                onClick={() => onRouteChange('signin') }/>
            </div>
		</nav>
	)
}

export default Navigation;