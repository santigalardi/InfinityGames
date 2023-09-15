import { Outlet as Page } from 'react-router-dom';
import NavBar from '../NavBar/NavBar';
import Footer from '../Footer/Footer';

function Layout() {
	return (
		<main>
			<NavBar />
			<Page />
			<Footer />
		</main>
	);
}

export default Layout;
