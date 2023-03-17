import { Outlet as Page } from 'react-router-dom';
import NavBar from '../NavBar';
import Footer from '../Footer';

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
