import { useParams } from 'react-router-dom';
import NavBar from '../components/NavBar';
import ItemDetailContainer from '../components/ItemDetailContainer';

function ItemRoot() {
	const params = useParams();
	const isIdRoot = Boolean(params.id);

	return (
		<div>
			<NavBar />
			<ItemDetailContainer isIdRoute={isIdRoot} Id={params.id} />
		</div>
	);
}

export default ItemRoot;
