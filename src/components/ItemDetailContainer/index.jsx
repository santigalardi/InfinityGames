import Products from '../../mocks/products';
import { useState, useEffect } from 'react';
import ItemDetail from '../ItemDetail';

function ItemDetailContainer({ isIdRoute, Id }) {
	const [products, setProducts] = useState([]);

	useEffect(() => {
		const productsPromise = new Promise((resolve, reject) =>
			setTimeout(() => resolve(Products), 2000)
		);

		productsPromise
			.then((response) => {
				if (isIdRoute) {
					const productsFiltered = response.find(
						(product) => product.id === Id
					);
					setProducts(productsFiltered);
				} else {
					setProducts(response);
				}
			})
			.catch((err) => console.log(err));
	}, [Id]);

	return (
		<div className='item-detail-container'>
			<ItemDetail products={products} />
		</div>
	);
}

export default ItemDetailContainer;
