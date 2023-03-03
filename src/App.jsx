import NavBar from './components/NavBar';
import ItemListContainer from './components/ItemListContainer';

function App() {
	return (
		<div>
			<NavBar />
			<ItemListContainer greeting={'Hola mundo'} />
		</div>
	);
}

export default App;
