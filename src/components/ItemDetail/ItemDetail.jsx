import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import { ItemCount } from '../ItemCount/ItemCount';
import { useContext, useState } from 'react';
import { Link } from 'react-router-dom';
import './itemDetail.css';
import { Button } from 'react-bootstrap';
import { Context } from '../../context/CustomContext';

function ItemDetail({ product }) {
	const { onAdd } = useContext(Context);
	const [added, setAdded] = useState(0);

	function onAddProduct(count) {
		setAdded(count);
		onAdd(product, count);
	}

	return (
		<Container>
			<Row>
				<Col lg={5} className='detail-img-container'>
					<img
						src={product.image}
						alt='img'
						className='detail-img-container-img'
					/>
				</Col>
				<Col lg={6} className='details-container'>
					<h2 className='name'>{product.name}</h2>
					<hr></hr>
					<div className='details2-container'>
						<div className='details'>
							<p className='dev'>{product.developer}</p>
							<p>Compatible PS5. {product.category}</p>
							<p>Fecha de lanzamiento: {product.release}</p>
							<p className='price'>${product.price}</p>
							{added === 0 && (
								<ItemCount
									stock={product.stock}
									onAdd={onAddProduct}
								></ItemCount>
							)}
							<div>
								{added >= 1 && (
									<Link to='/cart'>
										<Button>Ver Carrito</Button>
									</Link>
								)}
							</div>
							<p className='stock'>Stock: {product.stock}</p>
						</div>
					</div>
				</Col>
			</Row>
			<Row className='description'>
				<h5>Descripción</h5>
				<p dangerouslySetInnerHTML={{ __html: product.description }}></p>
			</Row>
		</Container>
	);
}

export default ItemDetail;
