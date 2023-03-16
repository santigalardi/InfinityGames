import Item from '../Item';
import './itemList.css';

function ItemList({ products }) {
	return (
		<div className='products-container'>
			<ul className='products-list'>
				{products.map((product, index) => (
					<Item key={product.id} product={product} />
				))}
			</ul>
		</div>
	);
}

export default ItemList;
