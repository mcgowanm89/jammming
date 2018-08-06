import React from 'react';
import './tracklist.css';

import Track from '../Track/track';

class TrackList extends React.Component {
	render() {
		return (
			<div className="TrackList">
        
					{this.props.tracks && this.props.tracks.map((track, i) => {
						return <Track
							key={track.id}
							track={track}
							onAdd={this.props.onAdd}
							onRemove={this.props.onRemove}
							isRemoval={this.props.isRemoval}
						/>;
					})
				}
			</div>
		);
	}
}


export default TrackList;