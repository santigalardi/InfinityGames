import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Button from 'react-bootstrap/Button';

import './itemDetail.css';

function ItemDetail({ products }) {
	return (
		<Container>
			<Row>
				<Col lg={4} className='img-container'>
					<img src={products.image} alt='img' />
				</Col>
				<Col lg={8} className='details-container'>
					<h2 className='name'>{products.name}</h2>
					<hr></hr>
					<div className='details2-container'>
						<div className='details'>
							<p className='dev'>{products.developer}</p>
							<p>Compatible PS5. {products.category}</p>
							<p>Fecha de lanzamiento: {products.release}</p>
							<p className='price'>${products.price}</p>
							<Button className='btn-detail'>Añadir al carrito</Button>
							<p className='stock'>Stock: {products.stock}</p>
						</div>
					</div>
				</Col>
			</Row>
			<Row className='description'>
				<h5>Descripción</h5>
				<p dangerouslySetInnerHTML={{ __html: products.description }}></p>
			</Row>
		</Container>
	);
}

export default ItemDetail;
