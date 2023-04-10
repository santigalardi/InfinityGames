import { useState } from 'react';
import Button from 'react-bootstrap/Button';
import './itemCount.css';

export const ItemCount = ({ stock, onAdd }) => {
	const [count, setCount] = useState(1);

	return (
		<>
			<div className='container-itemCount'>
				<div className='itemCount-btns-container'>
					<Button
						className='itemCount-btn'
						onClick={() => setCount((prevState) => prevState - 1)}
						disabled={count < 2}
					>
						-
					</Button>
					<div className='itemCount-counter'>{count}</div>
					<Button
						className='itemCount-btn'
						onClick={() => setCount((prevState) => prevState + 1)}
						disabled={count === stock}
					>
						+
					</Button>
				</div>
				<Button className='btn-add' onClick={() => onAdd(count)}>
					Añadir al Carrito
				</Button>
			</div>
		</>
	);
};

export default ItemCount;
