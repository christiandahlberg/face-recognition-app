import React from 'react';
import Tilt from 'react-tilt';
import BrainLogo from './Logo.png';
import './Logo.css';

const Logo = () => {
	return (
		<div className='ma5 mt0'>
			<Tilt className="Tilt br2 shadow-5" options={{ max : 35 }} style={{ height: 150, width: 150 }} >
				<div className="Tilt-inner pa3">
					<img style={{paddingTop:'25px'}}alt='logo' src={BrainLogo}/>
				</div>
			</Tilt>
		</div>
	)
}

export default Logo;