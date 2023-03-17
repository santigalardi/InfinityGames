import { useParams } from 'react-router-dom';
import ItemDetailContainer from '../components/ItemDetailContainer';

function Item() {
	const params = useParams();
	const isIdRoot = Boolean(params.id);

	return (
		<div>
			<ItemDetailContainer isIdRoute={isIdRoot} Id={params.id} />
		</div>
	);
}

export default Item;
