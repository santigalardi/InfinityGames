import React from 'react';
import ReactDOM from 'react-dom/client';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import { initializeApp } from 'firebase/app';
import { CustomContext } from './context/CustomContext';

import 'bootstrap/dist/css/bootstrap.min.css';
import './styles/index.css';

// Routes
import Layout from './components/Layout';
import Root from './routes/root';
import Item from './routes/item';
import ErrorPage from './routes/errorPage';
import Cart from './routes/cart';
import Checkout from './routes/checkout';

const firebaseConfig = {
	apiKey: import.meta.env.VITE_apiKey,
	authDomain: import.meta.env.VITE_authDomain,
	projectId: import.meta.env.VITE_projectId,
	storageBucket: import.meta.env.VITE_storageBucket,
	messagingSenderId: import.meta.env.VITE_messagingSenderId,
	appId: import.meta.env.VITE_appId,
};

initializeApp(firebaseConfig);

const router = createBrowserRouter([
	{
		path: '/',
		errorElement: <ErrorPage />,
		element: <Layout />,
		children: [
			{
				path: '/',
				element: <Root />,
			},
			{
				path: '/category/:id',
				element: <Root />,
			},
			{
				path: '/item/:id',
				element: <Item />,
			},
			{
				path: '/cart',
				element: <Cart />,
			},
			{
				path: '/checkout',
				element: <Checkout />,
			},
		],
	},
]);

ReactDOM.createRoot(document.getElementById('root')).render(
	<React.StrictMode>
		<CustomContext>
			<RouterProvider router={router} />
		</CustomContext>
	</React.StrictMode>
);
