import CartWidget from '../CartWidget';
import { NavLink } from 'react-router-dom';

// react-bootstrap components
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import './navBar.css';

function NavBar() {
	return (
		<Navbar bg='light' variant='light'>
			<Container>
				<Navbar.Brand href='#home'>
					<NavLink to={'/'} className='nav-logo'>
						Infinity Games
					</NavLink>
				</Navbar.Brand>
				<Nav className='me-auto'>
					<Nav.Link>
						<NavLink to={'/category/Acción'} className='nav-btn'>
							Acción
						</NavLink>
					</Nav.Link>
					<Nav.Link>
						<NavLink to={'/category/Carreras'} className='nav-btn'>
							Carreras
						</NavLink>
					</Nav.Link>
					<Nav.Link>
						<NavLink to={'/category/Deportes'} className='nav-btn'>
							Deportes
						</NavLink>
					</Nav.Link>
					<Nav.Link>
						<NavLink to={'/category/Lucha'} className='nav-btn'>
							Lucha
						</NavLink>
					</Nav.Link>
				</Nav>
				<CartWidget />
			</Container>
		</Navbar>
	);
}

export default NavBar;

/* <NavDropdown title='Dropdown' id='basic-nav-dropdown'>
							<Nav.Link href='#action/3.1'>Action</Nav.Link>
							<Nav.Link href='#action/3.2'>
								Another action
							</Nav.Link>
							<Nav.Link href='#action/3.3'>Something</Nav.Link>
							<NavDropdown.Divider />
							<Nav.Link href='#action/3.4'>
								Separated link
							</Nav.Link>
						</NavDropdown> */
