import React from 'react';

const Footer = () => {
	const yr = new Date().getFullYear();
	return (
		<footer className="pv4 ph3 ph5-m ph6-l mid-gray">
		  <small className="f6 db tc">© {yr} <b className="ttu">Christian Dahlberg</b>. All Rights Reserved.</small>
		  <div className="tc mt3">
		    <p 
			    title="Language" className="f6 dib ph2 mid-gray">
			    Inspired by <a href='https://github.com/aneagoie/face-recognition-brain' 
				    	className="b pointer dim link mid-gray"> 
				    	Andrei Neagoie</a>.
	    	</p>
		  </div>
		</footer>
	)

}

export default Footer;