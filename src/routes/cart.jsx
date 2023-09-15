import { useContext } from 'react';
import { Context } from '../context/CustomContext';
import { Container } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import removeIcon from '../assets/images/x-mark.png';
import '../styles/cart.css';

const Cart = () => {
	const { productsAdded, onRemove, clearCart, totalPrice } =
		useContext(Context);

	return (
		<Container className='cart-container'>
			{productsAdded.length === 0 ? (
				<div className='cart-empty'>
					<p>¡El carrito está vacío!</p>
				</div>
			) : (
				<>
					{productsAdded.map((product) => (
						// eslint-disable-next-line react/jsx-key
						<div className='cart-product'>
							<div className='cart-img-container'>
								<img
									src={product.image}
									alt={product.name}
									className='product-img'
								/>
							</div>
							<div className='cart-product-detail'>
								<span>Nombre: {product.name}</span>
								<span>Cantidad: {product.quantity}</span>
								<span>${product.quantity * product.price}</span>
							</div>
							<div className='remove-container'>
								<button
									onClick={() => onRemove(product.id)}
									className='btn-eliminar'
								>
									<img src={removeIcon} alt='eliminar' className='remove-img' />
								</button>
							</div>
						</div>
					))}
					<div className='btn-container'>
						<span className='cart-total'>Total: ${totalPrice}</span>
						<button onClick={clearCart} className='btn-buy'>
							Vaciar Carrito
						</button>
						<Link to={'/checkout'}>
							<button className='btn-buy'>Continuar</button>
						</Link>
					</div>
				</>
			)}
		</Container>
	);
};

export default Cart;
