import { createContext, useState } from 'react';

export const Context = createContext();

export function CustomContext({ children }) {
	const [productsAdded, setProductsAdded] = useState([]);

	function onAdd(product, quantity) {
		const isAlreadyAdded = isInCart(product);

		if (isAlreadyAdded) {
			const productToModify = productsAdded.find(
				(productAdded) => productAdded.id === product.id
			);

			const productModified = {
				...productToModify,
				quantity: productToModify.quantity + quantity,
			};

			setProductsAdded((prevState) =>
				prevState.map((productsAdded) =>
					productsAdded.id === product.id ? productModified : productsAdded
				)
			);
		} else {
			setProductsAdded((prevState) =>
				prevState.concat({ ...product, quantity })
			);
		}
	}

	function onRemove(id) {
		setProductsAdded((prevState) =>
			prevState.filter((product) => product.id !== id)
		);
	}

	function clearCart() {
		setProductsAdded([]);
	}

	function isInCart(product) {
		return productsAdded.some((productAdded) => productAdded.id === product.id);
	}

	const totalPrice = productsAdded.reduce(
		(acc, product) => acc + product.quantity * product.price,
		0
	);

	const totalQuantity = productsAdded.reduce(
		(acc, { quantity }) => acc + quantity,
		0
	);

	return (
		<Context.Provider
			value={{
				productsAdded,
				onAdd,
				totalQuantity,
				onRemove,
				clearCart,
				totalPrice,
			}}
		>
			{children}
		</Context.Provider>
	);
}
