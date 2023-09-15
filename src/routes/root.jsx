import { useParams } from 'react-router-dom';
import { useState, useEffect } from 'react';
import ItemListContainer from '../components/ItemListContainer/ItemListContainer';
import Loader from '../components/Loader/Loader';

function Root() {
	const [loading, setLoading] = useState(true);
	const [itemListReady, setItemListReady] = useState(false);
	const params = useParams();
	const isCategoryRoute = Boolean(params.id);

	useEffect(() => {
		const timer = setTimeout(() => setLoading(false), 2000);
		return () => clearTimeout(timer);
	}, []);

	useEffect(() => {
		setItemListReady(true);
	}, []);

	return (
		<div>
			<Loader loading={loading} />
			{itemListReady && (
				<div className={`item-list-container ${loading ? 'hidden' : ''}`}>
					<ItemListContainer
						isCategoryRoute={isCategoryRoute}
						categoryId={params.id}
					/>
				</div>
			)}
		</div>
	);
}

export default Root;
