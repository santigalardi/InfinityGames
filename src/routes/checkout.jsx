import { useState, useContext } from 'react';
import { Context } from '../context/CustomContext';
import {
	collection,
	updateDoc,
	getFirestore,
	addDoc,
	doc,
} from 'firebase/firestore';
import '../styles/checkout.css';

const Checkout = () => {
	const { productsAdded, totalPrice, clearCart } = useContext(Context);

	const [form, setForm] = useState({
		name: '',
		email: '',
		phone: '',
	});

	const [errors, setErrors] = useState({
		name: '',
		email: '',
		phone: '',
	});

	const handleOnChange = (event) => {
		setForm({
			...form,
			[event.target.name]: event.target.value,
		});
		validate();
	};

	const handleOnSubmit = (event) => {
		event.preventDefault();
		sendOrder();
	};

	const validate = () => {
		if (!/\S+@\S+\.\S+/.test(form.email)) {
			setErrors({
				...errors,
				email: 'Email inválido',
			});
		} else setErrors({ ...errors, email: '' });
	};

	const db = getFirestore();

	const updateOrder = (productId, finalStock) => {
		const itemRef = doc(db, 'items', productId);
		updateDoc(itemRef, { stock: finalStock });
	};

	const sendOrder = () => {
		const order = {
			buyer: {
				name: form.name,
				email: form.email,
				phone: form.phone,
			},
			items: productsAdded,
			totalPrice,
		};

		const collectionRef = collection(db, 'orders');

		addDoc(collectionRef, order)
			.then(() => {
				// eslint-disable-next-line array-callback-return
				productsAdded.map((product) => {
					const finalStock = product.stock - product.quantity;
					updateOrder(product.id, finalStock);
				});
				clearCart();
				setForm({
					name: '',
					email: '',
					phone: '',
				});
			})
			.catch((error) => console.log({ error }));
	};

	return (
		<div className='form-container'>
			{productsAdded.length === 0 ? (
				<div className='cart-empty'>
					<p>¡El carrito está vacío!</p>
				</div>
			) : (
				<form onSubmit={handleOnSubmit} className='form'>
					<label htmlFor='name'>Nombre:</label>
					<input
						name='name'
						type='name'
						placeholder='Nombre'
						value={form.name}
						onChange={handleOnChange}
					/>
					<br />
					<label htmlFor='email'>Email:</label>
					<input
						name='email'
						type='email'
						placeholder='Email'
						value={form.email}
						onChange={handleOnChange}
					/>
					{errors.email && <p>{errors.email}</p>}
					<br />
					<label htmlFor='phone'>Télefono:</label>
					<input
						name='phone'
						type='phone'
						placeholder='Teléfono'
						value={form.phone}
						onChange={handleOnChange}
					/>
					<br />
					<div className='submit-container'>
						<button
							onClick={sendOrder}
							type='submit'
							disabled={
								!form.name ||
								!form.email ||
								!form.phone ||
								errors.name ||
								errors.email ||
								errors.phone
							}
						>
							Enviar
						</button>
					</div>
				</form>
			)}
		</div>
	);
};

export default Checkout;
