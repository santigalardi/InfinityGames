import { useState, useEffect } from 'react';
import {
	collection,
	getFirestore,
	getDocs,
	query,
	where,
} from 'firebase/firestore';
import ItemList from '../ItemList/Index.jsx';
import './itemListContainer.css';

function ItemListContainer({ categoryId, isCategoryRoute }) {
	const [products, setProducts] = useState([]);

	useEffect(() => {
		const db = getFirestore();
		const itemsCollection = collection(db, 'items');

		if (isCategoryRoute) {
			const queryResult = query(
				itemsCollection,
				where('category', '==', categoryId)
			);
			getDocs(queryResult)
				.then((snapshot) => {
					const docs = snapshot.docs;
					setProducts(docs.map((doc) => ({ id: doc.id, ...doc.data() })));
				})
				.catch((error) => console.log({ error }));
		} else {
			getDocs(itemsCollection)
				.then((snapshot) => {
					const docs = snapshot.docs;
					setProducts(docs.map((doc) => ({ id: doc.id, ...doc.data() })));
				})
				.catch((error) => console.log({ error }));
		}
	}, [categoryId]);

	return (
		<div className='item-list-container'>
			<ItemList products={products} />
		</div>
	);
}

export default ItemListContainer;
