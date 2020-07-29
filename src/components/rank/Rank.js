import React, { Fragment } from 'react';

const Rank = ({ name, entries }) => {
	return (
		<Fragment>
			<div className="f3 black-70 fw5 pb3 mt0 tc">
				{`${name}, your current entries are: ${entries}`}
			</div>
		</Fragment>
	)
}

export default Rank;