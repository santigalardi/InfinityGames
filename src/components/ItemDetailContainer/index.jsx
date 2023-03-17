import Products from '../../mocks/products';
import { useState, useEffect } from 'react';
import ItemDetail from '../ItemDetail';

function ItemDetailContainer({ isIdRoute, Id }) {
	const [products, setProducts] = useState([]);
	const [isLoading, setIsLoading] = useState(true);

	useEffect(() => {
		const productsPromise = new Promise((resolve, reject) =>
			setTimeout(() => resolve(Products), 2000)
		);

		productsPromise
			.then((response) => {
				if (isIdRoute) {
					// eslint-disable-next-line eqeqeq
					const productsFiltered = response.find((product) => product.id == Id);
					setProducts(productsFiltered);
				} else {
					setProducts(response);
				}
				setIsLoading(false);
			})
			.catch((err) => console.log(err));
	}, [Id]);

	return (
		<div className='item-detail-container'>
			{isLoading ? (
				// se muestra el mensaje de "cargando" si isLoading es verdadero
				<div>Cargando...</div>
			) : (
				// se muestra el componente hijo ItemDetail si isLoading es falso
				<ItemDetail products={products} />
			)}
		</div>
	);
}

export default ItemDetailContainer;
