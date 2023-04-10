import { PacmanLoader } from 'react-spinners';
import { memo } from 'react';
import './loader.css';

// eslint-disable-next-line react/display-name
const Loader = memo(
	({ loading }) => {
		return (
			loading && (
				<div className='loader-container'>
					<PacmanLoader
						loading={loading}
						className='loader'
						speedMultiplier={2}
						size={50}
						color='#1010c9'
					/>
				</div>
			)
		);
	},
	(oldProps, newProps) => oldProps.loading === newProps.loading
);

export default Loader;
