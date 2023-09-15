import CartWidget from '../CartWidget/index.jsx';
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
				<Navbar.Brand href='#home' as={NavLink} to={'/'} className='nav-logo'>
					Infinity Games
				</Navbar.Brand>
				<Nav className='me-auto'>
					<Nav.Link as={NavLink} to={'/category/Acción'} className='navbar-btn'>
						Acción
					</Nav.Link>
					<Nav.Link
						as={NavLink}
						to={'/category/Carreras'}
						className='navbar-btn'
					>
						Carreras
					</Nav.Link>
					<Nav.Link
						as={NavLink}
						to={'/category/Deportes'}
						className='navbar-btn'
					>
						Deportes
					</Nav.Link>
					<Nav.Link as={NavLink} to={'/category/Lucha'} className='navbar-btn'>
						Lucha
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
