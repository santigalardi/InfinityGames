import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import './itemDetail.css';

function ItemDetail({ products }) {
	return (
		<Card className='card'>
			<Card.Img variant='top' src={products.image} className='card-img' />
			<Card.Body>
				<Button variant='primary'>Añadir al carrito</Button>
			</Card.Body>
		</Card>
	);
}
export default ItemDetail;
