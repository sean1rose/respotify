// stateless functional component

import React from 'react';

const mouseOverColor = '#ADD8E6';
const mouseOutColor = 'white';

const Track = (props) => {
	return (
		<li
			style={Track.styles.li}
			onMouseOver={(e) => { e.target.style.backgroundColor = mouseOverColor; }}
			onMouseOut={(e) => { e.target.style.backgroundColor = mouseOutColor; }}
		>
			{props.track.name}
		</li>
	)
};

Track.propTypes = {
	track: React.PropTypes.object.isRequired,
};

Track.styles = {
	li: {
		fontSize: '1.5em',
		padding: '0.2em',
		listStyleType: 'none',
		backgroundColor: mouseOutColor,
	},
};

export default Track;