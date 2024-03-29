import { useState, useEffect } from 'react';
import Loader from '../components/Loader/Loader';
import ItemDetailContainer from '../components/ItemDetailContainer/ItemDetailContainer';

function Item() {
	const [loading, setLoading] = useState(true);
	const [itemReady, setItemReady] = useState(false);

	useEffect(() => {
		const timer = setTimeout(() => setLoading(false), 2000);
		return () => clearTimeout(timer);
	}, []);

	useEffect(() => {
		setItemReady(true);
	}, []);

	return (
		<div>
			<Loader loading={loading} />
			{itemReady && (
				<div className={`item-detail-container ${loading ? 'hidden' : ''}`}>
					<ItemDetailContainer />
				</div>
			)}
		</div>
	);
}

export default Item;
