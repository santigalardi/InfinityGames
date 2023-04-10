import { useState, useEffect } from 'react';
import { doc, getDoc, getFirestore } from 'firebase/firestore';
import { useParams } from 'react-router-dom';
import ItemDetail from '../ItemDetail/Index.jsx';
import Loader from '../Loader/Index.jsx';

function ItemDetailContainer({ loading }) {
	const [product, setProduct] = useState(null);
	const params = useParams();

	useEffect(() => {
		const db = getFirestore();
		const itemRef = doc(db, 'items', params.id);

		getDoc(itemRef)
			.then((snapshot) => {
				if (snapshot.exists()) {
					setProduct({
						id: snapshot.id,
						...snapshot.data(),
					});
					console.log(snapshot.data());
				}
			})
			.catch((error) => console.log({ error }));
	}, []);

	if (!product) {
		return <Loader loading={loading} />;
	}

	return (
		<div className='item-detail-container'>
			<ItemDetail product={product} />
		</div>
	);
}

export default ItemDetailContainer;
