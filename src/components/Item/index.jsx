import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import './item.css';

function Item({ product }) {
	return (
		<Card className='card'>
			<Card.Img variant='top' src={product.image} className='card-img' />
			<Card.Body>
				<Card.Title>{product.name}</Card.Title>
				<Card.Text>{product.category}</Card.Text>
				<Card.Text>{product.price}</Card.Text>
				<Button variant='primary'>Ver Más</Button>
			</Card.Body>
		</Card>
	);
}

export default Item;

/* <div>
			<p>{product.name}</p>
			<img src={product.image} alt='' />
		</div> */
