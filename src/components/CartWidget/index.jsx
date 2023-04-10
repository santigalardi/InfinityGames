import { useContext } from 'react';
import './cartWidget.css';
import { Context } from '../../context/CustomContext';
import { Link } from 'react-router-dom';

function CartWidget() {
	const { totalQuantity } = useContext(Context);

	return (
		<Link to={'/cart'}>
			<div className='cart-widget'>
				<img src='https://static-00.iconduck.com/assets.00/shopping-cart-icon-512x462-yrde1eu0.png'></img>
				<span>{totalQuantity}</span>
			</div>
		</Link>
	);
}

export default CartWidget;
