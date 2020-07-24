import React from 'react';
import './Navigation.css';

const Navigation = () => {
	return (
		<nav style={{display: 'flex', justifyContent: 'flex-end'}}>
			<p className='fw5 ttu f6 pa2 ma2 link dim black-70 pointer nv-style br2 shadow-4'>Sign out</p>
		</nav>
	)
}

export default Navigation;