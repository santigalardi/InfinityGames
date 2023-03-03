import CartWidget from '../CartWidget';
import './navBar.css';

function NavBar() {
	return (
		<div className='navbar'>
			<h1>Valor Sureño</h1>
			<ul>
				<li>
					<button>Inicio</button>
				</li>
				<li>
					<button>Productos</button>
				</li>
				<li>
					<button>Contacto</button>
				</li>
			</ul>
			<CartWidget />
		</div>
	);
}

export default NavBar;
